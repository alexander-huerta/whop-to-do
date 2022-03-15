import React, { useState } from 'react';
import ExpandIcon from '../icons/ExpandIcon.jsx';
import DeleteIcon from '../icons/DeleteIcon.jsx';
import EditIcon from '../icons/EditIcon.jsx';
import Dropdown from 'react-bootstrap/Dropdown'

const ListEntry = ({item,removeList}) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#242424')


  return (

    <div className = "list-container">
      <div className = "list">
        <div className="list-name">
          {item}
        </div>

      <div className="expand-icon">
        <ExpandIcon
          fill={color}
          onClick={(e) => {
            setOpen(!open)
            console.log(item)
          }}
          onMouseLeave={() => {
            setColor('#242424')}}
          onMouseOver={() => {
            setColor('#2FE6FF')}}

        />
      </div>
        {open && <Dropdown/>}
      </div>


    </div>
  )
}

export default ListEntry;

// onClick={() => {
//   removeList(item)
// }}