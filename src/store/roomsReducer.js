import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice ({
    name: 'rooms',
    initialState: [],
    reducers: {
        setRooms: (state, action) => {
            return action.payload
        },
    }
})

export const { setRooms } = roomSlice.actions