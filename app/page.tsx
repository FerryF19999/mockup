import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, Check, ChevronRight, CirclePlus, MessageCircleMore, Search, ShieldCheck, ShoppingBag, Sparkles, Store } from 'lucide-react';
import { Footer, Header } from './components';
import { SectionTransitions, ThreeUiParticleNetwork } from './experience';

const faq = [
  ['Apa itu NEMU AI?', 'NEMU adalah marketplace Indonesia yang membantu kamu mencari barang dengan kalimat biasa. Sebutkan kebutuhan, budget, warna, ukuran, atau lokasi; NEMU akan menyaring pilihan yang relevan.'],
  ['Bagaimana cara mencari barang di NEMU?', 'Ketik nama barang atau ceritakan kebutuhanmu di kolom pencarian. Kamu tetap bisa membuka kategori, membandingkan harga, melihat kondisi barang, dan memilih seller seperti di marketplace lain.'],
  ['Apakah ada barang baru dan preloved?', 'Ada. Setiap produk menampilkan kondisi barang agar pembeli bisa membedakan barang baru dan preloved sebelum memilih.'],
  ['Apakah seller bisa membuka toko di NEMU?', 'Bisa. Seller lokal, UMKM, brand, dan penjual barang preloved dapat mendaftar, mengunggah foto, mengatur harga, lalu menerbitkan produk.'],
  ['Bagaimana AI membantu seller?', 'AI membantu menyiapkan judul, deskripsi, dan kategori dari foto dan detail produk. Seller tetap memeriksa hasilnya sebelum listing tayang.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization', name: 'NEMU AI', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', logo: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/favicon.svg', sameAs: ['https://www.instagram.com/nemu_ai_/', 'https://www.tiktok.com/@nemu_ai_'] },
    { '@type': 'WebSite', '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#website', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', name: 'NEMU AI', inLanguage: 'id-ID', publisher: { '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization' }, potentialAction: { '@type': 'SearchAction', target: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/shop?q={search_term_string}', 'query-input': 'required name=search_term_string' } },
    { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ],
};

