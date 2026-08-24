import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BadgeCheck, MapPin, Sparkles, Star } from 'lucide-react';
import { Footer, Header, MobileDock } from '../components';
import { AiShoppingAssistant } from '../shop/shop-client';

export const metadata: Metadata = {
  title: 'Mode AI NEMU — Ceritakan Barang yang Kamu Cari',
  description: 'Cari barang pakai bahasa sehari-hari. Ceritakan kebutuhan, budget, warna, ukuran, atau pemakaiannya dan Mode AI NEMU membantu menyaring pilihan.',
  alternates: { canonical: '/ai-mode' },
  openGraph: { title: 'Mode AI NEMU — Ceritain Aja', description: 'Cari barang tanpa harus tahu nama produknya.', url: '/ai-mode', images: ['/og.png'] },
};

const recommendations = [
  {name:'GM Shoes Flat Sandal',price:'Rp70.000',note:'Ringan · Banyak warna',city:'Jakarta',badge:'Paling masuk',sprite:'/product-sprite-a-v1.png',position:'50% 0%'},
  {name:'Aluna Linen Dress',price:'Rp385.000',note:'Adem · 4 warna',city:'Yogyakarta',badge:'Sesuai gaya',sprite:'/product-sprite-a-v1.png',position:'100% 100%'},
  {name:'Arunika Work Tote',price:'Rp749.000',note:'Kulit asli · Produk lokal',city:'Bandung',badge:'Seller pilihan',sprite:'/product-sprite-a-v1.png',position:'0% 100%'},
  {name:'Keramik Mug Handmade',price:'Rp180.000',note:'Buatan tangan',city:'Bandung',badge:'Di bawah budget',sprite:'/product-sprite-a-v1.png',position:'50% 100%'},
];

export default function AiModePage() {
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'WebPage', name: 'Mode AI NEMU',
    description: 'Asisten pencarian belanja yang memahami kebutuhan pengguna dalam bahasa Indonesia sehari-hari.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/ai-mode', inLanguage: 'id-ID',
  };

  return <main className="overflow-hidden bg-[#fbfbfc] text-[#0b0b0e]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <Header showSearch={false}/>
    <MobileDock/>

    <section className="px-4 pb-16 pt-5 sm:px-6 lg:pb-24">
      <div className="mx-auto max-w-[1120px]">
        <Link className="mb-4 inline-flex items-center gap-2 px-2 text-[9px] font-black text-[#6B6B75] transition hover:text-[#704BFD]" href="/shop"><ArrowLeft size={14}/> Kembali ke Shop</Link>
        <div className="py-8 text-[#0b0b0e] sm:py-12">
          <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dcdce0] bg-white/80 px-4 py-2 text-[9px] font-black uppercase tracking-[.14em] text-[#704bfd] backdrop-blur"><Sparkles size={14}/> Mode AI NEMU</span>
            <h1 className="mt-6 max-w-4xl font-[var(--font-display)] text-[42px] font-black leading-[.94] tracking-[-.06em] sm:text-6xl sm:leading-[.92]">Cari barang tinggal <span className="text-[#704bfd]">ketik.</span></h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6b6b75]">Tulis barang yang kamu cari. Kalau belum tahu namanya, cukup ketik kebutuhan dan budgetmu.</p>
            <div className="mt-8 w-full max-w-[780px] text-left text-[#0b0b0e]">
              <div className="mb-4 flex items-center justify-between gap-4"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#704BFD]">Tanya NEMU</p><h2 className="mt-1 text-xl font-black tracking-[-.04em]">Lagi butuh apa?</h2></div><span className="hidden items-center gap-2 rounded-full bg-[#F2EFFF] px-3 py-2 text-[8px] font-black text-[#704BFD] sm:flex"><span className="size-2 rounded-full bg-[#704BFD]"/> Siap bantu</span></div>
              <AiShoppingAssistant/>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="ai-catalog-heading">
      <div className="mx-auto max-w-[1240px]">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704BFD]">Contoh hasil Mode AI</p><h2 id="ai-catalog-heading" className="mt-2 text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Yang paling masuk, muncul duluan.</h2><p className="mt-4 max-w-2xl text-[10px] leading-6 text-[#6B6B75]">NEMU kasih alasan singkat biar kamu gampang bandingin. Pilihan akhirnya tetap di kamu.</p></div><Link className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F2EFFF] px-5 py-3 text-[9px] font-black text-[#704BFD]" href="/shop">Lihat semua katalog <ArrowRight size={14}/></Link></div>
        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">{recommendations.map(product=><article className="overflow-hidden rounded-[24px] border border-[#e8e4f0] bg-white transition hover:-translate-y-1 hover:border-[#cfc3ff] hover:shadow-[0_16px_34px_rgba(70,48,110,.10)]" key={product.name}><div className="relative aspect-square overflow-hidden bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-3 top-3 rounded-full bg-[#704BFD] px-3 py-1.5 text-[7px] font-black text-white shadow-sm">{product.badge}</span></div><div className="p-4"><h3 className="line-clamp-2 min-h-9 text-[11px] font-black leading-4">{product.name}</h3><p className="mt-1 text-[8px] text-[#6B6B75]">{product.note}</p><strong className="mt-3 block text-base">{product.price}</strong><p className="mt-2 flex items-center gap-1 text-[8px] text-[#6B6B75]"><Star size={10} fill="#704BFD" className="text-[#704BFD]"/> 4,9 <MapPin className="ml-1" size={10}/> {product.city}</p><p className="mt-3 flex items-center gap-1 text-[8px] font-black text-[#704BFD]"><BadgeCheck size={12}/> Seller NEMU</p></div></article>)}</div>
      </div>
    </section>
    <Footer/>
  </main>;
}
