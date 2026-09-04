'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const slides = [
  {
    image: '/campaign-fyp-v2.png',
    eyebrow: 'LAGI FYP DI NEMU',
    title: 'Yang lagi ramai, ada di sini.',
    copy: 'Cek produk yang lagi ramai.',
    cta: 'Lihat yang lagi FYP',
    href: '#produk',
    accent: '#704BFD',
  },
  {
    image: '/banner-local-v1.png',
    eyebrow: 'BUATAN LOKAL',
    title: 'Yang lokal, nggak kalah cakep.',
    copy: 'Kopi, fashion, sampai kriya dari seller Indonesia ada di sini.',
    cta: 'Lihat produk lokal',
    href: '#produk',
    accent: '#704BFD',
  },
  {
    image: '/banner-preloved-v1.png',
    eyebrow: 'PRELOVED PILIHAN',
    title: 'Masih bagus, nggak harus baru.',
    copy: 'Kondisinya jelas dari awal. Harganya juga lebih ringan.',
    cta: 'Lihat preloved',
    href: '#produk',
    accent: '#704BFD',
  },
];

export function BannerCarousel() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setActive((value) => (value + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, [playing]);

  const move = (direction: number) => {
    setActive((value) => (value + direction + slides.length) % slides.length);
  };

  return (
    <section className="relative isolate min-h-[360px] overflow-hidden rounded-[26px] border border-[#ded8e8] bg-[#ece8f5] shadow-[0_18px_60px_rgba(52,40,83,.10)] sm:min-h-[330px]" aria-roledescription="carousel" aria-label="Promo pilihan NEMU">
      {slides.map((slide, index) => (
        <article
          className={`absolute inset-0 transition-opacity duration-700 ${index === active ? 'z-10 opacity-100' : 'pointer-events-none opacity-0'}`}
          aria-hidden={index !== active}
          key={slide.image}
        >
          <Image className="object-cover object-center" src={slide.image} alt="" fill priority={index === 0} sizes="(max-width: 1280px) 100vw, 1240px" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/75 to-transparent sm:via-white/45" />
          <div className="relative flex min-h-[360px] max-w-[620px] flex-col justify-center px-6 pb-16 pt-9 sm:min-h-[330px] sm:px-11 sm:pb-12" style={{ color: '#0B0B0E' }}>
            <span className="w-fit rounded-full bg-white/85 px-3 py-1.5 text-[8px] font-black tracking-[.13em] shadow-sm backdrop-blur" style={{ color: slide.accent }}>{slide.eyebrow}</span>
            <h2 className="mt-4 max-w-[520px] font-[var(--font-display)] text-[2.45rem] font-black leading-[.96] tracking-[-.055em] sm:text-5xl">{slide.title}</h2>
            <p className="mt-3 max-w-[430px] text-[11px] font-semibold leading-5 text-[#6B6B75] sm:text-xs">{slide.copy}</p>
            <Link className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-5 py-3 text-[9px] font-black text-white shadow-lg transition hover:-translate-y-0.5" href={slide.href} style={{ backgroundColor: slide.accent }}>
              {slide.cta} <ChevronRight size={14} />
            </Link>
          </div>
        </article>
      ))}

      <div className="absolute bottom-4 left-5 z-20 flex items-center gap-2 sm:left-11">
        <button className="grid size-8 place-items-center rounded-full border border-white/80 bg-white/85 text-[#704BFD] shadow-sm backdrop-blur transition hover:bg-white" onClick={() => move(-1)} aria-label="Banner sebelumnya"><ChevronLeft size={15} /></button>
        <div className="flex items-center gap-1.5 rounded-full bg-white/80 px-3 py-2 shadow-sm backdrop-blur">
          {slides.map((slide, index) => <button className={`h-1.5 rounded-full transition-all ${index === active ? 'w-5 bg-[#704BFD]' : 'w-1.5 bg-[#B7B2BF] hover:bg-[#6B6B75]'}`} onClick={() => setActive(index)} aria-current={index === active ? 'true' : undefined} aria-label={`Buka banner ${index + 1}: ${slide.eyebrow}`} key={slide.image} />)}
        </div>
        <button className="grid size-8 place-items-center rounded-full border border-white/80 bg-white/85 text-[#704BFD] shadow-sm backdrop-blur transition hover:bg-white" onClick={() => setPlaying((value) => !value)} aria-label={playing ? 'Jeda pergantian banner' : 'Putar pergantian banner'}>{playing ? <Pause size={13} /> : <Play size={13} />}</button>
        <button className="grid size-8 place-items-center rounded-full border border-white/80 bg-white/85 text-[#704BFD] shadow-sm backdrop-blur transition hover:bg-white" onClick={() => move(1)} aria-label="Banner berikutnya"><ChevronRight size={15} /></button>
      </div>
    </section>
  );
}
