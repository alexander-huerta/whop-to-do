import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import CancelIcon from '../icons/CancelIcon.jsx';

const AddListModal = ({addList, item}) => {
  const [open, setOpen] = useState(true);;
  const [string, setString] = useState('');
  const [color, setColor] = useState('#505050')

  const colorSet = (c, bool=true) => {
    setOpen(bool)
    setColor(c)
  }

  return (
    <>
      <Modal
        show={open}
        onHide={()=>setOpen(false)}
        size="lg"
        animation={true}
        className="modal-container"
        backdrop="static"

      >
          <div className="modal-btn-wrapper">
            <div className="cancel">
              <CancelIcon
                colorSet={colorSet}
                fill={color}
                color={color}
                onClick={() => {
                  setOpen(false)
                  setColor('#2FE6FF')
                }}
                onMouseLeave={() => setColor('#505050')}
                onMouseOver={() => setColor('#242424')}
              />
            </div>

            <div
              className="done"
              style={{color:color}}
              onClick={() => {
                setColor('#2FE6FF', false)
                addList(string)
                setOpen(false)
              }}
              onMouseOver={() => {setColor('#242424')
              }}
            >
              Done
            </div>

          </div>
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










