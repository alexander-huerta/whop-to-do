import React from 'react';
import PropTypes from 'prop-types';
import ListCard from './ListCard.jsx';

export default function Lists({
  updateModal, removeList, editList, list,
}) {
  return (
    <>
      {list.map((item) => (
        <ListCard
          item={item}
          key={item}
          removeList={removeList}
          editList={editList}
          updateModal={updateModal}
        />
      ))}
    </>
  );
}

Lists.propTypes = {
  list: PropTypes.arrayOf.isRequired,
  removeList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
};
