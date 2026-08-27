'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Camera, Globe2, Heart, Home, Mail, Menu, Music2, Search, ShoppingCart, Smartphone, Sparkles, UserRound, X } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export function Logo({ light = false }: { light?: boolean }) {
  return <Link className="inline-flex items-center" href="/" aria-label="NEMU AI beranda"><img className={`h-7 w-auto sm:h-8 ${light?'brightness-0 invert':''}`} src="https://nemu-ai.com/_next/static/media/nemu-logo.d670f3d9.svg" alt="nemu.ai"/></Link>;
}

export function Header({ showSearch = true, landing = false }: { showSearch?: boolean; landing?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const aiActive = pathname === '/ai-mode';
  const [switching, setSwitching] = useState(false);

  useEffect(() => {
    document.body.classList.remove('route-leaving');
    setSwitching(false);
  }, [pathname]);

  const switchMode = (target: '/shop' | '/ai-mode') => {
    if ((target === '/ai-mode' && aiActive) || (target === '/shop' && !aiActive)) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setSwitching(true);
    if (!reduced) document.body.classList.add('route-leaving');
    window.setTimeout(() => {
      const navigate = () => router.push(target);
      const withTransition = document as Document & { startViewTransition?: (callback: () => void) => void };
      if (!reduced && withTransition.startViewTransition) withTransition.startViewTransition(navigate);
      else navigate();
    }, reduced ? 0 : 280);
  };

  if (landing) return (
    <div className="sticky top-0 z-50 bg-[#704bfd] px-4 py-3 text-white sm:px-6">
      <header className="mx-auto flex max-w-[1320px] items-center justify-between gap-4">
        <Logo light />
        <nav className="hidden items-center gap-7 text-[9px] font-black md:flex" aria-label="Navigasi landing page">
          <a className="transition hover:text-[#cfff43]" href="#seller-show-heading">Yang lagi seru</a>
          <a className="transition hover:text-[#cfff43]" href="#fitur-seller">Buat seller</a>
          <a className="transition hover:text-[#cfff43]" href="#seller-pricing">Harga</a>
        </nav>
        <div className="flex items-center gap-2">
          <a className="hidden px-4 py-3 text-[9px] font-black text-white sm:block" href="https://shop.nemu-ai.com/login">Masuk</a>
          <a className="rounded-full bg-[#cfff43] px-5 py-3 text-[9px] font-black text-[#17131f] transition hover:-translate-y-0.5 hover:bg-white" href="#jadwal-onboarding">Mulai jualan</a>
        </div>
      </header>
    </div>
  );
  const modeToggle = <div className={`nemu-mode-toggle mr-1 flex shrink-0 items-center rounded-full border p-1 transition duration-300 ${aiActive||switching?'border-[#704BFD] bg-[#17131F]':'border-[#ddd6e7] bg-white'}`} role="group" aria-label="Pilih cara mencari"><button className={`nemu-mode-regular flex h-8 items-center gap-1.5 rounded-full px-2.5 text-[8px] font-black transition sm:px-3 ${!aiActive&&!switching?'bg-[#0B0B0E] text-white shadow':'text-[#6B6B75]'}`} type="button" onClick={()=>switchMode('/shop')} aria-pressed={!aiActive}><Search size={12}/><span className="hidden lg:inline">Cari biasa</span></button><button className={`flex h-8 items-center gap-1.5 rounded-full px-2.5 text-[8px] font-black transition sm:px-3 ${aiActive||switching?'bg-[#EDE8FF] text-[#0B0B0E] shadow':'text-[#704BFD] hover:bg-[#F2EFFF]'}`} type="button" onClick={()=>switchMode('/ai-mode')} aria-pressed={aiActive}><Sparkles size={12}/><span className="hidden lg:inline">Mode AI</span></button></div>;

  return (
    <div className="sticky top-0 z-50 bg-[#FBFBFD]/88 px-2 py-2 backdrop-blur-2xl sm:px-4">
      <span className={`pointer-events-none fixed left-1/2 top-12 z-[100] size-16 -translate-x-1/2 rounded-full bg-[#704BFD] transition-all duration-500 ease-[cubic-bezier(.2,.8,.2,1)] ${switching?'scale-[42] opacity-100':'scale-0 opacity-0'}`} aria-hidden="true"/>
      <div className="mx-auto max-w-[1280px] overflow-hidden rounded-[22px] border border-[#e4dfeb] bg-white/94 shadow-[0_12px_40px_rgba(47,34,67,.09)]">
      <header className="nemu-header-main grid min-h-[64px] grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-2 sm:min-h-[68px] sm:gap-6 sm:px-5">
        <div className="nemu-header-logo"><Logo /></div>
        {showSearch ? <form className={`nemu-header-search group flex h-11 min-w-0 items-center rounded-full border pl-3 transition duration-300 focus-within:ring-4 focus-within:ring-violet-100 sm:h-12 sm:pl-4 ${switching?'scale-[1.015] border-[#704BFD] bg-[#ede8ff] shadow-xl':'border-[#cfc7dc] bg-[#f8f7fa] focus-within:border-[#704BFD] focus-within:bg-white'}`} action="/shop" role="search"><Search size={17} className="shrink-0 text-[#704BFD]" /><input className="min-w-0 flex-1 bg-transparent px-2 text-xs font-medium text-[#332d3d] outline-none placeholder:text-[#7c7487] sm:px-3" name="q" placeholder="Cari barang yang kamu mau" aria-label="Cari produk" />{modeToggle}</form> : <div className={`flex h-11 min-w-0 items-center justify-end rounded-full border px-1.5 transition duration-300 sm:h-12 sm:justify-between sm:pl-4 ${aiActive?'border-[#704BFD] bg-[#17131F] text-white':'border-[#ded8e8] bg-[#f6f3fb] text-[#736a7d]'}`}><span className="hidden min-w-0 items-center gap-2 text-[9px] font-bold sm:flex"><Sparkles size={14} className="shrink-0 text-[#8a6df0]"/><span className="truncate">{aiActive?'Bilang aja, NEMU siap bantu':'Pilih cara kamu mau mencari'}</span></span>{modeToggle}</div>}
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Menu akun"><Link className="hidden size-10 place-items-center rounded-full text-[#6B6B75] transition hover:bg-violet-50 hover:text-[#704BFD] sm:grid" href="/shop" aria-label="Favorit"><Heart size={19} /></Link><Link className="relative grid size-10 place-items-center rounded-full bg-[#F2EFFF] text-[#704BFD] transition hover:bg-[#EDE8FF]" href="/shop" aria-label="Keranjang belanja"><ShoppingCart size={20} strokeWidth={2.2}/><span className="absolute -right-0.5 -top-0.5 grid size-4 place-items-center rounded-full bg-[#704BFD] text-[8px] font-black text-white shadow-sm">2</span></Link><a className="hidden rounded-full bg-[#0B0B0E] px-5 py-3 text-[10px] font-black text-white transition hover:bg-[#704BFD] md:block" href="https://shop.nemu-ai.com/login">Masuk</a></nav>
      </header>
      <nav className="nemu-category-nav flex snap-x items-center overflow-x-auto border-t border-[#eeeaf2] text-[9px] font-bold text-[#6B6B75] [scrollbar-width:none]" aria-label="Kategori populer"><Link className="nemu-category-all flex shrink-0 snap-start items-center gap-2 font-black text-[#0B0B0E]" href="/shop"><Menu size={14} /> Semua kategori</Link>{['Lagi promo','Fashion','HP & gadget','Rumah','Beauty','Preloved'].map(item=><Link className="nemu-category-link shrink-0 snap-start transition hover:text-[#704BFD]" href="/shop" key={item}>{item}</Link>)}</nav>
      </div>
    </div>
  );
}

export function MobileDock() {
  const items = [
    { icon: Home, label: 'Beranda', href: '/' },
    { icon: Search, label: 'Cari', href: '/shop' },
    { icon: Sparkles, label: 'Tanya', href: '/ai-mode', special: true },
    { icon: ShoppingCart, label: 'Keranjang', href: '/shop' },
    { icon: UserRound, label: 'Akun', href: 'https://shop.nemu-ai.com/login' },
  ];
  return <nav className="mobile-dock" aria-label="Navigasi cepat">{items.map(({icon:Icon,label,href,special})=><a className={special?'mobile-dock-special':''} href={href} key={label}><span><Icon size={18}/></span><b>{label}</b></a>)}</nav>;
}

export function ShopChoiceButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', close);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', close);
      document.body.style.overflow = '';
    };
  }, [open]);

  return <>
    <button className="inline-flex items-center gap-3 rounded-full bg-[#704bfd] px-6 py-4 text-[10px] font-black text-white shadow-[0_8px_20px_rgba(112,75,253,.26)] transition hover:-translate-y-1 hover:bg-[#5a36e8]" type="button" onClick={()=>setOpen(true)}><ShoppingCart size={17}/> Mulai belanja <ArrowRight size={15}/></button>
    {open&&<div className="fixed inset-0 z-[120] grid place-items-end bg-[#17131f]/45 p-3 backdrop-blur-sm sm:place-items-center" role="presentation" onMouseDown={()=>setOpen(false)}>
      <section className="w-full max-w-[460px] rounded-[28px] bg-white p-5 text-[#0B0B0E] shadow-[0_30px_90px_rgba(22,12,48,.28)] sm:p-7" role="dialog" aria-modal="true" aria-labelledby="shop-choice-title" onMouseDown={event=>event.stopPropagation()}>
        <div className="flex items-start justify-between gap-5"><div><p className="text-[8px] font-black uppercase tracking-[.14em] text-[#704BFD]">Mau belanja lewat mana?</p><h2 id="shop-choice-title" className="mt-2 text-2xl font-black tracking-[-.04em]">Pilih yang paling enak buatmu.</h2></div><button className="grid size-10 shrink-0 place-items-center rounded-full bg-[#F2EFFF] text-[#704BFD]" type="button" onClick={()=>setOpen(false)} aria-label="Tutup pilihan"><X size={18}/></button></div>
        <div className="mt-6 grid gap-3">
          <Link className="group flex items-center gap-4 rounded-[20px] border border-[#ded8e8] p-4 transition hover:border-[#704BFD] hover:bg-[#F8F6FF]" href="/shop"><span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#704BFD] text-white"><Globe2 size={20}/></span><span className="min-w-0 flex-1"><b className="block text-sm">Lanjut di website</b><small className="mt-1 block text-[8px] text-[#6B6B75]">Langsung lihat katalog NEMU.</small></span><ArrowRight className="text-[#704BFD] transition group-hover:translate-x-1" size={17}/></Link>
          <div className="grid grid-cols-2 gap-3"><a className="flex min-w-0 items-center gap-2 rounded-[18px] bg-[#17131F] p-3 text-white" href="https://apps.apple.com/id/app/nemu-ai-marketplace/id6789514376"><Smartphone className="shrink-0" size={18}/><span className="min-w-0"><small className="block text-[7px] text-white/60">Download di</small><b className="block truncate text-[9px]">App Store</b></span></a><a className="flex min-w-0 items-center gap-2 rounded-[18px] bg-[#17131F] p-3 text-white" href="https://play.google.com/store/apps/details?id=com.nemump.nemumobile&pcampaignid=web_share"><Smartphone className="shrink-0" size={18}/><span className="min-w-0"><small className="block text-[7px] text-white/60">Download di</small><b className="block truncate text-[9px]">Google Play</b></span></a></div>
        </div>
      </section>
    </div>}
  </>;
}

