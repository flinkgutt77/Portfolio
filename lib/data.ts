// Nav links — labels come from i18n, built at deploy time
import { getDict } from '@/lib/i18n'
const _nav = getDict().nav
export const navLinks = [
  { label: _nav.services, href: '/#services' },
  { label: _nav.portfolio, href: '/#gallery' },
  { label: _nav.about,    href: '/#about' },
  { label: _nav.contact,  href: '/contact' },
]

// Services
export type Service = {
  id: string
  name: string
  description: string
  icon: string
}

export const services: Service[] = [
  { id: 'wedding', name: 'Wedding Photography & Film', description: 'Timeless photos and cinematic films from your most special day — every emotion beautifully preserved', icon: 'Heart' },
  { id: 'birthday', name: 'Birthday Photography & Film', description: 'Vibrant coverage of your celebration, from candid moments to cinematic highlights', icon: 'Cake' },
  { id: 'portrait', name: 'Family Portraits', description: 'Authentic, warm family portraits that capture the love and connection between your loved ones', icon: 'Users' },
  { id: 'fashion', name: 'Fashion Photography & Film', description: 'Striking fashion editorials and cinematic lookbook films that bring your collection to life with style and elegance', icon: 'Sparkles' },
  { id: 'advertisement', name: 'Advertisement Photography & Film', description: 'High-impact visuals and cinematic brand films that elevate your marketing and captivate your audience', icon: 'Camera' },
  { id: 'signage', name: 'Digital Signage', description: 'From signage board design to digital screen installation and advertising — complete signage solutions for your business', icon: 'Monitor' },
]

// Gallery items
export type GalleryItem = {
  id: string
  src: string
  alt: string
  category: string
  width: number
  height: number
  videoId?: string
}

