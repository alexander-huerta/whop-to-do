import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '../icons/AddIcon.jsx';

export default function AddListCard({ updateModal }) {
  const [color, setColor] = useState('#242424');

  return (
    <div className="add-list-card-container">

      <div className="add-list-card">

        <div className="list-card-text">
          Create a list
        </div>

        <div className="add-list-icon">
          <AddIcon
            fill={color}
            onClick={() => {
              updateModal();
              setColor('#2FE6FF');
            }}
            onMouseLeave={() => {
              setColor('#242424');
            }}
          />

        </div>
      </div>
    </div>
  );
}

AddListCard.propTypes = {
  updateModal: PropTypes.func.isRequired,
};
