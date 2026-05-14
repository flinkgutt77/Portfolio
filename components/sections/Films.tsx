import FadeIn from '@/components/ui/FadeIn'

const filmCards = [
  {
    title: 'Highlights',
    client: 'Highlights Reel',
    year: '2021',
    videoId: 'yvAhdVdjIxY',
  },
]

export default function Films() {
  return (
    <section id="films" className="bg-surface py-24 px-6">
      {/* Header */}
      <FadeIn className="text-center mb-16">
        <p className="text-xs tracking-widest uppercase text-gold">CINEMATOGRAPHY</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          Films & Showreel
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
        <p className="text-text-muted text-center max-w-xl mx-auto mt-4">
          Cinematic brand stories that captivate, connect, and convert.
        </p>
      </FadeIn>

      {/* Main Showreel */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="w-full rounded-sm overflow-hidden" style={{ aspectRatio: '16 / 9' }}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/yvAhdVdjIxY?rel=0&color=white"
            title="UJStudio Highlights Reel"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Film Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {filmCards.map((card) => (
          <a
            key={card.videoId}
            href={`https://youtube.com/watch?v=${card.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border border-border rounded-sm overflow-hidden group block"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={`https://img.youtube.com/vi/${card.videoId}/hqdefault.jpg`}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="black" className="w-5 h-5 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg text-text-primary group-hover:text-gold transition-colors">
                {card.title}
              </h3>
              <p className="text-text-muted text-sm mt-1">{card.client}</p>
              <p className="text-gold text-xs tracking-widest mt-3">{card.year}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
