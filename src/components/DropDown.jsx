import React, { useState } from 'react';

const DropDown = () => {
	const [open, setOpen] = useState(false);;

	return (
		<div className="dropdown">
			<div className="expand-icon">
				<a href="#" onClick={() => setOpen(!open)}>
					<EditIcon/>
				</a>
			</div>

		</div>
			)
}

export default DropDown;