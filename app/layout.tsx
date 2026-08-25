import type { Metadata } from 'next';
import './globals.css';
import { NemuHelpHub } from './nemu-help-hub';

export const metadata: Metadata = {
  metadataBase: new URL('https://nemu-ai-redesign.openclawid6.chatgpt.site'),
  title: { default: 'NEMU Marketplace — Belanja & Buka Toko Online', template: '%s | NEMU Marketplace' },
  description: 'NEMU adalah marketplace Indonesia untuk buyer dan seller. Seller bisa menampilkan produk, punya website toko sendiri, memakai AI untuk listing dan promosi, menerima pembayaran DOKU, serta memilih 30+ kurir. Gratis sampai penjualan pertama, lalu Rp199.000 per bulan.',
  keywords: ['marketplace Indonesia', 'marketplace seller UMKM', 'jualan online di marketplace', 'website toko online', 'aplikasi jualan UMKM', 'Snap List Sell', 'AI marketing seller', 'pembayaran DOKU', '30+ kurir'],
  creator: 'NEMU AI',
  publisher: 'NEMU AI',
  applicationName: 'NEMU AI',
  category: 'ecommerce',
  alternates: { canonical: '/' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: 'NEMU Marketplace — Belanja & Buka Toko Online',
    description: 'Temukan produk di NEMU Marketplace. Seller bisa listing produk sekaligus mendapat website toko, AI marketing, pembayaran DOKU, dan 30+ pilihan kurir.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site',
    siteName: 'NEMU AI',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png', width: 1200, height: 630, alt: 'NEMU Marketplace untuk buyer, seller, dan UMKM Indonesia' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEMU Marketplace — Belanja & Buka Toko Online',
    description: 'Temukan produk di NEMU Marketplace. Seller bisa listing produk sekaligus mendapat website toko, AI marketing, pembayaran DOKU, dan 30+ pilihan kurir.',
    images: ['https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}<NemuHelpHub /></body>
    </html>
  );
}
