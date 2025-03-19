import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { IoSearch } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { collection } from 'firebase/firestore'
import { db } from './Config/Firebase'

function App() { 

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () =>{
      try {

        const contactsRef = collection(db,"contacts")
        const contactsSnapshot = await getDocs(contactsRef)
        console.log(contactsSnapshot)
        
      } catch (error) {
        
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
    <CiCirclePlus className='text-5xl cursor-pointer text-white' />

    
    </div>
    </div>
    </>
  )
}

export default App
