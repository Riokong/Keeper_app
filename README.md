# 📝 Keeper App

A lightweight **note-taking app** built with React and Material-UI.  
It lets you create and delete notes, with everything stored locally in your browser using `localStorage`.  

---

## ✨ Features
- ➕ **Add notes** with a title and content
- 🗑 **Delete notes** individually
- 💾 **Auto-save** using browser `localStorage` (notes persist after refresh)
- 🎨 **Material-UI design** with animated FAB button
- ⚡ Built with modern React Hooks (`useState`, `useEffect`, `useCallback`)

---

## 🚀 Demo
![screenshot](docs/screenshot.png)  

---

## 🛠 Tech Stack
- [React](https://react.dev/) (functional components + hooks)
- [Material-UI v5](https://mui.com/) (for UI icons and components)
- LocalStorage API (for persistence)

---

## 📦 Installation

Clone this repo and install dependencies:

```bash
git clone https://github.com/Riokong/keeper-app.git
cd keeper-app
npm install
Run in development mode:

bash
Copy code
npm start
Build for production:

bash
Copy code
npm run build
📂 Project Structure
css
Copy code
src/components/
 ├── App.jsx          # Main app logic (state + data flow)
 ├── CreateArea.jsx   # Input form for new notes
 ├── Note.jsx         # Single note card
 ├── Header.jsx       # App header
 ├── Footer.jsx       # App footer
 ├── index.js         # Entry point
 
🧩 Data Flow
css
Copy code
App.jsx
  ├── Header.jsx
  ├── CreateArea.jsx  (calls onAdd → App.addNote)
  ├── Note.jsx        (calls onDelete → App.deleteNote)
  └── Footer.jsx
App.jsx owns the notes state and syncs with localStorage.

CreateArea.jsx passes new notes up to App via onAdd.

Note.jsx requests deletion via onDelete.

Header/Footer are presentational.

🤝 Contributing
Pull requests are welcome!
If you’d like to improve styling, add features (like editing notes, pinning, or search), feel free to fork and submit a PR.

📜 License
MIT License © 2025 Riokong