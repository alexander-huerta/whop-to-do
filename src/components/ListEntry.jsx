import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

const ListEntry = ({item, removeList}) => {

  const [show, setShow] = useState(false);
  const closeModal = () => setShow(false);

  const openModal = () => setShow(true);
  return (
  <>
  <Button variant="primary" onClick={openModal}>
  {item} ---
  </Button>

  <Modal show={show} onHide={closeModal} animation={true} dialogClassName={"primaryModal"}>

      <Button variant="secondary" onClick={closeModal}>
        Edit
      </Button>


      <Button
        variant="primary"
        onClick={(e) => {
        removeList(item)
        closeModal()
        }}
        onKeyPress={(e) => {
        removeList(item)
        closeModal()
        }}
        >
         Delete
      </Button>
  </Modal>
</>

  )
}



// import React from 'react';
// const ListEntry = ({item, removeList}) => (

//   <div className="item">
//     <button
//       className="add-item"
//       type="submit"
//       value={item}
//       onClick={(e) => removeList(e.target.value)}
//       >
//         {item}
//     </button>
//   </div>
// )

export default ListEntry;




