import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Timer = () => {

    const calculateTimeLeft = () => {
        const targetData = new Date('2025-07-15T00:00:00').getTime()
        const now = new Date().getTime()
        const difference = targetData - now

        const timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        }
        return difference > 0 ? timeLeft : { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const TimeBox = ({ label, value }) => (
        <div className='flex flex-col items-center mt-12'>
            <p className='text-xs font-medium'>{label}</p>
            <p className='text-[32px] font-bold'>{String(value).padStart(2, '0')}</p>
        </div>
    )

    return (
        <div className='flex items-center justify-between gap-'>
            <div>
                <div className='flex items-center gap-4'>
                    <div className='bg-[#DB4444] w-5 h-10 rounded-md'></div>
                    <p className='text-text-primary'>Today’s</p>
                </div>
                <p className='mt-6 font-semibold text-4xl'>Flash Sales</p>
            </div>
            <div className='flex gap-4 ml-22'>
                <TimeBox label="Days" value={timeLeft.days} />
                <div className='flex flex-col items-center gap-2 mt-20'>
                    <div className='w-1 h-1 rounded-full bg-[#db4444]'></div>
                    <div className='w-1 h-1 rounded-full bg-[#db4444]'></div>
                </div>
                <TimeBox label="Hours" value={timeLeft.hours} />
                <div className='flex flex-col items-center gap-2 mt-20'>
                    <div className='w-1 h-1 rounded-full bg-[#db4444]'></div>
                    <div className='w-1 h-1 rounded-full bg-[#db4444]'></div>
                </div>
                <TimeBox label="Minutes" value={timeLeft.minutes} />
                <div className='flex flex-col items-center gap-2 mt-20'>
                    <div className='w-1 h-1 rounded-full bg-[#db4444]'></div>
                    <div className='w-1 h-1 rounded-full bg-[#db4444]'></div>
                </div>
                <TimeBox label="Seconds" value={timeLeft.seconds} />
            </div>
            <div className='flex gap-4 mt-12 ml-auto'>
                <Button variant='secondary' className='w-[46px] h-[46px] rounded-full flex items-center justify-center'>
                    <ArrowLeft />
                </Button>
                <Button variant='secondary' className='w-[46px] h-[46px] rounded-full flex items-center justify-center'>
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

export default Timer