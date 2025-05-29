# MelodyBox 🎹

A simple virtual piano made with **vanilla JavaScript** — no frameworks or libraries.  
Play piano notes, record your melodies, and save them locally to revisit anytime.

---

## Features

- **Play Notes:** Click piano keys (Do, Re, Mi, Fa, Sol, La, Si) to hear sounds fetched from a backend API.  
- **Record Melodies:** Start typing your melody by clicking notes — your sequence is shown live.  
- **Save Melodies:** Add a title and save your recorded melodies to the backend server (using REST API).  
- **View & Delete Saved Melodies:** Double-click a saved melody to reveal a delete button, so you can remove it if you want.  
- **Responsive UI:** Simple and intuitive user interface with dynamic updates.

---

## How It Works

1. **Loading Note Sounds:**  
   On page load, the app fetches notes data from the backend API (`http://localhost:3000/notes`). For each note (do, re, mi, etc.), it adds click listeners that play the corresponding sound file.

2. **Recording Melodies:**  
   When you click "Start Typing," you can build a melody by clicking notes. Your sequence is appended live in a paragraph.

3. **Saving Melodies:**  
   Click "Save," enter a title, and save your melody to the backend API (`http://localhost:3000/melodies`). The saved melody list updates dynamically.

4. **Viewing and Deleting Melodies:**  
   Melodies are fetched from `http://localhost:3000/melodies` and shown on the page with their titles and content. Double-click a melody to reveal a delete button. Deleting removes it from the UI and backend.

---

## Getting Started

1. Make sure you have a backend server running at `http://localhost:3000` with these endpoints:  
   - `/notes` — returns JSON with note sound URLs  
   - `/melodies` — supports GET (fetch), POST (save), DELETE (remove by id)

2. Open `index.html` (or your main HTML file) in a browser.

3. Enjoy playing, recording, and saving your melodies!

---

## Why I Built This

I made this project to practice vanilla JavaScript, async operations, and REST API interactions — all while having fun making music! It’s lightweight, easy to use, and a nice way to create simple melodies in your browser.

---

## License

This project is open source and free to use!

---

Thanks for checking out MelodyBox! 🎶  
Feel free to ⭐ the repo if you like it!
