import React from 'react'
import { Link } from 'react-router-dom'

const ShopNow = () => {
    return (
        <div className='bg-black'>
            <div className='flex p-[15px] justify-center container mx-auto'>
                <div className='flex gap-2'>
                    <p className='text-white'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                    <Link className='text-white font-bold underline'>ShopNow</Link>
                </div>
                <select className='text-white ml-[230px] border-none outline-none'>
                    <option className='bg-black ' value="en">English</option>
                    <option className='bg-black ' value="uz">Uzbek</option>
                    <option className='bg-black ' value="ru">Russia</option>
                </select>
            </div>
        </div>
    )
}

export default ShopNow