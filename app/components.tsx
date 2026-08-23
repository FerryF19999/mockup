import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Camera, ChevronDown, Heart, HelpCircle, Home, Mail, Menu, Music2, Search, ShoppingBag, Sparkles, Store, UserRound } from 'lucide-react';

export function Logo({ light = false }: { light?: boolean }) {
  return <Link className="inline-flex items-center gap-2.5" href="/" aria-label="NEMU AI beranda"><Image src="/nemu-mark.svg" alt="" width={36} height={36} priority/><span className={`logo-wordmark items-baseline text-[22px] font-black tracking-[-0.065em] ${light ? 'text-white' : 'text-[#30293a]'}`}>nemu<span className={light?'ml-0.5 text-[#dfff5b]':'ml-0.5 text-[#6b4de6]'}>.ai</span></span></Link>;
}

export function Header({ showSearch = true }: { showSearch?: boolean }) {
  return (
    <div className="sticky top-0 z-50 border-b border-[#e8e4f0] bg-white/95 backdrop-blur-xl">
      <div className="bg-[#1d1c24] text-white">
        <div className="mx-auto flex h-8 max-w-[1240px] items-center justify-center px-4 text-[9px] font-bold sm:justify-between sm:px-6">
          <span className="flex items-center gap-2"><Sparkles size={13} className="text-[#a88bff]" /> Baru pertama belanja? Ongkirnya kami bantu.</span>
          <div className="hidden items-center gap-5 text-violet-100 sm:flex"><a className="flex items-center gap-1.5 transition hover:text-white" href="https://seller.nemu-ai.com/register"><Store size={12} /> Mau jualan?</a><a className="flex items-center gap-1.5 transition hover:text-white" href="https://shop.nemu-ai.com/help"><HelpCircle size={12} /> Butuh bantuan?</a><span className="flex items-center gap-1">Indonesia <ChevronDown size={11} /></span></div>
        </div>
      </div>
      <header className="mx-auto grid min-h-[70px] max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-2.5 sm:gap-6 sm:px-6">
        <div className="[&_.logo-wordmark]:hidden sm:[&_.logo-wordmark]:inline-flex"><Logo /></div>
        {showSearch ? <form className="group flex h-11 min-w-0 items-center rounded-[14px] border border-[#cfc7dc] bg-[#f8f7fa] pl-4 transition focus-within:border-[#5b3fd5] focus-within:bg-white focus-within:ring-4 focus-within:ring-violet-100" action="/shop" role="search"><Search size={18} className="shrink-0 text-[#5b3fd5]" /><input className="min-w-0 flex-1 bg-transparent px-3 text-xs font-medium text-[#332d3d] outline-none placeholder:text-[#7c7487]" name="q" placeholder="Cari barang atau ceritain yang kamu mau" aria-label="Cari produk" /><button className="m-1 hidden h-9 rounded-[10px] bg-[#5b3fd5] px-6 text-[10px] font-black text-white transition hover:bg-[#4d32c4] sm:block" type="submit">Cari</button></form> : <div className="flex min-w-0 items-center gap-2 text-[9px] font-bold text-[#736a7d]"><Sparkles size={14} className="shrink-0 text-[#7446ff]"/><span className="truncate">Baru, lokal, sampai preloved—semuanya bisa dicari</span></div>}
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Menu akun"><Link className="hidden size-10 place-items-center rounded-full text-[#625b6d] transition hover:bg-violet-50 hover:text-[#5b3fd5] sm:grid" href="/shop" aria-label="Favorit"><Heart size={19} /></Link><Link className="relative grid size-10 place-items-center rounded-full text-[#625b6d] transition hover:bg-violet-50 hover:text-[#5b3fd5]" href="/shop" aria-label="Keranjang"><ShoppingBag size={20} /><span className="absolute right-0 top-0 grid size-4 place-items-center rounded-full bg-[#ffb648] text-[8px] font-black text-[#32240d]">2</span></Link><a className="hidden rounded-full bg-[#292333] px-5 py-3 text-[10px] font-black text-white transition hover:bg-[#5b3fd5] md:block" href="https://shop.nemu-ai.com/login">Masuk</a></nav>
      </header>
      <nav className="mx-auto flex h-10 max-w-[1240px] items-center gap-6 overflow-x-auto px-4 text-[9px] font-bold text-[#625b6d] [scrollbar-width:none] sm:px-6" aria-label="Kategori populer"><Link className="flex shrink-0 items-center gap-2 font-black text-[#292333]" href="/shop"><Menu size={14} /> Semua kategori</Link>{['Lagi promo','Fashion','HP & gadget','Rumah','Beauty','Preloved'].map(item=><Link className="shrink-0 transition hover:text-[#5b3fd5]" href="/shop" key={item}>{item}</Link>)}<Link className="ml-auto flex shrink-0 items-center gap-1.5 font-black text-[#5b3fd5]" href="/ai-mode"><Sparkles size={13} /> Mode AI</Link></nav>
    </div>
  );
}

export function MobileDock() {
  const items = [
    { icon: Home, label: 'Beranda', href: '/' },
    { icon: Search, label: 'Cari', href: '/shop' },
    { icon: Sparkles, label: 'Tanya', href: '/ai-mode', special: true },
    { icon: ShoppingBag, label: 'Keranjang', href: '/shop' },
    { icon: UserRound, label: 'Akun', href: 'https://shop.nemu-ai.com/login' },
  ];
  return <nav className="mobile-dock" aria-label="Navigasi cepat">{items.map(({icon:Icon,label,href,special})=><a className={special?'mobile-dock-special':''} href={href} key={label}><span><Icon size={18}/></span><b>{label}</b></a>)}</nav>;
}

export function Footer() {
  return (
    <footer className="bg-[#292333] px-4 pb-7 pt-16 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1180px] gap-10 border-b border-zinc-800 pb-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div><Logo light /><p className="mt-6 max-w-xs text-sm leading-7 text-[#d5cfdd]">Cari barang tanpa muter-muter. Jualan tanpa kebanyakan langkah.</p><div className="mt-6 flex gap-2"><a className="grid size-9 place-items-center rounded-full border border-white/15 text-[#d5cfdd] transition hover:border-violet-400 hover:text-white" href="https://www.instagram.com/nemu_ai_/" aria-label="Instagram"><Camera size={16} /></a><a className="grid size-9 place-items-center rounded-full border border-white/15 text-[#d5cfdd] transition hover:border-violet-400 hover:text-white" href="https://www.tiktok.com/@nemu_ai_" aria-label="TikTok"><Music2 size={16} /></a><a className="grid size-9 place-items-center rounded-full border border-white/15 text-[#d5cfdd] transition hover:border-violet-400 hover:text-white" href="mailto:hello@nemu-ai.com" aria-label="Email"><Mail size={16} /></a></div></div>
        {[
          ['NEMU',[['Belanja','/shop'],['Mode AI','/ai-mode'],['Mulai jualan','https://seller.nemu-ai.com/register'],['Tentang kami','https://shop.nemu-ai.com/about']]],
          ['Bantuan',[['Pusat bantuan','https://shop.nemu-ai.com/help'],['Pengiriman','https://shop.nemu-ai.com/pengiriman'],['Retur & garansi','https://shop.nemu-ai.com/retur-garansi']]],
          ['Legal',[['Privasi','https://shop.nemu-ai.com/privacy'],['Syarat','https://shop.nemu-ai.com/terms'],['Hapus akun','https://shop.nemu-ai.com/account-deletion']]],
        ].map(([title,links])=><div className="hidden md:block" key={title as string}><p className="mb-5 text-[10px] font-black uppercase tracking-[.16em] text-lime-300">{title as string}</p><div className="space-y-3">{(links as string[][]).map(([label,href])=><a className="flex items-center gap-1.5 text-[11px] text-zinc-400 transition hover:text-white" href={href} key={label}>{label}<ArrowUpRight size={11}/></a>)}</div></div>)}
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-2 pt-6 text-[9px] text-[#91899a] sm:flex-row sm:justify-between"><span>© 2026 PT Nusa Era Modern Unggul</span><span>Dibuat buat yang cari barang dan yang lagi jualan.</span></div>
    </footer>
  );
}
