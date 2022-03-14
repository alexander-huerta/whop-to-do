import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import CancelIcon from '../icons/CancelIcon.jsx';

const AddListModal = ({addList}) => {
  const [open, setOpen] = useState(true);;
  const [string, setString] = useState('');

  return (
    <>
      <Modal
        show={open}
        onHide={()=>setOpen(false)}
        size="lg"
        animation={true}
        className="modal-container"
      >
        <Modal.Header>
          <div className="modal-btn-wrapper">
            <button
              className="cancel"
              onClick={() => setOpen(false)}
            >
              <CancelIcon/> Cancel
            </button>

            <button
              className="done"
              onClick={() => {
                addList(string)
                setOpen(false)
                }}
            >
              Done
            </button>

          </div>
        </Modal.Header>
          <input
            type="text"
            placeHolder="List title"
            onChange={(e) => setString(e.target.value)}
        />
      </Modal>
    </>
  );
}

export default AddListModal;









