/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pic from '../icons/pic.png';
import NewListIcon from '../icons/NewListIcon.jsx';

export default function Header({ updateModal, addList }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#242424');

  return (
    <>
      <div className="profile-pic">
        <img src={pic} alt="profile-pic" />
      </div>

      <h3> Lists</h3>

      <div className="new-list-icon">
        <NewListIcon
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
    </>
  );
}

Header.propTypes = {
  addList: PropTypes.func.isRequired,
  updateModal: PropTypes.func.isRequired,
};
