import React from 'react'
import { SendHorizonal } from 'lucide-react'
import { Link } from 'react-router-dom'
import { QRcode } from '@/assets/icons/QRcode'
import { PlayMarket } from '@/assets/icons/PlayMarket'
import { AppleStore } from '@/assets/icons/AppleStore'
import { Facebook } from '@/assets/icons/Facebook'
import { Twitter } from '@/assets/icons/Twitter'
import { Instagram } from '@/assets/icons/Instagram'
import { Linkedin } from '@/assets/icons/Linkedin'

const Footer = () => {
    return (
        <div>
            <div className='max-w-7xl mx-auto mt-[140px] pt-20 pb-[124px] flex justify-between'>
                <div>
                    <p className='text-white font-bold text-2xl'>Exclusive</p>
                    <p className='text-white font-medium text-xl mt-4'>Subscribe</p>
                    <p className='text-white mt-4'>Get 10% off your first order</p>
                    <div className='relative mt-4 w-max'>
                        <input type="email" placeholder='Enter your email' className='border-white border w-[217px] h-12 pl-4 text-gray-300  rounded-md' />
                        <SendHorizonal className='absolute text-white top-3 right-2' />
                    </div>
                </div>
                <div className='flex gap-22'>
                    <div>
                        <p className='text-white font-medium text-xl'>Support</p>
                        <p className='text-white mt-6'>111 Bijoy sarani, Dhaka,<br />  DH 1515, Bangladesh.</p>
                        <div className='flex flex-col'>
                            <Link className='text-white mt-4'>exclusive@gmail.com</Link>
                            <Link className='text-white mt-4'>+88015-88888-9999</Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-white font-medium text-xl'>Account</p>
                        <div className='flex flex-col'>
                            <Link className='text-white mt-4'>My Account</Link>
                            <div className='flex gap-2'>
                                <Link className='text-white mt-4'>Login /</Link>
                                <Link className='text-white mt-4'>Register </Link>
                            </div>
                            <Link className='text-white mt-4'>Cart</Link>
                            <Link className='text-white mt-4'>Wishlist</Link>
                            <Link className='text-white mt-4'>Shop</Link>
                        </div>
                    </div>
                    <div>
                        <p className='text-white font-medium text-xl'>Quick Link</p>
                        <div className='flex flex-col'>
                            <Link className='text-white mt-4'>Privacy Policy</Link>
                            <Link className='text-white mt-4'>Terms Of Use</Link>
                            <Link className='text-white mt-4'>FAQ</Link>
                            <Link className='text-white mt-4'>Contact</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='text-white font-medium text-xl'>Download App</p>
                    <p className='text-[#AFAFAF] mt-6 text-xs'>Save $3 with App New User Only</p>
                    <div className='flex mt-2 gap-2'>
                        <QRcode />
                        <div className='flex flex-col gap-3'>
                            <PlayMarket />
                            <AppleStore />
                        </div>
                    </div>
                    <div className='flex mt-6 gap-6 text-white'>
                        <Link><Facebook /></Link>
                        <Link><Twitter /></Link>
                        <Link><Instagram /></Link>
                        <Link><Linkedin /></Link>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#3d3d3d] h-[0.5px]"></div>
            <div className="flex gap-2 text-[#3d3d3d] items-center w-max mx-auto pt-2 pb-2">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5 18.3332C15.1024 18.3332 18.8334 14.6022 18.8334 9.99984C18.8334 5.39746 15.1024 1.6665 10.5 1.6665C5.89765 1.6665 2.16669 5.39746 2.16669 9.99984C2.16669 14.6022 5.89765 18.3332 10.5 18.3332Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 8.14799C13 8.14799 11.9706 6.6665 10.2549 6.6665C8.53924 6.6665 7.16669 8.14799 7.16669 9.99984C7.16669 11.8517 8.53924 13.3332 10.2549 13.3332C11.9706 13.3332 13 11.8517 13 11.8517" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>Copyright Rimel 2022. All right reserved</p>
            </div>
        </div>
    )
}

export default Footer