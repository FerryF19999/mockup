'use client';

import { ArrowUpRight, ChevronRight, ShieldCheck, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  name: string;
  price: string;
  note: string;
  badge: string;
  sprite: string;
  position: string;
  liveUrl?: string;
};

export function ProductQuickView({ name, price, note, badge, sprite, position, liveUrl = 'https://shop.nemu-ai.com/' }: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);

  return (
    <>
      <button className="mt-2 inline-flex items-center gap-1.5 text-[8px] font-black text-[#5b3fd5] transition hover:gap-2.5" type="button" onClick={() => setOpen(true)}>Lihat detail <ChevronRight size={12}/></button>
      {open && createPortal(<div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#241e2e]/45 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
        <section className="relative w-full max-w-[760px] overflow-hidden rounded-[28px] bg-white shadow-2xl" role="dialog" aria-modal="true" aria-label={`Detail ${name}`}>
          <button className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-[#655a72] shadow-md transition hover:bg-white hover:text-[#5b3fd5]" type="button" onClick={() => setOpen(false)} aria-label="Tutup detail produk"><X size={18}/></button>
          <div className="grid md:grid-cols-[.9fr_1.1fr]">
            <div className="aspect-square min-h-[280px] bg-cover bg-center bg-no-repeat md:aspect-auto" role="img" aria-label={name} style={{backgroundImage:`url('${sprite}')`,backgroundSize:'300% 200%',backgroundPosition:position}}/>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <span className="w-fit rounded-full bg-[#f0edff] px-3 py-1.5 text-[8px] font-black text-[#5b3fd5]">{badge}</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-.045em] text-[#393047]">{name}</h2>
              <strong className="mt-3 text-2xl text-[#5b3fd5]">{price}</strong>
              <p className="mt-2 text-[10px] font-semibold text-[#716979]">{note}</p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#f6f4f8] p-4"><ShieldCheck className="mt-0.5 shrink-0 text-[#5b3fd5]" size={18}/><p className="text-[9px] leading-5 text-[#655d70]">Cek kondisi, ongkir, dan info seller lengkap sebelum checkout.</p></div>
              <div className="mt-6 flex flex-wrap gap-2"><a className="inline-flex items-center gap-2 rounded-full bg-[#6547db] px-5 py-3 text-[9px] font-black text-white transition hover:bg-[#5638c8]" href={liveUrl}>Buka di NEMU asli <ArrowUpRight size={14}/></a><button className="rounded-full border border-[#d8d1e2] px-5 py-3 text-[9px] font-black text-[#655a72]" type="button" onClick={() => setOpen(false)}>Nanti dulu</button></div>
            </div>
          </div>
        </section>
      </div>, document.body)}
    </>
  );
}
