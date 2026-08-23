import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, Check, ChevronRight, CirclePlus,
  MessageCircleMore, PackageCheck,
  Search, ShieldCheck, Sparkles, Store,
} from 'lucide-react';
import { Footer, Header, MobileDock } from './components';
import { ScrollDepth, SectionTransitions } from './experience';
import { ProductQuickView } from './product-quick-view';

const faq = [
  ['NEMU itu tempat belanja apa?', 'Marketplace buat cari barang baru, preloved, dan produk seller lokal. Kamu bisa cari seperti biasa atau ceritain barang yang kamu mau.'],
  ['Kalau nggak tahu nama barangnya gimana?', 'Nggak masalah. Tulis fungsi, warna, ukuran, atau budgetmu. Contohnya: “tas kerja muat laptop, warna hitam, 300 ribuan”.'],
  ['Seller di NEMU bisa dipercaya?', 'Profil toko, lokasi, rating, dan tanda verifikasi ditampilkan biar kamu bisa menilai sebelum membeli.'],
  ['Aku punya barang. Bisa ikut jualan?', 'Bisa. Unggah foto, kasih harga, lalu NEMU bantu merapikan nama, deskripsi, dan kategorinya sebelum tayang.'],
];

const products = [
  { name: 'Vivo V11 Pro 6/64', price: 'Rp950.000', note: 'Preloved · Klaten', sprite: '/product-sprite-a-v1.png', position: '0% 0%', badge: 'Hemat 10%', liveUrl: 'https://shop.nemu-ai.com/products/store/lenteraawan/vivo-v11-pro-6-64' },
  { name: 'GM Flat Sandal', price: 'Rp70.000', note: 'Baru · Jakarta', sprite: '/product-sprite-a-v1.png', position: '50% 0%', badge: 'Produk lokal', liveUrl: 'https://shop.nemu-ai.com/products/store/gms-shoes/gm-shoes-sepatu-sandal-wanita-flatshoes-simple' },
  { name: 'Kopi Gayo Arabika', price: 'Rp95.000', note: '250 gr · Aceh', sprite: '/product-sprite-a-v1.png', position: '100% 0%', badge: 'Banyak dicari' },
  { name: 'Arunika Work Tote', price: 'Rp749.000', note: 'Kulit asli · Bandung', sprite: '/product-sprite-a-v1.png', position: '0% 100%', badge: 'Seller pilihan' },
  { name: 'Mug keramik handmade', price: 'Rp180.000', note: 'Buatan tangan · Bandung', sprite: '/product-sprite-a-v1.png', position: '50% 100%', badge: 'Produk lokal' },
];

const collectionTiles = [
  { name: 'Fashion sehari-hari', note: 'Outfit enak dipakai', image: '/collection-fashion-v1.jpg', className: 'col-span-2 min-h-[330px] lg:row-span-2 lg:min-h-0' },
  { name: 'Gadget kepake', note: 'Bukan cuma buat gaya', image: '/collection-gadget-v1.jpg', className: 'col-span-2 min-h-[240px] lg:min-h-0' },
  { name: 'Rumah makin betah', note: 'Bikin sudut favorit', image: '/collection-home-v1.jpg', className: 'min-h-[230px] lg:min-h-0' },
  { name: 'Beauty & self-care', note: 'Waktunya rawat diri', image: '/collection-beauty-v1.jpg', className: 'min-h-[230px] lg:min-h-0' },
];

