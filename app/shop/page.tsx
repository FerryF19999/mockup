import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, ChevronRight,
  Footprints,
  MapPin, PackageCheck, RotateCcw,
  MountainSnow, Palette, Search, ShieldCheck, Star, Store,
  TentTree,
  Zap,
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
  {label:'LAGI FYP',title:'Yang rame di timeline, ada di sini.',image:'/campaign-fyp-v1.jpg',tone:'from-[#3d1b69]/95'},
  {label:'GRATIS ONGKIR',title:'Belanjanya jalan. Ongkirnya dibantu.',image:'/campaign-free-shipping-v1.jpg',tone:'from-[#273783]/95'},
  {label:'GAJIAN SALE',title:'Baru gajian? Pilih yang kepakai.',image:'/campaign-payday-v1.jpg',tone:'from-[#19583d]/95'},
  {label:'9.9 SALE',title:'Tanggal cantik. Harganya ikut cakep.',image:'/campaign-99-v1.jpg',tone:'from-[#7a1649]/95'},
];

const products = [
  {name:'Vivo V11 Pro 6/64',price:'Rp950.000',old:'Rp1.050.000',badge:'Hemat 10%',note:'Preloved · Kondisi bagus',city:'Klaten',sprite:'/product-sprite-a-v1.png',position:'0% 0%',liveUrl:'https://shop.nemu-ai.com/products/store/lenteraawan/vivo-v11-pro-6-64'},
  {name:'GM Shoes Flat Sandal',price:'Rp70.000',old:'',badge:'Produk lokal',note:'Baru · Banyak warna',city:'Jakarta',sprite:'/product-sprite-a-v1.png',position:'50% 0%',liveUrl:'https://shop.nemu-ai.com/products/store/gms-shoes/gm-shoes-sepatu-sandal-wanita-flatshoes-simple'},
  {name:'Kopi Gayo Arabika 250 gr',price:'Rp95.000',old:'Rp110.000',badge:'Hemat 14%',note:'Baru · Best seller',city:'Aceh',sprite:'/product-sprite-a-v1.png',position:'100% 0%'},
  {name:'Arunika Work Tote',price:'Rp749.000',old:'',badge:'Seller pilihan',note:'Kulit asli · Buatan lokal',city:'Bandung',sprite:'/product-sprite-a-v1.png',position:'0% 100%'},
  {name:'Keramik Mug Handmade',price:'Rp180.000',old:'',badge:'Produk lokal',note:'Baru · Buatan tangan',city:'Bandung',sprite:'/product-sprite-a-v1.png',position:'50% 100%'},
  {name:'Aluna Linen Dress',price:'Rp385.000',old:'Rp429.000',badge:'Hemat 10%',note:'Baru · 4 warna',city:'Yogyakarta',sprite:'/product-sprite-a-v1.png',position:'100% 100%'},
  {name:'Kacamata Acetate Unisex',price:'Rp420.000',old:'',badge:'Toko resmi',note:'Baru · Garansi toko',city:'Bandung',sprite:'/product-sprite-b-v1.png',position:'0% 0%'},
  {name:'Tenun Sumba Laras',price:'Rp650.000',old:'',badge:'Buatan lokal',note:'Baru · Buatan tangan',city:'NTT',sprite:'/product-sprite-b-v1.png',position:'50% 0%'},
  {name:'Vivo Y12s 3/32',price:'Rp750.000',old:'Rp850.000',badge:'Hemat 12%',note:'Preloved · Kondisi bagus',city:'Klaten',sprite:'/product-sprite-b-v1.png',position:'100% 0%'},
  {name:'Jam Tangan Minimal',price:'Rp1.250.000',old:'',badge:'Toko resmi',note:'Baru · Garansi toko',city:'Jakarta',sprite:'/product-sprite-b-v1.png',position:'0% 100%'},
];

const shops = [
  {name:'AREI',category:'Outdoor & travel',icon:MountainSnow,tone:'bg-[#237454]',accent:'text-[#dfff5b]',score:'4,9'},
  {name:'TRACKER',category:'Sepatu & sandal',icon:Footprints,tone:'bg-[#5b3fd5]',accent:'text-white',score:'4,8'},
  {name:'Cartenz',category:'Gear pendakian',icon:TentTree,tone:'bg-[#d9652b]',accent:'text-[#fff1c9]',score:'4,9'},
  {name:'KRIYA.',category:'Produk lokal pilihan',icon:Palette,tone:'bg-[#292333]',accent:'text-[#d8c9ff]',score:'4,9'},
];

