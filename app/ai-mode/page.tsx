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

    <section className="relative px-4 py-10 sm:px-6 lg:py-16">
      <span className="absolute left-1/2 top-0 -z-0 size-[540px] -translate-x-1/2 rounded-full bg-[#cfc3ff]/25 blur-3xl"/>
      <div className="relative mx-auto max-w-[1240px]">
        <Link className="inline-flex items-center gap-2 text-[9px] font-black text-[#6d6378] transition hover:text-[#5b3fd5]" href="/shop"><ArrowLeft size={14}/> Kembali ke Shop</Link>
        <div className="mt-8 grid items-end gap-7 lg:grid-cols-[1.08fr_.92fr]">
          <div><span className="inline-flex items-center gap-2 rounded-full bg-[#ebe6ff] px-3 py-2 text-[9px] font-black text-[#5b3fd5]"><Sparkles size={14}/> MODE AI NEMU</span><h1 className="mt-5 max-w-3xl font-[var(--font-display)] text-5xl font-black leading-[.93] tracking-[-.065em] sm:text-6xl lg:text-7xl">Nggak tahu namanya?<br/><span className="text-[#6547db]">Ceritain aja.</span></h1><p className="mt-5 max-w-xl text-sm font-medium leading-7 text-[#6d6378]">Sebut barangnya dipakai buat apa, budget berapa, atau warna yang kamu suka. Nggak perlu ngetik pakai bahasa robot.</p></div>
          <div className="flex flex-wrap gap-2 lg:justify-end">{['Bahasa sehari-hari','Budget ikut dihitung','Baru + preloved'].map(item=><span className="inline-flex items-center gap-1.5 rounded-full border border-[#ded8e8] bg-white px-3 py-2 text-[8px] font-black text-[#655a72] shadow-sm" key={item}><CheckCircle2 size={13} className="text-[#5b3fd5]"/>{item}</span>)}</div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.08fr_.92fr]">
          <section className="rounded-[30px] border border-[#e2dced] bg-white p-5 shadow-[0_20px_70px_rgba(54,41,92,.09)] sm:p-7" aria-label="Percakapan Mode AI"><div className="mb-5 flex items-center justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.13em] text-[#5b3fd5]">Tanya NEMU</p><h2 className="mt-1 text-xl font-black">Lagi butuh apa?</h2></div><span className="flex items-center gap-2 rounded-full bg-[#eff9d2] px-3 py-2 text-[8px] font-black text-[#55720f]"><span className="size-2 rounded-full bg-[#7aa51c]"/> Siap bantu</span></div><AiShoppingAssistant/></section>
          <aside className="relative isolate min-h-[500px] overflow-hidden rounded-[30px] bg-[#2b1838] shadow-[0_20px_70px_rgba(54,41,92,.12)]"><span className="absolute inset-0 bg-cover bg-[68%_center]" role="img" aria-label="Pengguna sedang mencari barang dengan Mode AI NEMU" style={{backgroundImage:"url('/ai-shopper-v1.png')"}}/><span className="absolute inset-0 bg-gradient-to-t from-[#24132f]/85 via-transparent to-transparent"/><div className="absolute inset-x-0 bottom-0 p-7 text-white"><span className="text-[8px] font-black uppercase tracking-[.13em] text-[#dfff5b]">Contohnya</span><p className="mt-2 max-w-sm text-xl font-black leading-7">“Aku butuh kado buat ibu, berguna di rumah, budget 250 ribuan.”</p></div></aside>
        </div>
      </div>
    </section>

    <section className="border-y border-[#e4dfeb] bg-white px-4 py-12 sm:px-6"><div className="mx-auto grid max-w-[1100px] gap-4 sm:grid-cols-3">{[[Sparkles,'1. Ceritain','Tulis kebutuhanmu seperti lagi chat.'],[Search,'2. NEMU nangkep','Kebutuhan dan budget diringkas dulu.'],[ArrowRight,'3. Lihat pilihan','Barang yang paling cocok ditaruh di depan.']].map(([Icon,title,copy])=>{const I=Icon as typeof Sparkles;return <div className="flex gap-4 rounded-[22px] bg-[#f8f6fa] p-5" key={title as string}><span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#eee9ff] text-[#5b3fd5]"><I size={18}/></span><div><h2 className="text-sm font-black">{title as string}</h2><p className="mt-1 text-[9px] leading-5 text-[#716979]">{copy as string}</p></div></div>})}</div></section>
    <Footer/>
  </main>;
}
