import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';
import NoteView from './components/NoteView.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: [],
      selectedNote: 0
    };

    this.updateSelectedNote = this.updateSelectedNote.bind(this);
    this.changePage = this.changePage.bind(this);
    this.makeHidden = this.makeHidden.bind(this);
    this.makeStarred = this.makeStarred.bind(this);
  }

  changePage(page){
    this.setState({
      page: page
    });
  }

  makeStarred(noteId) {
    const notes = this.state.notes.slice();
    let note;

    for(let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId) {
        note = notes[i];
        break;
      }
    }

    if (!note.hidden) {
      note.starred ? note.starred = false : note.starred = true;
    }
  }

  makeHidden(noteId) {
    const notes = this.state.notes.slice();
    let note;

    for(let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId) {
        note = notes[i];
        break;
      }
    }

    if (!note.starred) {
      note.hidden ? note.hidden = false : note.hidden = true;
    }
  }



  updateSelectedNote(noteId, newValue) {
    const notes = this.state.notes.slice();
    let note;

    for(let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId) {
        notes[i].selected = newValue;
        note = notes[i];
        break;
      }
    }

    if (!note.selected) {
      note = 0;
      this.changePage('list');
    }

    Promise.resolve(this.setState({
      notes,
      selectedNote: note
    }))
    .then(() => {
      if (note.selected) {
        this.changePage('selected')
      }
    })
    .catch((err) => {
      console.error(err);
    })
  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes notes={this.state.notes} updateSelectedNote={this.updateSelectedNote}/>
    } else if (this.state.page === 'newNote'){
      return <AddNote/>
    } else if (this.state.page === 'selected') {
      return (<NoteView note={this.state.selectedNote} updateSelectedNote={this.updateSelectedNote} makeHidden={this.makeHidden} />);
    }
  }

  componentDidMount() {
    axios.get('/api/notes')
    .then((response) => {

      const notes = [];
      response.data.forEach((note) => {
        note.selected = false;
        note.hidden = false;
        note.starred = false;
        notes.push(note);
      });

      console.log(notes);

      this.setState({
        notes: notes
      })
    })
    .catch((err) => {
      console.error(err);
    });
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <div className="nav">
          <span className="title"
            onClick={() => this.changePage('list')}>
            Take Note!
          </span>
          <span className={this.state.page === 'list'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('list')}}>
            All Notes
          </span>
          <span className={this.state.page === 'newNote'
            ? 'nav-entry-selected button'
            : 'nav-entry-unselected button'}
            onClick={() => {this.changePage('newNote')}}>
            New Note
          </span>
          </div>
        </div>
        <div className="content">
          {this.pageRouter()}
        </div>

      </div>
    )
  }
}

export default App;
