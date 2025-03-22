import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { collection,getDocs } from 'firebase/firestore'
import { db } from './Config/Firebase'
import ContactCard from './components/ContactCard'
import AddAndUpdate from './components/AddAndUpdate'


function App() { 

  const [contacts, setContacts] = useState([])
  const [isOpen, setOpen] = useState(false);

  const onOpen = () =>{
    setOpen(true);
  }

  const onClose = () =>{
    setOpen(false);
  }
  useEffect(() => {
    const getContacts = async () =>{
      try {

        const contactsRef = collection(db,"contact")
        const contactsSnapshot = await getDocs(contactsRef)
        const contactLists = contactsSnapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data(),

          }
        })
        setContacts(contactLists)
        
      } catch (error) {
        console.log(error) 
        
      }
    }

    getContacts();
  
 
  }, [])
  

  return (
    <>
    <div className='mx-auto max-w-[370px] px-4'>
    <Navbar/>
    <div className='flex gap-2'>
      <div className='relative flex items-center flex-grow'>
    <IoSearch className=' absolute ml-1 text-3xl text-white' />
      <input type="text" className='h-10 flex-grow rounded-md border
       border-white bg-transparent text-white pl-9 ' />
    </div> 
    <CiCirclePlus onClick={onOpen} className='text-5xl cursor-pointer text-white' />

    
    </div>
    <div className='mt-4 flex flex-col gap-3'>
       {contacts.map((contact) => (
       <ContactCard key={contact.id} contact = {contact} />
        
      ))     
      } 
      
    </div>
    </div>
<AddAndUpdate onClose={onClose} isOpen={isOpen} />
    </>
  )
}

export default App

