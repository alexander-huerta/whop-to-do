import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = ({list, removeList, editList}) => {
  return (
    <div classNAme="list-container">
      {list.map((item) => (
        <ListEntry
          item={item}
          removeList={removeList}
          editList={editList}
       />
      ))}
    </div>
  )
}

export default List;