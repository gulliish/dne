import React from 'react';
import AppLayout from '../layout/Layout';
// import AddAssign from './components/AddAssign';
import CardAssign from './components/CardAssign';
// import { authenticationService } from '@/_services';
// import {  Redirect } from 'react-router-dom';

function Tests() {
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
        
      
      <CardAssign/>
    </div>
    </AppLayout>
  )
}

export default Tests;