export const galleryItems: GalleryItem[] = [
  // Weddings
  { id: 'w1', src: '/Wedding/wedding-1.jpg', alt: 'Wedding photography Norway — couple portrait by UJ Studio', category: 'weddings', width: 800, height: 1000 },
  { id: 'w2', src: '/Wedding/wedding-2.jpg', alt: 'Wedding ceremony photography Norway by UJ Studio', category: 'weddings', width: 800, height: 600 },
  { id: 'w3', src: '/Wedding/wedding-3.jpg', alt: 'Bridal portrait — wedding photography by UJ Studio Norge', category: 'weddings', width: 800, height: 800 },
  { id: 'w4', src: '/Wedding/wedding-4.jpg', alt: 'Wedding moments captured by UJ Studio Norge', category: 'weddings', width: 800, height: 600 },
  { id: 'w5', src: '/Wedding/wedding-5.jpg', alt: 'Romantic wedding photo — UJ Studio photography Norway', category: 'weddings', width: 800, height: 1000 },
  // Sabah & Sheraz (2020) — couple consented to publication
  { id: 'ws1', src: '/Wedding/sabah-sheraz-01.jpg', alt: "Bride and groom in the snow — winter wedding photography in Norway by UJ Studio", category: 'weddings', width: 1067, height: 1600 },
  { id: 'ws2', src: '/Wedding/sabah-sheraz-02.jpg', alt: "Backlit moment between bride and groom — wedding photography by UJ Studio Norge", category: 'weddings', width: 1600, height: 944 },
  { id: 'ws3', src: '/Wedding/sabah-sheraz-03.jpg', alt: "Bride and groom on a staircase — elegant wedding portrait by UJ Studio", category: 'weddings', width: 1186, height: 1600 },
  { id: 'ws4', src: '/Wedding/sabah-sheraz-04.jpg', alt: "Groom kisses the bride's forehead — romantic wedding photography Norway", category: 'weddings', width: 1153, height: 1600 },
  { id: 'ws5', src: '/Wedding/sabah-sheraz-05.jpg', alt: "Silhouette of the couple against purple light — creative wedding photography by UJ Studio", category: 'weddings', width: 1291, height: 1600 },
  { id: 'ws6', src: '/Wedding/sabah-sheraz-06.jpg', alt: "Bride and groom with warm bokeh lights — evening wedding portrait by UJ Studio Norge", category: 'weddings', width: 1355, height: 1600 },
  { id: 'ws7', src: '/Wedding/sabah-sheraz-07.jpg', alt: "Bride with bouquet in warm light — bridal portrait photography Norway", category: 'weddings', width: 1067, height: 1600 },
  { id: 'ws8', src: '/Wedding/sabah-sheraz-08.jpg', alt: "Bridal portrait against a blue wall — wedding photography by UJ Studio", category: 'weddings', width: 1137, height: 1600 },
  { id: 'ws9', src: '/Wedding/sabah-sheraz-09.jpg', alt: "Bride under her veil — intimate bridal portrait by UJ Studio Norge", category: 'weddings', width: 1600, height: 1067 },
  { id: 'ws10', src: '/Wedding/sabah-sheraz-10.jpg', alt: "Wedding rings in white roses — wedding detail photography Norway", category: 'weddings', width: 1600, height: 1043 },
  // Mehndi details (Farrukh & Tooba, 2024) — detail shots only, no people
  { id: 'wm1', src: '/Wedding/mehndi-detail-01.jpg', alt: "Mehndi detail: groom's hands with kangna bracelets — wedding photography by UJ Studio Norge", category: 'weddings', width: 1600, height: 1067 },
  { id: 'wm2', src: '/Wedding/mehndi-detail-02.jpg', alt: "Embroidered Masha'Allah sleeve on the groom's mehndi outfit — UJ Studio wedding details", category: 'weddings', width: 1600, height: 1171 },
  { id: 'wm3', src: '/Wedding/mehndi-detail-03.jpg', alt: "Hands playing the dholak at a mehndi celebration in Norway — UJ Studio", category: 'weddings', width: 1544, height: 1600 },
  { id: 'wm4', src: '/Wedding/mehndi-detail-04.jpg', alt: "Decorated dhol drums on a colourful rangoli — mehndi detail photography by UJ Studio", category: 'weddings', width: 1600, height: 1113 },
  { id: 'wm5', src: '/Wedding/mehndi-detail-05.jpg', alt: "Mehndi umbrellas and henna plates on a rangoli floor — wedding details by UJ Studio Norge", category: 'weddings', width: 1600, height: 1067 },
  { id: 'wm9', src: '/Wedding/mehndi-detail-09.jpg', alt: "Candle wrapped in bangles on a pink table runner — mehndi decor by UJ Studio", category: 'weddings', width: 1600, height: 1146 },
  // Birthdays
  { id: 'b1', src: '/Birthday/birthday-1.jpg', alt: 'Birthday photography Norway — celebration moment by UJ Studio', category: 'birthdays', width: 800, height: 600 },
  { id: 'b2', src: '/Birthday/birthday-2.jpg', alt: 'Birthday portrait photography by UJ Studio Norge', category: 'birthdays', width: 800, height: 1000 },
  { id: 'b3', src: '/Birthday/birthday-3.jpg', alt: 'Birthday event photography Norway — UJ Studio', category: 'birthdays', width: 800, height: 600 },
  // Portraits
  { id: 'p1', src: '/Portrait/portrait-1.jpg', alt: 'Professional portrait photography Norway — UJ Studio', category: 'portraits', width: 800, height: 1000 },
  { id: 'p2', src: '/Portrait/portrait-golden-hour.jpg', alt: 'Golden hour portrait photography in Norway — UJ Studio', category: 'portraits', width: 1067, height: 1600 },
  { id: 'p3', src: '/Portrait/portrait-night.jpg', alt: 'Night portrait photography Norway — UJ Studio Norge', category: 'portraits', width: 1067, height: 1600 },
  { id: 'p4', src: '/Portrait/portrait-4.jpg', alt: 'Professional headshot photography — UJ Studio Norge', category: 'portraits', width: 800, height: 600 },
  { id: 'p5', src: '/Portrait/portrait-5.jpg', alt: 'Creative portrait photography Norway by UJ Studio', category: 'portraits', width: 800, height: 800 },
  // Fashion
  { id: 'fa1', src: '/Fashion/fashion-1.jpg', alt: 'Fashion photography Norway — editorial by UJ Studio', category: 'fashion', width: 800, height: 1000 },
  { id: 'fa2', src: '/Fashion/fashion-2.jpg', alt: 'Fashion editorial photography by UJ Studio Norge', category: 'fashion', width: 800, height: 600 },
  { id: 'fa3', src: '/Fashion/fashion-studio-dupatta.jpg', alt: 'Studio fashion photography Norway — flowing dupatta, UJ Studio', category: 'fashion', width: 810, height: 1200 },
  { id: 'fa4', src: '/Fashion/fashion-studio-red-dress.jpg', alt: 'Red embroidered dress in warm studio light — fashion photography by UJ Studio Norge', category: 'fashion', width: 800, height: 1200 },
  { id: 'fa5', src: '/Fashion/fashion-5.jpg', alt: 'Fashion portrait photography Norway by UJ Studio', category: 'fashion', width: 800, height: 800 },
  // Ads
  { id: 'a1', src: '/Advertisment/ad-1.jpg', alt: 'Commercial advertisement photography Norway — UJ Studio', category: 'ads', width: 800, height: 600 },
  { id: 'a2', src: '/Advertisment/ad-2.jpg', alt: 'Brand advertisement photography by UJ Studio Norge', category: 'ads', width: 800, height: 1000 },
  // Signage — restaurant / bar / takeaway digital screens
  { id: 's1', src: 'https://images.unsplash.com/photo-1548115737-93977f7179e8?w=1200&q=85', alt: 'Restaurant food court digital menu boards and signage', category: 'signage', width: 1200, height: 800 },
  { id: 's2', src: 'https://images.unsplash.com/photo-1759696302352-f20e19869be2?w=1200&q=85', alt: 'Fast food restaurant counter with digital menu display', category: 'signage', width: 1200, height: 900 },
  { id: 's3', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=85', alt: 'Digital signage screens for bar and hospitality venues', category: 'signage', width: 1200, height: 800 },
]

// Gallery filter categories
export const galleryCategories = ['All', 'Weddings', 'Birthdays', 'Portraits', 'Fashion', 'Ads', 'Signage']

// Films (YouTube) — shown in the Films section with their own filter tabs,
// separate from the photo gallery. `client` keys map to films.clientLabels in lib/i18n.ts.
export type FilmCategory = 'fashion' | 'wedding' | 'teasers'
export type Film = {
  title: string
  client: string
  year: string
  videoId: string
  category: FilmCategory
}

export const filmCategories: ('all' | FilmCategory)[] = ['all', 'fashion', 'wedding', 'teasers']

// Main embed at the top of the Films section (not repeated in the grid)
export const featuredFilmId = '9NzYzoN_lUY' // Studio Lookbook

export const films: Film[] = [
  // Fashion
  { title: 'Winter Model Shoot', client: 'Fashion Film', year: '2021', videoId: '1edAEaJDuBg', category: 'fashion' },
  { title: 'Studio Collection', client: 'Fashion Film', year: '2021', videoId: 'Gcu87eWkiBY', category: 'fashion' },
  { title: 'Fashion Editorial', client: 'Fashion Film', year: '2021', videoId: 'kjInN6INIUk', category: 'fashion' },
  { title: 'Studio Portrait Film', client: 'Portrait Film', year: '2021', videoId: 'zF92aN6_chc', category: 'fashion' },
  { title: 'Fashion Short', client: 'Fashion Film', year: '2021', videoId: '6G0vSPFPrAM', category: 'fashion' },
  { title: 'Studio Reel', client: 'Fashion Film', year: '2021', videoId: 'cgd1sEv2XUo', category: 'fashion' },
  // Wedding
  { title: 'Zain & Aisha', client: 'Wedding Film', year: '2018', videoId: 'ZnOT30Wcikw', category: 'wedding' },
  { title: 'Usman & Javeria', client: 'Wedding Film', year: '2018', videoId: 'hNYCbRlGg5Y', category: 'wedding' },
  { title: 'Shilpu & Kim', client: 'Engagement Film', year: '2018', videoId: '70khkeJImzo', category: 'wedding' },
  { title: "Bilal's Post Wedding Shoot", client: 'Wedding Film', year: '2018', videoId: 'kjyw4ff04O0', category: 'wedding' },
  // Teasers & trailers
  { title: 'Kubra & Asad', client: 'Video Song Teaser', year: '2021', videoId: 'yvAhdVdjIxY', category: 'teasers' },
  { title: 'NDMVD Novel', client: 'Trailer', year: '2018', videoId: 'sg9oJK9pYz8', category: 'teasers' },
]

// Dedicated per-category portfolio pages — id matches `services` ids and
// lib/i18n.ts's `portfolioPages` dict; category matches galleryItems' `category`
// field for filtering. slug is locale-specific (SEO landing pages, e.g.
// /portfolio/wedding on ujstudionorge.com vs /portfolio/bryllup on ujstudio.no).
export type PortfolioCategory = {
  id: string
  category: string
  slug: { en: string; nb: string }
}

export const portfolioCategories: PortfolioCategory[] = [
  { id: 'wedding',       category: 'weddings',  slug: { en: 'wedding',       nb: 'bryllup' } },
  { id: 'birthday',      category: 'birthdays', slug: { en: 'birthday',      nb: 'bursdag' } },
  { id: 'portrait',      category: 'portraits', slug: { en: 'portrait',      nb: 'portrett' } },
  { id: 'fashion',       category: 'fashion',   slug: { en: 'fashion',       nb: 'mote' } },
  { id: 'advertisement', category: 'ads',       slug: { en: 'advertisement', nb: 'reklame' } },
  { id: 'signage',       category: 'signage',   slug: { en: 'signage',       nb: 'skiltning' } },
]

// Testimonials
export type Testimonial = {
  id: string
  quote: string
  name: string
  service: string
}

export const testimonials: Testimonial[] = [
  { id: 't1', quote: 'Umar captured our wedding day perfectly. Every photo tells a story — we treasure them forever.', name: 'Sarah & Ahmed', service: 'Wedding Photography' },
  { id: 't2', quote: 'The product shots for our ad campaign exceeded expectations. Sales went up 40% after launch.', name: 'Nadia Khan', service: 'Ad Photography' },
  { id: 't3', quote: 'Our digital signage system has transformed how customers engage with our brand.', name: 'Tariq Enterprises', service: 'Digital Signage' },
  { id: 't4', quote: "The birthday photos made my daughter's party feel like a magazine shoot. Absolutely magical.", name: 'Fatima Malik', service: 'Birthday Photography' },
  { id: 't5', quote: 'The signage screens Umar designed and installed for our restaurant have completely transformed how customers engage with our menu. Absolutely worth every penny.', name: 'Hassan Restaurants', service: 'Digital Signage' },
]

// Social links
export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/ujstudionorge', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61567685248522', icon: 'Facebook' },
  { label: 'YouTube', href: 'https://youtube.com/@UmarJavedFilms', icon: 'Youtube' },
]
