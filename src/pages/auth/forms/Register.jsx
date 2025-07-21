import React, { useContext, useState } from 'react'
import LoginImg from '../../../assets/images/LoginImg.png'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContex } from '@/context/AuthContext'
import { instance } from '@/api/inctance'
import { toast } from 'react-toastify'


const Register = () => {


  const { loginFn } = useContext(AuthContex)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const navigate = useNavigate()

  const login = async (e) => {
    e.preventDefault()
    try {
      const data = {
        email,
        password
      }
      const responce = await instance.post('/auth/login', data)
      loginFn(responce.data.access_token)
      navigate('/')
      toast.success('Login succesful')
    } catch (error) {
      toast.error('Login yoki parol notogri')
    }
  }


  return (
    <div className='flex justify-between mt-[60px]'>
      <img src={LoginImg} alt="" />
      <div className='max-w-7xl mx-auto flex flex-col mt-[126px]'>
        <p className='font-medium text-4xl'>Log in to Exclusive</p>
        <p className='mt-6'>Enter your details below</p>
        <form onSubmit={login} className='flex flex-col gap-10 mt-12'>
          <input onChange={({target}) => setEmail(target.value)}  type="email" className='outline-none border-b-2 pb-2' placeholder='Email or Phone Number' />
          <input onChange={({target}) => setPassword(target.value)} type="password" className='outline-none border-b-2 pb-2' placeholder='Password' />
          <div className='flex justify-between items-center'>
            <button className='text-white px-12 py-4 bg-[#db4444] rounded-md'>Log In</button>
            <Link to='/signup' className='text-text-primary'>Forget Password?</Link>
            {/* RUSTAMXOJAYEV SHUXRATXOJA */}
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register