import { deleteDoc, doc } from 'firebase/firestore';
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiEditCircleLine } from "react-icons/ri";
import { db } from '../Config/Firebase';
import AddAndUpdate from './AddAndUpdate';
import UseDisclouse from '../Hooks/UseDisclouse';
import { toast } from 'react-toastify';

function ContactCard ({contact}) {
    const {isOpen,onClose,onOpen} = UseDisclouse(); 
  

const deleteContact = async(id)=>{
  try { 

    await deleteDoc(doc(db,"contact",id))
    toast.success("Contact Deleted Successflully");
    
  } catch (error) {
    console.log(error)
    
  }
}

  return (
    <>
    <div 
    key = {contact.id} className='flex 
    items-center justify-between bg-yellow-100 rounded-lg p-2' >
     <div className='flex gap-1'>
     <FaRegUserCircle className='text-4xl text-orange-300'/>
      <div className=''>
        <h2 className='font-medium'>{contact.name}</h2>
        <p className='text-sm'>{contact.email}</p>

      </div> 
     </div>
      <div className='flex text-3xl cursor-pointer'>
      <RiEditCircleLine onClick={onOpen}  />
        <MdDelete onClick={()=>deleteContact(contact.id)} className='text-orange-400 '/>
      </div>
    </div>
    <AddAndUpdate contact={contact} isUpdate isOpen={isOpen} onClose={onClose} />
    </>
    
)
}

export default ContactCard 
