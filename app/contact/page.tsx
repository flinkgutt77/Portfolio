import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Contact | UJ Studio Norge',
  description: 'Get in touch with UJ Studio Norge — book a session for wedding photography, cinematography, fashion films, advertisement production or digital signage.',
  openGraph: {
    title: 'Contact | UJ Studio Norge',
    description: 'Get in touch with UJ Studio Norge — book a session for wedding photography, cinematography, fashion films, or digital signage.',
    url: 'https://ujstudionorge.com/contact',
    siteName: 'UJ Studio Norge',
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Contact />
      </main>
      <Footer />
    </>
  )
}
