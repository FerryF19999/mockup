import { Building2, ScanLine, Store } from 'lucide-react';

const bankLogos = [
  ['/payment-logos/bri.svg', 'BRI'],
  ['/payment-logos/bni.svg', 'BNI'],
  ['/payment-logos/permata.svg', 'PermataBank'],
  ['https://upload.wikimedia.org/wikipedia/commons/3/38/CIMB_Niaga_logo.svg', 'CIMB Niaga'],
];

export function PaymentMethods() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 lg:py-24" aria-labelledby="payment-heading">
      <div className="rounded-[36px] border border-[#ded8e7] bg-white p-6 shadow-[0_24px_70px_rgba(48,34,66,.08)] sm:p-8 lg:p-10">
        <div className="grid items-end gap-5 lg:grid-cols-[1fr_.7fr]"><div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704BFD]">Pembayaran online lewat DOKU</p><h2 id="payment-heading" className="mt-2 max-w-3xl text-4xl font-black leading-[.98] tracking-[-.055em] sm:text-5xl">Bayarnya pilih yang<br/>paling gampang.</h2></div><p className="max-w-md text-sm leading-7 text-[#6B6B75] lg:ml-auto">Mau scan, transfer, atau bayar di minimarket juga bisa. Biayanya kelihatan sebelum lanjut.</p></div>
        <div className="mt-9 grid gap-4 lg:grid-cols-12">
          <article className="relative overflow-hidden rounded-[28px] bg-[#EDE8FF] p-6 lg:col-span-4"><span className="absolute -right-10 -top-12 size-44 rounded-full border-[28px] border-white/35"/><span className="relative grid size-11 place-items-center rounded-2xl bg-[#0B0B0E] text-white"><ScanLine size={20}/></span><p className="relative mt-8 text-[8px] font-black uppercase tracking-[.13em] text-[#5D3EEA]">Scan langsung</p><div className="relative mt-3 flex items-center gap-4"><span className="grid h-16 w-28 place-items-center rounded-2xl bg-white p-3 shadow-sm"><img className="max-h-10 max-w-full object-contain" src="/payment-logos/qris.svg" alt="Logo QRIS"/></span><span><b className="block text-xl">QRIS</b><small className="mt-1 block text-[9px] font-bold text-[#5D3EEA]">Biaya 0,7%</small></span></div></article>
          <article className="rounded-[28px] border border-[#e5dfeb] bg-[#f7f5fa] p-6 lg:col-span-5"><span className="grid size-11 place-items-center rounded-2xl bg-[#F2EFFF] text-[#704BFD]"><Building2 size={20}/></span><div className="mt-5 flex items-end justify-between gap-4"><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#6B6B75]">Virtual Account</p><h3 className="mt-1 text-2xl font-black tracking-[-.04em]">Transfer dari bankmu.</h3></div><span className="shrink-0 rounded-full bg-white px-3 py-2 text-[8px] font-black text-[#704BFD]">Rp4.000</span></div><div className="mt-5 grid grid-cols-2 gap-2">{bankLogos.map(([logo,name])=><span className="grid h-14 place-items-center rounded-xl bg-white p-3 shadow-sm" key={name}><img className="max-h-8 max-w-full object-contain" src={logo} alt={`Logo ${name}`}/></span>)}</div></article>
          <article className="rounded-[28px] bg-[#0B0B0E] p-6 text-white lg:col-span-3"><span className="grid size-11 place-items-center rounded-2xl bg-white/10 text-[#EDE8FF]"><Store size={20}/></span><p className="mt-5 text-[8px] font-black uppercase tracking-[.13em] text-[#EDE8FF]">Bayar di kasir</p><h3 className="mt-1 text-2xl font-black tracking-[-.04em]">Sekalian lewat.</h3><p className="mt-2 text-[9px] leading-5 text-white/60">Biaya Rp5.000</p><div className="mt-5 grid gap-2"><span className="grid h-14 place-items-center rounded-xl bg-white p-3"><img className="max-h-9 max-w-full object-contain" src="/payment-logos/alfamart.svg" alt="Logo Alfamart"/></span><span className="grid h-14 place-items-center rounded-xl bg-white p-3"><img className="max-h-9 max-w-full object-contain" src="/payment-logos/indomaret.svg" alt="Logo Indomaret"/></span></div></article>
        </div>
        <p className="mt-5 text-center text-[8px] font-bold text-[#6B6B75]">Pilihan saat ini: QRIS, BRI, BNI, PermataBank, CIMB Niaga, Alfamart, dan Indomaret.</p>
      </div>
    </section>
  );
}
