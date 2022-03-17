import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Lists from './components/Lists.jsx';
import AddListCard from './components/AddListCard.jsx';
import AddListModal from './components/AddListModal.jsx';

export default function App() {
  const [lists, setLists] = useState();
  // eslint-disable-next-line no-unused-vars
  const [modalOpen, setModalStatus] = useState(false);

  const addList = (listToAdd) => {
    // eslint-disable-next-line no-shadow
    if (listToAdd !== '') setLists((lists) => [...lists, listToAdd]);
  };

  const removeList = (listToDelete) => {
    // eslint-disable-next-line no-shadow
    setLists((lists) => lists.filter((list) => list !== listToDelete));
  };

  const editList = (listToUpdate) => {
    const listsAfterDeletion = lists.filter((list) => list !== listToUpdate);
    setLists({ lists: [...lists, listsAfterDeletion] });
  };

  let hasList;
  if (!lists) {
    hasList = (
      <AddListCard
        addList={addList}
      />
    );
  } else {
    hasList = (
      <Lists
        list={lists}
        removeList={removeList}
        editList={editList}
      />
    );
  }
  if (modalOpen) {
    return (
      <AddListModal addList={addList} />
    );
  }
  return (
    <div className="app">
      <div className="header-container ">
        <Header addList={addList} />
      </div>
      <div className="lists-container">
        {hasList}
      </div>
    </div>
  );
}
