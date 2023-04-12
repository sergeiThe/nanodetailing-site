'use client'
import React from 'react'

import ContactModal from './ContactModal'
import ReactDOM from 'react-dom'
import { useContactContext } from '@/app/store/contact-context'

const Modal = () => {

    const ctx = useContactContext()

    return (
        <>
            {ctx.state.isOpen &&
                ReactDOM.createPortal(
                    <ContactModal />,
                    document.querySelector('#modal') as HTMLElement
                )
            }
        </>
    )
}

export default Modal