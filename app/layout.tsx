import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://nemu-ai-redesign.openclawid6.chatgpt.site'),
  title: { default: 'NEMU AI — Nyari Barang? Bilang Aja.', template: '%s | NEMU AI' },
  description: 'Cari barang baru, preloved, dan produk seller lokal dengan nama produk atau bahasa sehari-hari. Lihat harga, kondisi, lokasi, dan info seller dengan jelas.',
  keywords: ['marketplace Indonesia', 'belanja online', 'pencarian produk AI', 'seller lokal', 'barang preloved', 'toko online Indonesia'],
  applicationName: 'NEMU AI',
  category: 'ecommerce',
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  openGraph: {
    title: 'NEMU AI — Nyari Barang? Bilang Aja.',
    description: 'NEMU bantu nyaring pilihan yang paling masuk.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site',
    siteName: 'NEMU AI',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png', width: 1200, height: 630, alt: 'NEMU AI — Marketplace lokal dengan AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEMU AI — Nyari Barang? Bilang Aja.',
    description: 'NEMU bantu nyaring pilihan yang paling masuk.',
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
