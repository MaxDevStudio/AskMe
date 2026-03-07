async function getModels() {
  const key = process.env.GEMINI_API_KEY;
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${key}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log("Доступні моделі:");
  data.models.forEach(m => console.log("- " + m.name.replace('models/', '')));
}
getModels();