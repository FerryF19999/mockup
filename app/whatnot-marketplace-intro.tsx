import Link from 'next/link';
import { ArrowRight, Download, Search, ShoppingBag, Sparkles, Store } from 'lucide-react';

const marketCategories = [
  { name: 'Fashion', note: 'Buat ngampus sampai kondangan', image: '/collection-fashion-v1.jpg', className: 'md:col-span-2 md:row-span-2' },
  { name: 'HP & gadget', note: 'Yang kepakai tiap hari', image: '/collection-gadget-v1.jpg', className: 'md:col-span-2' },
  { name: 'Beauty', note: 'Skincare dan makeup pilihan', image: '/collection-beauty-v1.jpg', className: '' },
  { name: 'Rumah', note: 'Biar makin betah', image: '/collection-home-v1.jpg', className: '' },
];

const freshProducts = [
  { name: 'Vivo V11 Pro 6/64', price: 'Rp950.000', old: 'Rp1.050.000', badge: 'Hemat 10%', position: '0% 0%' },
  { name: 'GM Shoes Flat Sandal', price: 'Rp70.000', badge: 'Produk lokal', position: '50% 0%' },
  { name: 'Kopi Gayo Arabika 250 gr', price: 'Rp95.000', old: 'Rp110.000', badge: 'Hemat 14%', position: '100% 0%' },
  { name: 'Arunika Work Tote', price: 'Rp749.000', badge: 'Seller pilihan', position: '0% 100%' },
  { name: 'Keramik Mug Handmade', price: 'Rp180.000', badge: 'Produk lokal', position: '50% 100%' },
  { name: 'Aluna Linen Dress', price: 'Rp385.000', badge: 'Baru masuk', position: '100% 100%' },
];