export function Footer() {
  return (
    <footer className="bg-[#0B0B0E] px-4 pb-7 pt-16 text-white sm:px-6">
      <div className="mx-auto grid max-w-[1180px] gap-10 border-b border-zinc-800 pb-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div><Logo light /><p className="mt-6 max-w-xs text-sm leading-7 text-[#d5cfdd]">Marketplace buat nemuin barang seru. Tempat seller mulai jualan dengan toko, konten, pembayaran, dan kiriman yang sudah siap.</p><div className="mt-6 flex gap-2"><a className="grid size-9 place-items-center rounded-full border border-white/15 text-[#d5cfdd] transition hover:border-violet-400 hover:text-white" href="https://www.instagram.com/nemu_ai_/" aria-label="Instagram"><Camera size={16} /></a><a className="grid size-9 place-items-center rounded-full border border-white/15 text-[#d5cfdd] transition hover:border-violet-400 hover:text-white" href="https://www.tiktok.com/@nemu_ai_" aria-label="TikTok"><Music2 size={16} /></a><a className="grid size-9 place-items-center rounded-full border border-white/15 text-[#d5cfdd] transition hover:border-violet-400 hover:text-white" href="mailto:hello@nemu-ai.com" aria-label="Email"><Mail size={16} /></a></div></div>
        {[
          ['NEMU',[['Mulai belanja','/shop'],['Cari pakai Mode AI','/ai-mode'],['Buka toko gratis','#jadwal-onboarding'],['Harga seller','/#seller-pricing']]],
          ['Buat seller',[['Website toko','/#seller-tools-heading'],['AI marketing','/#seller-tools-heading'],['Pembayaran & kurir','/#payment-heading'],['Download aplikasi','/#download-app']]],
          ['Legal',[['Privasi','https://shop.nemu-ai.com/privacy'],['Syarat','https://shop.nemu-ai.com/terms'],['Hapus akun','https://shop.nemu-ai.com/account-deletion']]],
        ].map(([title,links])=><div className="hidden md:block" key={title as string}><p className="mb-5 text-[10px] font-black uppercase tracking-[.16em] text-[#b9a8ff]">{title as string}</p><div className="space-y-3">{(links as string[][]).map(([label,href])=><a className="flex items-center gap-1.5 text-[11px] text-zinc-400 transition hover:text-white" href={href} key={label}>{label}<ArrowUpRight size={11}/></a>)}</div></div>)}
      </div>
      <div className="mx-auto flex max-w-[1180px] flex-col gap-2 pt-6 text-[9px] text-[#91899a] sm:flex-row sm:justify-between"><span>© 2026 PT Nusa Era Modern Unggul</span><span>Buyer lebih gampang nemu. Seller lebih jelas tumbuh.</span></div>
    </footer>
  );
}
