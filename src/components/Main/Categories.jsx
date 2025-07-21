import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Phone from '@/assets/icons/Phone'
import Computer from '@/assets/icons/Computer'
import SmartWatch from '@/assets/icons/SmartWatch'
import Camer from '@/assets/icons/Camer'
import HeadPhone from '@/assets/icons/HeadPhone'
import Gaming from '@/assets/icons/Gaming'
import Head from './components/Head'

const categories = [
    {icon:<Phone/> , label: 'Phones'},
    {icon:<Computer/> , label: 'Computers'},
    {icon:<SmartWatch/> , label: 'SmartWatch'},
    {icon:<Camer/> , label: 'Camera'},
    {icon:<HeadPhone/> , label: 'HeadPhones'},
    {icon:<Gaming/> , label: 'Gaming'},
]

const Categories = () => {

    const [active, setActive] = useState(0)

    const handlePrev = () => {
        setActive((prev) => (prev === 0 ? categories.length -1 : prev-1))
    }


    const handleNext = () => {
        setActive((prev) => (prev === categories.length -1 ? 0 : prev + 1))
    }

  return (
    <div>
        <div className='flex justify-between'>
           <Head title='Categories' description='Browse By Category'/>
            <div className='flex gap-4 mt-12 ml-auto'>
                <Button onClick={handlePrev} variant='secondary' className='w-[46px] h-[46px] rounded-full flex items-center justify-center'>
                    <ArrowLeft />
                </Button>
                <Button onClick={handleNext} variant='secondary' className='w-[46px] h-[46px] rounded-full flex items-center justify-center'>
                    <ArrowRight />
                </Button>
            </div>
        </div>
        <div className='mt-[60px] flex justify-between'>
            {
                categories.map((category, index) => (
                    <div key={index} 
                    className={`w-[170px] h-[145px] border-2 rounded-sm flex flex-col justify-center items-center gap-4 cursor-pointer transition-all duration-300
                    ${index === active ? "bg-[#db4444] border-[#db4444] text-white" : "border-[#b3b3b3] hover:bg-[#db4444] hover:border-[#db4444] hover:text-white"} `}>
                        {category.icon}
                        <p>{category.label}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Categories