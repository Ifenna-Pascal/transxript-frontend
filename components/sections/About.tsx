/* eslint-disable @next/next/no-img-element */
import React from 'react'

function About() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 h-[500px] lg:pl-24 mb-8 lg:mb-24 lg:mt-32 rounded-[16px]  items-center'>
        <div className='col-span-1 lg:col-span-2 lg:w-[400px] relative h-full'>
            <img src="/assets/hero.jpg" className='w-full h-[500px] drops object-cover' alt="about_img" />
            <div className='absolute bottom-0 top-0 w-full bg-[rgba(14,51,134,0.4)] '></div>
            <img src="/assets/hero.jpg" className='w-[300px] hidden lg:block h-[280px] rounded-md absolute ml-[200px] -mt-[140px] top-[50%] object-cover' alt="about_img" />
        </div>
        <div className='col-span-1 lg:-ml-36  justify-center flex flex-col py-6 lg:py-0 px-4 lg:py-4 lg:min-h-full w-full'>
            <p className='font-popins text-left text-primary text-[16px] uppercase font-semibold'>Computerized Trasncript System.</p>
            <h1 className='text-gray-800 font-bold font-PT py-2 leading-[35px] lg:leading-[54px] text-[35px] lg:text-[45px]'>How transxript works!! </h1>
           <p className='text-[16px] text-gray-500 font-popins'>Our flow process is generic serving the needs of both students and acadmic advisers in the department. AS an acadmic adviser you get assigned a particular academic session by the department, our platform makes results easily assessible in a nice format for easy accessibilty. Students have access to our project and builds retrieves results in real time. </p>
        </div>
    </div>
  )
}

export default About