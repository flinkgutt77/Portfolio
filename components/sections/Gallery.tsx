'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { galleryItems, galleryCategories } from '@/lib/data'

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

  const handleImageClick = (index: number) => {
    setCurrentIndex(index)
    setOpen(true)
  }

  return (
    <section id="gallery" className="bg-background py-24 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-gold">PORTFOLIO</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">
          My Work
        </h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
      </div>

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
          <div
            key={item.id}
            className="break-inside-avoid mb-4"
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity duration-200 rounded-sm"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={filtered.map(item => ({ src: item.src }))}
        index={currentIndex}
      />
    </section>
  )
}
