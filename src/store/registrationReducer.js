import { createSlice } from "@reduxjs/toolkit";

export const registrationSlice = createSlice({
    name: "registration",
    initialState: {
        loading: false,
        error: null,
    },
    reducers: {
        registerRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        registerSuccess: (state) => {
            state.loading = false;
        },
        registerFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { registerRequest, registerSuccess, registerFailure } = registrationSlice.actions


