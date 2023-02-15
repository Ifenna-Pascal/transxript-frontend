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
        <div className='flex flex-col items-center justify-center lg:items-start lg:px-24 '>
        {/* <p className='font-popins leading-[36px] py-2 text-[28px] text-gray-300'>Compile & Access.</p> */}
        <h1 className='text-white font-bold font-PT  lg:leading-[54px] lg:mt-16 text-[28px] lg:text-[49px]'>Accessibile Transcipt Builder </h1>
        <p className='lg:max-w-[700px] text-center lg:text-left py-2 lg:py-4 text-[16px] leading-[24px] lg:leading-[30px] font-popins lg:px-0 px-4 font-semibold text-gray-400'>Streamlining education, one transcript at a time with our computerized system, Streamlining academic records, empowering student success, 
Streamlining the academic journey, one transcript at a time. With transxript result safety is assured with a high response time bound. </p>
        <Button name={token ? "Dashboard" : `Let's Get Started`} className='login my-3 py-4 px-16 bg-gray-200 text-primary text-[20px] font-semibold hover:bg-gray-300' onClick={token ? () =>  router.push(profile?.userType === 'admin' ? '/admin' : '/adviser_dashboard') : modalHook?.toggle} />
        {modalHook?.show ? <ModalWraper>
                <h1>Register</h1>
            </ModalWraper> : null}
        </div>
    </section>
    )
}

export default Hero