import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function AddAssign(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='addAssignBtn' variant="secondary" onClick={() => handleShow()}>Добавить </Button>{' '}
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show} 
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type='text' />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant='secondary   '>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddAssign;