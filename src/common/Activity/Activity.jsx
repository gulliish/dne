import { Pagination } from '@mui/material';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../layout/Layout';
import { getMessageThunk, postMessageThunk } from './ActivitySlice';
import AddActivity from './components/AddActivity';
import Cards from './components/Cards';



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
