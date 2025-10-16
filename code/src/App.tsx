import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutUs from './components/Aboutus'
import Classes from './components/Classes'
import Trainers from './components/Trainers'
import Facilities from './components/Facilities'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Header />

      <section id='#'>
        <Hero />
      </section>

      <section id='about'>
        <AboutUs />
      </section>

      <section id='classes'>
        <Classes />
      </section>

      <section id='trainers'>
        <Trainers />
      </section>

      <section id='facilities'>
        <Facilities />
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <Footer />
    </>
  )
}

export default App
