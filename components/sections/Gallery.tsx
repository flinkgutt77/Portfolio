'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { Play } from 'lucide-react'
import { galleryItems, galleryCategories } from '@/lib/data'
import FadeIn from '@/components/ui/FadeIn'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [open, setOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filtered =
    activeFilter === 'All'
      ? galleryItems
      : galleryItems.filter(
          item => item.category.toLowerCase() === activeFilter.toLowerCase()
        )

  // Only photo items go into the lightbox (no videos)
  const photoItems = filtered.filter(item => !item.videoId)

  const handleItemClick = (item: typeof filtered[0], index: number) => {
    if (item.videoId) {
      window.open(`https://youtube.com/watch?v=${item.videoId}`, '_blank')
    } else {
      // Map to photo-only index for lightbox
      const photoIndex = photoItems.findIndex(p => p.id === item.id)
      setCurrentIndex(photoIndex)
      setOpen(true)
    }
  }

  return (
    <section id="gallery" className="bg-background py-24 px-6">
      {/* Header */}
      <FadeIn className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-gold">PORTFOLIO</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          My Work
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </FadeIn>

      {/* Filter Tabs */}
      <div className="flex flex-row gap-2 flex-wrap justify-center mb-10">
        {galleryCategories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={
              activeFilter === category
                ? 'bg-gold text-background text-xs px-5 py-2 tracking-widest uppercase'
                : 'border border-border text-text-muted hover:border-gold hover:text-gold text-xs px-5 py-2 tracking-widest uppercase transition-colors duration-200'
            }
          >
            {category}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
        {filtered.map((item, index) => (
          <button
            key={item.id}
            className="break-inside-avoid mb-4 w-full text-left relative group"
            onClick={() => handleItemClick(item, index)}
            aria-label={item.videoId ? `Watch ${item.alt} on YouTube` : `View ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-auto object-cover rounded-sm group-hover:opacity-80 transition-opacity duration-200"
            />
            {/* Play button overlay for video items */}
            {item.videoId && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Play size={22} fill="black" className="text-background ml-1" />
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox — photos only */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photoItems.map(item => ({ src: item.src }))}
        index={currentIndex}
        on={{ view: ({ index }) => setCurrentIndex(index) }}
      />
    </section>
  )
}
