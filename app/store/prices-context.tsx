"use client";
import { useContext, createContext, Dispatch, useReducer } from "react";

export enum PricesActionType {
    OPEN = "open",
    CLOSE = "close",
}

interface Action {
    type: PricesActionType;
    payload?: string; // Image
}

interface IState {
    typeModal?: string;
}

const reducer = (state: IState, action: Action) => {
    switch (action.type) {
        case PricesActionType.OPEN:
            return { ...state, typeModal: action.payload };
        case PricesActionType.CLOSE:
            return { ...state, typeModal: undefined };
    }
};

interface IContext {
    state: IState;
    dispatch: Dispatch<Action>;
}

const initialState = {
    typeModal: undefined,
};

export const PricesContext = createContext<IContext>({
    state: initialState,
    dispatch: () => {},
});

export const usePricesContext = () => {
    return useContext(PricesContext);
};

const PricesContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <PricesContext.Provider value={{ state, dispatch }}>
            {children}
        </PricesContext.Provider>
    );
};

export default PricesContextProvider;
