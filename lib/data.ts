// Nav links
export const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#gallery' },
  { label: 'Films', href: '#films' },
  { label: 'Signage', href: '#signage' },
  { label: 'AI Agents', href: '#ai-agents' },
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
  { id: 'wedding', name: 'Wedding Photography', description: 'Timeless moments from your most special day', icon: 'Heart' },
  { id: 'birthday', name: 'Birthday Photography', description: 'Celebrate every milestone with stunning shots', icon: 'Cake' },
  { id: 'portrait', name: 'Family Portraits', description: 'Authentic family memories that last forever', icon: 'Users' },
  { id: 'ad-photo', name: 'Ad Photography', description: 'High-impact visuals that drive your brand forward', icon: 'Camera' },
  { id: 'ad-film', name: 'Advertisement Films', description: 'Cinematic brand stories that captivate audiences', icon: 'Film' },
  { id: 'signage', name: 'Signage Boards', description: 'Eye-catching physical signage for your business', icon: 'LayoutDashboard' },
  { id: 'digital-screen', name: 'Digital Signage Screens', description: 'Dynamic digital displays for modern spaces', icon: 'Monitor' },
  { id: 'digital-ads', name: 'Digital Signage Ads', description: 'Targeted advertising campaigns on digital networks', icon: 'TrendingUp' },
  { id: 'ai-agents', name: 'AI Agent Workflows', description: 'Automate and scale your business with AI', icon: 'Bot' },
]

// Gallery items
export type GalleryItem = {
  id: string
  src: string
  alt: string
  category: string
  width: number
  height: number
}

export const galleryItems: GalleryItem[] = [
  // Weddings
  { id: 'w1', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800', alt: 'Wedding couple', category: 'weddings', width: 800, height: 1000 },
  { id: 'w2', src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800', alt: 'Wedding ceremony', category: 'weddings', width: 800, height: 600 },
  { id: 'w3', src: 'https://images.unsplash.com/photo-1583939411023-14783179e581?w=800', alt: 'Wedding rings', category: 'weddings', width: 800, height: 800 },
  // Birthdays
  { id: 'b1', src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800', alt: 'Birthday celebration', category: 'birthdays', width: 800, height: 600 },
  { id: 'b2', src: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800', alt: 'Birthday cake', category: 'birthdays', width: 800, height: 1000 },
  // Portraits
  { id: 'p1', src: 'https://images.unsplash.com/photo-1511895426328-dc8714191011?w=800', alt: 'Family portrait', category: 'portraits', width: 800, height: 600 },
  { id: 'p2', src: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?w=800', alt: 'Family outdoor', category: 'portraits', width: 800, height: 1000 },
  // Ads
  { id: 'a1', src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800', alt: 'Ad photography', category: 'ads', width: 800, height: 600 },
  { id: 'a2', src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800', alt: 'Product shot', category: 'ads', width: 800, height: 800 },
  // Signage
  { id: 's1', src: 'https://images.unsplash.com/photo-1563461661026-49631dd5d68e?w=800', alt: 'Digital signage', category: 'signage', width: 800, height: 600 },
  { id: 's2', src: 'https://images.unsplash.com/photo-1501527098-84e9c7b5c17b?w=800', alt: 'Business signage', category: 'signage', width: 800, height: 1000 },
]

// Gallery filter categories
export const galleryCategories = ['All', 'Weddings', 'Birthdays', 'Portraits', 'Ads', 'Signage']

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
  { label: 'Instagram', href: 'https://instagram.com', icon: 'Instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'Facebook' },
  { label: 'YouTube', href: 'https://youtube.com', icon: 'Youtube' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'Linkedin' },
]
