import React, { useState } from 'react';
import AddIcon from '../icons/AddIcon.jsx';
import AddListModal from './AddListModal.jsx'

const AddListButton = ({addList}) => {
  const [open, setOpen] = useState(false);;

  if(!open) {
    return (
      <div className = "card-container">
        <div className = "card-wrapper">
          <div className="card">
            Create a list
          </div>
        <div className="icon">
          <a href="#" onClick={() => setOpen(!open)}>
          <AddIcon/>
          </a>
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