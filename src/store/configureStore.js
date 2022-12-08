

import { configureStore } from "@reduxjs/toolkit";
import newsSlice from '../common/news/newsSlice'

export const store = configureStore({
    reducer: {
        newsSlice
    }
})

