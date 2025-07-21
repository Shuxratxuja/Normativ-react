import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CartPage = () => {

// Rustamxojayev Shuxratxoja

    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem("cart")) || []
        setCartItems(cart)
    }, [])

    useEffect(() => {
        const total = cartItems.reduce((acc, item) => acc + item.curPrice * item.quantity, 0)
        setSubtotal(total)
    }, [cartItems])

    const updateQnt = (index, value) => {
        const updatedCart = [...cartItems]
        updatedCart[index].quantity = parseInt(value) || 1
        setCartItems(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }

    const deleteItem = (index) => {
        const updatedCart = [...cartItems]
        updatedCart.splice(index, 1)
        setCartItems(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }

    const updatedCart = () => {
        localStorage.setItem('cart', JSON.stringify(cartItems))
    }

  return (
    <div className='max-w-7xl mx-auto flex flex-col'>
        <div className='flex gap-2 text-sm my-20'>
            <Link to='/' className='text-[#7f7f7f]'>Home</Link>/
            <Link>Cart</Link>
        </div>
        <div className='flex flex-col gap-10 '>
            <div className='flex justify-between px-10 py-6 shadow-md rounded-md items-center'>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Subtotal</p>
            </div>
            {
                cartItems.map((item, index) => (
                    <div key={index} className='grid grid-cols-5 items-center px-10 py-6 shadow-md rounded-md relative'>
                        <div className='flex items-center gap-4 col-span-2'>
                            <img className='w-[54px] h-[54px] object-cover' src={item.img} alt={item.title} />
                            <p className='font-medium'>{item.title}</p>
                        </div>
                        <p>${item.curPrice}</p>
                        <input type="number"
                        min='1'
                        value={item.quantity}
                        onChange={(e) => updateQnt(index, e.target.value)}
                        className='w-[72px] h-11 px-2 rounded-md border-2'
                        />
                        <p>${item.curPrice * item.quantity}</p>
                        <Button
                        variant='ghost'
                        className='absolute top-2 right-2 text-red-500'
                        onClick={() => deleteItem(index)}
                        >
                            <Trash2/>
                        </Button>
                    </div>
                ))
            }
            <div className='flex justify-between'>
                <button className='py-4 px-12 border-2 rounded-md'>Return To Shop</button>
                <button className='py-4 px-12 border-2 rounded-md'>Update Cart</button>
            </div>
        </div>
        <div className='mt-20 flex justify-between'>
            <div>
                <input className='py-4 border-2 rounded-md pl-6 pr-[164px]' placeholder='Coupon Code' type="text" />
                <button className='py-4 px-12 bg-[#db4444] text-white rounded-md ml-4'>Apply Coupon</button>
            </div>
            <div className='px-6 py-8 w-[470px] h-[324px] border-2'>
                <p className='text-xl font-medium'>Cart Total</p>
                <div className='flex mt-6 pb-4 justify-between items-center border-b-2'>
                    <p>Subtotal:</p>
                    <p>${subtotal}</p>
                </div>
                <div className='flex  mt-6 pb-4 justify-between items-center border-b-2'>
                    <p>Shipping:</p>
                    <p>Free</p>
                </div>
                <div className='flex  mt-6 pb-4 justify-between items-center '>
                    <p>Total:</p>
                    <p>${subtotal}</p>
                </div>
                <Link to="/checkout" className='bg-[#db4444] px-12 py-4 ml-20 rounded-md text-white'>Procees to checkout</Link>
            </div>
        </div>
    </div>
  )
}

export default CartPage