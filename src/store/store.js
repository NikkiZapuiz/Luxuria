
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registrationSlice } from './registrationReducer';
import { authSlice } from './authReducer';
import { errorSlice } from './errorReducer';
import { userSlice } from './usersReducer';
import { roomInfoSlice } from './roomInfoReducer';
import { roomSlice } from './roomsReducer';
import { reservationsSlice } from './reservationsReducer';






const rootReducer = combineReducers({
    registration: registrationSlice.reducer,
    auth: authSlice.reducer,
    error: errorSlice.reducer,
    users: userSlice.reducer,
    roomInfo: roomInfoSlice.reducer,
    rooms: roomSlice.reducer,
    reservations: reservationsSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})