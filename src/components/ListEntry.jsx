import React, { useState } from 'react';
import ExpandIcon from '../icons/ExpandIcon.jsx';
import DeleteIcon from '../icons/DeleteIcon.jsx';
import EditIcon from '../icons/EditIcon.jsx';
import Dropdown from 'react-bootstrap/Dropdown'

const ListEntry = ({item, removeList}) => {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('#242424')
    console.log(item)
  return (

    <div className = "card-container">
      <div className = "card-wrapper">
        <div className="card">
          {item}
        </div>

      <div className="expand-icon">
        <ExpandIcon
          fill={color}
          onClick={() => {
            setOpen(!open)
          }}
          onMouseLeave={() => {
            setColor('#242424')}}
          onMouseOver={() => {
            setColor('#2FE6FF')}}

        />
      </div>
        {open && 'y0'}
      </div>
    </div>
  )
}

export default ListEntry;

// onClick={() => {
//   removeList(item)
// }}