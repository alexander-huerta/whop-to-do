import React, { useState } from 'react';
import AddIcon from '../icons/AddIcon.jsx';
import AddListModal from './AddListModal.jsx'

const AddListCard = ({addList}) => {
  const [open, setOpen] = useState(false);;
  const [color, setColor] = useState('#242424')

  if(!open) {
    return (
      <div className = "add-list-card-container">
        <div className = "add-list-card">
          <div className="add-list-card-text">
            Create a list
          </div>

          <div className="icon">
          <AddIcon
            fill={color}
            onClick={() => {
              setOpen(!open)
              setColor('#2FE6FF')
                }}
            onMouseLeave={() => {
              setColor('#242424')}}/>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
      <AddListModal addList={addList}/>
      </>
    )
 }
}

export default AddListCard;



// {open && <AddListModal addList={addList}/>}