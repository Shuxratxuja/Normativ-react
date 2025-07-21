import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import Cart from './components/Cart'
import GamePad from '../../assets/images/GamePad.png'
import Monitor from '../../assets/images/Monitor.png'
import Keyboard from '../../assets/images/Keyboard.png'
import Chair from '../../assets/images/Chair.png'
import Categories from './Categories'
import { BestSelling } from './BestSelling'
import Bag from '../../assets/images/Bag.png'
import Coat from '../../assets/images/Coat.png'
import Culler from '../../assets/images/Culler.png'
import Bookshelf from '../../assets/images/Bookshelf.png'
import JBL from './components/JBL'
import ViewAllProducts from './components/ViewAllProducts'
import OurProducts from './OurProducts'
import Featured from './Featured'
import Support from './Support'
import { ArrowUp } from 'lucide-react'
import Links from '../Navbar/Links'
import Slider from '../Navbar/Slider'


const data = [
  {
    id: 1,
    title: "HAVIT HV-G92 Gamepad",
    discount: 40,
    orgPrice: 160,
    curPrice: 120,
    rating: 88,
    img: GamePad
  },
  {
    id: 2,
    title: "AK-900 Wired Keyboard",
    discount: 35,
    orgPrice: 1160,
    curPrice: 960,
    rating: 75,
    img: Keyboard
  },
  {
    id: 3,
    title: "IPS LCD Gaming Monitor",
    discount: 30,
    orgPrice: 400,
    curPrice: 370,
    rating: 99,
    img: Monitor
  },
  {
    id: 4,
    title: "S-Series Comfort Chair ",
    discount: 25,
    orgPrice: 400,
    curPrice: 375,
    rating: 99,
    img: Chair
  },
  {
    id: 5,
    title: "S-Series Comfort Chair ",
    discount: 25,
    orgPrice: 400,
    curPrice: 375,
    rating: 99,
    img: Chair
  },
  {
    id: 6,
    title: "S-Series Comfort Chair ",
    discount: 25,
    orgPrice: 400,
    curPrice: 375,
    rating: 99,
    img: Chair
  },

]

const bestSellingData = [
  {
    id: 1,
    title: "The north coat ",
    orgPrice: 360,
    curPrice: 260,
    rating: 65,
    img: Coat
  },
  {
    id: 2,
    title: "Gucci duffle bag",
    orgPrice: 1160,
    curPrice: 960,
    rating: 65,
    img: Bag
  },
  {
    id: 3,
    title: "RGB liquid CPU Cooler",
    orgPrice: 170,
    curPrice: 160,
    rating: 65,
    img: Culler
  },
  {
    id: 4,
    title: "Small BookSelf",
    orgPrice: 260,
    curPrice: 360,
    rating: 65,
    img: Bookshelf
  },
]

const Main = () => {

  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBtn(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
  <div>
        <div className="max-w-7xl mx-auto mt-4 flex gap-15">
          <Links />
          <Slider />
        </div>
      <div className="max-w-7xl mx-auto box-border">
      <div className='mt-36'>
        <Timer />
        <div className='mt-10 flex gap-[30px] overflow-x-auto'>
          {
            data.map(({ title, img, discount, orgPrice, curPrice, rating, id, }) => (
              <Cart title={title} type={discount} key={id} img={img} orgPrice={orgPrice} curPrice={curPrice} rating={rating} discount={discount} />
            ))
          }
        </div>
        <ViewAllProducts />
        <div className='bg-[#b3b3b3] w-full h-[1px] mb-20'></div>
        <Categories />
        <div className='bg-[#b3b3b3] w-full h-[1px] mb-20 mt-20'></div>
        <BestSelling />
        <div className='mt-10 overflow-x-auto flex justify-between'>
          {
            bestSellingData.map(({ title, img, orgPrice, curPrice, rating, id }) => (
              <Cart title={title} type={null} img={img} curPrice={curPrice} orgPrice={orgPrice} rating={rating} key={id} />
            ))
          }
        </div>
        <JBL />
        <OurProducts />
        <ViewAllProducts />
        <Featured />
        <Support />
        {
          showBtn && (
            <button onClick={scrollTop}
              className='w-[46px] h-[46px] justify-center items-center flex bg-[#f5f5f5] rounded-full text-black fixed bottom-6 right-6 z-50'
            ><ArrowUp /></button>
          )
        }
      </div>
    </div>
  </div>


  )
}

export default Main