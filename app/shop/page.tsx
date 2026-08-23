import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, ChevronRight,
  MapPin, PackageCheck, RotateCcw,
  ShieldCheck, Sparkles, Star, Store,
  Zap,
} from 'lucide-react';
import { BannerCarousel } from '../banner-carousel';
import { Footer, Header, MobileDock } from '../components';
import { SectionTransitions } from '../experience';
import { CartButton, CategoryFilter, FavoriteButton, ShopSearch } from './shop-client';

export const metadata: Metadata = {
  title: 'Belanja Barang Baru, Preloved, dan Produk Lokal',
  description: 'Cari produk dengan nama barang atau bahasa sehari-hari. Lihat harga, kondisi, lokasi, rating, serta info seller dengan jelas di NEMU AI.',
  alternates: { canonical: '/shop' },
  openGraph: { title: 'Belanja Online Lebih Gampang | NEMU AI', description: 'Ketik barangnya atau ceritain maumu. NEMU bantu nyaring pilihan yang paling masuk.', url: '/shop', images: ['/og.png'] },
};

const categories = [
  {name:'Fashion',position:'0% 0%'},
  {name:'HP & gadget',position:'50% 0%'},
  {name:'Beauty',position:'100% 0%'},
  {name:'Rumah',position:'0% 100%'},
  {name:'Elektronik',position:'50% 100%'},
  {name:'Preloved',position:'100% 100%'},
];

