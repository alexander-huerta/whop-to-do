import React from 'react';
import ListEntry from './ListEntry.jsx';

const List = ({list, removeList}) => {
  return (
    <div className="listsWrapper">
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