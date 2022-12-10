import * as React from 'react';
import AppLayout from '../layout/Layout';
import AddActivity from './components/AddActivity';
import Cards from './components/Cards';



export default function Activity() {


  return (
    <AppLayout>
      <div>
        <AddActivity/>
        <Cards/>
      </div>
    </AppLayout>
   
  );
}
