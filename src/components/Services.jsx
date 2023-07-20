import React from 'react'
import button from '../assets/info-button.jpg'

const Services = () => {
  return (
    <>
    <div className='relative mt-16 pl-8 flex gap-3 items-center overflow-x-scroll sm:overflow-hidden parent-service'>
        <div className='flex items-center gap-1 px-2 py-1 bg-[#d9d9d9] rounded-2xl text-xs ml-4 child-service'>
          <div className='bg-white p-1 rounded-[14px]'>
            <img src={button}/>
          </div>
          <p>Easy ways to study abroad</p>
        </div>

        <div className='flex items-center gap-1 px-2 py-1 bg-[#d9d9d9] rounded-2xl text-xs child-service'>
          <div className='bg-white p-1 rounded-[14px]'>
            <img src={button}/>
          </div>
          <p>Quick Link</p>
        </div>

        <div className='flex items-center gap-1 px-2 py-1 bg-[#d9d9d9] rounded-2xl text-xs child-service'>
          <div className='bg-white p-1 rounded-[14px]'>
            <img src={button}/>
          </div>
          <p>Easy ways to study abroad</p>
        </div>

    </div>
    </>
  )
}

export default Services
