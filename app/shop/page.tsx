import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, ChevronRight,
  MapPin, PackageCheck, RotateCcw,
  Search, ShieldCheck, Star, Store,
} from 'lucide-react';
import { BannerCarousel } from '../banner-carousel';
import { Footer, Header, MobileDock } from '../components';
import { SectionTransitions } from '../experience';
import { ProductQuickView } from '../product-quick-view';
import { CartButton, CategoryFilter, FavoriteButton, ShopSearch } from './shop-client';

export const metadata: Metadata = {
  title: 'Belanja Barang Baru, Preloved, dan Produk Lokal',
  description: 'Cari produk dengan nama barang atau bahasa sehari-hari. Lihat harga, kondisi, lokasi, rating, serta info seller dengan jelas di NEMU AI.',
  alternates: { canonical: '/shop' },
  openGraph: { title: 'Belanja Online Lebih Gampang | NEMU AI', description: 'Ketik barangnya atau ceritain maumu. NEMU bantu nyaring pilihan yang paling masuk.', url: '/shop', images: ['/og.png'] },
};

const categories = [
  {name:'Fashion',image:'/collection-fashion-v1.jpg',focus:'center'},
  {name:'HP & gadget',image:'/collection-gadget-v1.jpg',focus:'center'},
  {name:'Beauty',image:'/collection-beauty-v1.jpg',focus:'center'},
  {name:'Rumah',image:'/collection-home-v1.jpg',focus:'center'},
  {name:'Elektronik',image:'/collection-gadget-v1.jpg',focus:'65% center'},
  {name:'Preloved',image:'/banner-preloved-v1.png',focus:'72% center'},
];

const promoGallery = [
  {label:'FLASH SALE',title:'Harga turun. Jangan cuma dilihatin.',image:'/campaign-flash-sale-v1.jpg',tone:'from-[#7d1f16]/95'},
  {label:'LAGI FYP',title:'Yang rame di timeline, ada di sini.',image:'/campaign-fyp-v2.png',tone:'from-[#3d1b69]/95'},
  {label:'BARU NAIK',title:'Baru tayang. Layak masuk radar.',image:'/banner-local-v1.png',tone:'from-[#4b2582]/95'},
  {label:'GAJIAN SALE',title:'Baru gajian? Pilih yang kepakai.',image:'/campaign-payday-v1.jpg',tone:'from-[#19583d]/95'},
  {label:'9.9 SALE',title:'Tanggal cantik. Harganya ikut cakep.',image:'/campaign-99-v1.jpg',tone:'from-[#7a1649]/95'},
];