const miniProducts = [
  ['Vivo V11 Pro', 'Rp950.000', 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/7008540f-9a9c-4917-9368-55b0e5335908.png'],
  ['GM Flat Sandal', 'Rp70.000', 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/b65c53f0-b789-4dd0-84a0-ba883188e12a.jpg'],
  ['Kopi Gayo', 'Rp95.000', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80'],
];

const steps = [
  { icon: MessageCircleMore, number:'01', title:'Ceritakan yang kamu cari', copy:'Nama barang, budget, warna, ukuran—tulis semuanya.' },
  { icon: Search, number:'02', title:'NEMU saring pilihannya', copy:'Harga, kondisi, lokasi, dan seller diperiksa sekaligus.' },
  { icon: ShieldCheck, number:'03', title:'Bandingkan. Pilih. Checkout.', copy:'Semua info penting terlihat sebelum kamu beli.' },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fffdf8] text-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <SectionTransitions />

      <section className="mx-auto grid min-h-[610px] max-w-[1180px] items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[.88fr_1.12fr] lg:py-20">
        <div>
          <p className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-violet-700"><Sparkles size={14}/> Belanja lokal, dibantu AI</p>
          <h1 className="font-[var(--font-display)] text-[58px] font-black leading-[.88] tracking-[-.075em] sm:text-7xl lg:text-[88px]">Ketik maumu.<br/><span className="text-violet-600">NEMU carikan.</span></h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-600">Cari pakai kalimat biasa. NEMU menyaring produk, harga, dan seller—kamu tinggal bandingkan lalu checkout.</p>
          <Link className="mt-7 inline-flex items-center gap-6 rounded-xl bg-violet-600 px-5 py-4 text-[11px] font-black text-white shadow-[0_7px_0_#3d27b7] transition hover:-translate-y-0.5 hover:bg-violet-700" href="/shop">Cariin barang saya <ArrowRight size={17}/></Link>
          <div className="mt-7 flex flex-wrap gap-4 text-[9px] font-bold text-zinc-500">{['Harga terlihat dari awal','Seller sudah dicek','AI bantu menyaring'].map(item=><span className="flex items-center gap-1.5" key={item}><Check size={17} className="rounded-full bg-lime-300 p-1 text-zinc-900"/>{item}</span>)}</div>
        </div>

        <div className="relative isolate overflow-hidden rounded-[32px] border border-white/15 bg-violet-950 p-4 text-white shadow-[15px_15px_0_#d9ff43] sm:p-6">
          <ThreeUiParticleNetwork className="absolute inset-0 -z-10 size-full opacity-75" />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-950/45 via-transparent to-zinc-950/70" />
          <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg shadow-lime-900/10 sm:p-4"><Sparkles className="shrink-0 text-violet-600" size={19}/><p className="min-w-0 flex-1 truncate text-[11px] font-semibold">“Cari HP bagus di bawah Rp1 juta”</p><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-violet-600 text-white"><ArrowRight size={16}/></span></div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">{miniProducts.map(([name,price,img],index)=><article className={`overflow-hidden rounded-2xl bg-white text-zinc-950 shadow-sm ${index===2?'hidden sm:block':''}`} key={name}><Image className="aspect-square w-full object-cover" src={img} alt={name} width={260} height={260} sizes="(max-width: 640px) 42vw, 180px" priority={index===0}/><div className="p-3"><p className="text-[8px] font-black uppercase tracking-wider text-violet-600">Pas buat kamu</p><h3 className="mt-1 truncate text-[11px] font-extrabold">{name}</h3><strong className="mt-1 block text-[11px]">{price}</strong></div></article>)}</div>
          <p className="mt-4 flex items-center gap-2 text-[9px] font-extrabold text-lime-300"><Sparkles size={13}/> 120 produk disaring. Tiga yang paling cocok muncul dulu.</p>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-7 text-white sm:px-6"><div className="mx-auto grid max-w-[1180px] grid-cols-3 items-center gap-4 lg:grid-cols-[130px_130px_130px_1fr]">{[['2.400+','produk'],['150+','seller lokal'],['4,9/5','rating pembeli']].map(([value,label])=><div className="text-center lg:text-left" key={label}><b className="block text-lg font-black sm:text-xl">{value}</b><span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">{label}</span></div>)}<p className="col-span-3 mt-3 text-center text-[10px] font-extrabold text-lime-300 lg:col-span-1 lg:mt-0 lg:text-right">Satu pencarian. Pilihan lebih singkat. Belanja lebih yakin.</p></div></section>

      <section className="mx-auto max-w-[1180px] px-4 py-24 sm:px-6 lg:py-28">
        <div className="max-w-2xl"><p className="mb-3 text-[10px] font-black uppercase tracking-[.16em] text-violet-700">Belanja tanpa kata kunci</p><h2 className="font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Tulis kebutuhannya.<br/>NEMU urus pencariannya.</h2></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{steps.map(({icon:Icon,number,title,copy})=><article className="group rounded-3xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5" key={number}><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white"><Icon size={20}/></span><span className="text-[10px] font-black text-zinc-300">{number}</span></div><h3 className="mt-16 text-xl font-black tracking-[-.04em]">{title}</h3><p className="mt-2 text-xs leading-6 text-zinc-500">{copy}</p></article>)}</div>
      </section>

      <section className="bg-violet-950 px-4 py-24 text-white sm:px-6"><div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2 lg:gap-24"><div><p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-lime-300"><BadgeCheck size={14}/> Semua yang kamu butuhkan</p><h2 className="font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Marketplace yang familiar.<br/>Pencarian yang lebih cepat.</h2><p className="mt-6 max-w-lg text-xs leading-6 text-violet-200">Kategori, promo, toko resmi, dan rekomendasi tetap di tempat yang kamu kenal. Saat kata kunci tidak cukup, tinggal ceritakan ke NEMU.</p><Link className="mt-7 inline-flex items-center gap-5 rounded-xl bg-lime-300 px-5 py-4 text-[10px] font-black text-zinc-950 transition hover:bg-lime-200" href="/shop">Buka marketplace <ArrowRight size={17}/></Link></div><div className="divide-y divide-white/10 border-y border-white/10">{[[Search,'Search biasa. Tetap ada.','Cari produk atau merek seperti biasanya.'],[Sparkles,'Bingung namanya? Pakai AI.','Tulis fungsi, budget, warna, atau kebutuhanmu.'],[BadgeCheck,'Harga dan kondisi terlihat.','Bandingkan info penting dari awal.'],[Store,'Seller sudah diverifikasi.','Tanda verifikasi membantu kamu memilih.']].map(([Icon,title,copy])=>{const I=Icon as typeof Search;return <div className="grid grid-cols-[42px_1fr_auto] items-center gap-4 py-5" key={title as string}><span className="grid size-10 place-items-center rounded-xl bg-white/10 text-lime-300"><I size={18}/></span><div><b className="block text-xs">{title as string}</b><p className="mt-1 text-[9px] text-violet-300">{copy as string}</p></div><ChevronRight size={17} className="text-violet-400"/></div>})}</div></div></section>

      <section className="mx-auto grid min-h-[590px] max-w-[1180px] items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_.8fr]">
        <div><p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-violet-700"><Store size={14}/> Jualan di NEMU</p><h2 className="font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Upload foto.<br/>Listing siap tayang.</h2><p className="mt-6 max-w-lg text-xs leading-6 text-zinc-500">Judul, deskripsi, dan kategori dibantu AI. Kamu tinggal cek detailnya, atur harga, lalu mulai jualan.</p><a className="mt-7 inline-flex items-center gap-5 rounded-xl bg-violet-600 px-5 py-4 text-[10px] font-black text-white" href="https://seller.nemu-ai.com/register">Buka toko saya <ArrowRight size={17}/></a></div>
        <div className="rotate-1 rounded-[30px] border-[8px] border-zinc-950 bg-white p-6 shadow-[18px_18px_0_#d9ff43]"><div className="flex items-center justify-between border-b border-zinc-100 pb-5"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-100 text-violet-700"><Store size={18}/></span><div><b className="block text-xs">Toko Kriya</b><small className="text-[8px] text-zinc-400">Dashboard seller</small></div></div><span className="rounded-lg bg-green-50 px-2.5 py-1 text-[8px] font-black text-green-700">LIVE</span></div><div className="relative py-6"><small className="text-[9px] text-zinc-400">Omzet bulan ini</small><strong className="mt-1 block text-3xl font-black tracking-tight">Rp18,4 jt</strong><em className="absolute right-0 top-7 rounded-full bg-green-50 px-2 py-1 text-[9px] font-black not-italic text-green-700">+24%</em></div><div className="flex h-28 items-end gap-2">{[40,55,38,72,58,86,70,98].map((h,i)=><i className={`flex-1 rounded-t ${i%2?'bg-violet-600':'bg-lime-300'}`} key={i} style={{height:h}} />)}</div><div className="mt-5 flex gap-3 rounded-2xl bg-violet-50 p-4"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-violet-600 text-white"><Sparkles size={16}/></span><div><b className="text-[9px] text-violet-700">Saran dari NEMU</b><p className="mt-1 text-[9px] leading-4 text-zinc-600">Foto pertama yang lebih terang berpotensi mendapat lebih banyak klik.</p></div></div></div>
      </section>

      <section className="section-glow bg-white px-4 py-24 sm:px-6" aria-labelledby="untuk-siapa">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[10px] font-black uppercase tracking-[.16em] text-violet-700">Satu tempat, dua kebutuhan</p>
          <h2 id="untuk-siapa" className="mt-3 max-w-3xl font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Mudah buat yang belanja.<br/>Ringan buat yang jualan.</h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <article className="group rounded-[32px] border border-violet-100 bg-violet-50 p-8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-950/10 sm:p-10"><span className="grid size-12 place-items-center rounded-2xl bg-violet-600 text-white"><ShoppingBag size={21}/></span><p className="mt-10 text-[9px] font-black uppercase tracking-[.14em] text-violet-700">Untuk pembeli</p><h3 className="mt-2 text-3xl font-black tracking-[-.05em]">Cari lebih cepat, pilih lebih yakin.</h3><p className="mt-4 max-w-lg text-xs leading-6 text-zinc-600">Tulis kebutuhan dengan bahasamu sendiri. Lihat harga, kondisi, lokasi, dan status seller sebelum membeli.</p><Link className="mt-6 inline-flex items-center gap-2 text-[10px] font-black text-violet-700" href="/shop">Mulai cari barang <ArrowRight size={15}/></Link></article>
            <article className="group rounded-[32px] bg-zinc-950 p-8 text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-950/20 sm:p-10"><span className="grid size-12 place-items-center rounded-2xl bg-lime-300 text-zinc-950"><Store size={21}/></span><p className="mt-10 text-[9px] font-black uppercase tracking-[.14em] text-lime-300">Untuk seller</p><h3 className="mt-2 text-3xl font-black tracking-[-.05em]">Upload foto, rapikan, lalu jual.</h3><p className="mt-4 max-w-lg text-xs leading-6 text-zinc-400">AI membantu menyiapkan judul, deskripsi, dan kategori. Kamu tetap mengatur harga dan memeriksa detailnya.</p><a className="mt-6 inline-flex items-center gap-2 text-[10px] font-black text-lime-300" href="https://seller.nemu-ai.com/register">Buka toko NEMU <ArrowRight size={15}/></a></article>
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-[.7fr_1fr]">
          <div><p className="text-[10px] font-black uppercase tracking-[.16em] text-violet-700">Pertanyaan yang sering muncul</p><h2 id="faq-heading" className="mt-3 font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em]">Masih bingung?<br/>Jawabannya di sini.</h2><p className="mt-5 max-w-sm text-xs leading-6 text-zinc-500">Penjelasan singkat untuk pembeli dan seller yang baru kenal NEMU.</p></div>
          <div className="divide-y divide-zinc-200 border-y border-zinc-200">{faq.map(([question,answer],index)=><details className="faq-item group" open={index===0} key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-sm font-black"><span>{question}</span><CirclePlus className="shrink-0 text-violet-600" size={20}/></summary><p className="max-w-2xl pb-6 pr-10 text-xs leading-6 text-zinc-500">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-lime-300 px-4 py-24 text-center sm:px-6"><p className="text-[10px] font-black uppercase tracking-[.16em]">Barangnya sudah kebayang?</p><h2 className="mt-3 font-[var(--font-display)] text-5xl font-black tracking-[-.06em] sm:text-7xl">Ketik sekarang. <span className="text-violet-700">NEMU carikan.</span></h2><Link className="mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-5 py-4 text-[10px] font-black text-white" href="/shop">Cari produk saya <ArrowRight size={17}/></Link></section>
      <Footer />
    </main>
  );
}
