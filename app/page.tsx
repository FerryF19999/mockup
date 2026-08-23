import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, ChevronRight, MessageCircleMore, Search, ShieldCheck, Sparkles, Store } from 'lucide-react';
import { Footer, Header } from './components';

const miniProducts = [
  ['Vivo V11 Pro', 'Rp950.000', 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/7008540f-9a9c-4917-9368-55b0e5335908.png'],
  ['GM Flat Sandal', 'Rp70.000', 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/b65c53f0-b789-4dd0-84a0-ba883188e12a.jpg'],
  ['Kopi Gayo', 'Rp95.000', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80'],
];

const steps = [
  { icon: MessageCircleMore, number:'01', title:'Ketik maumu', copy:'Contoh: “outfit kondangan under 300 ribu.”' },
  { icon: Search, number:'02', title:'NEMU nyariin', copy:'Produk disaring. Yang zonk, minggir dulu.' },
  { icon: ShieldCheck, number:'03', title:'Pilih. Beres.', copy:'Lihat harga, cek seller, lalu gas checkout.' },
];

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#fffdf8] text-zinc-950">
      <Header />

      <section className="mx-auto grid min-h-[610px] max-w-[1180px] items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[.88fr_1.12fr] lg:py-20">
        <div>
          <p className="mb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-violet-700"><Sparkles size={14}/> Marketplace lokal + AI</p>
          <h1 className="font-[var(--font-display)] text-[58px] font-black leading-[.88] tracking-[-.075em] sm:text-7xl lg:text-[88px]">Nyari apa?<br/><span className="text-violet-600">Bilang aja.</span></h1>
          <p className="mt-7 max-w-lg text-sm leading-7 text-zinc-600">Nggak perlu mikir kata kunci. Ketik kayak lagi chat. NEMU bantu cari yang paling pas.</p>
          <Link className="mt-7 inline-flex items-center gap-6 rounded-xl bg-violet-600 px-5 py-4 text-[11px] font-black text-white shadow-[0_7px_0_#3d27b7] transition hover:-translate-y-0.5 hover:bg-violet-700" href="/shop">Mulai nyari <ArrowRight size={17}/></Link>
          <div className="mt-7 flex flex-wrap gap-4 text-[9px] font-bold text-zinc-500">{['Harga jelas','Seller dicek','Nggak ribet'].map(item=><span className="flex items-center gap-1.5" key={item}><Check size={17} className="rounded-full bg-lime-300 p-1 text-zinc-900"/>{item}</span>)}</div>
        </div>

        <div className="relative rounded-[28px] border border-lime-500 bg-lime-300 p-4 shadow-[15px_15px_0_#694cff] sm:p-6">
          <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-lg shadow-lime-900/10 sm:p-4"><Sparkles className="shrink-0 text-violet-600" size={19}/><p className="min-w-0 flex-1 truncate text-[11px] font-semibold">“Cariin HP bagus under 1 juta”</p><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-violet-600 text-white"><ArrowRight size={16}/></span></div>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">{miniProducts.map(([name,price,img],index)=><article className={`overflow-hidden rounded-2xl bg-white shadow-sm ${index===2?'hidden sm:block':''}`} key={name}><img className="aspect-square w-full object-cover" src={img} alt={name}/><div className="p-3"><p className="text-[8px] font-black uppercase tracking-wider text-violet-600">Pas buat kamu</p><h3 className="mt-1 truncate text-[11px] font-extrabold">{name}</h3><strong className="mt-1 block text-[11px]">{price}</strong></div></article>)}</div>
          <p className="mt-4 flex items-center gap-2 text-[9px] font-extrabold"><Sparkles size={13} className="text-violet-700"/> Dari 120 produk, ini yang paling masuk.</p>
        </div>
      </section>

      <section className="bg-zinc-950 px-4 py-7 text-white sm:px-6"><div className="mx-auto grid max-w-[1180px] grid-cols-3 items-center gap-4 lg:grid-cols-[130px_130px_130px_1fr]">{[['2.400+','produk'],['150+','seller lokal'],['4,9/5','rating pembeli']].map(([value,label])=><div className="text-center lg:text-left" key={label}><b className="block text-lg font-black sm:text-xl">{value}</b><span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">{label}</span></div>)}<p className="col-span-3 mt-3 text-center text-[10px] font-extrabold text-lime-300 lg:col-span-1 lg:mt-0 lg:text-right">Intinya: cari lebih cepat, belanja lebih tenang.</p></div></section>

      <section className="mx-auto max-w-[1180px] px-4 py-24 sm:px-6 lg:py-28">
        <div className="max-w-2xl"><p className="mb-3 text-[10px] font-black uppercase tracking-[.16em] text-violet-700">Gampang banget</p><h2 className="font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Cuma tiga langkah.<br/>Beneran.</h2></div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">{steps.map(({icon:Icon,number,title,copy})=><article className="group rounded-3xl border border-zinc-200 bg-white p-7 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl hover:shadow-violet-950/5" key={number}><div className="flex items-start justify-between"><span className="grid size-11 place-items-center rounded-2xl bg-violet-100 text-violet-700 transition group-hover:bg-violet-600 group-hover:text-white"><Icon size={20}/></span><span className="text-[10px] font-black text-zinc-300">{number}</span></div><h3 className="mt-16 text-xl font-black tracking-[-.04em]">{title}</h3><p className="mt-2 text-xs leading-6 text-zinc-500">{copy}</p></article>)}</div>
      </section>

      <section className="bg-violet-950 px-4 py-24 text-white sm:px-6"><div className="mx-auto grid max-w-[1180px] items-center gap-14 lg:grid-cols-2 lg:gap-24"><div><p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-lime-300"><BadgeCheck size={14}/> Kenapa enak</p><h2 className="font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Tampilannya familiar.<br/>Carinya lebih pinter.</h2><p className="mt-6 max-w-lg text-xs leading-6 text-violet-200">Kategori, promo, toko resmi, dan rekomendasi tetap ada di tempat yang kamu kenal. Bedanya, NEMU bisa diajak ngobrol.</p><Link className="mt-7 inline-flex items-center gap-5 rounded-xl bg-lime-300 px-5 py-4 text-[10px] font-black text-zinc-950 transition hover:bg-lime-200" href="/shop">Lihat marketplace <ArrowRight size={17}/></Link></div><div className="divide-y divide-white/10 border-y border-white/10">{[[Search,'Cari kayak biasa','Pakai kolom search. Sat-set.'],[Sparkles,'Atau chat sama AI','Kalau bingung nama barangnya.'],[BadgeCheck,'Harga nggak ngumpet','Yang penting kelihatan dari awal.'],[Store,'Seller beneran','Ada tanda kalau sudah dicek.']].map(([Icon,title,copy])=>{const I=Icon as typeof Search;return <div className="grid grid-cols-[42px_1fr_auto] items-center gap-4 py-5" key={title as string}><span className="grid size-10 place-items-center rounded-xl bg-white/10 text-lime-300"><I size={18}/></span><div><b className="block text-xs">{title as string}</b><p className="mt-1 text-[9px] text-violet-300">{copy as string}</p></div><ChevronRight size={17} className="text-violet-400"/></div>})}</div></div></section>

      <section className="mx-auto grid min-h-[590px] max-w-[1180px] items-center gap-16 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_.8fr]">
        <div><p className="mb-3 flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] text-violet-700"><Store size={14}/> Buat yang jualan</p><h2 className="font-[var(--font-display)] text-5xl font-black leading-[.95] tracking-[-.06em] sm:text-6xl">Punya barang bagus?<br/>Yuk, buka toko.</h2><p className="mt-6 max-w-lg text-xs leading-6 text-zinc-500">Upload foto. NEMU bantu bikin judul dan deskripsi. Kamu tinggal cek, lalu tayang.</p><a className="mt-7 inline-flex items-center gap-5 rounded-xl bg-violet-600 px-5 py-4 text-[10px] font-black text-white" href="https://seller.nemu-ai.com/register">Mulai jualan <ArrowRight size={17}/></a></div>
        <div className="rotate-1 rounded-[30px] border-[8px] border-zinc-950 bg-white p-6 shadow-[18px_18px_0_#d9ff43]"><div className="flex items-center justify-between border-b border-zinc-100 pb-5"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-violet-100 text-violet-700"><Store size={18}/></span><div><b className="block text-xs">Toko Kriya</b><small className="text-[8px] text-zinc-400">Dashboard seller</small></div></div><span className="rounded-lg bg-green-50 px-2.5 py-1 text-[8px] font-black text-green-700">LIVE</span></div><div className="relative py-6"><small className="text-[9px] text-zinc-400">Omzet bulan ini</small><strong className="mt-1 block text-3xl font-black tracking-tight">Rp18,4 jt</strong><em className="absolute right-0 top-7 rounded-full bg-green-50 px-2 py-1 text-[9px] font-black not-italic text-green-700">+24%</em></div><div className="flex h-28 items-end gap-2">{[40,55,38,72,58,86,70,98].map((h,i)=><i className={`flex-1 rounded-t ${i%2?'bg-violet-600':'bg-lime-300'}`} key={i} style={{height:h}} />)}</div><div className="mt-5 flex gap-3 rounded-2xl bg-violet-50 p-4"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-violet-600 text-white"><Sparkles size={16}/></span><div><b className="text-[9px] text-violet-700">NEMU bilang</b><p className="mt-1 text-[9px] leading-4 text-zinc-600">Foto yang terang lebih sering diklik. Yuk ganti foto pertama.</p></div></div></div>
      </section>

      <section className="bg-lime-300 px-4 py-24 text-center sm:px-6"><p className="text-[10px] font-black uppercase tracking-[.16em]">Udah siap nyari?</p><h2 className="mt-3 font-[var(--font-display)] text-5xl font-black tracking-[-.06em] sm:text-7xl">Masuk. Ketik. <span className="text-violet-700">Nemu.</span></h2><Link className="mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-5 py-4 text-[10px] font-black text-white" href="/shop">Coba sekarang <ArrowRight size={17}/></Link></section>
      <Footer />
    </main>
  );
}
