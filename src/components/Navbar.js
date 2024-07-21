import React, {useState} from 'react'

export default function Navbar() {

const [nav, setNav] = useState(false)

const toggle = () => {
  setNav(!nav)

  if(nav) {
    
  }
  
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
        <ul className={nav ?'cursor-pointer absolute bg-black/60 flex flex-col  gap-10 left-0 w-full items-center mt-[50px] md:hidden ease-in-out duration-500 ': 'hidden'}>
            <li className='hover:font-bold hover:bg-gray-700/30 p-5 w-full flex justify-center'>Home</li>
            <li className='hover:font-bold hover:bg-gray-700/30 p-5 w-full flex justify-center'>band</li>
            <li className='hover:font-bold hover:bg-gray-700/30 p-5 w-full flex justify-center'>tour</li>
            <li className='hover:font-bold hover:bg-gray-700/30 p-5 w-full flex justify-center'>contact</li>
            <li className='hover:font-bold'>more</li>
        </ul>

        <div> </div>

        
        <div onClick={toggle} className=' bg-gray-700 rounded-sm uppercase font-extrabold text-[8px] cursor-pointer hover:bg-gray-700/50 p-5 w-full flex justify-center'>{nav ? <div>close</div> : <div> open</div> } </div>

        </div>

</div>

    
  )
}
