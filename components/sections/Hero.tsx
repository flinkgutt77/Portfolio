'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

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
          backgroundImage:
            'url(https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark gradient overlay — bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent -z-10" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Label + Divider + Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0 }}
        >
          <p className="text-gold uppercase tracking-widest text-xs sm:text-sm font-sans">
            PHOTOGRAPHY · FILM · DIGITAL
          </p>
          <div className="w-16 h-px bg-gold mx-auto my-6" />
          <h1 className="font-serif font-normal leading-tight text-text-primary text-5xl md:text-7xl lg:text-8xl">
            Capturing Moments,
            <br />
            Creating Stories
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-text-muted text-sm md:text-base mt-6 max-w-xl mx-auto">
            Wedding · Birthday · Portrait · Advertising · Digital Signage · AI Workflows
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
              View Portfolio
            </a>
            <a
              href="#contact"
              className="border border-border text-text-muted hover:border-gold hover:text-gold px-8 py-3 transition-all duration-300 text-sm tracking-widest uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2"
            >
              Get in Touch
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
