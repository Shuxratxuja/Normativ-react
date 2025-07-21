import React from 'react'
import Head from './components/Head'

export const BestSelling = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <Head title='This Month' description='Best Selling Products'/>
                <button className='w-[159px] mt-12 h-[56px] bg-[#db4444] text-white rounded-md'>View All</button>
            </div>
        </div>
    )
}
