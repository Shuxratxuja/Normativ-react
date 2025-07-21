import React from 'react'
import Head from './components/Head'
import { Button } from '../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import CartTwo from './components/CartTwo'
import Camera from '../../assets/images/Camera.png'
import Car from '../../assets/images/Car.png'
import DogFood from '../../assets/images/DogFood.png'
import Laptop from '../../assets/images/Laptop.png'
import SonyGame from '../../assets/images/SonyGame.png'
import Soccer from '../../assets/images/Soccer.png'
import Jacet from '../../assets/images/Jacet.png'
import Crem from '../../assets/images/Crem.png'


const data = [
    {
        id: 1,
        title: "Breed Dry Dog Food",
        curPrice: 100,
        rating: 35,
        img: DogFood
    },
    {
        id: 2,
        title: "CANON EOS DSLR Camera",
        curPrice: 360,
        rating: 95,
        img: Camera
    },
    {
        id: 3,
        title: "ASUS FHD Gaming Laptop",
        curPrice: 700,
        rating: 325,
        img: Laptop
    },
    {
        id: 4,
        title: "Curology Product Set ",
        curPrice: 500,
        rating: 145,
        img: Crem,
    },
    {
        id: 5,
        title: "Kids Electric Car ",
        curPrice: 960,
        rating: 65,
        img: Car,
        type: "newProduct",
        type2: "newProduct2",
        color: '#FB1314',
        color2: '#db4444'
    },
    {
        id: 6,
        title: "Jr. Zoom Soccer Cleats ",
        curPrice: 1160,
        rating: 35,
        img: Soccer,
        color2: '#db4444',
        type2: "newProduct2",
        color: '#eeff61'
    },
    {
        id: 7,
        title: "GP11 Shooter USB Gamepad",
        curPrice: 660,
        rating: 55,
        img: SonyGame,
        color: '#000000',
        type: "newProduct",
        type2: "newProduct2",
        color2: '#db4444'
    },
    {
        id: 8,
        title: "Quilted Satin Jacket",
        curPrice: 660,
        rating: 55,
        img: Jacet,
        color: '#184A48',
        type2: "newProduct2",
        color2: '#db4444'
    },
]

const OurProducts = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <Head title='Our Products' description='Explore Our Products' />
                <div className='flex gap-4 mt-12 ml-auto'>
                    <Button variant='secondary' className='w-[46px] h-[46px] rounded-full flex items-center justify-center'>
                        <ArrowLeft />
                    </Button>
                    <Button variant='secondary' className='w-[46px] h-[46px] rounded-full flex items-center justify-center'>
                        <ArrowRight />
                    </Button>
                </div>
            </div>
            <div className='flex justify-between flex-wrap mt-6 gap-8'>
                {
                    data.map(({ id, title, curPrice, img, color, color2, type, rating, type2 }) => (
                        <CartTwo
                            key={id}
                            title={title}
                            curPrice={curPrice}
                            rating={rating}
                            img={img}
                            type={type}
                            color={color}
                            color2={color2}
                            type2={type2}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default OurProducts