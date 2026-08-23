'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Bot, Camera, Check, Heart, Search, ShoppingCart, Sparkles } from 'lucide-react';

const suggestions = ['Kado buat ibu, budget 200 ribu', 'Sepatu putih buat kuliah dan nggak gampang kotor', 'HP enak buat ojol di bawah 1 juta'];

export function ShopSearch() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    if (!value) {
      setMessage('Tulis dulu nama barangnya, ya.');
      return;
    }
    setMessage(`Sip, lagi nyari “${value}” buat kamu.`);
  }

  return (
    <div className="min-w-0">
      <form className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_12px_32px_rgba(54,41,92,.10)] sm:flex-row sm:items-center" onSubmit={submit} role="search" aria-label="Cari produk biasa">
        <span className="hidden size-10 shrink-0 place-items-center rounded-xl bg-[#F2EFFF] text-[#704BFD] sm:grid"><Search size={18}/></span>
        <input className="min-w-0 flex-1 rounded-xl bg-[#f7f6f8] px-4 py-3.5 text-sm font-semibold text-[#393047] outline-none placeholder:font-medium placeholder:text-[#6B6B75] focus:ring-2 focus:ring-violet-200" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Ketik nama barang, misalnya: sepatu putih" aria-label="Nama produk yang dicari"/>
        <button className="inline-flex h-11 items-center justify-center gap-3 rounded-xl bg-[#704BFD] px-5 text-[9px] font-black text-white transition hover:bg-[#5638c8]" type="submit">Cari <ArrowRight size={15}/></button>
      </form>
      <a className="mt-3 inline-flex items-center gap-2 text-[9px] font-black text-[#704BFD]" href="/ai-mode"><Sparkles size={13}/> Nggak tahu nama barangnya? Tanya Mode AI <ArrowRight size={12}/></a>
      <p className="mt-2 min-h-4 text-[9px] font-bold text-[#704BFD]" role="status" aria-live="polite">{message}</p>
    </div>
  );
}

export function AiShoppingAssistant() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState('');

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    if (!value) {
      setMessage('Ceritain dulu yang kamu butuhin, ya.');
      setResult('');
      return;
    }
    setMessage('');
    setResult(value);
  }

  return <div className="min-w-0">
    <form className="rounded-[24px] border border-[#d8d0ed] bg-white p-3 shadow-[0_10px_28px_rgba(74,52,135,.08)]" onSubmit={submit} role="search" aria-label="Mode AI NEMU">
      <div className="flex gap-3 px-2 pt-2"><span className="mt-1 grid size-10 shrink-0 place-items-center rounded-[14px] bg-[#704BFD] text-white shadow-md"><Bot size={19}/></span><textarea className="min-h-20 min-w-0 flex-1 resize-none bg-transparent py-2 text-sm font-semibold leading-6 text-[#0B0B0E] outline-none placeholder:font-medium placeholder:text-[#7B7482]" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Contoh: sepatu putih buat kuliah, budget 300 ribuan, empuk." aria-label="Ceritakan barang yang kamu butuhkan"/></div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 border-t border-[#ddd5f0] pt-3"><button className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[8px] font-black text-[#655a72] shadow-sm transition hover:text-[#704BFD]" type="button" onClick={()=>setMessage('Fitur kirim foto segera hadir. Untuk sekarang, ceritain cirinya dulu ya.')}><Camera size={13}/> Tambah foto</button><button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#704BFD] px-6 py-3.5 text-[9px] font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#5638c8]" type="submit">Cariin buat aku <ArrowRight size={14}/></button></div>
    </form>
    <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">{suggestions.map(item=><button className="shrink-0 rounded-full border border-[#dcd5ee] bg-white/80 px-3 py-2 text-[8px] font-bold text-[#704BFD] transition hover:border-[#b9a8eb] hover:bg-white" type="button" key={item} onClick={()=>{setQuery(item);setMessage('');setResult('')}}>{item}</button>)}</div>
    {result && <div className="mt-4 rounded-[22px] border border-[#ded7ed] bg-white p-5 shadow-sm" role="status" aria-live="polite"><div className="flex items-start gap-3"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[#F2EFFF] text-[#704BFD]"><Check size={17}/></span><div className="min-w-0 flex-1"><b className="text-[11px] text-[#393047]">Oke, NEMU nangkep.</b><p className="mt-1 text-[9px] leading-5 text-[#6d6378]">Kamu lagi cari: “{result}”</p><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full bg-[#F2EFFF] px-3 py-1.5 text-[8px] font-bold text-[#704BFD]">Cocok dulu</span><span className="rounded-full bg-[#F2EFFF] px-3 py-1.5 text-[8px] font-bold text-[#704BFD]">Harga masuk akal</span><span className="rounded-full bg-[#F2EFFF] px-3 py-1.5 text-[8px] font-bold text-[#704BFD]">Seller jelas</span></div><a className="mt-4 inline-flex items-center gap-2 text-[9px] font-black text-[#704BFD]" href="/shop#produk">Lihat yang paling cocok <ArrowRight size={13}/></a></div></div></div>}
    <p className="mt-2 min-h-4 text-[9px] font-bold text-[#704BFD]" role="status" aria-live="polite">{message}</p>
  </div>;
}

export function FavoriteButton({ name }: { name:string }) {
  const [active,setActive]=useState(false);
  return <button className={`absolute right-2 top-2 grid size-9 place-items-center rounded-full shadow-sm backdrop-blur transition ${active?'bg-[#e44869] text-white':'bg-white/95 text-[#6B6B75] hover:text-[#e44869]'}`} type="button" onClick={()=>setActive(!active)} aria-pressed={active} aria-label={`${active?'Hapus':'Simpan'} ${name}`}><Heart size={16} fill={active?'currentColor':'none'}/></button>;
}

export function CartButton({ name }: { name:string }) {
  const [added,setAdded]=useState(false);
  return <button className={`mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-xl text-[9px] font-black transition ${added?'bg-[#F2EFFF] text-[#704BFD]':'bg-[#704BFD] text-white hover:bg-[#5638c8]'}`} type="button" onClick={()=>setAdded(!added)} aria-pressed={added} aria-label={`${added?'Batalkan checkout':'Checkout'} ${name}`}>{added?<><Check size={14}/> Siap checkout</>:<><ShoppingCart className="text-[#FFD34E]" size={16}/> Checkout</>}</button>;
}

export function CategoryFilter({ categories }: { categories:string[] }) {
  const [active,setActive]=useState('Semua');
  return <><div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="group" aria-label="Filter produk">{categories.map(category=><button className={`shrink-0 rounded-full border px-4 py-2.5 text-[9px] font-black transition ${active===category?'border-[#704BFD] bg-[#704BFD] text-white':'border-[#e4e0e9] bg-white text-[#6B6B75] hover:border-[#b9acd9]'}`} type="button" onClick={()=>setActive(category)} key={category}>{category}</button>)}</div><p className="mt-1 min-h-4 text-[8px] text-[#6B6B75]" role="status">{active==='Semua'?'Semua pilihan buat kamu.':`Pilihan yang tampil: ${active}.`}</p></>;
}
