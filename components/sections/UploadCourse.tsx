/* eslint-disable no-unused-vars */
import React from 'react'
import Button from '../ui/Button'

type Props = {
  step: string;
  setStep: ( step: string) => void;
}

function UploadCourse({step, setStep}: Props) {
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setStep('2');
    }
  return (
    <div>
      <div className='flex flex-col'>
      <h1 className='text-[30px] py-2  text-gray-700 font-montserrat'> Welcome Jude Adeth 🎉  </h1>
      <p className='text-gray-400 pb-4 -mt-2 font-montserrat text-[20px]'>ifennamonanu70@gmail.com</p>
      <p className='text-gray-400 pb-4 -mt-2 font-montserrat text-[18px]'>2017/2018</p>
    </div>
    <div className='my-6 min-h-[400px] max-w-[900px] w-full rounded-md'>
     <h1 className='text-[24px] pb-5  text-gray-700 font-montserrat'> Upload Courses Details </h1>
    <form onSubmit={handleSubmit}>
    <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Enter course title <span className='absolute ml-1 text-red-500'>*</span></p>
     <input placeholder='Engineering maths' type="text" className='w-full font-PT text-gray-800 text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' />
     </div>
     <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Enter course code <span className='absolute ml-1 text-red-500'>*</span></p>
     <input placeholder='FEG 227' type="text" className='w-full text-gray-800 text-[20px] font-PT border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' />
     </div>     <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Enter Session <span className='absolute ml-1 text-red-500'>*</span></p>
     <select   className='w-full text-gray-800 font-PT text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md'> 
        <option value="">2017/2018</option>
        <option value="">2017/2018</option>
        <option value="">2017/2018</option>
        <option value="">2017/2018</option>

     </select>
     </div>     <div className='mb-5'>
     <p className='text-gray-600 pb-2 font-montserrat text-[18px] relative'>Enter credit load<span className='absolute ml-1 text-red-500'>*</span></p>
     <select placeholder='Enter'  className='w-full text-gray-800 font-PT text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' > 
        <option value="">1</option>
        <option value="">2</option>
        <option value="">3</option>
        <option value="">4</option>
        <option value="">5</option>

     </select>
     </div>
     <Button className='login my-6 py-4 rounded-md px-16 bg-primary hover:text-primary text-white text-[20px] font-semibold hover:bg-gray-300' name='Next' />
    </form>
    </div>
</div>
  )
}

export default UploadCourse