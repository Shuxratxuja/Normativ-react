import React, { useEffect, useState } from 'react'
import Man from '@/assets/images/Man.png'
import Man2 from '@/assets/images/Man2.png'
import Woman2 from '@/assets/images/Woman2.png'
import {motion} from 'framer-motion'
import { Twitter } from '@/assets/icons/Twitter'
import { Instagram } from '@/assets/icons/Instagram'
import { Linkedin } from '@/assets/icons/Linkedin'
import { Link } from 'react-router-dom'

const teamMembers = [
    {
        name: 'Tom Cruise',
        role: 'Founder & Chairman',
        img: Man
    },
    {
        name: 'Emma Watson',
        role: 'Managing Director',
        img: Woman2
    },
    {
        name: 'Will Smith',
        role: 'Product Designer',
        img: Man2
    },
    {
        name: 'Tom Cruise',
        role: 'Founder & Chairman',
        img: Man
    },
    {
        name: 'Emma Watson',
        role: 'Managing Director',
        img: Woman2
    },
]

// Rustamxojayev Shuxratxoja

const TeamSlider = () => {

    const [startIndex, setStartIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setStartIndex(prev => (prev + 1) % teamMembers.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const visibleMembers = [
        teamMembers[startIndex % teamMembers.length],
        teamMembers[(startIndex + 1) % teamMembers.length],
        teamMembers[(startIndex + 2) % teamMembers.length]
    ]

  return (
    <div className='mt-[140px] flex flex-col overflow-hidden '>
        <motion.div
         key={startIndex}
         initial={{x:300, opacity:0}}
         animate={{x: 0, opacity:1}}
         exit={{x:-300, opacity:0}}
         transition={{duration:0.6}}
         className='flex justify-between'
        >
            {
                visibleMembers.map((member, i) => (
                    <div key={i} className='flex flex-col shrink-0'>
                        <img src={member.img} alt="" />
                        <p className='font-medium text-3xl mt-6'>{member.name}</p>
                        <p >{member.role}</p>
                        <div className='flex gap-3 mt-2'>
                            <Link><Twitter/></Link>
                            <Link><Instagram/></Link>
                            <Link><Linkedin/></Link>
                        </div>
                    </div>
                ))
            }

        </motion.div>
        <div className='flex gap-3 justify-center mt-4'>
            {
                teamMembers.map((_, i) => (
                    <button key={i} onClick={() => setStartIndex(i)} className={`w-3 h-3 rounded-full ${i === startIndex ? 'bg-[#db4444]' : 'bg-gray-400' }`}>
                    </button>
                ))
            }
        </div>
    </div>
  )
}

export default TeamSlider