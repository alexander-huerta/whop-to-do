import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import CancelIcon from '../icons/CancelIcon.jsx';
import DoneIcon from '../icons/DoneIcon.jsx';


const AddListModal = ({addList, item}) => {
  const [open, setOpen] = useState(true);
  const [listInputString, setString] = useState('');
  const [cancelColor, setCancelColor] = useState('#505050')
  const [doneColor, setDoneColor] = useState('#505050')

  return (
    <div class="modal-dialog modal-fullscreen-sm-down">
      <Modal
        show={open}
        animation={true}
        className="add-list-modal-container"
      >
          <div className="modal-buttons">
            <div className="cancel">
              <CancelIcon
                fill={cancelColor}
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
                fill={doneColor}
                onClick={() => {
                  setDoneColor('#2FE6FF')
                  addList(listInputString)
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









