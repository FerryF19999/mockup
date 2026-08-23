import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, Camera, Check, CirclePlus, CreditCard,
  Megaphone, PackageCheck, Search, ShoppingBag, Sparkles, Store, Truck,
} from 'lucide-react';
import { Footer, Header, MobileDock } from './components';
import { PaymentMethods } from './payment-methods';

const categories = [
  { name: 'Fashion', note: 'Buat ngampus sampai kondangan', image: '/collection-fashion-v1.jpg', size: 'lg:col-span-2 lg:row-span-2' },
  { name: 'HP & gadget', note: 'Yang kepakai tiap hari', image: '/collection-gadget-v1.jpg', size: 'lg:col-span-2' },
  { name: 'Beauty', note: 'Skincare dan makeup pilihan', image: '/collection-beauty-v1.jpg', size: 'lg:col-span-1' },
  { name: 'Rumah', note: 'Biar makin betah', image: '/collection-home-v1.jpg', size: 'lg:col-span-1' },
];

const products = [
  { name: 'Vivo V11 Pro 6/64', price: 'Rp950.000', old: 'Rp1.050.000', badge: 'Hemat 10%', sprite: '/product-sprite-a-v1.png', position: '0% 0%' },
  { name: 'GM Shoes Flat Sandal', price: 'Rp70.000', badge: 'Produk lokal', sprite: '/product-sprite-a-v1.png', position: '50% 0%' },
  { name: 'Kopi Gayo Arabika 250 gr', price: 'Rp95.000', old: 'Rp110.000', badge: 'Hemat 14%', sprite: '/product-sprite-a-v1.png', position: '100% 0%' },
  { name: 'Arunika Work Tote', price: 'Rp749.000', badge: 'Seller pilihan', sprite: '/product-sprite-a-v1.png', position: '0% 100%' },
  { name: 'Keramik Mug Handmade', price: 'Rp180.000', badge: 'Produk lokal', sprite: '/product-sprite-a-v1.png', position: '50% 100%' },
  { name: 'Aluna Linen Dress', price: 'Rp385.000', badge: 'Baru masuk', sprite: '/product-sprite-a-v1.png', position: '100% 100%' },
];

