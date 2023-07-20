import React from 'react'
import headerImage from "../assets/header-image.jpg"
import aboutImage from "../assets/about-image.jpg"

const About = () => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-28 flex flex-col gap-5 md:items-center md:justify-center md:flex-row'>

        <div className='w-full space-y-6 md:basis-[38%]'>
            <div className='w-full flex items-center justify-center'>
              <img src={headerImage} />
            </div>
            <h2 className='text-center mt-3 text-2xl font-bold'>Heading for About Us Section</h2>
            <p className='text-sm text-black tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur. Imperdiet varius 
              mauris diam malesuada potenti. Amet nulla leo non nam odio 
              massa sodales morbi ornare.</p>
            <p className='text-sm text-black tracking-wide mt-4'>Lorem ipsum dolor sit amet consectetur. Imperdiet varius 
              mauris diam malesuada potenti. Amet nulla leo non nam odio 
              massa sodales morbi ornare</p>
            <div className='w-full flex gap-4 items-center justify-center mt-4'>
              <button className='flex items-center justify-center py-1 px-5 rounded-lg border border-[#e56000]'>Button</button>
              <button className='flex items-center justify-center py-1 px-5 rounded-lg border-none bg-[#ff6f08]'>Button</button>
            </div>
        </div>

        <div className='pt-20 md:basis-[38%]'>
          <img src={aboutImage} className='w-full object-cover max-h-[30rem] rounded-xl' />
        </div>
    </div>
    </>
  )
}

export default About
