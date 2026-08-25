import Link from 'next/link';
import {
  Apple, ArrowRight, Camera, CirclePlus, Globe2, Megaphone, Play, SearchCheck, Smartphone, Sparkles, Store, Truck, WandSparkles,
} from 'lucide-react';
import { Footer, Header, MobileDock } from './components';
import { PaymentMethods } from './payment-methods';
import { SectionTransitions } from './experience';

const categories = [
  { name: 'Fashion', note: 'Sudah tayang dari seller fashion', image: '/collection-fashion-v1.jpg', size: 'lg:col-span-2 lg:row-span-2' },
  { name: 'HP & gadget', note: 'Pilihan dari seller gadget', image: '/collection-gadget-v1.jpg', size: 'lg:col-span-2' },
  { name: 'Beauty', note: 'Listing seller beauty', image: '/collection-beauty-v1.jpg', size: 'lg:col-span-1' },
  { name: 'Rumah', note: 'Koleksi seller home living', image: '/collection-home-v1.jpg', size: 'lg:col-span-1' },
];

const products = [
  { name: 'Vivo V11 Pro 6/64', price: 'Rp950.000', old: 'Rp1.050.000', badge: 'Hemat 10%', position: '0% 0%' },
  { name: 'GM Shoes Flat Sandal', price: 'Rp70.000', badge: 'Produk lokal', position: '50% 0%' },
  { name: 'Kopi Gayo Arabika 250 gr', price: 'Rp95.000', old: 'Rp110.000', badge: 'Hemat 14%', position: '100% 0%' },
  { name: 'Arunika Work Tote', price: 'Rp749.000', badge: 'Seller pilihan', position: '0% 100%' },
  { name: 'Keramik Mug Handmade', price: 'Rp180.000', badge: 'Produk lokal', position: '50% 100%' },
  { name: 'Aluna Linen Dress', price: 'Rp385.000', badge: 'Baru masuk', position: '100% 100%' },
];

const sellerTools = [
  ['Tampil di NEMU Marketplace', 'Listing produkmu di marketplace NEMU agar bisa dilihat dan ditemukan buyer.', 'Kamu punya tempat baru untuk ketemu calon pembeli.'],
  ['Website toko siap pakai', 'Setiap seller mendapatkan toko online dengan link sendiri untuk dibagikan ke WhatsApp, Instagram, TikTok, atau channel lainnya.', 'Brand dan produkmu punya etalase online sendiri.'],
  ['Snap · List · Sell', 'Foto barang dan isi harga. NEMU bantu merapikan informasi produk jadi listing yang enak dilihat.', 'Produk siap tayang tanpa harus menulis semuanya dari nol.'],
  ['Konten & iklan dibantu AI', 'Buat foto dan bahan konten, lalu jalankan iklan Google, Meta, dan TikTok langsung ke tokomu.', 'Promosi lebih gampang dibuat dan hasil tiap channel bisa dilihat.'],
  ['Muncul di Google & AI search', 'Informasi toko dan produk disusun agar lebih mudah dipahami mesin pencari dan pencarian AI.', 'Produkmu lebih mudah ditemukan calon pembeli.'],
  ['Bayar & kirim dalam satu alur', 'Terima pembayaran lewat DOKU dan sediakan pilihan pengiriman dari 30+ kurir.', 'Pembayaran dan pengiriman lebih praktis untuk kamu dan pembeli.'],
];

