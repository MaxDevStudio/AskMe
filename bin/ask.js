require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const { exec } = require("child_process"); // Для виконання системних команд

async function run() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
      console.error("❌ Помилка: Встановіть GEMINI_API_KEY в .env або системних змінних.");
      return;
  }
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ 
      model: "gemini-2.5-flash", // Використовуємо 2.5 Flash, бо він розумніший
      systemInstruction: "Ти AskMi - розумний CLI диспетчер. Ти допомагаєш Максу керувати AIOS (LiteDev/PowerDev) та розробляти код. Якщо користувач просить виконати дію (бекап, очищення), ти маєш пропонувати відповідні bash команди або скрипти з папки ~/WS/AskMi/scripts/."
  });

  let prompt = process.argv.slice(2).join(" ");
  
  if (!process.stdin.isTTY) {
    const pipedData = fs.readFileSync(0, "utf-8");
    prompt += "\n\nОсь дані з термінала:\n" + pipedData;
  }

  if (!prompt) return console.log("💡 Використання: ask 'питання' або cat file | ask 'проаналізуй'");

  // --- Зачаток Диспетчера ---
  if (prompt.startsWith("cmd: ")) {
      const commandAction = prompt.replace("cmd: ", "").trim();
      // Тут в майбутньому буде логіка виклику твоїх скриптів з папки scripts/
      console.log(`\n🤖 AskMi: Зрозумів команду на дію: "${commandAction}". (Функція виклику скриптів в розробці)`);
      prompt = `Користувач хоче виконати системну дію: ${commandAction}. Напиши bash скрипт або команду, яка це зробить безпечно.`;
  }

  try {
    process.stdout.write("🤖 Аналізую...");
    const result = await model.generateContent(prompt);
    console.log("\r" + " ".repeat(20) + "\r🤖 AskMi: \n" + result.response.text());
  } catch (e) {
    console.error("\n❌ Помилка:", e.message);
  }
}
run();
