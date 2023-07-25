import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Service =
    | "keramisk-coating"
    | "chrome-delete"
    | "ppf"
    | "helfoliering"
    | "solfilm"
    | "polering";

export interface ServiceState {
    current?: Service | null | undefined;
}

const initialState: ServiceState = {
    current: null,
};

export const serviceSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        open(state, action: PayloadAction<Service>) {
            state.current = action.payload;
        },
        close(state) {
            state.current = null;
        },
    },
});

export const { close, open } = serviceSlice.actions;
