import React from 'react';

const Notes = (props) => {
  return (
    <div>
      <h1>My Notes</h1>
        <div className="notes-list">
          {props.notes.map((note, index) => {
            return (
              <div className="note" key={index}>
                <div className="note-title"><h3>{note.title}</h3></div>
                <div className="note-category"><h4>{note.category}</h4></div>
                <div className="note-desc">{note.note}</div>
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Notes;