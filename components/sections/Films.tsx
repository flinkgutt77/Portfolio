import FadeIn from '@/components/ui/FadeIn'

const filmCards = [
  { title: 'DK Logo Animation', client: 'Brand Film', year: '2025', videoId: '1edAEaJDuBg' },
  { title: 'Highlights Reel', client: 'Showreel', year: '2021', videoId: 'yvAhdVdjIxY' },
  { title: 'Fashion Studio Shoot', client: 'Fashion Film', year: '2021', videoId: 'a3BLkr_vJAg' },
  { title: 'Studio Collection', client: 'Fashion Film', year: '2021', videoId: 'Gcu87eWkiBY' },
  { title: 'Fashion Editorial', client: 'Fashion Film', year: '2021', videoId: 'kjInN6INIUk' },
  { title: 'Studio Portrait Film', client: 'Portrait Film', year: '2021', videoId: 'zF92aN6_chc' },
  { title: 'Studio Lookbook', client: 'Fashion Film', year: '2021', videoId: '9NzYzoN_lUY' },
  { title: 'Hage', client: 'Cinematic Short', year: '2021', videoId: '6G0vSPFPrAM' },
  { title: 'Studio Reel', client: 'Behind the Scenes', year: '2021', videoId: 'cgd1sEv2XUo' },
]

export default function Films() {
  return (
    <section id="films" className="bg-surface py-24 px-6">
      {/* Header */}
      <FadeIn className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-gold">CINEMATOGRAPHY</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          Films & Showreel
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
        <p className="text-text-muted text-center max-w-xl mx-auto mt-4">
          Cinematic stories for weddings, fashion, brands and beyond.
        </p>
      </FadeIn>

      {/* Main Showreel Embed */}
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

      {/* Film Cards — all link to YouTube */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filmCards.map((card) => (
          <a
            key={card.videoId}
            href={`https://youtube.com/watch?v=${card.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-background border border-border rounded-sm overflow-hidden group block"
          >
            {/* Thumbnail */}
            <div className="relative overflow-hidden" style={{ aspectRatio: '16/9' }}>
              <img
                src={`https://img.youtube.com/vi/${card.videoId}/hqdefault.jpg`}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play button overlay */}
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center group-hover:bg-background/50 transition-all duration-300">
                <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg viewBox="0 0 24 24" fill="black" className="w-6 h-6 ml-1">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Info */}
            <div className="p-5 flex items-start justify-between">
              <div>
                <h3 className="font-serif text-base text-text-primary group-hover:text-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-text-muted text-xs mt-1">{card.client}</p>
              </div>
              <span className="text-gold text-xs tracking-widest shrink-0 ml-4 mt-1">{card.year}</span>
            </div>
          </a>
        ))}
      </div>

      {/* YouTube Channel Link */}
      <div className="text-center mt-12">
        <a
          href="https://youtube.com/@umarjaved77"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 border border-border text-text-muted hover:border-gold hover:text-gold px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
            <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/>
          </svg>
          View Full Channel
        </a>
      </div>
    </section>
  )
}
