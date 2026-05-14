import { Bot, TrendingUp, Users } from 'lucide-react'

const useCases = [
  {
    icon: <Bot size={32} className="text-gold mb-4" />,
    title: 'Client Onboarding',
    description:
      'Automate inquiry handling, contract sending, invoice generation, and follow-up sequences so new clients onboard themselves.',
  },
  {
    icon: <TrendingUp size={32} className="text-gold mb-4" />,
    title: 'Social Media Workflow',
    description:
      'AI-powered content planning, caption writing, scheduling, and analytics reporting across Instagram, Facebook, and LinkedIn.',
  },
  {
    icon: <Users size={32} className="text-gold mb-4" />,
    title: 'CRM & Booking Flows',
    description:
      'Intelligent lead tracking, appointment scheduling, reminder sequences, and CRM updates — running 24/7 without manual effort.',
  },
]

export default function AiAgents() {
  return (
    <section id="ai-agents" className="bg-surface py-24 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest uppercase text-gold">AI AUTOMATION</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          Automate. Integrate. Scale.
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
        <p className="text-text-muted text-center max-w-2xl mx-auto mt-4">
          Leverage AI agent workflows to eliminate repetitive tasks, streamline client management,
          and scale your operations without scaling your team.
        </p>
      </div>

      {/* Use-Case Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {useCases.map((card) => (
          <div key={card.title} className="bg-background border border-border rounded-sm p-8">
            {card.icon}
            <h3 className="font-serif text-xl text-text-primary mb-3">{card.title}</h3>
            <p className="text-text-muted text-sm">{card.description}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-text-muted mb-6">Ready to automate your workflow?</p>
        <a
          href="#contact"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          Let&apos;s Talk AI
        </a>
      </div>
    </section>
  )
}
