import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    messages: []
}

export const getMessageThunk = createAsyncThunk(
    'messages/getMessageThunk',
    async (_, { dispatch }) => {
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/board/messages/')
        dispatch(getMessage(data))
    }
)

export const postMessageThunk = createAsyncThunk(
    'messages/postMessageThunk',
    async (obj, { dispatch }) => {
        await axios.post('http://127.0.0.1:8000/api/v1/board/messages/', obj)
        dispatch(getMessageThunk())
    }
)

export const deleteMessageThunk = createAsyncThunk(
    'messages/deleteMessageThunk',
    async ({ id }, { dispatch }) => {
        await axios.delete('http://127.0.0.1:8000/api/v1/board/messages/', { id })
        dispatch(getMessageThunk())
    }
)

const messageSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        getMessage: (state, action) => {
            state.messages = action.payload;
        },
    }
})


export const { getMessage } = messageSlice.actions;
export default messageSlice.reducer;