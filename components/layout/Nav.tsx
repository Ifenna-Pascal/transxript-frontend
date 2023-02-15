import { useRouter } from 'next/router'
import React from 'react'
import getToken from '../../hooks/getToken'
import StudentToken from '../../hooks/studnet'
import { useModalContext } from '../context/ModalContext'
import ModalWraper from '../modals'
import Auth from '../modals/Auth'
import Button from '../ui/Button'
import HomeLink from '../ui/HomeLink'
import NavLink from '../ui/NavLink'

const NavBar: React.FC = () => {
    const router = useRouter();
    const modalHook = useModalContext();
    const token = getToken() || StudentToken();
    const logout = () => {
        if(window !== undefined) {
            localStorage.clear();
            router.reload()
        }
    }    
    return (
        <nav className='py-4 w-full px-4 lg:px-24 sticky top-0 z-50 bg-white shadow-lg'>
            <div className='flex items-center justify-between'>
                <HomeLink text="text-[24px]" />
                <div className='flex items-center mx-auto'>
                    <NavLink name='About' href='/#about' />
                    <NavLink name='Get started' href='/#components' />
                    {/* <NavLink name='Use-case' href='/#usecase' /> */}
                </div>
               {
                token ? <button onClick={logout} className='login'><i className="ri-logout-circle-r-line mr-3 text-[16px]"></i>Logout</button> :  <Button name='Login' className='login' onClick={() => modalHook?.toggle()} />
               }
            </div>
            {modalHook?.show ? <ModalWraper>
                <Auth />
            </ModalWraper> : null}
        </nav>
    )
}

export default NavBar