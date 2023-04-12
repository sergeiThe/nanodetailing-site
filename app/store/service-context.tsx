'use state'
import { useReducer, useContext, createContext, Dispatch } from 'react'

interface IServiceContent {
    title: string;
    text: string;
}

export enum ServiceActionType {
    OPEN = 'open',
    CLOSE = 'close'
}

type Action = {
    type: ServiceActionType;
    payload?: IServiceContent;
}

interface IState {
    title?: string;
    text?: string;
}


const reducer = (state: IState, action: Action) => {
    switch (action.type) {
        case ServiceActionType.OPEN:
            return { title: action.payload!.title, text: action.payload!.text }

        case ServiceActionType.CLOSE:
            return { title: undefined, text: undefined }
    }
}

interface IContext {
    state: IState;
    dispatch: Dispatch<Action>
}

const initialState = {
    title: undefined,
    text: undefined
}

const ServiceContext = createContext<IContext>({
    state: initialState,
    dispatch: () => { }
})


export const useServiceContext = () => {
    return useContext(ServiceContext)
}

const ServiceContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <ServiceContext.Provider value={{ state, dispatch }}>
            {children}
        </ServiceContext.Provider>
    )
}

export default ServiceContextProvider