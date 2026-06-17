import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fashionlinker.top'),
  title: 'FashionLinker - Your Guide to the Best Products',
  description: 'Discover expertly curated reviews and comparisons of the best products across lifestyle categories. Make informed purchasing decisions with our comprehensive guides.',
  keywords: 'best products, product reviews, lifestyle products, buying guides, product comparisons',
  authors: [{ name: 'FashionLinker' }],
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'FashionLinker - Your Guide to the Best Products',
    description: 'Discover expertly curated reviews and comparisons of the best products across lifestyle categories.',
    url: 'https://fashionlinker.top',
    siteName: 'FashionLinker',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FashionLinker - Your Guide to the Best Products',
    description: 'Discover expertly curated reviews and comparisons of the best products across lifestyle categories.',
  },
  verification: {
    other: {
      lhverifycode: '32dc01246faccb7f5b3cad5016dd5033',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="lhverifycode" content="32dc01246faccb7f5b3cad5016dd5033" />
        <meta name="verify-yeahpromos" content="14c2c0e117fc" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
