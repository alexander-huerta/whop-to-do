import React from 'react';
import ListCard from './ListCard.jsx';

const Lists = ({list, removeList, editList}) => {
  return (
    <>
      {list.map((item) => (
        <ListCard
          item={item}
          removeList={removeList}
          editList={editList}
       />
      ))}
    </>
  )
}

export default Lists;