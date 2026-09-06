import { Bot, TrendingUp, Users } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'
import { getDict } from '@/lib/i18n'

const a = getDict().aiAgents

const useCases = [
  { id: 'onboarding', icon: <Bot size={32} className="text-gold mb-4" /> },
  { id: 'social', icon: <TrendingUp size={32} className="text-gold mb-4" /> },
  { id: 'crm', icon: <Users size={32} className="text-gold mb-4" /> },
] as const

export default function AiAgents() {
  return (
    <section id="ai-agents" className="bg-surface py-24 px-6">
      {/* Header */}
      <FadeIn className="text-center mb-16">
        <p className="text-xs tracking-widest uppercase text-gold">{a.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          {a.heading}
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
        <p className="text-text-muted text-center max-w-2xl mx-auto mt-4">
          {a.subtext}
        </p>
      </FadeIn>

      {/* Use-Case Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {useCases.map((card) => {
          const copy = a.useCases[card.id]
          return (
            <div key={card.id} className="bg-background border border-border rounded-sm p-8">
              {card.icon}
              <h3 className="font-serif text-xl text-text-primary mb-3">{copy.title}</h3>
              <p className="text-text-muted text-sm">{copy.description}</p>
            </div>
          )
        })}
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-text-muted mb-6">{a.ctaText}</p>
        <a
          href="#contact"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          {a.ctaButton}
        </a>
      </div>
    </section>
  )
}
