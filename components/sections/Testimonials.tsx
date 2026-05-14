'use client'

import { testimonials } from '@/lib/data'
import FadeIn from '@/components/ui/FadeIn'

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials]

  return (
    <section id="testimonials" className="bg-surface py-24 px-6 overflow-hidden">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* Header */}
      <FadeIn className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-gold">TESTIMONIALS</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">What Clients Say</h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </FadeIn>

      {/* Marquee */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 w-max"
          style={{ animation: 'marquee 30s linear infinite' }}
        >
          {doubled.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="min-w-[320px] max-w-[360px] bg-background border border-border rounded-sm p-8 flex-shrink-0"
            >
              <span className="text-3xl font-serif text-gold leading-none">&ldquo;</span>
              <p className="text-text-primary text-sm leading-relaxed mt-2 italic">{t.quote}</p>
              <div className="w-8 h-px bg-border mt-6 mb-4" />
              <p className="font-serif text-text-primary text-base">{t.name}</p>
              <p className="text-text-muted text-xs tracking-wide mt-1">{t.service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
