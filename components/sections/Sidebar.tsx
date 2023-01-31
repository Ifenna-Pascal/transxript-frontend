import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useContextHook } from '../../context/AuthContext'
import getToken from '../../hooks/getToken';

type IProps = {
  name: string,
  href: string,
}

function Sidebar() {
  const token = getToken();
  const contract = useContextHook();
  const router = useRouter();
  useEffect(() => {
    if(token) {
    contract?.getUserProfile();
    }
  }, [token]);

  const logout = () => {
    if(window !== undefined) {
        localStorage.clear();
        router.reload()
    }
} 

  return (
    <div className='fixed h-screen flex pl-8 flex-col py-12 bg-primary min-w-[230px]'>
      <Link href={"/"} >
      <h1 className='text-[24px] font-montserrat  text-white'>Transxript</h1> 
       </Link>
       <ul className='my-10 flex flex-col justify-center'>
        <LinkS name="Add Result" href="/adviser_dashboard" />
        <LinkS name="View Result" href="/adviser_dashboard/view" />
        <LinkS name="Change Password" href="/adviser_dashboard/change_password" />
        <li className='list mt-36' onClick={logout}><i className="ri-logout-circle-r-line mr-2  text-[22px]"></i> Logout</li>
       </ul>
     </div>
  )
}

export default Sidebar

export const LinkS = ({name, href}:IProps) => {
  const router = useRouter();
  return (
    <Link href={href}>
    <li className={`list ${router.pathname === href ? 'font-bold' : 'font-normal'}`}>{name}</li>
    </Link>
  )
}