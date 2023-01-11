import React from 'react'
import { useModalContext } from '../context/ModalContext'
import ModalWraper from '../modals'
import Auth from '../modals/Auth'
import Button from '../ui/Button'
import HomeLink from '../ui/HomeLink'
import NavLink from '../ui/NavLink'

const NavBar: React.FC = () => {
    const modalHook = useModalContext();
    // console.log(modalHook?.show)
    return (
        <nav className='py-5 px-24 sticky top-0 z-50 bg-white shadow-lg'>
            <div className='flex items-center justify-between'>
                <HomeLink text="text-[38px]" />
                <div className='flex items-center mx-auto'>
                    <NavLink name='About' href='/#about' />
                    <NavLink name='Components' href='/#components' />
                    <NavLink name='Use-case' href='/#usecase' />
                </div>
                <Button name='Login' className='login' onClick={() => modalHook?.toggle()} />
            </div>
            {modalHook?.show ? <ModalWraper>
                <Auth />
            </ModalWraper> : null}
        </nav>
    )
}

export default NavBar