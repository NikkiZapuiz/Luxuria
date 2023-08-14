import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        updateUser: (state, action) => {
            const updatedUser = action.payload;
            state.user = updatedUser;
        },
    },
});

export const { login, logout, updateUser } = authSlice.actions


