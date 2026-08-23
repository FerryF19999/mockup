import Link from 'next/link';
import {
  ArrowRight, BadgeCheck, Camera, Check, CirclePlus,
  ListChecks, MessageCircleMore, PackageCheck, Rocket,
  Search, ShieldCheck, Sparkles, Store,
} from 'lucide-react';
import { Footer, Header, MobileDock } from './components';
import { PaymentMethods } from './payment-methods';

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
    <main className="overflow-hidden bg-[#FBFBFD] text-[#0B0B0E]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <MobileDock />

      <section className="market-hero mx-auto max-w-[1240px] px-4 py-5 sm:px-6">
        <div className="grid min-h-[500px] overflow-hidden rounded-[28px] border border-[#e8e4f0] bg-white lg:grid-cols-[1.06fr_.94fr]">
          <div className="flex flex-col justify-center px-6 py-10 sm:px-10 lg:px-14">
            <p className="mb-3 flex items-center gap-2 text-[9px] font-black uppercase tracking-[.12em] text-[#704BFD]"><Sparkles size={13}/> Marketplace + website jualan berbasis AI</p>
            <h1 className="max-w-xl font-[var(--font-display)] text-[43px] font-black leading-[.98] tracking-[-.055em] text-[#0B0B0E] sm:text-6xl lg:text-[61px]">Cari barang.<br/>Mulai jualan.<br/><span className="text-[#704BFD]">NEMU bantu.</span></h1>
            <p className="mt-5 max-w-xl text-sm font-medium leading-7 text-[#6B6B75]">Buyer tinggal bilang apa yang dicari. Seller langsung punya website, dibantu AI bikin konten, lalu bisa lihat channel mana yang paling cuan.</p>
            <div className="mt-6 flex flex-wrap gap-2"><Link className="inline-flex items-center gap-2 rounded-full bg-[#704BFD] px-5 py-3.5 text-[9px] font-black text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5" href="/shop">Mulai belanja <ArrowRight size={14}/></Link><a className="inline-flex items-center gap-2 rounded-full border border-[#bdb4cb] bg-white px-5 py-3.5 text-[9px] font-black text-[#3f3549] transition hover:border-[#704BFD] hover:text-[#704BFD]" href="https://seller.nemu-ai.com/register">Buka toko gratis <Store size={14}/></a></div>
          </div>
          <div className="relative isolate min-h-[470px] overflow-hidden bg-[#d9d0ef] lg:min-h-full">
            <span className="absolute inset-0 bg-cover bg-center transition duration-700" role="img" aria-label="Pilihan produk fashion, gadget, rumah, dan beauty di NEMU" style={{backgroundImage:"url('/hero-marketplace-v1.jpg')"}}/>
            <span className="absolute inset-0 bg-gradient-to-t from-[#24152f]/90 via-[#24152f]/5 to-transparent"/>
            <div className="absolute left-5 top-5 rounded-full border border-white/70 bg-white/90 px-4 py-2.5 text-[8px] font-black text-[#704BFD] shadow-lg backdrop-blur">BARU · PRELOVED · LOKAL</div>
            <div className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-3"><Link className="rounded-[20px] border border-white/20 bg-[#704BFD]/92 p-4 text-white shadow-xl backdrop-blur" href="/shop"><span className="grid size-8 place-items-center rounded-xl bg-white/15"><Search size={15}/></span><p className="mt-3 text-[8px] font-black uppercase tracking-[.11em] text-[#EDE8FF]">Buat buyer</p><b className="mt-1 block text-[11px] leading-5">Cari pakai bahasa sehari-hari.</b></Link><a className="rounded-[20px] bg-[#EDE8FF]/95 p-4 text-[#0B0B0E] shadow-xl backdrop-blur" href="https://seller.nemu-ai.com/register"><span className="grid size-8 place-items-center rounded-xl bg-white/55"><Store size={15}/></span><p className="mt-3 text-[8px] font-black uppercase tracking-[.11em] text-[#5D3EEA]">Buat seller</p><b className="mt-1 block text-[11px] leading-5">Website, AI, dan data jualan.</b></a></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8e4f0] bg-white px-4 py-5 sm:px-6" aria-label="Keunggulan NEMU">
        <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-5 lg:grid-cols-4">
          {[[Search,'Cari pakai bahasa sehari-hari'],[PackageCheck,'Barang baru dan preloved'],[BadgeCheck,'Info seller gampang dicek'],[Store,'Seller lokal bisa ikut jualan']].map(([Icon,label])=>{const I=Icon as typeof Search;return <div className="flex items-center gap-3" key={label as string}><span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#F2EFFF] text-[#704BFD]"><I size={17}/></span><b className="text-[10px] leading-4 text-[#4d4656]">{label as string}</b></div>})}
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#F2EFFF] px-4 py-20 sm:px-6 lg:py-28">
        <span className="absolute -left-36 top-14 size-[420px] rounded-full bg-[#EDE8FF]/65 blur-sm"/><span className="absolute -right-28 bottom-0 size-[360px] rounded-full border-[70px] border-[#704BFD]/10"/>
        <div className="relative mx-auto grid max-w-[1240px] items-center gap-12 lg:grid-cols-[.78fr_1.22fr]">
          <div className="relative z-10 lg:pl-5"><span className="grid size-12 place-items-center rounded-2xl bg-[#704BFD] text-white shadow-lg"><MessageCircleMore size={22}/></span><p className="mt-7 text-[9px] font-black uppercase tracking-[.15em] text-[#704BFD]">Nggak tahu nama barangnya?</p><h2 className="mt-3 max-w-xl font-[var(--font-display)] text-5xl font-black leading-[.94] tracking-[-.06em] sm:text-6xl">Nggak usah hafal.<br/><span className="text-[#704BFD]">Ceritain aja.</span></h2><p className="mt-5 max-w-md text-sm font-medium leading-7 text-[#6B6B75]">Sebut kebutuhan, budget, warna, atau dipakai buat apa. NEMU yang bantu nyariin.</p><Link className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#0B0B0E] px-6 py-4 text-[9px] font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-[#704BFD]" href="/ai-mode">Buka Mode AI <ArrowRight size={15}/></Link></div>
          <div className="relative min-h-[590px] lg:rotate-[1.5deg]"><span className="absolute inset-0 overflow-hidden rounded-[42px] bg-cover bg-[62%_center] shadow-[0_30px_90px_rgba(54,41,92,.24)]" role="img" aria-label="Shopper memakai NEMU untuk mencari barang" style={{backgroundImage:"url('/ai-shopper-v1.png')"}}/><span className="absolute inset-0 rounded-[42px] bg-gradient-to-t from-[#24152f]/75 via-transparent to-transparent"/><div className="absolute -left-3 bottom-24 max-w-[270px] -rotate-2 rounded-[24px] border border-white/70 bg-white p-5 text-[#0B0B0E] shadow-2xl sm:-left-10"><p className="text-[8px] font-black uppercase tracking-[.12em] text-[#704BFD]">Kamu bilang</p><b className="mt-2 block text-lg leading-tight">“Sepatu empuk buat kuliah, 300 ribuan.”</b></div><div className="absolute -right-2 top-16 max-w-[230px] rotate-2 rounded-[24px] bg-[#EDE8FF] p-5 text-[#0B0B0E] shadow-2xl sm:-right-6"><Sparkles size={18}/><p className="mt-3 text-[8px] font-black uppercase tracking-[.12em] text-[#5D3EEA]">NEMU nangkep</p><b className="mt-1 block text-sm leading-5">Nyaman · sesuai budget · gampang dibersihin</b></div></div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-20 sm:px-6 lg:py-28">
        <div className="relative lg:min-h-[680px]">
          <div className="min-h-[520px] overflow-hidden rounded-[42px] bg-cover bg-center shadow-[0_26px_80px_rgba(54,41,92,.14)] lg:w-[73%] lg:min-h-[650px]" role="img" aria-label="Seller memotret produk lokal untuk dijual" style={{backgroundImage:"url('/seller-campaign-v1.png')"}}/>
          <div className="relative -mt-16 ml-5 mr-2 rounded-[34px] bg-[#453173] p-7 text-white shadow-[0_28px_80px_rgba(54,41,92,.30)] sm:ml-10 sm:p-10 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:w-[49%] lg:p-12"><span className="absolute -right-3 -top-9 rotate-3 rounded-full bg-[#EDE8FF] px-5 py-3 text-[9px] font-black text-[#0B0B0E] shadow-xl">Gratis sampai pecah telur ✨</span><p className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[.14em] text-[#EDE8FF]"><Store size={14}/> Buat seller</p><h2 className="mt-3 font-[var(--font-display)] text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-5xl">Punya toko sendiri.<br/>Nggak sendirian.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#e5dcf2]">Website langsung siap. Foto dan konten dibantu AI. Bayar online lewat DOKU, kirim lewat 30+ kurir.</p><div className="mt-6 flex flex-wrap gap-2">{['Website siap pakai','AI foto + konten','DOKU','30+ kurir'].map(item=><span className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[8px] font-black" key={item}>{item}</span>)}</div><a className="mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#EDE8FF] px-5 py-3.5 text-[9px] font-black text-[#0B0B0E]" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={15}/></a></div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:py-28" aria-labelledby="growth-value-heading">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_.72fr]"><div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#704BFD]">Yang seller lihat di NEMU</p><h2 id="growth-value-heading" className="mt-3 max-w-4xl text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Nggak cuma punya toko.<br/><span className="text-[#704BFD]">Kamu tahu harus ngapain.</span></h2></div><p className="max-w-md text-sm leading-7 text-[#6B6B75] lg:ml-auto">NEMU baca data jualanmu, lalu kasih saran yang paling penting. Nggak jalan sendiri—kamu tetap yang mutusin.</p></div>
          <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:grid-rows-[250px_250px]">
            <article className="group relative isolate min-h-[520px] overflow-hidden rounded-[34px] bg-[#20152a] text-white lg:col-span-7 lg:row-span-2 lg:min-h-0"><span className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-[1.02]" role="img" aria-label="Seller perempuan melihat pertumbuhan toko di laptop" style={{backgroundImage:"url('/seller-growth-dashboard-woman-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-r from-[#17111e]/95 via-[#17111e]/55 to-transparent"/><div className="relative flex h-full max-w-[380px] flex-col justify-end p-7 sm:p-9"><span className="w-fit rounded-full bg-[#EDE8FF] px-3 py-1.5 text-[8px] font-black text-[#0B0B0E]">CONTOH DASHBOARD</span><h3 className="mt-4 text-3xl font-black leading-[1] tracking-[-.045em]">Yang penting muncul duluan.</h3><div className="mt-5 grid grid-cols-2 gap-2"><span className="rounded-[18px] border border-white/15 bg-white/12 p-3 backdrop-blur"><small className="text-[7px] font-bold text-white/65">Omzet dibantu NEMU</small><b className="mt-1 block text-lg text-white">Kelihatan</b></span><span className="rounded-[18px] border border-white/15 bg-white/12 p-3 backdrop-blur"><small className="text-[7px] font-bold text-white/65">Untung setelah iklan</small><b className="mt-1 block text-lg text-white">Nggak samar</b></span></div></div></article>
            <article className="relative overflow-hidden rounded-[34px] bg-[#EDE8FF] p-7 text-[#0B0B0E] lg:col-span-5"><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#5D3EEA]">Biar gampang ketemu</p><h3 className="mt-3 text-3xl font-black leading-[1] tracking-[-.045em]">Google dan AI bisa baca tokomu.</h3><p className="mt-4 text-[10px] leading-6 text-[#4f5d29]">Lihat halaman mana yang kurang jelas, pertanyaan buyer yang belum terjawab, dan skor mudah ditemukan.</p><span className="absolute -bottom-10 -right-8 text-[120px] font-black text-[#704BFD]/10">78</span></article>
            <article className="relative min-h-[310px] overflow-hidden rounded-[34px] lg:col-span-3 lg:min-h-0"><span className="absolute inset-0 bg-cover bg-center" role="img" aria-label="Dua seller perempuan menyiapkan pesanan" style={{backgroundImage:"url('/seller-packing-team-women-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-t from-[#24152f]/90 via-transparent to-transparent"/><b className="absolute inset-x-5 bottom-5 text-lg leading-tight text-white">Pesanan, pembayaran, dan kiriman tetap satu alur.</b></article>
            <article className="relative min-h-[310px] overflow-hidden rounded-[34px] lg:col-span-2 lg:min-h-0"><span className="absolute inset-0 bg-cover bg-center" role="img" aria-label="Seller perempuan membuat konten video produk" style={{backgroundImage:"url('/seller-content-woman-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-t from-[#24152f]/90 via-transparent to-transparent"/><b className="absolute inset-x-5 bottom-5 text-lg leading-tight text-white">Ide konten dari yang buyer cari.</b></article>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{['Lihat omzet dan untung','Tahu channel yang boros','Cek mudah ditemukan','Setujui dulu sebelum jalan'].map((item,index)=><div className="flex items-center gap-3 rounded-[20px] border border-[#e8e3ed] bg-[#faf9fb] p-4" key={item}><span className="grid size-8 shrink-0 place-items-center rounded-full bg-[#F2EFFF] text-[9px] font-black text-[#704BFD]">0{index+1}</span><b className="text-[9px] leading-4">{item}</b></div>)}</div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B0B0E] px-4 py-20 text-white sm:px-6 lg:py-28" id="seller-tools" aria-labelledby="snap-list-sell">
        <span className="absolute -left-20 bottom-0 size-72 rounded-full border-[52px] border-[#704BFD]/30"/><span className="absolute -right-16 top-12 size-56 rounded-full bg-[#EDE8FF]/10 blur-xl"/>
        <div className="mx-auto max-w-[1240px]">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_.7fr]">
            <div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#EDE8FF]">Cara paling sat set buat mulai</p><h2 id="snap-list-sell" className="mt-3 font-[var(--font-display)] text-4xl font-black tracking-[-.055em] sm:text-6xl">Snap. List. Sell.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-[#d9d2df]">Jepret barangnya. NEMU bantu bikin listing. Kamu tinggal cek, kasih harga, lalu tayangkan.</p></div>
            <a className="inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE8FF] px-5 py-3.5 text-[9px] font-black text-[#0B0B0E] lg:ml-auto" href="https://seller.nemu-ai.com/register">Coba gratis <ArrowRight size={14}/></a>
          </div>
          <div className="relative mt-14 grid gap-5 lg:grid-cols-3">
            {[[Camera,'01 · SNAP','Foto barang pakai HP','Nggak perlu studio. Cahaya dekat jendela juga jadi.'],[ListChecks,'02 · LIST','Listing dibantu NEMU','Nama, deskripsi, dan kategori dirapihin biar enak dibaca.'],[Rocket,'03 · SELL','Cek, kasih harga, tayang','Kamu tetap pegang harga, stok, dan isi tokomu.']].map(([Icon,step,title,copy],index)=>{const I=Icon as typeof Camera;const motion=['lg:translate-y-7 lg:-rotate-1','lg:-translate-y-4 lg:rotate-1','lg:translate-y-10 lg:-rotate-1'][index];return <article className={`relative overflow-hidden rounded-[30px] p-7 text-[#0B0B0E] shadow-[0_24px_65px_rgba(0,0,0,.25)] ${index===1?'bg-[#EDE8FF]':'bg-white'} ${motion}`} key={step as string}><span className={`grid size-12 place-items-center rounded-2xl ${index===1?'bg-[#0B0B0E] text-white':'bg-[#F2EFFF] text-[#704BFD]'}`}><I size={21}/></span><p className="mt-10 text-[8px] font-black uppercase tracking-[.14em] text-[#704BFD]">{step as string}</p><h3 className="mt-2 text-2xl font-black tracking-[-.04em]">{title as string}</h3><p className="mt-3 text-[10px] leading-6 text-[#706879]">{copy as string}</p><span className="absolute -right-5 -top-8 text-[96px] font-black text-[#704BFD]/[.06]">0{index+1}</span></article>})}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-24" id="seller-pricing" aria-labelledby="seller-pricing-heading">
        <div className="overflow-hidden rounded-[36px] border border-[#ded7e8] bg-[#F2EFFF] shadow-[0_24px_70px_rgba(54,41,92,.10)]">
          <div className="grid lg:grid-cols-[.72fr_1.28fr]">
            <div className="flex flex-col justify-between bg-[#0B0B0E] p-7 text-white sm:p-10 lg:p-12">
              <div><p className="text-[9px] font-black uppercase tracking-[.15em] text-[#EDE8FF]">Harga seller NEMU</p><h2 id="seller-pricing-heading" className="mt-3 text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Mulai dulu.<br/>Bayar setelah laku.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#d9d2df]">Gratis sampai pecah telur. Setelah ada penjualan pertama, lanjut <b className="text-white">Rp199 ribu/bulan</b>.</p></div>
              <div className="mt-8 rounded-[24px] bg-[#EDE8FF] p-5 text-[#0B0B0E]"><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#5D3EEA]">Mulai dari</p><div className="mt-1 flex items-end gap-2"><strong className="text-4xl font-black tracking-[-.055em]">Rp0</strong><span className="pb-1 text-[9px] font-bold">sampai pecah telur</span></div><a className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#704BFD] px-5 py-3 text-[9px] font-black text-white" href="https://seller.nemu-ai.com/register">Buka toko gratis <ArrowRight size={14}/></a></div>
            </div>
            <div className="bg-white p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704BFD]">Kalau gabung, dapat apa?</p><h3 className="mt-2 text-3xl font-black tracking-[-.045em]">Semua alat jualan, satu tempat.</h3></div><span className="w-fit rounded-full bg-[#F2EFFF] px-4 py-2 text-[8px] font-black text-[#704BFD]">Lanjut Rp199 ribu/bulan</span></div>
              <div className="mt-7 overflow-hidden rounded-[24px] border border-[#e4dfeb]">
                {[['Website toko siap pakai','Toko online milikmu, langsung bisa dibagi'],['Snap · List · Sell','Foto barang, listing dibantu, lalu tayang'],['AI foto produk','Bikin foto jualan lebih menarik'],['Konten Reels & TikTok','Ubah foto jadi bahan konten pendek'],['Iklan Google, Meta & TikTok','Atur iklan dan bandingkan mana yang paling cuan'],['SEO toko & produk','Bantu tokomu lebih gampang ketemu di Google'],['Optimasi pencarian AI','Biar produkmu lebih mudah dipahami AI search'],['Pembayaran DOKU','Buyer bisa bayar online'],['30+ pilihan kurir','Atur pengiriman dalam satu tempat'],['Data penjualan','Lihat channel mana yang paling cuan']].map(([feature,detail],index)=><div className={`grid gap-2 px-5 py-4 sm:grid-cols-[.8fr_1.2fr] sm:items-center ${index?'border-t border-[#ece8f1]':''}`} key={feature}><b className="flex items-center gap-2 text-[10px]"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-[#EDE8FF] text-[#5D3EEA]"><Check size={13}/></span>{feature}</b><span className="pl-8 text-[9px] leading-5 text-[#6B6B75] sm:pl-0">{detail}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PaymentMethods />

      <section className="overflow-hidden bg-[#f3f0f7] px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="relative min-h-[590px] overflow-hidden rounded-[38px] bg-[#24152f] text-white shadow-[0_28px_90px_rgba(42,22,58,.22)]">
            <span className="absolute inset-0 bg-cover bg-[62%_center] lg:bg-center" role="img" aria-label="Buyer melihat produk sambil berbicara dengan seller" style={{backgroundImage:"url('/trust-market-bandung-v1.jpg')"}}/>
            <span className="absolute inset-0 bg-gradient-to-r from-[#1d1127]/98 via-[#261631]/78 to-[#261631]/5"/>
            <div className="relative z-10 flex min-h-[590px] max-w-[570px] flex-col justify-center p-7 sm:p-10 lg:p-14"><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#EDE8FF]">Belanja tanpa nebak-nebak</p><h2 className="mt-3 text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Lihat barangnya.<br/>Kenal sellernya.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#eee8f2]">Harga, kondisi, lokasi, dan profil seller kelihatan dari awal. Jadi kamu bisa cek dulu sebelum mutusin.</p><div className="mt-8 grid gap-2 sm:grid-cols-3">{[[ShieldCheck,'Bayar lebih tenang'],[BadgeCheck,'Seller gampang dicek'],[PackageCheck,'Kondisi nggak samar']].map(([Icon,title])=>{const I=Icon as typeof ShieldCheck;return <div className="rounded-[18px] border border-white/15 bg-white/12 p-3 backdrop-blur-md" key={title as string}><I className="text-[#EDE8FF]" size={17}/><b className="mt-3 block text-[9px] leading-4 text-white">{title as string}</b></div>})}</div></div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid items-stretch gap-7 lg:grid-cols-[.72fr_1.28fr]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[32px] shadow-[0_28px_70px_rgba(54,41,92,.16)] lg:min-h-[560px]"><span className="absolute inset-0 bg-cover bg-center" role="img" aria-label="Tiga teman mencari produk bersama lewat ponsel" style={{backgroundImage:"url('/faq-jakarta-friends-v1.jpg')"}}/><span className="absolute inset-0 bg-gradient-to-t from-[#25162f]/92 via-transparent to-transparent"/><span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-4 py-2.5 text-[8px] font-black text-[#704BFD] shadow-lg backdrop-blur">Cari bareng juga boleh</span><div className="absolute inset-x-5 bottom-5 rounded-[22px] border border-white/15 bg-[#2a1935]/80 p-5 text-white backdrop-blur"><Sparkles className="text-[#EDE8FF]" size={18}/><b className="mt-3 block text-xl leading-tight">Nggak tahu nama barangnya?<br/>Ceritain aja.</b></div></div>
            <div className="relative overflow-hidden rounded-[30px] border border-[#e1dbe8] bg-white p-6 shadow-[0_24px_65px_rgba(54,41,92,.12)] sm:p-8"><div className="flex items-center gap-2"><span className="grid size-8 place-items-center rounded-xl bg-[#F2EFFF] text-[#704BFD]"><MessageCircleMore size={15}/></span><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704BFD]">Yang sering ditanyain</p></div><h2 id="faq-heading" className="mt-3 text-3xl font-black tracking-[-.05em] sm:text-4xl">Biar makin jelas.</h2><div className="mt-6 divide-y divide-[#e8e4f0]">{faq.map(([question,answer])=><details className="faq-item group" key={question}><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-[11px] font-black"><span>{question}</span><CirclePlus className="shrink-0 text-[#704BFD]" size={19}/></summary><p className="pb-5 pr-8 text-[10px] leading-6 text-[#6B6B75]">{answer}</p></details>)}</div><div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-[22px] bg-[#704BFD] p-5 text-white sm:flex-row sm:items-center"><div><p className="text-[8px] font-black uppercase tracking-[.12em] text-white/70">Mau mulai cari?</p><h3 className="mt-1 text-xl font-black tracking-[-.035em]">Ceritain aja ke NEMU.</h3></div><Link className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-[9px] font-black text-[#704BFD]" href="/ai-mode">Mulai <ArrowRight size={14}/></Link></div></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
