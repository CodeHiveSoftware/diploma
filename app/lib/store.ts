import {configureStore} from "@reduxjs/toolkit";
import parkingReducer from "./slices/parkingSlice";
import isLoggedReducer from "./slices/isLogged";

export const store = configureStore({
    reducer: {
        parking: parkingReducer,
        isLogged: isLoggedReducer
    }
})