import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type isLoggedState = boolean;

let initialState: isLoggedState = true;

const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        login: (state) => true,
        logout: (state) => false
    }
});

export const {login,logout} = isLoggedSlice.actions;

export const selectIsLogged = (state: {isLogged: isLoggedState}) => state.isLogged;
export default isLoggedSlice.reducer;