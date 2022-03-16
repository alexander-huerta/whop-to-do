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
    const { lists } = this.state;
    if (listToAdd !== '') this.setState({ lists: [...lists, listToAdd] });
  }

  removeList(listToDelete) {
    const { lists } = this.state;
    this.setState({ lists: lists.filter((list) => list !== listToDelete) });
  }
  // newList

  editList(listToUpdate) {
    const { lists } = this.state;
    const listsAfterDeletion = lists.filter((list) => list !== listToUpdate);
    this.setState({ lists: [...lists, listsAfterDeletion] });
  }

  render() {
    const { lists } = this.state;

    let hasList;
    if (lists.length <= 0) {
      hasList = (
        <AddListCard
          addList={this.addList}
        />
      );
    } else {
      hasList = (
        <Lists
          list={lists}
          removeList={this.removeList}
          editList={this.editList}
        />
      );
    }

    return (
      <div className="app">
        <div className="header-container ">
          <Header addList={this.addList} />
        </div>
        <div className="lists-container">
          {hasList}
        </div>
      </div>
    );
  }
}

export default App;
