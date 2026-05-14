import { LayoutDashboard, Monitor } from 'lucide-react'

export default function Signage() {
  return (
    <section id="signage" className="bg-background py-24 px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xs tracking-widest uppercase text-gold">SIGNAGE &amp; DISPLAY</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          Signage Solutions
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>

      {/* Two-column cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left — Physical Signage */}
        <div className="bg-surface border border-border rounded-sm p-8">
          <LayoutDashboard size={32} className="text-gold mb-4" />
          <h3 className="font-serif text-2xl text-text-primary mb-3">Signage Boards</h3>
          <p className="text-text-muted mb-6">
            From business frontage to exhibition stands — we design and produce eye-catching
            physical signage that makes your brand impossible to miss.
          </p>
          <ul className="space-y-2">
            {[
              'Custom design & fabrication',
              'Outdoor & indoor signage',
              'LED and illuminated boards',
            ].map((item) => (
              <li key={item} className="text-text-muted text-sm flex items-start gap-2">
                <span className="text-gold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Right — Digital Signage */}
        <div className="bg-surface border border-border rounded-sm p-8">
          <Monitor size={32} className="text-gold mb-4" />
          <h3 className="font-serif text-2xl text-text-primary mb-3">Digital Displays</h3>
          <p className="text-text-muted mb-6">
            Dynamic digital signage screens and ad networks — we handle design, content,
            scheduling, and installation for retail, hospitality, and corporate spaces.
          </p>
          <ul className="space-y-2">
            {[
              'Digital screen installation',
              'Content design & scheduling',
              'Advertising network management',
            ].map((item) => (
              <li key={item} className="text-text-muted text-sm flex items-start gap-2">
                <span className="text-gold">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Strip */}
      <div className="bg-surface border border-border rounded-sm p-8 max-w-6xl mx-auto mt-8 text-center">
        <h3 className="font-serif text-2xl text-text-primary mb-4">
          Ready to make your brand stand out?
        </h3>
        <a
          href="#contact"
          className="inline-block border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
        >
          Get a Quote
        </a>
      </div>
    </section>
  )
}
