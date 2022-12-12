import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AppLayout from '../../layout/Layout';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTestThunk, postTestThunk } from '../AssignSlice';
import TestApp from './TestComponent';


const AddTests = () => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const [value, setValue] = useState({
        title: '',
        duration: '',
        teacher: '',
        course: '',
    })

    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        dispatch(getTestThunk())
    }, []);

    const tests = useSelector(state => state.testSlice.tests)



    return (
        <AppLayout>
            <Form >
                <h2>Добавить тест</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Название</Form.Label>
                    <Form.Control type="email" placeholder="Enter title" />
                    <div className='newsAdd'>
                        <label className='required' htmlFor="teachers">Select teacher <p className='redtext'>*</p></label>
                        <select name="teachers" id="teachers" form="carform">
                            {
                                tests.map(item => (
                                    <option classname='option'>{item.teacher}</option>
                                ))
                            }
                        </select>
                    </div>
                </Form.Group>
                <Form.Group>
                <div className='newsAdd'>
                        <label className='required' htmlFor="teachers">Select teacher <p className='redtext'>*</p></label>
                        <select name="teachers" id="teachers">
                            {
                                tests.map(item => (
                                    <option classname='option'>{item.groups}</option>
                                ))
                            }
                        </select>
                    </div>
                </Form.Group>
                <Button className='btn' variant="secondary" type="submit" onClick={() => {
                        dispatch(postTestThunk(value));
                        console.log(test)
                    }}>
                    Submit
                </Button>
            </Form>
            <TestApp />
        </AppLayout>
    );
};

export default AddTests;