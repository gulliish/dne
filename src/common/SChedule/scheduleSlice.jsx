import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    shedule: []
}

export const getSheduleThunk = createAsyncThunk(
    'shedule/getSheduleThunk',
    async (_, {dispatch}) => {
        const {data} = await axios.get('http://127.0.0.1:8000/api/v1/study/timetable/')
        dispatch(getShedule(data))
    }
)

export const postSheduleThunk = createAsyncThunk(
    'shedule/postSheduleThunk',
    async (obj, {dispatch}) => {
        await axios.post('http://127.0.0.1:8000/api/v1/study/timetable/', obj)
        dispatch(getSheduleThunk())
    }
)

export const deleteSheduleThunk = createAsyncThunk(
    'shedule/deleteSheduleThunk',
    async ({id}, {dispatch}) => {
        await axios.delete('http://127.0.0.1:8000/api/v1/study/timetable/', {id})
        dispatch(getSheduleThunk())
    }
)

const sheduleSlice = createSlice({
    name: "shedule",
    initialState,
    reducers:{
        getShedule:(state, action) => {
            state.shedule = action.payload;
        }, 
    }
})

export const {getShedule} = sheduleSlice.actions;
export default sheduleSlice.reducer;