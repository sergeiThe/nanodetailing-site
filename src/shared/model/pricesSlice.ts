import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Prices =
    | "tesla"
    | "nio"
    | "byd"
    | "voyah"
    | "volvo-xc40"
    | "skoda-enyaq"
    | "polestar-2"
    | "volkswagen-id.4"
    | "citroen-ds7";

interface PricesState {
    current?: Prices | null | undefined;
}

const initialState: PricesState = {
    current: null,
};

export const pricesSlice = createSlice({
    name: "service",
    initialState,
    reducers: {
        open(state, action: PayloadAction<Prices>) {
            state.current = action.payload;
        },
        close(state) {
            state.current = null;
        },
    },
});

export const { close, open } = pricesSlice.actions;
