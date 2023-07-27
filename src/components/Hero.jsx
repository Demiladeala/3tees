import { useState, useEffect } from "react"
import Logo from "../assets/Menu.png"
import designImg from "../assets/Group 1.png"

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
        <div className='border ml-8 border-white py-1 px-2 flex justify-center items-center cursor-pointer' style={{ borderColor}}>
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





    <div className='border border-black hidden md:flex'>
     <nav className='w-[90%] mx-auto'>
        <div className='text-white border border-white w-12 flex justify-center items-center'>
         <a href="#">Logo</a>
        </div>
      </nav>
    </div>

    </>
  )
}

export default Hero
