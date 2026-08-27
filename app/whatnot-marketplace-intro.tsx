import Link from 'next/link';
import { ArrowRight, Play, ShoppingBag, Sparkles, Store } from 'lucide-react';

const shows = [
  { title: 'Kausnya dipakai langsung', seller: 'Review seller NEMU', video: '/hasil-video-review-kaus.mp4', poster: '/hasil-video-review-kaus.jpg', color: '#ff715b' },
  { title: 'Satu foto jadi bergerak', seller: 'Dibikin lewat NEMU', video: '/hasil-video-produk-square.mp4', poster: '/hasil-video-produk-square.jpg', color: '#cfff43' },
  { title: 'Barangnya kelihatan jelas', seller: 'Konten siap posting', video: '/hasil-video-barang.mp4', poster: '/hasil-video-barang.jpg', color: '#9d83ff' },
  { title: 'Bikin orang berhenti scroll', seller: 'Visual promo seller', video: '/hasil-video-dynamic.mp4', poster: '/hasil-video-dynamic.jpg', color: '#ffbf3f' },
];

const categories = [
  { title: 'Fashion', note: 'Buat dipakai tiap hari', image: '/collection-fashion-v1.jpg', rotate: '-rotate-2' },
  { title: 'HP & gadget', note: 'Yang kepakai terus', image: '/collection-gadget-v1.jpg', rotate: 'rotate-2' },
  { title: 'Beauty', note: 'Biar makin pede', image: '/collection-beauty-v1.jpg', rotate: '-rotate-1' },
  { title: 'Rumah', note: 'Biar makin betah', image: '/collection-home-v1.jpg', rotate: 'rotate-1' },
];

