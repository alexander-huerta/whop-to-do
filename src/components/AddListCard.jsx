import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddIcon from '../icons/AddIcon.jsx';
import AddListModal from './AddListModal.jsx';

export default function AddListCard({ addList }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#242424');

  if (!open) {
    return (
      <div className="add-list-card-container">
        <div className="add-list-card">
          <div className="add-list-card-text">
            Create a list
          </div>

          <div className="add-list-icon">
            <AddIcon
              fill={color}
              onClick={() => {
                setOpen(!open);
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
  return (
    <AddListModal addList={addList} />
  );
}

AddListCard.propTypes = {
  addList: PropTypes.func.isRequired,
};

// {open && <AddListModal addList={addList}/>}
