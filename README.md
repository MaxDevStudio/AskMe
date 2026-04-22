# 🤖 AskMe — Intelligent CLI Conductor

**AskMe Free** is a lightweight open-source AI orchestrator for Linux. It transforms your standard terminal into a smart assistant, helping developers analyze code, debug logs, and automate routines even in emergency modes (TTY).

---

## 🚀 Key Features
* **Global Access:** The `ask` command works from any directory in your system.
* **Pipe Support:** Feed any command output directly to the AI: `cat server.log | ask "find the root cause of the error"`.
* **Smart Pager:** Long responses are automatically opened in `less` for easy scrolling.
* **Emergency Mode:** Can be launched directly from GRUB for system recovery tasks.
* **AI-Powered:** Optimized for Google Gemini 2.5 Flash.

---

## 📖 Documentation & Quick Start

Check out our detailed guides to get started:

1.  **[Installation Guide (EN)](./install/INSTALL_EN.md)** — how to set everything up from scratch.
2.  **[User Guide (EN)](./docs/USER_GUIDE_EN.md)** — essential commands and tips.
3.  **[Project Structure (EN)](./docs/PROJECT_STRUCTURE_EN.md)** — for those who want to dive into the code.

---

## 🛠 Technical Stack
* **Language:** JavaScript (Node.js) — for the Free version.
* **AI Engine:** Google Gemini SDK.
* **OS:** Linux (Ubuntu/Debian recommended).

---

## 👥 Project Team
* **MaxDev** — Visionary & Lead Developer.
* **Gemini** — Senior Architect.
* **Grok** — Strategic Lead.

---

**License:** MIT  
**Status:** v1.5.0 (Active Development)  
**GitHub:** [MaxDevStudio/AskMe](https://github.com/MaxDevStudio/AskMe)