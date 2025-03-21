import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";

function ContactCard ({contact}) {
  return (
    <div key = {contact.id} className='flex 
    items-center justify-between bg-yellow-100 rounded-lg p-2' >
     <div className='flex gap-1'>
     <FaRegUserCircle className='text-4xl text-orange-300'/>
      <div className=''>
        <h2 className='font-medium'>{contact.name}</h2>
        <p className='text-sm'>{contact.email}</p>

      </div> 
     </div>
      <div className='flex text-3xl cursor-pointer'>
      <RiEditCircleLine />
        <MdDelete className='text-orange-400 '/>
      </div>
    </div>
)
}

export default ContactCard 
