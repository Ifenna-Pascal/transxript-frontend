import React, { useState } from 'react'
import Results from '../components/sections/Results'
import Sidebar from '../components/sections/Sidebar'
import UploadCourse from '../components/sections/UploadCourse'

function Adviser() {
  const [step, setStep] = useState<string>('1')
  return (
    <div className='flex '>
        <Sidebar />
        <div className='ml-[250px] w-full py-6 px-10'>
          
          { step === '1' ?  <UploadCourse step = {step} setStep={setStep}/> : <Results/> }
        </div>
    </div>
  )
}

export default Adviser