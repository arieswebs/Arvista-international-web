import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Pillars from './components/Pillars'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Pillars />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactFooter />
    </main>
  )
}

export default App
