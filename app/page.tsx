import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, Camera, Check, CirclePlus,
  ListChecks, MessageCircleMore, PackageCheck, Rocket,
  Search, ShieldCheck, Sparkles, Store,
} from 'lucide-react';
import { Footer, Header, MobileDock } from './components';
import { ScrollDepth, SectionTransitions } from './experience';

const faq = [
  ['NEMU itu tempat belanja apa?', 'Marketplace buat cari barang baru, preloved, dan produk seller lokal. Kamu bisa cari seperti biasa atau ceritain barang yang kamu mau.'],
  ['Kalau nggak tahu nama barangnya gimana?', 'Nggak masalah. Tulis fungsi, warna, ukuran, atau budgetmu. Contohnya: “tas kerja muat laptop, warna hitam, 300 ribuan”.'],
  ['Seller di NEMU bisa dipercaya?', 'Profil toko, lokasi, rating, dan tanda verifikasi ditampilkan biar kamu bisa menilai sebelum membeli.'],
  ['Aku punya barang. Bisa ikut jualan?', 'Bisa. Unggah foto, kasih harga, lalu NEMU bantu merapikan nama, deskripsi, dan kategorinya sebelum tayang.'],
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

      <section className="bg-white px-4 py-16 sm:px-6 lg:py-24" id="seller-tools" aria-labelledby="snap-list-sell">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_.7fr]">
            <div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#5b3fd5]">Cara paling sat set buat mulai</p><h2 id="snap-list-sell" className="mt-3 font-[var(--font-display)] text-4xl font-black tracking-[-.055em] sm:text-5xl">Snap. List. Sell.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#665e70]">Jepret barangnya. NEMU bantu bikin nama, deskripsi, dan kategorinya. Kamu tinggal cek harga, lalu tayangkan.</p></div>
            <a className="inline-flex w-fit items-center gap-2 rounded-full bg-[#292333] px-5 py-3.5 text-[9px] font-black text-white lg:ml-auto" href="https://seller.nemu-ai.com/register">Coba gratis <ArrowRight size={14}/></a>
          </div>
          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            {[[Camera,'01 · SNAP','Foto barang pakai HP','Nggak perlu studio. Cahaya dekat jendela juga jadi.'],[ListChecks,'02 · LIST','Listing dibantu NEMU','Nama, deskripsi, dan kategori dirapihin biar enak dibaca.'],[Rocket,'03 · SELL','Cek, kasih harga, tayang','Kamu tetap pegang harga, stok, dan isi tokomu.']].map(([Icon,step,title,copy],index)=>{const I=Icon as typeof Camera;return <article className={`relative overflow-hidden rounded-[28px] border p-6 sm:p-7 ${index===1?'border-[#6b4de6] bg-[#5b3fd5] text-white shadow-[0_20px_50px_rgba(91,63,213,.22)]':'border-[#e4dfeb] bg-[#faf9fb] text-[#292333]'}`} key={step as string}><span className={`grid size-12 place-items-center rounded-2xl ${index===1?'bg-[#dfff5b] text-[#34233d]':'bg-[#eeeaff] text-[#5b3fd5]'}`}><I size={21}/></span><p className={`mt-8 text-[8px] font-black uppercase tracking-[.14em] ${index===1?'text-[#dfff5b]':'text-[#5b3fd5]'}`}>{step as string}</p><h3 className="mt-2 text-2xl font-black tracking-[-.04em]">{title as string}</h3><p className={`mt-3 text-[10px] leading-6 ${index===1?'text-[#ece7ff]':'text-[#706879]'}`}>{copy as string}</p>{index===1&&<span className="absolute -bottom-12 -right-10 size-36 rounded-full border-[22px] border-white/10"/>}</article>})}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-24" id="seller-pricing" aria-labelledby="seller-pricing-heading">
        <div className="overflow-hidden rounded-[36px] border border-[#ded7e8] bg-[#f0edff] shadow-[0_24px_70px_rgba(54,41,92,.10)]">
          <div className="grid lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex flex-col justify-between bg-[#292333] p-7 text-white sm:p-10 lg:p-12">
              <div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#dfff5b]">Harga seller NEMU</p><h2 id="seller-pricing-heading" className="mt-3 text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Mulai dulu.<br/>Bayar setelah laku.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#d9d2df]">Gratis sampai pecah telur. Setelah ada penjualan pertama, lanjut <b className="text-white">Rp199 ribu/bulan</b>.</p></div>
              <div className="mt-8 rounded-[24px] bg-[#dfff5b] p-5 text-[#292333]"><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#526816]">Mulai dari</p><div className="mt-1 flex items-end gap-2"><strong className="text-4xl font-black tracking-[-.055em]">Rp0</strong><span className="pb-1 text-[9px] font-bold">sampai pecah telur</span></div><a className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#5b3fd5] px-5 py-3 text-[9px] font-black text-white" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={14}/></a></div>
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Kalau gabung, dapat apa?</p><h3 className="mt-2 text-3xl font-black tracking-[-.045em]">Semua alat jualan, satu tempat.</h3></div><span className="w-fit rounded-full bg-[#f0edff] px-4 py-2 text-[8px] font-black text-[#5b3fd5]">Lanjut Rp199 ribu/bulan</span></div>
              <div className="mt-7 overflow-hidden rounded-[24px] border border-[#e4dfeb]">
                {[['Website toko siap pakai','Toko online milikmu, langsung bisa dibagi'],['Snap · List · Sell','Foto barang, listing dibantu, lalu tayang'],['AI foto produk','Bikin foto jualan lebih menarik'],['Konten Reels & TikTok','Ubah foto jadi bahan konten pendek'],['Pembayaran DOKU','Buyer bisa bayar online'],['30+ pilihan kurir','Atur pengiriman dalam satu tempat'],['Data penjualan','Lihat channel mana yang paling cuan']].map(([feature,detail],index)=><div className={`grid gap-2 px-5 py-4 sm:grid-cols-[.8fr_1.2fr] sm:items-center ${index?'border-t border-[#ece8f1]':''}`} key={feature}><b className="flex items-center gap-2 text-[10px]"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#dfff5b] text-[#405408]"><Check size={13}/></span>{feature}</b><span className="pl-8 text-[9px] leading-5 text-[#716979] sm:pl-0">{detail}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#f3f0f7] px-4 py-16 sm:px-6 lg:py-24">
        <ScrollDepth className="mx-auto max-w-[1240px]">
          <div className="depth-stage relative min-h-[650px] overflow-hidden rounded-[38px] bg-[#24152f] text-white shadow-[0_28px_90px_rgba(42,22,58,.22)]">
            <span className="absolute inset-0 bg-cover bg-[62%_center] lg:bg-center" role="img" aria-label="Buyer dan seller di creative market Bandung" style={{backgroundImage:"url('/trust-market-bandung-v1.jpg')"}}/>
            <span className="absolute inset-0 bg-gradient-to-r from-[#1d1127]/98 via-[#261631]/78 to-[#261631]/5"/>
            <div className="relative z-10 flex min-h-[650px] max-w-[570px] flex-col justify-center p-7 sm:p-10 lg:p-14"><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#dfff5b]">Bandung · creative market</p><h2 className="mt-3 text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Lihat barangnya.<br/>Kenal sellernya.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#eee8f2]">Harga, kondisi, lokasi, dan profil seller kelihatan dari awal. Jadi kamu bisa cek dulu sebelum mutusin.</p><div className="mt-8 grid gap-2 sm:grid-cols-3">{[[ShieldCheck,'Bayar lebih tenang'],[BadgeCheck,'Seller gampang dicek'],[PackageCheck,'Kondisi nggak samar']].map(([Icon,title])=>{const I=Icon as typeof ShieldCheck;return <div className="depth-layer-front rounded-[18px] border border-white/15 bg-white/12 p-3 backdrop-blur-md" key={title as string}><I className="text-[#dfff5b]" size={17}/><b className="mt-3 block text-[9px] leading-4 text-white">{title as string}</b></div>})}</div></div>
          </div>
        </ScrollDepth>
      </section>

      <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="faq-heading">
        <ScrollDepth className="mx-auto max-w-[1240px]">
          <div className="depth-stage grid items-stretch gap-7 lg:grid-cols-[.72fr_1.28fr]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[32px] shadow-[0_28px_70px_rgba(54,41,92,.16)] lg:min-h-[560px]"><span className="absolute inset-0 bg-cover bg-center" role="img" aria-label="Tiga teman mencari produk bersama di Jakarta" style={{backgroundImage:"url('/faq-jakarta-friends-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-t from-[#25162f]/92 via-transparent to-transparent"/><span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-4 py-2.5 text-[8px] font-black text-[#5b3fd5] shadow-lg backdrop-blur">Jakarta · habis pulang kerja</span><div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/15 bg-[#2a1935]/80 p-5 text-white backdrop-blur"><Sparkles className="text-[#dfff5b]" size={18}/><b className="mt-3 block text-xl leading-tight">Nggak tahu nama barangnya?<br/>Ceritain aja.</b></div></div>
            <div className="relative [perspective:1200px]"><div className="depth-layer-back absolute inset-0 translate-x-5 translate-y-5 rounded-[30px] bg-[#dfff5b]"/><div className="depth-layer-mid absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-[30px] bg-[#b8a9ff]"/><div className="depth-layer-front relative overflow-hidden rounded-[30px] border border-[#e1dbe8] bg-white p-6 shadow-[0_28px_80px_rgba(54,41,92,.16)] sm:p-8"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-xl bg-[#f0edff] text-[#5b3fd5]"><MessageCircleMore size={15}/></span><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#5b3fd5]">Yang sering ditanyain</p></div><h2 id="faq-heading" className="mt-3 text-3xl font-black tracking-[-.05em] sm:text-4xl">Biar nggak kepikiran terus.</h2><div className="mt-6 divide-y divide-[#e8e4f0]">{faq.map(([question,answer])=><details className="faq-item group" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[11px] font-black"><span>{question}</span><CirclePlus className="shrink-0 text-[#5b3fd5]" size={19}/></summary><p className="pb-5 pr-8 text-[10px] leading-6 text-[#6d6577]">{answer}</p></details>)}</div><div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[22px] bg-[#dfff5b] p-5 sm:flex-row sm:items-center"><div><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#526816]">Udah kebayang?</p><h3 className="mt-1 text-xl font-black tracking-[-.035em]">Bilang aja. Biar NEMU nyari.</h3></div><Link className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#5b3fd5] px-5 py-3 text-[9px] font-black text-white" href="/ai-mode">Mulai <ArrowRight size={14}/></Link></div></div></div>
          </div>
        </ScrollDepth>
      </section>
      <Footer />
    </main>
  );
}
