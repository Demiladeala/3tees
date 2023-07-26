import { useState } from "react"
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

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };
  return (
    <>

      <div className="navbar-toggle" onClick={toggleNavbar}>
        {/* Your navbar toggle button/icon */}
      </div>

      {isNavbarOpen && 
        <div className="z-[100] fixed top-0 right-0 text-white w-[80%] bg-black bg-opacity-95 h-screen">
          <div className="py-8 flex w-[90%] mx-auto items-center justify-end">
            <VscClose size={28} onClick={toggleNavbar} className="cursor-pointer"/>
          </div>
          <div className="space-y-8 pl-7 flex flex-col text-lg">
            <a href="/#">HOME</a>
            <a href="/#about">ABOUT</a>
            <a href="/#courses">COURSES</a>
            <a href="/#annoucements">ANNOUCEMENTS</a>
            <a href="/#staff">STAFF</a>
            <a href="/#contact">CONTACT</a>
          </div>
        </div>}

      <section id="hero">
         <Hero toggleNavbar={toggleNavbar} />
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
