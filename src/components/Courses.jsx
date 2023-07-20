import React from 'react'
import headerImage from "../assets/header-image.png"
import rec1 from "../assets/course-rec1.png"

const Courses = () => {
  return (
    <>
    <div className='relative mt-[10rem] w-full'>
      <div className='absolute'>
        <img src={rec1}/>
      </div>
      <div className='w-full flex items-center justify-center'>
        <img src={headerImage} />
      </div>
      <h2 className='text-center mt-3 text-2xl font-bold'>Our Courses</h2>
    </div>

    <div className='w-[96%] mx-auto grid grid-cols-3 grid-rows-2 gap-1 mt-10'>
     <div className='text-white bg-[#181822] rounded-lg'>
      <h1>Courses</h1>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
     </div>
     <div className='row-span-2 bg-[#F9F9F9] rounded-lg'>2</div>
     <div className='bg-[#F89650] rounded-lg'>3</div>
     <div className='bg-[#F89650] rounded-lg'>4</div>
     <div className='text-white bg-[#181822] rounded-lg'>5</div>
    </div>
    </>
  )
}

export default Courses
