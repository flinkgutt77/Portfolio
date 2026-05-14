import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Films from '@/components/sections/Films'
import Signage from '@/components/sections/Signage'
import AiAgents from '@/components/sections/AiAgents'
import About from '@/components/sections/About'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Films />
        <Signage />
        <AiAgents />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
