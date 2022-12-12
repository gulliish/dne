import React from 'react';
import AppLayout from '../layout/Layout';
import TestsCard from './components/TestsCard';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkAdd from '@mui/icons-material/Whatshot';
// import { authenticationService } from '@/_services';
// import {  Redirect } from 'react-router-dom';

function Assignment() {
//   const currentUser = authenticationService.currentUserValue;

//   if (!currentUser) {
//     // not logged in so redirect to login page with the return url
//     return <AddAssign/>
// }

// // check if route is restricted by role
// if (roles && roles.indexOf(currentUser.role) === -1) {
//     // role not authorised so redirect to home page
//     return <Redirect to={{ pathname: '/'}} />
// }
  return (
    <AppLayout>
    <div className="">
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
          href="/assignment"
        >
          <BookmarkAdd sx={{ mr: 0.5 }} fontSize="inherit" />
          Задание
        </Link>
      </Breadcrumbs>
    </div>
    <Link 
          href="/createtest"
        >Create test</Link>
    <TestsCard/>
    </div>
    </AppLayout>
  )
}

export default Assignment;