const products = [
  {name:'Vivo V11 Pro 6/64',price:'Rp950.000',old:'Rp1.050.000',badge:'Hemat 10%',note:'Preloved · Kondisi bagus',city:'Klaten',image:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/7008540f-9a9c-4917-9368-55b0e5335908.png'},
  {name:'GM Shoes Flat Sandal',price:'Rp70.000',old:'',badge:'Produk lokal',note:'Baru · Banyak warna',city:'Jakarta',image:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/b65c53f0-b789-4dd0-84a0-ba883188e12a.jpg'},
  {name:'Kopi Gayo Arabika 250 gr',price:'Rp95.000',old:'Rp110.000',badge:'Hemat 14%',note:'Baru · Best seller',city:'Aceh',image:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&auto=format&fit=crop&q=82'},
  {name:'Arunika Work Tote',price:'Rp749.000',old:'',badge:'Seller pilihan',note:'Kulit asli · Buatan lokal',city:'Bandung',image:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=82'},
  {name:'Keramik Mug Handmade',price:'Rp180.000',old:'',badge:'Produk lokal',note:'Baru · Buatan tangan',city:'Bandung',image:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=700&auto=format&fit=crop&q=82'},
  {name:'Aluna Linen Dress',price:'Rp385.000',old:'Rp429.000',badge:'Hemat 10%',note:'Baru · 4 warna',city:'Yogyakarta',image:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&auto=format&fit=crop&q=82'},
  {name:'Kacamata Acetate Unisex',price:'Rp420.000',old:'',badge:'Toko resmi',note:'Baru · Garansi toko',city:'Bandung',image:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=82'},
  {name:'Tenun Sumba Laras',price:'Rp650.000',old:'',badge:'Buatan lokal',note:'Baru · Buatan tangan',city:'NTT',image:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&auto=format&fit=crop&q=82'},
  {name:'Vivo Y12s 3/32',price:'Rp750.000',old:'Rp850.000',badge:'Hemat 12%',note:'Preloved · Kondisi bagus',city:'Klaten',image:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/5b7d6a77-a594-420a-907c-edeafcdab0c4.png'},
  {name:'Jam Tangan Minimal',price:'Rp1.250.000',old:'',badge:'Toko resmi',note:'Baru · Garansi toko',city:'Jakarta',image:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&auto=format&fit=crop&q=82'},
];

const shops = [
  {name:'AREI',category:'Outdoor & travel',initial:'AR',tone:'bg-[#237454]',score:'4,9'},
  {name:'TRACKER',category:'Sepatu & sandal',initial:'TR',tone:'bg-[#5b3fd5]',score:'4,8'},
  {name:'Cartenz',category:'Gear pendakian',initial:'CA',tone:'bg-[#d9652b]',score:'4,9'},
  {name:'KRIYA.',category:'Produk lokal pilihan',initial:'KR',tone:'bg-[#292333]',score:'4,9'},
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
      <Header />
      <MobileDock />
      <SectionTransitions />

      <div className="border-b border-[#e8e4f0] bg-white px-4 py-2.5 sm:px-6">
        <div className="mx-auto flex max-w-[1240px] items-center justify-between gap-4 text-[9px] font-bold text-[#625b6d]"><span className="flex items-center gap-2"><MapPin size={14} className="text-[#5b3fd5]"/> Dikirim ke <b className="text-[#292333]">Indonesia</b></span><span className="hidden sm:block">Ada masalah? <a className="font-black text-[#5b3fd5]" href="https://shop.nemu-ai.com/help">Kami bantu</a></span></div>
      </div>

      <div className="mx-auto max-w-[1240px] px-4 pt-5 sm:px-6">
        <BannerCarousel />
      </div>

      <section className="mx-auto max-w-[1240px] px-4 py-4 sm:px-6" id="tanya-nemu">
        <article className="rounded-[24px] border border-[#e3dfea] bg-white p-6 sm:p-8">
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.12em] text-[#5b3fd5]"><Sparkles size={13}/> Cari seperti biasa, atau ceritain maumu</div>
          <h1 className="mt-3 max-w-3xl font-[var(--font-display)] text-4xl font-black leading-[1.02] tracking-[-.05em] sm:text-5xl">Lagi nyari apa hari ini?</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#6d6577]">Ketik nama barang, budget, warna, atau kebutuhanmu. Yang paling sesuai kami taruh di depan.</p>
          <div className="mt-5"><ShopSearch/></div>
        </article>
      </section>

      <section className="mx-auto mt-4 max-w-[1240px] px-4 sm:px-6" id="kategori">
        <div className="rounded-[22px] border border-[#e8e4f0] bg-white p-5 sm:p-6"><div className="flex items-end justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#7446ff]">Galeri kategori</p><h2 className="mt-1 text-xl font-black tracking-[-.035em]">Mau lihat yang mana?</h2></div><a className="hidden items-center gap-1 text-[9px] font-black text-[#7446ff] sm:flex" href="#produk">Semua produk <ChevronRight size={13}/></a></div><div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4 md:grid-rows-[150px_150px]">{categories.filter(({name})=>name!=='Elektronik').map(({name,position})=>{const featured=name==='Fashion';return <a className={`group relative isolate min-h-36 overflow-hidden rounded-[18px] bg-[#ece8f4] transition hover:-translate-y-0.5 hover:shadow-lg ${featured?'col-span-2 md:row-span-2':''}`} href="#produk" key={name}><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-[1.035]" role="img" aria-label={`Kategori ${name}`} style={{backgroundImage:"url('/category-sprite-v1.png')",backgroundSize:'300% 200%',backgroundPosition:position}}/><span className="absolute inset-0 bg-gradient-to-t from-[#17151d]/75 via-transparent to-transparent"/><span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4"><b className={`${featured?'text-xl':'text-sm'} text-white`}>{name}</b><span className="grid size-7 place-items-center rounded-full bg-white text-[#292333]"><ChevronRight size={13}/></span></span></a>})}</div></div>
      </section>

      <section className="mx-auto mt-4 max-w-[1240px] px-4 sm:px-6" aria-labelledby="promo-heading">
        <div className="rounded-[26px] border border-[#e8e4f0] bg-white p-5 sm:p-7"><div className="flex items-end justify-between gap-4"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-2xl bg-[#fff0da] text-[#cf6800]"><Zap size={19} fill="currentColor"/></span><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#cf6800]">Harga lagi enak</p><h2 id="promo-heading" className="text-2xl font-black tracking-[-.04em]">Jangan kelamaan mikirnya</h2></div></div><a className="hidden items-center gap-1 text-[9px] font-black text-[#5b3fd5] sm:flex" href="#produk">Lihat semua <ChevronRight size={13}/></a></div><div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.slice(0,5).map((product,index)=><article className={`group min-w-0 ${index>1?'hidden sm:block':''} ${index>2?'sm:hidden lg:block':''}`} key={product.name}><div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4f2f6]"><Image className="object-cover transition duration-300 group-hover:scale-105" src={product.image} alt={product.name} fill sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 220px"/><span className="absolute left-2 top-2 rounded-full bg-[#ff7d45] px-2.5 py-1 text-[7px] font-black text-white">{product.badge}</span></div><h3 className="mt-3 line-clamp-2 min-h-9 text-[10px] font-extrabold leading-4">{product.name}</h3><strong className="mt-1 block text-sm text-[#5b3fd5]">{product.price}</strong>{product.old&&<del className="text-[7px] text-[#81798d]">{product.old}</del>}</article>)}</div></div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6" aria-labelledby="toko-heading">
        <div className="flex items-end justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Seller pilihan</p><h2 id="toko-heading" className="mt-1 text-3xl font-black tracking-[-.045em]">Tokonya jelas. Belanjanya lega.</h2></div><a className="hidden items-center gap-1 text-[9px] font-black text-[#5b3fd5] sm:flex" href="https://shop.nemu-ai.com/toko">Lihat semua toko <ChevronRight size={13}/></a></div>
        <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">{shops.map(shop=><article className="rounded-[24px] border border-[#e8e4f0] bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-violet-950/5" key={shop.name}><div className="flex items-start justify-between"><span className={`grid size-12 place-items-center rounded-2xl text-sm font-black text-white ${shop.tone}`}>{shop.initial}</span><span className="flex items-center gap-1 rounded-full bg-[#eaf8f1] px-2 py-1 text-[7px] font-black text-[#237454]"><BadgeCheck size={11}/> Terverifikasi</span></div><h3 className="mt-8 text-lg font-black">{shop.name}</h3><p className="mt-1 text-[8px] text-[#716979]">{shop.category}</p><p className="mt-3 flex items-center gap-1 text-[8px] font-bold"><Star size={11} fill="#f7b928" className="text-[#f7b928]"/> {shop.score} · respon cepat</p></article>)}</div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6" id="produk" aria-labelledby="produk-heading">
        <div className="rounded-[28px] border border-[#e8e4f0] bg-white p-5 sm:p-7"><div className="flex items-end justify-between"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Buat kamu</p><h2 id="produk-heading" className="mt-1 text-3xl font-black tracking-[-.045em]">Kayaknya kamu bakal suka</h2></div></div><div className="mt-6"><CategoryFilter categories={['Semua','Lagi rame','Di bawah Rp200 ribu','Produk lokal','Preloved']}/></div><div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.map(product=><article className="group min-w-0 overflow-hidden rounded-2xl border border-[#ebe7ef] bg-white transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5" key={product.name}><div className="relative aspect-square overflow-hidden bg-[#f4f2f6]"><Image className="object-cover transition duration-300 group-hover:scale-105" src={product.image} alt={product.name} fill sizes="(max-width: 640px) 44vw, (max-width: 1024px) 30vw, 220px"/><span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[7px] font-black text-[#5b3fd5] shadow-sm">{product.badge}</span><FavoriteButton name={product.name}/></div><div className="p-3"><h3 className="line-clamp-2 min-h-9 text-[10px] font-extrabold leading-4">{product.name}</h3><p className="mt-1 text-[7px] text-[#81798d]">{product.note}</p><div className="mt-2"><strong className="text-sm text-[#5b3fd5]">{product.price}</strong>{product.old&&<del className="ml-2 text-[7px] text-[#81798d]">{product.old}</del>}</div><p className="mt-2 flex items-center gap-1 text-[7px] text-[#716979]"><Star size={10} fill="#f7b928" className="text-[#f7b928]"/> 4,9 · {product.city}</p><CartButton name={product.name}/></div></article>)}</div><button className="mx-auto mt-8 flex items-center gap-2 rounded-full border border-[#cfc6e2] bg-white px-6 py-3 text-[9px] font-black text-[#5b3fd5] transition hover:bg-[#f0edff]">Lihat barang lainnya <ChevronRight size={14}/></button></div>
      </section>

      <section className="border-y border-[#e8e4f0] bg-white px-4 py-8 sm:px-6"><div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-6 lg:grid-cols-4">{[[ShieldCheck,'Bayar lebih tenang','Pembayaran diproses mengikuti alur pesanan.'],[BadgeCheck,'Seller gampang dicek','Profil dan tanda verifikasi terlihat jelas.'],[RotateCcw,'Ada masalah? Lapor.','Buka pesanan lalu kirim laporan.'],[PackageCheck,'Kondisi ditulis dari awal','Baru atau preloved nggak dibuat samar.']].map(([Icon,title,copy])=>{const I=Icon as typeof ShieldCheck;return <div className="flex gap-3" key={title as string}><span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-[#f0edff] text-[#5b3fd5]"><I size={18}/></span><div><b className="block text-[9px]">{title as string}</b><p className="mt-1 text-[7px] leading-4 text-[#716979]">{copy as string}</p></div></div>})}</div></section>

      <section className="bg-[#292333] px-4 py-16 text-white sm:px-6 lg:py-20"><div className="mx-auto grid max-w-[1240px] items-end gap-10 lg:grid-cols-[1fr_.7fr]"><div><span className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[.14em] text-[#dfff5b]"><Store size={13}/> Mau ikut jualan?</span><h2 className="mt-3 font-[var(--font-display)] text-5xl font-black leading-[.92] tracking-[-.06em] sm:text-6xl">Foto barangnya.<br/>Kasih harga. Beres.</h2></div><div><p className="text-sm leading-7 text-[#d5cfdd]">NEMU bantu merapikan nama, deskripsi, dan kategori. Kamu tinggal cek lalu mulai jualan.</p><a className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#dfff5b] px-5 py-3.5 text-[9px] font-black text-[#292333]" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={15}/></a></div></div></section>
      <Footer />
    </main>
  );
}
