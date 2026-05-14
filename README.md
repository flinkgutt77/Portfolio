# UJ Studio Norge — Portfolio Website

**Live site:** https://ujstudionorge.com  
**GitHub:** https://github.com/flinkgutt77/Portfolio  
**Owner:** Umar Javed | UJ Studio Norge

---

## About

A professional portfolio website for **UJ Studio Norge** — a photography, cinematography, fashion film, advertisement production and digital signage business based in Norway.

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| Next.js | 16.2.6 | React framework (App Router) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Styling (CSS `@theme` tokens) |
| Framer Motion | 12 | Scroll animations |
| Lucide React | latest | Icons |
| yet-another-react-lightbox | 3 | Gallery lightbox |
| Sonner | 2 | Toast notifications |

---

## Design System

| Token | Value |
|---|---|
| Background | `#0a0a0a` |
| Surface | `#111111` |
| Gold | `#c9a96e` |
| Gold Hover | `#dfc08a` |
| Text Primary | `#f5f0e8` |
| Text Muted | `#888888` |
| Border | `#222222` |

**Fonts:** Playfair Display (headings) · DM Sans (body) — via `next/font/google`

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx           — fonts, metadata, JSON-LD structured data
│   ├── page.tsx             — page assembly (all sections)
│   ├── globals.css          — Tailwind @theme design tokens
│   ├── sitemap.ts           — /sitemap.xml for SEO
│   ├── robots.ts            — /robots.txt for SEO
│   └── api/contact/route.ts — contact form → n8n webhook
├── components/
│   ├── Navbar.tsx           — sticky nav with UJ Studio logo
│   ├── Footer.tsx           — footer with branded social icons
│   └── sections/
│       ├── Hero.tsx         — full-viewport hero with LOVE photo
│       ├── Services.tsx     — 6 service cards with hover popup effect
│       ├── Gallery.tsx      — filterable masonry gallery + lightbox
│       ├── Films.tsx        — YouTube showreel + 9 video cards
│       ├── Signage.tsx      — digital signage showcase + stats
│       ├── About.tsx        — bio + portrait photo
│       ├── Testimonials.tsx — infinite scrolling client quotes
│       └── Contact.tsx      — contact form
├── lib/
│   └── data.ts              — all content (services, gallery, testimonials, nav/social)
├── public/
│   ├── C-2.png              — UJ Studio logo (black on white, CSS-inverted to gold)
│   ├── A32I0135.jpg         — hero background (LOVE letters wedding photo)
│   ├── Umar.jpg             — About section portrait
│   ├── DP Umar.jpg          — alternative portrait photo
│   ├── Wedding/             — wedding portfolio photos
│   ├── Birthday/            — birthday portfolio photos
│   ├── Portrait/            — portrait portfolio photos
│   ├── Fashion/             — fashion portfolio photos
│   └── Advertisment/        — advertisement portfolio photos
├── next.config.ts           — image remote patterns (Unsplash, YouTube)
└── tailwind.config.ts       — reference (active config is in globals.css @theme)
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Full-viewport LOVE photo background, heading, CTAs, scroll indicator |
| **Services** | 6 cards: Wedding, Birthday, Portraits, Fashion, Ads, Signage — hover popup |
| **Portfolio** | Filterable masonry: Weddings · Birthdays · Portraits · Fashion · Ads · Signage |
| **Films** | Highlights Reel embed + 9 YouTube video cards linking to channel |
| **Signage** | Service cards, showcase images, stats, CTA |
| **About** | Portrait (Umar.jpg) + professional bio + 10+ years experience stats |
| **Testimonials** | CSS marquee carousel of 5 client quotes |
| **Contact** | Form fields → n8n webhook → Telegram notification |

---

## Contact Form → n8n → Telegram

Contact form submits to `/api/contact` which POSTs to n8n webhook.

- **n8n Workflow:** "Portfolio Inquiry" (ID: `80866VfMvTHj47vk`)
- **Webhook URL env var:** `N8N_WEBHOOK_URL` (set in Vercel)
- **Default fallback:** ngrok URL (only works while local machine + ngrok is running)
- **Telegram message:** Receives name, email, phone, service, message, timestamp

> For 24/7 reliability, host n8n on a VPS or use n8n.cloud, then update `N8N_WEBHOOK_URL` in Vercel.

---

## Deployment

| Setting | Value |
|---|---|
| Hosting | Vercel (Hobby plan) |
| Domain | ujstudionorge.com (Namecheap) |
| DNS A record | `@` → `76.76.21.21` |
| DNS CNAME | `www` → `cname.vercel-dns.com` |
| Auto-deploy | Push to `main` → Vercel rebuilds automatically |
| Repo visibility | **Must be PUBLIC** (Hobby plan requirement) |

---

## Environment Variables

| Variable | Where to set | Description |
|---|---|---|
| `N8N_WEBHOOK_URL` | Vercel → Settings → Env Vars | Production n8n webhook for contact form |

---

## SEO Configuration

- **Page title:** UJ Studio Norge | Photography · Cinematography · Digital Signage
- **Description:** Professional photography, cinematography, fashion films, advertisement production and digital signage based in Norway
- **Keywords:** photography Norge, fotograf Norge, wedding photography Norway, bryllupsfotograf, cinematography Norway, fashion photography, digital signage Norway, UJ Studio, Umar Javed photographer
- **JSON-LD:** LocalBusiness schema in `app/layout.tsx`
- **Sitemap:** `https://ujstudionorge.com/sitemap.xml`
- **Robots:** `https://ujstudionorge.com/robots.txt`
- **Open Graph:** Full og: tags with custom image

---

## Social Media

| Platform | URL |
|---|---|
| Instagram | https://instagram.com/ujstudionorge |
| Facebook | https://www.facebook.com/profile.php?id=61567685248522 |
| YouTube | https://youtube.com/@umarjaved77 |

---

## YouTube Videos Featured

Channel: `@umarjaved77` — 9 videos shown on Films section:
- DK Logo Animation (`1edAEaJDuBg`)
- Highlights Reel (`yvAhdVdjIxY`) — main showreel
- Fashion Studio Shoot (`a3BLkr_vJAg`)
- Studio Collection (`Gcu87eWkiBY`)
- Fashion Editorial (`kjInN6INIUk`)
- Studio Portrait Film (`zF92aN6_chc`)
- Studio Lookbook (`9NzYzoN_lUY`)
- Hage (`6G0vSPFPrAM`)
- Studio Reel (`cgd1sEv2XUo`)

---

## To Do / Add Later

- [ ] Add real signage photos → `public/Signage/` + update `lib/data.ts`
- [ ] Replace placeholder testimonials with real client quotes in `lib/data.ts`
- [ ] Add new showreel video → update embed ID in `Films.tsx`
- [ ] Set `N8N_WEBHOOK_URL` in Vercel for 24/7 contact form
- [ ] Host n8n on cloud or VPS for persistent webhook

---

## Local Development

```bash
cd "/Volumes/Mac Disk /My Claude Portfolio"
npm run dev      # Start dev server → http://localhost:3000
npm run build    # Production build check
git push origin main  # Deploy to Vercel (auto-deploy)
```
