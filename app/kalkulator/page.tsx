import type { Metadata } from 'next';
import Calculator from './calculator';

export const metadata: Metadata = {
  title: 'Kalkulator Biaya Seller | NEMU',
  description: 'Simulasikan biaya jualan NEMU dan marketplace lain dari harga produk, transaksi, dan paket pilihan.',
  robots: { index: false, follow: false },
};

export default function CalculatorPage() { return <Calculator />; }
