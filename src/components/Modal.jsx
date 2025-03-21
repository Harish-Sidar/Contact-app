import React from 'react'
import { RxCross2 } from "react-icons/rx";

const Modal = ({onClose,isOpen,children}) => {
  return (
    <>
    {isOpen && (

<>

        <div className=' relative min-h-[200px] max-w-[80%] bg-white p-4'>
            <div className='flex justify-end'>
            <RxCross2 onClick={onClose} className='self-end text-3xl cursor-pointer'/>
            </div>
        </div>

        <div onClick={onClose}
        className='absolute top-0 z-40 h-screen w-screen backdrop-blur-2xl'>
            
        </div>
    
</>
    )}

    </>
  )
}

export default Modal 