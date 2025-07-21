import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Eye, Heart } from 'lucide-react'
import FiveStar from '../../../assets/icons/FiveStar.svg'
import { toast } from 'react-toastify'

const Cart = ({ title, img, discount, orgPrice, curPrice, rating, type }) => {
    const [isInWishlist, setIsInWishlist] = useState(false)

    useEffect(() => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist")) || []
        const found = wishlist.some(item => item.title === title)
        setIsInWishlist(found)
    }, [title])

    const addToCart = () => {
        const product = {
            title,
            img,
            discount,
            orgPrice,
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
            const product = { title, img, discount, orgPrice, curPrice, rating }
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
                    type === "discount" ? <span className='bg-[#db4444] rounded-md py-1 px-3 text-white text-xs absolute top-3 left-3'>-{discount}%</span> : '' 
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
                    className='absolute text-white justify-center items-center bg-black w-[270px] h-10 bottom-0 rounded-b-md left-0 hidden group-hover:flex'
                    onClick={addToCart}>
                    Add To Cart
                </p>
            </div>
            <p className='mt-4 font-medium'>{title}</p>
            <div className='flex gap-3 mt-2'>
                <p className='text-text-primary font-medium'>${curPrice}</p>
                <p className='text-gray-500 line-through font-medium '>${orgPrice}</p>
            </div>
            <div className='flex gap-2 mt-2'>
                <img src={FiveStar} alt="stars" />
                <p className='font-semibold text-gray-500'>({rating})</p>
            </div>
        </div>
    )
}

export default Cart
