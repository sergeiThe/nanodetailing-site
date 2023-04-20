'use state'
import { useReducer, useContext, createContext, Dispatch } from 'react'

interface Content {
    p1: string;
    p2: string;
    p3: string;
    p4?: string;
    p5?: string;
    p6?: string;

}

interface IServiceContent {
    name: string;
    content: Content;
    image: string;
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
    name?: string;
    content?: Content;
    image?: string;
}


const reducer = (state: IState, action: Action) => {
    switch (action.type) {
        case ServiceActionType.OPEN:
            return { ...state, name: action.payload?.name, content: action.payload?.content, image: action.payload?.image }

        case ServiceActionType.CLOSE:
            return { ...state, name: undefined, content: undefined, image: undefined }
    }
}

interface IContext {
    state: IState;
    dispatch: Dispatch<Action>
}

const initialState = {
    name: undefined,
    content: undefined,
    image: undefined
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