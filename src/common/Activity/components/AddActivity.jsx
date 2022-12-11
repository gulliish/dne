import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function AddActivity(props) {
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    title: '',
    body_text: '',
    owner: '',
    likes: '',
  })

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className='addActivityBtn' onClick={() => handleShow()}> <i className="bi bi-cloud-plus Addicon"></i></Button>{' '}
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
        <Modal.Body className='newsAdd'>
          <label className='required' htmlFor="title">Title <p className='redtext'>*</p></label>
          <input id='title' type='text' onChange={(e) => setValue({ ...value, name: e.target.value })} placeholder='Enter name of news' />
          <div className='newsAdd'>
            <label className='required' htmlFor="text">Text <p className='redtext'>*</p></label>
            <textarea id='text' type='text' onChange={(e) => setValue({ ...value, news_text: e.target.value })} placeholder='Enter text' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant='secondary   '>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddActivity;