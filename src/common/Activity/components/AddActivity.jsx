import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function AddActivity(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='addActivityBtn'  onClick={() => handleShow()}> <i class="bi bi-cloud-plus Addicon"></i></Button>{' '}
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
export default AddActivity;