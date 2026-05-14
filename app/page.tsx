import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/sections/Hero'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div id="services" className="py-24 bg-surface">
          <p className="text-center text-text-muted">Services — coming soon</p>
        </div>
        <div id="gallery" className="py-24 bg-background">
          <p className="text-center text-text-muted">Gallery — coming soon</p>
        </div>
        <div id="films" className="py-24 bg-surface">
          <p className="text-center text-text-muted">Films — coming soon</p>
        </div>
        <div id="signage" className="py-24 bg-background">
          <p className="text-center text-text-muted">Signage — coming soon</p>
        </div>
        <div id="ai-agents" className="py-24 bg-surface">
          <p className="text-center text-text-muted">AI Agents — coming soon</p>
        </div>
        <div id="about" className="py-24 bg-background">
          <p className="text-center text-text-muted">About — coming soon</p>
        </div>
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
