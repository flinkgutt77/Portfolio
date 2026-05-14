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
  title: "Umar Javed | Photography · Film · Digital",
  description:
    "Professional photography, cinematography, digital signage, and AI workflow automation services.",
  openGraph: {
    title: "Umar Javed | Photography · Film · Digital",
    description:
      "Professional photography, cinematography, digital signage, and AI workflow automation services.",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200",
        width: 1200,
        height: 630,
        alt: "Umar Javed Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Umar Javed | Photography · Film · Digital",
    description:
      "Professional photography, cinematography, digital signage, and AI workflow automation services.",
  },
  keywords: [
    "photography",
    "wedding photography",
    "advertisement photography",
    "cinematography",
    "digital signage",
    "AI automation",
    "Pakistan",
  ],
};

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
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
