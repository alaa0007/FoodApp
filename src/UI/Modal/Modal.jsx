import React, { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, open, className='' }) => {
    const modalRef = useRef()

    useEffect(() => {
        const modal = modalRef.current
        if(open){
            modal?.showModal()
        }

        return () => {
            modal?.close()
        }
    }, [open])

    return createPortal(
        <dialog  ref={modalRef} className={`modal ${className}`}>
            { children }
        </dialog>
        , document.getElementById('modal')
    );
}

export default Modal;