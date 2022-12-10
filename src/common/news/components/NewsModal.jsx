import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewsThunk } from '../newsSlice';
import TextArea from 'antd/lib/input/TextArea';

function NewsModal(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    name: '',
    news_text: '',
  })
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
            Add
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='newsAdd'>
          <input type='text' onChange={(e) => setValue({ ...value, name: e.target.value })} placeholder='Enter name of news' />
          <div className='newsAdd'>
            <TextArea type='text' onChange={(e) => setValue({ ...value, news_text: e.target.value })} placeholder='Enter text' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            handleClose();
            dispatch(postNewsThunk(value));
            console.log(test)
          }}
            variant='secondary'>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default NewsModal;