import React, { useContext } from 'react'
import Logo from './Logo'
import { Link, NavLink } from 'react-router-dom'
import { ChevronRight, CircleX, Heart, LogOut, Search, ShoppingBag, ShoppingCart, Star, User2 } from 'lucide-react'
import { Input } from '../ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { AuthContex } from '@/context/AuthContext'

const Navbar = () => {

    const { isAuthenticated } = useContext(AuthContex)


    return (


        <div className='flex items-center justify-between '>
            <Logo />
            <ul className='flex gap-12 '>
                <NavLink to='/'>{({ isActive }) => <li className={isActive ? "border-b-2  border-b-[#7f7f7f]" : ''}>Home</li>}</NavLink>
                <NavLink to='/contact'>{({ isActive }) => <li className={isActive ? "border-b-2 border-b-[#7f7f7f]" : ''}>Contact</li>}</NavLink>
                <NavLink to='/about'>{({ isActive }) => <li className={isActive ? "border-b-2 border-b-[#7f7f7f]" : ''}>About</li>}</NavLink>
                <NavLink to='/signup'>{({ isActive }) => <li className={isActive ? "border-b-2 border-b-[#7f7f7f]" : ''}>Sign Up</li>}</NavLink>
            </ul>
            <div className='flex items-center gap-6'>
                <div className='relative flex items-center'>
                    <Input className="pr-12 py-5 bg-[#f5f5f5]" placeholder="What are you looking for?" />
                    <Search size={20} className='absolute right-1' />
                </div>
                <div className='flex items-center gap-4'>
                    <Link to='/wishlist'><Heart size={20} /></Link>
                    <Link to='/cart'><ShoppingCart size={20} /></Link>
                    {
                        isAuthenticated === true ? <Link>
                        <Popover>
                            <PopoverTrigger asChild>
                                <button><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="32" height="32" rx="16" fill="#DB4444" />
                                    <path d="M21 23V21.3333C21 20.4493 20.691 19.6014 20.1408 18.9763C19.5907 18.3512 18.8446 18 18.0667 18H12.9333C12.1554 18 11.4093 18.3512 10.8592 18.9763C10.309 19.6014 10 20.4493 10 21.3333V23" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 15C17.6569 15 19 13.6569 19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12C13 13.6569 14.3431 15 16 15Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                </button>
                            </PopoverTrigger>
                            <PopoverContent className='bg-[rgbs(117,114,144,0.9)] backdrop-blur-[50px] flex flex-col gap-3'>
                                <Link to='/account' className='text-white flex items-center gap-2'><User2 /><p>Manage My Account</p></Link>
                                <Link to='checkout' className='text-white flex items-center gap-2'><ShoppingBag /><p>My Order</p></Link>
                                <Link className='text-white flex items-center gap-2'><CircleX /><p>My Cancellations</p></Link>
                                <Link className='text-white flex items-center gap-2'><Star /><p>My Reviews</p></Link>
                                <Link className='text-white flex items-center gap-2'><LogOut className='rotate-180' /><p>Logout</p></Link>
                            </PopoverContent>
                        </Popover>
                    </Link> : ''
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar