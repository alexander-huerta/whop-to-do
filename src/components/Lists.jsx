import React from 'react';
import PropTypes from 'prop-types';
import ListCard from './ListCard.jsx';

function Lists({ list, removeList, editList }) {
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
  );
}

Lists.propTypes = {
  list: PropTypes.arrayOf.isRequired,
  removeList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
};

export default Lists;
