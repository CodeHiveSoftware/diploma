import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type isLoggedState = boolean;

const initialState: isLoggedState = localStorage.getItem('isLogged') === 'true' ? true : false;

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
