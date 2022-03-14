import React, { useState } from 'react';
import ExpandIcon from '../icons/ExpandIcon.jsx';
import DeleteIcon from '../icons/DeleteIcon.jsx';
import EditIcon from '../icons/EditIcon.jsx';
import Dropdown from 'react-bootstrap/Dropdown'

const ListEntry = ({item, removeList}) => {
  const [open, setOpen] = useState(false);;

  return (
    <div className = "card-container">
      <div className = "card-wrapper">
      <div className="card">
        {item}
      </div>

      <div className="expand-icon">
        <a href="#" onClick={() => setOpen(!open)}>
          <ExpandIcon/>
        </a>
      </div>
      {open && 'y0'}
      </div>
    </div>
  )
}

export default ListEntry;




{/* <EditIcon closeDropdown={closeDropdown}/>
<DeleteIcon
  removeList={removeList}
  item={item}
  /> */}