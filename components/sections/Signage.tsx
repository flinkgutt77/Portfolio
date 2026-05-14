import { LayoutDashboard, Monitor, Tv, Megaphone, Palette, Settings } from 'lucide-react'
import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'

const signageServices = [
  {
    icon: Palette,
    title: 'Design & Branding',
    desc: 'Custom visual design tailored to your brand identity — from concept to final artwork.',
  },
  {
    icon: Monitor,
    title: 'Screen Installation',
    desc: 'Professional installation of indoor and outdoor digital display screens for any space.',
  },
  {
    icon: Settings,
    title: 'Content Management',
    desc: 'Scheduled content updates, playlist management, and remote control of your displays.',
  },
  {
    icon: Megaphone,
    title: 'Ad Network Management',
    desc: 'Run targeted advertising campaigns across your digital signage network with analytics.',
  },
  {
    icon: LayoutDashboard,
    title: 'Physical Signage Boards',
    desc: 'Eye-catching printed and illuminated signage boards for storefronts and exhibitions.',
  },
  {
    icon: Tv,
    title: 'LED & Illuminated Displays',
    desc: 'High-impact LED panels and backlit signage that commands attention day and night.',
  },
]

export default function Signage() {
  return (
    <section id="signage" className="bg-background py-24 px-6">
      {/* Header */}
      <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">SIGNAGE & DISPLAY</p>
        <h2 className="font-serif text-4xl md:text-6xl text-text-primary">
          Make Your Brand
          <br />
          <em className="text-gold">Impossible</em> to Ignore
        </h2>
        <div className="w-20 h-px bg-gold mx-auto mt-8" />
        <p className="text-text-muted text-sm mt-6 leading-relaxed">
          From bold storefront signage boards to dynamic digital display networks —
          we design, install, and manage complete signage solutions that elevate your brand
          and captivate your audience around the clock.
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
            <p className="font-serif text-xl text-white">Digital Display Screens</p>
            <p className="text-gold text-xs tracking-widest mt-1">DYNAMIC · CONNECTED · SMART</p>
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
            <p className="font-serif text-xl text-white">Physical Signage Boards</p>
            <p className="text-gold text-xs tracking-widest mt-1">BOLD · DURABLE · IMPACTFUL</p>
          </div>
        </div>
      </div>

      {/* Services Grid — 3x2 */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {signageServices.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="bg-surface border border-border rounded-sm p-8 group hover:border-gold transition-colors duration-300"
            >
              <div className="w-12 h-12 border border-border rounded-full flex items-center justify-center mb-6 group-hover:border-gold transition-colors duration-300">
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-serif text-lg text-text-primary mb-3 group-hover:text-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">{service.desc}</p>
            </div>
          )
        })}
      </div>

      {/* Stats bar */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-16">
        {[
          { number: '10+', label: 'Years Experience' },
          { number: 'Custom', label: 'Design & Branding' },
          { number: 'Indoor', label: 'Outdoor Signage' },
          { number: '24/7', label: 'Content Support' },
        ].map((stat) => (
          <div key={stat.label} className="bg-surface px-8 py-10 text-center">
            <p className="font-serif text-4xl text-gold">{stat.number}</p>
            <p className="text-text-muted text-xs tracking-widest uppercase mt-2">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="font-serif text-3xl text-text-primary mb-3">
          Ready to make your brand stand out?
        </h3>
        <p className="text-text-muted text-sm mb-8">
          Get a free consultation and custom quote for your signage project.
        </p>
        <a
          href="#contact"
          className="inline-block bg-gold text-background px-12 py-4 text-sm tracking-widest uppercase hover:bg-gold-hover transition-colors duration-300"
        >
          Get a Free Quote
        </a>
      </div>
    </section>
  )
}
