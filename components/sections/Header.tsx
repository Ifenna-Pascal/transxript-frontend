import React from 'react'
import { useContextHook } from '../../context/AuthContext'

function Header() {
    const context = useContextHook( )
const profile = context?.state?.profile

  return (
    <div className='flex flex-col'>
    <h1 className='text-[30px] py-2  text-gray-700 font-montserrat'> Welcome {`${profile?.firstname} ${profile?.lastname}`} 🎉  </h1>
    <p className='text-gray-400 pb-4 -mt-2 font-montserrat text-[20px]'>{profile?.email}</p>
    <p className='text-gray-400 pb-4 -mt-4 font-montserrat text-[18px]'>Assigned Session- {profile?.academic_session}</p>
  </div>
  )
}

export default Header