import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesThunk, postCoursesThunk } from '../CoursesSlice';

function AddModal(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({
        title: '',
        duration: '',
        teacher: '',
        groups: '',
    })

    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        dispatch(getCoursesThunk())
    }, []);

    const courses = useSelector(state => state.coursesSlice.courses)



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
                    <label className='required' htmlFor="title">Title <p className='redtext'>*</p></label>
                    <input id='title' type='text' onChange={(e) => setValue({ ...value, title: e.target.value })} placeholder='Enter name of course' />
                    <div className='newsAdd'>
                        <label className='required' htmlFor="teachers">Select teacher <p className='redtext'>*</p></label>
                        <select name="teachers" id="teachers" form="carform">
                            {
                                courses.map(item => (
                                    <option classname='option'>{item.teacher}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='newsAdd'>
                        <label htmlFor="duration">Enter the duration of course</label>
                        <input type="time" id='duration' />
                    </div>
                    <div className='newsAdd'>
                        <label className='required' htmlFor="teachers">Select teacher <p className='redtext'>*</p></label>
                        <select name="teachers" id="teachers" form="carform">
                            {
                                courses.map(item => (
                                    <option classname='option'>{item.groups}</option>
                                ))
                            }
                        </select>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        handleClose();
                        dispatch(postCoursesThunk(value));
                        console.log(test)
                    }}
                        variant='secondary'>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export default AddModal;