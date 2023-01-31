import { useRouter } from 'next/router'
import React, {useEffect, useState} from 'react'
import { toast } from 'react-toastify'
import Header from '../../components/sections/Header'
import Sidebar from '../../components/sections/Sidebar'
import Button from '../../components/ui/Button'
import getToken from '../../hooks/getToken'
import { changePassword } from '../../services/auth'

function ChangePassword() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [password, setPassword] = useState<string>('')
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false)
    const handleSubmit = (e:any) => {
        e.preventDefault();
        if(password.length < 6 ) {
            toast.error('Password must be at least 6 characters')
            return 
        }
        changePassword(password)
    }
    const handleChange = (e:any) => {
        setPassword(e.target.value)
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
        <Sidebar />
         <div className='ml-[230px] w-full py-6 px-10'>
        
        <Header />
        <form onSubmit={handleSubmit} className="my-10">

       <div className='relative w-[80%]'>
       <p className='text-gray-600 pb-2 font-montserrat text-[16px] relative'>Enter Password <span className='absolute ml-1 text-red-500'>*</span></p>

    <i className={`${show ? "ri-eye-off-line" : "ri-eye-line"} absolute right-[10px] bottom-[13px] text-gray-500 cursor-pointer`} onClick={() => setShow(!show)}></i>
       <input type={show ? "text" : "password"} min="6" value={password} onChange={handleChange} className='w-full text-gray-800 font-PT flex items-center justify-center text-[20px] border py-2 h-[50px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' placeholder='****************' required />
       </div>
        <Button name="Submit" className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300'  />

        </form>
    </div>
    </div>
  )
}

export default ChangePassword