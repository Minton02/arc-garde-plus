// Fixed imports
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { StickyBooking } from '@/components/ui/StickyBooking';
import { BookingModal } from '@/components/ui/BookingModal';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Arc Garde++',
    default: 'Arc Garde++ | From Invisible to Unstoppable',
  },
  description: '3× Revenue in 90 Days or your money back. We patch the leaks in traffic, conversion, and GTM so your business stops bleeding money and starts compounding growth.',
  keywords: ['growth consulting', 'revenue optimization', 'conversion rate optimization', 'marketing strategy', 'business growth'],
  authors: [{ name: 'Arc Garde++' }],
  creator: 'Arc Garde++',
  publisher: 'Arc Garde++',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://arcgarde.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://arcgarde.vercel.app',
    siteName: 'Arc Garde++',
    title: 'Arc Garde++ | From Invisible to Unstoppable',
    description: '3× Revenue in 90 Days or your money back. We patch the leaks in traffic, conversion, and GTM so your business stops bleeding money and starts compounding growth.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Arc Garde++ - From Invisible to Unstoppable',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arc Garde++ | From Invisible to Unstoppable',
    description: '3× Revenue in 90 Days or your money back. We patch the leaks in traffic, conversion, and GTM so your business stops bleeding money and starts compounding growth.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0b0d10" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body className="antialiased">
        <Providers>
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <StickyBooking />
          <BookingModal />
        </Providers>
      </body>
    </html>
