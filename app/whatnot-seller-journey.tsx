import Link from 'next/link';
import { Apple, ArrowRight, CirclePlus, Play, Smartphone, Truck } from 'lucide-react';

const sellerTools = [
  { eyebrow: 'TOKO ONLINE', title: 'Link toko yang enak dibagi.', body: 'Produkmu punya rumah sendiri. Tinggal kirim link ke calon pembeli.', image: '/tracker-official-shop-proof.png', className: 'md:col-span-7 md:row-span-2' },
  { eyebrow: 'FOTO PRODUK', title: 'Foto biasa, jadi siap promosi.', body: 'Pilih produk dan gaya. NEMU bantu bikin visual jualan.', image: '/seller-ai-image.png', className: 'md:col-span-5' },
  { eyebrow: 'VIDEO PENDEK', title: 'Bahan Reels dan TikTok, beres.', body: 'Foto produk bisa digerakkan jadi konten pendek.', image: '/seller-ai-video.png', className: 'md:col-span-5' },
  { eyebrow: 'STUDIO POSTING', title: 'Caption sampai carousel, satu alur.', body: 'Konten siap kamu cek, edit, lalu posting.', image: '/seller-studio-posting.png', className: 'md:col-span-6' },
  { eyebrow: 'PROMO & KIRIMAN', title: 'Ongkir dan kurir kamu yang pilih.', body: 'Atur promo ongkir dan aktifkan layanan kirim yang cocok.', image: '/seller-couriers.png', className: 'md:col-span-6' },
];

const videoResults = [
  { src: '/hasil-video-review-kaus.mp4', poster: '/hasil-video-review-kaus.jpg', title: 'Review produk' },
  { src: '/hasil-video-produk-square.mp4', poster: '/hasil-video-produk-square.jpg', title: 'Video katalog' },
  { src: '/hasil-video-barang.mp4', poster: '/hasil-video-barang.jpg', title: 'Konten jualan' },
  { src: '/hasil-video-dynamic.mp4', poster: '/hasil-video-dynamic.jpg', title: 'Visual dinamis' },
];

export const faqItems = [
  { question: 'NEMU itu apa?', answer: 'NEMU adalah marketplace tempat buyer cari barang dan seller buka toko online, promosi, menerima pembayaran, serta mengatur pengiriman.' },
  { question: 'Seller mulai dari mana?', answer: 'Foto produk, isi harga, lalu NEMU bantu merapikan nama, deskripsi, dan kategorinya sebelum tayang.' },
  { question: 'Harga seller NEMU berapa?', answer: 'Mulai gratis sampai penjualan pertama. Setelah pecah telur, lanjut Rp199 ribu per bulan.' },
  { question: 'Pembayaran dan pengirimannya bagaimana?', answer: 'Pembayaran online diproses lewat DOKU. Seller juga bisa memilih lebih dari 30 layanan kurir di satu tempat.' },
  { question: 'NEMU bantu promosinya juga?', answer: 'Iya. Seller bisa membuat foto, video pendek, carousel, caption, dan bahan iklan untuk Google, Meta, serta TikTok.' },
];

