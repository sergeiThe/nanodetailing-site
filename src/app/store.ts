import { pricesSlice } from "@/shared/model/pricesSlice";
import { serviceSlice } from "@/shared/model/serviceSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    service: serviceSlice.reducer,
    prices: pricesSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
