import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'
import { Link } from 'react-router-dom'

const ContactPage = () => {
    return (
        // Rustamxojayev Shuxratxoja    
        <div className='max-w-7xl mx-auto'>
            <div className='text-sm text-[#7f7f7f] my-20 flex gap-2'>
                <Link to='/'>Home</Link>/
                <Link className='text-black'>Contact</Link>
            </div>
            <div className='flex gap-[30px]'>
                <div className='w-[340px] h-[440px] py-10 px-9 shadow-md rounded-md'>
                    <div>
                        <div className='flex gap-4 items-center mb-6'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#DB4444" />
                                <path d="M18.5542 14.24L15.1712 10.335C14.7812 9.885 14.0662 9.887 13.6132 10.341L10.8312 13.128C10.0032 13.957 9.76623 15.188 10.2452 16.175C13.1069 22.1 17.8853 26.8851 23.8062 29.755C24.7922 30.234 26.0222 29.997 26.8502 29.168L29.6582 26.355C30.1132 25.9 30.1142 25.181 29.6602 24.791L25.7402 21.426C25.3302 21.074 24.6932 21.12 24.2822 21.532L22.9182 22.898C22.8484 22.9712 22.7565 23.0194 22.6566 23.0353C22.5567 23.0512 22.4543 23.0339 22.3652 22.986C20.1357 21.7021 18.2862 19.8502 17.0052 17.619C16.9573 17.5298 16.9399 17.4272 16.9558 17.3272C16.9717 17.2271 17.02 17.135 17.0932 17.065L18.4532 15.704C18.8652 15.29 18.9102 14.65 18.5542 14.239V14.24Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='font-medium'>Call To Us</p>
                        </div>
                        <p className='mb-4 text-sm'>We are available 24/7, 7 days a week.</p>
                        <p className='text-sm pb-8 border-b-2'>Phone: +8801611112222</p>
                    </div>
                    <div>
                        <div className='flex gap-4 items-center mb-6 mt-8'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="20" fill="#DB4444" />
                                <path d="M10 13L20 20L30 13M10 27H30V13H10V27Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='font-medium'>Write To US</p>
                        </div>
                        <p className='mb-4 text-sm'>Fill out our form and we will contact you within 24 hours.</p>
                        <div className='flex flex-col '>
                            <Link className='text-sm mb-4'>Emails: customer@exclusive.com</Link>
                            <Link className='text-sm'>Emails: support@exclusive.com</Link>
                        </div>
                    </div>
                </div>
                <form className='h-[440px] w-[890px] py-10 px-8 shadow-md rounded-md relative'>
                    <div className='flex gap-4'>
                        <Input className='h-[50px] bg-[#F5F5F5]' placeholder='Your Name *'/>
                        <Input className='h-[50px] bg-[#F5F5F5]' placeholder='Your Email *'/>
                        <Input className='h-[50px] bg-[#F5F5F5]' placeholder='Your Phone *'/>
                    </div>
                    <Textarea className='mt-8 bg-[#f5f5f5] resize-none h-[207px]' placeholder='Your Massage'/>
                    <button type='submit' className='text-white bg-[#db4444] rounded-md py-4 px-12 mt-8 absolute right-8'>Send Massage</button>
                    {/* Rustamxojayev Shuxratxoja */}
                </form>
            </div>
        </div>
    )
}

export default ContactPage