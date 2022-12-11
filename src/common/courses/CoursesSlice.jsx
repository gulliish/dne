import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    courses: []
}

export const getCoursesThunk = createAsyncThunk(
    'courses/getCoursesThunk',
    async (_, {dispatch}) => {
        const {data} = await axios.get('http://127.0.0.1:8000/api/v1/study/courses/')
        dispatch(getCourses(data))
    }
)

export const postCoursesThunk = createAsyncThunk(
    'courses/postCoursesThunk',
    async (obj, {dispatch}) => {
        await axios.post('http://127.0.0.1:8000/api/v1/study/courses/', obj)
        dispatch(getCoursesThunk())
    }
)

export const deleteCoursesThunk = createAsyncThunk(
    'courses/deleteCoursesThunk',
    async ({id}, {dispatch}) => {
        await axios.delete('http://127.0.0.1:8000/api/v1/study/courses/', {id})
        dispatch(getCoursesThunk())
    }
)

const coursesSlice = createSlice({
    name: "courses",
    initialState,
    reducers:{
        getCourses:(state, action) => {
            state.courses = action.payload;
        }, 
    }
})

export const {getCourses} = coursesSlice.actions;
export default coursesSlice.reducer;