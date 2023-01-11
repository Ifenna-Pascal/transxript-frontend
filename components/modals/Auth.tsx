/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Button from '../ui/Button'

function Auth() {
    const router = useRouter();
    const [active, setActive] = useState<string>("student")
    const state = active === "student" ? " bg-primary text-white " : "text-gray-800"
    const state2 = active === "adviser" ? "bg-primary text-white" : "text-gray-800"

    const handleSubmit = (e:React.SyntheticEvent):void => {
        e.preventDefault();
        if(active === "adviser") {
            router.push("/adviser_dashboard")
        }else {
            router.push("/student_dashboard")
        }
    }

  return (
    <div className='w-full relative h-full'>
        <div className='flex  w-full justify-between'>
            <button className={`basis-[50%] text-[16px] w-full flex items-center py-2 justify-center tracking-wider font-popins  ${state}`} onClick={() => setActive('student')}> Student </button>
            <button className={`basis-[50%] flex text-[16px] w-full items-center py-2 justify-center tracking-wider font-popins ${state2} `} onClick={() => setActive('adviser')}> Academic Adviser </button>
        </div>
        <form className='py-4 px-4' onSubmit={handleSubmit}>
            <div>
                <input type="text" className='focus:outline-none w-full mt-3 text-gray-600 font-PT text-[18px]  py-3  flex items-center border-gray-300 border-b-2' placeholder={active  === 'adviser' ? "Enter Email" : 'Enter registration number'} />
                {active === 'adviser' && 
                <input type="text" className='focus:outline-none duration-300 w-full mt-3 text-gray-600 font-PT text-[18px]  py-3  flex items-center border-gray-300 border-b-2' placeholder='Enter Pasword' />
                }
                <Button name={`Submit`} className='login mt-3 px-16 bg-gray-200 text-primary text-[18px] font-semibold hover:bg-gray-300' />
            </div>
        </form>
    </div>
  )
}

export default Auth