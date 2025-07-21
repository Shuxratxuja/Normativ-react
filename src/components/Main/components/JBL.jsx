import React, { useEffect, useState } from 'react'
import JBLimg from '../../../assets/images/JBLimg.png'
import Background from '../../../assets/images/Background.png'

const JBL = () => {

    // Rustamxojayev Shuxratxoja

    const calculateTimeLeft = () => {
        const targetDate = new Date()
        targetDate.setDate(targetDate.getDate() + 5)
        targetDate.setHours(0, 0, 0, 0)

        const now = new Date()
        const difference = targetDate - now

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            }
        }

        return timeLeft
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className='relative bg-black w-full h-[500px] mt-[140px] mb-[71px]'>
            <div className='absolute top-[69px] left-[56px]'>
                <p className='text-[#00FF66] font-semibold'>Categories</p>
                <p className='text-5xl leading-16 text-white font-semibold mt-[32px]'>Enhance Your <br /> Music Experience</p>
                <div className='flex gap-6 mt-[32px]'>
                    <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
                        <p className='font-semibold'>{timeLeft.days}</p>
                        <p className='text-xs'>Days</p>
                    </div>
                    <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
                        <p className='font-semibold'>{timeLeft.hours}</p>
                        <p className='text-xs'>Hours</p>
                    </div>
                    <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
                        <p className='font-semibold'>{timeLeft.minutes}</p>
                        <p className='text-xs'>Minutes</p>
                    </div>
                    <div className='w-[62px] h-[62px] rounded-full bg-white flex flex-col justify-center items-center'>
                        <p className='font-semibold'>{timeLeft.seconds}</p>
                        <p className='text-xs'>Seconds</p>
                    </div>
                </div>
                <button className='bg-[#00ff66] text-white rounded-md w-[171px] h-[56px] mt-10'>Buy Now</button>
            </div>
            <div>
                <img className='absolute top-[82px] right-[60px] z-10' src={JBLimg} alt="" />
                <img className='absolute right-[20px]' src={Background} alt="" />
            </div>
        </div>
    )
}

export default JBL