import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type ParkingItem = {
    id: number;
    isOverdue?: boolean;
    isReserved: boolean;
};

type ParkingState = {
    items: ParkingItem[];
    reserved: ParkingItem[];
    overdue: ParkingItem[];
};

const initialState: ParkingState = {
	items: [
		{ id: 1, isReserved: false },
		{ id: 2, isReserved: false },
		{ id: 3, isReserved: false },
		{ id: 4, isReserved: false },
		{ id: 5, isReserved: false },
		{ id: 6, isReserved: false },
		{ id: 7, isReserved: false },
		{ id: 8, isReserved: false },
		{ id: 9, isReserved: false },
		{ id: 10, isReserved: false },
		{ id: 11, isReserved: false },
		{ id: 12, isReserved: false },
		{ id: 13, isReserved: false },
		{ id: 14, isReserved: false },
		{ id: 15, isReserved: false },
		{ id: 16, isReserved: false },
		{ id: 17, isReserved: false },
		{ id: 18, isReserved: false },
		{ id: 19, isReserved: false },
		{ id: 20, isReserved: false },
		{ id: 21, isReserved: false },
		{ id: 22, isReserved: false },
		{ id: 23, isReserved: false },
		{ id: 24, isReserved: false },
		{ id: 25, isReserved: false },
		{ id: 26, isReserved: false },
		{ id: 27, isReserved: false },
		{ id: 28, isReserved: false },
		{ id: 29, isReserved: false },
		{ id: 30, isReserved: false },
	],
	reserved: [],
	overdue: [],
};

export const parkingSlice = createSlice({
	name: 'parking',
	initialState,
	reducers: {
		reserveParkingItem: (state, action: PayloadAction<number>) => {
			const item = state.items.find(item => item.id === action.payload);
			if (item) {
				item.isReserved = true;
				state.reserved.push(item);
			}
		},
		unreserveParkingItem: (state, action: PayloadAction<number>) => {
			const item = state.items.find(item => item.id === action.payload);
			if (item) {
				item.isReserved = false;
				state.reserved = state.reserved.filter(item => item.id !== action.payload);
			}
		},
		markParkingItemAsOverdue: (state, action: PayloadAction<number>) => {
			const item = state.items.find(item => item.id === action.payload);
			if (item) {
				item.isOverdue = true;
				state.overdue.push(item);
			}
		},
	},
});

export const { reserveParkingItem, unreserveParkingItem, markParkingItemAsOverdue } = parkingSlice.actions;

export const selectParkingItems = (state: { parking: ParkingState }) => state.parking.items;
export const selectReservedParkingItems = (state: { parking: ParkingState }) => state.parking.reserved;

export default parkingSlice.reducer;
