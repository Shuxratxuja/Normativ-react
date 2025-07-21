import React from 'react'

const Head = ( { title, description}) => {
    return (
        <div>
            <div className='flex items-center gap-4'>
                <div className='bg-[#db4444] w-5 h-10 rounded-md'></div>
                <p className='text-text-primary'>{title}</p>
            </div>
            <p className='mt-6 font-semibold text-4xl'>{description}</p>
        </div>
    )
}

export default Head