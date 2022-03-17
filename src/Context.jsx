import React, { useContext, useState } from 'react';
import AddListCard from './components/AddListCard.jsx';
import Lists from './components/Lists.jsx';

export default function Context({children}) {
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





  const value = { addList, removeList, editList };

  return (
    <Context.Provier value={value}>
      {children}
    </Context.Provier>
  );
}
