import React from 'react'
import headerImage from "../assets/header-image.png"
import rec1 from "../assets/staff-star-1.png"
import rec2 from "../assets/staff-star-3.png"
import staff from '../assets/staff-staff.png'

const Staff = () => {
  return (
    <>
    <div className='w-full relative mt-32 md:mt-40'>
     
      <div className='absolute md:hidden top-[60%]'>
        <img src={rec1}/>
      </div>
      <div className='w-full flex items-center justify-center'>
        <img src={headerImage} />
      </div>
      <img src={rec1} className='z-0 absolute top-0 left-[27.2%] hidden md:flex'/>

      <h2 className='z-50 relative w-[90%] mx-auto text-center mt-3 text-2xl font-bold sm:text-2xl'>
        Everything Starts With The Best Teachers
      </h2>
    </div>

    <div className='w-full'>
      <div className='absolute hidden md:flex'>
          <img className='relative top-[12.8rem] left-[-4rem]' src={staff}/>
      </div>
      <div className='w-full mt-20 flex flex-col md:flex-row md:w-[85%] md:mx-auto '>
        
        <div className='relative w-[90%] mx-auto flex gap-6'>

          <div className='relative basis-[50%] text-center'>
            <div className='bg-[#D9D9D9] rounded-md py-20 md:py-32'></div>
            <h2 className="mt-2 font-semibold text-lg">Position Tag</h2>
            <p>Name Tag</p>
          </div>

          <div className='relative basis-[50%] text-center'>
            <div className='bg-[#D9D9D9] rounded-md py-20 md:py-32'></div>
            <h2 className="mt-2 font-semibold text-lg">Position Tag</h2>
            <p>Name Tag</p>
          </div>
          
        </div>
        <div className='w-[90%] mx-auto flex justify-end gap-6 mt-20 md:mt-0 md:ml-6'>

          <div className='relative basis-[50%] text-center'>
            <div className='bg-[#D9D9D9] rounded-md py-20 md:py-32'></div>
            <h2 className="mt-2 font-semibold text-lg">Position Tag</h2>
            <p>Name Tag</p>
          </div>

          <div className='relative basis-[50%] text-center z-10'>
            <div className='bg-[#D9D9D9] rounded-md py-20 md:py-32'></div>
            <h2 className="mt-2 font-semibold text-lg">Position Tag</h2>
            <p>Name Tag</p>
          </div>

          <div className='absolute w-full py-32 right-0'>
            <img className='absolute bottom-0 right-0' src={rec2}/>
          </div>
        </div>
      </div>
    </div>
    

    <div className='w-full mt-8 flex justify-center items-center'>
      <button className='border border-black rounded-xl py-2 px-6 md:border-[#E56000]'>Button</button>
    </div>
    </>
  )
}

export default Staff
