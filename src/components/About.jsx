import React from 'react'
import headerImage from "../assets/header-image.png"
import aboutImage from "../assets/about-image.jpg"
import rec1 from "../assets/about-rec-1.png"
import rec2 from "../assets/about-rec-2.png"
import rec3 from "../assets/about-rec-3.png"
import rec4 from "../assets/about-rec-4.png"
import rec5 from "../assets/about-rec-5.png"
import cir1 from "../assets/about-circle-1.png"
import cir2 from "../assets/about-circle-2.png"

const About = () => {
  return (
    <>
    <div className='w-[90%] mx-auto mt-28 flex flex-col gap-5 md:items-center md:justify-center md:flex-row'>

        <div className='w-full space-y-6 md:basis-[40%]'>
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

        <div className='relative mx-auto mt-[15rem] parent-image-width md:mt-0'>
          
          <div className='w-full absolute top-[-7rem] flex justify-end md:hidden'>
            <div className='mr-10'>
            <img src={cir1} className='relative top-[-0.7rem] left-[-1rem]' />
            <img src={cir2} />
            </div>
           
          </div>
          <img src={rec1} className='z-0 absolute top-[10%] left-[0.28rem] sm:left-[-0.8125rem]' />
          <img src={aboutImage} className='relative image-width z-10 object-cover max-h-[30rem] rounded-xl' />
          <img src={rec2} className='rec2 z-0 absolute top-[-3rem] left-[30%]' />
          <img src={rec3} className='z-0 absolute right-[20%]' />
          <img src={rec4} className='z-0 absolute top-[-2.5rem] right-[30%]' />
          <img src={rec5} className='z-0 absolute top-[-1.5rem] right-[0.2rem] md:right-[-1rem]' />
        </div>
    </div>
    </>
  )
}

export default About
