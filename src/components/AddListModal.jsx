import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CancelIcon from '../icons/CancelIcon.jsx';
import DoneIcon from '../icons/DoneIcon.jsx';

export default function AddListModal({ updateModal, addList, item }) {
  const [listInputString, setString] = useState(item);
  const [cancelColor, setCancelColor] = useState('#505050');
  const [doneColor, setDoneColor] = useState('#505050');

  return (
    <div className="add-list-modal-container">

      <div className="modal-buttons">

        <div className="cancel">
          <CancelIcon
            fill={cancelColor}
            onClick={() => {
              setCancelColor('#2FE6FF');
              updateModal();
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
              updateModal();
            }}
            onMouseLeave={() => setDoneColor('#505050')}
            onMouseOver={() => setDoneColor('#242424')}
          />
        </div>
      </div>

      <form className="modal-input">
        <input
          type="text"
          defaultValue={listInputString}
          placeholder="List title"
          onChange={(e) => {
            setString(e.target.value);
          }}
        />
      </form>

    </div>
  );
}

AddListModal.propTypes = {
  item: PropTypes.string.isRequired,
  addList: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
};
