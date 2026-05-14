// Nav links
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Fashion', href: '#gallery' },
  { label: 'Films', href: '#films' },
  { label: 'Signage', href: '#signage' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
  // Films — YouTube thumbnails
  { id: 'f1', src: 'https://img.youtube.com/vi/IopsPmezh64/maxresdefault.jpg', alt: 'Kubra & Asad — Wedding Film', category: 'films', width: 1280, height: 720, videoId: 'IopsPmezh64' },
  { id: 'f2', src: 'https://img.youtube.com/vi/GcchdWXHAnI/maxresdefault.jpg', alt: 'Video Shoot', category: 'films', width: 1280, height: 720, videoId: 'GcchdWXHAnI' },
  { id: 'f3', src: 'https://img.youtube.com/vi/yvAhdVdjIxY/maxresdefault.jpg', alt: 'Highlights Reel', category: 'films', width: 1280, height: 720, videoId: 'yvAhdVdjIxY' },
]

// Gallery filter categories
export const galleryCategories = ['All', 'Weddings', 'Birthdays', 'Portraits', 'Fashion', 'Ads', 'Signage', 'Films']

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
  { id: 't5', quote: 'The AI workflow Umar set up saved us 15 hours a week on client onboarding alone.', name: 'Bilal & Co.', service: 'AI Agent Workflows' },
]

// Social links
export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/ujstudionorge', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61567685248522', icon: 'Facebook' },
  { label: 'YouTube', href: 'https://youtube.com/@umarjaved77', icon: 'Youtube' },
]
