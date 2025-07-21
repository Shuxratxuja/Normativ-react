import AppleIcon from '@/assets/icons/AppleIcon'
import { ArrowRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AppleImage from '@/assets/images/AppleImage.png'
import { AnimatePresence, motion } from 'framer-motion'

// Rustamxojayev Shuxratxoja

const slides = [{
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
    image: AppleImage,
},
{
    title: 'iPhone 14 Pro Series',
    description: 'Up to 10% off Voucher',
    image: AppleImage,
},
{
    title: 'iPhone 14 Plus Series',
    description: 'Up to 10% off Voucher',
    image: AppleImage,
},
{
    title: 'iPhone 14 Pro Max Series',
    description: 'Up to 10% off Voucher',
    image: AppleImage,
},
{
    title: 'iPhone 14 Mini Series',
    description: 'Up to 10% off Voucher',
    image: AppleImage,
},
]

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length)
        }, 3000)
        return () => clearInterval(interval);
    }, [])

    const slide = slides[currentSlide];

    return (
        <div className='bg-black w-[1000px] h-[344px] mt-8 relative overflow-hidden'>
            <AnimatePresence mode='wait'>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                    className='absolute w-full h-full top-0 left-0'>
                    <div className='absolute  flex items-center gap-6 left-[64px] top-[58px]'>
                        <AppleIcon />
                        <p className='text-white text-xl'>{slide.title}</p>
                    </div>
                    <p className='font-semibold text-white text-5xl left-[64px] absolute top-[127px] leading-[56px]'>{slide.description}</p>
                    <Link className='text-white flex gap-2 absolute left-[64px] bottom-[47px]'><span className='border-b border-white'> Shop Now</span> <ArrowRight /></Link>
                    <img className='absolute right-0 top-4' src={slide.image} alt="apple-image" />
                </motion.div>
            </AnimatePresence>
            <div className='flex absolute bottom-3 left-1/2 -translate-x-1/2 gap-2 z-10'>
                {
                    slides.map((_, index) => (
                        <button key={index}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-[#DB4444] outline-2 outline-white" : 'bg-gray-500'}`}
                        onClick={() => setCurrentSlide(index)}
                        ></button>
                    ))}
            </div>
        </div>
    )
}

export default Slider