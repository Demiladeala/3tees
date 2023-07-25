import React from 'react'
import headerImage from "../assets/header-image.png"
import rec1 from "../assets/staff-star-1.png"

const Staff = () => {
  return (
    <>
    <div className='w-full relative mt-32 '>
      <div className='absolute md:hidden top-[60%]'>
        <img src={rec1}/>
      </div>
      <div className='w-full flex items-center justify-center'>
        <img src={headerImage} />
      </div>
      <h2 className='text-center mt-3 text-2xl font-bold sm:text-2xl'>Everything Starts With The Best Teachers</h2>
    </div>

    <div className='w-full mt-20 flex flex-col md:flex-row md:bg-purple-50 md:w-[80%] md:mx-auto '>
      <div className='w-[90%] mx-auto flex gap-6'>
        <div className='bg-[#D9D9D9] rounded-md py-20 basis-[35%] md:basis-[50%]'></div>
        <div className='bg-[#D9D9D9] rounded-md py-20 basis-[35%]'></div>
      </div>
      <div className='w-[90%] mx-auto flex justify-end gap-6 mt-20 md:mt-0'>
        <div className='bg-[#D9D9D9] rounded-md py-20 basis-[35%]'></div>
        <div className='bg-[#D9D9D9] rounded-md py-20 basis-[35%]'></div>
      </div>
    </div>
    </>
  )
}

export default Staff
