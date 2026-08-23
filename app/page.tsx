import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, Camera, Check, ChevronRight, CirclePlus,
  HeartHandshake, MessageCircleMore, PackageCheck,
  Search, ShieldCheck, Sparkles, Store,
} from 'lucide-react';
import { Footer, Header, MobileDock } from './components';
import { SectionTransitions, ThreeUiParticleNetwork } from './experience';
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

const miniProducts = products.slice(0, 3);

const categories = [
  { name: 'Fashion', position: '0% 0%' },
  { name: 'HP & gadget', position: '50% 0%' },
  { name: 'Beauty', position: '100% 0%' },
  { name: 'Rumah', position: '0% 100%' },
  { name: 'Elektronik', position: '50% 100%' },
  { name: 'Preloved', position: '100% 100%' },
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
        <div className="grid min-h-[420px] overflow-hidden rounded-[26px] border border-[#e8e4f0] bg-white lg:grid-cols-[1.04fr_.96fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            <p className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[.12em] text-[#5b3fd5]"><Sparkles size={13}/> Cari barang lebih gampang</p>
            <h1 className="max-w-xl font-[var(--font-display)] text-[46px] font-black leading-[.98] tracking-[-.055em] text-[#292333] sm:text-6xl lg:text-[64px]">Nyari barang?<br/><span className="text-[#5b3fd5]">Bilang aja.</span></h1>
            <p className="mt-5 max-w-lg text-sm font-medium leading-7 text-[#625b6d]">Tulis nama barangnya atau ceritain maumu. NEMU bantu pilihkan yang sesuai budget dan kebutuhanmu.</p>
            <form className="mt-6 flex max-w-xl items-center rounded-[16px] border border-[#bbb0ce] bg-[#faf9fb] p-1.5 transition focus-within:border-[#5b3fd5] focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100" action="/shop" role="search"><Search className="ml-3 shrink-0 text-[#5b3fd5]" size={18}/><input className="min-w-0 flex-1 bg-transparent px-3 py-3 text-xs font-medium outline-none placeholder:text-[#81798d]" name="q" placeholder="Contoh: kado buat ibu, 200 ribuan" aria-label="Ceritakan barang yang kamu cari"/><button className="inline-flex h-10 shrink-0 items-center gap-2 rounded-xl bg-[#5b3fd5] px-4 text-[9px] font-black text-white" type="submit">Cari <ArrowRight size={14}/></button></form>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[8px] font-bold text-[#625b6d]">{['Harga jelas','Seller bisa dicek','Baru + preloved'].map(item=><span className="flex items-center gap-1.5" key={item}><Check size={15} className="rounded-full bg-[#dfff5b] p-1 text-[#292333]"/>{item}</span>)}</div>
          </div>
          <div className="relative isolate flex min-h-[350px] items-center overflow-hidden bg-[#f1eeff] p-6 sm:p-8 lg:min-h-full">
            <div className="absolute -right-20 -top-20 -z-10 size-72 rounded-full bg-[#5b3fd5] opacity-10"/>
            <div className="w-full"><div className="mb-4 flex items-center justify-between"><b className="text-[10px] text-[#292333]">Pilihan yang lagi dicari</b><Link className="flex items-center gap-1 text-[9px] font-black text-[#5b3fd5]" href="/shop#produk">Lihat semua <ChevronRight size={13}/></Link></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">{miniProducts.map((product,index)=><article className={`overflow-hidden rounded-2xl border border-white bg-white shadow-[0_10px_28px_rgba(54,41,92,.10)] ${index===2?'hidden sm:block lg:hidden xl:block':''}`} key={product.name}><div className="aspect-[1.08] w-full bg-cover bg-center bg-no-repeat" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><div className="p-3 text-[#292333]"><h3 className="truncate text-[9px] font-extrabold">{product.name}</h3><strong className="mt-1 block text-xs text-[#5b3fd5]">{product.price}</strong><ProductQuickView {...product}/></div></article>)}</div><div className="mt-3 rounded-xl border border-[#ddd6ef] bg-white/70 px-4 py-3 text-[8px] font-bold text-[#625b6d]">Produk yang cocok muncul lebih dulu. Nggak perlu buka banyak tab.</div></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e4f0] bg-white px-4 py-5 sm:px-6" aria-label="Keunggulan NEMU">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-5 lg:grid-cols-4">
          {[[Search,'Cari pakai bahasa sehari-hari'],[PackageCheck,'Barang baru dan preloved'],[BadgeCheck,'Info seller gampang dicek'],[Store,'Seller lokal bisa ikut jualan']].map(([Icon,label])=>{const I=Icon as typeof Search;return <div className="flex items-center gap-3" key={label as string}><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f0edff] text-[#5b3fd5]"><I size={17}/></span><b className="text-[10px] leading-4 text-[#4d4656]">{label as string}</b></div>})}
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-20" id="kategori">
        <div className="flex items-end justify-between gap-5"><div><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Mulai dari sini</p><h2 className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Mau lihat yang mana?</h2></div><Link className="hidden items-center gap-1 text-[10px] font-black text-[#5b3fd5] sm:flex" href="/shop">Semua kategori <ChevronRight size={15}/></Link></div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-[190px_190px]">{categories.filter(({name})=>name!=='Elektronik').map(({name,position})=>{const featured=name==='Fashion';return <Link className={`group relative isolate overflow-hidden rounded-[22px] bg-[#ece8f4] transition duration-300 hover:-translate-y-1 hover:shadow-xl ${featured?'col-span-2 aspect-[1.55] md:row-span-2 md:aspect-auto':''}`} href="/shop" key={name}><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-500 group-hover:scale-[1.035]" role="img" aria-label={`Kategori ${name}`} style={{backgroundImage:"url('/category-sprite-v1.png')",backgroundSize:'300% 200%',backgroundPosition:position}}/><span className="absolute inset-0 bg-gradient-to-t from-[#17151d]/75 via-transparent to-transparent"/><span className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 sm:p-5"><span><small className="block text-[7px] font-black uppercase tracking-[.12em] text-white/70">Jelajahi</small><b className={`${featured?'text-2xl':'text-base'} mt-1 block text-white`}>{name}</b></span><span className="grid size-8 place-items-center rounded-full bg-white text-[#292333]"><ChevronRight size={15}/></span></span></Link>})}</div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-6 lg:pb-20" aria-labelledby="pilihan-visual">
        <div className="mb-7 flex items-end justify-between gap-5"><div><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Pilih suasananya</p><h2 id="pilihan-visual" className="mt-2 text-3xl font-black tracking-[-.045em] sm:text-4xl">Lagi pengin belanja yang mana?</h2></div></div>
        <div className="grid gap-4 lg:grid-cols-[1.15fr_.85fr] lg:grid-rows-[205px_205px]">
          <Link className="group relative isolate min-h-[300px] overflow-hidden rounded-[28px] lg:row-span-2" href="/shop#produk"><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.025]" style={{backgroundImage:"url('/banner-local-v1.png')"}}/><span className="absolute inset-0 bg-gradient-to-r from-[#25382e]/80 via-[#25382e]/25 to-transparent"/><span className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9"><small className="font-black uppercase tracking-[.13em] text-[#dfff5b]">Buatan lokal</small><h3 className="mt-2 max-w-sm text-3xl font-black tracking-[-.045em]">Bagusnya dekat. Ketemunya di NEMU.</h3><span className="mt-5 inline-flex items-center gap-2 text-[9px] font-black">Lihat produknya <ArrowRight size={14}/></span></span></Link>
          <Link className="group relative isolate min-h-[220px] overflow-hidden rounded-[28px]" href="/shop#produk"><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.025]" style={{backgroundImage:"url('/banner-shipping-v1.png')"}}/><span className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/45 to-transparent"/><span className="relative flex h-full max-w-[270px] flex-col justify-end p-7 text-[#393047]"><small className="font-black uppercase tracking-[.13em] text-[#5b3fd5]">Pesanan pertama</small><h3 className="mt-2 text-2xl font-black tracking-[-.04em]">Ongkirnya kami bantu.</h3></span></Link>
          <Link className="group relative isolate min-h-[220px] overflow-hidden rounded-[28px]" href="/shop#produk"><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.025]" style={{backgroundImage:"url('/banner-preloved-v1.png')"}}/><span className="absolute inset-0 bg-gradient-to-r from-[#5f3f61]/80 via-[#5f3f61]/20 to-transparent"/><span className="relative flex h-full max-w-[270px] flex-col justify-end p-7 text-white"><small className="font-black uppercase tracking-[.13em] text-[#ffd9e9]">Preloved pilihan</small><h3 className="mt-2 text-2xl font-black tracking-[-.04em]">Masih cakep. Lebih hemat.</h3></span></Link>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-20" aria-labelledby="lagi-rame">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex items-end justify-between gap-5"><div><span className="inline-flex rounded-full bg-[#fff0da] px-3 py-1.5 text-[8px] font-black text-[#a95a00]">LAGI RAME</span><h2 id="lagi-rame" className="mt-3 text-3xl font-black tracking-[-.045em] sm:text-4xl">Banyak yang lagi ngincer ini</h2><p className="mt-2 text-sm text-[#6d6577]">Dari gadget sampai barang buatan seller lokal.</p></div><Link className="hidden items-center gap-1 text-[10px] font-black text-[#5b3fd5] sm:flex" href="/shop">Lihat lebih banyak <ChevronRight size={15}/></Link></div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">{products.map((product,index)=><article className={`group min-w-0 ${index>3?'hidden lg:block':''}`} key={product.name}><div className="relative aspect-square overflow-hidden rounded-2xl bg-[#f4f2f6]"><span className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-300 group-hover:scale-105" role="img" aria-label={product.name} style={{backgroundImage:`url('${product.sprite}')`,backgroundSize:'300% 200%',backgroundPosition:product.position}}/><span className="absolute left-2 top-2 rounded-full bg-white/95 px-2.5 py-1 text-[7px] font-black text-[#5b3fd5] shadow-sm">{product.badge}</span></div><h3 className="mt-3 line-clamp-2 text-[11px] font-extrabold leading-5">{product.name}</h3><strong className="mt-1 block text-sm text-[#5b3fd5]">{product.price}</strong><p className="mt-1 text-[8px] text-[#7a7284]">{product.note}</p><ProductQuickView {...product}/></article>)}</div>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1240px] gap-5 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
        <div className="rounded-[30px] bg-[#292333] p-7 text-white sm:p-10 lg:p-12">
          <span className="grid size-12 place-items-center rounded-2xl bg-[#dfff5b] text-[#292333]"><MessageCircleMore size={22}/></span>
          <p className="mt-10 text-[10px] font-black uppercase tracking-[.14em] text-[#dfff5b]">Nggak tahu nama barangnya?</p>
          <h2 className="mt-3 max-w-xl font-[var(--font-display)] text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-6xl">Ceritain aja.<br/>NEMU ngerti.</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-[#d5cfdd]">Mau sepatu buat kuliah, kado ulang tahun, atau HP sesuai budget? Tulis seperti lagi chat. Hasilnya dibikin lebih ringkas.</p>
          <Link className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#5b3fd5] px-5 py-3.5 text-[10px] font-black text-white" href="/shop#tanya-nemu">Coba cari sekarang <ArrowRight size={15}/></Link>
        </div>
        <div className="rounded-[30px] border border-[#e7e2ed] bg-[#f0edff] p-6 sm:p-8 lg:p-10">
          <p className="text-[9px] font-black text-[#5b3fd5]">CONTOH PENCARIAN</p>
          <div className="mt-5 rounded-2xl bg-white p-5 shadow-sm"><p className="text-sm font-bold leading-6">“Cari tas kerja hitam yang muat laptop, budget 300 ribuan.”</p></div>
          <div className="mt-4 space-y-3">{['Budget di bawah Rp300 ribu','Warna hitam','Muat laptop','Cocok buat kerja'].map((item,index)=><div className="flex items-center gap-3 rounded-2xl bg-white/80 p-3" key={item}><span className="grid size-7 place-items-center rounded-full bg-[#dfff5b] text-[8px] font-black">{index+1}</span><b className="text-[10px] text-[#4d4656]">{item}</b></div>)}</div>
        </div>
      </section>

      <section className="bg-[#5b3fd5] px-4 py-16 text-white sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[.85fr_1.15fr]">
          <div><p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[.14em] text-[#dfff5b]"><Store size={15}/> Punya barang buat dijual?</p><h2 className="mt-3 font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Foto barang.<br/>Kasih harga.<br/>Gas jualan.</h2><p className="mt-6 max-w-lg text-sm leading-7 text-violet-100">NEMU bantu merapikan nama, deskripsi, dan kategori. Kamu tetap pegang harga dan isi tokomu.</p><a className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#dfff5b] px-5 py-3.5 text-[10px] font-black text-[#292333]" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={15}/></a></div>
          <div className="grid gap-3 sm:grid-cols-2">{[[Camera,'Unggah foto','Foto dari HP juga boleh.'],[Sparkles,'Dibantu dirapikan','Nama dan deskripsi jadi lebih enak dibaca.'],[Store,'Atur tokomu','Harga dan stok tetap kamu yang pegang.'],[HeartHandshake,'Ketemu pembeli','Produk lebih gampang dicari sesuai kebutuhan.']].map(([Icon,title,copy])=>{const I=Icon as typeof Camera;return <article className="rounded-3xl bg-white p-6 text-[#292333]" key={title as string}><span className="grid size-10 place-items-center rounded-2xl bg-[#f0edff] text-[#5b3fd5]"><I size={19}/></span><h3 className="mt-8 text-lg font-black">{title as string}</h3><p className="mt-2 text-[10px] leading-5 text-[#716979]">{copy as string}</p></article>})}</div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
          <div><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Biar belanjanya tenang</p><h2 className="mt-3 text-4xl font-black tracking-[-.05em] sm:text-5xl">Sebelum beli,<br/>cek dulu semuanya.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#6d6577]">Harga, kondisi, lokasi, dan info seller dibuat gampang dibaca. Jadi keputusan tetap di tanganmu.</p></div>
          <div className="grid gap-3 sm:grid-cols-3">{[[ShieldCheck,'Bayar lebih aman','Pembayaran diteruskan setelah pesanan berjalan sesuai proses.'],[BadgeCheck,'Seller kelihatan jelas','Cek profil, rating, lokasi, dan tanda verifikasi.'],[PackageCheck,'Kondisi nggak samar','Barang baru atau preloved ditulis dari awal.']].map(([Icon,title,copy])=>{const I=Icon as typeof ShieldCheck;return <article className="rounded-3xl border border-[#e8e4f0] bg-white p-6" key={title as string}><span className="grid size-10 place-items-center rounded-2xl bg-[#eff9d2] text-[#55720f]"><I size={19}/></span><h3 className="mt-8 text-lg font-black">{title as string}</h3><p className="mt-2 text-[10px] leading-5 text-[#716979]">{copy as string}</p></article>})}</div>
        </div>
      </section>

      <section className="border-t border-[#e8e4f0] bg-white px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Yang sering ditanyain</p><h2 id="faq-heading" className="mt-3 text-4xl font-black tracking-[-.05em] sm:text-5xl">Masih kepikiran<br/>sesuatu?</h2></div><div className="divide-y divide-[#e8e4f0] border-y border-[#e8e4f0]">{faq.map(([question,answer],index)=><details className="faq-item group" open={index===0} key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-sm font-black"><span>{question}</span><CirclePlus className="shrink-0 text-[#5b3fd5]" size={20}/></summary><p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#6d6577]">{answer}</p></details>)}</div></div>
      </section>

      <section className="bg-[#dfff5b] px-4 py-16 text-center sm:px-6 lg:py-20"><p className="text-[10px] font-black uppercase tracking-[.14em] text-[#4e6314]">Udah kebayang mau cari apa?</p><h2 className="mt-3 font-[var(--font-display)] text-5xl font-black tracking-[-.06em] text-[#292333] sm:text-7xl">Ketik aja. Biar NEMU yang nyari.</h2><Link className="mt-7 inline-flex items-center gap-3 rounded-full bg-[#5b3fd5] px-6 py-4 text-[10px] font-black text-white" href="/shop">Mulai belanja <ArrowRight size={16}/></Link></section>
      <Footer />
    </main>
  );
}
