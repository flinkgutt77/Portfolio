import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Contact from '@/components/sections/Contact'
import { getDict, siteUrl } from '@/lib/i18n'

const c = getDict().contact

export const metadata: Metadata = {
  title: c.pageTitle,
  description: c.pageDescription,
  alternates: { canonical: `${siteUrl}/contact` },
  openGraph: {
    title: c.pageTitle,
    description: c.pageOgDescription,
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
