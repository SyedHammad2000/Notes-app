import React from "react";
import Noteitem from "./Noteitem";
import "../App.css"

const Noteslist = ({notes,removenote}) => {
  return (
    <div className="note-list">
      {notes.map((note)=>{
        return(

            
            
            <Noteitem note={note} key={note.id} removenote={removenote}/>
            )
        })
    }
    </div>
  );
};

export default Noteslist;
