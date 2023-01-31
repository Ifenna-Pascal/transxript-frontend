import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import AdminSideBar from '../../components/sections/AdminSideBar'
import Header from '../../components/sections/Header'
import Button from '../../components/ui/Button'
import getToken from '../../hooks/getToken'
import { register } from '../../services/auth'

type IForm =  {
    email: string,
    firstname: string,
    lastname: string,
    academic_session: string
}

const initialState = {
    email: '',
    firstname: '',
    lastname: '',
    academic_session: '',
}

function Admin() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [form, setForm] =  useState<IForm>(initialState)
    const handleChange = (e:any) => {
        setForm({...form, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e:any) => {
        e.preventDefault();
        register(form, setLoading)
    }
    useEffect(() => {
        const token = getToken(); 
        if(!token)  {
        toast.error('Login to view');
          router.push('/')
        }
      },[])
  return (
    <div className='flex'>
        <AdminSideBar />
        <div className='ml-[230px] w-full pt-6 px-10'>
            <Header />
        <form onSubmit={handleSubmit} className="">
       
       <div className='relative w-[80%]'>
        <div className='mt-4'>
            <p className='text-gray-600 pb-2 block font-montserrat text-[16px] relative'>Enter Firstname <span className='absolute ml-1 text-red-500'>*</span></p>
            <input type="text" value={form.firstname} name="firstname" onChange={handleChange} className='w-full text-gray-800 font-PT flex items-center justify-center text-[20px] border py-2 h-[50px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' placeholder='Enter Firstname' required />
        </div>   
        <div className='mt-4'>
            <p className='text-gray-600 pb-2 block font-montserrat text-[16px] relative'>Enter Lastname <span className='absolute ml-1 text-red-500'>*</span></p>
           <input type="text" value={form.lastname} name="lastname" onChange={handleChange} className='w-full text-gray-800 font-PT flex items-center justify-center text-[20px] border py-2 h-[50px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' placeholder='Enter Lastname' required />
        </div>      
        <div className='mt-4'>
        <p className='text-gray-600 pb-2 block font-montserrat text-[16px] relative'>Enter Email <span className='absolute ml-1 text-red-500'>*</span></p>
       <input type="text" value={form.email} name="email" onChange={handleChange} className='w-full text-gray-800 font-PT flex items-center justify-center text-[20px] border py-2 h-[50px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' placeholder='Enter email' required />
        </div>
        <div className='mt-4'>
        <p className='text-gray-600 pb-2 block font-montserrat text-[16px] relative'>Select Session <span className='absolute ml-1 text-red-500'>*</span></p>
        <select name="academic_session" onChange={handleChange}  value={form.academic_session} className='w-full text-gray-800 font-PT text-[20px] border py-3 h-[60px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md'> 
        <option selected disabled>Select Session</option>
        <option value="2017/2018">2017/2018</option>
        <option value="2018/2019">2018/2019</option>
        <option value="2019/2020">2019/2020</option>
        <option value="2020/2021">2020/2021</option>
        <option value="2021/2022">2021/2022</option>

     </select>
        </div>
       </div>
        <Button name={loading ? "submitting..." : "submit"} className='login mt-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300'  />

        </form>
        </div>
    </div>
  )
}

export default Admin