const products = [
  {name:'Yamaha APX500II',price:'Rp400.000',old:'Rp450.000',badge:'Official · Hemat 11%',note:'Kondisi bagus · 173 dilihat',city:'Nemu Store',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/502dad20-f8c3-41c8-bdd9-e8ec29dc994e.png',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:'iPad Air M4 dan Apple Pencil Pro',price:'Rp18.000.000',old:'',badge:'Official',note:'Baru · 151 dilihat',city:'Nemu Store',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/e0f71502-153b-4092-9daa-9887233bd0e2.jpg',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:'Apple MacBook Air M2',price:'Rp10.500.000',old:'Rp11.000.000',badge:'Official · Hemat 5%',note:'Mulus · 109 dilihat',city:'Nemu Store',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/2b9b62e1-ce7f-40ad-af45-46748ad44461.png',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:'NVIDIA DGX Spark',price:'Rp125.000.000',old:'Rp135.000.000',badge:'Official · Hemat 7%',note:'Baru · 75 dilihat',city:'Nemu Store',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/cad430ec-e5f1-4c4e-9529-8471bf791801.jpg',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:'GM.shoes Sepatu Sandal Wanita',price:'Rp70.000',old:'',badge:'Produk terbaru',note:'Baru · 15 dilihat',city:'GMS.store · Jakarta',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/b65c53f0-b789-4dd0-84a0-ba883188e12a.jpg',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:'T-Shirt Keren Pria/Wanita',price:'Rp89.450',old:'',badge:'Official',note:'Baru · 56 dilihat',city:'Libertystreet · BSD',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/1c409fbd-eacb-4008-a73e-4f6f5b8726e7.jpg',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:'Vivo V11 Pro 6/64',price:'Rp950.000',old:'Rp1.050.000',badge:'Preloved · Hemat 10%',note:'Kondisi bagus · 11 dilihat',city:'Lentera Awan · Klaten',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/7008540f-9a9c-4917-9368-55b0e5335908.png',position:'center',liveUrl:'https://shop.nemu-ai.com/products/store/lenteraawan/vivo-v11-pro-6-64'},
  {name:'Sweet Obsession',price:'Rp18.000',old:'Rp20.000',badge:'Preloved · Hemat 10%',note:'Baru · 17 dilihat',city:'Dyamora Parfum · Nganjuk',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/40ff95c9-9af8-4b0b-b804-82e0fff74085.png',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:'Vivo Y12s 3/32',price:'Rp750.000',old:'Rp850.000',badge:'Preloved · Hemat 12%',note:'Kondisi bagus · 10 dilihat',city:'Lentera Awan · Klaten',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/5b7d6a77-a594-420a-907c-edeafcdab0c4.png',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
  {name:"Converse BW Low 70's",price:'Rp250.000',old:'',badge:'Preloved',note:'Seperti baru · 21 dilihat',city:'Jakarta Timur',sprite:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/ed2dcdb4-a26a-42ef-88d0-83e51134a06f.png',position:'center',liveUrl:'https://shop.nemu-ai.com/products?sort=newest'},
];

const shops = [
  {name:'FDR',category:'Ban & kebutuhan otomotif',logo:'https://nemu-ai.com/_next/static/media/fdr-logo.d19a7a83.svg'},
  {name:'AREI Outdoor Gear',category:'Outdoor & travel',logo:'https://nemu-ai.com/_next/static/media/arei-outdoor-gear-logo.474cad27.svg'},
  {name:'Kemfood',category:'Makanan & kebutuhan rumah',logo:'https://nemu-ai.com/_next/static/media/kemfood-logo.61ab1b2c.svg'},
  {name:'Tracker',category:'Sepatu & sandal',logo:'https://nemu-ai.com/_next/static/media/tracker-logo.ef0c9116.svg'},
];

export default function ShopPage() {
  const shopJsonLd = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Belanja Online di NEMU AI',
    description: 'Koleksi produk lokal, barang baru, dan preloved dengan pencarian berbantuan AI.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/shop', inLanguage: 'id-ID',
    mainEntity: { '@type': 'ItemList', itemListElement: products.map((product, index) => ({ '@type': 'ListItem', position: index + 1, name: product.name, url: product.liveUrl })) },
  };

  return (
    <main className="overflow-hidden bg-[#FBFBFD] text-[#0B0B0E]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }} />
      <Header showSearch={false} />
      <MobileDock />
      <SectionTransitions />

      <div className="border-b border-[#e8e4f0] bg-white px-4 py-2.5 sm:px-6">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 text-[9px] font-bold text-[#6B6B75]"><span className="flex items-center gap-2"><MapPin size={14} className="text-[#704BFD]"/> Dikirim ke <b className="text-[#0B0B0E]">Indonesia</b></span><span className="hidden sm:block">Ada masalah? <a className="font-black text-[#704BFD]" href="https://shop.nemu-ai.com/help">Kami bantu</a></span></div>
      </div>

      <section className="mx-auto max-w-[1240px] px-4 pb-3 pt-8 sm:px-6" id="tanya-nemu">
        <article className="relative overflow-hidden rounded-[30px] border border-[#dfd9e8] bg-white p-6 shadow-[0_18px_50px_rgba(49,36,67,.07)] sm:p-9">
          <span className="absolute -right-16 -top-20 size-64 rounded-full bg-[#EDE8FF]/55 blur-2xl"/><span className="absolute -bottom-28 right-40 size-56 rounded-full bg-[#b9a8ff]/35 blur-3xl"/>
          <div className="relative grid items-end gap-7 lg:grid-cols-[.72fr_1.28fr]">
            <div><div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.12em] text-[#704BFD]"><Search size={13}/> Mulai dari sini</div><h1 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-5xl">Mau cari<br/>barang apa?</h1><p className="mt-4 max-w-md text-sm leading-6 text-[#6B6B75]">Tulis nama barangnya. Kalau belum tahu namanya, pindah ke Mode AI dan ketik ciri atau kebutuhanmu.</p></div>
            <div className="rounded-[24px] border border-[#e5dfed] bg-[#faf9fc]/90 p-4 backdrop-blur sm:p-5"><ShopSearch/></div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-5 pt-8 sm:px-6" aria-labelledby="shop-campaigns">
        <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704BFD]">Promo NEMU</p><h1 id="shop-campaigns" className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Biar belanjanya lebih hemat.</h1></div><span className="hidden text-[9px] font-bold text-[#6B6B75] sm:block">Geser buat cek promo lainnya</span></div>
        <BannerCarousel />
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6" aria-labelledby="promo-gallery-heading">
        <div className="flex items-end justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704BFD]">Lagi ramai</p><h2 id="promo-gallery-heading" className="mt-2 text-3xl font-black tracking-[-.045em]">Yang FYP, lokal, sampai tanggal cantik.</h2></div><span className="hidden text-[9px] font-bold text-[#6B6B75] sm:block">Lihat semuanya →</span></div>
        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">{promoGallery.map((promo,index)=><a className={`group relative isolate min-h-[260px] min-w-[270px] snap-start overflow-hidden rounded-[28px] shadow-[0_18px_45px_rgba(45,30,65,.14)] sm:min-w-[360px] ${index===0?'sm:min-w-[470px]':''}`} href="#produk" key={promo.label}><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{backgroundImage:`url('${promo.image}')`}}/><span className={`absolute inset-0 bg-gradient-to-r ${promo.tone} via-black/30 to-transparent`}/><span className="relative flex min-h-[260px] max-w-[270px] flex-col justify-end p-6 text-white"><small className="w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[8px] font-black tracking-[.14em] backdrop-blur">{promo.label}</small><b className="mt-3 text-2xl leading-[1.02] tracking-[-.04em]">{promo.title}</b><span className="mt-4 inline-flex items-center gap-2 text-[9px] font-black">Lihat pilihan <ArrowRight size={13}/></span></span></a>)}</div>
      </section>

      <section className="mx-auto mt-4 max-w-[1240px] px-4 sm:px-6" id="kategori">
        <div className="overflow-hidden rounded-[30px] border border-[#e1dce9] bg-white p-5 shadow-[0_18px_60px_rgba(49,36,67,.06)] sm:p-7"><div className="flex items-end justify-between gap-5"><div><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#704BFD]">Pilih kategori</p><h2 className="mt-1 text-2xl font-black tracking-[-.04em] sm:text-3xl">Mau lihat yang mana dulu?</h2></div><a className="hidden items-center gap-1 rounded-full bg-[#F2EFFF] px-4 py-2 text-[9px] font-black text-[#704BFD] sm:flex" href="#produk">Semua produk <ChevronRight size={13}/></a></div><div className="mt-6 grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[175px] md:grid-cols-12">{categories.filter(({name})=>name!=='Elektronik').map(({name,image,focus},index)=>{const sizes=['col-span-2 row-span-2 md:col-span-6','md:col-span-6','md:col-span-2','md:col-span-2','md:col-span-2'];return <a className={`group relative isolate overflow-hidden rounded-[22px] bg-[#ece8f4] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_rgba(38,25,60,.18)] ${sizes[index]}`} href="#produk" key={name}><span className="absolute inset-0 bg-cover bg-no-repeat transition duration-700 group-hover:scale-[1.045]" role="img" aria-label={`Kategori ${name}`} style={{backgroundImage:`url('${image}')`,backgroundPosition:focus}}/><span className="absolute inset-0 bg-gradient-to-t from-[#17151d]/78 via-[#17151d]/5 to-transparent"/><span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5"><span><small className="inline-flex rounded-full bg-black/55 px-2.5 py-1 text-[7px] font-black uppercase tracking-[.12em] text-white backdrop-blur">Kategori</small><b className={`${index===0?'text-2xl sm:text-3xl':'text-base'} mt-1.5 block text-white`}>{name}</b></span><span className="grid size-9 place-items-center rounded-full border border-white/50 bg-white/90 text-[#0B0B0E] backdrop-blur"><ChevronRight size={14}/></span></span></a>})}</div></div>
      </section>

      <section className="mx-auto mt-4 max-w-[1240px] px-4 sm:px-6" aria-labelledby="promo-heading">
        <div className="rounded-[30px] border border-[#e1dce9] bg-white p-5 shadow-[0_18px_55px_rgba(49,36,67,.07)] sm:p-7">
          <div className="flex items-end justify-between gap-4">
            <div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704BFD]">Lagi banyak dilihat</p><h2 id="promo-heading" className="mt-1 text-2xl font-black tracking-[-.04em] sm:text-3xl">Pilihan yang lagi ramai.</h2></div>
            <a className="hidden items-center gap-1 rounded-full bg-[#F2EFFF] px-4 py-2 text-[9px] font-black text-[#704BFD] sm:flex" href="#produk">Lihat semua <ChevronRight size={13}/></a>
          </div>
          <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none]">
            {products.slice(0,6).map(product=><article className="group flex min-w-[220px] max-w-[220px] snap-start flex-col overflow-hidden rounded-[24px] border border-[#e8e4f0] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b9a8ff] hover:shadow-[0_20px_42px_rgba(70,48,110,.12)] sm:min-w-[244px] sm:max-w-[244px]" key={product.name}>
              <div className="relative aspect-[1.08] overflow-hidden bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-[1.04]" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundPosition:product.position}}/><span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/35 to-transparent"/><span className="absolute left-3 top-3 rounded-full border border-white/60 bg-white/90 px-3 py-1.5 text-[7px] font-black text-[#5e3bdd] shadow-sm backdrop-blur">{product.badge}</span></div>
              <div className="flex min-h-[176px] flex-1 flex-col p-4"><p className="text-[7px] font-black uppercase tracking-[.1em] text-[#704BFD]">{product.city}</p><h3 className="mt-1 line-clamp-2 min-h-9 text-[11px] font-black leading-4">{product.name}</h3><p className="mt-1 text-[8px] text-[#6B6B75]">{product.note}</p><div className="mt-3"><strong className="text-base text-[#0B0B0E]">{product.price}</strong>{product.old&&<del className="ml-2 text-[7px] text-[#8C8792]">{product.old}</del>}</div><div className="mt-auto flex items-end justify-between gap-2 pt-3"><span className="flex items-center gap-1 text-[8px] font-bold text-[#6B6B75]"><Star size={10} fill="#F6B81A" className="text-[#F6B81A]"/> 4,9</span><ProductQuickView {...product}/></div></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6" aria-labelledby="toko-heading">
        <div className="rounded-[34px] border border-[#e4dfeb] bg-white p-6 shadow-[0_22px_65px_rgba(43,30,61,.07)] sm:p-8"><div className="grid items-end gap-4 lg:grid-cols-[1fr_.7fr]"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#704BFD]">Seller pilihan NEMU</p><h2 id="toko-heading" className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Seller yang tumbuh bareng NEMU.</h2></div><div className="flex items-end justify-between gap-4 lg:justify-end"><p className="max-w-sm text-[9px] leading-5 text-[#6B6B75]">Kenalan sama brand yang ikut bikin pengalaman belanja di NEMU lebih personal, aman, dan mudah.</p><a className="hidden shrink-0 items-center gap-1 rounded-full bg-[#F2EFFF] px-4 py-2 text-[9px] font-black text-[#704BFD] sm:flex" href="https://shop.nemu-ai.com/toko">Semua toko <ChevronRight size={13}/></a></div></div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{shops.map(shop=><a className="group flex min-h-[190px] flex-col justify-between rounded-[24px] border border-[#e8e4f0] bg-[#faf9fc] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#cfc3ff] hover:bg-white hover:shadow-[0_18px_35px_rgba(70,48,110,.10)]" href="https://shop.nemu-ai.com/toko" key={shop.name}><span className={`grid h-20 place-items-center rounded-[18px] p-4 shadow-sm ${shop.name==='Tracker'?'bg-[#0B0B0E]':'bg-white'}`}><img className="max-h-12 max-w-[150px] object-contain transition duration-300 group-hover:scale-105" src={shop.logo} alt={`Logo ${shop.name}`}/></span><span><b className="mt-5 block text-sm">{shop.name}</b><small className="mt-1 block text-[8px] text-[#6B6B75]">{shop.category}</small><span className="mt-3 inline-flex items-center gap-1 text-[8px] font-black text-[#704BFD]"><BadgeCheck size={12}/> Seller NEMU</span></span></a>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6" id="produk" aria-labelledby="produk-heading">
        <div className="rounded-[28px] border border-[#e8e4f0] bg-white p-5 sm:p-7"><div className="flex items-end justify-between gap-5"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#704BFD]">Baru masuk di NEMU</p><h2 id="produk-heading" className="mt-1 text-3xl font-black tracking-[-.045em]">Produk terbaru, langsung dari sellernya.</h2><p className="mt-2 max-w-xl text-[9px] leading-5 text-[#6B6B75]">Foto, harga, kondisi, dan lokasi seller kelihatan dari awal. Tinggal pilih yang paling masuk.</p></div><a className="hidden shrink-0 items-center gap-2 rounded-full bg-[#F2EFFF] px-5 py-3 text-[9px] font-black text-[#704BFD] sm:flex" href="https://shop.nemu-ai.com/products?sort=newest">Buka katalog asli <ArrowRight size={13}/></a></div><div className="mt-6"><CategoryFilter categories={['Semua','Produk terbaru','Di bawah Rp200 ribu','Official','Preloved']}/></div><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.map(product=><article className="group flex min-w-0 flex-col overflow-hidden rounded-[20px] border border-[#e7e2ed] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#b9a8ff] hover:shadow-[0_18px_38px_rgba(61,42,102,.10)]" key={product.name}><div className="relative aspect-[.96] overflow-hidden bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-[1.045]" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundPosition:product.position}}/><span className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/30 to-transparent"/><span className="absolute left-2.5 top-2.5 max-w-[calc(100%-48px)] truncate rounded-full border border-white/60 bg-white/90 px-2.5 py-1.5 text-[7px] font-black text-[#5e3bdd] shadow-sm backdrop-blur">{product.badge}</span><FavoriteButton name={product.name}/></div><div className="flex flex-1 flex-col p-3.5"><p className="truncate text-[7px] font-black uppercase tracking-[.08em] text-[#704BFD]">{product.city}</p><h3 className="mt-1 line-clamp-2 min-h-9 text-[10px] font-extrabold leading-4 sm:text-[11px]">{product.name}</h3><p className="mt-1 text-[7px] text-[#6B6B75]">{product.note}</p><div className="mt-2"><strong className="text-sm text-[#17131F] sm:text-base">{product.price}</strong>{product.old&&<del className="ml-1.5 text-[7px] text-[#8C8792]">{product.old}</del>}</div><p className="mt-2 flex items-center gap-1 text-[7px] font-bold text-[#6B6B75]"><Star size={10} fill="#F6B81A" className="text-[#F6B81A]"/> 4,9 · Seller NEMU</p><div className="mt-auto flex flex-col gap-1 pt-2 sm:flex-row sm:items-center sm:justify-between"><ProductQuickView {...product}/><CartButton name={product.name}/></div></div></article>)}</div><a className="mx-auto mt-8 flex w-fit items-center gap-2 rounded-full border border-[#cfc6e2] bg-white px-6 py-3 text-[9px] font-black text-[#704BFD] transition hover:bg-[#F2EFFF]" href="https://shop.nemu-ai.com/products?sort=newest">Lihat 4.257 produk lainnya <ChevronRight size={14}/></a></div>
      </section>

      <section className="px-4 pb-16 sm:px-6"><div className="mx-auto max-w-[1240px] overflow-hidden rounded-[38px] border border-[#ddd5f3] bg-[#F2EFFF] shadow-[0_26px_70px_rgba(74,52,135,.12)]"><div className="grid gap-0 lg:grid-cols-[1.08fr_.92fr]"><div className="p-7 sm:p-10 lg:p-12"><span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-[#704BFD]"><ShieldCheck size={14}/> Belanja lebih jelas</span><h2 className="mt-3 text-4xl font-black leading-[.96] tracking-[-.055em] text-[#0B0B0E] sm:text-5xl">Cek dulu.<br/>Baru pilih.</h2><p className="mt-5 max-w-lg text-[11px] leading-6 text-[#5F5968]">Harga, kondisi barang, dan info seller ditampilkan dari awal. Jadi kamu nggak perlu nebak-nebak sebelum beli.</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{[[ShieldCheck,'Pembayaran jelas','Alur dan biaya bisa dicek sebelum lanjut.'],[BadgeCheck,'Seller bisa dicek','Profil dan tanda verifikasinya kelihatan.'],[RotateCcw,'Ada kendala? Lapor','Buka pesanan lalu kirim laporan.'],[PackageCheck,'Kondisi ditulis jelas','Barang baru atau preloved disebut dari awal.']].map(([Icon,title,copy])=>{const I=Icon as typeof ShieldCheck;return <div className="rounded-[20px] border border-[#ddd5f3] bg-white p-4 shadow-sm" key={title as string}><I className="text-[#704BFD]" size={18}/><b className="mt-3 block text-[10px] text-[#0B0B0E]">{title as string}</b><p className="mt-1 text-[8px] leading-4 text-[#6B6B75]">{copy as string}</p></div>})}</div></div><div className="relative min-h-[460px] overflow-hidden"><span className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:"url('/seller-packing-team-women-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-t from-[#39286F]/90 via-[#704BFD]/5 to-transparent"/><div className="absolute inset-x-5 bottom-5 rounded-[24px] border border-white/30 bg-[#704BFD]/90 p-5 text-white shadow-xl backdrop-blur"><span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-white/80"><Store size={13}/> Mau mulai jualan?</span><h3 className="mt-2 text-2xl font-black tracking-[-.04em]">Foto barang. Isi harga. Langsung tayang.</h3><p className="mt-2 text-[9px] leading-5 text-white/80">NEMU bantu rapihin nama dan deskripsinya. Harga dan tokomu tetap kamu yang pegang.</p><a className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black text-[#704BFD]" href="#jadwal-onboarding">Buka toko gratis <ArrowRight size={14}/></a></div></div></div></div></section>
      <Footer />
    </main>
  );
}
