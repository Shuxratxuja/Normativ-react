import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, Heart } from 'lucide-react'
import FiveStar from '../../../assets/icons/FiveStar.svg'
import { toast } from 'react-toastify'

const CartTwo = ({ title, img, curPrice, rating, type, color, color2, colored, type2 }) => {

    const [isInWishlist, setIsInWishlist] = useState(false)

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
        const found = wishlist.some(item => item.title === title)
        setIsInWishlist(found)
    }, [title])

    const [selectColor, setSelectColor] = useState(null)

    const addToCart = () => {
        const product = {
            title,
            img,
            curPrice,
            rating,
            quantity: 1,
        }

        const cart = JSON.parse(localStorage.getItem("cart")) || []

        const isAlreadyInCart = cart.some(item => item.title === product.title)

        if (isAlreadyInCart) {
            toast.info("Bu mahsulot allaqachon savatchaga qo‘shilgan!")
        } else {
            cart.push(product)
            localStorage.setItem("cart", JSON.stringify(cart))
            toast.success("Mahsulot savatchaga qo‘shildi!")
        }
    }

    const toggleWishlist = () => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []

        const index = wishlist.findIndex(item => item.title === title)

        if (index > -1) {
            wishlist.splice(index, 1)
            localStorage.setItem("wishlist", JSON.stringify(wishlist))
            toast.info("Mahsulot wishlistdan olib tashlandi!")
            setIsInWishlist(false)
        } else {
            const product = { title, img, curPrice, rating }
            wishlist.push(product)
            localStorage.setItem("wishlist", JSON.stringify(wishlist))
            toast.success("Mahsulot wishlistga qo‘shildi!")
            setIsInWishlist(true)
        }
    }

    return (
        <div className='group w-max'>
            <div className='w-[270px] h-[250px] rounded-md bg-[#F5F5F5] relative p-12'>
                {
                    type === "newProduct" ? <span className='bg-[#00FF66] rounded-md py-1 px-3 text-white text-xs absolute top-3 left-3'>NEW</span> : ''
                }
                <img src={img} alt="product-img" />
                <div className='flex flex-col gap-2 absolute top-3 right-3'>
                    <Button
                        onClick={toggleWishlist}
                        variant='secondary'
                        className={`cursor-pointer bg-white rounded-full ${isInWishlist ? 'text-red-500' : 'text-black'}`}>
                        <Heart fill={isInWishlist ? 'red' : 'none'} />
                    </Button>
                    <Button variant='secondary' className='cursor-pointer bg-white rounded-full'><Eye /></Button>
                </div>
                <p
                    className='absolute text-white bg-black w-[270px] justify-center items-center h-10 bottom-0 rounded-b-md left-0 hidden group-hover:flex'
                    onClick={addToCart}>
                    Add To Cart
                </p>
            </div>
            <p className='mt-4 font-medium'>{title}</p>
            <div className='flex gap-3 mt-2'>
                <p className='text-text-primary font-medium'>${curPrice}</p>
                <img src={FiveStar} alt="stars" />
                <p className='font-semibold text-gray-500'>({rating})</p>
            </div>
            {
                type2 === "newProduct2" && color && color2 && (
                    <div className='flex mt-2 gap-2'>
                        {
                            [color, color2].map((clr, indx) => (
                                <div
                                    key={indx}
                                    onClick={() => setSelectColor(clr)}
                                    style={{ backgroundColor: clr }}
                                    className={`w-[20px] h-[20px] rounded-full cursor-pointer border-2 transition-all ${selectColor === clr ? 'border-black scale-110' : 'border-transparent'}`}
                                >
                                </div>
                            ))
                        }
                    </div>
                )
            }

        </div>
    )
}

export default CartTwo
