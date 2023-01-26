import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import AllResults from '../../components/sections/AllResults';
// import Header from '../../components/sections/Header'
import SelectCourse from '../../components/sections/SelectCourse';
import Sidebar from '../../components/sections/Sidebar'
import UploadCourse from '../../components/sections/UploadCourse';
import getToken from '../../hooks/getToken';


export interface formsProps {
  year: string;
  semester: string;
}

function ViewResult() {
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
    <div className='ml-[230px] py-6 w-full px-10'>
          
          { step === '1' ?  <UploadCourse text="Retrieve Results" handleChange={handleChange} step={step} setStep={setStep} form={form}/> : step === '2' ? <SelectCourse setStep={setStep} form={form} /> : <AllResults form={form} setStep={setStep} /> }
    </div>
</div>
  )
}

export default ViewResult