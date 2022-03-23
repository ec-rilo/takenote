import React from 'react';
import Notes from './components/Notes.jsx';
import AddNote from './components/AddNote.jsx';
const axios = require('axios');


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'list',
      notes: []
    };

    this.updateNote = this.updateNote.bind(this);
  }

  changePage(page){
    this.setState({
      page: page
    })
  }

  updateNote(noteId, valueToUpdate, newValue) {
    const notes = this.state.notes.slice();

    for(let i = 0; i < notes.length; i++) {
      if (notes[i].id === noteId) {
        notes[i][valueToUpdate] = newValue;
        break;
      }
    }

    this.setState({
      notes
    });
  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes notes={this.state.notes} updateNote={this.updateNote}/>
    } else if (this.state.page === 'newNote'){
      return <AddNote/>
    }
  }

  componentDidMount() {
    axios.get('/api/notes')
    .then((response) => {

      const notes = [];
      response.data.forEach((note) => {
        note.selected = false;
        notes.push(note);
      });

      console.log(notes);

      this.setState({
        notes: notes
      })
    })
    .catch(() => {
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
