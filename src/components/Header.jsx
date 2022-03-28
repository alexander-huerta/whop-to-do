import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewListIcon from '../icons/NewListIcon.jsx';
import ProfilePicIcon from '../icons/ProfilePicIcon.jsx';

export default function Header({ updateModal }) {
  const [color, setColor] = useState('#242424');
  const [newListClicked, setClicked] = useState(false);

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
            setClicked(true);
          }}
          onMouseLeave={() => {
            setColor('#242424');
            if (newListClicked) updateModal();
          }}
        />
      </div>
    </>
  );
}

Header.propTypes = {
  updateModal: PropTypes.func.isRequired,
};
