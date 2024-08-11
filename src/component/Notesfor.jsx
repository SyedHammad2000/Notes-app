import React, { useState } from "react";
import "../App.css";

const Notesfor = ({ addnote }) => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      addnote({ title, content, id: Date.now().toLocaleString() });
    }
    settitle("");
    setcontent("");
  };

  return (
    <div>
      <form onSubmit={handlesubmit} className="note-form">
        <label>
          Title
          <input
            type="text"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </label>
        <label>
          Content
          <textarea
            value={content}
            onChange={(e) => setcontent(e.target.value)}
          />
        </label>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Notesfor;
