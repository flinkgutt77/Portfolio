import { Heart, Cake, Users, Camera, Film, LayoutDashboard, Monitor, TrendingUp, Bot } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { services } from '@/lib/data'

const iconMap: Record<string, LucideIcon> = {
  Heart,
  Cake,
  Users,
  Camera,
  Film,
  LayoutDashboard,
  Monitor,
  TrendingUp,
  Bot,
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-surface">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <p className="text-xs tracking-widest uppercase text-gold">WHAT I OFFER</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">My Services</h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon]
          return (
            <div
              key={service.id}
              className="bg-background border border-border rounded-sm p-8 hover:border-gold transition-colors duration-300"
            >
              {Icon && <Icon size={32} className="text-gold mb-6" />}
              <h3 className="font-serif text-xl text-text-primary mb-3">{service.name}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
