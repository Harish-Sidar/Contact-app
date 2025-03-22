import React from 'react'
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";

const Modal = ({onClose,isOpen,children}) => {
  return createPortal (
    <>
    {isOpen && (

<>

        <div className=' relative z-50 m-auto min-h-[200px] max-w-[80%] bg-white p-4'>
            <div className='flex justify-end'>
            <RxCross2 onClick={onClose} className='self-end text-3xl cursor-pointer'/>
            </div> 
            {children}
        </div>

      <div className='absolute top-0 z-40 h-screen w-screen backdrop-blur-2xl'/>
    
</>
    )}

    </>
  ,document.getElementById("modal-root"))
}

export default Modal 