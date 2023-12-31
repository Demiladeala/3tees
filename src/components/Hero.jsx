import { useState, useEffect } from "react"
import Logo from "../assets/Menu.png"
import designImg from "../assets/Group 1.png"
import desktopLandingPage from "../assets/landing-page-bg.png"
import desktopHeroImage from '../assets/desktop-hero-image.png'

const Hero = ({ toggleNavbar, backgroundColor, borderColor}) => {
  
  const handleScroll = () => {
    const logoLink = document.getElementById('logoLink');
    if (logoLink) {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero');

      // Adjust the scrollOffset value as needed
      const scrollOffset = 100;

      if (scrollPosition > heroSection.offsetTop + scrollOffset) {
        logoLink.style.color = 'black';
      } else {
        logoLink.style.color = 'white';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Clean up the scroll event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>

      <div className='navbar-header z-[400] py-5 fixed w-full left-0 top-0 flex justify-between items-center md:hidden' style={{ backgroundColor }}>
        <div className='text-white border ml-8 border-white py-1 px-2 flex justify-center items-center cursor-pointer' style={{ borderColor}}>
         <a href="#" id="logoLink">Logo</a>
        </div>

        <div className='relative cursor-pointer menu-bar mr-8' onClick={toggleNavbar}>
          <img src={Logo} alt="logo" />
        </div>
      </div>

    <div className='md:hidden relative z-10 hero min-h-[28rem] flex items-center justify-center'>


      <div className='text-white font-semibold text-xl w-[90%] text-center'>
        <h2 className='w-full'>Welcome To Our Site</h2>
        <h2 className='w-full py-1'>Enjoy Your Visit</h2>
        <button className='font-normal text-base border py-1 px-2 rounded-xl mt-1'>Button</button>
      </div>

      <div className='absolute left-0 bottom-[-2.7rem]'>
        <img src={designImg} />
      </div>
    </div>




            {/* DESKTOP HERO MODE */}
    <div className='hidden md:flex relative'>

     <nav className='fixed z-[200] top-0 left-0  w-full flex justify-between items-center' style={{ backgroundColor }}>
        <div className='text-white border border-black flex justify-center items-center ml-20 my-4'>
         <a href="#" className="text-black py-4 px-5 uppercase">Logo</a>
        </div>

        <div className="z-[50] border-black mr-20">
          <a className="mr-7 text-[17px]" onClick={toggleNavbar} href="/#">HOME</a>
          <a className="mr-7 text-[17px]" onClick={toggleNavbar} href="/#about">ABOUT</a>
          <a className="mr-7 text-[17px]" onClick={toggleNavbar} href="/#courses">COURSES</a>
          <a className="mr-7 text-[17px]" onClick={toggleNavbar} href="/#annoucement">ANNOUCEMENTS</a>
          <a className="mr-7 text-[17px]" onClick={toggleNavbar} href="/#staff">STAFF</a>
          <a className="mr-7 text-[17px]" onClick={toggleNavbar} href="/#contact">CONTACT</a>
        </div>
      </nav>

      <div className="w-[50%] absolute right-0 object-cover">
        <img className="relative top-[-4.2rem]" src={desktopLandingPage} />
      </div>

        

      <div className="relative w-full py-20 flex gap-8 items-center">
        <div className="w-[40%] ml-24 space-y-10">
          <h1 className=" text-4xl font-medium">
          Welcome to 3tees educational Center Test Site!
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur. Duis a accumsan sed donec lobortis a nisi.</p>
          <button className="bg-[#ff6f08] px-7 py-2 rounded-2xl hover:bg-opacity-80">Button</button>
        </div>
        <div className="w-[55%] h-[50%] relative top-[-10rem] mr-20 object-cover">
          <img src={desktopHeroImage} />
        </div>
      </div>
    </div>

    </>
  )
}

export default Hero
