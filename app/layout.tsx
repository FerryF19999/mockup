import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nemu-ai-redesign.openclawid6.chatgpt.site'),
  title: { default: 'NEMU AI — Cari Barang & Buka Toko Online', template: '%s | NEMU AI' },
  description: 'NEMU adalah marketplace Indonesia dan website jualan berbasis AI. Buyer bisa cari barang dengan bahasa sehari-hari; seller mendapat toko online, Snap List Sell, konten AI, iklan, pembayaran DOKU, dan 30+ kurir.',
  keywords: ['marketplace Indonesia', 'belanja online', 'pencarian produk AI', 'seller lokal', 'barang preloved', 'website toko online', 'Snap List Sell', 'AI marketing seller'],
  creator: 'NEMU AI',
  publisher: 'NEMU AI',
  applicationName: 'NEMU AI',
  category: 'ecommerce',
  alternates: { canonical: '/' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: 'NEMU AI — Cari Barang & Buka Toko Online',
    description: 'Marketplace dan website jualan berbasis AI untuk buyer dan seller Indonesia.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site',
    siteName: 'NEMU AI',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png', width: 1200, height: 630, alt: 'NEMU AI — Marketplace lokal dengan AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEMU AI — Cari Barang & Buka Toko Online',
    description: 'Marketplace dan website jualan berbasis AI untuk buyer dan seller Indonesia.',
    images: ['https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png'],
  },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
