import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const display = DM_Sans({ variable: '--font-display', subsets: ['latin'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nemu-ai-redesign.openclawid6.chatgpt.site'),
  title: { default: 'NEMU AI — Marketplace Indonesia dengan Pencarian AI', template: '%s | NEMU AI' },
  description: 'Cari barang baru, preloved, dan produk lokal dengan kalimat biasa. NEMU AI membantu pembeli membandingkan pilihan dan seller membuat listing lebih cepat.',
  keywords: ['marketplace Indonesia', 'belanja online', 'pencarian produk AI', 'seller lokal', 'barang preloved', 'toko online Indonesia'],
  applicationName: 'NEMU AI',
  category: 'ecommerce',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    title: 'NEMU AI — Ketik maumu. NEMU carikan.',
    description: 'Tulis kebutuhanmu. NEMU menyaring produk lokal, harga, dan seller yang paling cocok.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site',
    siteName: 'NEMU AI',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png', width: 1200, height: 630, alt: 'NEMU AI — Marketplace lokal dengan AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEMU AI — Ketik maumu. NEMU carikan.',
    description: 'Tulis kebutuhanmu. NEMU menyaring produk lokal, harga, dan seller yang paling cocok.',
    images: ['https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable}`}><Providers>{children}</Providers></body>
    </html>
  );
}
