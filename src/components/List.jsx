import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = ({list, removeList}) => {
  return (
    <div classNAme="list-container">
      {list.map((item) => (
        <ListEntry
          item={item}
          removeList={removeList}
       />
      ))}
    </div>
  )
}

export default List;