import { Camera, Film } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

const filmCards = [
  { title: 'Product Launch Campaign', client: 'Client: Fashion Brand', year: '2024' },
  { title: 'Restaurant Brand Film', client: 'Client: Hospitality Group', year: '2024' },
  { title: 'Real Estate Showcase', client: 'Client: Property Developer', year: '2023' },
]

export default function Films() {
  return (
    <section id="films" className="bg-surface py-24 px-6">
      {/* Header */}
      <FadeIn className="text-center mb-16">
        <p className="text-xs tracking-widest uppercase text-gold">CINEMATOGRAPHY</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          Advertisement Films
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
        <p className="text-text-muted text-center max-w-xl mx-auto mt-4">
          Cinematic brand stories that captivate, connect, and convert.
        </p>
      </FadeIn>

      {/* Showreel Embed */}
      <div className="max-w-4xl mx-auto mb-16">
        <div
          className="w-full bg-background border border-border rounded-sm flex flex-col items-center justify-center"
          style={{ aspectRatio: '16 / 9' }}
        >
          <Camera size={48} className="text-gold mb-4" />
          <p className="text-text-muted">Showreel Coming Soon</p>
        </div>
        <p className="text-text-muted text-xs text-center mt-3">
          Add your YouTube embed URL in components/sections/Films.tsx
        </p>
      </div>

      {/* Film Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {filmCards.map((card) => (
          <div
            key={card.title}
            className="bg-background border border-border rounded-sm overflow-hidden group"
          >
            {/* Thumbnail */}
            <div className="h-48 bg-surface flex items-center justify-center">
              <Film size={32} className="text-text-muted" />
            </div>
            {/* Body */}
            <div className="p-6">
              <h3 className="font-serif text-lg text-text-primary group-hover:text-gold transition-colors">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm mt-1">{card.client}</p>
              <p className="text-gold text-xs tracking-widest mt-3">{card.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
