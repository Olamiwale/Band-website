import React from 'react'
import Card from './Card'

export default function About() {
  return (
    <div className='py-10'>
        <div className='text-xl uppercase flex justify-center flex-col items-center p-5 gap-5'>
           <p>Briitz band</p>
        <p>We love music</p> 
        </div>

        <div className='p-8'>
            <p>
            We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  
            </p>
        </div>

        <div className='grid md:grid-cols-3 lg:flex justify-center flex-wrap'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          
        </div>
        
    </div>
  )
}