const faq = [
  ['NEMU itu buat belanja atau jualan?', 'Dua-duanya. Buyer bisa cari barang baru, preloved, dan produk lokal. Seller bisa buka website toko sendiri dan ikut ditemukan di NEMU.'],
  ['Kalau nggak tahu nama barangnya gimana?', 'Masuk ke Mode AI, lalu ceritain kebutuhan, budget, warna, atau barangnya mau dipakai buat apa.'],
  ['Buka toko di NEMU bayar berapa?', 'Gratis sampai pecah telur. Setelah penjualan pertama, lanjut Rp199 ribu per bulan.'],
  ['Pembayaran dan pengirimannya gimana?', 'Pembayaran online diproses lewat DOKU. Seller juga bisa memilih lebih dari 30 kurir dalam satu sistem.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization', name: 'NEMU AI', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', logo: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/favicon.svg' },
    { '@type': 'WebSite', '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#website', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', name: 'NEMU AI', inLanguage: 'id-ID', potentialAction: { '@type': 'SearchAction', target: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/shop?q={search_term_string}', 'query-input': 'required name=search_term_string' } },
    { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ],
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#FFF9F7] text-[#0B0B0E]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <MobileDock />

      <section className="px-3 pb-8 pt-2 sm:px-6 lg:pb-12">
        <div className="relative mx-auto min-h-[660px] max-w-[1280px] overflow-hidden rounded-[34px] bg-[#F56F62] shadow-[0_28px_80px_rgba(102,57,72,.18)]">
          <span className="absolute -left-20 -top-24 size-[360px] rounded-full border-[70px] border-white/12" />
          <span className="absolute -bottom-44 right-[8%] size-[520px] rounded-full bg-[#704BFD]" />
          <span className="absolute right-[4%] top-[12%] size-[360px] rounded-full bg-[#FFD8D0]" />
          <div className="relative z-10 grid min-h-[660px] lg:grid-cols-[.9fr_1.1fr]">
            <div className="flex flex-col justify-center px-6 py-12 text-white sm:px-12 lg:px-16">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-[9px] font-black uppercase tracking-[.12em] backdrop-blur"><Sparkles size={14} /> Baru · preloved · lokal</span>
              <h1 className="mt-6 max-w-[650px] font-[var(--font-display)] text-5xl font-black leading-[.91] tracking-[-.065em] sm:text-7xl lg:text-[78px]">Cari yang kamu suka.<br /><span className="text-[#241B2E]">Jual yang kamu punya.</span></h1>
              <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/90">NEMU itu tempat buyer nemuin barang dan seller buka channel jualan sendiri. Semuanya dibikin lebih gampang, dari cari sampai checkout.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link className="inline-flex items-center gap-3 rounded-full bg-[#704BFD] px-6 py-4 text-[10px] font-black text-white shadow-xl transition hover:-translate-y-1" href="/shop"><ShoppingBag size={17} /> Mulai belanja <ArrowRight size={15} /></Link>
                <a className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-black text-[#704BFD] shadow-xl transition hover:-translate-y-1" href="https://seller.nemu-ai.com/register"><Store size={17} /> Buka toko gratis</a>
              </div>
              <div className="mt-9 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-black text-white/90"><span className="flex items-center gap-2"><Check size={13}/> Harga jelas</span><span className="flex items-center gap-2"><Check size={13}/> Seller bisa dicek</span><span className="flex items-center gap-2"><Check size={13}/> Baru + preloved</span></div>
            </div>
            <div className="relative min-h-[500px] self-end lg:min-h-full">
              <img className="absolute bottom-0 left-1/2 z-10 h-[96%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_28px_28px_rgba(46,25,68,.28)] lg:h-[102%]" src="/model-hero-buyer-v2.png" alt="Perempuan Indonesia berbelanja di NEMU" />
              <div className="absolute bottom-7 left-5 z-20 max-w-[190px] rounded-[22px] border border-white/55 bg-white/90 p-4 shadow-xl backdrop-blur sm:left-10"><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#704BFD]">Buat buyer</p><b className="mt-1 block text-sm leading-5">Cari biasa atau ceritain aja ke AI.</b></div>
              <div className="absolute right-5 top-8 z-20 max-w-[190px] rotate-2 rounded-[22px] bg-[#241B2E] p-4 text-white shadow-xl sm:right-10"><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#FFB5A9]">Buat seller</p><b className="mt-1 block text-sm leading-5">Website siap. Bayar setelah laku.</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadfdf] bg-white px-4 py-5 sm:px-6" aria-label="Keunggulan NEMU">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-5 lg:grid-cols-4">
          {[[Search,'Cari tanpa muter-muter'],[BadgeCheck,'Seller gampang dicek'],[CreditCard,'Bayar lewat DOKU'],[Truck,'30+ pilihan kurir']].map(([Icon,label])=>{const I=Icon as typeof Search;return <div className="flex items-center gap-3" key={label as string}><span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#F2EFFF] text-[#704BFD]"><I size={18}/></span><b className="text-[10px] leading-4 text-[#403849]">{label as string}</b></div>})}
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="category-heading">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
            <div><p className="text-[9px] font-black uppercase tracking-[.16em] text-[#F05F54]">Belanja sesuai gayamu</p><h2 id="category-heading" className="mt-3 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-5xl">Mulai dari yang paling kamu banget.</h2></div>
            <p className="max-w-xl text-sm leading-7 text-[#6B6B75] lg:ml-auto">Lihat kategorinya dulu, baru pilih barangnya. Biar nggak kebanyakan buka tab.</p>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-4 lg:grid-rows-[230px_230px]">
            <article className="relative min-h-[520px] overflow-hidden rounded-[32px] bg-[#EDE8FF] lg:col-span-2 lg:row-span-2 lg:min-h-0">
              <span className="absolute -bottom-20 -left-10 size-72 rounded-full bg-[#704BFD]/14"/><span className="absolute right-4 top-4 size-48 rounded-full bg-[#F56F62]/25"/>
              <img className="absolute bottom-0 right-[2%] z-10 h-[96%] w-auto max-w-none object-contain" src="/model-fashion-hijab-v2.png" alt="Model perempuan memakai pilihan fashion NEMU"/>
              <div className="absolute bottom-7 left-7 z-20 max-w-[230px]"><span className="rounded-full bg-white px-3 py-2 text-[8px] font-black text-[#704BFD] shadow">PILIHAN UTAMA</span><h3 className="mt-4 text-4xl font-black tracking-[-.05em]">Fashion</h3><p className="mt-2 text-[10px] font-bold text-[#665b70]">Buat ngampus, kerja, sampai kondangan.</p><Link className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#704BFD] px-5 py-3 text-[9px] font-black text-white" href="/shop">Lihat fashion <ArrowRight size={14}/></Link></div>
            </article>
            {categories.slice(1).map((category)=><Link className={`group relative min-h-[220px] overflow-hidden rounded-[28px] ${category.size}`} href="/shop" key={category.name}><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{backgroundImage:`url('${category.image}')`}}/><span className="absolute inset-0 bg-gradient-to-t from-[#25192d]/90 via-transparent to-transparent"/><div className="absolute inset-x-5 bottom-5 text-white"><p className="text-[8px] font-black uppercase tracking-[.12em] text-white/70">{category.note}</p><h3 className="mt-1 text-2xl font-black">{category.name}</h3></div><span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-white text-[#704BFD] shadow"><ArrowRight size={16}/></span></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-[#241B2E] px-4 py-16 text-white sm:px-6 lg:py-24" id="produk" aria-labelledby="trending-heading">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#FF9A8E]">Lagi ramai</p><h2 id="trending-heading" className="mt-2 text-4xl font-black tracking-[-.055em] sm:text-5xl">Banyak yang lagi ngincer ini.</h2></div><Link className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black text-[#704BFD]" href="/shop">Lihat semua <ArrowRight size={14}/></Link></div>
          <div className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {products.map(product=><article className="overflow-hidden rounded-[22px] bg-white text-[#241B2E] shadow-[0_18px_40px_rgba(0,0,0,.16)] transition hover:-translate-y-1" key={product.name}><div className="relative aspect-[.86] overflow-hidden bg-[#f3f0f5]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-2 top-2 rounded-full bg-[#F56F62] px-3 py-1.5 text-[7px] font-black text-white">{product.badge}</span></div><div className="p-3.5"><h3 className="line-clamp-2 min-h-9 text-[10px] font-black leading-4">{product.name}</h3><strong className="mt-2 block text-base">{product.price}</strong>{product.old&&<small className="mt-1 block text-[8px] text-[#8a8192] line-through">{product.old}</small>}<Link className="mt-3 inline-flex items-center gap-1 text-[8px] font-black text-[#704BFD]" href="/shop">Lihat produk <ArrowRight size={11}/></Link></div></article>)}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="relative mx-auto grid min-h-[610px] max-w-[1240px] overflow-hidden rounded-[36px] bg-[#704BFD] text-white lg:grid-cols-[1.05fr_.95fr]">
          <span className="absolute -left-36 top-16 size-[420px] rounded-full border-[75px] border-white/10"/><span className="absolute -bottom-28 left-[36%] size-72 rounded-full bg-[#F56F62]"/>
          <div className="relative z-10 flex flex-col justify-center p-7 sm:p-12 lg:p-16"><p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.15em] text-[#EDE8FF]"><Store size={15}/> Mau punya toko sendiri?</p><h2 className="mt-4 text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-6xl">Foto barang.<br/>Isi harga.<br/><span className="text-[#FFD8D0]">Langsung tayang.</span></h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/85">NEMU bantu rapihin listing, bikin foto dan konten, terima pembayaran online, sampai atur kiriman. Kamu tetap pegang harga dan tokomu.</p><div className="mt-7 grid max-w-xl grid-cols-2 gap-2 text-[9px] font-black sm:grid-cols-3">{['Website siap pakai','AI foto produk','Reels & TikTok','Iklan Google, Meta, TikTok','SEO + AI search','30+ kurir'].map(item=><span className="flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-3 py-2.5" key={item}><Check size={12}/>{item}</span>)}</div><div className="mt-8 flex flex-wrap items-center gap-3"><a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-[10px] font-black text-[#704BFD] shadow-xl" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={15}/></a><span className="text-[9px] font-black text-white/80">Rp0 sampai pecah telur · lalu Rp199 ribu/bulan</span></div></div>
          <div className="relative min-h-[560px] self-end"><img className="absolute bottom-0 left-1/2 h-[98%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_30px_28px_rgba(32,12,58,.3)]" src="/model-seller-coral-v2.png" alt="Seller perempuan mengelola toko NEMU lewat ponsel"/><div className="absolute right-5 top-8 z-20 rounded-[20px] bg-white p-4 text-[#241B2E] shadow-xl sm:right-9"><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#704BFD]">Mulai gratis</p><b className="mt-1 block text-xl">Sampai pecah telur ✨</b></div></div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] gap-5 lg:grid-cols-3">
          <article className="relative overflow-hidden rounded-[32px] bg-[#F2EFFF] p-7 lg:col-span-2 sm:p-10"><span className="absolute -right-20 -top-20 size-72 rounded-full bg-[#704BFD]/12"/><div className="relative max-w-[660px]"><span className="grid size-12 place-items-center rounded-2xl bg-[#704BFD] text-white"><Sparkles size={21}/></span><p className="mt-7 text-[9px] font-black uppercase tracking-[.15em] text-[#704BFD]">Mode AI NEMU</p><h2 className="mt-3 text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-5xl">Nggak tahu namanya?<br/>Ceritain aja.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-[#6B6B75]">Tulis mau dipakai buat apa, budget berapa, atau warna yang kamu suka. NEMU bantu nyaring pilihan yang lebih masuk.</p><Link className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#704BFD] px-6 py-4 text-[10px] font-black text-white" href="/ai-mode">Buka Mode AI <ArrowRight size={15}/></Link></div></article>
          <article className="rounded-[32px] bg-[#F56F62] p-7 text-white sm:p-10"><p className="text-[9px] font-black uppercase tracking-[.15em] text-white/75">Yang seller dapat</p><h3 className="mt-3 text-3xl font-black leading-[1] tracking-[-.045em]">Semua alat jualan, satu tempat.</h3><div className="mt-7 space-y-3">{[[Camera,'Snap · List · Sell'],[Megaphone,'Konten dan iklan'],[PackageCheck,'Pesanan dan kiriman']].map(([Icon,label])=>{const I=Icon as typeof Camera;return <div className="flex items-center gap-3 rounded-[18px] bg-white/14 p-4" key={label as string}><span className="grid size-9 place-items-center rounded-xl bg-white text-[#704BFD]"><I size={16}/></span><b className="text-[10px]">{label as string}</b></div>})}</div></article>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:py-24" id="seller-pricing" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-[1240px] overflow-hidden rounded-[36px] border border-[#e4dce7] bg-white shadow-[0_26px_70px_rgba(66,45,82,.10)]">
          <div className="grid lg:grid-cols-[.62fr_1.38fr]">
            <div className="bg-[#241B2E] p-8 text-white sm:p-11"><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#FF9A8E]">Harga seller NEMU</p><h2 id="pricing-heading" className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-5xl">Mulai dulu.<br/>Bayar setelah laku.</h2><p className="mt-5 text-sm leading-7 text-white/70">Gratis sampai penjualan pertama. Setelah itu lanjut Rp199 ribu per bulan.</p><div className="mt-8 rounded-[26px] bg-[#F56F62] p-6"><p className="text-[8px] font-black uppercase tracking-[.14em]">Mulai dari</p><strong className="mt-1 block text-5xl tracking-[-.06em]">Rp0</strong><a className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3.5 text-[9px] font-black text-[#704BFD]" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={14}/></a></div></div>
            <div className="p-6 sm:p-9"><h3 className="text-3xl font-black tracking-[-.045em]">Gabung NEMU, dapat apa?</h3><div className="mt-6 grid gap-3 sm:grid-cols-2">{[['Website toko siap pakai','Langsung bisa dibagi ke buyer'],['Snap · List · Sell','Foto barang, listing dibantu'],['AI foto + konten','Bikin jualan lebih menarik'],['Iklan lintas platform','Google, Meta, dan TikTok'],['SEO + AI search','Lebih gampang ditemukan'],['DOKU + 30 kurir','Bayar dan kirim satu alur']].map(([title,copy])=><div className="rounded-[20px] border border-[#e9e3ed] bg-[#FBF9FC] p-5" key={title}><span className="grid size-8 place-items-center rounded-full bg-[#F2EFFF] text-[#704BFD]"><Check size={14}/></span><b className="mt-4 block text-[10px]">{title}</b><p className="mt-1 text-[9px] leading-5 text-[#6B6B75]">{copy}</p></div>)}</div></div>
          </div>
        </div>
      </section>

      <PaymentMethods />

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[.72fr_1.28fr]">
          <div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#F05F54]">Yang sering ditanyain</p><h2 id="faq-heading" className="mt-3 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-5xl">Biar nggak kepikiran terus.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#6B6B75]">Jawaban singkat buat hal yang paling sering bikin ragu.</p></div>
          <div className="divide-y divide-[#e8e1eb] border-y border-[#e8e1eb]">{faq.map(([question,answer])=><details className="faq-item group" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[11px] font-black"><span>{question}</span><CirclePlus className="shrink-0 text-[#704BFD]" size={20}/></summary><p className="pb-5 pr-10 text-[10px] leading-6 text-[#6B6B75]">{answer}</p></details>)}</div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
