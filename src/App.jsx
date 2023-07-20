import Hero from "./components/Hero"
import Services from "./components/Services"
import About from "./components/About"
import Courses from "./components/Courses"
import Annoucement from "./components/Announcement"
import Staff from "./components/Staff"
import Contact from "./components/Contact"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <section id="hero">
        <Hero />
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
