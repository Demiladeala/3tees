import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Announcement = () => {

  return (
    <>
    <div className='relative mt-[10rem] md:mt-[14rem] w-full h-[15rem] bg-black flex flex-col justify-center items-center'>
      <Swiper className='text-center w-full text-white flex justify-center items-center md:w-[90%]'
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('Slide Change')}
      >
        <SwiperSlide className='py-10 rounded-lg'>
          <div className='w-[70%] mx-auto h-[10rem] bg-[rgba(255,255,255,0.5)] rounded-lg space-y-2 py-10 flex flex-col items-center justify-center'>
            <h1 className='font-semibold'>Annoucements 1</h1>
            <p className='text-xs md:hidden'>Lorem ipsum dolor sit amet consectetur. Imperdiet varius 
              mauris diam malesuada potenti. Amet nulla leo non nam odio 
              massa sodales morbi ornare</p>
              <p className='text-xs hidden md:flex'>
              Lorem ipsum dolor sit amet consectetur. Donec et ullamcorper adipiscing lectus ut. Lacus aliquam elit scelerisque volutpat laoreet ultrices. Faucibus metus in sed imperdiet eget. Eget dui lobortis sed cursus et. Id eleifend ultrices bibendum augue. Aliquam sed maecenas feugiat molestie augue et quis id pellentesque. In dignissim tincidunt tristique enim eget bibendum risus habitant.
              </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-10 rounded-lg'>
          <div className='w-[70%] mx-auto h-[10rem] bg-[rgba(255,255,255,0.5)] rounded-lg space-y-2 py-10 flex flex-col items-center justify-center'>
            <h1 className='font-semibold'>Annoucements 2</h1>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur. Imperdiet varius 
              mauris diam malesuada potenti. Amet nulla leo non nam odio 
              massa sodales morbi ornare</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-10 rounded-lg'>
          <div className='w-[70%] mx-auto h-[10rem] bg-[rgba(255,255,255,0.5)] rounded-lg space-y-2 py-10 flex flex-col items-center justify-center'>
            <h1 className='font-semibold'>Annoucements 3</h1>
            <p className='text-xs md:hidden'>Lorem ipsum dolor sit amet consectetur. Imperdiet varius 
              mauris</p>
              <p className='text-xs hidden md:flex'>
              Lorem ipsum dolor sit amet consectetur. Donec et ullamcorper adipiscing lectus ut. Lacus aliquam elit scelerisque volutpat laoreet ultrices. Faucibus metus in sed imperdiet eget. Eget dui lobortis sed cursus et. Id eleifend ultrices bibendum augue. Aliquam sed maecenas feugiat molestie augue et quis id pellentesque. In dignissim tincidunt tristique enim eget bibendum risus habitant.
              </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='py-10 rounded-lg'>
          <div className='w-[70%] mx-auto h-[10rem] bg-[rgba(255,255,255,0.5)] rounded-lg space-y-2 py-10 flex flex-col items-center justify-center'>
            <h1 className='font-semibold'>Annoucements 4</h1>
            <p className='text-xs'>Lorem ipsum dolor sit amet consectetur. Imperdiet varius 
              mauris diam malesuada potenti. Amet nulla leo non nam odio 
              massa sodales morbi ornare</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Announcement
