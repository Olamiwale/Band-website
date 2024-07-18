import React from 'react'
import image from '../assets/image.png'

export default function HomePage() {
  return (
    <div className='flex flex-col'>
        <div className='mt-5'>
            <img src={image} alt='band-photo' className='w-full h-[450px] lg:h-[600px]'/>
        </div>

        <div className='text-xl text-red-500 font-bold absolute left-5 bottom-50 top-[350px] md:top-[350px] lg:top-[450px] right-5 items-center justify-center flex flex-col '>
        <p className='p-4'>America</p>
        <p className=''>It was a great day in America</p> 
        </div>

       
        
    </div>
  )
}
