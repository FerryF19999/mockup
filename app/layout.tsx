import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const display = DM_Sans({ variable: '--font-display', subsets: ['latin'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://nemu-ai-redesign.openclawid6.chatgpt.site'),
  title: 'NEMU AI — Belanja lokal, ditemukan untukmu',
  description: 'Marketplace lokal dengan asisten AI yang membantu buyer menemukan produk terbaik dan seller tumbuh lebih mudah.',
  openGraph: {
    title: 'NEMU AI — Yang kamu cari, NEMU bantu temukan.',
    description: 'Marketplace lokal dengan AI. Cari barang cukup pakai bahasa sehari-hari.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site',
    siteName: 'NEMU AI',
    locale: 'id_ID',
    type: 'website',
    images: [{ url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png', width: 1200, height: 630, alt: 'NEMU AI — Marketplace lokal dengan AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEMU AI — Yang kamu cari, NEMU bantu temukan.',
    description: 'Marketplace lokal dengan AI. Cari barang cukup pakai bahasa sehari-hari.',
    images: ['https://nemu-ai-redesign.openclawid6.chatgpt.site/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
