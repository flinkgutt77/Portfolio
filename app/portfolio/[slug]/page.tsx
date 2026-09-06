import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FadeIn from '@/components/ui/FadeIn'
import { galleryItems, portfolioCategories } from '@/lib/data'
import { getDict, locale, siteUrl } from '@/lib/i18n'

function findBySlug(slug: string) {
  return portfolioCategories.find(p => p.slug[locale] === slug)
}

export function generateStaticParams() {
  return portfolioCategories.map(p => ({ slug: p.slug[locale] }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = findBySlug(slug)
  if (!entry) return {}

  const copy = getDict().portfolioPages.categories[entry.id as keyof ReturnType<typeof getDict>['portfolioPages']['categories']]
  const url = `${siteUrl}/portfolio/${slug}`

  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: url },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      siteName: 'UJ Studio Norge',
    },
  }
}

export default async function PortfolioCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = findBySlug(slug)
  if (!entry) notFound()

  const copy = getDict().portfolioPages.categories[entry.id as keyof ReturnType<typeof getDict>['portfolioPages']['categories']]
  const items = galleryItems.filter(item => item.category === entry.category)

  return (
    <>
      <Navbar />
      <main className="flex-1 bg-background py-32 px-6">
        <FadeIn className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gold">{getDict().gallery.label}</p>
          <h1 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
            {copy.title.split('|')[0].trim()}
          </h1>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
          <p className="text-text-muted text-sm mt-6 leading-relaxed">{copy.description}</p>
        </FadeIn>

        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
          {items.map(item => (
            <div key={item.id} className="break-inside-avoid mb-4 w-full relative">
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="w-full h-auto object-cover rounded-sm"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/#gallery"
            className="inline-block border border-border text-text-muted hover:border-gold hover:text-gold text-xs px-6 py-3 tracking-widest uppercase transition-colors duration-200"
          >
            {getDict().portfolioPages.backLink}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
