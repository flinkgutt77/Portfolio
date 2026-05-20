'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { navLinks } from '@/lib/data'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-8 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-4 group">
          <Image
            src="/C-2.png"
            alt="UJ Studio Norge"
            width={88}
            height={88}
            className="object-contain"
            style={{
              filter: 'invert(1) sepia(1) saturate(2.5) hue-rotate(5deg) brightness(1.1)',
              mixBlendMode: 'screen',
            }}
          />
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl text-text-primary tracking-widest group-hover:text-gold transition-colors duration-300">
              UJ STUDIO
            </span>
            <span className="text-xs tracking-[0.45em] uppercase text-gold mt-1">
              Norge
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text-muted text-base hover:text-gold transition-colors duration-200 relative group tracking-wide"
            >
              {link.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-primary hover:text-gold transition-colors"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-surface px-8 py-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-text-muted hover:text-gold transition-colors duration-200 text-lg tracking-wide py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
