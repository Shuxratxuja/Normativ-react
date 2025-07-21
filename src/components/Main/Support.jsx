import CustomService from '@/assets/icons/CustomService'
import Delivery from '@/assets/icons/Delivery'
import { Garanty } from '@/assets/icons/Garanty'
import React from 'react'

const Support = () => {
  return (
    <div className='w-[943px] flex gap-22 mx-auto mt-[140px]'>
        <div className='flex flex-col items-center justify-center'>
            <Delivery/>
            <p className='font-semibold text-xl mt-6'>FREE AND FAST DELIVERY</p>
            <p className='text-sm mt-2'>Free delivery for all orders over $140</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <CustomService/>
            <p className='font-semibold text-xl mt-6'>24/7 CUSTOMER SERVICE</p>
            <p className='text-sm mt-2'>Friendly 24/7 customer support</p>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <Garanty/>
            <p className='font-semibold text-xl mt-6'>MONEY BACK GUARANTEE</p>
            <p className='text-sm mt-2'>We reurn money within 30 days</p>
        </div>
    </div>
  )
}

export default Support