export function WhatnotMarketplaceIntro() {
  return <>
    <section className="relative overflow-hidden bg-[#121016] px-4 pb-5 pt-5 text-white sm:px-6 sm:pb-7 sm:pt-7">
      <div className="relative mx-auto overflow-hidden rounded-[30px] bg-[#704bfd] shadow-[0_30px_90px_rgba(38,22,84,.28)] lg:min-h-[720px] lg:max-w-[1440px]">
        <span className="absolute -left-48 -top-48 size-[620px] rounded-full border-[92px] border-white/10"/>
        <span className="absolute -bottom-36 left-[38%] size-[420px] rounded-full bg-[#cfff43]/20 blur-3xl"/>
        <div className="relative grid gap-6 p-5 sm:p-8 lg:min-h-[720px] lg:grid-cols-[.78fr_1.22fr] lg:p-12">
          <div className="relative z-20 flex flex-col justify-center py-8 lg:py-12">
            <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.16em] text-[#dcd3ff]"><Sparkles size={15}/> NEMU Marketplace</p>
            <h1 className="mt-5 max-w-[610px] text-[48px] font-black leading-[.92] tracking-[-.065em] sm:text-7xl lg:text-[84px]">Belanja seru.<br/>Jualan juga<br/><span className="text-[#cfff43]">langsung siap.</span></h1>
            <p className="mt-6 max-w-[540px] text-sm font-medium leading-7 text-white/78 sm:text-base">Temukan barang dari seller lokal. Mau ikut jualan? Produkmu tampil di marketplace sekaligus punya website toko sendiri.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link className="inline-flex items-center justify-center gap-2 rounded-full bg-[#cfff43] px-6 py-4 text-[10px] font-black text-[#1a1424] transition hover:-translate-y-1 hover:bg-white" href="/shop"><ShoppingBag size={17}/> Jelajahi NEMU <ArrowRight size={15}/></Link>
              <a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 bg-white/10 px-6 py-4 text-[10px] font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15" href="#jadwal-onboarding"><Store size={17}/> Mulai jualan</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-[8px] font-black uppercase tracking-[.11em] text-white/68">
              <span>100+ seller</span><span>Produk lokal</span><span>Baru + preloved</span>
            </div>
          </div>

          <div className="relative min-h-[560px] lg:min-h-0">
            <Link className="group absolute inset-x-0 top-0 h-[330px] overflow-hidden rounded-[26px] bg-[#292331] sm:h-[390px] lg:bottom-[26%] lg:h-auto" href="/shop">
              <img className="size-full object-cover transition duration-700 group-hover:scale-105" src="/collection-fashion-v1.jpg" alt="Pilihan fashion dari seller NEMU"/>
              <span className="absolute inset-0 bg-gradient-to-t from-[#17131f]/90 via-transparent to-black/10"/>
              <span className="absolute left-5 top-5 rounded-full bg-[#ff6d57] px-4 py-2 text-[8px] font-black uppercase tracking-[.1em]">Lagi ramai</span>
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4"><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#cfff43]">Seller lokal pilihan</p><h2 className="mt-1 text-3xl font-black tracking-[-.05em] sm:text-4xl">Fashion yang lagi dicari.</h2></div><span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-[#704bfd]"><ArrowRight size={18}/></span></div>
            </Link>
            <Link className="group absolute bottom-0 left-0 h-[205px] w-[48.5%] overflow-hidden rounded-[24px] bg-[#292331]" href="/shop">
              <img className="size-full object-cover transition duration-700 group-hover:scale-105" src="/collection-gadget-v1.jpg" alt="Gadget pilihan di NEMU"/>
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>
              <div className="absolute inset-x-4 bottom-4"><p className="text-[7px] font-black uppercase tracking-[.12em] text-[#cfff43]">Baru masuk</p><h3 className="mt-1 text-lg font-black">HP & gadget</h3></div>
            </Link>
            <Link className="group absolute bottom-0 right-0 h-[205px] w-[48.5%] overflow-hidden rounded-[24px] bg-[#292331]" href="/shop">
              <img className="size-full object-cover transition duration-700 group-hover:scale-105" src="/collection-beauty-v1.jpg" alt="Produk beauty pilihan di NEMU"/>
              <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"/>
              <div className="absolute inset-x-4 bottom-4"><p className="text-[7px] font-black uppercase tracking-[.12em] text-[#cfff43]">Seller pilihan</p><h3 className="mt-1 text-lg font-black">Beauty</h3></div>
            </Link>
            <div className="absolute right-4 top-[300px] z-20 rounded-[18px] bg-white px-4 py-3 text-[#17131f] shadow-[0_16px_36px_rgba(18,16,22,.25)] sm:top-[360px] lg:right-[-18px] lg:top-[49%]"><p className="text-[7px] font-black uppercase tracking-[.12em] text-[#704bfd]">Tayang di NEMU</p><p className="mt-1 text-[10px] font-black">Produk seller, siap dilihat buyer.</p></div>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="market-categories-heading">
      <div className="mx-auto max-w-[1320px]">
        <div className="grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          <div><p className="text-[9px] font-black uppercase tracking-[.16em] text-[#704bfd]">Ada banyak yang bisa ditemukan</p><h2 id="market-categories-heading" className="mt-3 max-w-[560px] text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-6xl">Cari yang kamu suka. Ketemu yang nggak disangka.</h2></div>
          <div className="lg:pb-2"><p className="max-w-xl text-sm leading-7 text-[#66636d]">Fashion, gadget, beauty, kebutuhan rumah, sampai barang preloved dari seller yang sudah tayang di NEMU.</p><Link className="mt-5 inline-flex items-center gap-2 text-[9px] font-black text-[#704bfd]" href="/shop"><Search size={14}/> Cari semua produk <ArrowRight size={14}/></Link></div>
        </div>
        <div className="mt-10 grid auto-rows-[190px] grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-[220px]">
          {marketCategories.map((item)=><Link className={`group relative overflow-hidden rounded-[26px] bg-[#28232f] ${item.className}`} href="/shop" key={item.name}>
            <img className="size-full object-cover transition duration-700 group-hover:scale-105" src={item.image} alt={item.name}/>
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/5 to-transparent"/>
            <div className="absolute inset-x-5 bottom-5 pr-12 text-white"><p className="text-[7px] font-black uppercase tracking-[.12em] text-white/68">{item.note}</p><h3 className="mt-1 text-2xl font-black tracking-[-.04em]">{item.name}</h3></div>
            <span className="absolute bottom-5 right-5 grid size-10 place-items-center rounded-full bg-white text-[#704bfd] transition group-hover:rotate-[-12deg]"><ArrowRight size={17}/></span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="overflow-hidden bg-[#f2eff8] py-20 lg:py-28" aria-labelledby="fresh-products-heading">
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.16em] text-[#704bfd]">Baru tayang di NEMU</p><h2 id="fresh-products-heading" className="mt-3 text-4xl font-black tracking-[-.055em] sm:text-6xl">Yang baru masuk. Yang bikin pengin lihat.</h2></div><Link className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black text-[#704bfd]" href="/shop">Lihat semuanya <ArrowRight size={14}/></Link></div>
      </div>
      <div className="mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-6 sm:px-6 lg:px-[max(24px,calc((100vw-1320px)/2))]">
        {freshProducts.map((product,index)=><article className={`group min-w-[230px] snap-start overflow-hidden rounded-[26px] bg-white shadow-[0_18px_50px_rgba(48,33,92,.09)] sm:min-w-[270px] ${index===0?'lg:min-w-[360px]':''}`} key={product.name}>
          <div className={`relative overflow-hidden bg-[#e9e5f0] ${index===0?'aspect-[4/5]':'aspect-square'}`}><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-105" role="img" aria-label={product.name} style={{backgroundImage:"url('/product-sprite-a-v1.png')",backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-4 top-4 rounded-full bg-[#704bfd] px-3 py-2 text-[7px] font-black text-white">{product.badge}</span></div>
          <div className="p-5"><h3 className="text-[11px] font-black leading-5">{product.name}</h3><div className="mt-3 flex items-end justify-between gap-3"><span><strong className="block text-lg">{product.price}</strong>{product.old&&<small className="mt-1 block text-[8px] text-[#8b8791] line-through">{product.old}</small>}</span><Link className="grid size-10 place-items-center rounded-full bg-[#cfff43] text-[#17131f]" href="/shop"><ArrowRight size={16}/></Link></div></div>
        </article>)}
      </div>
    </section>

    <section className="bg-[#121016] px-4 py-16 text-white sm:px-6 lg:py-24" aria-labelledby="whatnot-seller-heading">
      <div className="mx-auto grid max-w-[1320px] gap-8 overflow-hidden rounded-[32px] bg-[#1c1822] p-5 sm:p-8 lg:grid-cols-[1.1fr_.9fr] lg:p-10">
        <div className="relative min-h-[430px] overflow-hidden rounded-[26px] bg-[#ece8f4] sm:min-h-[540px]"><img className="size-full object-cover object-top" src="/tracker-official-shop-proof.png" alt="Contoh website official seller NEMU"/><span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#121016] via-[#121016]/75 to-transparent px-6 pb-6 pt-24"><b className="text-2xl font-black">TRACKER Official Shop</b><small className="mt-2 block text-[9px] text-white/65">Website toko seller yang langsung siap dibagikan.</small></span></div>
        <div className="flex flex-col justify-center py-4 lg:px-6"><p className="text-[9px] font-black uppercase tracking-[.16em] text-[#cfff43]">Mau ikut jualan?</p><h2 id="whatnot-seller-heading" className="mt-4 text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl">Produkmu tampil. Tokomu ikut jadi.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/68">Sekali upload, produkmu bisa ditemukan di NEMU Marketplace dan punya halaman toko sendiri. NEMU juga bantu konten, promo, pembayaran, dan pengiriman.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row"><a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#cfff43] px-6 py-4 text-[10px] font-black text-[#17131f]" href="#jadwal-onboarding"><Store size={17}/> Buka toko di NEMU <ArrowRight size={15}/></a><a className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-4 text-[10px] font-black text-white" href="#download-app"><Download size={16}/> Download aplikasi</a></div></div>
      </div>
    </section>
  </>;
}
