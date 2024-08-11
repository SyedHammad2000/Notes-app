import React from 'react'
import "../App.css"

const Noteitem = ({note,removenote}) => {
  return (
    <div className="note-item">

      <h1>{note.title}</h1>
      <h1>{note.content}</h1>
      <button onClick={() => removenote(note.id)}>Delete</button>

    </div>
  )
}

export default Noteitem