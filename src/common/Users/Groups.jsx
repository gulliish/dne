import React from 'react';
import AppLayout from '../layout/Layout';
import GroupCards from './components/GroupCards';

const Groups = () => {
    return (
        <AppLayout>
            <div>
            <h2>Groups
            </h2>
            <div className='groupsWrapper'>
                <GroupCards/>
                <GroupCards/>
            </div>
            </div>
        </AppLayout>
        
    );
};

export default Groups;
