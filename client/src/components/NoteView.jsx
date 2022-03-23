import React from 'react';

const Note = (props) => {
  return(
    <div className="noteView">
          <div className="noteViewTitle">
            <h1>{props.note.title}</h1>
          </div>
          <div className="noteViewCategory">
            <h3>{props.note.category}</h3>
          </div>
          <div className="noteViewCategory">
            <h3>{props.note.tagline}</h3>
          </div>
          <div className="noteViewCategory">
            <h3>{props.note.note}</h3>
          </div>
    </div>
  )
};

export default Notes;
