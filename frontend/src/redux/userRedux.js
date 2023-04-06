import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.isFetching = true;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        logoutSuccess: (state) => {
            state.isFetching = false;
            state.currentUser = null;
        },
        updatePasswordSuccess: (state, action) => {
            state.isFetching = true;
            state.currentUser = action.payload
        },
        updateInfoSuccess: (state, action) => {
            state.isFetching = true;
            state.currentUser = action.payload
        },
    }
});

export const { loginStart, loginSuccess, loginFailure, logoutSuccess, updatePasswordSuccess, updateInfoSuccess } = userSlice.actions;
export default userSlice.reducer;