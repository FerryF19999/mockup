'use client';

import { FormEvent, useState } from 'react';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';

const suggestions = ['Outfit kondangan under 300k', 'Kado buat ibu', 'HP bagus under 1 juta'];

export function ShopSearch() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  function submit(event: FormEvent) { event.preventDefault(); const value=query.trim(); setMessage(value ? `Oke, NEMU lagi nyari “${value}”. Tunggu bentar ✨` : 'Mau apa? Ketik dulu, ya.'); }
  return <div className="min-w-0"><form className="flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-sm sm:flex-row sm:items-center" onSubmit={submit} role="search"><span className="hidden size-9 shrink-0 place-items-center rounded-xl bg-violet-50 text-violet-700 sm:grid"><Sparkles size={17}/></span><input className="min-w-0 flex-1 rounded-xl bg-zinc-50 px-4 py-3 text-[10px] outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-violet-200" value={query} onChange={(event)=>setQuery(event.target.value)} placeholder="Contoh: sepatu putih under 200k" aria-label="Cari produk dengan NEMU"/><button className="flex items-center justify-center gap-3 rounded-xl bg-violet-600 px-5 py-3 text-[9px] font-black text-white transition hover:bg-violet-700" type="submit">Cariin <ArrowRight size={15}/></button></form><div className="mt-2 flex gap-1.5 overflow-x-auto [scrollbar-width:none]">{suggestions.map(item=><button className="shrink-0 rounded-full border border-violet-200 bg-white/70 px-3 py-1.5 text-[8px] font-semibold text-violet-800 transition hover:bg-white" type="button" key={item} onClick={()=>{setQuery(item);setMessage('')}}>{item}</button>)}</div><p className="mt-1.5 min-h-3 text-[8px] font-semibold text-violet-800" role="status" aria-live="polite">{message}</p></div>;
}

export function FavoriteButton({ name }: { name:string }) {
  const [active,setActive]=useState(false);
  return <button className={`absolute right-2 top-2 grid size-8 place-items-center rounded-full shadow-sm backdrop-blur transition ${active?'bg-rose-500 text-white':'bg-white/90 text-zinc-600 hover:text-rose-500'}`} type="button" onClick={()=>setActive(!active)} aria-pressed={active} aria-label={`${active?'Hapus':'Tambah'} ${name} ${active?'dari':'ke'} favorit`}><Heart size={15} fill={active?'currentColor':'none'}/></button>;
}

export function CategoryFilter({ categories }: { categories:string[] }) {
  const [active,setActive]=useState('Semua');
  return <><div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]" role="group" aria-label="Filter kategori">{categories.map(category=><button className={`shrink-0 rounded-full border px-4 py-2 text-[9px] font-bold transition ${active===category?'border-violet-600 bg-violet-600 text-white':'border-zinc-200 bg-white text-zinc-600 hover:border-violet-300'}`} type="button" onClick={()=>setActive(category)} key={category}>{category}</button>)}</div><p className="mt-1 min-h-4 text-[8px] text-zinc-400" role="status">{active==='Semua'?'Semua barang buat kamu.':`Oke, sekarang lihat: ${active}.`}</p></>;
}
