# 🛠 AskMe Installation Guide (For Beginners)

This guide will help you install AskMe on Linux (Ubuntu/Debian) from scratch. Even if you've never used a terminal before, just follow these steps one by one.

---

## Step 1: Install Required Software
To run AskMe, you need two things: Node.js (the engine that runs our code) and git (the program to download the code).

Open your terminal and paste this command:
sudo apt update && sudo apt install -y nodejs npm git

---

## Step 2: Download AskMe
Now we will download the project from GitHub to your computer.

1. Go to the folder where you want to keep your projects (e.g., Documents):
cd ~/Documents

2. Download the project:
git clone https://github.com/MaxDevStudio/AskMe.git

3. Enter the project folder:
cd AskMe

---

## Step 3: Install Internal Modules
The project needs to download libraries to interact with the AI.
npm install

---

## Step 4: Get your AI API KEY
AskMe works via Gemini (AI by Google). It is free (within limits).

1. Go to Google AI Studio: https://aistudio.google.com/app/apikey
2. Click "Create API key".
3. Copy the long code you receive.

Now go back to the terminal. We need to create a .env file to store this key:
cp .env.example .env
nano .env

In the file, find the line GEMINI_API_KEY=your_key_here. Delete your_key_here and paste your actual key. Press Ctrl+O, then Enter (to save) and Ctrl+X (to exit).

---

## Step 5: Create the 'ask' Command (Global Call)
We will make it so you can type 'ask' in any folder, not just where you downloaded the project.

sudo ln -s $(pwd)/bin/ask.js /usr/local/bin/ask
sudo chmod +x $(pwd)/bin/ask.js

---

## Step 6: Verification
Simply type in your terminal:
ask "Hello! Who are you?"

If you see a response from the AI — congratulations! You have installed your own AI tool.

---

## 🗑 How to Uninstall
If you want to remove the program:
1. sudo rm /usr/local/bin/ask (removes the shortcut)
2. Delete the AskMe folder from your Documents.