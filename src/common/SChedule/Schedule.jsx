import React from 'react';
import AppLayout from '../layout/Layout';
import Demo from "./demo";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Schedule = () => {
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
          href="/schedule"
        >
          <CalendarMonthIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Расписание
        </Link>
      </Breadcrumbs>
    </div>
            <Demo/>
        </AppLayout>
    );
};

export default Schedule;