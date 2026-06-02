// lib/i18n.ts
// Build-time locale — set NEXT_PUBLIC_LOCALE=nb for ujstudio.no, leave unset for ujstudionorge.com

export type Locale = 'en' | 'nb'
export const locale: Locale =
  (process.env.NEXT_PUBLIC_LOCALE as Locale) === 'nb' ? 'nb' : 'en'

// ─── Full dictionary ────────────────────────────────────────────────────────

const dict = {
  en: {
    // Navbar
    nav: {
      services: 'Services',
      portfolio: 'Portfolio',
      about: 'About',
      contact: 'Contact',
    },

    // Hero
    hero: {
      tagline: 'Photography · Cinematography · Digital Signage',
      heading: ['Crafting Visual', 'Stories', 'That Last Forever'],
      subtext: 'Wedding · Birthday · Portrait · Advertising · Digital Signage',
      cta1: 'View Portfolio',
      cta2: 'Get in Touch',
    },

    // About
    about: {
      label: 'About Me',
      role: 'Photographer · Cinematographer · Creative Director',
      bio1: 'Based in Norway, I am a professional photographer and cinematographer with over a decade of experience creating visual stories that move, inspire, and endure. From the quiet emotion of a wedding ceremony to the bold energy of a commercial production — every frame I capture is crafted with intention, care, and a deep passion for the art of visual storytelling.',
      bio2: 'My work spans weddings, family portraits, fashion editorials, advertisement photography and films, and digital signage. Whatever the brief, I bring the same commitment to every project: cinematic quality, creative vision, and an experience that feels effortless for my clients from start to finish.',
      bio3: 'I believe the best images are not just taken — they are felt. Let us create something remarkable together.',
      stats: [
        { value: '10+', label: 'Years of Experience' },
        { value: 'Norge', label: 'Based In' },
        { value: '∞', label: 'Passion for the Craft' },
      ],
      cta: 'Work With Me',
    },

    // Services section
    services: {
      label: 'What I Offer',
      heading: 'My Services',
      subtext: 'From intimate family moments to large-scale commercial productions — every project delivered with the same passion and professionalism.',
      hoverHint: 'Hover to explore →',
      contactHint: 'Get in Touch →',
    },

    // Service cards (matched to lib/data.ts ids)
    serviceCards: {
      wedding:       { name: 'Wedding Photography & Film',          description: 'Timeless photos and cinematic films from your most special day — every emotion beautifully preserved.' },
      birthday:      { name: 'Birthday Photography & Film',         description: 'Vibrant coverage of your celebration, from candid moments to cinematic highlights.' },
      portrait:      { name: 'Family Portraits',                    description: 'Authentic, warm family portraits that capture the love and connection between your loved ones.' },
      fashion:       { name: 'Fashion Photography & Film',          description: 'Striking fashion editorials and cinematic lookbook films that bring your collection to life with style and elegance.' },
      advertisement: { name: 'Advertisement Photography & Film',   description: 'High-impact visuals and cinematic brand films that elevate your marketing and captivate your audience.' },
      signage:       { name: 'Digital Signage',                     description: 'From signage board design to digital screen installation and advertising — complete signage solutions for your business.' },
    },

    // Testimonials
    testimonials: {
      label: 'Testimonials',
      heading: 'What Clients Say',
      items: [
        { id: 't1', quote: 'Umar captured our wedding day perfectly. Every photo tells a story — we treasure them forever.', name: 'Sarah & Ahmed', service: 'Wedding Photography' },
        { id: 't2', quote: 'The product shots for our ad campaign exceeded expectations. Sales went up 40% after launch.', name: 'Nadia Khan', service: 'Ad Photography' },
        { id: 't3', quote: 'Our digital signage system has transformed how customers engage with our brand.', name: 'Tariq Enterprises', service: 'Digital Signage' },
        { id: 't4', quote: "The birthday photos made my daughter's party feel like a magazine shoot. Absolutely magical.", name: 'Fatima Malik', service: 'Birthday Photography' },
        { id: 't5', quote: 'The signage screens Umar designed and installed for our restaurant have completely transformed how customers engage with our menu. Absolutely worth every penny.', name: 'Hassan Restaurants', service: 'Digital Signage' },
      ],
    },

    // Contact form
    contact: {
      label: 'Get in Touch',
      heading: 'Start a Project',
      subtext: "Whether it's a wedding, campaign, or AI workflow — let's create something remarkable together.",
      nameLbl: 'Name',
      namePh: 'Your name',
      emailLbl: 'Email',
      emailPh: 'your@email.com',
      phoneLbl: 'Phone',
      phonePh: '+47 000 00 000',
      serviceLbl: 'Service',
      servicePh: 'Select a service',
      messageLbl: 'Message',
      messagePh: 'Tell me about your project...',
      submit: 'Send Message',
      submitting: 'Sending...',
      successMsg: "Message sent! I'll be in touch soon.",
      errorMsg: 'Something went wrong. Please try again.',
      serviceOptions: [
        'Wedding Photography',
        'Wedding Film',
        'Birthday Photography',
        'Family Portraits',
        'Fashion Photography',
        'Fashion Film',
        'Advertisement Photography',
        'Advertisement Film',
        'Digital Signage',
        'Other',
      ],
    },

    // Footer
    footer: {
      rights: 'All rights reserved.',
    },
  },

  // ── Norwegian (Bokmål) ──────────────────────────────────────────────────
  nb: {
    nav: {
      services: 'Tjenester',
      portfolio: 'Portefølje',
      about: 'Om meg',
      contact: 'Kontakt',
    },

    hero: {
      tagline: 'Fotografi · Film · Digital Skiltning',
      heading: ['Skaper Visuelle', 'Historier', 'Som Varer Evig'],
      subtext: 'Bryllup · Bursdag · Portrett · Reklame · Digital Skiltning',
      cta1: 'Se portefølje',
      cta2: 'Ta kontakt',
    },

    about: {
      label: 'Om meg',
      role: 'Fotograf · Filmskaper · Kreativ direktør',
      bio1: 'Basert i Norge er jeg en profesjonell fotograf og filmskaper med over ti års erfaring med å skape visuelle historier som beveger, inspirerer og varer. Fra den stille stemningen ved en bryllupsseremoni til den dristige energien i en kommersiell produksjon — hvert bilde jeg tar er skapt med intensjon, omsorg og en dyp lidenskap for kunsten av visuell historiefortelling.',
      bio2: 'Arbeidet mitt spenner over bryllup, familieportretter, motebilder, reklame­fotografi og film, samt digital skiltning. Uansett oppdraget bringer jeg det samme engasjementet til hvert prosjekt: filmisk kvalitet, kreativ visjon og en opplevelse som føles uanstrengt for mine kunder fra start til slutt.',
      bio3: 'Jeg tror de beste bildene ikke bare tas — de føles. La oss skape noe bemerkelsesverdig sammen.',
      stats: [
        { value: '10+', label: 'Års erfaring' },
        { value: 'Norge', label: 'Basert i' },
        { value: '∞', label: 'Lidenskap for faget' },
      ],
      cta: 'Jobb med meg',
    },

    services: {
      label: 'Hva jeg tilbyr',
      heading: 'Mine tjenester',
      subtext: 'Fra intime familieøyeblikk til store kommersielle produksjoner — hvert prosjekt levert med samme lidenskap og profesjonalitet.',
      hoverHint: 'Hold over for å utforske →',
      contactHint: 'Ta kontakt →',
    },

    serviceCards: {
      wedding:       { name: 'Bryllupsfoto & Film',       description: 'Tidløse bilder og kinematografisk film fra din store dag — hvert øyeblikk vakkert bevart.' },
      birthday:      { name: 'Bursdagsfoto & Film',        description: 'Levende dekning av feiringen din, fra spontane øyeblikk til filmiske høydepunkter.' },
      portrait:      { name: 'Familieportretter',          description: 'Autentiske, varme familieportretter som fanger kjærligheten og samholdet mellom dine nærmeste.' },
      fashion:       { name: 'Motefoto & Film',            description: 'Imponerende motebilder og kinematografiske lookbook-filmer som bringer kolleksjonen din til liv med stil og eleganse.' },
      advertisement: { name: 'Reklamefoto & Film',         description: 'Slagkraftige visuelle uttrykk og kinematografiske merkevarefilmer som løfter markedsføringen din og engasjerer publikummet ditt.' },
      signage:       { name: 'Digital Skiltning',          description: 'Fra skiltdesign til digitale skjerminstallasjoner og reklame — komplette skiltsystemer for din bedrift.' },
    },

    testimonials: {
      label: 'Anmeldelser',
      heading: 'Hva kundene sier',
      items: [
        { id: 't1', quote: 'Umar fanget bryllupsdagen vår perfekt. Hvert bilde forteller en historie — vi vil alltid sette stor pris på dem.', name: 'Sarah & Ahmed', service: 'Bryllupsfoto' },
        { id: 't2', quote: 'Produktbildene til reklamekampanjen vår overgikk alle forventninger. Salget økte med 40 % etter lansering.', name: 'Nadia Khan', service: 'Reklamefoto' },
        { id: 't3', quote: 'Vår digitale skiltningsløsning har forandret måten kundene samhandler med merkevaren vår på.', name: 'Tariq Enterprises', service: 'Digital Skiltning' },
        { id: 't4', quote: 'Bursdagsbildene gjorde datterens fest til en magasinopplevelse. Helt fantastisk.', name: 'Fatima Malik', service: 'Bursdagsfoto' },
        { id: 't5', quote: 'Skjermene Umar designet og installerte for restauranten vår har fullstendig forandret hvordan kunder engasjerer seg med menyen vår. Absolutt verdt hver krone.', name: 'Hassan Restaurants', service: 'Digital Skiltning' },
      ],
    },

    contact: {
      label: 'Ta kontakt',
      heading: 'Start et prosjekt',
      subtext: 'Enten det er et bryllup, en kampanje eller et AI-prosjekt — la oss skape noe bemerkelsesverdig sammen.',
      nameLbl: 'Navn',
      namePh: 'Ditt navn',
      emailLbl: 'E-post',
      emailPh: 'din@epost.com',
      phoneLbl: 'Telefon',
      phonePh: '+47 000 00 000',
      serviceLbl: 'Tjeneste',
      servicePh: 'Velg en tjeneste',
      messageLbl: 'Melding',
      messagePh: 'Fortell meg om prosjektet ditt...',
      submit: 'Send melding',
      submitting: 'Sender...',
      successMsg: 'Melding sendt! Jeg tar kontakt snart.',
      errorMsg: 'Noe gikk galt. Prøv igjen.',
      serviceOptions: [
        'Bryllupsfoto',
        'Bryllupsfilm',
        'Bursdagsfoto',
        'Familieportretter',
        'Motefoto',
        'Motefilm',
        'Reklamefoto',
        'Reklamefilm',
        'Digital Skiltning',
        'Annet',
      ],
    },

    footer: {
      rights: 'Alle rettigheter forbeholdt.',
    },
  },
} as const

export type Dict = typeof dict['en']

/** Returns the full translated dictionary for the current build locale */
export function getDict(): Dict {
  return dict[locale] as unknown as Dict
}
