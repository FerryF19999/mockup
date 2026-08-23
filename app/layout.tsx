import type { Metadata } from 'next';
import { DM_Sans, Manrope } from 'next/font/google';
import './globals.css';

const display = DM_Sans({ variable: '--font-display', subsets: ['latin'] });
const body = Manrope({ variable: '--font-body', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEMU AI — Belanja lokal, ditemukan untukmu',
  description: 'Marketplace lokal dengan asisten AI yang membantu buyer menemukan produk terbaik dan seller tumbuh lebih mudah.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
