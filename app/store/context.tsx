'use client'
import { createContext, useContext, useState } from "react";
import React from "react";

type Contact = {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const defaultValues: Contact = {
    isOpen: false,
    open: () => { },
    close: () => { }
}

const contactContext = createContext<Contact>(defaultValues)

export const useContact = () => {
    return useContext(contactContext)
}


type Props = {
    children: React.ReactNode
}

const ContactContextProvider = ({ children }: Props) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)

    const openContactHandler = () => {
        setIsOpen(true)
    }

    const closeContactHandler = () => {
        setIsOpen(false)
    }

    const value: Contact = {
        isOpen: isOpen,
        open: openContactHandler,
        close: closeContactHandler
    }


    return (
        <contactContext.Provider value={value}>
            {children}
        </contactContext.Provider>
    )

}

export default ContactContextProvider