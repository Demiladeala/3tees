import React from 'react'
import headerImage from "../assets/header-image.png"
import rec1 from "../assets/course-rec1.png"
import rec2 from "../assets/course-rec2.png"
import rec3 from "../assets/course-rec3.png"

const Courses = () => {
  return (
    <>
    <div className='relative mt-[10rem] w-full'>
      <div className='absolute md:hidden'>
        <img src={rec1}/>
      </div>
      <div className='w-full flex items-center justify-center'>
        <img src={headerImage} />
      </div>
      <h2 className='text-center mt-3 text-2xl font-bold'>Our Courses</h2>
    </div>

    <div className='w-[96%] mx-auto relative grid grid-cols-3 grid-rows-2 gap-1 mt-10'>
     <div className='text-white bg-[#181822] rounded-lg p-2 space-y-2 flex items-center'>
      <div className=''>
      <h1 className='pt-6 pb-2 font-semibold text-lg'>Course 1</h1>
      <p className='text-xs font-light mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
      <button className='bg-[#E56000] py-1 px-5 rounded-xl mb-8 text-xs'>Button</button>
      </div>
     
     </div>

     <div className='relative row-span-2 bg-[#F9F9F9] rounded-lg p-2 flex items-center z-10'>
      <div className=''>
      <h1 className='font-semibold text-lg'>Course 1</h1>
      <p className='text-xs font-light mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
      <button className='bg-[#1E1E1E] py-1 px-5 rounded-xl text-white text-xs'>Button</button>
      </div>
     </div>

       <div className='absolute top-[-1rem] right-[15%] z-0 md:hidden course-circle'>
        <img src={rec2} className='z-0' />
      </div>

     <div className='relative bg-[#F89650] rounded-lg p-2 z-10'>
      <h1 className='pt-6 font-semibold text-lg'>Course 1</h1>
      <p className='text-xs font-light mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
      <button className='bg-[#1E1E1E] py-1 px-5 rounded-xl text-white text-xs'>Button</button>
     </div>

     <div className='bg-[#F89650] rounded-lg p-2'>
      <h1 className='pt-6 font-semibold text-lg'>Course 1</h1>
      <p className='text-xs font-light mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
      <button className='bg-[#1E1E1E] py-1 px-5 rounded-xl text-white text-xs'>Button</button>
     </div>

     <div className='relative text-white bg-[#181822] rounded-lg p-2 z-10'>
      <h1 className='pt-6 font-semibold text-lg'>Course 1</h1>
      <p className='text-xs font-light mb-2'>Lorem ipsum dolor sit amet consectetur.</p>
      <button className='bg-[#E56000] py-1 px-5 rounded-xl text-xs'>Button</button>
     </div>

     <div className='absolute bottom-[-1.2rem] right-[20%] z-0 md:hidden'>
        <img src={rec3} className='z-0' />
    </div>

    </div>
    </>
  )
}

export default Courses
