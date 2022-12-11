

import { configureStore } from "@reduxjs/toolkit";
import newsSlice from '../common/news/newsSlice'
import LoginSlice from '../common/auth/LoginSlice'
import groupsSlice from '../common/Users/GroupSlice'
import studentSlice from '../common/Users/UserSlice'
import messageSlice from '../common/Activity/ActivitySlice'
import coursesSlice from '../common/courses/CoursesSlice'

export const store = configureStore({
    reducer: {
        newsSlice, 
        LoginSlice,
        groupsSlice,
        studentSlice,
        messageSlice,
        coursesSlice,
    }
})

