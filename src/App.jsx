import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Courses from "./components/Courses"
import Annoucement from "./components/Announcement"
import Staff from "./components/Staff"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import {VscClose} from 'react-icons/vsc'


function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [borderColor, setBorderColor] = useState('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setBackgroundColor('rgba(255, 255 , 255, 0.9');
        setBorderColor('black');
      } else {
        setBackgroundColor('transparent');
        setBorderColor('white');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>

      <div className="navbar-toggle" onClick={toggleNavbar}>
        {/* Your navbar toggle button/icon */}
      </div>

      {isNavbarOpen && 
        <div className="z-[500] md:hidden fixed top-0 right-0 text-white w-full bg-black bg-opacity-95 h-screen">
          <div className="py-8 flex w-[90%] mx-auto items-center justify-end">
            <VscClose size={30} onClick={toggleNavbar} className="cursor-pointer"/>
          </div>
          <div className="space-y-8 flex flex-col justify-center items-center text-lg">
            <a onClick={toggleNavbar} href="/#">HOME</a>
            <a onClick={toggleNavbar} href="/#about">ABOUT</a>
            <a onClick={toggleNavbar} href="/#courses">COURSES</a>
            <a onClick={toggleNavbar} href="/#annoucement">ANNOUCEMENTS</a>
            <a onClick={toggleNavbar} href="/#staff">STAFF</a>
            <a onClick={toggleNavbar} href="/#contact">CONTACT</a>
          </div>
        </div>}

      <section id="hero">
         <Hero toggleNavbar={toggleNavbar} backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} borderColor={borderColor} setBorderColor={setBorderColor}  />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="annoucement">
        <Annoucement />
      </section>

      <section id="staff">
       <Staff />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </>
  )
}

export default App
