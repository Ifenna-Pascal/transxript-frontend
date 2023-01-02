import React from 'react'
import Button from '../ui/Button'
import HomeLink from '../ui/HomeLink'
import NavLink from '../ui/NavLink'

const NavBar: React.FC = () => {
    return (
        <nav className='py-5 px-24'>
            <div className='flex items-center justify-between'>
                <HomeLink text="text-[38px]" />
                <div className='flex items-center mx-auto'>
                    <NavLink name='About' href='/#about' />
                    <NavLink name='Components' href='/#components' />
                    <NavLink name='Use-case' href='/#usecase' />
                </div>
                <Button name='Login' className='login' />
            </div>
        </nav>
    )
}

export default NavBar