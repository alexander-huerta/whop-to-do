import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import List from './components/List.jsx';
import CreateListEntryModal from './components/CreateListEntryModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
    };
    this.addList = this.addList.bind(this);
    this.removeList = this.removeList.bind(this);
    this.editList = this.editList.bind(this);
  }

  addList(listToAdd) {
    this.setState({ lists: [...this.state.lists, listToAdd] })
  }

  removeList(listToDelete) {
    this.setState({lists: this.state.lists.filter((list) => list !== listToDelete)});
  }

  editList(listToUpdate, newList) {
    const listsAfterDeletion = this.state.lists.filter((list) => list !== listToUpdate)
    this.setState({ lists: [...this.state.lists, listsAfterDeletion] })
  }

  render () {

    if(this.state.lists.length <= 0){

      return (
        <div className="App">
         <Header addList={this.addList}/>
         <CreateListEntryModal addList={this.addList}/>
        </div>
      )

    } else {

      return (
        <div className="App">
          <Header addList={this.addList}/>
          <List list={this.state.lists} removeList={this.removeList}/>
        </div>
      )
    }
  }
}



export default App;
