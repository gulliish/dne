import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    students: []
}

export const getStudThunk = createAsyncThunk(
    'students/getStudThunk',
    async (_, { dispatch }) => {
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/data/students/')
        dispatch(getStud(data))
    }
)

export const postStudThunk = createAsyncThunk(
    'students/postStudThunk',
    async (obj, { dispatch }) => {
        await axios.post('http://127.0.0.1:8000/api/v1/data/students/', obj)
        dispatch(getStudThunk())
    }
)

export const deleteStudThunk = createAsyncThunk(
    'students/deleteStudThunk',
    async ({ id }, { dispatch }) => {
        await axios.delete('http://127.0.0.1:8000/api/v1/data/students/', { id })
        dispatch(getStudThunk())
    }
)

const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        getStud: (state, action) => {
            state.students = action.payload;
        },
    }
})


export const { getStud } = studentSlice.actions;
export default studentSlice.reducer;