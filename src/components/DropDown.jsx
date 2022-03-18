/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '../icons/EditIcon.jsx';
import DeleteIcon from '../icons/DeleteIcon.jsx';

export default function DropDown({
  updateModal, removeList, editList, item,
}) {
  const [editColor, setEditColor] = useState('#242424');
  const [deleteColor, setDeleteColor] = useState('#242424');

  return (
    <div className="dropdown">
      <div className="edit">
        <EditIcon
          fill={editColor}
          onClick={() => {
            setEditColor('#2FE6FF');
            updateModal(item);
            removeList(item);
          }}
          onMouseLeave={() => setEditColor('#242424')}
        />
      </div>
      <div className="delete">
        <DeleteIcon
          fill={deleteColor}
          onClick={() => {
            setDeleteColor('#FF3333');
            removeList(item);
          }}
          onMouseLeave={() => setDeleteColor('#242424')}
        />
      </div>
    </div>
  );
}

DropDown.propTypes = {
  item: PropTypes.string.isRequired,
  removeList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
};
