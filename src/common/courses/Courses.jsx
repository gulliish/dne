import { Pagination } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AppLayout from '../layout/Layout';
import AddModal from './components/AddCours';
import CoursCard from './components/CoursCard';
import { getCoursesThunk, postCoursesThunk } from './CoursesSlice';

const Courses = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        dispatch(getCoursesThunk())
    }, []);
    useEffect(() => {
        dispatch(postCoursesThunk())
    }, [])

const courses = useSelector(state => state.coursesSlice.courses)

    return (
        <AppLayout>
            <AddModal/>
            {
                courses.map(item => (
                    <CoursCard item={item}/>
                ))
            }
            <div className='pagination'>
                <Pagination count={1} color="primary" />
            </div>
        </AppLayout>
    );
};

export default Courses;