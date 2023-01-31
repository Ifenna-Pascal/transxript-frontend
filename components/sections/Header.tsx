import React from 'react'
import { useContextHook } from '../../context/AuthContext'

function Header() {
    const context = useContextHook( )
const profile = context?.state?.profile
// console.log(profile);

  return (
    <div className='flex flex-col'>
    <h1 className='text-[24px] py-2  text-gray-700 font-montserrat'> Welcome {`${profile?.firstname} ${profile?.lastname}`} 🎉  </h1>
    <p className='text-gray-500 pb-4 -mt-2 font-montserrat text-[17px]'>{profile?.email}</p>
    <p className='text-gray-400 pb-4 -mt-4 font-montserrat text-[14px]'>assigned session- {profile?.academic_session}</p>
  </div>
  )
}

export default Header