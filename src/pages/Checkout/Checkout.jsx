import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import GamePad from '@/assets/images/GamePad.png'
import Monitor from '@/assets/images/Monitor.png'
import Bkash from '@/assets/icons/Bkash.svg'
import Visa from '@/assets/icons/Visa.svg'
import Mastercard from '@/assets/icons/Mastercard.svg'
import Nagad from '@/assets/icons/Nagad.svg'

const Checkout = () => {

    // Rustamxojayev Shuxratxoja subtotal dinamik qilish


    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) ||[]
        setCartItems(cart)
    }, [])

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.curPrice * item.quantity, 0)
        setSubtotal(total)
    }, [cartItems])

    return (
        <div className='max-w-7xl mx-auto'>
            <div className='flex gap-2 my-20 text-[#7f7f7f]'>
                <Link>Account</Link>/
                <Link>My Account</Link>/
                <Link>Product</Link>/
                <Link>View Cart</Link>/
                <Link className='text-black'>CheckOut</Link>
            </div>
            <div className='flex gap-[150px]'>
                <div className='flex flex-col gap-12 w-[470px]'>
                    <p className='font-medium text-4xl'>Billing Details</p>
                    <form className='flex flex-col gap-8'>
                        <div>
                            <Label className='text-[#999999] mb-2 '>First Name <span className='text-[#F1B4B4]'>*</span></Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Label className='text-[#999999] mb-2'>Company Name</Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Label className='text-[#999999] mb-2'>First Name <span className='text-[#F1B4B4]'>*</span></Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Label className='text-[#999999] mb-2'>Street Address <span className='text-[#F1B4B4]'>*</span></Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Label className='text-[#999999] mb-2'>Apartment, floor, etc. (optional)</Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Label className='text-[#999999] mb-2'>Town/City <span className='text-[#F1B4B4]'>*</span></Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Label className='text-[#999999] mb-2'>Phone Number <span className='text-[#F1B4B4]'>*</span></Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div>
                            <Label className='text-[#999999] mb-2'>Email Address <span className='text-[#F1B4B4]'>*</span></Label>
                            <Input className='h-[50px] bg-[#F5F5F5]' />
                        </div>
                        <div className='flex gap-4'>
                            <input type='checkbox' className='accent-[#db4444] w-6 h-6' />
                            <p>Save this information for faster check-out next time</p>
                        </div>
                    </form>
                </div>
                <div className='w-[527px] mt-20'>
                    <div className='w-[425px] flex flex-col gap-6'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[54px] h-[54px] object-cover' src={GamePad} alt="" />
                                <p>LCD Monitor</p>
                            </div>
                            <p>$650</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <img className='w-[54px] h-[54px] object-cover' src={Monitor} alt="" />
                                <p>H1 Gamepad</p>
                            </div>
                            <p>$1100</p>
                        </div>
                        <div>
                            <div className='flex mt-6 pb-4 justify-between items-center border-b-2'>
                                <p>Subtotal:</p>
                                <p>${subtotal}</p>
                            </div>
                            <div className='flex  mt-6 pb-4 justify-between items-center border-b-2'>
                                <p>Shipping:</p>
                                <p>Free</p>
                            </div>
                            <div className='flex  mt-6 justify-between items-center '>
                                <p>Total:</p>
                                <p>${subtotal}</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-4'>
                                <input type="radio" id='1' className='accent-black w-6 h-6' />
                                <p>Bank</p>
                            </div>
                            <div className='flex gap-2'>
                                <img src={Bkash} alt="" />
                                <img src={Visa} alt="" />
                                <img src={Mastercard} alt="" />
                                <img src={Nagad} alt="" />
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <input type="radio" id='1' className='accent-black w-6 h-6' />
                            <p>Cash on delivery</p> 
                        </div>
                    </div>
                    <div className='flex items-center mt-4'>
                        <input className='py-4 border-2 rounded-md pl-6 pr-[134px]' placeholder='Coupon Code' type="text" />
                        <button className='w-[311px] h-[56px] bg-[#db4444] text-white rounded-md ml-4'>Apply Coupon</button>
                    </div>
                    <button className='w-[211px] mt-4 h-[56px] bg-[#db4444] text-white rounded-md '>Place Order</button>
                </div>
            </div>
        </div>
        // Rustamxojayev Shuxratxoja
    )
}

export default Checkout