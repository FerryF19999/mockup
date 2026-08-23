import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Search, Sparkles } from 'lucide-react';
import { Footer, Header, MobileDock } from '../components';
import { AiShoppingAssistant } from '../shop/shop-client';

export const metadata: Metadata = {
  title: 'Mode AI — Ceritakan Barang yang Kamu Cari',
  description: 'Ceritakan kebutuhan, budget, warna, atau pemakaian barang dengan bahasa sehari-hari. Mode AI NEMU membantu merangkum dan mencari pilihan yang cocok.',
  alternates: { canonical: '/ai-mode' },
  openGraph: { title: 'Mode AI NEMU — Bilang Aja, Biar NEMU Nyari', description: 'Cari barang tanpa harus tahu nama produknya.', url: '/ai-mode', images: ['/og.png'] },
};

export default function AiModePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Mode AI NEMU',
    description: 'Asisten pencarian belanja yang memahami kebutuhan pengguna dalam bahasa Indonesia sehari-hari.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/ai-mode',
    inLanguage: 'id-ID',
  };

  return <main className="overflow-hidden bg-[#f7f5fa] text-[#30283a]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <Header showSearch={false}/>
    <MobileDock/>

    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-[1240px]">
        <Link className="inline-flex items-center gap-2 text-[9px] font-black text-[#6B6B75] transition hover:text-[#704BFD]" href="/shop"><ArrowLeft size={14}/> Kembali ke Shop</Link>
        <div className="mt-5 overflow-hidden rounded-[38px] border border-[#e4dfeb] bg-white shadow-[0_28px_80px_rgba(50,35,75,.12)]">
          <div className="grid lg:grid-cols-[.82fr_1.18fr]">
            <div className="relative flex min-h-[560px] flex-col justify-between overflow-hidden bg-[#0B0B0E] p-7 text-white sm:p-10 lg:p-12"><span className="absolute -right-28 -top-24 size-80 rounded-full bg-[#704BFD]/65 blur-3xl"/><span className="absolute -bottom-36 -left-24 size-72 rounded-full border-[48px] border-[#704BFD]/30"/>
              <div className="relative"><span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[9px] font-black text-white backdrop-blur"><Sparkles size={14}/> MODE AI NEMU</span><h1 className="mt-6 max-w-xl font-[var(--font-display)] text-5xl font-black leading-[.92] tracking-[-.065em] sm:text-6xl">Nggak tahu<br/>namanya?<br/><span className="text-[#b9a8ff]">Ceritain aja.</span></h1><p className="mt-5 max-w-md text-sm leading-7 text-white/65">Sebut dipakai buat apa, budget berapa, atau warna yang kamu suka. Pakai bahasa sehari-hari aja.</p></div>
              <div className="relative"><div className="flex flex-wrap gap-2">{['Bahasa sehari-hari','Budget ikut dihitung','Baru + preloved'].map(item=><span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[8px] font-black text-white/80" key={item}><CheckCircle2 size={12} className="text-[#b9a8ff]"/>{item}</span>)}</div><div className="mt-5 rounded-[22px] border border-white/15 bg-white/[.08] p-5 backdrop-blur"><small className="text-[8px] font-black uppercase tracking-[.13em] text-[#b9a8ff]">Contoh ngomongnya</small><p className="mt-2 text-base font-black leading-6">“Cariin kado buat ibu, kepakai di rumah, budget 250 ribuan.”</p></div></div>
            </div>
            <section className="p-6 sm:p-9 lg:p-12" aria-label="Percakapan Mode AI"><div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.13em] text-[#704BFD]">Tanya NEMU</p><h2 className="mt-1 text-2xl font-black tracking-[-.04em]">Lagi butuh apa?</h2></div><span className="flex items-center gap-2 rounded-full bg-[#F2EFFF] px-3 py-2 text-[8px] font-black text-[#5D3EEA]"><span className="size-2 rounded-full bg-[#704BFD]"/> Siap bantu</span></div><AiShoppingAssistant/></section>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-3">{[[Sparkles,'1. Ceritain','Tulis kebutuhanmu seperti lagi chat.'],[Search,'2. NEMU nangkep','Kebutuhan dan budget diringkas dulu.'],[ArrowRight,'3. Lihat pilihan','Barang yang paling cocok muncul duluan.']].map(([Icon,title,copy])=>{const I=Icon as typeof Sparkles;return <div className="flex gap-4 rounded-[22px] border border-[#e4dfeb] bg-white p-5" key={title as string}><span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#F2EFFF] text-[#704BFD]"><I size={18}/></span><div><h2 className="text-sm font-black">{title as string}</h2><p className="mt-1 text-[9px] leading-5 text-[#6B6B75]">{copy as string}</p></div></div>})}</div>
      </div>
    </section>
    <Footer/>
  </main>;
}
