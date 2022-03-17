import React, { useState } from 'react';
import PropTypes from 'prop-types';
import pic from '../icons/pic.png';
import NewListIcon from '../icons/NewListIcon.jsx';
import AddListModal from './AddListModal.jsx';

export default function Header({ addList }) {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#242424');

  return (
    <>
      {/* {open && <AddListModal addList={addList}/>} */}
      {/* <div className ="header"> */}

      <div className="profile-pic">
        <img src={pic} alt="profile-pic" />
      </div>

      <h3 className="title"> Lists</h3>

      <div className="new-list-icon">
        <NewListIcon
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

      {open && <AddListModal addList={addList} />}

      {/* </div> */}
    </>
  );
}

Header.propTypes = {
  addList: PropTypes.func.isRequired,

};
