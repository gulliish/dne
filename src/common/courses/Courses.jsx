import { Pagination } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import AppLayout from '../layout/Layout';
import AddModal from './components/AddCours';
import CoursCard from './components/CoursCard';
import { getCoursesThunk, postCoursesThunk } from './CoursesSlice';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

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
           
            <div role="presentation" className='presentation'>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Главная
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/courses"
        >
          <LocalLibraryIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Курсы
        </Link>
      </Breadcrumbs>
      <AddModal/>
    </div>
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