const campaigns = [
  { eyebrow:'FLASH SALE', title:'Harga turun. Jangan cuma dilihatin.', copy:'Pilihan hemat yang waktunya terbatas.', image:'/campaign-flash-sale-v1.jpg', position:'center', size:'cover', wash:'linear-gradient(90deg,rgba(187,48,25,.92) 0%,rgba(206,57,31,.68) 48%,rgba(206,57,31,0) 72%)' },
  { eyebrow:'LAGI FYP', title:'Yang rame, sekarang gampang ditemu.', copy:'Barang yang lagi sering muncul di timeline.', image:'/campaign-fyp-v1.jpg', position:'center', size:'cover', wash:'linear-gradient(90deg,rgba(70,33,116,.92) 0%,rgba(91,44,141,.64) 48%,rgba(91,44,141,0) 72%)' },
  { eyebrow:'GRATIS ONGKIR', title:'Belanjanya jalan. Ongkirnya dibantu.', copy:'Cek promo pengiriman buat pesananmu.', image:'/campaign-free-shipping-v1.jpg', position:'center', size:'cover', wash:'linear-gradient(90deg,rgba(45,55,141,.92) 0%,rgba(61,75,164,.62) 48%,rgba(61,75,164,0) 72%)' },
  { eyebrow:'GAJIAN SALE', title:'Baru gajian? Pilih yang kepakai.', copy:'Biar checkout-nya tetap masuk akal.', image:'/campaign-payday-v1.jpg', position:'center', size:'cover', wash:'linear-gradient(90deg,rgba(21,86,62,.92) 0%,rgba(31,105,73,.62) 48%,rgba(31,105,73,0) 72%)' },
  { eyebrow:'9.9', title:'Tanggal cantik. Harganya ikut cakep.', copy:'Kumpulin incaran sebelum kelewatan.', image:'/campaign-99-v1.jpg', position:'center', size:'cover', wash:'linear-gradient(90deg,rgba(129,18,73,.92) 0%,rgba(153,25,83,.62) 48%,rgba(153,25,83,0) 72%)' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'Organization', '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization', name: 'NEMU AI', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', logo: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/favicon.svg', sameAs: ['https://www.instagram.com/nemu_ai_/', 'https://www.tiktok.com/@nemu_ai_'] },
    { '@type': 'WebSite', '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#website', url: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/', name: 'NEMU AI', inLanguage: 'id-ID', publisher: { '@id': 'https://nemu-ai-redesign.openclawid6.chatgpt.site/#organization' }, potentialAction: { '@type': 'SearchAction', target: 'https://nemu-ai-redesign.openclawid6.chatgpt.site/shop?q={search_term_string}', 'query-input': 'required name=search_term_string' } },
    { '@type': 'FAQPage', mainEntity: faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
  ],
};

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#faf9f6] text-[#292333]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <MobileDock />
      <SectionTransitions />

      <section className="market-hero mx-auto max-w-[1240px] px-4 py-5 sm:px-6">
        <div className="grid min-h-[500px] overflow-hidden rounded-[28px] border border-[#e8e4f0] bg-white lg:grid-cols-[1.06fr_.94fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            <p className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[.12em] text-[#5b3fd5]"><Sparkles size={13}/> Marketplace + website jualan berbasis AI</p>
            <h1 className="max-w-xl font-[var(--font-display)] text-[43px] font-black leading-[.98] tracking-[-.055em] text-[#292333] sm:text-6xl lg:text-[61px]">Cari barang.<br/>Mulai jualan.<br/><span className="text-[#5b3fd5]">NEMU bantu.</span></h1>
            <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-[#625b6d]">Buyer tinggal bilang apa yang dicari. Seller langsung punya website, dibantu AI bikin konten, lalu bisa lihat channel mana yang paling cuan.</p>
            <div className="mt-6 flex flex-wrap gap-2"><Link className="inline-flex items-center gap-2 rounded-full bg-[#5b3fd5] px-5 py-3.5 text-[9px] font-black text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5" href="/shop">Mulai belanja <ArrowRight size={14}/></Link><a className="inline-flex items-center gap-2 rounded-full border border-[#bdb4cb] bg-white px-5 py-3.5 text-[9px] font-black text-[#3f3549] transition hover:border-[#5b3fd5] hover:text-[#5b3fd5]" href="https://seller.nemu-ai.com/register">Buka toko gratis <Store size={14}/></a></div>
            <form className="mt-5 flex max-w-xl items-center rounded-[16px] border border-[#bbb0ce] bg-[#faf9fb] p-1.5 transition focus-within:border-[#5b3fd5] focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100" action="/shop" role="search"><Search className="ml-3 shrink-0 text-[#5b3fd5]" size={18}/><input className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-medium outline-none placeholder:text-[#81798d]" name="q" placeholder="Mau cari apa? Ceritain aja…" aria-label="Ceritakan barang yang kamu cari"/><button className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-[#dfff5b] px-4 text-[9px] font-black text-[#34233d]" type="submit">Cari <ArrowRight size={14}/></button></form>
          </div>
          <div className="relative isolate min-h-[470px] overflow-hidden bg-[#d9d0ef] lg:min-h-full">
            <span className="absolute inset-0 bg-cover bg-center transition duration-700" role="img" aria-label="Pilihan produk fashion, gadget, rumah, dan beauty di NEMU" style={{backgroundImage:"url('/hero-marketplace-v1.jpg')"}}/>
            <span className="absolute inset-0 bg-gradient-to-t from-[#24152f]/90 via-[#24152f]/5 to-transparent"/>
            <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 text-[8px] font-black text-[#5b3fd5] shadow-lg backdrop-blur">BARU · PRELOVED · LOKAL</div>
            <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3"><Link className="rounded-[20px] border border-white/20 bg-[#5b3fd5]/92 p-4 text-white shadow-xl backdrop-blur" href="/shop"><span className="grid size-8 place-items-center rounded-xl bg-white/15"><Search size={15}/></span><p className="mt-3 text-[8px] font-black uppercase tracking-[.11em] text-[#dfff5b]">Buat buyer</p><b className="mt-1 block text-[11px] leading-5">Cari pakai bahasa sehari-hari.</b></Link><a className="rounded-[20px] bg-[#dfff5b]/95 p-4 text-[#34233d] shadow-xl backdrop-blur" href="https://seller.nemu-ai.com/register"><span className="grid size-8 place-items-center rounded-xl bg-white/55"><Store size={15}/></span><p className="mt-3 text-[8px] font-black uppercase tracking-[.11em] text-[#526816]">Buat seller</p><b className="mt-1 block text-[11px] leading-5">Website, AI, dan data jualan.</b></a></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e4f0] bg-white px-4 py-5 sm:px-6" aria-label="Keunggulan NEMU">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-5 lg:grid-cols-4">
          {[[Search,'Cari pakai bahasa sehari-hari'],[PackageCheck,'Barang baru dan preloved'],[BadgeCheck,'Info seller gampang dicek'],[Store,'Seller lokal bisa ikut jualan']].map(([Icon,label])=>{const I=Icon as typeof Search;return <div className="flex items-center gap-3" key={label as string}><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f0edff] text-[#5b3fd5]"><I size={17}/></span><b className="text-[10px] leading-4 text-[#4d4656]">{label as string}</b></div>})}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 lg:py-16" aria-labelledby="promo-campaigns">
        <div className="flex items-end justify-between gap-4"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Promo pilihan</p><h2 id="promo-campaigns" className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Lagi ada apa di NEMU?</h2></div><span className="hidden text-[9px] font-bold text-[#81798d] sm:block">Geser buat lihat semuanya →</span></div>
        <div className="mt-7 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none]">{campaigns.map(campaign=><Link className="group relative isolate min-h-[230px] min-w-[290px] snap-start overflow-hidden rounded-[26px] shadow-[0_16px_45px_rgba(54,41,92,.10)] sm:min-w-[390px]" href="/shop#produk" key={campaign.eyebrow}><span className="absolute inset-0 bg-no-repeat transition duration-700 group-hover:scale-[1.035]" style={{backgroundImage:`url('${campaign.image}')`,backgroundPosition:campaign.position,backgroundSize:campaign.size}}/><span className="absolute inset-0" style={{background:campaign.wash}}/><span className="relative flex h-full max-w-[260px] flex-col justify-end p-6 text-white"><small className="text-[8px] font-black uppercase tracking-[.14em] text-white/80">{campaign.eyebrow}</small><h3 className="mt-2 text-2xl font-black leading-[1.03] tracking-[-.045em]">{campaign.title}</h3><p className="mt-2 text-[9px] leading-5 text-white/80">{campaign.copy}</p><span className="mt-4 inline-flex items-center gap-2 text-[8px] font-black">Lihat promonya <ArrowRight size={13}/></span></span></Link>)}</div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-20" id="kategori">
        <div className="flex items-end justify-between gap-5"><div><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Belanja pakai mood</p><h2 className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Mau lihat yang mana dulu?</h2><p className="mt-2 text-sm text-[#6d6577]">Etalase besar, biar kamu nggak capek buka satu-satu.</p></div><Link className="hidden items-center gap-1 text-[10px] font-black text-[#5b3fd5] sm:flex" href="/shop">Semua kategori <ChevronRight size={15}/></Link></div>
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:grid-rows-[250px_250px]">{collectionTiles.map(({name,note,image,className})=><Link className={`group relative isolate overflow-hidden rounded-[26px] bg-[#ece8f4] transition duration-300 hover:-translate-y-1 hover:shadow-xl ${className}`} href="/shop" key={name}><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-700 group-hover:scale-[1.035]" role="img" aria-label={`Koleksi ${name}`} style={{backgroundImage:`url('${image}')`}}/><span className="absolute inset-0 bg-gradient-to-t from-[#17151d]/85 via-[#17151d]/5 to-transparent"/><span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 sm:p-6"><span><small className="inline-flex rounded-full bg-[#dfff5b] px-2.5 py-1 text-[7px] font-black uppercase tracking-[.12em] text-[#34233d] shadow-sm">Jelajahi</small><b className="mt-2 block text-lg text-white drop-shadow-md sm:text-2xl">{name}</b><span className="mt-1 block text-[8px] font-semibold text-white/80">{note}</span></span><span className="grid size-9 place-items-center rounded-full bg-white text-[#292333] shadow-lg"><ChevronRight size={16}/></span></span></Link>)}</div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6 lg:pb-20" aria-labelledby="pilihan-visual">
        <Link className="group relative isolate block min-h-[440px] overflow-hidden rounded-[34px] bg-[#17151d] text-white shadow-[0_24px_70px_rgba(35,24,50,.16)]" href="/shop#produk"><span className="absolute inset-0 bg-cover bg-[62%_center] transition duration-700 group-hover:scale-[1.025] sm:bg-center" role="img" aria-label="Koleksi gadget dan audio NEMU" style={{backgroundImage:"url('/collection-gadget-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-r from-[#17151d]/98 via-[#17151d]/70 to-transparent sm:via-[#17151d]/20"/><span className="relative flex min-h-[440px] max-w-[520px] flex-col justify-center p-7 sm:p-10 lg:p-14"><small className="font-black uppercase tracking-[.15em] text-[#dfff5b]">NEMU PICKS · GADGET</small><h2 id="pilihan-visual" className="mt-4 text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-5xl">Naikin mood.<br/>Nggak harus mahal.</h2><p className="mt-5 max-w-sm text-sm leading-7 text-white/75">Headphone, aksesori, sampai gadget harian yang beneran kepakai.</p><span className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black text-[#292333]">Lihat pilihannya <ArrowRight size={14}/></span></span></Link>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="lagi-rame">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-end justify-between gap-5"><div><span className="inline-flex rounded-full bg-[#fff0da] px-3 py-1.5 text-[8px] font-black text-[#a95a00]">LAGI RAME</span><h2 id="lagi-rame" className="mt-3 text-3xl font-black tracking-[-.045em] sm:text-4xl">Banyak yang lagi ngincer ini</h2><p className="mt-2 text-sm text-[#6d6577]">Dari gadget sampai barang buatan seller lokal.</p></div><Link className="hidden items-center gap-1 text-[10px] font-black text-[#5b3fd5] sm:flex" href="/shop">Lihat lebih banyak <ChevronRight size={15}/></Link></div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.map((product,index)=><article className={`group min-w-0 ${index>3?'hidden lg:block':''}`} key={product.name}><div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-300 group-hover:scale-105" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[7px] font-black text-[#5b3fd5] shadow-sm">{product.badge}</span></div><h3 className="mt-3 line-clamp-2 text-[11px] font-extrabold leading-5">{product.name}</h3><strong className="mt-1 block text-sm text-[#5b3fd5]">{product.price}</strong><p className="mt-1 text-[8px] text-[#7a7284]">{product.note}</p><ProductQuickView {...product}/></article>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-24">
        <div className="relative isolate min-h-[600px] overflow-hidden rounded-[34px] bg-[#2b1838] text-white shadow-[0_24px_80px_rgba(45,28,63,.18)] sm:min-h-[540px]">
          <span className="absolute inset-0 bg-cover bg-[68%_center] bg-no-repeat sm:bg-center" role="img" aria-label="Shopper memakai NEMU untuk mencari barang" style={{backgroundImage:"url('/ai-shopper-v1.png')"}}/>
          <span className="absolute inset-0 bg-gradient-to-r from-[#23142e]/98 via-[#2c1939]/80 to-[#2c1939]/5 sm:via-[#2c1939]/45"/>
          <div className="relative flex min-h-[600px] max-w-[610px] flex-col justify-center p-7 sm:min-h-[540px] sm:p-12 lg:p-16">
            <span className="grid size-12 place-items-center rounded-2xl bg-[#dfff5b] text-[#34233d] shadow-lg"><MessageCircleMore size={22}/></span>
            <p className="mt-8 text-[9px] font-black uppercase tracking-[.15em] text-[#dfff5b]">Nggak tahu nama barangnya?</p>
            <h2 className="mt-3 max-w-xl font-[var(--font-display)] text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-6xl">Ceritain aja.<br/>Biar NEMU nyari.</h2>
            <p className="mt-5 max-w-md text-sm font-medium leading-7 text-[#e7dfeb]">Sebut kebutuhan, budget, atau warnanya. Nggak perlu pakai kata-kata ribet.</p>
            <div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[8px] font-bold backdrop-blur">“Sepatu empuk buat kuliah”</span><span className="rounded-full border border-white/20 bg-white/10 px-3 py-2 text-[8px] font-bold backdrop-blur">“Kado ibu 200 ribuan”</span></div>
            <Link className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#6b4de6] px-6 py-4 text-[9px] font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#5c3ed2]" href="/ai-mode">Buka Mode AI <ArrowRight size={15}/></Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid overflow-hidden rounded-[34px] border border-[#e4dfeb] bg-white shadow-[0_20px_70px_rgba(54,41,92,.10)] lg:grid-cols-[1.08fr_.92fr]">
          <div className="min-h-[380px] bg-cover bg-center" role="img" aria-label="Seller memotret produk lokal untuk dijual" style={{backgroundImage:"url('/seller-campaign-v1.png')"}}/>
          <div className="flex flex-col justify-center bg-[#453173] p-7 text-white sm:p-10 lg:p-12">
            <p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.14em] text-[#dfff5b]"><Store size={14}/> Value buat seller</p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-5xl">Tambah channel jualan.<br/>Nggak tambah ribet.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#e5dcf2]">Langsung punya website siap pakai dan gratis sampai pecah telur. AI NEMU bantu bikin foto produk lebih menarik sampai jadi konten Reels atau TikTok.</p>
            <div className="mt-6 grid grid-cols-2 gap-2">{['Website siap pakai','Gratis sampai pecah telur','Bayar online via DOKU','30+ pilihan kurir'].map(item=><span className="rounded-2xl border border-white/15 bg-white/10 px-3 py-2.5 text-[8px] font-black" key={item}>{item}</span>)}</div>
            <a className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#dfff5b] px-5 py-3.5 text-[9px] font-black text-[#34233d]" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={15}/></a>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f3f0f7] px-4 py-16 sm:px-6 lg:py-24">
        <ScrollDepth className="mx-auto max-w-[1240px]">
          <div className="depth-stage relative grid min-h-[620px] overflow-hidden rounded-[38px] bg-[#24152f] p-7 text-white shadow-[0_28px_90px_rgba(42,22,58,.22)] sm:p-10 lg:grid-cols-[.72fr_1.28fr] lg:p-14">
            <span className="depth-float-soft absolute -left-16 -top-20 size-72 rounded-full bg-[#7658ef]/35 blur-2xl"/>
            <span className="absolute -bottom-32 right-10 size-[420px] rounded-full border border-[#dfff5b]/15"/>
            <span className="absolute -bottom-20 right-24 size-[320px] rounded-full border border-dashed border-white/10"/>
            <div className="relative z-20 flex flex-col justify-center lg:pr-10"><span className="mb-6 grid size-12 place-items-center rounded-[18px] bg-[#dfff5b] text-[#34233d] shadow-[0_14px_35px_rgba(223,255,91,.18)]"><Search size={21}/></span><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#dfff5b]">Belanja tanpa nebak-nebak</p><h2 className="mt-3 text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Kelihatan jelas.<br/>Jadi belinya lega.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#dcd3e4]">Harga, kondisi, dan sellernya kelihatan dari awal. Jadi kamu bisa cek dulu, baru mutusin.</p><div className="mt-7 flex items-center gap-3 text-[8px] font-black text-[#dfff5b]"><span className="h-px w-10 bg-[#dfff5b]"/> Scroll pelan, NEMU ikut gerak</div></div>
            <div className="depth-stage relative mt-8 min-h-[500px] lg:mt-0">
              <span className="depth-layer-back absolute inset-0 m-auto size-[330px] rounded-full bg-[#6b4de6]/25 blur-2xl sm:size-[420px]"/>
              <span className="depth-float-soft absolute inset-0 z-10 m-auto size-[300px] bg-contain bg-center bg-no-repeat drop-shadow-[0_30px_45px_rgba(0,0,0,.35)] sm:size-[400px]" role="img" aria-label="Ikon pencari NEMU" style={{backgroundImage:"url('/nemu-finder-v1.png')"}}/>
              {[[ShieldCheck,'Bayar lebih tenang','Alurnya kelihatan.','depth-layer-back','left-0 top-4'],[BadgeCheck,'Seller gampang dicek','Profil sampai lokasi.','depth-layer-mid','right-0 top-24'],[PackageCheck,'Kondisi nggak samar','Baru atau preloved.','depth-layer-front','bottom-6 left-8']].map(([Icon,title,copy,depth,position])=>{const I=Icon as typeof ShieldCheck;return <article className={`depth-interactive absolute z-20 flex w-[220px] items-center gap-3 rounded-[22px] border border-white/70 bg-white/95 p-4 text-[#332a3d] shadow-[0_22px_55px_rgba(15,7,24,.25)] backdrop-blur sm:w-[245px] ${depth as string} ${position as string}`} key={title as string}><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#eff9d2] text-[#55720f]"><I size={19}/></span><div><h3 className="text-[11px] font-black">{title as string}</h3><p className="mt-1 text-[8px] text-[#716979]">{copy as string}</p></div></article>})}
              <span className="depth-float-soft absolute bottom-10 right-5 z-30 grid size-11 place-items-center rounded-full bg-[#dfff5b] text-[#34233d] shadow-xl"><Sparkles size={18}/></span>
            </div>
          </div>
        </ScrollDepth>
      </section>

      <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="faq-heading">
        <ScrollDepth className="mx-auto max-w-[1240px]">
          <div className="depth-stage grid items-center gap-10 lg:grid-cols-[.72fr_1.28fr]">
            <div className="relative min-h-[400px] lg:min-h-[540px]">
              <span className="depth-layer-back absolute inset-0 m-auto size-[330px] rounded-full bg-[#efffb0] blur-sm sm:size-[410px]"/>
              <span className="depth-layer-mid absolute inset-0 m-auto size-[270px] rounded-full border-[34px] border-[#6b4de6]/15 sm:size-[350px]"/>
              <span className="depth-float-soft absolute inset-0 z-10 m-auto size-[310px] bg-contain bg-center bg-no-repeat drop-shadow-[0_35px_45px_rgba(82,57,150,.26)] sm:size-[420px]" role="img" aria-label="Teman pencari NEMU" style={{backgroundImage:"url('/nemu-finder-v1.png')"}}/>
              <div className="depth-layer-front absolute left-0 top-8 z-20 rounded-full border border-[#d9d2e5] bg-white px-4 py-3 text-[9px] font-black text-[#5b3fd5] shadow-xl">Tanya aja 👀</div>
              <div className="depth-layer-back absolute bottom-8 right-0 z-20 rounded-full bg-[#2c1c36] px-4 py-3 text-[9px] font-black text-white shadow-xl">Jawabannya singkat ✨</div>
            </div>
            <div className="relative [perspective:1200px]"><div className="depth-layer-back absolute inset-0 translate-x-5 translate-y-5 rounded-[30px] bg-[#dfff5b]"/><div className="depth-layer-mid absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[30px] bg-[#b8a9ff]"/><div className="depth-layer-front relative overflow-hidden rounded-[30px] border border-[#e1dbe8] bg-white p-6 shadow-[0_28px_80px_rgba(54,41,92,.16)] sm:p-8"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-xl bg-[#f0edff] text-[#5b3fd5]"><MessageCircleMore size={15}/></span><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Yang sering ditanyain</p></div><h2 id="faq-heading" className="mt-3 text-3xl font-black tracking-[-.05em] sm:text-4xl">Biar nggak kepikiran terus.</h2><div className="mt-6 divide-y divide-[#e8e4f0]">{faq.map(([question,answer])=><details className="faq-item group" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[11px] font-black"><span>{question}</span><CirclePlus className="shrink-0 text-[#5b3fd5]" size={19}/></summary><p className="pb-5 pr-8 text-[10px] leading-6 text-[#6d6577]">{answer}</p></details>)}</div><div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[22px] bg-[#dfff5b] p-5 sm:flex-row sm:items-center"><div><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#526816]">Udah kebayang?</p><h3 className="mt-1 text-xl font-black tracking-[-.035em]">Bilang aja. Biar NEMU nyari.</h3></div><Link className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#5b3fd5] px-5 py-3 text-[9px] font-black text-white" href="/ai-mode">Mulai <ArrowRight size={14}/></Link></div></div></div>
          </div>
        </ScrollDepth>
      </section>
      <Footer />
    </main>
  );
}
