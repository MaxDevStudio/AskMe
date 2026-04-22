# AskMe Free Technical Specification (v1.4.0)

**Product:** AskMe Free (JS Edition)  
**Role:** Intelligent CLI Conductor  
**Status:** Active Development (Open Source)  
**License:** MIT  
**Repository:** [github.com/MaxDevStudio/AskMe](https://github.com/MaxDevStudio/AskMe)

---

## 1. Global Vision
AskMe Free is a lightweight orchestrator for Linux systems, serving as an intelligent abstraction layer between the user, the OS, and AI models. The main goal is to make terminal-based system management highly accessible and automated.

## 2. Key Features (v1.4.0)

### 2.1. Emergency Mode (GRUB Terminal Mode)
* **Implementation:** Bootloader integration via `/etc/grub.d/40_custom`.
* **Purpose:** Acts as an "emergency parachute." If the GUI (GNOME/KDE) freezes, the user can boot directly into a clean TTY (Runlevel 3), where AskMe is ready to assist in system recovery.

### 2.2. Smart Pager (Integration with `less`)
* **Purpose:** Solves the screen overflow issue in CLI environments.
* **Function:** Long AI responses are automatically piped into the `less` pager for easy scrolling and searching.
* **Logging:** Ability to instantly save the output buffer to a file using the `s` command within `less`.

### 2.3. Developer Mode (JSON Support)
* **Function:** Introduction of the `--json` flag in the CLI.
* **Purpose:** Provides structured data output, allowing the community to build custom GUIs, widgets, or plugins powered by the AskMe engine.

### 2.4. Localization & UI
* **TTY Localization:** Support for seamless language switching (Alt+Shift) in the terminal, enabling AI interaction in multiple languages even without a GUI.

## 3. Technical Stack
* **Runtime:** Node.js (ensuring compatibility across almost all Linux distributions).
* **AI Engine:** Google Gemini API (Flash/Pro).
* **Virtualization:** Support for running/testing code in isolated OCI containers via Toolbx/Distrobox to ensure system safety.

## 4. Strategic Differentiation
* **AskMe Free:** Open-source tool for sysadmins and the community (JS/Node.js).
* **AIO (AI Orchestrator):** Closed-source Enterprise Pro version built with Rust for global infrastructure management.

---
**Studio:** MaxDevStudio  
**Team:** MaxDev (Visionary), Gemini (Architect), Grok (Strategist)