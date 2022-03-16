import React from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Lists from './components/Lists.jsx';
import AddListCard from './components/AddListCard.jsx';


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
        <AddListCard
          addList={this.addList}/>
    } else {
      hasList =
      <Lists
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
