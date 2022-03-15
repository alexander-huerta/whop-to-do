import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import CancelIcon from '../icons/CancelIcon.jsx';
import DoneIcon from '../icons/DoneIcon.jsx';


const AddListModal = ({addList, item}) => {
  const [open, setOpen] = useState(true);;
  const [string, setString] = useState('');
  const [color, setCancelColor] = useState('#505050')
  const [color2, setDoneColor] = useState('#505050')

  return (
    <div class="modal-dialog modal-fullscreen-sm-down">
      <Modal
        show={open}
        onHide={()=>setOpen(false)}
        size="lg"
        backdrop="static"
        animation={true}
        className="add-list-modal-container"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

          <div className="modal-buttons">
            <div className="cancel">
              <CancelIcon
                fill={color}
                onClick={() => {
                  setCancelColor('#2FE6FF')
                  setOpen(false)
                }}
                onMouseLeave={() => setCancelColor('#505050')}
                onMouseOver={() => setCancelColor('#242424')}
              />
            </div>

            <div className="done">
              <DoneIcon
                fill={color2}
                onClick={() => {
                  setDoneColor('#2FE6FF')
                  addList(string)
                  setOpen(false)
                }}
                onMouseLeave={() => setDoneColor('#505050')}
                onMouseOver={() => setDoneColor('#242424')}
              />
            </div>
          </div>

          <input
          className="modal-input"
            type={"text"}
            placeholder="List item"
            value={item}
            onChange={(e) => setString(e.target.value)}
        />

      </Modal>
    </div>
  );
}

export default AddListModal;









