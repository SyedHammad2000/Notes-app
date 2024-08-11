import React, { useState } from "react";
import Notesfor from "./component/Notesfor";
import Noteslist from "./component/Noteslist";
import "./App.css";
// notes app
const App = () => {
  const [notes, setnotes] = useState([]);
  const addnote = (note) => {
    setnotes([note, ...notes]);
    console.log(note);
  };
  const removenote = (id) => {
    setnotes(notes.filter((note) => note.id !== id));
    console.log(id);
  };

  return (
    <div className="app">
      <div>
        <Notesfor addnote={addnote} />
      </div>
      <div>
        <Noteslist removenote={removenote} notes={notes} />
      </div>
    </div>
  );
};

export default App;
