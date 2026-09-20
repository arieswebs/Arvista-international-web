import Hero from './components/Hero'
import Pillars from './components/Pillars'
import AllServices from './components/AllServices'
import About from './components/About'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <main className="w-full">
      <Hero />
      <Pillars />
      <AllServices />
      <About />
      <Process />
      <Testimonials />
      <FAQ />
      <ContactFooter />
    </main>
  )
}

export default App
