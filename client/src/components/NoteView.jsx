import React from 'react';

const Note = ({ note, updateSelectedNote }) => {
  return(
    <div className="noteView" onClick={() => {
      if (updateSelectedNote !== undefined) {
        updateSelectedNote(note.id, !note.selected);
      }
    }}>
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
