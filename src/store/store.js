
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { registrationSlice } from './registrationReducer';
import { authSlice } from './authReducer';
import { errorSlice } from './errorReducer';






const rootReducer = combineReducers({
    registration: registrationSlice.reducer,
    auth: authSlice.reducer,
    error: errorSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer
})