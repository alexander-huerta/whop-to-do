import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import List from './components/List.jsx';
import AddListButton from './components/AddListButton.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: ['exercises', 'supermarket'],
    };
    // this.state = {
    //   lists: [],
    // };
    this.addList = this.addList.bind(this);
    this.removeList = this.removeList.bind(this);
    this.editList = this.editList.bind(this);
  }

  addList(listToAdd) {
    if(listToAdd !== '')
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
    let hasList;
    if(this.state.lists.length <= 0 ) {
      hasList =
        <AddListButton
          addList={this.addList}/>
    } else {
      hasList =
      <List
        list={this.state.lists}
        removeList={this.removeList}
        editList={this.editList}/>
      }

    return (
      <div className="app">

        <div className="header-container ">
          <Header addList={this.addList}/>
        </div>

          <div className="lists-container">
            {hasList}
          </div>

      </div>
    )
  }
}


export default App;
