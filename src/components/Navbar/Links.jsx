import { ChevronRight } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Links = () => {
    return (
        <div>
            <ul className='w-[218px] flex flex-col gap-4 mt-8 '>
                <li><Link className='flex justify-between'>Woman’s Fashion <ChevronRight /></Link></li>
                <li><Link className='flex justify-between'>Men’s Fashion<ChevronRight /></Link></li>
                <li><Link>Electronics</Link></li>
                <li><Link>Home & Lifestyle</Link></li>
                <li><Link>Medicine</Link></li>
                <li><Link>Sports & Outdoor</Link></li>
                <li><Link>Baby’s & Toys</Link></li>
                <li><Link>Groceries & Pets</Link></li>
                <li><Link>Health & Beauty</Link></li>
            </ul>
          <div className="bg-[#b3b3b3] w-[1px] h-[393px] absolute top-[152px] left-93"></div>
        </div>
    )
}

export default Links