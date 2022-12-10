import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import $api from '../../utils/axios';

const initialState = {
    loading: false,
    error: null,
    errorpass: [],
    user: null,
    ids: [],
    id: null,
    entities: {},
    isLoggedIn: false,
};

export const authAdapter = createEntityAdapter();
export const authSelectors = authAdapter.getSelectors((state) => state.auth);

export const signUpUser = createAsyncThunk(
    'auth/signUpUser',
    async ({ username, password }) => {
        try {
            await $api.post('auth/token/', { username, password }).then(res => {
                console.log(res)
                localStorage.setItem('token', res.data.access)
                localStorage.setItem('refresh', res.data.refresh)
            })
        } catch (e) {
            return e.error.message;
        }
    }
);

export const updateUser = createAsyncThunk('auth/updateUser', async (user) => {
    try {
        await $api.patch(`/users/${user.id}/`, {
            id: user.id,
            username: user.username,
            email: user.email,
            phone: user.phone,
        });
    } catch (e) {
        return e.error.message;
    }
});

export const getUser = createAsyncThunk('auth/getUser', async (id) => {
    try {
        const { data } = await $api.get(`/profiles/${id}`);

        return data;
    } catch (e) {
        return e.error.message;
    }
});

export const setPassword = createAsyncThunk(
    'auth/setPassword',
    async ({ new_password1, new_password2 }) => {
        try {
            const data = await $api
                .post('/auth/password/change/', {
                    new_password1,
                    new_password2,
                })
                .catch(function (error) {
                    if (error.response) {
                        return error.response.data;
                    }
                });
            return data;
        } catch (e) {
            console.log(e)
        }
    }
);

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ username, email, password }) => {
        try {
            const res = await $api
                .post('/auth/login/', { username, email, password })
                .then(({ data }) => {
                    window.localStorage.setItem('access_token', data.access_token);
                    window.localStorage.setItem('refresh_token', data.refresh_token);
                    return data;
                });
            return res;
        } catch (e) {
            window.localStorage.setItem('access_token');
            window.localStorage.setItem('refresh_token');
            return e.error.message;
        }
    }
);

export const logoutUser = createAsyncThunk('auth/logoutUser', function () {
    window.localStorage.removeItem('access_token');
    window.localStorage.removeItem('refresh_token');
});

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // SIGNUP USER
        builder.addCase(signUpUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
        });
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.error = action.error.message;
            state.loading = false;
        });
        //USER LOGIN
        builder.addCase(loginUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.isLoggedIn = true;
            state.id = action.payload.user.pk;
        });
        builder.addCase(loginUser.rejected, (state, action) => {
            state.isAuthenticated = false;
            state.loading = false;
            state.error = action.error.message;
        });
        // GET USER
        builder.addCase(getUser.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        });
        builder.addCase(getUser.rejected, (state, action) => {
            state.user = null;
            state.loading = false;
            state.error = action.error.message;
        });
        //LOGOUT USER
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.loading = false;
            state.isAuthenticated = null;
            state.ids = null;
            state.entities = null;
            state.isLoggedIn = false;
        });
        // SET PASSWORD
        builder.addCase(setPassword.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(setPassword.fulfilled, (state, action) => {
            state.loading = false;
            state.errorpass = action.payload;
        });
        builder.addCase(setPassword.rejected, (state, action) => {
            state.error = action.error;
            state.loading = false;
        });
    },
});

export const authReducer = authSlice.reducer;