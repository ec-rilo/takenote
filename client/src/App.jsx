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
  }

  changePage(page){
    this.setState({
      page: page
    })
  }

  pageRouter(){
    if(this.state.page === 'list'){
      return <Notes notes={this.state.notes}/>
    } else if (this.state.page === 'newNote'){
      return <AddNote/>
    }
  }

  componentDidMount() {
    axios.get('/api/notes')
    .then((response) => {
      this.setState({
        notes: response.data
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
