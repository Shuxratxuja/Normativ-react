import React from 'react'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import FiveStar from '../../../assets/icons/FiveStar.svg'
import { toast } from 'react-toastify'

const WishlistCard = ({ title, img, discount, orgPrice, curPrice,  type, onDelete }) => {

    const addToCart = () => {
        const product = {
            title,
            img,
            discount,
            orgPrice,
            curPrice,
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
    return (
        <div className='group w-max'>
            <div className='w-[270px] h-[250px] rounded-md bg-[#F5F5F5] relative p-12'>
                {
                    type === "discount" ? <span className='bg-[#db4444] rounded-md py-1 px-3 text-white text-xs absolute top-3 left-3'>-{discount}%</span> : '' 
                }
                <img src={img} alt="product-img" />
                <div className='flex flex-col gap-2 absolute top-3 right-3'>
                    <Button onClick={onDelete} variant='secondary' className='cursor-pointer bg-white rounded-full'><Trash2 /></Button>
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
              {
                type === "discount" ?   <p className='text-gray-500 line-through font-medium '>${orgPrice}</p> :''
              }
            </div>
        </div>
    )
}

export default WishlistCard
