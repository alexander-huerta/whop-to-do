import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewListIcon from '../icons/NewListIcon.jsx';
import profilePic from '../icons/gary.png';

export default function Header({ updateModal }) {
  const [color, setColor] = useState('#242424');

  return (
    <>
      <div className="profile-pic-alt">
        <img src={profilePic} alt="Profile Pic" />
      </div>

      <h3 className="title"> Lists </h3>

      <div className="new-list-icon">
        <NewListIcon
          fill={color}
          onClick={() => {
            setColor('#2FE6FF');
          }}
          onMouseLeave={() => {
            updateModal();
            setColor('#242424');
          }}
        />
      </div>
    </>
  );
}

Header.propTypes = {
  updateModal: PropTypes.func.isRequired,
};
