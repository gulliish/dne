import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    tests: []
}

export const getTestThunk = createAsyncThunk(
    'tests/getTestThunk',
    async (id, {dispatch}) => {
        const {data} = await axios.get('http://127.0.0.1:8000/api/v1/classroom/assignments/', id)
        dispatch(getTests(data))
    }
)

export const postTestThunk = createAsyncThunk(
    'tests/postTestThunk',
    async (obj, {dispatch}) => {
        await axios.post('http://127.0.0.1:8000/api/v1/classroom/assignments/', obj)
        dispatch(getTestThunk())
    }
)

export const deleteTestThunk = createAsyncThunk(
    'tests/deleteTestThunk',
    async (id, {dispatch}) => {
        await axios.delete('http://127.0.0.1:8000/api/v1/classroom/assignments/', id)
        dispatch(getTestThunk())
    }
)

const testSlice = createSlice({
    name: "tests",
    initialState,
    reducers:{
        getTests:(state, action) => {
            state.tests = action.payload;
        }, 
    }
})

export const {getTests} = testSlice.actions;
export default testSlice.reducer;