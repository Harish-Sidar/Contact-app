import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../Config/Firebase'

const AddAndUpdate = ({isOpen,onClose,isUpdate,contact}) => {


    const addContact = async (contact)=>{
        try {
            
            const contactRef = collection(db,"contact");
            await addDoc(contactRef,contact);
            

        } catch (error) {
            console.log(error)
            
        }
    } 

    
    const updateContact = async (contact,id)=>{
        try {
            
            const contactRef = doc(db,"contact",id);
            await updateDoc(contactRef,contact);

        } catch (error) {
            console.log(error)
            
        }
    }

  return (
    <div>
            <Modal isOpen={isOpen} onClose={onClose}>

         <Formik 
         initialValues={isUpdate 
            
            ? {
                name:contact.name,
                email:contact.email,

            } 

           : {
            name:"",
            email:"",
         }} 
         onSubmit = {(values)=>{
            console.log(values)
            isUpdate ? updateContact(values,contact.id):
            addContact(values)
         }}
         
         >
            <Form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <Field name ="name" className="h-10 border"/>
                </div>
                <div className='flex flex-col gap-1'>
                    <label htmlFor="name">Name</label>
                    <Field type="email" name ="email" className="h-10 border"/>
                </div>
                <button className='self-end border cursor-pointer bg-orange-300 px-3 py-1.5'>
                    {isUpdate ? "Update":"Add"} Contact

                </button>
            </Form>
         </Formik>


          </Modal>

    </div> 
  )
}

export default AddAndUpdate 