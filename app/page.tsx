import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Gallery from '@/components/sections/Gallery'
import Films from '@/components/sections/Films'
import Signage from '@/components/sections/Signage'
import AiAgents from '@/components/sections/AiAgents'
import About from '@/components/sections/About'

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
        <div id="testimonials" className="py-24 bg-surface">
          <p className="text-center text-text-muted">Testimonials — coming soon</p>
        </div>
        <div id="contact" className="py-24 bg-background">
          <p className="text-center text-text-muted">Contact — coming soon</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
