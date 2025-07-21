import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HavicImg1 from '@/assets/images/HavicImg1.png'
import HavicImg2 from '@/assets/images/HavicImg2.png'
import HavicImg3 from '@/assets/images/HavicImg3.png'
import HavicImg4 from '@/assets/images/HavicImg4.png'
import HavicImg5 from '@/assets/images/HavicImg5.png'
import Stars from '@/assets/icons/Stars'
import { Heart, Minus, Plus } from 'lucide-react'
import  GamePad  from '@/assets/images/GamePad.png'
import  Keyboard  from '@/assets/images/Keyboard.png'
import  Monitor  from '@/assets/images/Monitor.png'
import  Culler  from '@/assets/images/Culler.png'
import Cart from '@/components/Main/components/Cart'

const releted = [
  {
      id: 1,
      title: "HAVIT HV-G92 Gamepad",
      discount: 40,
      orgPrice: 160,
      curPrice: 120,
      rating: 88,
      img: GamePad,
      type: "discount"
    },
    {
      id: 2,
      title: "AK-900 Wired Keyboard",
      discount: 35,
      orgPrice: 1160,
      curPrice: 960,
      rating: 75,
      img: Keyboard,
      type:"discount"
    },
    {
      id: 3,
      title: "IPS LCD Gaming Monitor",
      discount: 30,
      orgPrice: 400,
      curPrice: 370,
      rating: 99,
      img: Monitor,
      type:"discount"
    },
    {
      id: 4,
      title: "RGB liquid CPU Cooler",
      discount: 30,
      orgPrice: 170,
      curPrice: 160,
      rating: 65,
      img: Culler,
      type: null
    },
]

const ProductPage = () => {

  // Rustamxojayev Shuxratxoja

  const [mainImg, setMainImg] = useState(HavicImg1)

  const thumbnails = [HavicImg2, HavicImg3, HavicImg4, HavicImg5]

  const [count, setCount] = useState(1)

  const handleIncrement = () => {
    setCount(prev => prev + 1)
  }

  const handleDecrement = () => {
    if (count > 1) {
      setCount(prev => prev - 1)
    }
  }

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='text-sm text-[#7f7f7f] flex gap-2 my-20'>
        <Link to='/account'>Account</Link>/
        <Link>Gaming</Link>/
        <Link className='text-black'>Havic HV G-92 Gamepad</Link>
      </div>
      <div className='flex gap-[70px]'>
        <div className='flex gap-[30px]'>
          <div className='flex flex-col gap-[30px]'>
            {
              thumbnails.map((thumb, index) => (
                <div key={index} className='px-6 py-3 bg-[#f5f5f5] rounded-md cursor-pointer hover:scale-105 transition' onClick={() => setMainImg(thumb)}>
                  <img src={thumb} alt={`${index + 1}`} />
                </div>
              ))
            }
          </div>
          <div className='bg-[#f5f5f5] px-[27px] pb-[131px] pt-[154px] rounded-md'>
            <img className='w-[446px] h-[315px] object-contain' src={mainImg} alt="" />
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold text-2xl'>Havic HV G-92 Gamepad</p>
          <div className='flex items-center mt-3'>
            <Stars />
            <p className='text-sm text-[#7F7F7F] ml-2'>(150 Reviews)</p>
            <div className='h-4 w-[1px] bg-[#7F7F7F] mx-4'></div>
            <p className='text-[#66FFA3] text-sm'>In Stock</p>
          </div>
          <p className='text-2xl mt-4'>$192.00</p>
          <p className='text-sm mt-4'>PlayStation 5 Controller Skin High quality vinyl with air <br /> channel adhesive for easy bubble free install & mess <br /> free removal Pressure sensitive.</p>
          <div className='w-100 h-[1px] bg-[#7f7f7f] my-6'></div>
          <div className='flex items-center'>
            <p className='text-xl'>Colours:</p>
            <div className='flex items-center gap-2 ml-6'>
              <input type="radio" className='w-5 h-5 accent-[#A0BCE0]' />
              <input type='radio' className='accent-[#E07575]  rounded-full  w-5 h-5' />
            </div>
          </div>
          <div className='flex items-center mt-6'>
            <p className='text-xl '>Size:</p>
            <div className='flex items-center ml-6 gap-2'>
              <button className='w-8 h-8 rounded-md border-2 hover:bg-[#db4444] hover:text-white hover:border-[#db4444]'>XS</button>
              <button className='w-8 h-8 rounded-md border-2 hover:bg-[#db4444] hover:text-white hover:border-[#db4444]'>S</button>
              <button className='w-8 h-8 rounded-md border-2 bg-[#db4444] text-white border-[#db4444]'>M</button>
              <button className='w-8 h-8 rounded-md border-2 hover:bg-[#db4444] hover:text-white hover:border-[#db4444]'>L</button>
              <button className='w-8 h-8 rounded-md border-2 hover:bg-[#db4444] hover:text-white hover:border-[#db4444]'>XL</button>
            </div>
          </div>
          <div className='flex mt-6 items-center'>
            <div className='flex items-center w-[159px] h-11 border-1 border-[#7f7f7f] rounded-md '>
              <button onClick={handleDecrement} className='px-3 ' ><Minus /></button>
              <div className='w-[1px] h-11 bg-[#7f7f7f]'></div>
              <span className='px-6'>{count}</span>
              <div className='w-[1px] h-11 bg-[#7f7f7f]'></div>
              <button onClick={handleIncrement} className='px-3 '><Plus /></button>
            </div>
            <button className='text-white font-medium px-12 py-[10px] ml-4 bg-[#db4444] rounded-md'>Buy Now</button>
            <button className='border-2 w-10 h-10 rounded-md items-center flex justify-center ml-4'><Heart /></button>
          </div>
          <div className='w-100 h-[180px] rounded-md border-2 border-[#7f7f7f] mt-10'>
            <div className='flex mt-6 ml-4 gap-4'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_261_4843)">
                  <path d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 11.8182H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M1.81836 15.4545H8.48503" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5 19.0909H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_261_4843">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className='font-medium'>Free Delivery</p>
                <p className='font-medium text-xs'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='w-[397px] h-[2px] bg-[#7f7f7f] my-4'></div>
            <div className='flex mt-6 ml-4 gap-4'>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_261_4865)">
                  <path d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_261_4865">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div>
                <p className='font-medium'>Return Delivery</p>
                <p className='font-medium text-xs'>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-[140px]'>
        <div className='flex items-center gap-4'>
          <div className='w-5 h-10 bg-[#db4444] rounded-md'></div>
          <p className='text-text-primary font-semibold'>Related Item</p>
        </div>
        <div className='flex justify-between mt-[60px]'>
            {
              releted.map(({type, rating, curPrice, orgPrice, title, img, discount, id}) => (
                <Cart title={title} key={id} curPrice={curPrice} orgPrice={orgPrice} discount={discount} type={type} rating={rating} img={img}/>
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default ProductPage
