import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    auth: []
}

export const postAuthThunk = createAsyncThunk(
    'auth/postAuthThunk',
    async (obj, {dispatch}) => {
        await axios.post('http://127.0.0.1:8000/api/v1/auth/password_reset/', obj)
        dispatch()
    }
)

const LoginSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        authNews:(state, action) => {
            state.auth = action.payload;
        }, 
    }
})

export const {authNews} = LoginSlice.actions;
export default LoginSlice.reducer;