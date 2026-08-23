import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BadgeCheck, MapPin, Sparkles, Star } from 'lucide-react';
import { Footer, Header, MobileDock } from '../components';
import { AiShoppingAssistant } from '../shop/shop-client';

export const metadata: Metadata = {
  title: 'Mode AI — Ceritakan Barang yang Kamu Cari',
  description: 'Ceritakan kebutuhan, budget, warna, atau pemakaian barang dengan bahasa sehari-hari. Mode AI NEMU membantu mencari pilihan yang cocok.',
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

  return <main className="overflow-hidden bg-[#FBFBFD] text-[#0B0B0E]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <Header showSearch={false}/>
    <MobileDock/>

    <section className="px-4 pb-10 pt-7 sm:px-6 lg:pb-14">
      <div className="mx-auto max-w-[1240px]">
        <Link className="inline-flex items-center gap-2 text-[9px] font-black text-[#6B6B75] transition hover:text-[#704BFD]" href="/shop"><ArrowLeft size={14}/> Kembali ke Shop</Link>
        <div className="relative mt-5 min-h-[500px] overflow-hidden rounded-[36px] border border-[#e1dbea] bg-[#ECE7F7] shadow-[0_24px_70px_rgba(54,41,92,.12)]">
          <span className="absolute inset-0 bg-cover bg-[64%_center] lg:bg-center" role="img" aria-label="Perempuan mencari produk menggunakan Mode AI NEMU" style={{backgroundImage:"url('/ai-mode-hero-v2.png')"}}/>
          <span className="absolute inset-0 bg-gradient-to-r from-white via-white/94 to-white/5 lg:via-white/72"/>
          <div className="relative flex min-h-[500px] max-w-[610px] flex-col justify-center p-7 sm:p-10 lg:p-14">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F2EFFF] px-3 py-2 text-[9px] font-black text-[#704BFD]"><Sparkles size={14}/> MODE AI NEMU</span>
            <h1 className="mt-5 font-[var(--font-display)] text-4xl font-black leading-[.94] tracking-[-.06em] sm:text-6xl">Nggak tahu<br/>nama barangnya?<br/><span className="text-[#704BFD]">Ceritain aja.</span></h1>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#5F5968]">Bilang mau dipakai buat apa, budget berapa, atau model yang kamu suka. NEMU bantu nyaring pilihannya.</p>
            <div className="mt-6 flex flex-wrap gap-2">{['Bahasa sehari-hari','Budget ikut dihitung','Baru + preloved'].map(item=><span className="rounded-full border border-[#ddd5f3] bg-white/90 px-3 py-2 text-[8px] font-black text-[#5D3EEA]" key={item}>{item}</span>)}</div>
          </div>
        </div>
      </div>
    </section>

    <section className="px-4 pb-16 sm:px-6" aria-label="Percakapan Mode AI">
      <div className="mx-auto max-w-[1000px] rounded-[30px] border border-[#ddd5f3] bg-white p-5 shadow-[0_20px_60px_rgba(54,41,92,.10)] sm:p-8 lg:p-10">
        <div className="mb-6 flex items-start justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.13em] text-[#704BFD]">Tanya NEMU</p><h2 className="mt-1 text-3xl font-black tracking-[-.045em]">Kamu lagi cari apa?</h2><p className="mt-2 text-[9px] leading-5 text-[#6B6B75]">Nggak perlu rapi. Tulis aja seperti lagi chat.</p></div><span className="hidden items-center gap-2 rounded-full bg-[#F2EFFF] px-3 py-2 text-[8px] font-black text-[#704BFD] sm:flex"><span className="size-2 rounded-full bg-[#704BFD]"/> Siap bantu</span></div>
        <AiShoppingAssistant/>
      </div>
    </section>

    <section className="border-y border-[#e8e4f0] bg-white px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="ai-catalog-heading">
      <div className="mx-auto max-w-[1240px]"><div className="flex items-end justify-between gap-5"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704BFD]">Contoh hasil Mode AI</p><h2 id="ai-catalog-heading" className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Pilihan yang bisa langsung kamu cek.</h2><p className="mt-3 max-w-2xl text-[10px] leading-6 text-[#6B6B75]">Yang paling sesuai kebutuhan dan budget muncul duluan. Kamu tetap bisa bandingkan sebelum pilih.</p></div><Link className="hidden items-center gap-2 rounded-full bg-[#F2EFFF] px-4 py-2.5 text-[9px] font-black text-[#704BFD] sm:flex" href="/shop">Lihat katalog <ArrowRight size={14}/></Link></div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">{recommendations.map(product=><article className="overflow-hidden rounded-[22px] border border-[#e8e4f0] bg-white transition hover:-translate-y-1 hover:border-[#cfc3ff] hover:shadow-[0_16px_34px_rgba(70,48,110,.10)]" key={product.name}><div className="relative aspect-square overflow-hidden bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-[7px] font-black text-[#704BFD] shadow-sm">{product.badge}</span></div><div className="p-4"><h3 className="line-clamp-2 min-h-9 text-[11px] font-black leading-4">{product.name}</h3><p className="mt-1 text-[8px] text-[#6B6B75]">{product.note}</p><strong className="mt-3 block text-base">{product.price}</strong><p className="mt-2 flex items-center gap-1 text-[8px] text-[#6B6B75]"><Star size={10} fill="#704BFD" className="text-[#704BFD]"/> 4,9 <MapPin className="ml-1" size={10}/> {product.city}</p><p className="mt-3 flex items-center gap-1 text-[8px] font-black text-[#704BFD]"><BadgeCheck size={12}/> Seller NEMU</p></div></article>)}</div>
      </div>
    </section>
    <Footer/>
  </main>;
}
