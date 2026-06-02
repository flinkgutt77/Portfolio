'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { getDict } from '@/lib/i18n'

const c = getDict().contact
const serviceOptions = c.serviceOptions

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
      toast.success(c.successMsg)
      setName('')
      setEmail('')
      setPhone('')
      setService('')
      setMessage('')
    } catch {
      toast.error(c.errorMsg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="bg-background py-24 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xs tracking-widest uppercase text-gold">{c.label}</p>
        <h2 className="font-serif text-4xl md:text-5xl text-text-primary mt-4">{c.heading}</h2>
        <div className="w-16 h-px bg-gold mx-auto mt-6" />
        <p className="text-text-muted text-center max-w-xl mx-auto mt-4">{c.subtext}</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-12 space-y-6">
        {/* Name + Email row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelClass}>{c.nameLbl}</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={c.namePh}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClass}>{c.emailLbl}</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={c.emailPh}
              className={inputClass}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelClass}>{c.phoneLbl}</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder={c.phonePh}
            className={inputClass}
          />
        </div>

        {/* Service */}
        <div>
          <label htmlFor="service" className={labelClass}>{c.serviceLbl}</label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>{c.servicePh}</option>
            {serviceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className={labelClass}>{c.messageLbl}</label>
          <textarea
            id="message"
            rows={5}
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={c.messagePh}
            className={inputClass}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gold text-background text-sm tracking-widest uppercase py-4 hover:bg-gold-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? c.submitting : c.submit}
        </button>
      </form>
    </section>
  )
}
