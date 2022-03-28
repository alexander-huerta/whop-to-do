import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Lists from './components/Lists.jsx';
import AddListCard from './components/AddListCard.jsx';
import AddListModal from './components/AddListModal.jsx';

export default function App() {
  const [lists, setLists] = useState([]);
  const [modalOpen, setModalStatus] = useState(false);
  const [inputString, setInputValue] = useState();

  const addList = (listToAdd) => {
    if (listToAdd !== '') setLists((lists) => [...lists, listToAdd]);
  };

  const removeList = (listToDelete) => {
    setLists((lists) => lists.filter((list) => list !== listToDelete));
  };

  const editList = (listToUpdate) => {
    const listsAfterDeletion = lists.filter((list) => list !== listToUpdate);
    setLists({ lists: [...lists, listsAfterDeletion] });
  };

  const updateModal = (val) => {
    if (val) setInputValue(val);
    setModalStatus(!modalOpen);
  };

  let hasList;
  if (lists.length <= 0) {
    hasList = (
      <AddListCard
        addList={addList}
        updateModal={updateModal}
      />
    );
  } else {
    hasList = (
      <Lists
        list={lists}
        removeList={removeList}
        editList={editList}
        updateModal={updateModal}
      />
    );
  }

  if (modalOpen) {
    return (
      <AddListModal
        addList={addList}
        updateModal={updateModal}
        item={inputString}
      />
    );
  }

  return (
    <div className="app">

      <div className="header-container ">
        <Header
          addList={addList}
          updateModal={updateModal}
        />
      </div>

      <div className="lists-container">
        {hasList}
      </div>

    </div>
  );
}
