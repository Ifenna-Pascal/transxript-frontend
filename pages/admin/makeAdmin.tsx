import React, {useState} from 'react'
import AdminSideBar from '../../components/sections/AdminSideBar'
import Header from '../../components/sections/Header'
import Button from '../../components/ui/Button'

function MakeAdmin() {
    const [email, setEmail] = useState<string>('')
    const handleSubmit = (e:any) => {
        e.preventDefault();
    }
    const handleChange = (e:any) => {
        setEmail(e.target.value)
    }
  return (
    <div className='flex'>
    <AdminSideBar />
    <div className='ml-[230px] w-full py-6 px-10'>
        <Header />    

        <form onSubmit={handleSubmit} className="my-10">
        <h1 className='text-[20px] mb-3 text-gray-700 font-montserrat'> Make Admin  </h1>

<div className='relative w-[80%]'>
<p className='text-gray-600 pb-2 font-montserrat text-[16px] relative'>Enter Email <span className='absolute ml-1 text-red-500'>*</span></p>

<input type="text"  value={email} onChange={handleChange} className='w-full text-gray-800 font-PT flex items-center justify-center text-[20px] border py-2 h-[50px] border-gray-300 focus:outline-gray-300 px-4 tex rounded-md' placeholder='ad..d@gmial.com' required />
</div>
 <Button name="Submit" className='login my-6 py-3 rounded-md px-12 bg-primary hover:text-primary text-white text-[18px] font-semibold hover:bg-gray-300'  />

 </form>
    </div>
</div>
  )
}

export default MakeAdmin