/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { toast } from 'react-toastify';
import { useContextHook } from '../../context/AuthContext';
import { formsProps } from '../../pages/adviser_dashboard';
import Button from '../ui/Button'
import Header from './Header';

type Props = {
  step: string;
  setStep: ( step: string) => void;
  form: formsProps,
  handleChange: (e:any) => void
}


function UploadCourse({step, setStep, form, handleChange}: Props) {

  const context = useContextHook();
    const handleSubmit = (e: { preventDefault: () => void }) => {
      
      e.preventDefault();
        if(!(form.year && form.semester)) return toast.error('Fields are required')
        setStep('2');
    }
  

  return (
    <div>
      <Header />
    <div className='my-6 min-h-[400px] max-w-[900px] w-full rounded-md'>
     <h1 className='text-[24px] pb-5  text-gray-700 font-montserrat'> Upload Courses Details </h1>
    <form onSubmit={handleSubmit}>
    {/* <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Enter course title <span className='absolute ml-1 text-red-500'>*</span></p>
     <input placeholder='Engineering maths' type="text" className='w-full font-PT text-gray-800 text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' />
     </div> */}
     {/* <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Enter course code <span className='absolute ml-1 text-red-500'>*</span></p>
     <input placeholder='FEG 227' type="text" className='w-full text-gray-800 text-[20px] font-PT border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' />
     </div>    */}
       <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Select Academic Year <span className='absolute ml-1 text-red-500'>*</span></p>
     <select name="year" onChange={handleChange}  className='w-full text-gray-800 font-PT text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md'> 
        <option selected disabled>Select Year</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>

     </select>
     </div>   
       <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Select Semester<span className='absolute ml-1 text-red-500'>*</span></p>
     <select onChange={handleChange} name='semester'  className='w-full text-gray-800 font-PT text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' > 
       <option selected disabled >Select Semester</option>

        <option value="first">First</option>
        <option value="second">Second</option>
     </select>
     </div>
     <Button className='login my-6 py-4 rounded-md px-16 bg-primary hover:text-primary text-white text-[20px] font-semibold hover:bg-gray-300' name='Next' />
    </form>
    </div>
</div>
  )
}

export default UploadCourse