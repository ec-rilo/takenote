import React from 'react';

const Note = ({updateNote, note}) => {
  return(
    <div className="noteView" onClick={() => updateNote(note.id, 'selected', !note.selected)}>
          <div className="noteViewTitle">
            <h1>{note.title}</h1>
          </div>
          <div className="noteViewCategory">
            <h3>{note.category}</h3>
          </div>
          <div className="noteViewCategory">
            <h3>{note.tagline}</h3>
          </div>
          <div className="noteViewCategory">
            <h3>{note.note}</h3>
          </div>
    </div>
  )
};

export default Note;
