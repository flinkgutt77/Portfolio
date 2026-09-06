import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Toaster } from "sonner";
import { getDict, locale, siteUrl } from "@/lib/i18n";
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

const site = getDict().site;

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    url: siteUrl,
    siteName: "UJ Studio Norge",
    images: [
      {
        url: `${siteUrl}/A32I0135.jpg`,
        width: 1200,
        height: 630,
        alt: site.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.twitterDescription,
  },
  keywords: [...site.keywords],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'UJ Studio Norge',
  description: site.twitterDescription,
  url: siteUrl,
  image: `${siteUrl}/A32I0135.jpg`,
  address: { '@type': 'PostalAddress', addressCountry: 'NO' },
  sameAs: [
    'https://instagram.com/ujstudionorge',
    'https://www.facebook.com/profile.php?id=61567685248522',
    'https://youtube.com/@umarjaved77',
  ],
  serviceType: site.serviceTypes,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={locale}
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
