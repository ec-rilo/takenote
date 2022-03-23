import React from 'react';
import NoteView from './NoteView.jsx';

const SmallNote = ({ note, updateNote }) => (
  <div className="note" onClick={() => updateNote(note.id, 'selected', !note.selected)}>
    <div className="note-title"><h3>{note.title}</h3></div>
    <div className="note-category"><h4>{note.category}</h4></div>
    <div className="note-desc">{note.note}</div>
  </div>
);

// class Notes extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isClicked: false
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(noteId) {

//   }

//   render() {
//     const isClicked = this.state.isClicked;
//     let Note;
//     if (isClicked) {
//       Note = <SmallNote />
//     }

//     return (
//       <div>
//         <h1>My Notes</h1>
//           <div className="notes-list">
//             {this.props.notes.map((note, index) => {
//               return (
//                 <div key={index}>
//                   {!note.selected ? <SmallNote note={note} updateNote={this.props.updateNote}/> : <NoteView note={note} updateNote={this.props.updateNote}/>}
//                 </div>
//               );
//             })}
//           </div>
//       </div>
//     );
//   }
// }

const Notes = ({ notes, updateNote }) => {
  return (
    <div>
      <h1>My Notes</h1>
        <div className="notes-list">
          {notes.map((note, index) => {
            return (
              <div key={index}>
                {!note.selected ? <SmallNote note={note} updateNote={updateNote}/> : <NoteView note={note} updateNote={updateNote}/>}
              </div>
            );
          })}
        </div>
    </div>
  )
}

export default Notes;