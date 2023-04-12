import React from 'react'

import ContactModal from './ContactModal'
import ReactDOM from 'react-dom'

const Modal = () => {
    return (
        <>
            {
                ReactDOM.createPortal(
                    <ContactModal />,
                    document.querySelector('#modal') as HTMLElement
                )
            }
        </>
    )
}

export default Modal