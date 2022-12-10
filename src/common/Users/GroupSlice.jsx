import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    groups: []
}

export const getGroupThunk = createAsyncThunk(
    'groups/getGroupThunk',
    async (_, { dispatch }) => {
        const { data } = await axios.get('http://127.0.0.1:8000/api/v1/data/groups/')
        dispatch(getGroups(data))
    }
)

export const postGruopThunk = createAsyncThunk(
    'groups/postGruopThunk',
    async (obj, { dispatch }) => {
        await axios.post('http://127.0.0.1:8000/api/v1/data/groups/', obj)
        dispatch(getGroupThunk())
    }
)

export const deleteGroupThunk = createAsyncThunk(
    'groups/deleteGroupThunk',
    async ({ id }, { dispatch }) => {
        await axios.delete('http://127.0.0.1:8000/api/v1/data/groups/', { id })
        dispatch(getGroupThunk())
    }
)

const groupsSlice = createSlice({
    name: "groups",
    initialState,
    reducers: {
        getGroups: (state, action) => {
            state.groups = action.payload;
        },
    }
})


export const { getGroups } = groupsSlice.actions;
export default groupsSlice.reducer;