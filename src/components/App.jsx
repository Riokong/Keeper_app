import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

// tiny id helper (no extra deps)
const makeId = () => Date.now().toString(36) + Math.random().toString(36).slice(2);

function App() {
  // hydrate from localStorage once
  const [notes, setNotes] = useState(() => {
    try {
      const raw = localStorage.getItem("keeper.notes");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // persist on change
  useEffect(() => {
    localStorage.setItem("keeper.notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = useCallback((newNote) => {
    // guard: ignore empty notes if CreateArea missed it
    const title = (newNote.title || "").trim();
    const content = (newNote.content || "").trim();
    if (!title && !content) return;

    setNotes(prev => [
      // newest first (optional)
      { id: makeId(), title, content },
      ...prev,
    ]);
  }, []);

  const deleteNote = useCallback((id) => {
    setNotes(prev => prev.filter(n => n.id !== id));
  }, []);

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((n) => (
        <Note
          key={n.id}
          id={n.id}
          title={n.title}
          content={n.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
