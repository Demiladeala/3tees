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

    <div className='md:w-[80%] w-[96%] mx-auto relative grid grid-cols-3 grid-rows-2 gap-1 mt-10 md:gap-4 md:mt-16'>
     <div className='text-white box-shadow bg-[#181822] rounded-lg p-2 space-y-2 flex items-center md:py-20 md:rounded-3xl'>
      <div className=''>
      <h1 className='pt-6 pb-2 font-semibold text-lg'>Course 1</h1>
      <p className='text-xs font-light mb-2 md:hidden'>Lorem ipsum dolor sit amet consectetur.</p>
      <p className='text-sm font-light mb-2 hidden md:flex'>Lorem ipsum dolor sit amet consectetur. Cursus rutrum orci volutpat faucibus massa risus id magna sit. In euismod dolor ornare habitasse orci nam at.</p>
      <button className='bg-[#E56000] py-1 px-5 rounded-xl mb-8 text-xs md:py-2 md:px-7'>Button</button>
      </div>
     
     </div>

     <div className='relative md:top-32 md:h-[43rem] box-shadow row-span-2 bg-[#F9F9F9] rounded-lg p-2 flex items-center z-10 md:rounded-3xl'>
      <div className=''>
      <h1 className='font-semibold text-lg'>Course 1</h1>
      <p className='text-xs font-light mb-2 md:hidden'>Lorem ipsum dolor sit amet consectetur.</p>
      <p className='text-sm font-light mb-2 hidden md:flex'>Lorem ipsum dolor sit amet consectetur. Cursus rutrum orci volutpat faucibus massa risus id magna sit. In euismod dolor ornare habitasse orci nam at.</p>
      <button className='bg-[#1E1E1E] py-1 px-5 rounded-xl text-white text-xs md:py-2 md:px-7 md:bg-transparent md:text-black md:border md:border-[#FF6F08]'>Button</button>
      </div>
     </div>

       <div className='absolute top-[-1rem] right-[15%] z-0 md:hidden course-circle'>
        <img src={rec2} className='z-0' />
      </div>

     <div className='relative box-shadow bg-[#F89650] rounded-lg p-2 z-10 md:items-center md:rounded-3xl'>
      <h1 className='pt-6 font-semibold text-lg md:mt-16'>Course 1</h1>
      <p className='text-xs font-light mb-2 md:hidden'>Lorem ipsum dolor sit amet consectetur.</p>
      <p className='text-sm font-light mb-2 hidden md:flex'>Lorem ipsum dolor sit amet consectetur. Cursus rutrum orci volutpat faucibus massa risus id magna sit. In euismod dolor ornare habitasse orci nam at.</p>
      <button className='bg-[#1E1E1E] py-1 px-5 rounded-xl text-white text-xs md:py-2 md:px-7'>Button</button>
     </div>

     <div className='bg-[#F89650] box-shadow rounded-lg p-2 md:rounded-3xl'>
      <h1 className='pt-6 font-semibold text-lg md:mt-16'>Course 1</h1>
      <p className='text-xs font-light mb-2 md:hidden'>Lorem ipsum dolor sit amet consectetur.</p>
      <p className='text-sm font-light mb-2 hidden md:flex'>Lorem ipsum dolor sit amet consectetur. Cursus rutrum orci volutpat faucibus massa risus id magna sit. In euismod dolor ornare habitasse orci nam at.</p>
      <button className='bg-[#1E1E1E] py-1 px-5 rounded-xl text-white text-xs md:py-2 md:px-7'>Button</button>
     </div>

     <div className='relative box-shadow text-white bg-[#181822] rounded-lg p-2 z-10 md:rounded-3xl'>
      <h1 className='pt-6 font-semibold text-lg md:mt-16'>Course 1</h1>
      <p className='text-xs font-light mb-2 md:hidden'>Lorem ipsum dolor sit amet consectetur.</p>
      <p className='text-sm font-light mb-2 hidden md:flex'>Lorem ipsum dolor sit amet consectetur. Cursus rutrum orci volutpat faucibus massa risus id magna sit. In euismod dolor ornare habitasse orci nam at.</p>
      <button className='bg-[#E56000] py-1 px-5 rounded-xl text-xs md:rounded-lg md:py-2 md:px-7'>Button</button>
     </div>

     <div className='absolute bottom-[-1.2rem] right-[20%] z-0 md:hidden'>
        <img src={rec3} className='z-0' />
    </div>

    </div>
    </>
  )
}

export default Courses
