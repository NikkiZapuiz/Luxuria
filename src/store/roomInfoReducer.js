import { createSlice } from "@reduxjs/toolkit"


export const roomInfoSlice = createSlice ({
    name:'roomInfo',
    initialState: [],
    reducers: {
        setRoomInfo: (state, action) => {
            return action.payload
        },
    }
})

export const { setRoomInfo } = roomInfoSlice.actions