'use client'

import { useState } from 'react'
import { toast } from 'sonner'

const serviceOptions = [
  'Wedding Photography',
  'Birthday Photography',
  'Family Portraits',
  'Ad Photography',
  'Advertisement Films',
  'Signage Boards',
  'Digital Signage',
  'AI Agent Workflows',
  'Other',
]

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [service, setService] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const inputClass =
    'w-full bg-surface border border-border text-text-primary px-4 py-3 rounded-sm focus:outline-none focus:border-gold transition-colors duration-200 placeholder:text-text-muted/50'
  const labelClass = 'text-xs tracking-widest uppercase text-text-muted mb-2 block'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, service, message }),
      })
      if (!res.ok) throw new Error('Failed to send')
      toast.success("Message sent! I'll be in touch soon.")
      setName('')
      setEmail('')
      setPhone('')
      setService('')
      setMessage('')
    } catch {
      toast.error('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-24 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-gold">GET IN TOUCH</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">Start a Project</h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
        <p className="text-text-muted text-center max-w-xl mx-auto mt-4">
          Whether it&apos;s a wedding, campaign, or AI workflow — let&apos;s create something remarkable together.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>Phone</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+92 300 0000000"
            className={inputClass}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClass}>Service</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>Select a service</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>Message</label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your project..."
            className={inputClass}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold text-background text-sm tracking-widest uppercase py-4 hover:bg-gold-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