export function WhatnotSellerJourney() {
  return (
    <>
      <section id="seller-tools" className="bg-[#ff6f61] text-[#17121f]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.78fr_1.22fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black tracking-[.22em]">BUAT SELLER NEMU</p>
              <h2 className="text-[clamp(3rem,7.4vw,7.8rem)] font-black leading-[.84] tracking-[-.07em]">Satu produk.<br />Banyak jalan<br />buat laku.</h2>
            </div>
            <div className="pb-2 lg:pb-5">
              <p className="max-w-2xl text-lg font-semibold leading-relaxed sm:text-2xl">Buka toko, bikin konten, pasang promo, terima pembayaran, lalu atur kiriman. Nggak perlu loncat-loncat aplikasi.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {['Website toko', 'AI foto & video', 'DOKU', '30+ kurir'].map((item) => <span key={item} className="rounded-full border-2 border-[#17121f] px-4 py-2 text-sm font-black">{item}</span>)}
              </div>
            </div>
          </div>
          <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] sm:gap-6">
            {sellerTools.slice(0, 4).map((tool, index) => (
              <article key={tool.title} className="group min-w-[82vw] snap-start overflow-hidden bg-white sm:min-w-[420px] lg:min-w-[480px]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#f1eff7]">
                  <img src={tool.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#dfff43] px-3 py-2 text-[11px] font-black tracking-[.12em]">0{index + 1}</span>
                </div>
                <div className="p-6 sm:p-7"><p className="text-xs font-black tracking-[.18em]">{tool.eyebrow}</p><h3 className="mt-3 text-3xl font-black leading-[.95] tracking-[-.04em] sm:text-4xl">{tool.title}</h3><p className="mt-4 max-w-md text-base leading-relaxed text-[#5f5868]">{tool.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c0b0f] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
            <div><p className="text-xs font-black tracking-[.22em] text-[#b6ff3b]">DASHBOARD SELLER NEMU</p><h2 className="mt-5 text-[clamp(3rem,6vw,6.6rem)] font-black leading-[.87] tracking-[-.065em]">Bukan cuma<br />janji. Ini yang<br />seller pakai.</h2></div>
            <p className="max-w-2xl pb-2 text-lg leading-relaxed text-white/75 sm:text-xl lg:pb-4">Setelah produk tayang, seller bisa bikin gambar, video, dan postingan—lalu mengatur promo ongkir serta kurir dari dashboard yang sama.</p>
          </div>
          <div className="mt-12 grid auto-rows-[300px] gap-4 md:grid-cols-12 md:auto-rows-[260px]">
            {sellerTools.map((tool) => (
              <article key={tool.title} className={`group relative overflow-hidden bg-[#201d27] ${tool.className}`}>
                <img src={tool.image} alt="" className="h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-[1.025] group-hover:opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8"><p className="text-[11px] font-black tracking-[.18em] text-[#b6ff3b]">{tool.eyebrow}</p><h3 className="mt-2 text-2xl font-black tracking-[-.03em] sm:text-3xl">{tool.title}</h3><p className="mt-2 max-w-xl text-sm text-white/75 sm:text-base">{tool.body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#dfff43] text-[#16111d]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div className="relative overflow-hidden bg-[#c9b7ff]">
              <img src="/seller-content-woman-v1.jpg" alt="Seller memotret produk dengan ponsel" className="aspect-[4/3] h-full w-full object-cover" />
              <div className="absolute bottom-5 left-5 max-w-[75%] bg-white p-5 sm:bottom-7 sm:left-7 sm:p-7"><p className="text-[11px] font-black tracking-[.16em] text-[#7047ff]">SNAP • LIST • SELL</p><p className="mt-2 text-2xl font-black leading-tight sm:text-3xl">Jepret produknya. Sisanya dibantu.</p></div>
            </div>
            <div>
              <p className="text-xs font-black tracking-[.22em]">DARI FOTO SAMPAI TAYANG</p><h2 className="mt-5 text-[clamp(3.4rem,7vw,7.2rem)] font-black leading-[.84] tracking-[-.07em]">Jepret.<br />Cek.<br />Jual.</h2>
              <p className="mt-7 max-w-xl text-lg font-semibold leading-relaxed sm:text-xl">Kamu tetap pegang harga. NEMU bantu rapihin nama, deskripsi, dan kategori biar produkmu cepat siap dilihat pembeli.</p>
              <ol className="mt-8 divide-y-2 divide-[#16111d]/20 border-y-2 border-[#16111d]/20">
                {[
                  ['01', 'Foto pakai HP', 'Nggak perlu studio. Barangnya yang penting kelihatan.'],
                  ['02', 'NEMU rapihin', 'Nama, deskripsi, dan kategori dibantu.'],
                  ['03', 'Kamu cek lalu tayang', 'Harga dan tokomu tetap kamu yang pegang.'],
                ].map(([number, title, body]) => <li key={number} className="grid grid-cols-[48px_1fr] gap-3 py-5"><span className="font-black text-[#7047ff]">{number}</span><div><p className="text-xl font-black">{title}</p><p className="mt-1 text-sm text-[#4f4856]">{body}</p></div></li>)}
              </ol>
              <a href="#jadwal-onboarding" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#17121f] px-7 py-4 font-black text-white transition hover:-translate-y-1">Buka toko gratis <ArrowRight size={18} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#7047ff] text-white">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-12">
          <div className="flex flex-col justify-center"><p className="text-xs font-black tracking-[.22em]">HARGA SELLER NEMU</p><h2 className="mt-5 text-[clamp(3.4rem,7vw,7rem)] font-black leading-[.84] tracking-[-.07em]">Mulai gratis.<br />Lanjut setelah<br />laku.</h2><p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">Mulai tanpa biaya sampai pecah telur. Website toko, konten AI, pembayaran DOKU, dan pilihan kurir sudah siap buat tokomu.</p><div className="mt-8 flex flex-wrap gap-3"><a href="#jadwal-onboarding" className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 font-black text-[#7047ff] transition hover:-translate-y-1">Jadwalkan onboarding <ArrowRight size={18} /></a><button type="button" data-app-download className="inline-flex items-center gap-3 rounded-full border border-white/40 px-7 py-4 font-black"><Smartphone size={18} /> Download aplikasi</button></div></div>
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[660px]"><div className="absolute inset-10 rounded-full border-[48px] border-white/10" /><img src="/model-seller-coral-v4.png" alt="Seller NEMU memegang paket" className="absolute bottom-0 left-1/2 h-[92%] w-auto max-w-none -translate-x-1/2 object-contain" /><div className="absolute right-0 top-8 max-w-[310px] bg-white p-6 text-[#17121f] shadow-2xl sm:right-5 sm:p-8"><p className="text-[11px] font-black tracking-[.16em]">HARGA SELLER NEMU</p><p className="mt-3 text-3xl font-black leading-tight">Gratis sampai pecah telur.</p><p className="mt-2 font-bold text-[#5f5868]">Setelah itu Rp199 ribu/bulan.</p></div></div>
        </div>
      </section>

      <section className="bg-white text-[#17121f]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="text-xs font-black tracking-[.22em] text-[#7047ff]">TRANSAKSI DI NEMU</p><h2 className="mt-5 text-[clamp(3.2rem,6.5vw,6.6rem)] font-black leading-[.85] tracking-[-.07em]">Bayar gampang.<br />Kirim tinggal<br />pilih.</h2><p className="mt-7 max-w-lg text-lg leading-relaxed text-[#5f5868]">Buyer pilih cara bayar yang paling nyaman. Seller pilih layanan kirim yang cocok buat tokonya.</p></div>
            <div className="border-t-2 border-[#17121f]">
              {[
                { label: 'SCAN LANGSUNG', title: 'QRIS', note: 'Biaya 0,7%', logos: ['/payment-logos/qris.svg'] },
                { label: 'VIRTUAL ACCOUNT', title: 'BRI, BNI, Permata, CIMB Niaga', note: 'Biaya Rp4.000', logos: ['/payment-logos/bri.svg', '/payment-logos/bni.svg', '/payment-logos/permata.svg'] },
                { label: 'BAYAR DI KASIR', title: 'Alfamart atau Indomaret', note: 'Biaya Rp5.000', logos: ['/payment-logos/alfamart.svg', '/payment-logos/indomaret.svg'] },
              ].map((row) => <div key={row.label} className="grid gap-5 border-b-2 border-[#17121f]/15 py-7 sm:grid-cols-[190px_1fr_auto] sm:items-center"><div className="flex flex-wrap items-center gap-3">{row.logos.map((logo) => <img key={logo} src={logo} alt="" className="max-h-9 max-w-[105px] object-contain" />)}</div><div><p className="text-[11px] font-black tracking-[.16em]">{row.label}</p><p className="mt-1 text-xl font-black sm:text-2xl">{row.title}</p></div><p className="font-black text-[#7047ff]">{row.note}</p></div>)}
              <div className="mt-8 flex items-center justify-between gap-5 bg-[#dfff43] p-6 sm:p-8"><div><p className="text-xs font-black tracking-[.18em]">PENGIRIMAN</p><p className="mt-2 text-3xl font-black tracking-[-.04em]">30+ pilihan kurir</p></div><Truck className="h-12 w-12 sm:h-16 sm:w-16" strokeWidth={1.7} /></div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0ebff] text-[#17121f]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[.76fr_1.24fr] lg:items-center lg:px-12">
          <div><p className="text-xs font-black tracking-[.22em] text-[#7047ff]">MODE AI BUAT BUYER</p><h2 className="mt-5 text-[clamp(3.3rem,6.8vw,6.8rem)] font-black leading-[.85] tracking-[-.07em]">Nggak tahu<br />namanya?<br /><span className="text-[#7047ff]">Ketik aja.</span></h2><p className="mt-7 max-w-lg text-lg leading-relaxed text-[#5f5868]">Sebut kebutuhan, budget, warna, ukuran, atau mau dipakai buat apa. NEMU bantu nyari yang paling masuk.</p><Link href="/ai-mode" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#7047ff] px-7 py-4 font-black text-white transition hover:-translate-y-1">Coba Mode AI <ArrowRight size={18} /></Link></div>
          <div className="relative min-h-[460px] overflow-hidden sm:min-h-[620px]"><img src="/ai-shopping-visual-v1.png" alt="Buyer memakai Mode AI NEMU" className="absolute inset-0 h-full w-full object-contain" /><div className="absolute right-0 top-8 max-w-[310px] bg-white p-6 shadow-xl sm:p-7"><p className="text-[11px] font-black tracking-[.16em]">KAMU KETIK</p><p className="mt-3 text-xl font-black">“Sepatu putih buat kuliah, empuk, budget 300 ribuan.”</p></div><div className="absolute bottom-8 right-4 max-w-[350px] bg-[#7047ff] p-6 text-white shadow-xl sm:p-7"><p className="text-[11px] font-black tracking-[.16em]">NEMU NANGKAP</p><p className="mt-3 font-black">Putih · nyaman dipakai lama · gampang dibersihkan · maksimal Rp300 ribu</p></div></div>
        </div>
      </section>

      <section className="bg-[#0c0b0f] text-white">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-black tracking-[.22em] text-[#ff6f61]">HASIL VIDEO DARI NEMU</p><h2 className="mt-5 max-w-4xl text-[clamp(3.2rem,6vw,6.4rem)] font-black leading-[.86] tracking-[-.065em]">Foto produkmu<br />nggak berhenti<br />jadi foto.</h2></div><p className="max-w-md text-lg leading-relaxed text-white/70">Bikin video pendek buat katalog, Reels, TikTok, dan bahan promosi tanpa mulai dari layar kosong.</p></div>
          <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 [scrollbar-width:none] sm:gap-6">{videoResults.map((video, index) => <figure key={video.src} className="relative min-w-[74vw] snap-start overflow-hidden bg-[#211e27] sm:min-w-[340px] lg:min-w-[360px]"><video src={video.src} poster={video.poster} muted loop playsInline autoPlay className="aspect-[9/14] h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" /><figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5"><div><p className="text-[11px] font-black tracking-[.16em] text-[#b6ff3b]">0{index + 1}</p><p className="mt-1 text-2xl font-black">{video.title}</p></div><span className="grid h-12 w-12 place-items-center rounded-full bg-white text-black"><Play size={18} fill="currentColor" /></span></figcaption></figure>)}</div>
        </div>
      </section>

      <section className="bg-[#ff6f61] text-[#17121f]">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-12"><div><p className="text-xs font-black tracking-[.22em]">NEMU DI HP KAMU</p><h2 className="mt-5 text-[clamp(3.4rem,7vw,7.2rem)] font-black leading-[.84] tracking-[-.07em]">Belanja dan<br />urus toko<br />dari mana aja.</h2></div><div><p className="max-w-xl text-xl font-semibold leading-relaxed">Cari produk, cek pesanan, bikin konten, atau lanjut jualan langsung dari aplikasi NEMU.</p><div className="mt-8 flex flex-wrap gap-3"><button type="button" data-app-download className="inline-flex items-center gap-3 rounded-full bg-[#17121f] px-7 py-4 font-black text-white"><Apple size={20} /> App Store</button><button type="button" data-app-download className="inline-flex items-center gap-3 rounded-full border-2 border-[#17121f] px-7 py-4 font-black"><Play size={20} fill="currentColor" /> Google Play</button></div></div></div>
      </section>

      <section className="bg-[#dfff43] text-[#17121f]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr]"><div><p className="text-xs font-black tracking-[.22em]">YANG SERING DITANYA</p><h2 className="mt-5 text-[clamp(3.2rem,6vw,6.2rem)] font-black leading-[.86] tracking-[-.06em]">Biar makin<br />jelas.</h2><p className="mt-6 max-w-sm text-lg">Masih ada yang ganjel? Tanya NEMU lewat tombol chat di pojok.</p></div><div className="border-t-2 border-[#17121f]">{faqItems.map((item) => <details key={item.question} className="group border-b-2 border-[#17121f]/25 py-6 open:pb-7"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-xl font-black sm:text-2xl"><span>{item.question}</span><CirclePlus className="shrink-0 transition group-open:rotate-45" /></summary><p className="mt-4 max-w-2xl text-base leading-relaxed text-[#514b57] sm:text-lg">{item.answer}</p></details>)}</div></div></div>
      </section>

      <section id="jadwal-onboarding" className="bg-white text-[#17121f]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"><div className="grid gap-10 border-y-2 border-[#17121f] py-12 lg:grid-cols-[1.25fr_.75fr] lg:items-center"><div><p className="text-xs font-black tracking-[.22em] text-[#7047ff]">SIAP PUNYA TOKO SENDIRI?</p><h2 className="mt-5 text-[clamp(3.4rem,7vw,7.2rem)] font-black leading-[.84] tracking-[-.07em]">Yuk, mulai.<br />Biar NEMU<br />yang bantu.</h2></div><div><p className="text-xl font-semibold leading-relaxed">Pilih jadwal onboarding. Tim NEMU bantu siapin langkah pertamamu sampai toko siap dipakai.</p><a href="#jadwal-onboarding" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#7047ff] px-7 py-4 font-black text-white transition hover:-translate-y-1">Pilih jadwal onboarding <ArrowRight size={18} /></a></div></div></div>
      </section>
    </>
  );
}
