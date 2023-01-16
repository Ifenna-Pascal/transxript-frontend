import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Results from '../components/sections/Results'
import SelectCourse from '../components/sections/SelectCourse'
import Sidebar from '../components/sections/Sidebar'
import UploadCourse from '../components/sections/UploadCourse'
import getToken from '../hooks/getToken'
export interface formsProps {
  year: string;
  semester: string;
}

function Adviser() {
  
  const initialState:formsProps = {year: '', semester: ''};
  const [form,setForm] = useState<formsProps>(initialState)
  const router = useRouter();
  useEffect(() => {
    const token = getToken();
    if(!token)  {
    toast.error('Login to view');
      router.push('/')
    }
  },[])
  const handleChange = (e:any) => {
    setForm({...form, [e.target.name]: e.target.value})
}
  const [step, setStep] = useState<string>('1')
  return (
    <div className='flex '>
        <Sidebar />
        <div className='ml-[250px] w-full py-6 px-10'>
          
          { step === '1' ?  <UploadCourse handleChange={handleChange} step={step} setStep={setStep} form={form}/> : step === '2' ? <SelectCourse setStep={setStep} form={form} /> : <Results setStep={setStep}/> }
        </div>
    </div>
  )
}

export default Adviser

