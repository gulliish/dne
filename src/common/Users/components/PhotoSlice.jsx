import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    photo: []
}

export const postAvatarThunk = createAsyncThunk(
    'photo/postAvatarThunk',
    async (obj, { dispatch }) => {
        await axios.post('http://127.0.0.1:8000/api/v1/data/students/', obj)
        dispatch(getPhoto)
    }
)

const photoSlice = createSlice({
    name: "photo",
    initialState,
    reducers: {
        getPhoto: (state, action) => {
            state.photo = action.payload;
        },
    }
})


export const { getPhoto } = photoSlice.actions;
export default photoSlice.reducer;