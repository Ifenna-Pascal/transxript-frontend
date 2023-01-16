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
    <div className='fixed h-screen flex items-center flex-col py-12 bg-primary min-w-[250px]'>
      <h1 className='text-[30px] font-montserrat  text-white'>Transxript</h1>
    </div>
  )
}

export default Sidebar