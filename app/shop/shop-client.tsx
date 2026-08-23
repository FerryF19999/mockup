'use client';

import { FormEvent, useMemo, useState } from 'react';

const suggestions = ['Outfit kondangan under 300k', 'Kado buat ibu', 'HP bagus under 1 juta'];

export function ShopSearch() {
  const [query, setQuery] = useState('');
  const [message, setMessage] = useState('');
  function submit(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    setMessage(value ? `Oke, NEMU lagi nyari “${value}”. Tunggu bentar ✨` : 'Mau apa? Ketik dulu, ya.');
  }
  return (
    <div className="shop-search-wrap">
      <form className="shop-search" onSubmit={submit} role="search">
        <span>✦</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Contoh: sepatu putih under 200k" aria-label="Cari produk dengan NEMU" /><button type="submit">Cariin <b>→</b></button>
      </form>
      <div className="search-suggestions">{suggestions.map((item) => <button type="button" key={item} onClick={() => { setQuery(item); setMessage(''); }}>{item}</button>)}</div>
      <p className="search-status" role="status" aria-live="polite">{message}</p>
    </div>
  );
}

export function FavoriteButton({ name }: { name: string }) {
  const [active, setActive] = useState(false);
  return <button className={`favorite ${active ? 'is-favorite' : ''}`} type="button" onClick={() => setActive(!active)} aria-pressed={active} aria-label={`${active ? 'Hapus' : 'Tambah'} ${name} ${active ? 'dari' : 'ke'} favorit`}>{active ? '♥' : '♡'}</button>;
}

export function CategoryFilter({ categories }: { categories: string[] }) {
  const [active, setActive] = useState('Semua');
  const label = useMemo(() => active === 'Semua' ? 'Semua barang buat kamu.' : `Oke, sekarang lihat: ${active}.`, [active]);
  return <><div className="filter-row" role="group" aria-label="Filter kategori">{categories.map((category) => <button type="button" className={active === category ? 'active' : ''} onClick={() => setActive(category)} key={category}>{category}</button>)}</div><p className="filter-status" role="status">{label}</p></>;
}
