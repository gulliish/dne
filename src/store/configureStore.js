

import { configureStore } from "@reduxjs/toolkit";
import newsSlice from '../common/news/newsSlice'
import LoginSlice from '../common/auth/LoginSlice'
import groupsSlice from '../common/Users/GroupSlice'
import studentSlice from '../common/Users/UserSlice'

export const store = configureStore({
    reducer: {
        newsSlice, 
        LoginSlice,
        groupsSlice,
        studentSlice,
    }
})

