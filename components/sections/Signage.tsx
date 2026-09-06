import { LayoutDashboard, Monitor, Tv, Megaphone, Palette, Settings } from 'lucide-react'
import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import { getDict } from '@/lib/i18n'

const s = getDict().signage

const signageServices = [
  { id: 'design', icon: Palette },
  { id: 'screen', icon: Monitor },
  { id: 'content', icon: Settings },
  { id: 'adNetwork', icon: Megaphone },
  { id: 'boards', icon: LayoutDashboard },
  { id: 'led', icon: Tv },
] as const

export default function Signage() {
  return (
    <section id="signage" className="bg-background py-24 px-6">
      {/* Header */}
      <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{s.label}</p>
        <h2 className="font-serif text-4xl md:text-6xl text-text-primary">
          {s.headingLine1}
          <br />
          <em className="text-gold">{s.headingEm}</em> {s.headingRest}
        </h2>
        <div className="w-20 h-px bg-gold mx-auto mt-8" />
        <p className="text-text-muted text-sm mt-6 leading-relaxed">
          {s.subtext}
        </p>
      </FadeIn>

      {/* Hero Images — side by side */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        <div className="relative overflow-hidden rounded-sm group" style={{ height: '380px' }}>
          <Image
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=85"
            alt="Digital signage screens in modern retail"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="font-serif text-xl text-white">{s.images.digitalTitle}</p>
            <p className="text-gold text-xs tracking-widest mt-1">{s.images.digitalTag}</p>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-sm group" style={{ height: '380px' }}>
          <Image
            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?w=1200&q=85"
            alt="Professional business signage board"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <p className="font-serif text-xl text-white">{s.images.physicalTitle}</p>
            <p className="text-gold text-xs tracking-widest mt-1">{s.images.physicalTag}</p>
          </div>
        </div>
      </div>

      {/* Services Grid — 3x2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {signageServices.map((service) => {
          const Icon = service.icon
          const copy = s.services[service.id]
          return (
            <div
              key={service.id}
              className="bg-surface border border-border rounded-sm p-8 group hover:border-gold transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-serif text-lg text-text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                {copy.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{copy.description}</p>
            </div>
          )
        })}
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-16">
        {s.stats.map((stat) => (
          <div key={stat.label} className="bg-surface px-8 py-10 text-center">
            <p className="font-serif text-4xl text-gold">{stat.number}</p>
            <p className="text-text-muted text-xs tracking-widest uppercase mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-serif text-3xl text-text-primary mb-3">
          {s.ctaHeading}
        </h3>
        <p className="text-text-muted text-sm mb-8">
          {s.ctaSubtext}
        </p>
        <a
          href="#contact"
          className="inline-block bg-gold text-background px-12 py-4 text-sm tracking-widest uppercase hover:bg-gold-hover transition-colors duration-300"
        >
          {s.ctaButton}
        </a>
      </div>
    </section>
  )
}
