import { Heart, Cake, Users, Camera, Monitor, Sparkles } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '@/lib/data'
import FadeIn from '@/components/ui/FadeIn'
import { getDict } from '@/lib/i18n'

const s = getDict().services
const sc = getDict().serviceCards

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Cake,
  Users,
  Camera,
  Monitor,
  Sparkles,
}

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-surface">
      {/* Header */}
      <FadeIn className="max-w-2xl mx-auto mb-20 text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4">{s.label}</p>
        <h2 className="font-serif text-4xl md:text-6xl text-text-primary">{s.heading}</h2>
        <div className="w-20 h-px bg-gold mx-auto mt-8" />
        <p className="text-text-muted text-sm mt-6 leading-relaxed max-w-xl mx-auto">
          {s.subtext}
        </p>
      </FadeIn>

      {/* Cards — 3×2 grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon]
          return (
            <div
              key={service.id}
              className="bg-surface flex flex-col relative overflow-hidden group cursor-default"
              style={{ minHeight: '280px' }}
            >
              {/* Top gold accent line slides in on hover */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-500 z-10" />

              {/* Default state — visible when not hovered */}
              <div className="p-10 flex flex-col gap-5 transition-all duration-400 group-hover:opacity-0 group-hover:-translate-y-4 group-hover:pointer-events-none">
                <div className="flex items-start justify-between">
                  <span className="font-serif text-5xl text-border leading-none select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {Icon && <Icon size={26} className="text-gold mt-1" />}
                </div>
                <h3 className="font-serif text-xl text-text-primary">
                  {sc[service.id as keyof typeof sc]?.name ?? service.name}
                </h3>
                <div className="mt-auto pt-4 border-t border-border/50">
                  <span className="text-xs tracking-widest uppercase text-text-muted">
                    {s.hoverHint}
                  </span>
                </div>
              </div>

              {/* Hover state — pops up on hover */}
              <div className="absolute inset-0 bg-background p-10 flex flex-col items-center justify-center text-center gap-5 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400">
                {Icon && (
                  <div className="w-16 h-16 border border-gold rounded-full flex items-center justify-center mb-2">
                    <Icon size={30} className="text-gold" />
                  </div>
                )}
                <h3 className="font-serif text-2xl text-gold leading-tight">
                  {sc[service.id as keyof typeof sc]?.name ?? service.name}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed max-w-xs">
                  {sc[service.id as keyof typeof sc]?.description ?? service.description}
                </p>
                <span className="text-xs tracking-[0.3em] uppercase text-gold/60 mt-2">
                  {s.contactHint}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
