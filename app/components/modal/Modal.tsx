'use client'
import React from 'react'

import ContactModal from './ContactModal'
import ReactDOM from 'react-dom'
import { ActionType, useContactContext } from '@/app/store/contact-context'

export const Backdrop = () => {

    const contactCtx = useContactContext()

    const close = () => {
        contactCtx.dispatch({ type: ActionType.CLOSE })
    }

    return (
        <div className="backdrop" onClick={close}></div>
    )
}

const Modal = () => {

    const contactCtx = useContactContext()



    return (
        <>
            {contactCtx.state.isOpen &&
                ReactDOM.createPortal(
                    <ContactModal />,
                    document.querySelector('#modal') as HTMLElement
                )}
            {contactCtx.state.isOpen && ReactDOM.createPortal(
                <Backdrop />,
                document.querySelector('#backdrop') as HTMLElement
            )}

        </>
    )
}

export default Modal