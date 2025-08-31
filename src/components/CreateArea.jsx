import React, { useState } from "react";
//import AddIcon from "@material-ui/icons/Add";   // v4
//import Fab from "@material-ui/core/Fab";        // v4
//import Zoom from "@material-ui/core/Zoom";      // v4
// If using MUI v5 instead, use:
import AddIcon from "@mui/icons-material/Add";
import { Fab, Zoom } from "@mui/material";

function CreateArea({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const title = note.title.trim();
    const content = note.content.trim();
    if (!title && !content) return; // avoid empty notes

    onAdd({ title, content });
    setNote({ title: "", content: "" });
    setExpanded(false); // optional UX
  }

  function expand() {
    setExpanded(true);
  }

  const isEmpty = !note.title.trim() && !note.content.trim();

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        {isExpanded && (
          <input
            name="title"
            value={note.title}
            onChange={handleChange}
            placeholder="Title"
            autoFocus
          />
        )}
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab type="submit" aria-label="Add note" disabled={isEmpty}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
