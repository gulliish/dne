import { Pagination } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../layout/Layout';
import { getMessageThunk, postMessageThunk } from './ActivitySlice';
import AddActivity from './components/AddActivity';
import Cards from './components/Cards';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import BookmarkAdd from '@mui/icons-material/Whatshot';



export default function Activity() {

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);
  useEffect(() => {
    dispatch(getMessageThunk())
  }, []);
  useEffect(() => {
    dispatch(postMessageThunk())
  }, [])

  const Messages = useSelector(state => state.messageSlice.messages)


  return (
    <AppLayout>
      <div>
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
          href="/notifications"
        >
          <BookmarkAdd sx={{ mr: 0.5 }} fontSize="inherit" />
          Доска объявлений
        </Link>
      </Breadcrumbs>
    </div>
    
        <AddActivity />
        <div className='cardsWrapper'>
          {
            Messages.map(item => (
              <Cards item={item} />
            ))
          }
        </div>
        <div className='pagination'>
        <Pagination count={1} color="primary" />
        </div>
      </div>
    </AppLayout>

  );
}
