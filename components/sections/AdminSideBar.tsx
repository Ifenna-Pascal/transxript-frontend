import Link from 'next/link'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { useContextHook } from '../../context/AuthContext';
import getToken from '../../hooks/getToken';
import { LinkS } from './Sidebar'

function AdminSideBar() {
  const context = useContextHook();
  const token = getToken();
    const router = useRouter();
    const logout = () => {
        if(window !== undefined) {
            localStorage.clear();
            router.reload()
        }
    } 

    useEffect(() => {
      if(token) {
      context?.getUserProfile();
      }
    }, [token]);
    
  return (
    <div className='fixed h-screen flex pl-8 flex-col py-12 bg-primary min-w-[230px]'>
    <Link href={"/"} >
    <h1 className='text-[24px] font-montserrat  text-white'>Transxript</h1> 
     </Link>
     <ul className='my-10 flex flex-col justify-center'>
     <LinkS name="Register Adviser" href="/admin" />
      <LinkS name="Add Students" href="/admin/addStudents" />
      <LinkS name="Add Courses" href="/admin/addCourses" />
      <LinkS name="Make Admin" href="/admin/makeAdmin" />
      <li className='list mt-20' onClick={logout}><i className="ri-logout-circle-r-line mr-2  text-[22px]"></i> Logout</li>
     </ul>
   </div>
  )
}

export default AdminSideBar