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

const Contact = () => {
  return (
    <>
    <div className='w-full relative mt-28'>
       <div className='relative flex flex-col'>
        <div className='w-[90%] md:w-[70%] mx-auto bg-[#08043C] rounded-2xl py-8 flex justify-between'>
          <div className=' border-white basis-[60%] ml-4 space-y-3 text-white'>
            <div>
              <img src={header}/>
            </div>
            <h1 className='text-lg md:text-2xl'>Find us Through <br className='md:hidden' /> These!</h1>
          </div>
          <div className='basis-[40%] flex gap-1 md:justify-center mr-4'>
            <div className=" h-full">
              <img className=' w-10' src={bar1} />
            </div>
            <div className=" h-full flex flex-col items-center justify-center">
              <img className=' object-contain w-5' src={phoneIcon}/>
              <img className=' w-14' src={bar2}/>
              <img className=' object-contain w-5' src={WhatsappIcon}/>
            </div>
            <div className=" h-full flex flex-col items-center justify-center">
              <img className=' object-contain w-14' src={bar3}/>
              <img className=' object-contain' src={bar4}/>
            </div>
            <div className=" h-full flex flex-col items-center justify-center">
              <img className=' object-contain mt-4' src={bar5} />
            </div>
            <div className=" h-full flex flex-col items-center">
              <img className=' object-contain' src={bar6} />
              <img className=' object-contain mt-4' src={LocationIcon} />
            </div>
          </div>
        </div>

        <div className='relative w-[50%] md:w-[30%] bg-[#f1f1f1] rounded-2xl py-2 top-[-1rem] left-[9%] md:left-[20%]'>

        </div>
       </div>
    </div>
    </>
  )
}

export default Contact
