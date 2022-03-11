import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

const CreateListEntryModal = ({addList}) => {
  const [show, setShow] = useState(false);
  const [string, setString] = useState('');

  const saveListEntryString = (str) => {setString(str)};

  const closeModal = () => setShow(false);

  const openModal = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={openModal}>
        Create a list +
      </Button>

      <Modal
        show={show}
        onHide={closeModal}
        animation={true}
        dialogClassName={"primaryModal"}>

          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>

          <Button
            variant="primary"
            onClick={(e) => {
              addList(string)
              closeModal()
            }}
            onKeyPress={(e) => {
              addList(string)
              closeModal()
            }}
            >
             Done
          </Button>

          <Form>
            <Form.Control
              type="listEntry"
              placeholder="List Item"
              onChange={(e) => saveListEntryString(e.target.value)}
            />
          </Form>

      </Modal>
    </>
  );
}

export default CreateListEntryModal;



