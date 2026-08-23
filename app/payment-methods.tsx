const bankLogos = [
  ['/payment-logos/bri.svg', 'BRI'],
  ['/payment-logos/bni.svg', 'BNI'],
  ['/payment-logos/permata.svg', 'PermataBank'],
  ['https://upload.wikimedia.org/wikipedia/commons/3/38/CIMB_Niaga_logo.svg', 'CIMB Niaga'],
];

export function PaymentMethods() {
  return <section className="border-y border-[#ececef] bg-[#f4f0ff] px-4 py-20 sm:px-6 lg:py-24" aria-labelledby="payment-heading">
    <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
      <div><p className="text-[9px] font-black uppercase tracking-[.14em] text-[#704bfd]">Pembayaran online lewat DOKU</p><h2 id="payment-heading" className="mt-3 text-4xl font-black leading-[.96] tracking-[-.055em] sm:text-5xl">Bayarnya pilih yang paling gampang.</h2><p className="mt-5 max-w-md text-sm leading-7 text-[#6b6b75]">Mau scan, transfer, atau bayar di minimarket juga bisa. Biayanya kelihatan sebelum lanjut.</p></div>
      <div className="border-t border-[#dcdce0]">
        <div className="grid gap-5 border-b border-[#dcdce0] py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center"><span className="grid h-16 w-32 place-items-center bg-white p-3"><img className="max-h-10 max-w-full object-contain" src="/payment-logos/qris.svg" alt="Logo QRIS"/></span><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Scan langsung</p><b className="mt-1 block text-lg">QRIS</b></div><span className="text-[9px] font-black text-[#5a36e8]">Biaya 0,7%</span></div>
        <div className="grid gap-5 border-b border-[#dcdce0] py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center"><div className="grid grid-cols-2 gap-4">{bankLogos.map(([logo,name])=><img className="h-7 max-w-[92px] object-contain object-left" src={logo} alt={`Logo ${name}`} key={name}/>)}</div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Virtual Account</p><b className="mt-1 block text-lg">BRI, BNI, Permata, CIMB Niaga</b></div><span className="text-[9px] font-black text-[#5a36e8]">Biaya Rp4.000</span></div>
        <div className="grid gap-5 border-b border-[#dcdce0] py-6 sm:grid-cols-[150px_1fr_auto] sm:items-center"><div className="flex items-center gap-4"><img className="h-8 w-auto object-contain" src="/payment-logos/alfamart.svg" alt="Logo Alfamart"/><img className="h-8 w-auto object-contain" src="/payment-logos/indomaret.svg" alt="Logo Indomaret"/></div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Bayar di kasir</p><b className="mt-1 block text-lg">Alfamart atau Indomaret</b></div><span className="text-[9px] font-black text-[#5a36e8]">Biaya Rp5.000</span></div>
      </div>
    </div>
  </section>;
}