export function WhatnotMarketplaceIntro() {
  return <>
    <section className="relative overflow-hidden bg-[#704bfd] text-white" aria-labelledby="nemu-hero-heading">
      <span className="absolute -left-44 -top-44 size-[560px] rounded-full border-[90px] border-white/10"/>
      <span className="absolute -bottom-56 right-[-8%] size-[680px] rounded-full bg-[#cfff43]/25 blur-[100px]"/>
      <div className="relative mx-auto grid min-h-[760px] max-w-[1440px] gap-8 px-5 pb-14 pt-12 sm:px-8 lg:grid-cols-[.78fr_1.22fr] lg:items-center lg:px-14 lg:py-16">
        <div className="relative z-20 max-w-[620px]">
          <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.18em] text-[#dcd3ff]"><Sparkles size={15}/> Marketplace punya seller Indonesia</p>
          <h1 id="nemu-hero-heading" className="mt-6 text-[52px] font-black leading-[.88] tracking-[-.07em] sm:text-7xl lg:text-[92px]">Barang seru.<br/>Seller nyata.<br/><span className="text-[#cfff43]">Ketemunya di NEMU.</span></h1>
          <p className="mt-7 max-w-[540px] text-sm font-medium leading-7 text-white/80 sm:text-base">Lihat produk dari seller lokal lewat foto dan video. Mau ikut jualan? Produkmu masuk marketplace sekaligus punya website toko sendiri.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-[#cfff43] px-7 py-4 text-[10px] font-black text-[#17131f] transition hover:-translate-y-1 hover:bg-white" href="/shop"><ShoppingBag size={17}/> Mulai lihat-lihat <ArrowRight size={15}/></Link>
            <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-7 py-4 text-[10px] font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href="#jadwal-onboarding"><Store size={17}/> Mulai jualan</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-[8px] font-black"><span className="rounded-full bg-white/12 px-4 py-2">100+ seller sudah mulai</span><span className="rounded-full bg-white/12 px-4 py-2">Baru + preloved</span><span className="rounded-full bg-white/12 px-4 py-2">Produk lokal</span></div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[720px] sm:h-[640px] lg:h-[690px]">
          <div className="absolute left-1/2 top-1/2 z-20 aspect-[9/16] h-[480px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[38px] border-[8px] border-[#17131f] bg-[#17131f] shadow-[0_38px_90px_rgba(23,13,52,.42)] sm:h-[585px] lg:h-[650px]">
            <video className="size-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/hasil-video-review-kaus.jpg"><source src="/hasil-video-review-kaus.mp4" type="video/mp4"/></video>
            <span className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/60 to-transparent"/>
            <div className="absolute inset-x-4 top-4 flex items-center justify-between"><span className="rounded-full bg-[#ff715b] px-3 py-2 text-[7px] font-black uppercase tracking-[.1em]">Lagi diputar</span><span className="grid size-9 place-items-center rounded-full bg-white/18 backdrop-blur"><Play className="fill-white" size={14}/></span></div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/75 to-transparent p-5 pt-28"><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#cfff43]">Hasil video seller</p><h2 className="mt-2 text-2xl font-black leading-tight">Produknya nggak cuma diam di katalog.</h2><p className="mt-3 text-[9px] leading-5 text-white/70">Lihat barangnya bergerak sebelum kamu pilih.</p><Link className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-[8px] font-black text-[#17131f]" href="/shop">Lihat produknya <ArrowRight size={13}/></Link></div>
          </div>
          <Link className="absolute left-0 top-[15%] z-10 hidden w-[210px] -rotate-6 overflow-hidden rounded-[24px] bg-white p-3 text-[#17131f] shadow-[0_26px_60px_rgba(34,20,74,.28)] transition hover:-translate-y-2 sm:block" href="/shop"><img className="aspect-[4/3] w-full rounded-[17px] object-cover" src="/collection-fashion-v1.jpg" alt="Fashion di NEMU"/><p className="mt-3 text-[8px] font-black uppercase tracking-[.12em] text-[#704bfd]">Fashion pilihan</p><p className="mt-1 text-sm font-black">Buat ngampus sampai kondangan</p></Link>
          <Link className="absolute bottom-[11%] right-0 z-30 hidden w-[205px] rotate-6 overflow-hidden rounded-[24px] bg-[#cfff43] p-3 text-[#17131f] shadow-[0_26px_60px_rgba(34,20,74,.28)] transition hover:-translate-y-2 sm:block" href="/shop"><img className="aspect-[4/3] w-full rounded-[17px] object-cover" src="/collection-beauty-v1.jpg" alt="Beauty di NEMU"/><p className="mt-3 text-[8px] font-black uppercase tracking-[.12em]">Beauty seller lokal</p><p className="mt-1 text-sm font-black">Yang baru tayang hari ini</p></Link>
          <div className="absolute right-[3%] top-[7%] z-30 hidden rounded-[20px] bg-white px-5 py-4 text-[#17131f] shadow-[0_18px_45px_rgba(34,20,74,.24)] md:block"><p className="text-[7px] font-black uppercase tracking-[.13em] text-[#704bfd]">Seller di NEMU</p><p className="mt-1 text-lg font-black">100+</p></div>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="seller-show-heading">
      <div className="mx-auto max-w-[1320px]">
        <div className="mx-auto max-w-[760px] text-center"><p className="text-[9px] font-black uppercase tracking-[.17em] text-[#704bfd]">Ikut lihat yang lagi seru</p><h2 id="seller-show-heading" className="mt-4 text-4xl font-black leading-[.93] tracking-[-.06em] sm:text-6xl">Produknya tampil.<br/>Sellernya ikut cerita.</h2><p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#67616f]">Bukan cuma foto dan harga. Video pendek bikin kamu lebih kebayang barangnya sebelum pilih.</p></div>
        <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-8 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4">
          {shows.map((show,index)=><article className={`group relative aspect-[9/14] min-w-[76vw] snap-center overflow-hidden rounded-[28px] bg-[#17131f] shadow-[0_22px_58px_rgba(35,24,56,.16)] sm:min-w-0 ${index%2?'lg:translate-y-10':''}`} key={show.title}>
            <video className="size-full object-cover transition duration-700 group-hover:scale-[1.03]" autoPlay muted loop playsInline preload="metadata" poster={show.poster}><source src={show.video} type="video/mp4"/></video>
            <span className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20"/>
            <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-full bg-white/18 text-white backdrop-blur"><Play className="fill-white" size={15}/></span>
            <span className="absolute right-4 top-4 rounded-full px-3 py-2 text-[7px] font-black text-[#17131f]" style={{backgroundColor:show.color}}>0{index+1}</span>
            <div className="absolute inset-x-5 bottom-5 text-white"><p className="text-[7px] font-black uppercase tracking-[.13em] text-white/65">{show.seller}</p><h3 className="mt-2 text-xl font-black tracking-[-.035em]">{show.title}</h3></div>
          </article>)}
        </div>
        <div className="mt-8 text-center lg:mt-20"><Link className="inline-flex items-center gap-2 rounded-full bg-[#17131f] px-6 py-4 text-[10px] font-black text-white" href="/shop">Lihat semua yang tayang <ArrowRight size={15}/></Link></div>
      </div>
    </section>

    <section className="overflow-hidden bg-[#cfff43] px-4 py-20 text-[#17131f] sm:px-6 lg:py-28" aria-labelledby="category-world-heading">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 lg:grid-cols-[.8fr_1.2fr] lg:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.17em]">Semua ada di NEMU</p><h2 id="category-world-heading" className="mt-3 text-5xl font-black leading-[.9] tracking-[-.065em] sm:text-7xl">Pilih duniamu.</h2></div><p className="max-w-xl text-sm font-medium leading-7 lg:pb-2">Mau cari yang kepakai tiap hari, yang bikin rumah makin enak, atau sekadar lihat barang seru? Tinggal masuk dari sini.</p></div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((item,index)=><Link className={`group relative aspect-[4/5] overflow-hidden rounded-[28px] bg-[#17131f] shadow-[0_22px_52px_rgba(54,70,12,.18)] transition duration-300 hover:-translate-y-3 hover:rotate-0 ${item.rotate}`} href="/shop" key={item.title}><img className="size-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={item.title}/><span className="absolute inset-0 bg-gradient-to-t from-black/88 via-transparent to-transparent"/><span className="absolute left-5 top-5 grid size-9 place-items-center rounded-full bg-white text-[8px] font-black text-[#704bfd]">0{index+1}</span><div className="absolute inset-x-5 bottom-5 text-white"><p className="text-[7px] font-black uppercase tracking-[.12em] text-[#cfff43]">{item.note}</p><h3 className="mt-2 text-3xl font-black tracking-[-.045em]">{item.title}</h3></div></Link>)}
        </div>
      </div>
    </section>

    <section className="bg-[#17131f] px-4 py-20 text-white sm:px-6 lg:py-28" aria-labelledby="official-store-heading">
      <div className="mx-auto grid max-w-[1320px] gap-10 lg:grid-cols-[.76fr_1.24fr] lg:items-center">
        <div><p className="text-[9px] font-black uppercase tracking-[.17em] text-[#cfff43]">Toko yang bisa kamu percaya</p><h2 id="official-store-heading" className="mt-4 text-5xl font-black leading-[.9] tracking-[-.065em] sm:text-7xl">Brand-nya jelas.<br/>Tokonya beneran ada.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-white/68">Official seller punya halaman toko sendiri, katalog lengkap, info seller, dan checkout di NEMU. Kamu bisa lihat semuanya sebelum beli.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link className="inline-flex items-center justify-center gap-2 rounded-full bg-[#cfff43] px-6 py-4 text-[10px] font-black text-[#17131f]" href="/shop">Lihat official seller <ArrowRight size={15}/></Link><a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-[10px] font-black" href="#jadwal-onboarding"><Store size={16}/> Buka official shop</a></div></div>
        <div className="relative overflow-hidden rounded-[30px] bg-white p-3 shadow-[0_34px_80px_rgba(0,0,0,.35)] sm:p-5"><div className="flex items-center gap-2 border-b border-[#ece8f2] px-2 pb-4"><span className="size-2.5 rounded-full bg-[#ff715b]"/><span className="size-2.5 rounded-full bg-[#ffd65a]"/><span className="size-2.5 rounded-full bg-[#bdf86b]"/><span className="ml-2 text-[7px] font-black text-[#777080]">TRACKER OFFICIAL SHOP · NEMU</span></div><div className="mt-3 aspect-[16/10] overflow-hidden rounded-[20px] bg-[#eeeaf3]"><img className="h-auto w-full object-cover object-top transition duration-1000 hover:-translate-y-[10%]" src="/tracker-official-shop-proof.png" alt="Website TRACKER Official Shop di NEMU"/></div><span className="absolute bottom-8 left-8 rounded-full bg-[#704bfd] px-4 py-3 text-[8px] font-black text-white">Seller terverifikasi</span></div>
      </div>
    </section>
  </>;
}
