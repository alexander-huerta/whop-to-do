import React, { useState } from 'react';
import AddIcon from '../icons/AddIcon.jsx';
import AddListModal from './AddListModal.jsx'

const AddListButton = ({addList}) => {
  const [open, setOpen] = useState(false);;
  const [color, setColor] = useState('#242424')

  if(!open) {
    return (
      <div className = "card-container">
        <div className = "card-wrapper">
          <div className="card">
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

export default AddListButton;



// {open && <AddListModal addList={addList}/>}