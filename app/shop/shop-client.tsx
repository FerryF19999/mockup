'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Check, Heart, ShoppingBag, Sparkles } from 'lucide-react';

const suggestions = ['Kado buat ibu 200 ribuan', 'Sepatu putih buat kuliah', 'HP bagus di bawah 1 juta'];

export function ShopSearch() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');

  function submit(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    setMessage(value ? `Sip, kami siap nyaring pilihan buat “${value}”.` : 'Tulis dulu barang yang kamu cari, ya.');
  }

  return (
    <div className="min-w-0">
      <form className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-[0_12px_32px_rgba(54,41,92,.10)] sm:flex-row sm:items-center" onSubmit={submit} role="search">
        <span className="hidden size-10 shrink-0 place-items-center rounded-xl bg-[#f0edff] text-[#5b3fd5] sm:grid"><Sparkles size={18}/></span>
        <input className="min-w-0 flex-1 rounded-xl bg-[#f7f6f8] px-4 py-3.5 text-sm font-semibold text-[#292333] outline-none placeholder:font-medium placeholder:text-[#81798d] focus:ring-2 focus:ring-violet-200" value={query} onChange={event=>setQuery(event.target.value)} placeholder="Contoh: sepatu putih buat kuliah, 200 ribuan" aria-label="Ceritakan produk yang dicari"/>
        <button className="inline-flex h-11 items-center justify-center gap-3 rounded-xl bg-[#5b3fd5] px-5 text-[10px] font-black text-white transition hover:bg-[#4d32c4]" type="submit">Cariin <ArrowRight size={15}/></button>
      </form>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">{suggestions.map(item=><button className="shrink-0 rounded-full border border-[#dcd5ee] bg-white/75 px-3 py-2 text-[8px] font-bold text-[#5b3fd5] transition hover:bg-white" type="button" key={item} onClick={()=>{setQuery(item);setMessage('')}}>{item}</button>)}</div>
      <p className="mt-2 min-h-4 text-[9px] font-bold text-[#5b3fd5]" role="status" aria-live="polite">{message}</p>
    </div>
  );
}

export function FavoriteButton({ name }: { name:string }) {
  const [active,setActive]=useState(false);
  return <button className={`absolute right-2 top-2 grid size-9 place-items-center rounded-full shadow-sm backdrop-blur transition ${active?'bg-[#e44869] text-white':'bg-white/95 text-[#625b6d] hover:text-[#e44869]'}`} type="button" onClick={()=>setActive(!active)} aria-pressed={active} aria-label={`${active?'Hapus':'Simpan'} ${name}`}><Heart size={16} fill={active?'currentColor':'none'}/></button>;
}

export function CartButton({ name }: { name:string }) {
  const [added,setAdded]=useState(false);
  return <button className={`mt-3 flex h-9 w-full items-center justify-center gap-2 rounded-xl text-[9px] font-black transition ${added?'bg-[#eff9d2] text-[#4f6812]':'bg-[#292333] text-white hover:bg-[#5b3fd5]'}`} type="button" onClick={()=>setAdded(!added)} aria-pressed={added} aria-label={`${added?'Hapus':'Masukkan'} ${name} ${added?'dari':'ke'} keranjang`}>{added?<><Check size={14}/> Udah masuk</>:<><ShoppingBag size={14}/> Masukin</>}</button>;
}

export function CategoryFilter({ categories }: { categories:string[] }) {
  const [active,setActive]=useState('Semua');
  return <><div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="group" aria-label="Filter produk">{categories.map(category=><button className={`shrink-0 rounded-full border px-4 py-2.5 text-[9px] font-black transition ${active===category?'border-[#5b3fd5] bg-[#5b3fd5] text-white':'border-[#e4e0e9] bg-white text-[#625b6d] hover:border-[#b9acd9]'}`} type="button" onClick={()=>setActive(category)} key={category}>{category}</button>)}</div><p className="mt-1 min-h-4 text-[8px] text-[#81798d]" role="status">{active==='Semua'?'Semua pilihan buat kamu.':`Pilihan yang tampil: ${active}.`}</p></>;
}
