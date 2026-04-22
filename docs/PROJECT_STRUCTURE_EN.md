# 📂 AskMe Free Project Structure

Description of file organization for developers and active users.

---

## Current Tree Structure (v1.5.x)

AskMe/
├── bin/
│   ├── ask.js              # Main CLI executable
│   └── list-models.js      # Utility to check available Gemini models
├── docs/
│   ├── USER_GUIDE_UA.md    # User Guide (UA)
│   └── USER_GUIDE_EN.md    # User Guide (EN)
├── install/
│   ├── INSTALL_UA.md       # Installation Instructions (UA)
│   └── INSTALL_EN.md       # Installation Instructions (EN)
├── scripts/
│   ├── status.sh           # Auxiliary system check script
│   └── hello-system.sh     # Test script
├── .env.example            # Template for your API keys
├── .gitignore              # List of files to ignore for GitHub
├── package.json            # Node.js dependencies
├── README.md               # Main GitHub project page
└── SPEC_FREE_UA.md         # Free version technical specification

---

## Purpose of Main Folders

1. /bin — Contains the "brains" of the program. This is where the `ask` command points.
2. /docs — Detailed documentation on how to use the software.
3. /install — Everything required for the first-time setup.
4. /scripts — A set of Bash scripts that AskMe can suggest for automation tasks.

---

## Note for Developers
When adding new JS files to /bin, always add the `#!/usr/bin/env node` line at the very top and make the file executable using `chmod +x`.