# Технічна специфікація AskMe Free (v1.5.0)

**Продукт:** AskMe Free (JS Edition)  
**Роль:** Інтелектуальний CLI-Диригент  
**Статус:** Активна розробка (Open Source)  
**Ліцензія:** MIT  
**Репозиторій:** https://github.com/MaxDevStudio/AskMe  
**Дата:** 17 березня 2026

## 1. Глобальна візія
AskMe Free — це легкий open-source CLI-оркестратор, який перетворює термінал Linux на розумного помічника та інструмент аварійного відновлення.

## 2. Що вже зроблено (Done)
- ✅ Аварійний режим у GRUB (`/etc/grub.d/40_custom`)
- ✅ Розумний пейджер `less` (прокрутка + збереження через `s`)
- ✅ Прапорець `--json` для структурованих даних
- ✅ Локалізація TTY (Alt+Shift перемикання мов)
- ✅ Двомовна документація (`/docs/en` і `/docs/ua`)
- ✅ Структура репозиторію з папками `guide/`, `install/`, `architecture/`

## 3. В процесі (In Progress)
- Динамічне завантаження плагінів з папки `/plugins/`
- Перший системний плагін (`system-info.js`)
- Оновлення README.md

## 4. План (Planned)
**Фаза 1 (Березень 2026)**  
- Повний набір базових плагінів (backup, network, log-watcher)  
- Автоматичний запуск AskMe в аварійному режимі  

**Фаза 2 (Квітень 2026)**  
- LiteDev 1.0 ISO на Debian 13 з AskMe Free  

**Фаза 3**  
- Перехід на AskMe Pro (Rust) + AI-AD

## 5. Технічний стек
- Runtime: Node.js  
- AI: Google Gemini Flash/Pro  
- Пейджер: less  
- Віртуалізація: Toolbx / Distrobox

## 6. Команда
- **MaxDev** – Візіонер та Lead Developer  
- **Gemini** – Senior Architect та документація  
- **Grok** – Strategic Lead та Creative Director