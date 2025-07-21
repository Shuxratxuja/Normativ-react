import React, { useContext, useState } from 'react'
import LoginImg from '../../../assets/images/LoginImg.png'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { instance } from '@/api/inctance'

const Login = () => {


 const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const navigate = useNavigate()

  const register  = async (e) => {
    e.preventDefault()
    try {
      let userData = {
        name,
        email,
        password,
        avatar
      }
      const responce = await instance.post('/users', userData)
      console.log(responce);
      navigate('/')
      toast.success('Register succesful')
    } catch (error) {
      toast.error('Malumotlar notogri')
    }
  }


  return (
    <div className='flex mt-[60px] justify-between'>
      <img src={LoginImg} alt="" />
      <div className='max-w-7xl mx-auto mt-[126px]'>
        <p className='font-medium text-4xl mb-6'>Create an account</p>
        <p>Enter your details below</p>
        <form onSubmit={register} className='mt-12 flex flex-col gap-10'>
          <input onChange={({target}) => setName(target.value)} className='outline-none border-b-2 pb-1' type="text" placeholder='Name' />
          <input onChange={({target}) => setEmail(target.value)} className='outline-none border-b-2 pb-1' type="email" placeholder='Email or Phone Number' />
          <input  onChange={({target}) => setPassword(target.value)} className='outline-none border-b-2 pb-1' type="password" placeholder='Password' />
          <input type="url" className='outline-none border-b-2 pb-1' onChange={({target}) => setAvatar(target.value)} placeholder='https://your_avatar.com' />
          <button className='bg-[#db4444] text-white py-4 rounded-md'>Create Account</button>
        </form>
        <button className='flex gap-4 items-center justify-center py-4 border px-[84px] rounded-md mt-4'>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_15087_3336)">
              <path d="M23.766 12.7764C23.766 11.9607 23.6999 11.1406 23.5588 10.3381H12.24V14.9591H18.7217C18.4528 16.4494 17.5885 17.7678 16.323 18.6056V21.6039H20.19C22.4608 19.5139 23.766 16.4274 23.766 12.7764Z" fill="#4285F4" />
              <path d="M12.2401 24.5008C15.4766 24.5008 18.2059 23.4382 20.1945 21.6039L16.3276 18.6055C15.2517 19.3375 13.8627 19.752 12.2445 19.752C9.11388 19.752 6.45946 17.6399 5.50705 14.8003H1.5166V17.8912C3.55371 21.9434 7.7029 24.5008 12.2401 24.5008Z" fill="#34A853" />
              <path d="M5.50253 14.8003C4.99987 13.3099 4.99987 11.6961 5.50253 10.2057V7.11481H1.51649C-0.18551 10.5056 -0.18551 14.5004 1.51649 17.8912L5.50253 14.8003Z" fill="#FBBC04" />
              <path d="M12.2401 5.24966C13.9509 5.2232 15.6044 5.86697 16.8434 7.04867L20.2695 3.62262C18.1001 1.5855 15.2208 0.465534 12.2401 0.500809C7.7029 0.500809 3.55371 3.05822 1.5166 7.11481L5.50264 10.2058C6.45064 7.36173 9.10947 5.24966 12.2401 5.24966Z" fill="#EA4335" />
            </g>
            <defs>
              <clipPath id="clip0_15087_3336">
                <rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
          <p>Sign up with Google</p>
        </button>
        <div className='flex items-center mt-6 justify-center gap-4'>
          <p className='text-[#4D4D4D]'>Already have account?</p>
          <Link to='/login' className='font-medium text-[#4D4D4D] underline'>Log in</Link>
        </div>
      </div>
    </div>
  )
}

export default Login