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
  // Weddings
  { id: 'w1', src: '/Wedding/wedding-1.jpg', alt: 'Wedding', category: 'weddings', width: 800, height: 1000 },
  { id: 'w2', src: '/Wedding/wedding-2.jpg', alt: 'Wedding', category: 'weddings', width: 800, height: 600 },
  { id: 'w3', src: '/Wedding/wedding-3.jpg', alt: 'Wedding', category: 'weddings', width: 800, height: 800 },
  { id: 'w4', src: '/Wedding/wedding-4.jpg', alt: 'Wedding', category: 'weddings', width: 800, height: 600 },
  { id: 'w5', src: '/Wedding/wedding-5.jpg', alt: 'Wedding', category: 'weddings', width: 800, height: 1000 },
  { id: 'w6', src: '/Wedding/wedding-6.jpg', alt: 'Wedding', category: 'weddings', width: 800, height: 600 },
  // Birthdays
  { id: 'b1', src: '/Birthday/birthday-1.jpg', alt: 'Birthday', category: 'birthdays', width: 800, height: 600 },
  { id: 'b2', src: '/Birthday/birthday-2.jpg', alt: 'Birthday', category: 'birthdays', width: 800, height: 1000 },
  { id: 'b3', src: '/Birthday/birthday-3.jpg', alt: 'Birthday', category: 'birthdays', width: 800, height: 600 },
  // Portraits
  { id: 'p1', src: '/Portrait/portrait-1.jpg', alt: 'Portrait', category: 'portraits', width: 800, height: 1000 },
  { id: 'p2', src: '/Portrait/portrait-2.jpg', alt: 'Portrait', category: 'portraits', width: 800, height: 600 },
  { id: 'p3', src: '/Portrait/portrait-3.jpg', alt: 'Portrait', category: 'portraits', width: 800, height: 1000 },
  { id: 'p4', src: '/Portrait/portrait-4.jpg', alt: 'Portrait', category: 'portraits', width: 800, height: 600 },
  { id: 'p5', src: '/Portrait/portrait-5.jpg', alt: 'Portrait', category: 'portraits', width: 800, height: 800 },
  // Fashion
  { id: 'fa1', src: '/Fashion/fashion-1.jpg', alt: 'Fashion', category: 'fashion', width: 800, height: 1000 },
  { id: 'fa2', src: '/Fashion/fashion-2.jpg', alt: 'Fashion', category: 'fashion', width: 800, height: 600 },
  { id: 'fa3', src: '/Fashion/fashion-3.jpg', alt: 'Fashion', category: 'fashion', width: 800, height: 1000 },
  { id: 'fa4', src: '/Fashion/fashion-4.jpg', alt: 'Fashion', category: 'fashion', width: 800, height: 600 },
  { id: 'fa5', src: '/Fashion/fashion-5.jpg', alt: 'Fashion', category: 'fashion', width: 800, height: 800 },
  // Ads
  { id: 'a1', src: '/Advertisment/ad-1.jpg', alt: 'Advertisement', category: 'ads', width: 800, height: 600 },
  { id: 'a2', src: '/Advertisment/ad-2.jpg', alt: 'Advertisement', category: 'ads', width: 800, height: 1000 },
  // Films — YouTube thumbnails
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
