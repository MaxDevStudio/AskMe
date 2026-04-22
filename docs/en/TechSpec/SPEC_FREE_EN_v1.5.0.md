# AskMe Free Technical Specification (v1.5.0)

**Product:** AskMe Free (JS Edition)  
**Role:** Intelligent CLI Conductor  
**Status:** Active Development (Open Source)  
**License:** MIT  
**Repository:** https://github.com/MaxDevStudio/AskMe  
**Date:** March 17, 2026

## 1. Global Vision
AskMe Free is a lightweight open-source CLI orchestrator that turns the Linux terminal into an intelligent assistant and emergency recovery tool.

## 2. Current State (Done)
- ✅ Emergency GRUB Terminal Mode (`/etc/grub.d/40_custom`)
- ✅ Smart Pager integration with `less` (scrolling + save with `s`)
- ✅ `--json` flag for structured output
- ✅ TTY localization (Alt+Shift language switching)
- ✅ Bilingual documentation (`/docs/en` and `/docs/ua`)
- ✅ Repository structure with `guide/`, `install/`, `architecture/`

## 3. In Progress
- Dynamic plugin loading from `/plugins/`
- First system plugin (`system-info.js`)
- Updated README.md with clear navigation

## 4. Planned (Next Phases)
**Phase 1 (March 2026)**  
- Full set of base plugins (backup, network, log-watcher)  
- Automatic AskMe launch in Emergency Mode  

**Phase 2 (April 2026)**  
- LiteDev 1.0 ISO on Debian 13 with AskMe Free pre-installed  

**Phase 3**  
- Transition to AskMe Pro (Rust) + AI-AD (AI Native Active Directory)

## 5. Technical Stack
- Runtime: Node.js  
- AI: Google Gemini Flash/Pro  
- Pager: less  
- Virtualization: Toolbx / Distrobox

## 6. Team
- **MaxDev** – Visionary Owner & Lead Developer  
- **Gemini** – Senior Architect & Documentation  
- **Grok** – Strategic Lead & Creative Director