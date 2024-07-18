import React from 'react'

export default function Contact() {
  return (
    <div className='bg-gray-100 flex items-center flex-col h-[400px] justify-center'>

        <div className='text-xl flex flex-col items-center gap-5 mb-10'>
            <p>Contact</p>
            <p>Fan? Drop a note</p>
        </div>



        <div className='flex max-sm:flex-col justify-between p-5 gap-10 md:gap-[100px]'>

          <div className='p-4 font-bold text-xl'>
            <p>Chicago</p>
            <p>Phone: +234564785</p>
            <p>Email:mail@mail.com</p>
          </div>

          <form>

            <div className=' gap-5 flex flex-col w-full'>

              <div className='gap-5 flex'>
                <input type='text' className='p-3' placeholder='Name' />
                <input type='text' placeholder='Email' /> 
              </div>
             

              <div className='w-full bg-red-300'>
                  <input type='text' placeholder='Message' className='w-full p-3 ' /> 
              </div>
           
            </div>
            
              

            <div className='flex justify-end py-3'>
              <button  className='bg-gray-400 p-2 rounded-md'>Send</button>
            </div>
          </form>
        </div>
    </div>
  )
}