const faq = [
  ['NEMU itu sebenarnya apa?', 'NEMU adalah marketplace Indonesia tempat buyer mencari barang dan seller menampilkan produk. Seller juga mendapatkan website toko sendiri, alat bantu listing, konten dan iklan, pembayaran DOKU, serta pilihan 30+ kurir.'],
  ['Kalau nggak tahu nama barangnya gimana?', 'Masuk ke Mode AI, lalu ketik kebutuhan, budget, warna, ukuran, atau barangnya mau dipakai untuk apa.'],
  ['Buka toko di NEMU bayar berapa?', 'Gratis sampai tokomu mendapatkan penjualan pertama atau pecah telur. Setelah itu, biayanya Rp199.000 per bulan.'],
  ['Apa saja yang didapat seller?', 'Website toko siap pakai, Snap List Sell, AI foto dan konten, iklan Google Meta TikTok, SEO dan AI search, pembayaran DOKU, serta pilihan 30+ kurir.'],
  ['Harus bisa desain atau paham teknis?', 'Nggak perlu. Mulai saja dari foto produk dan harga. NEMU bantu merapikan listing, konten, promosi, pembayaran, dan pengirimannya.'],
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': ['Organization', 'OnlineStore'], '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization', name: 'NEMU AI', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', logo: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/favicon.svg', description: 'Marketplace Indonesia tempat buyer menemukan produk dan seller membangun channel jualan dengan website toko, AI marketing, pembayaran DOKU, dan 30+ pilihan kurir.', areaServed: 'Indonesia', sameAs: ['https://nemu-ai.com/', 'https://shop.nemu-ai.com/'] },
    { '@type': 'WebSite', '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#website', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', name: 'NEMU AI', publisher: { '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization' }, inLanguage: 'id-ID', potentialAction: { '@type': 'SearchAction', target: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/shop?q={search_term_string}', 'query-input': 'required name=search_term_string' } },
    { '@type': 'Service', name: 'Layanan seller NEMU Marketplace', provider: { '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization' }, areaServed: 'Indonesia', audience: { '@type': 'BusinessAudience', audienceType: 'Seller, UMKM, dan brand lokal' }, description: 'Fasilitas seller di NEMU Marketplace berupa website toko, Snap List Sell, AI foto dan konten, iklan Google Meta TikTok, SEO dan AI search, pembayaran DOKU, serta 30+ pilihan kurir. Gratis sampai penjualan pertama, lalu Rp199.000 per bulan.', offers: { '@type': 'Offer', price: '199000', priceCurrency: 'IDR', description: 'Gratis sampai penjualan pertama, lalu Rp199.000 per bulan.' } },
    { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ],
};

