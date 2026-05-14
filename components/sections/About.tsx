import { Camera } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Delivered' },
  { value: '50+', label: 'Happy Clients' },
]

export default function About() {
  return (
    <section id="about" className="bg-background py-24 px-6">
      <FadeIn>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left — Portrait placeholder */}
        <div>
          <div className="bg-surface border border-border rounded-sm aspect-[3/4] flex flex-col items-center justify-center">
            <Camera size={64} className="text-text-muted" />
            <p className="text-text-muted text-xs text-center mt-3">Your portrait here</p>
          </div>
        </div>

        {/* Right — Bio */}
        <div>
          <p className="text-xs tracking-widest uppercase text-gold mb-6">ABOUT ME</p>
          <h2 className="font-serif text-4xl text-text-primary mb-2">Umar Javed</h2>
          <p className="text-text-muted text-sm tracking-wide mb-8">
            Photographer · Filmmaker · Creative Director
          </p>
          <div className="w-16 h-px bg-gold mb-8" />
          <p className="text-text-muted">
            With a passion for visual storytelling, I have spent years crafting images and films
            that do more than document moments — they create emotions, build brands, and leave
            lasting impressions.
          </p>
          <p className="text-text-muted mt-4">
            From intimate family portraits to large-scale commercial campaigns, I bring the same
            dedication to every project: exceptional quality, creative vision, and a seamless
            client experience.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l border-border pl-4">
                <p className="text-3xl font-serif text-gold">{stat.value}</p>
                <p className="text-xs text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  )
}
