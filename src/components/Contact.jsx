import React from 'react'
import header from "../assets/contact-header.png"
import bar1 from '../assets/contact-bar-1.png'
import bar2 from '../assets/contact-bar-2.png'
import bar3 from '../assets/contact-bar-3.png'
import bar4 from '../assets/contact-bar-4.png'
import bar5 from '../assets/contact-bar-5.png'
import bar6 from '../assets/contact-bar-6.png'
import phoneIcon from "../assets/phone-icon.png"
import WhatsappIcon from "../assets/Whatsapp-icon.png"
import LocationIcon from "../assets/Location-icon.png"
import arrow1 from "../assets/contact-mobile-arrow-1.png"
import arrow2 from "../assets/contact-mobile-arrow-2.png"
import circle1 from "../assets/contact-mobile-circle-1.png"
import circle2 from "../assets/contact-mobile-circle-2.png"

const Contact = () => {
  return (
    <>
    <div className='w-full relative mt-40'>
       <div className='relative flex flex-col'>

      <div className='w-full absolute py-5 z-0 md:hidden'>
        <div className='absolute top-[-1.3rem]'>
          <img src={arrow1} className='absolute top-[-3rem]'/>
          <img src={arrow2} />
        </div>
      </div>

      <div className='w-full absolute py-5 z-0 md:hidden'>
        <div className='absolute top-[-5rem] right-0'>
          <img src={circle1} className='top-[-3rem]'/>
        </div>
      </div>

      <div className='w-full absolute py-5 z-0 md:hidden'>
        <div className='absolute right-0'>
          <img src={circle2} className='top-[-3rem]'/>
        </div>
      </div>

        <div className='z-10 w-[90%] md:w-[70%] mx-auto bg-[#08043C] rounded-2xl py-8 md:py-16 flex justify-between'>
          <div className=' border-white basis-[60%] ml-4 space-y-3 text-white'>
            <div>
              <img src={header}/>
            </div>
            <h1 className='text-lg md:text-2xl'>Find us Through <br className='md:hidden' /> These!</h1>
          </div>
          <div className='basis-[40%] flex gap-1 md:justify-center mr-4'>
            <div className=" h-full w-10 contact-div">
              <img className=' ' src={bar1} />
            </div>
            <div className=" h-full flex flex-col items-center justify-center w-10 contact-div">
              <img className=' object-contain w-5' src={phoneIcon}/>
              <img className=' w-14' src={bar2}/>
              <img className=' object-contain w-5' src={WhatsappIcon}/>
            </div>
            <div className=" h-full flex flex-col items-center justify-center w-10 contact-div">
              <img className=' object-contain' src={bar3}/>
              <img className=' object-contain' src={bar4}/>
            </div>
            <div className=" h-full flex flex-col items-center justify-center w-10 contact-div">
              <img className=' object-contain mt-4' src={bar5} />
            </div>
            <div className=" h-full flex flex-col items-center w-10 contact-div">
              <img className=' object-contain' src={bar6} />
              <img className=' object-contain mt-4' src={LocationIcon} />
            </div>
          </div>
        </div>

        <div className='relative z-10 w-[60%] md:w-[30%] bg-[#f1f1f1] rounded-2xl py-2 top-[-1rem] left-[9%] md:left-[20%] md:top-[-3rem]'>
          <div className='w-[80%] relative left-2 flex flex-col gap-4'>
              <div className='flex gap-3 items-center mt-4'>
                <div className='flex-shrink-0 w-3 h-3 border border-[#272DC6] rounded-full'></div>
                <p className='text-xs  md:text-lg'>location: Arepo, Ogun state</p>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='flex-shrink-0 w-3 h-3 border border-[#54F8BD] rounded-full'></div>
                <p className='text-xs  md:text-lg'>Phone no +2341234567890</p>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='flex-shrink-0 w-3 h-3 border border-[#272DC6] rounded-full'></div>
                <p className='text-xs ml-2 md:text-lg'>whatsapp no: +2341234567890</p>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='flex-shrink-0 w-3 h-3 border border-[#54F8BD] rounded-full'></div>
                <p className='text-xs  md:text-lg'>email: email@email.com</p>
              </div>
          </div>
        </div>
       </div>
    </div>
    </>
  )
}

export default Contact
