import Link from 'next/link';
import React, { useEffect } from 'react'
import { useContextHook } from '../../context/AuthContext'
import getToken from '../../hooks/getToken';

function Sidebar() {
  const token = getToken();
  const contract = useContextHook();

  useEffect(() => {
    if(token) {
    contract?.getUserProfile();
    }
  }, [token]);

  return (
    <div className='fixed h-screen flex pl-8 flex-col py-12 bg-primary min-w-[230px]'>
      <Link href={"/"} >
      <h1 className='text-[24px] font-montserrat  text-white'>Transxript</h1> 
       </Link>
       <ul className='my-10 flex flex-col justify-center'>
        <li className='list'> Add Result</li>
        <li className='list'> View Result</li>
        <li className='list'>Change Password</li>
        <li className='list mt-36'><i className="ri-logout-circle-r-line mr-2  text-[22px]"></i> Logout</li>
       </ul>
     </div>
  )
}

export default Sidebar