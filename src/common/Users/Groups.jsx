import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../layout/Layout';
import { getNewsThunk, postNewsThunk } from '../news/newsSlice';
import AddGroups from './components/AddGrops';
import GroupCards from './components/GroupCards';
import ProgressGroup from './components/Progress';




const Groups = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        dispatch(getNewsThunk())
    }, []);
    useEffect(() => {
        dispatch(postNewsThunk())
    }, [])

    const groups = useSelector(state => state.groupsSlice.groups)



    return (
        <AppLayout>
            <div>
                <div className='GroupHeader'>
                    <h2>Groups
                    </h2>
                    <div >
                        <ProgressGroup />
                    </div>
                </div>
                <AddGroups />

                <div className='groupsWrapper'>
                    {
                        groups.map(item => (
                            <GroupCards item={item} />
                        ))
                    }
                </div>
            </div>
        </AppLayout>

    );
};

export default Groups;