export default function ShopPage() {
  const shopJsonLd = {
    '@context': 'https://schema.org', '@type': 'CollectionPage', name: 'Belanja Online di NEMU AI',
    description: 'Koleksi produk lokal, barang baru, dan preloved dengan pencarian berbantuan AI.',
    url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/shop', inLanguage: 'id-ID',
    mainEntity: { '@type': 'ItemList', itemListElement: products.map((product, index) => ({ '@type': 'ListItem', position: index + 1, name: product.name, url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/shop' })) },
  };

  return (
    <main className="overflow-hidden bg-[#f6f5f2] text-[#292333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(shopJsonLd) }} />
      <Header showSearch={false} />
      <MobileDock />
      <SectionTransitions />

      <div className="border-b border-[#e8e4f0] bg-white px-4 py-2.5 sm:px-6">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 text-[9px] font-bold text-[#625b6d]"><span className="flex items-center gap-2"><MapPin size={14} className="text-[#5b3fd5]"/> Dikirim ke <b className="text-[#292333]">Indonesia</b></span><span className="hidden sm:block">Ada masalah? <a className="font-black text-[#5b3fd5]" href="https://shop.nemu-ai.com/help">Kami bantu</a></span></div>
      </div>

      <section className="mx-auto max-w-[1240px] px-4 pb-5 pt-8 sm:px-6" aria-labelledby="shop-campaigns">
        <div className="mb-6 flex items-end justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Promo pilihan</p><h1 id="shop-campaigns" className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Lagi ada apa di NEMU?</h1></div><span className="hidden text-[9px] font-bold text-[#81798d] sm:block">Banner berganti otomatis · bisa digeser</span></div>
        <BannerCarousel />
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-8 sm:px-6" aria-labelledby="promo-gallery-heading">
        <div className="flex items-end justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Promo hari ini</p><h2 id="promo-gallery-heading" className="mt-2 text-3xl font-black tracking-[-.045em]">Pilih promonya. Baru pilih barangnya.</h2></div><span className="hidden text-[9px] font-bold text-[#81798d] sm:block">Geser ke samping →</span></div>
        <div className="mt-6 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">{promoGallery.map((promo,index)=><a className={`group relative isolate min-h-[260px] min-w-[270px] snap-start overflow-hidden rounded-[28px] shadow-[0_18px_45px_rgba(45,30,65,.14)] sm:min-w-[360px] ${index===0?'sm:min-w-[470px]':''}`} href="#produk" key={promo.label}><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{backgroundImage:`url('${promo.image}')`}}/><span className={`absolute inset-0 bg-gradient-to-r ${promo.tone} via-black/30 to-transparent`}/><span className="relative flex min-h-[260px] max-w-[270px] flex-col justify-end p-6 text-white"><small className="w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1.5 text-[8px] font-black tracking-[.14em] backdrop-blur">{promo.label}</small><b className="mt-3 text-2xl leading-[1.02] tracking-[-.04em]">{promo.title}</b><span className="mt-4 inline-flex items-center gap-2 text-[9px] font-black">Lihat pilihan <ArrowRight size={13}/></span></span></a>)}</div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-4 sm:px-6" id="tanya-nemu">
        <article className="rounded-[24px] border border-[#e3dfea] bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.12em] text-[#5b3fd5]"><Search size={13}/> Cari produk</div>
          <h2 className="mt-3 max-w-3xl font-[var(--font-display)] text-4xl font-black leading-[1.02] tracking-[-.05em] sm:text-5xl">Barangnya apa?</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6d6577]">Kalau sudah tahu nama barangnya, ketik di sini. Kalau masih bingung namanya, Mode AI punya halaman sendiri.</p>
          <div className="mt-5"><ShopSearch/></div>
        </article>
      </section>

      <section className="mx-auto mt-4 max-w-[1240px] px-4 sm:px-6" id="kategori">
        <div className="rounded-[22px] border border-[#e8e4f0] bg-white p-5 sm:p-6"><div className="flex items-end justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#7446ff]">Belanja pakai mood</p><h2 className="mt-1 text-xl font-black tracking-[-.035em]">Mau lihat yang mana dulu?</h2></div><a className="hidden items-center gap-1 text-[9px] font-black text-[#7446ff] sm:flex" href="#produk">Semua produk <ChevronRight size={13}/></a></div><div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-[150px_150px]">{categories.filter(({name})=>name!=='Elektronik').map(({name,image,focus})=>{const featured=name==='Fashion';return <a className={`group relative isolate min-h-36 overflow-hidden rounded-[18px] bg-[#ece8f4] transition hover:-translate-y-0.5 hover:shadow-lg ${featured?'col-span-2 md:row-span-2':''}`} href="#produk" key={name}><span className="absolute inset-0 bg-cover bg-no-repeat transition duration-500 group-hover:scale-[1.035]" role="img" aria-label={`Kategori ${name}`} style={{backgroundImage:`url('${image}')`,backgroundPosition:focus}}/><span className="absolute inset-0 bg-gradient-to-t from-[#17151d]/75 via-transparent to-transparent"/><span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4"><b className={`${featured?'text-xl':'text-sm'} text-white`}>{name}</b><span className="grid size-7 place-items-center rounded-full bg-white text-[#292333]"><ChevronRight size={13}/></span></span></a>})}</div></div>
      </section>

      <section className="mx-auto mt-4 max-w-[1240px] px-4 sm:px-6" aria-labelledby="shop-picks">
        <a className="group relative isolate block min-h-[390px] overflow-hidden rounded-[28px] bg-[#17151d] text-white shadow-[0_20px_60px_rgba(35,24,50,.14)]" href="#produk"><span className="absolute inset-0 bg-cover bg-[64%_center] transition duration-700 group-hover:scale-[1.025] sm:bg-center" role="img" aria-label="Koleksi gadget dan audio pilihan NEMU" style={{backgroundImage:"url('/collection-gadget-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-r from-[#17151d]/98 via-[#17151d]/72 to-transparent sm:via-[#17151d]/20"/><span className="relative flex min-h-[390px] max-w-[500px] flex-col justify-center p-7 sm:p-10 lg:p-12"><small className="font-black uppercase tracking-[.15em] text-[#dfff5b]">NEMU PICKS · GADGET</small><h2 id="shop-picks" className="mt-4 text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-5xl">Naikin mood.<br/>Nggak harus mahal.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/75">Headphone, aksesori, sampai gadget harian yang beneran kepakai.</p><span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black text-[#292333]">Lihat pilihannya <ArrowRight size={14}/></span></span></a>
      </section>

      <section className="mx-auto mt-4 max-w-[1240px] px-4 sm:px-6" aria-labelledby="promo-heading">
        <div className="rounded-[26px] border border-[#e8e4f0] bg-white p-5 sm:p-7"><div className="flex items-end justify-between gap-4"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-2xl bg-[#fff0da] text-[#cf6800]"><Zap size={19} fill="currentColor"/></span><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#cf6800]">Lagi rame</p><h2 id="promo-heading" className="text-2xl font-black tracking-[-.04em]">Banyak yang lagi ngincer ini</h2></div></div><a className="hidden items-center gap-1 text-[9px] font-black text-[#5b3fd5] sm:flex" href="#produk">Lihat semua <ChevronRight size={13}/></a></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.slice(0,5).map((product,index)=><article className={`group min-w-0 ${index>1?'hidden sm:block':''} ${index>2?'sm:hidden lg:block':''}`} key={product.name}><div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-300 group-hover:scale-105" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-2 top-2 rounded-full bg-[#ff7d45] px-2.5 py-1 text-[7px] font-black text-white">{product.badge}</span></div><h3 className="mt-3 line-clamp-2 min-h-9 text-[10px] font-extrabold leading-4">{product.name}</h3><strong className="mt-1 block text-sm text-[#5b3fd5]">{product.price}</strong>{product.old&&<del className="text-[7px] text-[#81798d]">{product.old}</del>}<ProductQuickView {...product}/></article>)}</div></div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6" aria-labelledby="toko-heading">
        <div className="flex items-end justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Seller pilihan</p><h2 id="toko-heading" className="mt-1 text-3xl font-black tracking-[-.045em]">Tokonya jelas. Belanjanya lega.</h2></div><a className="hidden items-center gap-1 text-[9px] font-black text-[#5b3fd5] sm:flex" href="https://shop.nemu-ai.com/toko">Lihat semua toko <ChevronRight size={13}/></a></div>
        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">{shops.map(shop=>{const ShopIcon=shop.icon;return <article className="rounded-[24px] border border-[#e8e4f0] bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/5" key={shop.name}><div className="flex items-start justify-between"><span className={`relative grid size-14 place-items-center overflow-hidden rounded-[18px] shadow-sm ${shop.tone} ${shop.accent}`}><span className="absolute -right-3 -top-3 size-9 rounded-full border border-white/20 bg-white/10"/><ShopIcon size={27} strokeWidth={1.8}/></span><span className="flex items-center gap-1 rounded-full bg-[#eaf8f1] px-2 py-1 text-[7px] font-black text-[#237454]"><BadgeCheck size={11}/> Terverifikasi</span></div><h3 className="mt-7 text-lg font-black">{shop.name}</h3><p className="mt-1 text-[8px] text-[#716979]">{shop.category}</p><p className="mt-3 flex items-center gap-1 text-[8px] font-bold"><Star size={11} fill="#f7b928" className="text-[#f7b928]"/> {shop.score} · respon cepat</p></article>})}</div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6" id="produk" aria-labelledby="produk-heading">
        <div className="rounded-[28px] border border-[#e8e4f0] bg-white p-5 sm:p-7"><div className="flex items-end justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Buat kamu</p><h2 id="produk-heading" className="mt-1 text-3xl font-black tracking-[-.045em]">Kayaknya kamu bakal suka</h2></div></div><div className="mt-6"><CategoryFilter categories={['Semua','Lagi rame','Di bawah Rp200 ribu','Produk lokal','Preloved']}/></div><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.map(product=><article className="group min-w-0 overflow-hidden rounded-2xl border border-[#ebe7ef] bg-white transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5" key={product.name}><div className="relative aspect-square overflow-hidden bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-300 group-hover:scale-105" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[7px] font-black text-[#5b3fd5] shadow-sm">{product.badge}</span><FavoriteButton name={product.name}/></div><div className="p-3"><h3 className="line-clamp-2 min-h-9 text-[10px] font-extrabold leading-4">{product.name}</h3><p className="mt-1 text-[7px] text-[#81798d]">{product.note}</p><div className="mt-2"><strong className="text-sm text-[#5b3fd5]">{product.price}</strong>{product.old&&<del className="ml-2 text-[7px] text-[#81798d]">{product.old}</del>}</div><p className="mt-2 flex items-center gap-1 text-[7px] text-[#716979]"><Star size={10} fill="#f7b928" className="text-[#f7b928]"/> 4,9 · {product.city}</p><ProductQuickView {...product}/><CartButton name={product.name}/></div></article>)}</div><button className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-[#cfc6e2] bg-white px-6 py-3 text-[9px] font-black text-[#5b3fd5] transition hover:bg-[#f0edff]">Lihat barang lainnya <ChevronRight size={14}/></button></div>
      </section>

      <section className="border-y border-[#e8e4f0] bg-white px-4 py-8 sm:px-6"><div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 lg:grid-cols-4">{[[ShieldCheck,'Bayar lebih tenang','Pembayaran diproses mengikuti alur pesanan.'],[BadgeCheck,'Seller gampang dicek','Profil dan tanda verifikasi terlihat jelas.'],[RotateCcw,'Ada masalah? Lapor.','Buka pesanan lalu kirim laporan.'],[PackageCheck,'Kondisi ditulis dari awal','Baru atau preloved nggak dibuat samar.']].map(([Icon,title,copy])=>{const I=Icon as typeof ShieldCheck;return <div className="flex gap-3" key={title as string}><span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#f0edff] text-[#5b3fd5]"><I size={18}/></span><div><b className="block text-[9px]">{title as string}</b><p className="mt-1 text-[7px] leading-4 text-[#716979]">{copy as string}</p></div></div>})}</div></section>

      <section className="bg-[#292333] px-4 py-16 text-white sm:px-6 lg:py-20"><div className="mx-auto grid max-w-[1240px] items-end gap-10 lg:grid-cols-[1fr_.7fr]"><div><span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-[#dfff5b]"><Store size={13}/> Mau ikut jualan?</span><h2 className="mt-3 font-[var(--font-display)] text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-6xl">Foto barangnya.<br/>Kasih harga. Beres.</h2></div><div><p className="text-sm leading-7 text-[#d5cfdd]">NEMU bantu merapikan nama, deskripsi, dan kategori. Kamu tinggal cek lalu mulai jualan.</p><a className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#dfff5b] px-5 py-3.5 text-[9px] font-black text-[#292333]" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={15}/></a></div></div></section>
      <Footer />
    </main>
  );
}
