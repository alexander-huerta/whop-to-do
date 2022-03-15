import React, { useState } from 'react';
import EditIcon from '../icons/EditIcon.jsx';
import DeleteIcon from '../icons/DeleteIcon.jsx';


const DropDown = ({item, removeList, editList}) => {
	const [open, setOpen] = useState(false);;
  const [editColor, setEditColor] = useState('#242424')
  const [deleteColor, setDeleteColor] = useState('#242424')

	return (
      <div className="dropdown">
        <div className="edit-icon">
          <EditIcon
            fill={editColor}
            onClick={() => {
              setEditColor('#2FE6FF')
              console.log(item)
              setOpen(false)
            }}
            onMouseLeave={() => setEditColor('#242424')}
          />
        </div>
        <div className="delete-icon">
          <DeleteIcon
            fill={deleteColor}
            onClick={() => {
              setDeleteColor('#FF3333')
              removeList(item)
              setOpen(false)
            }}
            onMouseLeave={() => setDeleteColor('#242424')}
            />
        </div>
      </div>
  )
}


export default DropDown;








