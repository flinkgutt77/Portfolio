import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UJ Studio Norge | Photography · Cinematography · Digital Signage",
  description:
    "UJ Studio Norge — professional photography, cinematography, fashion films, advertisement production and digital signage services based in Norway.",
  openGraph: {
    title: "UJ Studio Norge | Photography · Cinematography · Digital Signage",
    description:
      "UJ Studio Norge — professional photography, cinematography, fashion films, advertisement production and digital signage services based in Norway.",
    type: "website",
    url: "https://ujstudionorge.com",
    siteName: "UJ Studio Norge",
    images: [
      {
        url: "https://ujstudionorge.com/A32I0135.jpg",
        width: 1200,
        height: 630,
        alt: "UJ Studio Norge — Photography & Cinematography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UJ Studio Norge | Photography · Cinematography · Digital Signage",
    description:
      "Professional photography, cinematography, fashion films, advertisement production and digital signage based in Norway.",
  },
  keywords: [
    "photography Norge",
    "fotograf Norge",
    "wedding photography Norway",
    "bryllupsfotograf",
    "cinematography Norway",
    "fashion photography",
    "advertisement photography",
    "digital signage Norway",
    "UJ Studio",
    "Umar Javed photographer",
    "filming Norway",
  ],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UJ Studio Norge',
  description: 'Professional photography, cinematography, fashion films, advertisement production and digital signage based in Norway.',
  url: 'https://ujstudionorge.com',
  image: 'https://ujstudionorge.com/A32I0135.jpg',
  address: { '@type': 'PostalAddress', addressCountry: 'NO' },
  sameAs: [
    'https://instagram.com/ujstudionorge',
    'https://www.facebook.com/profile.php?id=61567685248522',
    'https://youtube.com/@umarjaved77',
  ],
  serviceType: [
    'Wedding Photography',
    'Cinematography',
    'Fashion Photography',
    'Advertisement Photography',
    'Digital Signage',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
