'use client';

import { ArrowUpRight, ChevronRight, Minus, Plus, RefreshCw, RotateCcw, RotateCw, ShieldCheck, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
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
  const [zoom, setZoom] = useState(1);
  const [tilt, setTilt] = useState(0);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const drag = useRef<{ x: number; y: number } | null>(null);

  const resetView = () => {
    setZoom(1);
    setTilt(0);
    setPan({ x: 0, y: 0 });
  };

  const setSafeZoom = (next: number) => {
    const value = Math.min(2.5, Math.max(1, next));
    setZoom(value);
    if (value === 1) setPan({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (!open) return;
    resetView();
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);

  return (
    <>
      <button className="mt-2 inline-flex items-center gap-1.5 text-[8px] font-black text-[#704BFD] transition hover:gap-2.5" type="button" onClick={() => setOpen(true)}>Lihat produk <ChevronRight size={12}/></button>
      {open && createPortal(<div className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-[#241e2e]/45 p-4 backdrop-blur-sm" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
        <section className="relative w-full max-w-[880px] overflow-hidden rounded-[28px] bg-white shadow-2xl" role="dialog" aria-modal="true" aria-label={`Lihat produk ${name}`}>
          <button className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full bg-white/90 text-[#655a72] shadow-md transition hover:bg-white hover:text-[#704BFD]" type="button" onClick={() => setOpen(false)} aria-label="Tutup detail produk"><X size={18}/></button>
          <div className="grid md:grid-cols-[1.05fr_.95fr]">
            <div
              className="group relative flex aspect-square min-h-[320px] touch-none select-none items-center justify-center overflow-hidden bg-[#f1eeff] md:aspect-auto"
              onPointerDown={(event) => {
                drag.current = { x: event.clientX, y: event.clientY };
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerMove={(event) => {
                if (!drag.current) return;
                const dx = event.clientX - drag.current.x;
                const dy = event.clientY - drag.current.y;
                drag.current = { x: event.clientX, y: event.clientY };
                if (zoom > 1) setPan((current) => ({ x: Math.max(-110, Math.min(110, current.x + dx)), y: Math.max(-110, Math.min(110, current.y + dy)) }));
                else setTilt((current) => Math.max(-18, Math.min(18, current + dx * .12)));
              }}
              onPointerUp={(event) => {
                drag.current = null;
                event.currentTarget.releasePointerCapture(event.pointerId);
              }}
              onPointerCancel={() => { drag.current = null; }}
              onWheel={(event) => {
                event.preventDefault();
                setSafeZoom(zoom + (event.deltaY < 0 ? .15 : -.15));
              }}
            >
              <div className="absolute inset-0 opacity-60" style={{background:'radial-gradient(circle at 50% 42%,rgba(255,255,255,.92),rgba(255,255,255,0) 54%)'}}/>
              <div className="absolute left-4 top-4 z-10 rounded-full border border-white/70 bg-white/85 px-3 py-2 text-[8px] font-black text-[#704BFD] shadow-sm backdrop-blur">TAMPILAN INTERAKTIF</div>
              <div
                className="size-full cursor-grab bg-cover bg-center bg-no-repeat will-change-transform active:cursor-grabbing"
                role="img"
                aria-label={`${name}, tampilan bisa diperbesar dan digeser`}
                style={{
                  backgroundImage:`url('${sprite}')`,
                  backgroundSize:'300% 200%',
                  backgroundPosition:position,
                  transform:`perspective(900px) translate3d(${pan.x}px,${pan.y}px,0) scale(${zoom}) rotateY(${tilt}deg)`,
                  transition: drag.current ? 'none' : 'transform 220ms ease',
                }}
              />
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/70 bg-white/90 p-1.5 shadow-lg backdrop-blur">
                <button className="grid size-9 place-items-center rounded-full text-[#704BFD] transition hover:bg-[#F2EFFF] disabled:opacity-35" type="button" onClick={() => setSafeZoom(zoom - .25)} disabled={zoom <= 1} aria-label="Perkecil foto"><Minus size={16}/></button>
                <span className="min-w-11 text-center text-[8px] font-black text-[#554d60]">{Math.round(zoom * 100)}%</span>
                <button className="grid size-9 place-items-center rounded-full text-[#704BFD] transition hover:bg-[#F2EFFF] disabled:opacity-35" type="button" onClick={() => setSafeZoom(zoom + .25)} disabled={zoom >= 2.5} aria-label="Perbesar foto"><Plus size={16}/></button>
                <span className="mx-1 h-6 w-px bg-[#ddd6e7]"/>
                <button className="grid size-9 place-items-center rounded-full text-[#704BFD] transition hover:bg-[#F2EFFF]" type="button" onClick={() => setTilt((value) => Math.max(-18, value - 8))} aria-label="Putar tampilan ke kiri"><RotateCcw size={15}/></button>
                <button className="grid size-9 place-items-center rounded-full text-[#704BFD] transition hover:bg-[#F2EFFF]" type="button" onClick={() => setTilt((value) => Math.min(18, value + 8))} aria-label="Putar tampilan ke kanan"><RotateCw size={15}/></button>
                <button className="grid size-9 place-items-center rounded-full text-[#704BFD] transition hover:bg-[#F2EFFF]" type="button" onClick={resetView} aria-label="Kembalikan tampilan"><RefreshCw size={14}/></button>
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-9">
              <span className="w-fit rounded-full bg-[#F2EFFF] px-3 py-1.5 text-[8px] font-black text-[#704BFD]">{badge}</span>
              <h2 className="mt-4 text-3xl font-black tracking-[-.045em] text-[#393047]">{name}</h2>
              <strong className="mt-3 text-2xl text-[#704BFD]">{price}</strong>
              <p className="mt-2 text-[10px] font-semibold text-[#6B6B75]">{note}</p>
              <p className="mt-4 rounded-xl border border-[#e4dff0] bg-[#faf9fc] px-4 py-3 text-[8px] font-bold leading-5 text-[#6B6B75]">Zoom buat cek detail. Saat diperbesar, geser fotonya. Saat normal, geser buat lihat sudut tampilannya.</p>
              <div className="mt-6 flex items-start gap-3 rounded-2xl bg-[#f6f4f8] p-4"><ShieldCheck className="mt-0.5 shrink-0 text-[#704BFD]" size={18}/><p className="text-[9px] leading-5 text-[#655d70]">Cek kondisi, ongkir, dan info seller lengkap sebelum checkout.</p></div>
              <div className="mt-6 flex flex-wrap gap-2"><a className="inline-flex items-center gap-2 rounded-full bg-[#704BFD] px-5 py-3 text-[9px] font-black text-white transition hover:bg-[#5638c8]" href={liveUrl}>Buka di NEMU asli <ArrowUpRight size={14}/></a><button className="rounded-full border border-[#d8d1e2] px-5 py-3 text-[9px] font-black text-[#655a72]" type="button" onClick={() => setOpen(false)}>Nanti dulu</button></div>
            </div>
          </div>
        </section>
      </div>, document.body)}
    </>
  );
}
