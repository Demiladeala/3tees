import React from 'react'
import headerImage from "../assets/header-image.jpg"
import rec1 from "../assets/course-rec1.png"

const Courses = () => {
  return (
    <>
    <div className='relative mt-20 w-full'>
      <div className='absolute'>
        <img src={rec1}/>
      </div>
      <div className='w-full flex items-center justify-center'>
        <img src={headerImage} />
      </div>
      <h2 className='text-center mt-3 text-2xl font-bold'>Our Courses</h2>
    </div>

    <div className='w-[96%] mx-auto border grid grid-cols-3 grid-rows-2 gap-1 mt-10'>
     <div className='col-span-1 bg-gray-200'>1</div>
     <div>2</div>
     <div>3</div>
     <div>4</div>
     <div>5</div>
    </div>
    </>
  )
}

export default Courses
