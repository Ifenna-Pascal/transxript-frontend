import { useRouter } from 'next/router'
import React, {useEffect} from 'react'
import { useContextHook } from '../../context/AuthContext'
import getToken from '../../hooks/getToken'
import { useModalContext } from '../context/ModalContext'
import ModalWraper from '../modals'
import Auth from '../modals/Auth'
import Button from '../ui/Button'

function Action() {
  const context = useContextHook();
  const router = useRouter();
  const token = getToken();
  useEffect(() => {
    if(token) {
    context?.getUserProfile();
    }
  }, [token]);
const profile = context?.state?.profile
  const modalHook = useModalContext()
  return (
    <section className='action hidden lg:flex items-center flex-col justify-center w-full min-h-[450px] bg-fixed bg-top  bg-no-repeat bg-cover' id='components'>
        <h1 className='text-white font-bold font-PT capitalize  lg:leading-[54px] mb-6 mt-16 text-[50px]'> Safeguard your result today!! </h1>
        <Button name={token ? "Dashboard" : `Let's Get Started`} className='login bg-primary my-3 py-4 px-16 duration-500 text-white text-[20px] font-semibold hover:text-primary hover:bg-gray-300'   onClick={token ? () =>  router.push(profile?.userType === 'admin' ? '/admin' : '/adviser_dashboard') : modalHook?.toggle}/>
        {modalHook?.show ? <ModalWraper>
                <Auth />
            </ModalWraper> : null}
    </section>
    )
}

export default Action