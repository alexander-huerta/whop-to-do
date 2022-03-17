import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpandIcon from '../icons/ExpandIcon.jsx';
import DropDown from './DropDown.jsx';

export default function ListCard({
  updateModal, removeList, editList, item,
}) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#242424');

  return (
    <div className="list-card-container">
      <div className="list-card">
        <div className="list-card-text">
          {item}
        </div>
        <div className="expand-icon">
          <ExpandIcon
            fill={color}
            onClick={() => {
              setOpen(!open);
            }}
            onMouseLeave={() => {
              setColor('#242424');
            }}
            onMouseOver={() => {
              setColor('#2FE6FF');
            }}
          />
        </div>
      </div>
      {open
        && (
        <DropDown
          item={item}
          removeList={removeList}
          editList={editList}
          updateModal={updateModal}
        />
        )}
    </div>
  );
}

ListCard.propTypes = {
  item: PropTypes.string.isRequired,
  removeList: PropTypes.func.isRequired,
  editList: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
};
