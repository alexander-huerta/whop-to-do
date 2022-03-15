import React, { useState } from 'react';
import ProfilePicIcon from '../icons/ProfilePicIcon.jsx';
import NewListIcon from '../icons/NewListIcon.jsx';
import AddListModal from './AddListModal.jsx';


const Header = ({addList}) => {
  const [open, setOpen] = useState(false);


  return (
    <div className ="header-wrapper">
      <div className="profile-pic">
      <ProfilePicIcon />
      </div>

      <h1 className="title"> Lists</h1>
        <div className="new-list-icon">
          <NewListIcon
            onClick={() => {
              setOpen(!open)
            }}
            />
        </div>

      {open && <AddListModal addList={addList}/>}
    </div>
  )
}

export default Header;




