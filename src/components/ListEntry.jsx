import React, { useState } from 'react';
import ExpandIcon from '../icons/ExpandIcon.jsx';
import DropDown from './DropDown.jsx';

const ListEntry = ({item,removeList, editList}) => {
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
            // console.log(item)
          }}
          onMouseLeave={() => {
            setColor('#242424')}}
          onMouseOver={() => {
            setColor('#2FE6FF')}}

        />

      </div>

      </div>
      {open && <DropDown
                item={item}
                removeList={removeList}
                editList={editList}
                />
      }

    </div>
  )
}

export default ListEntry;

// onClick={() => {
//   removeList(item)
// }}