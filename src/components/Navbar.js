import React, {useState} from 'react'

export default function Navbar() {

const [nav, setNav] = useState(null)

const toggle = () => {
  setNav(!nav)
  
}


  return (

    

    <div className='fixed z-10 w-full bg-black text-white uppercase flex justify-between py-5 px-10 '>
     
        <ul className='md:flex gap-10 hidden'>
            <li>Home</li>
            <li>band</li>
            <li>tour</li>
            <li>contact</li>
            <li>more</li>
        </ul>
        

        <div>
        <ul className='absolute bg-black/60 flex flex-col p-5 gap-10 left-0 w-full items-center mt-10 md:hidden'>
            <li>Home</li>
            <li>band</li>
            <li>tour</li>
            <li>contact</li>
            <li>more</li>
        </ul>
        <div onClick={toggle}>Icon</div>

        </div>

</div>

    
  )
}
