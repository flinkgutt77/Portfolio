'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { getDict } from '@/lib/i18n'

const h = getDict().hero

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: 'url(/A32I0135.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Overlay — darker for text readability */}
      <div className="absolute inset-0 bg-background/65 -z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20 -z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-10 py-14 max-w-5xl mx-auto"
        style={{
          background: 'linear-gradient(135deg, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.35) 100%)',
          backdropFilter: 'blur(2px)',
          borderLeft: '1px solid rgba(201,169,110,0.2)',
          borderRight: '1px solid rgba(201,169,110,0.2)',
        }}
      >
        {/* Top tagline */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0 }}
        >
          <p className="text-gold uppercase tracking-[0.4em] text-xs sm:text-sm font-sans"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
            {h.tagline}
          </p>
          <div className="w-20 h-px bg-gold mx-auto my-8" />
          <h1
            className="font-serif font-normal leading-[1.1] text-white text-5xl md:text-7xl lg:text-8xl"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.9)' }}
          >
            {h.heading[0]}
            <br />
            <em className="text-gold not-italic">{h.heading[1]}</em> {h.heading[2]}
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p
            className="text-white/80 text-sm md:text-base mt-8 max-w-2xl mx-auto tracking-wider leading-relaxed"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9)' }}
          >
            {h.subtext}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <a
              href="#gallery"
              className="border border-gold text-gold hover:bg-gold hover:text-background px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              {h.cta1}
            </a>
            <a
              href="#contact"
              className="border border-border text-text-muted hover:border-gold hover:text-gold px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              {h.cta2}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div aria-hidden="true" className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown className="text-gold opacity-60 animate-bounce" size={28} />
      </div>
    </section>
  )
}
