import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    news: []
}

export const getNewsThunk = createAsyncThunk(
    'news/getNewsThunk',
    async (_, {dispatch}) => {
        const {data} = await axios.get('http://127.0.0.1:8000/api/v1/news/')
        dispatch(getNews(data))
    }
)

export const postNewsThunk = createAsyncThunk(
    'news/postNewsThunk',
    async (obj, {dispatch}) => {
        await axios.post('http://127.0.0.1:8000/api/v1/news/', obj)
        dispatch(getNewsThunk())
    }
)

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers:{
        getNews:(state, action) => {
            state.news = action.payload;
        }, 
    }
})

export const {getNews} = newsSlice.actions;
export default newsSlice.reducer;