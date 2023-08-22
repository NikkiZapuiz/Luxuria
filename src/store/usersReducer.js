import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice ({
    name: 'users',
    initialState: [],
    reducers: {
        setUsers: (state, action) => {
            console.log(action.payload)
            return action.payload
        }
    }

})

export const { setUsers } = userSlice.actions