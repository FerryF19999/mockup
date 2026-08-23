import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Search, Sparkles } from 'lucide-react';
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

  return <main className="overflow-hidden bg-[#FBFBFD] text-[#0B0B0E]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}}/>
    <Header showSearch={false}/>
    <MobileDock/>

    <section className="px-4 py-8 sm:px-6 lg:py-12">
      <div className="mx-auto max-w-[1240px]">
        <Link className="inline-flex items-center gap-2 text-[9px] font-black text-[#6B6B75] transition hover:text-[#704BFD]" href="/shop"><ArrowLeft size={14}/> Kembali ke Shop</Link>
        <div className="relative mt-5 overflow-hidden rounded-[38px] bg-[#704BFD] px-6 pb-24 pt-10 text-white shadow-[0_28px_80px_rgba(87,57,200,.22)] sm:px-10 sm:pb-28 sm:pt-12 lg:px-14"><span className="absolute -right-20 -top-28 size-80 rounded-full bg-white/15 blur-2xl"/><span className="absolute -bottom-28 left-[8%] size-64 rounded-full border-[42px] border-white/10"/><div className="relative mx-auto max-w-4xl text-center"><span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-3 py-2 text-[9px] font-black backdrop-blur"><Sparkles size={14}/> MODE AI NEMU</span><h1 className="mx-auto mt-5 max-w-3xl font-[var(--font-display)] text-4xl font-black leading-[.94] tracking-[-.06em] sm:text-6xl">Nggak tahu nama barangnya? Ceritain aja.</h1><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80">Sebut mau dipakai buat apa, budget berapa, atau model yang kamu suka. NEMU bantu nyariin pilihan yang paling masuk.</p><div className="mt-6 flex flex-wrap justify-center gap-2">{['Boleh pakai bahasa sehari-hari','Budget ikut dihitung','Bisa cari baru + preloved'].map(item=><span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[8px] font-black text-white" key={item}>{item}</span>)}</div></div></div>
        <section className="relative mx-auto -mt-16 max-w-[960px] rounded-[30px] border border-[#ddd5f3] bg-white p-5 shadow-[0_24px_70px_rgba(50,35,75,.14)] sm:p-8 lg:p-10" aria-label="Percakapan Mode AI"><div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.13em] text-[#704BFD]">Ceritain ke NEMU</p><h2 className="mt-1 text-2xl font-black tracking-[-.04em]">Kamu lagi cari apa?</h2><p className="mt-2 text-[9px] leading-5 text-[#6B6B75]">Nggak perlu rapi. Tulis aja seperti lagi chat.</p></div><span className="hidden items-center gap-2 rounded-full bg-[#F2EFFF] px-3 py-2 text-[8px] font-black text-[#5D3EEA] sm:flex"><span className="size-2 rounded-full bg-[#704BFD]"/> Siap bantu</span></div><AiShoppingAssistant/></section>
        <div className="mx-auto mt-5 grid max-w-[960px] gap-3 sm:grid-cols-3">{[[Sparkles,'Ceritain maumu','Contoh: sepatu buat kuliah, budget 300 ribu.'],[Search,'NEMU nyaring','Kebutuhan dan budgetmu dipakai buat memilih.'],[ArrowRight,'Kamu tinggal cek','Pilihan yang paling masuk ditampilkan duluan.']].map(([Icon,title,copy])=>{const I=Icon as typeof Sparkles;return <div className="flex gap-4 rounded-[22px] border border-[#e4dfeb] bg-white p-5" key={title as string}><span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#F2EFFF] text-[#704BFD]"><I size={18}/></span><div><h2 className="text-sm font-black">{title as string}</h2><p className="mt-1 text-[9px] leading-5 text-[#6B6B75]">{copy as string}</p></div></div>})}</div>
      </div>
    </section>
    <Footer/>
  </main>;
}
