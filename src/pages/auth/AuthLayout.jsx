import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ShopNow from '@/components/ShopNow'
import { AuthContex } from '@/context/AuthContext'
import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthLayout = () => {

    const { isAuthenticated } = useContext(AuthContex)


  return isAuthenticated ? (
            <Navigate to='/' />
        ) : (<div>
            <ShopNow />
            <nav className="max-w-7xl mt-10 mx-auto ">
                <Navbar />
            </nav>
            <div className="mt-4 border-b border-b-[#B3B3B3]"></div>
            <Outlet />
            <footer className="bg-black relative">
                <Footer />
            </footer>
        </div>
        )
        
}

export default AuthLayout