import type { Metadata } from 'next';
import './globals.css';
import { NemuHelpHub } from './nemu-help-hub';

export const metadata: Metadata = {
  metadataBase: new URL('https://nemu-ai-redesign.openclawid6.chatgpt.site'),
  title: { default: 'NEMU AI — SaaS Jualan Online untuk Seller & UMKM', template: '%s | NEMU AI' },
  description: 'NEMU adalah SaaS jualan online untuk seller dan UMKM: website toko siap pakai, Snap List Sell, AI foto dan konten, iklan Google Meta TikTok, pembayaran DOKU, serta 30+ kurir. Gratis sampai penjualan pertama, lalu Rp199.000 per bulan.',
  keywords: ['SaaS jualan online', 'platform seller UMKM', 'website toko online', 'aplikasi jualan UMKM', 'Snap List Sell', 'AI marketing seller', 'pembayaran DOKU', '30+ kurir', 'marketplace Indonesia'],
  creator: 'NEMU AI',
  publisher: 'NEMU AI',
  applicationName: 'NEMU AI',
  category: 'ecommerce',
  alternates: { canonical: '/' },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: 'NEMU AI — SaaS Jualan Online untuk Seller & UMKM',
    description: 'Buka website toko sendiri dan kelola listing, konten, iklan, pembayaran DOKU, serta 30+ kurir dalam satu platform. Mulai gratis, lalu Rp199.000 per bulan setelah penjualan pertama.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site',
    siteName: 'NEMU AI',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png', width: 1200, height: 630, alt: 'NEMU AI — SaaS jualan online untuk seller dan UMKM' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEMU AI — SaaS Jualan Online untuk Seller & UMKM',
    description: 'Buka website toko sendiri dan kelola listing, konten, iklan, pembayaran DOKU, serta 30+ kurir dalam satu platform. Mulai gratis, lalu Rp199.000 per bulan setelah penjualan pertama.',
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
