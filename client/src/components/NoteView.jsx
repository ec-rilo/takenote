import React from 'react';

const Note = ({ note, updateSelectedNote, makeHidden, makeStarred }) => {
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
      <div>
        <button type="submit" onClick={() => makeHidden(note.id)}>Hidden</button>
        <button type="submit" onClick={() => makeStarred(note.id)}>Starred</button>
      </div>
    </div>
  )
};

export default Note;
