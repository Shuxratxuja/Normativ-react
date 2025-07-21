import React from 'react'
import Head from './components/Head'
import Parfume from '../../assets/images/Parfume.png'
import PS5 from '../../assets/images/PS5.png'
import Kalonka from '../../assets/images/Kalonka.png'
import Woman from '../../assets/images/Woman.png'
import Background2 from '../../assets/images/Background2.png'
import { Link } from 'react-router-dom'

const Featured = () => {
    return (
        <div>
            <div>
                <Head title='Featured' description='New Arrival' />
            </div>
            <div className='flex justify-between mt-[60px]'>
                <div className='relative bg-black w-[630px] h-[670px] rounded-md'>
                    <img className='absolute bottom-0 left-[30px]' src={PS5} alt="" />
                    <div className='absolute bottom-4 left-8 flex flex-col gap-2 text-white'>
                        <p className='font-semibold text-2xl'>PlayStation 5</p>
                        <p className='text-sm'>Black and White version of the PS5 <br /> coming out on sale.</p>
                        <Link className='underline font-medium'>Shop Now</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='w-[630px] h-[284px] bg-black relative rounded-md'>
                        <img src={Woman} className='rotate-360 absolute right-0 rounded-md' alt="" />
                        <div className='absolute bottom-6 left-6 flex flex-col gap-2 text-white'>
                            <p className='font-semibold text-2xl'>Women’s Collections</p>
                            <p className='text-sm'>Featured woman collections that <br /> give you another vibe.</p>
                            <Link className='underline font-medium'>Shop Now</Link>
                        </div>
                    </div>
                    <div className='flex gap-[30px]'>
                        <div className='w-[300px] h-[355px] bg-black relative rounded-md'>
                            <img src={Kalonka} className='rotate-360 absolute bottom-[30px] left-[60px] rounded-md' alt="" />
                            <div className='absolute bottom-6 left-6 flex flex-col gap-2 text-white'>
                                <p className='font-semibold text-2xl'>Speakers</p>
                                <p className='text-sm'>Amazon wireless speakers</p>
                                <Link className='underline font-medium'>Shop Now</Link>
                            </div>
                        </div>
                        <div className='w-[300px] h-[355px] bg-black relative rounded-md'>
                            <img src={Parfume} className='rotate-360 absolute bottom-[30px] left-[60px] rounded-md' alt="" />
                            <div className='absolute bottom-6 left-6 flex flex-col gap-2 text-white'>
                                <p className='font-semibold text-2xl'>Perfume</p>
                                <p className='text-sm'>GUCCI INTENSE OUD EDP</p>
                                <Link className='underline font-medium'>Shop Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured