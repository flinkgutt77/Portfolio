import Image from 'next/image'
import FadeIn from '@/components/ui/FadeIn'
import { getDict } from '@/lib/i18n'

const a = getDict().about

export default function About() {
  return (
    <section id="about" className="bg-background py-24 px-6">
      <FadeIn>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Portrait */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm aspect-[3/4]">
              <Image
                src="/Umar.jpg"
                alt="Umar Javed — Photographer & Cinematographer"
                fill
                className="object-cover object-center"
              />
            </div>
            {/* Gold accent corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gold opacity-60" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold opacity-60" />
          </div>

          {/* Right — Bio */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-gold mb-6">{a.label}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-text-primary mb-2">
              Umar Javed
            </h2>
            <p className="text-text-muted text-sm tracking-widest mb-8">
              {a.role}
            </p>
            <div className="w-16 h-px bg-gold mb-8" />

            <p className="text-text-muted leading-relaxed">{a.bio1}</p>
            <p className="text-text-muted leading-relaxed mt-5">{a.bio2}</p>
            <p className="text-text-muted leading-relaxed mt-5">{a.bio3}</p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {a.stats.map((stat) => (
                <div key={stat.label} className="border-l border-gold/40 pl-4">
                  <p className="text-3xl font-serif text-gold">{stat.value}</p>
                  <p className="text-xs text-text-muted mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase"
              >
                {a.cta}
              </a>
            </div>
          </div>

        </div>
      </FadeIn>
    </section>
  )
}
