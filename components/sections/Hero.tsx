import { useRouter } from 'next/router';
import React, {useEffect} from 'react'
import { useContextHook } from '../../context/AuthContext';
import getToken from '../../hooks/getToken';
import { useModalContext } from '../context/ModalContext'
import ModalWraper from '../modals';
import Button from '../ui/Button'

function Hero() {
  const modalHook = useModalContext();
  const context = useContextHook();
  const token = getToken();
  useEffect(() => {
    if(token) {
    context?.getUserProfile();
    }
  }, [token]);
const profile = context?.state?.profile

  
  const router = useRouter()
  return (
    <section className='w-full min-h-[80vh] flex bg-fixed items-center justify-start heroBg' id='about'>
        <div className='flex flex-col items-start px-24 '>
        {/* <p className='font-popins leading-[36px] py-2 text-[28px] text-gray-300'>Compile & Access.</p> */}
        <h1 className='text-white font-bold font-PT  leading-[54px] mt-16 text-[49px]'>Accessibile Transxript Builder </h1>
        <p className='max-w-[700px] py-4 text-[16px] leading-[30px] font-popins text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, id? Laborum consectetur error ducimus repellendus aspernatur modi sed corrupti consequuntur. Aliquid, accusantium ea illum eum est modi sit. Sit, facere.</p>
        <Button name={token ? "Dashboard" : `Let's Get Started`} className='login my-3 py-4 px-16 bg-gray-200 text-primary text-[20px] font-semibold hover:bg-gray-300' onClick={token ? () =>  router.push(profile?.userType === 'admin' ? '/admin' : '/adviser_dashboard') : modalHook?.toggle} />
        {modalHook?.show ? <ModalWraper>
                <h1>Register</h1>
            </ModalWraper> : null}
        </div>
    </section>
    )
}

export default Hero