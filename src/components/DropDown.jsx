import React, { useState } from 'react';
import EditIcon from '../icons/EditIcon.jsx';


const DropDown = () => {
	const [open, setOpen] = useState(false);;

	return (


			<EditIcon
			  animation={true}
				show={true}
			  onClick={() => setOpen(!open)}/>









			)
		}


export default DropDown;