'use client';
import { useContext, useReducer, Dispatch } from "react";
import React from "react";


enum ActionType {
    OPEN = 'open',
    CLOSE = 'close'
}

type Action = {
    type: ActionType;
}

interface IState {
    isOpen: boolean
}

const initState = {
    isOpen: false
}

const reducer = (state: IState, action: Action) => {
    switch (action.type) {
        case ActionType.OPEN:
            return { isOpen: true }

        case ActionType.CLOSE:
            return { isOpen: false }

        default:
            return state
    }
}

interface IContext {
    state: IState;
    dispatch: Dispatch<Action>
}



export const ContactContext = React.createContext<IContext>({
    state: initState,
    dispatch: () => { }
})

export const useContactContext = () => {
    return useContext(ContactContext)
}


const ContactContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initState)

    return (
        <ContactContext.Provider value={{ state, dispatch }}>
            {children}
        </ContactContext.Provider>
    )
}

export default ContactContextProvider