import { useState,useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import { collection,getDocs, snapshotEqual,onSnapshot } from 'firebase/firestore'
import { db } from './Config/Firebase'
import ContactCard from './components/ContactCard'
import AddAndUpdate from './components/AddAndUpdate'
import UseDisclouse from './Hooks/UseDisclouse'



function App() { 

  const [contacts, setContacts] = useState([])

  const {isOpen,onClose,onOpen} = UseDisclouse(); 


  useEffect(() => {
    const getContacts = async () =>{
      try {

        const contactsRef = collection(db,"contact")

      onSnapshot(contactsRef,(snapshot)=>{ 

        const contactLists = snapshot.docs.map((doc)=>{
          return{
            id:doc.id,
            ...doc.data(),

          }
        })
        setContacts(contactLists);
        return contactLists;

      })
    
      } catch (error) {
        console.log(error) 
        
      }
    }

    getContacts();
  
 
  }, [])
  
  const filterContacts = (e)=>{
    const value = e.target.value;

    const contactsRef = collection(db,"contact")

    onSnapshot(contactsRef,(snapshot)=>{ 

      const contactLists = snapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          ...doc.data(),

        }
      }) 
  
      const filteredContacts = contactLists.filter((contact)=>
        contact.name.toLowerCase().includes(value.toLowerCase())
      )

      setContacts(filteredContacts);
      return filteredContacts;
    })
  } 

  return (
    <>
    <div className='mx-auto max-w-[370px] px-4'>
    <Navbar/>
    <div className='flex gap-2'>
      <div className='relative flex items-center flex-grow'>
    <IoSearch className=' absolute ml-1 text-3xl text-white' />
      <input onChange={filterContacts}
       type="text" className='h-10 flex-grow rounded-md border
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
<ToastContainer position='bottom-center'/>
    </>
  )
}

export default App

