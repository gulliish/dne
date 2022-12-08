import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postNewsThunk } from '../newsSlice';

function NewsModal(props) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    name:'',
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
        <Modal.Body>
          <input type='text' onChange={(e) => setValue({...value, name: e.target.value})} placeholder='Enter name of news'/>
          <input type='text' onChange={(e) => setValue({...value, news_text: e.target.value})} placeholder='Enter text'/>
          <button onClick={(e) =>{
            e.preventDefault();
            dispatch(postNewsThunk(value))
            console.log(test);
          }} >click</button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} variant='secondary   '>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default NewsModal;