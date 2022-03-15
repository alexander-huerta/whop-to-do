import React, { useState } from 'react';
import ProfilePicIcon from '../icons/ProfilePicIcon.jsx';
import NewListIcon from '../icons/NewListIcon.jsx';
import AddListModal from './AddListModal.jsx';

const Header = ({addList}) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#242424')

  return (
    <>
    {/* {open && <AddListModal addList={addList}/>} */}
      <div className ="header">

        <div className="profile-pic">
          <ProfilePicIcon />
        </div>

        <h3 className="title"> Lists</h3>

          <div className="new-list-icon">
            <NewListIcon
              fill={color}
              onClick={() => {
                setOpen(!open)
                setColor('#2FE6FF')
              }}
              onMouseLeave={() => {
                setColor('#242424')}}
              />
          </div>

        {open && <AddListModal addList={addList}/>}

      </div>
    </>
  )
}

export default Header;




