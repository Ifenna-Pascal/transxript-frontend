/* eslint-disable @next/next/no-img-element */
import React from 'react'
// import Listings from '../ui/Listings'
// import { Ri24HoursLine } from 'react-icons/ri'

function About() {
  return (
    <div className='grid grid-cols-3 h-[600px] pl-24 mb-24 mt-32  items-center'>
        <div className='col-span-2 w-[500px] relative h-full'>
            <img src="/assets/hero.jpg" className='w-full  h-[600px] drops object-cover' alt="about_img" />
            <div className='absolute bottom-0 top-0 w-full bg-[rgba(14,51,134,0.4)] '></div>
            <img src="/assets/hero.jpg" className='w-[500px]  h-[350px] rounded-md absolute ml-[200px] -mt-[175px] top-[50%] object-cover' alt="about_img" />
        </div>
        <div className='col-span-1 -ml-36 justify-center flex flex-col min-h-full w-full'>
            <p className='font-popins text-left text-primary text-[20px] uppercase font-semibold'>Computerized Trasncript System.</p>
            <h1 className='text-gray-800 font-bold font-PT py-2 leading-[54px]  text-[55px]'>How transxript works!! </h1>
           <p className='text-[20px] text-gray-500 font-popins'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad velit architecto corporis Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, illum!</p>
           {/* <ul className='py-4'>
            <li  className='text-[18px] text-gray-500 font-popins'>Studnet Authentication.</li>
            <li  className='text-[18px] text-gray-500 font-popins'>Review Compiled Result</li>
            <li  className='text-[18px] text-gray-500 font-popins'>Download Compiled Result </li>
           </ul> */}
        </div>
    </div>
  )
}

export default About