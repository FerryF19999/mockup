import Link from 'next/link';
import { ArrowUpRight, Camera, ChevronDown, Heart, HelpCircle, Mail, Menu, Music2, Search, ShoppingBag, Sparkles, Store } from 'lucide-react';

export function Logo({ light = false }: { light?: boolean }) {
  return <Link className="inline-flex items-center gap-2" href="/" aria-label="NEMU AI beranda"><span className={`grid size-10 place-items-center rounded-2xl rounded-bl-md text-xl font-black shadow-[0_5px_0_#d9ff43] ${light ? 'bg-white text-violet-700' : 'bg-violet-600 text-lime-300'}`}>n</span><b className={`text-xl font-black tracking-[-0.06em] ${light ? 'text-white' : 'text-zinc-950'}`}>nemu.ai</b></Link>;
}

export function Header() {
  return (
    <div className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="bg-violet-950 text-white">
        <div className="mx-auto flex h-8 max-w-[1180px] items-center justify-between px-4 text-[10px] font-semibold sm:px-6">
          <span className="flex items-center gap-1.5"><Sparkles size={12} className="text-lime-300" /> Gratis ongkir buat order pertama</span>
          <div className="hidden items-center gap-5 text-violet-200 sm:flex"><a className="flex items-center gap-1.5 transition hover:text-white" href="https://seller.nemu-ai.com/register"><Store size={12} /> Mulai jualan</a><a className="flex items-center gap-1.5 transition hover:text-white" href="https://shop.nemu-ai.com/help"><HelpCircle size={12} /> Bantuan</a><span className="flex items-center gap-1">Indonesia <ChevronDown size={11} /></span></div>
        </div>
      </div>
      <header className="mx-auto grid min-h-[76px] max-w-[1180px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:gap-7 sm:px-6">
        <div className="[&>a>b]:hidden sm:[&>a>b]:block"><Logo /></div>
        <form className="group flex h-11 min-w-0 items-center rounded-xl border border-zinc-200 bg-zinc-50 pl-3 transition focus-within:border-violet-400 focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100" action="/shop" role="search"><Search size={18} className="shrink-0 text-zinc-400 group-focus-within:text-violet-600" /><input className="min-w-0 flex-1 bg-transparent px-3 text-xs outline-none placeholder:text-zinc-400" name="q" placeholder="Mau cari apa?" aria-label="Cari produk" /><button className="m-1 hidden h-9 rounded-lg bg-violet-600 px-5 text-[10px] font-extrabold text-white transition hover:bg-violet-700 sm:block" type="submit">Cari</button></form>
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Menu akun"><Link className="grid size-10 place-items-center rounded-xl text-zinc-600 transition hover:bg-violet-50 hover:text-violet-700" href="/shop" aria-label="Favorit"><Heart size={19} /></Link><Link className="relative grid size-10 place-items-center rounded-xl text-zinc-600 transition hover:bg-violet-50 hover:text-violet-700" href="/shop" aria-label="Keranjang"><ShoppingBag size={19} /><span className="absolute right-1 top-1 grid size-4 place-items-center rounded-full bg-lime-300 text-[8px] font-black text-zinc-900">2</span></Link><a className="hidden rounded-xl bg-zinc-950 px-4 py-3 text-[10px] font-extrabold text-white transition hover:bg-violet-700 md:block" href="https://shop.nemu-ai.com/login">Masuk</a></nav>
      </header>
      <nav className="mx-auto flex h-10 max-w-[1180px] items-center gap-6 overflow-x-auto px-4 text-[10px] font-semibold text-zinc-600 [scrollbar-width:none] sm:px-6" aria-label="Kategori populer"><Link className="flex shrink-0 items-center gap-1.5 font-extrabold text-zinc-950" href="/shop"><Menu size={14} /> Semua kategori</Link>{['Fashion','Elektronik','Rumah tangga','Kecantikan','Preloved','Toko lokal'].map(item=><Link className="shrink-0 transition hover:text-violet-700" href="/shop" key={item}>{item}</Link>)}<Link className="ml-auto flex shrink-0 items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1.5 font-extrabold text-violet-700" href="/shop"><Sparkles size={13} /> Tanya NEMU</Link></nav>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 px-4 pb-7 pt-16 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1180px] gap-10 border-b border-zinc-800 pb-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div><Logo light /><p className="mt-6 max-w-xs text-xs leading-6 text-zinc-400">Belanja online yang nggak bikin capek. Cari pakai bahasa biasa, biar NEMU yang bantu nyaring.</p><div className="mt-6 flex gap-2"><a className="grid size-9 place-items-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-violet-500 hover:text-white" href="https://www.instagram.com/nemu_ai_/" aria-label="Instagram"><Camera size={16} /></a><a className="grid size-9 place-items-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-violet-500 hover:text-white" href="https://www.tiktok.com/@nemu_ai_" aria-label="TikTok"><Music2 size={16} /></a><a className="grid size-9 place-items-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:border-violet-500 hover:text-white" href="mailto:hello@nemu-ai.com" aria-label="Email"><Mail size={16} /></a></div></div>
        {[
          ['NEMU',[['Belanja','/shop'],['Mulai jualan','https://seller.nemu-ai.com/register'],['Tentang kami','https://shop.nemu-ai.com/about']]],
          ['Bantuan',[['Pusat bantuan','https://shop.nemu-ai.com/help'],['Pengiriman','https://shop.nemu-ai.com/pengiriman'],['Retur & garansi','https://shop.nemu-ai.com/retur-garansi']]],
          ['Legal',[['Privasi','https://shop.nemu-ai.com/privacy'],['Syarat','https://shop.nemu-ai.com/terms'],['Hapus akun','https://shop.nemu-ai.com/account-deletion']]],
        ].map(([title,links])=><div className="hidden md:block" key={title as string}><p className="mb-5 text-[10px] font-black uppercase tracking-[.16em] text-lime-300">{title as string}</p><div className="space-y-3">{(links as string[][]).map(([label,href])=><a className="flex items-center gap-1.5 text-[11px] text-zinc-400 transition hover:text-white" href={href} key={label}>{label}<ArrowUpRight size={11}/></a>)}</div></div>)}
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-2 pt-6 text-[9px] text-zinc-600 sm:flex-row sm:justify-between"><span>© 2026 PT Nusa Era Modern Unggul</span><span>Belanja lokal. Biar sama-sama naik.</span></div>
    </footer>
  );
}
