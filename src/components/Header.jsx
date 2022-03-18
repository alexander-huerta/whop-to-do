import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProfilePicIcon from '../icons/ProfilePicIcon.jsx';
import NewListIcon from '../icons/NewListIcon.jsx';

export default function Header({ updateModal }) {
  const [color, setColor] = useState('#242424');

  return (
    <>
      <div className="profile-pic">
        <ProfilePicIcon />
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
