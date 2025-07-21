import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import Bag from '@/assets/images/Bag.png'
import Culler from '@/assets/images/Culler.png'
import SonyGame from '@/assets/images/SonyGame.png'
import Jacet from '@/assets/images/Jacet.png'
import WishlistCard from './components/WishlistCard'
import JustCard from './components/JustCard'
import Laptop from '@/assets/images/Laptop.png'
import Monitor from '@/assets/images/Monitor.png'
import GamePad from '@/assets/images/GamePad.png'
import Keyboard from '@/assets/images/Keyboard.png'


const data = [
    {
        id: 1,
        title: "Gucci duffle bag",
        curPrice: 960,
        orgPrice: 1160,
        img: Bag,
        discount: 35,
        type: "discount"
    },
    {
        id: 2,
        title: "RGB liquid CPU Cooler",
        curPrice: 1960,
        img: Culler,
        type: null
    },
    {
        id: 3,
        title: "GP11 Shooter USB Gamepad",
        curPrice: 550,
        img: SonyGame,
        type: null
    },
    {
        id: 4,
        title: "Quilted Satin Jacket",
        curPrice: 750,
        img: Jacet,
        type: null
    },
]

const just = [
     {
        id: 1,
        title: "ASUS FHD Gaming Laptop",
        curPrice: 960,
        orgPrice: 1160,
        img: Laptop,
        type: "discount",
        discount: 35,
        rating: 65
    },
     {
        id: 2,
        title: "IPS LCD Gaming Monitor",
        curPrice: 1160,
        img: Monitor,
        type: null,
        rating: 65
    },
     {
        id: 3,
        title: "HAVIT HV-G92 Gamepad",
        curPrice: 560,
        img: GamePad,
        type: "new",
        rating: 65
    },
     {
        id: 4,
        title: "AK-900 Wired Keyboard",
        curPrice: 200,
        img: Keyboard,
        type: null,
        rating: 65
    },
]

const Wishlist = () => {

    const [wishlist, setWishlist] = useState([])


    useEffect(() => {
        const storedWish = JSON.parse(localStorage.getItem("wishlist")) || []
        setWishlist(storedWish)
    }, [])

    const handleDlete = (titleDlete) => {
        const updateWish = wishlist.filter(item => item.title !== titleDlete)
        localStorage.setItem("wishlist", JSON.stringify(updateWish))
        setWishlist(updateWish)
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div> <div className='flex justify-between mt-20 mb-15'>
                <p className='text-xl'>Wishlist ({4 + wishlist.length})</p>
                <button className='px-12 py-4 border-2 rounded-md'>Move All To Bag</button>
            </div>
                <div className='flex gap-[30px] overflow-x-auto'>
                    {
                        data.map(({ title, img, id, curPrice, orgPrice, type, discount }) => (
                            <WishlistCard title={title} key={id} img={img} curPrice={curPrice} orgPrice={orgPrice} type={type} discount={discount} />
                        ))
                    }
                    {
                        wishlist.map((item, i) => (
                            <WishlistCard
                                key={i}
                                title={item.title}
                                img={item.img}
                                curPrice={item.curPrice}
                                orgPrice={item.orgPrice}
                                type={item.type}
                                discount={item.discount}
                                onDelete={() => handleDlete(item.title)}
                            />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4 mt-20 mb-15'>
                        <div className='w-5 h-10 bg-[#db4444] rounded-md'></div>
                        <p className='text-xl'>Just For You</p>
                    </div>
                    <button className='font-medium px-12 py-4 border-2 rounded-md'>See All</button>
                </div>
                <div className='flex justify-between'>
                    {
                        just.map(({title, discount, img, rating, type, curPrice, orgPrice, id}) => (
                        <JustCard title={title} type={type} img={img} rating={rating} curPrice={curPrice} orgPrice={orgPrice} discount={discount} key={id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Wishlist