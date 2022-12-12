import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../layout/Layout';
import { getNewsThunk, postNewsThunk } from '../news/newsSlice';
import AddGroups from './components/AddGrops';
import GroupCards from './components/GroupCards';
import ProgressGroup from './components/Progress';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';




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
                            href="/groups"
                        >
                            <GroupsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            Группы
                        </Link>
                    </Breadcrumbs>
                </div>
                <div className='GroupHeader'>
                    <h2>Группы
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
