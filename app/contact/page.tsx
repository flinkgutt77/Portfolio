import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'
import { siteUrl } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'Contact | UJ Studio Norge',
  description: 'Get in touch with UJ Studio Norge — book a session for wedding photography, cinematography, fashion films, advertisement production or digital signage.',
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: 'Contact | UJ Studio Norge',
    description: 'Get in touch with UJ Studio Norge — book a session for wedding photography, cinematography, fashion films, or digital signage.',
    url: `${siteUrl}/contact`,
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
