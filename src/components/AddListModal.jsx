/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '../icons/CancelIcon.jsx';
import DoneIcon from '../icons/DoneIcon.jsx';

export default function AddListModal({ addList, item }) {
  const [open, setOpen] = useState(true);
  const [listInputString, setString] = useState('');
  const [cancelColor, setCancelColor] = useState('#505050');
  const [doneColor, setDoneColor] = useState('#505050');

  return (
    <div
      show={open}
      className="add-list-modal-container"
    >
      <div className="modal-buttons">
        <div className="cancel">
          <CancelIcon
            fill={cancelColor}
            onClick={() => {
              setCancelColor('#2FE6FF');
              setOpen(false);
            }}
            onMouseLeave={() => setCancelColor('#505050')}
            onMouseOver={() => setCancelColor('#242424')}
          />
        </div>

        <div className="done">
          <DoneIcon
            fill={doneColor}
            onClick={() => {
              setDoneColor('#2FE6FF');
              addList(listInputString);
              setOpen(false);
            }}
            onMouseLeave={() => setDoneColor('#505050')}
            onMouseOver={() => setDoneColor('#242424')}
          />
        </div>

      </div>
      <div className="modal-input">
        <input
          type="text"
          placeholder="List title"
          value={item}
          onChange={(e) => setString(e.target.value)}
        />
      </div>
    </div>
  );
}

AddListModal.propTypes = {
  item: PropTypes.string.isRequired,
  addList: PropTypes.func.isRequired,
};
