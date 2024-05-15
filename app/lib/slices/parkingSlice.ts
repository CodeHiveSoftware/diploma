import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

type ParkingItem = {
    id: number;
    isOverdue?: boolean;
    isReserved: boolean;
}

type ParkingState = {
    items: ParkingItem[];
    reserved: ParkingItem[];
    overdue: ParkingItem[];
}


const initialState:ParkingState = {
    items: [
        {id: 1, isReserved: false},
        {id: 2, isReserved: true},
        {id: 3, isReserved: false},
        {id: 4, isReserved: true},
        {id: 5, isReserved: false},
        {id: 6, isReserved: true},
        {id: 7, isReserved: false},
        {id: 8, isReserved: true},
        {id: 9, isReserved: false},
        {id: 10, isReserved: true},
        {id: 11, isReserved: false},
        {id: 12, isReserved: true},
        {id: 13, isReserved: false},
        {id: 14, isReserved: true},
        {id: 15, isReserved: false},
        {id: 16, isReserved: true},
        {id: 17, isReserved: false},
        {id: 18, isReserved: true},
        {id: 19, isReserved: false},
        {id: 20, isReserved: true},
        {id: 21, isReserved: false},
        {id: 22, isReserved: true},
        {id: 23, isReserved: false},
        {id: 24, isReserved: true},
        {id: 25, isReserved: false},
        {id: 26, isReserved: true},
        {id: 27, isReserved: false},
        {id: 28, isReserved: true},
        {id: 29, isReserved: false},
        {id: 30, isReserved: true},
    ],
    reserved: [],
    overdue: []
}

export const parkingSlice = createSlice({
    name: 'parking',
    initialState,
    reducers: {
        reserveParkingItem: (state, action: PayloadAction<ParkingItem | number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.isReserved = true;
                state.reserved.push(item)
            }
        },
        unreserveParkingItem: (state, action:PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.isReserved = false;
                state.reserved = state.reserved.filter(item => item.id !== action.payload)
            }
        },
        markParkingItemAsOverdue: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)
            if (item) {
                item.isOverdue = true;
                state.overdue.push(item)
            }
        },
        }
})

export const {reserveParkingItem, unreserveParkingItem, markParkingItemAsOverdue} = parkingSlice.actions

export const selectParkingItems = (state: {parking: ParkingState}) => state.parking.items

export default parkingSlice.reducer