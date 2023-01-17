import React from 'react'
import { useModalContext } from '../context/ModalContext'
import ModalWraper from '../modals'
import Auth from '../modals/Auth'
import Button from '../ui/Button'

function Action() {
  const modalHook = useModalContext()
  return (
    <section className='action flex items-center flex-col justify-center w-full min-h-[450px] bg-fixed bg-top mb-12 bg-no-repeat bg-cover'>
        <h1 className='text-white font-bold font-PT capitalize  leading-[54px] mb-6 mt-16 text-[50px]'> Safeguard your result today!! </h1>
        <Button name={`Let's Get Started`} className='login bg-primary my-3 py-4 px-16 duration-500 text-white text-[20px] font-semibold hover:text-primary hover:bg-gray-300' onClick={modalHook?.toggle}/>
        {modalHook?.show ? <ModalWraper>
                <Auth />
            </ModalWraper> : null}
    </section>
    )
}

export default Action