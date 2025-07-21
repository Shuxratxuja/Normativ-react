import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ShopNow from '@/components/ShopNow'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <div>
            <ShopNow />
            <nav className="max-w-7xl mt-10 mx-auto ">
                <Navbar />
            </nav>
            <div className="mt-4 border-b border-b-[#B3B3B3]"></div>
            <div className='max-w-7xl mx-auto'>
                <div className='text-sm text-[#7f7f7f] flex gap-2 my-20'>
                    <Link to='/'>Home</Link>/
                    <Link className='text-black'>404 Error</Link>
                </div>
                <div className='mx-auto  flex flex-col justify-center items-center'>
                    <p className='font-medium text-9xl mt-15'>404 Not Found</p>
                    <p className='mt-10'>Your visited page not found. You may go home page.</p>
                    <Link to='/' className='px-12 py-4 text-white bg-[#db4444] rounded-md mt-24'>Back to home page</Link>
                </div>
            </div>
             <footer className="bg-black relative">
                <Footer />
            </footer>
        </div>
    )
}

export default NotFoundPage