export default function Home() {
  return <main className="home-page overflow-hidden bg-[#fbfbfc] text-[#0b0b0e]">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <Header />
    <MobileDock />
    <SectionTransitions variant="cinematic" />

    <section className="relative isolate overflow-hidden border-b border-[#ececef] bg-[#f4f0ff] px-4 sm:px-6">
      <span className="absolute -right-32 top-16 size-[580px] rounded-full bg-[#e7dfff]"/>
      <div className="relative mx-auto grid min-h-[620px] max-w-[1240px] lg:min-h-[690px] lg:grid-cols-[1.03fr_.97fr]">
        <div className="relative z-20 flex flex-col justify-center py-14 lg:py-20">
          <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.14em] text-[#704bfd]"><Sparkles size={14}/> Marketplace NEMU buat seller & UMKM</p>
          <h1 className="mt-5 max-w-[720px] font-[var(--font-display)] text-[43px] font-black leading-[1.01] tracking-[-.06em] sm:text-7xl sm:leading-[.98] lg:text-[76px]">Listing di NEMU.<br/><span className="text-[#704bfd]">Sekalian punya toko sendiri.</span></h1>
          <p className="mt-6 max-w-[650px] text-base font-medium leading-8 text-[#5a5a66]">NEMU adalah marketplace tempat seller menampilkan produk dan bertemu buyer. Seller juga dapat website toko sendiri, dibantu AI untuk listing, konten dan iklan, lalu bisa menerima pembayaran DOKU serta memilih pengiriman dari 30+ kurir.</p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap"><a className="col-span-2 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#704bfd] px-6 py-4 text-[10px] font-black text-white shadow-[0_12px_28px_rgba(84,54,190,.24)] transition hover:-translate-y-1 sm:w-auto" href="#jadwal-onboarding"><Store size={17}/> Buka toko gratis</a><a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#dcdce0] bg-white px-3 py-4 text-[9px] font-black text-[#704bfd] transition hover:-translate-y-1 sm:w-auto sm:gap-3 sm:px-6 sm:text-[10px]" href="#fitur-seller"><Sparkles size={16}/> Yang seller dapat</a><a className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#cfc3ff] bg-[#ede8ff] px-3 py-4 text-[9px] font-black text-[#704bfd] transition hover:-translate-y-1 hover:bg-white sm:w-auto sm:gap-3 sm:px-6 sm:text-[10px]" href="#download-app"><Smartphone size={16}/> Download aplikasi</a></div>
          <div className="mt-10 grid max-w-[680px] gap-5 border-t border-[#dcdce0] pt-6 sm:grid-cols-2"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#704bfd]">Masuk NEMU Marketplace</p><p className="mt-2 text-[10px] leading-6 text-[#5a5a66]">Produkmu tampil di marketplace sekaligus punya website toko yang bisa kamu bagikan.</p></div><div className="border-t border-[#dcdce0] pt-5 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0"><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#704bfd]">Mulai Rp0</p><p className="mt-2 text-[10px] leading-6 text-[#5a5a66]">Gratis sampai penjualan pertama. Setelah pecah telur, lanjut Rp199.000 per bulan.</p></div></div>
        </div>
        <div className="relative min-h-[410px] self-end sm:min-h-[560px] lg:min-h-full"><img className="absolute bottom-0 left-[28%] z-10 h-[82%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_28px_28px_rgba(71,47,128,.20)] sm:left-[40%] sm:h-[78%] lg:left-[42%] lg:h-[92%]" src="/model-hero-buyer-v2.png" alt="Perempuan Indonesia menggunakan NEMU untuk belanja dan jualan"/><div className="absolute right-0 top-2 z-30 w-[54%] max-w-[190px] rounded-[22px] bg-white p-4 shadow-[0_18px_40px_rgba(54,36,112,.16)] sm:right-6 sm:top-8 sm:max-w-[220px] lg:right-[2%] lg:top-[14%] lg:max-w-[250px]"><span className="absolute -left-2 top-16 hidden size-5 rotate-45 bg-white lg:block"/><p className="text-[7px] font-black uppercase tracking-[.14em] text-[#704bfd]">Seller yang sudah mulai</p><p className="mt-2 text-[12px] font-black leading-[1.45] tracking-[-.02em] text-[#1a1a1f]">“100+ seller sudah gabung. Sekarang giliran tokomu.”</p><div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#ececef] pt-3">{[['https://nemu-ai.com/_next/static/media/fdr-logo.d19a7a83.svg','FDR'],['https://nemu-ai.com/_next/static/media/arei-outdoor-gear-logo.474cad27.svg','AREI'],['https://nemu-ai.com/_next/static/media/kemfood-logo.61ab1b2c.svg','Kemfood'],['https://nemu-ai.com/_next/static/media/tracker-logo.ef0c9116.svg','Tracker']].map(([src,name])=><span className="flex min-w-0 items-center gap-1.5 rounded-lg bg-[#f8f6ff] px-2 py-1.5" key={name}><img className="h-3.5 w-8 shrink-0 object-contain brightness-0 opacity-65" src={src} alt={`Logo seller ${name}`}/><small className="truncate text-[6px] font-black uppercase tracking-[.05em] text-[#5a5a66]">{name}</small></span>)}</div></div></div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:py-28" id="fitur-seller" aria-labelledby="seller-tools-heading">
      <span className="absolute left-1/2 top-0 h-px w-[min(86vw,1100px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#b9a8ff] to-transparent"/>
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#704bfd]">Yang seller dapat</p><h2 id="seller-tools-heading" className="mt-3 max-w-[600px] text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-5xl">Masuk marketplace, sekalian dapat alat jualan lengkap.</h2></div>
          <div className="lg:pb-1"><p className="max-w-2xl text-sm leading-7 text-[#6b6b75]">Seller bisa menjangkau buyer lewat NEMU Marketplace sambil mengelola website toko, listing, konten, iklan, pembayaran, dan pengiriman dari satu tempat.</p><a className="mt-5 inline-flex items-center gap-2 text-[9px] font-black text-[#704bfd]" href="#jadwal-onboarding">Mulai jualan di NEMU <ArrowRight size={14}/></a></div>
        </div>

        <div className="mt-10 overflow-hidden rounded-[30px] border border-[#dcd6e7] bg-[#f7f4ff] shadow-[0_30px_80px_rgba(47,30,96,.11)]">
          <div className="flex items-center justify-between gap-4 border-b border-[#2f2938] bg-[#17131f] px-5 py-4 text-white sm:px-7">
            <div className="flex items-center gap-3"><span className="size-2.5 rounded-full bg-[#ff715b]"/><span className="size-2.5 rounded-full bg-[#ffd65a]"/><span className="size-2.5 rounded-full bg-[#bdf86b]"/><span className="ml-2 text-[8px] font-black uppercase tracking-[.13em] text-white/65">Workspace seller NEMU</span></div>
            <span className="hidden items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-[7px] font-black text-[#dcd3ff] sm:inline-flex"><span className="size-1.5 rounded-full bg-[#cfff43]"/> Siap dipakai</span>
          </div>

          <div className="grid gap-3 p-4 md:hidden">
            {sellerTools.map(([title,help,result],index)=>{const Icon=[Store,Globe2,Camera,Megaphone,SearchCheck,Truck][index]; const featured=index===0||index===3; return <article className={featured?'relative overflow-hidden rounded-[22px] border border-[#704bfd] bg-[#704bfd] p-5 text-white':'relative overflow-hidden rounded-[22px] border border-[#e2dceb] bg-white p-5'} key={title}><span className={featured?'grid size-10 place-items-center rounded-2xl bg-white/15 text-white':'grid size-10 place-items-center rounded-2xl bg-[#eee8ff] text-[#704bfd]'}><Icon size={18}/></span><p className={featured?'mt-5 text-[7px] font-black uppercase tracking-[.13em] text-[#ded6ff]':'mt-5 text-[7px] font-black uppercase tracking-[.13em] text-[#704bfd]'}>Langkah 0{index+1}</p><h3 className="mt-1 text-lg font-black tracking-[-.03em]">{title}</h3><p className={featured?'mt-3 text-[10px] leading-5 text-white/75':'mt-3 text-[10px] leading-5 text-[#625d6d]'}>{help}</p><p className={featured?'mt-5 border-t border-white/20 pt-4 text-[9px] font-bold leading-5 text-white':'mt-5 border-t border-[#e5dff0] pt-4 text-[9px] font-bold leading-5 text-[#2f2938]'}>{result}</p></article>})}
          </div>

          <div className="hidden overflow-x-auto bg-white md:block">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <caption className="sr-only">Fitur seller NEMU dari pembuatan toko hingga pembayaran dan pengiriman</caption>
              <thead><tr className="border-b border-[#e4e0eb] bg-[#f7f4ff]"><th className="w-[30%] px-7 py-5 text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]" scope="col">Yang kamu butuhin</th><th className="w-[37%] px-7 py-5 text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]" scope="col">Yang NEMU kerjain</th><th className="px-7 py-5 text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]" scope="col">Jadinya buat tokomu</th></tr></thead>
              <tbody>{sellerTools.map(([title,help,result],index)=>{const Icon=[Store,Globe2,Camera,Megaphone,SearchCheck,Truck][index]; return <tr className="group border-b border-[#e8e4ec] last:border-b-0 hover:bg-[#faf8ff]" key={title}><th className="px-7 py-6 align-middle" scope="row"><span className="flex items-center gap-4"><span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#eee8ff] text-[#704bfd] transition group-hover:bg-[#704bfd] group-hover:text-white"><Icon size={17}/></span><span><small className="block text-[7px] font-black text-[#9a91a5]">0{index+1}</small><b className="mt-1 block text-sm tracking-[-.02em]">{title}</b></span></span></th><td className="px-7 py-6 text-[10px] leading-6 text-[#625d6d]">{help}</td><td className="px-7 py-6 text-[10px] font-bold leading-6 text-[#2f2938]">{result}</td></tr>})}</tbody>
            </table>
          </div>

          <div className="grid border-t border-[#dcd6e7] bg-[#17131f] text-white sm:grid-cols-3">
            {[['100+','seller sudah mulai'],['3','channel iklan'],['30+','pilihan kurir']].map(([number,label],index)=><div className={index?'border-t border-white/10 px-6 py-6 sm:border-l sm:border-t-0':'px-6 py-6'} key={label}><strong className="text-3xl font-black tracking-[-.06em] text-[#cfff43]">{number}</strong><p className="mt-1 text-[8px] font-black uppercase tracking-[.12em] text-white/65">{label}</p></div>)}
          </div>
        </div>
      </div>
    </section>
    <section className="bg-white px-4 py-8 sm:px-6 lg:py-12" id="seller-pricing" aria-labelledby="seller-pricing-heading">
      <div className="relative mx-auto max-w-[1240px] overflow-hidden rounded-[34px] bg-[#704bfd] px-5 text-white shadow-[0_28px_70px_rgba(69,43,151,.20)] sm:px-9">
        <span className="absolute -left-40 bottom-[-190px] size-[520px] rounded-full border-[76px] border-white/10"/>
        <div className="relative grid lg:min-h-[460px] lg:grid-cols-[1.05fr_.95fr]">
          <div className="relative z-20 flex flex-col justify-center py-12 lg:py-16">
            <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.15em] text-[#e7dfff]"><Store size={15}/> Harga seller NEMU</p>
            <h2 id="seller-pricing-heading" className="mt-4 max-w-[620px] text-4xl font-black leading-[1.02] tracking-[-.05em] sm:text-5xl lg:text-[54px]">Mulai gratis.<br/><span className="text-[#e7dfff]">Bayar setelah tokomu benar-benar jualan.</span></h2>
            <p className="mt-5 max-w-[590px] text-sm font-medium leading-7 text-white/82">Buka toko dan pakai fitur NEMU tanpa biaya sampai penjualan pertamamu masuk. Setelah pecah telur, lanjut Rp199.000 per bulan.</p>
            <div className="mt-7 flex flex-wrap items-center gap-3"><a className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-4 text-[10px] font-black text-[#704bfd] shadow-[0_8px_20px_rgba(20,20,30,.12)] transition hover:-translate-y-1" href="#jadwal-onboarding">Jadwalkan onboarding <ArrowRight size={15}/></a><a className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-4 text-[9px] font-black text-white transition hover:bg-white/10" href="#download-app"><Smartphone size={15}/> Download aplikasi</a></div>
          </div>
          <div className="relative min-h-[370px] self-end sm:min-h-[430px] lg:min-h-[460px]">
            <img className="absolute bottom-0 left-[38%] h-[88%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-[0_24px_24px_rgba(42,24,96,.24)] sm:left-[45%] sm:h-[96%] lg:left-[38%] lg:h-[92%]" src="/model-seller-coral-v4.png" alt="Seller perempuan bersiap membuka toko di NEMU"/>
            <div className="absolute right-0 top-5 z-20 w-[54%] max-w-[220px] rounded-[22px] bg-white p-5 text-[#17131f] shadow-[0_18px_42px_rgba(32,20,78,.22)] sm:right-5 sm:top-12 sm:max-w-[245px]">
              <span className="absolute -left-2 top-12 size-5 rotate-45 bg-white"/>
              <p className="text-[7px] font-black uppercase tracking-[.14em] text-[#704bfd]">Harga seller NEMU</p>
              <p className="mt-2 text-lg font-black leading-5">Gratis sampai penjualan pertama.</p>
              <p className="mt-3 border-t border-[#ececef] pt-3 text-[9px] font-bold leading-5 text-[#6b6b75]">Setelah pecah telur, lanjut Rp199.000 per bulan.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PaymentMethods />

    <section className="px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="buyer-heading">
      <div className="mx-auto max-w-[1240px]"><div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#704bfd]">Sudah tayang di NEMU</p><h2 id="buyer-heading" className="mt-3 text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-5xl">Seller NEMU jualan apa aja?</h2></div><p className="max-w-xl text-sm leading-7 text-[#6b6b75] lg:ml-auto">Lihat kategori produk yang sudah ditayangkan seller di NEMU Marketplace. Dari fashion, gadget, beauty, sampai kebutuhan rumah.</p></div>
        <div className="home-category-grid mt-8 sm:mt-10">{categories.map((category,index)=><Link className={`home-category-card group relative overflow-hidden rounded-[22px] ${index===0?'home-category-card-featured':''} ${category.size}`} href="/shop" key={category.name}><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{backgroundImage:`url('${category.image}')`}}/><span className="absolute inset-0 bg-gradient-to-t from-[#1a1a1f]/80 via-transparent to-transparent"/><div className="absolute inset-x-4 bottom-4 pr-12 text-white sm:inset-x-6 sm:bottom-6"><p className="text-[8px] font-black uppercase tracking-[.12em] text-white/70">{category.note}</p><h3 className="mt-1 text-xl font-black sm:text-2xl">{category.name}</h3></div><span className="absolute bottom-4 right-4 grid size-9 place-items-center rounded-full bg-white text-[#704bfd] sm:bottom-6 sm:right-6 sm:size-10"><ArrowRight size={16}/></span></Link>)}</div>
      </div>
    </section>

    <section className="border-y border-[#ececef] bg-white px-4 py-20 sm:px-6 lg:py-24" id="produk" aria-labelledby="trending-heading"><div className="mx-auto max-w-[1240px]"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#704bfd]">Listing seller NEMU</p><h2 id="trending-heading" className="mt-2 text-4xl font-black tracking-[-.055em] sm:text-5xl">Produk seller yang sudah tayang.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#6b6b75]">Intip barang yang sudah dilisting seller di NEMU Marketplace.</p></div><Link className="inline-flex w-fit items-center gap-2 text-[9px] font-black text-[#704bfd]" href="/shop">Lihat semua produk <ArrowRight size={14}/></Link></div>
      <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-6">{products.map(product=><article className="group" key={product.name}><div className="relative aspect-[.86] overflow-hidden bg-[#f3f3f7]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-105" role="img" aria-label={product.name} style={{backgroundImage:"url('/product-sprite-a-v1.png')",backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-3 top-3 rounded-full bg-[#704bfd] px-3 py-1.5 text-[7px] font-black text-white">{product.badge}</span></div><div className="pt-4"><h3 className="line-clamp-2 min-h-9 text-[10px] font-black leading-4">{product.name}</h3><strong className="mt-2 block text-base">{product.price}</strong>{product.old&&<small className="mt-1 block text-[8px] text-[#84848f] line-through">{product.old}</small>}<Link className="mt-3 inline-flex items-center gap-1 text-[8px] font-black text-[#704bfd]" href="/shop">Buka produk <ArrowRight size={11}/></Link></div></article>)}</div></div></section>



    <section className="relative overflow-hidden border-y border-[#e6e0f2] bg-[#f5f1ff] px-4 py-16 sm:px-6 lg:py-24" id="snap-list-sell" aria-labelledby="snap-list-sell-heading">
      <span className="absolute -right-28 -top-28 size-[340px] rounded-full border-[58px] border-white/70"/>
      <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
        <div className="relative z-20">
          <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.15em] text-[#704bfd]"><Camera size={14}/> Snap · List · Sell</p>
          <h2 id="snap-list-sell-heading" className="mt-4 max-w-[470px] text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-5xl">Foto barangnya.<br/>Isi harga.<br/><span className="text-[#704bfd]">NEMU bantu tayangin.</span></h2>
          <p className="mt-5 max-w-[460px] text-sm leading-7 text-[#625d6d]">Nggak perlu nulis nama dan deskripsi dari nol. Upload foto, tentuin harga, lalu cek sebentar sebelum produk masuk tokomu.</p>
          <div className="mt-8 border-y border-[#d9d0ec]">
            {[['01','Upload foto','Pakai kamera HP aja'],['02','NEMU rapihin','Nama, deskripsi, dan kategori'],['03','Cek lalu tayang','Harga tetap kamu yang pegang']].map(([number,title,copy])=><div className="grid grid-cols-[36px_1fr] gap-4 border-b border-[#d9d0ec] py-4 last:border-b-0" key={number}><span className="text-[9px] font-black text-[#704bfd]">{number}</span><span><b className="block text-[10px]">{title}</b><small className="mt-1 block text-[8px] leading-4 text-[#777080]">{copy}</small></span></div>)}
          </div>
          <a className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#704bfd] px-6 py-4 text-[10px] font-black text-white shadow-[0_12px_28px_rgba(84,54,190,.22)] transition hover:-translate-y-1" href="#jadwal-onboarding">Coba jualan gratis <ArrowRight size={15}/></a>
        </div>
        <div className="relative min-h-[540px] sm:min-h-[620px] lg:min-h-[570px]">
          <div className="absolute inset-x-0 top-0 h-[360px] overflow-hidden rounded-[28px] sm:h-[470px] sm:rounded-[34px] lg:inset-y-0 lg:left-0 lg:right-[14%] lg:h-auto">
            <img className="size-full object-cover" src="/seller-content-woman-v1.jpg" alt="Seller memotret produk sebelum NEMU merapikan listing"/>
            <span className="absolute inset-0 bg-gradient-to-t from-[#24183d]/65 via-transparent to-transparent"/>
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/35 bg-white/90 px-4 py-2 text-[8px] font-black text-[#704bfd] shadow-lg backdrop-blur"><Camera size={13}/> Foto dari HP</span>
            <p className="absolute bottom-7 left-7 max-w-[280px] text-2xl font-black leading-[1.02] tracking-[-.04em] text-white sm:text-3xl">Satu foto,<br/>listing siap dicek.</p>
          </div>
          <div className="absolute inset-x-4 bottom-0 z-20 rounded-[26px] border border-[#d8d0eb] bg-white p-4 shadow-[0_24px_60px_rgba(56,38,105,.18)] sm:inset-x-auto sm:right-0 sm:w-[72%] sm:p-5 lg:bottom-8 lg:w-[68%]">
            <div className="flex items-center justify-between gap-4 border-b border-[#ece8f3] pb-3"><span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]"><WandSparkles size={14}/> Sudah dirapihin NEMU</span><span className="rounded-full bg-[#e9ffd1] px-3 py-1.5 text-[7px] font-black text-[#356500]">Siap dicek</span></div>
            <div className="mt-4 grid grid-cols-[90px_1fr] gap-4 sm:grid-cols-[126px_1fr]">
              <div className="aspect-square overflow-hidden rounded-[18px] bg-[#eeeaf5]"><span className="block size-full bg-cover" style={{backgroundImage:"url('/collection-beauty-v1.jpg')",backgroundPosition:'42% center'}}/></div>
              <div className="min-w-0 self-center"><p className="text-[7px] font-black uppercase tracking-[.12em] text-[#8a7f96]">Siap masuk tokomu</p><h3 className="mt-1 text-sm font-black leading-5 sm:text-lg">Glow Drop Face Serum 20 ml</h3><p className="mt-2 line-clamp-2 text-[8px] leading-4 text-[#6b6b75]">Serum ringan buat pagi dan malam. Cepat meresap dan nggak lengket.</p><strong className="mt-3 block text-lg text-[#704bfd]">Rp89.000</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden border-y border-[#ececef] bg-[#f4f0ff] px-4 py-14 sm:px-6 lg:py-16"><span className="absolute -right-28 -top-28 size-[340px] rounded-full border-[56px] border-white/60"/><div className="relative mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[.68fr_1.32fr] lg:items-center"><div className="relative z-20"><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#704bfd]">Cari pakai Mode AI</p><h2 className="mt-3 text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-5xl">Cukup bilang<br/>maunya apa.</h2><p className="mt-4 max-w-md text-sm leading-7 text-[#6b6b75]">Tulis kebutuhan, budget, atau gaya yang kamu mau. NEMU bantu cariin pilihan yang paling pas.</p><Link className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#704bfd] px-6 py-4 text-[10px] font-black text-white" href="/ai-mode">Cari pakai Mode AI <ArrowRight size={15}/></Link></div><div className="relative min-h-[460px] sm:min-h-[500px] lg:min-h-[440px]"><img className="absolute bottom-0 left-1/2 h-[78%] w-auto max-w-none -translate-x-1/2 object-contain sm:h-[84%] lg:left-[2%] lg:h-[92%] lg:translate-x-0" src="/ai-shopping-visual-v1.png" alt="Perempuan mencari produk dengan bantuan Mode AI NEMU"/><div className="absolute right-0 top-2 z-20 max-w-[205px] sm:top-6 sm:max-w-[270px] rounded-[20px] bg-white p-4 shadow-[0_14px_30px_rgba(61,39,130,.12)]"><p className="text-[7px] font-black uppercase tracking-[.13em] text-[#704bfd]">Kamu ketik</p><p className="mt-2 text-[11px] font-black leading-5">“Sepatu putih buat kuliah. Empuk. Budget 300 ribuan.”</p></div><div className="absolute bottom-2 left-0 z-20 max-w-[235px] sm:bottom-4 sm:left-auto sm:right-0 sm:max-w-[290px] rounded-[20px] bg-[#704bfd] p-4 text-white shadow-[0_14px_30px_rgba(61,39,130,.18)]"><p className="text-[7px] font-black uppercase tracking-[.13em] text-[#e7dfff]">NEMU cariin</p><p className="mt-2 text-[10px] font-black leading-5">Sepatu putih · empuk · gampang dibersihkan · maksimal Rp300 ribu</p></div></div></div></section>



    <section className="bg-[#704bfd] py-16 text-white" id="download-app" aria-labelledby="download-heading"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#e7dfff]">NEMU di genggaman</p><h2 id="download-heading" className="mt-3 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-5xl">Belanja dan urus toko dari HP.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">Cari barang, cek pesanan, atau lanjut jualan kapan saja lewat aplikasi NEMU.</p></div><div className="grid gap-3 sm:flex sm:flex-wrap"><a className="inline-flex w-full min-w-0 sm:w-auto sm:min-w-[190px] items-center gap-3 rounded-2xl bg-[#1a1a1f] px-5 py-3 text-white shadow-[0_12px_24px_rgba(32,20,78,.22)] transition hover:-translate-y-1" href="https://apps.apple.com/id/app/nemu-ai-marketplace/id6789514376"><Apple className="shrink-0 text-white" size={28}/><span className="text-white"><small className="block text-[7px] font-bold text-white/65">Download di</small><b className="block text-sm text-white">App Store</b></span></a><a className="inline-flex w-full min-w-0 items-center gap-3 rounded-2xl bg-[#1a1a1f] sm:w-auto sm:min-w-[190px] px-5 py-3 text-white shadow-[0_12px_24px_rgba(32,20,78,.22)] transition hover:-translate-y-1" href="https://play.google.com/store/apps/details?id=com.nemump.nemumobile&pcampaignid=web_share"><Play className="shrink-0 fill-white text-white" size={26}/><span className="text-white"><small className="block text-[7px] font-bold text-white/65">Download di</small><b className="block text-sm text-white">Google Play</b></span></a></div></div></section>

    <section className="bg-white px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="faq-heading"><div className="mx-auto grid max-w-[1240px] overflow-hidden rounded-[34px] border border-[#dcdce0] lg:grid-cols-[.72fr_1.28fr]"><div className="relative overflow-hidden bg-[#704bfd] p-8 text-white sm:p-12"><span className="absolute -bottom-28 -left-24 size-[330px] rounded-full border-[58px] border-white/10"/><div className="relative"><span className="grid size-14 place-items-center rounded-full bg-white text-[#704bfd]"><Sparkles size={24}/></span><p className="mt-10 text-[9px] font-black uppercase tracking-[.15em] text-[#e7dfff]">Yang sering ditanyain</p><h2 id="faq-heading" className="mt-3 text-4xl font-black leading-[.98] tracking-[-.05em] sm:text-5xl">Masih ada yang bikin ragu?</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/75">Cek jawaban singkatnya. Kalau barang yang dicari belum kebayang, langsung ceritakan ke Mode AI.</p><Link className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black" style={{color:'#704bfd'}} href="/ai-mode"><span style={{color:'#704bfd'}}>Tanya Mode AI</span><ArrowRight style={{color:'#704bfd'}} size={14}/></Link></div></div><div className="bg-[#fbfbfc] p-6 sm:p-10">{faq.map(([question,answer],index)=><details className="faq-item group mb-3 rounded-[20px] border border-[#e4e0eb] bg-white px-5 open:border-[#b9a8ff] open:shadow-[0_10px_24px_rgba(61,39,130,.08)]" key={question} open={index===0}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[11px] font-black"><span className="flex items-center gap-3"><b className="text-[8px] text-[#704bfd]">0{index+1}</b>{question}</span><CirclePlus className="shrink-0 text-[#704bfd] transition group-open:rotate-45" size={20}/></summary><p className="border-t border-[#ececef] pb-5 pt-4 text-[10px] leading-6 text-[#6b6b75]">{answer}</p></details>)}</div></div></section>
    <Footer/>
  </main>;
}
