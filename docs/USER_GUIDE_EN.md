# 📖 AskMe User Guide

This document will help you understand how to use AskMe effectively in your daily work.

---

## 🚀 Basic Commands

1. Simple query:
ask "how to update the kernel in Ubuntu?"

2. File analysis (using "pipes"):
cat script.sh | ask "what does this script do?"

3. Log analysis:
tail -n 50 /var/log/syslog | ask "why did the service crash?"

---

## 🛠 Special Features

1. Smart Pager (less):
If the AI's response is too long, AskMe automatically opens it in scroll mode.
- Use the arrow keys on your keyboard to move up/down.
- Press 'q' to exit.
- Press 's' to save the text to a file (works in TTY mode).

2. JSON Output:
ask "list files" --json
This is useful for developers who want to pass the AI's response into another program.

3. System Command Mode (Experimental):
Start your request with "cmd: " to focus on performing actions.
Example: ask "cmd: make a backup of the Documents folder"

---

## ⌨️ Working in Emergency Mode (TTY)
AskMe is optimized to work even when the Linux graphical interface (GUI) fails to load.
- Alt + Shift — toggle keyboard layout (if configured in your system).
- The program does not require a mouse; all controls are keyboard-based.