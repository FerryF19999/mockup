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
      <div className="border-y border-[#dcdce0]">
        <div className="grid gap-5 border-b border-[#dcdce0] py-7 sm:grid-cols-[170px_minmax(0,1fr)_110px] sm:items-center"><div className="flex h-12 items-center"><img className="h-9 w-[130px] object-contain object-left" src="/payment-logos/qris.svg" alt="Logo QRIS"/></div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Scan langsung</p><b className="mt-1 block text-lg">QRIS</b></div><span className="text-left text-[9px] font-black text-[#5a36e8] sm:text-right">Biaya 0,7%</span></div>
        <div className="grid gap-5 border-b border-[#dcdce0] py-7 sm:grid-cols-[170px_minmax(0,1fr)_110px] sm:items-center"><div className="grid w-[150px] grid-cols-2 gap-x-4 gap-y-3">{bankLogos.map(([logo,name])=><img className="h-6 w-[66px] object-contain object-left" src={logo} alt={`Logo ${name}`} key={name}/>)}</div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Virtual Account</p><b className="mt-1 block text-lg">BRI, BNI, Permata, CIMB Niaga</b></div><span className="text-left text-[9px] font-black text-[#5a36e8] sm:text-right">Biaya Rp4.000</span></div>
        <div className="grid gap-5 py-7 sm:grid-cols-[170px_minmax(0,1fr)_110px] sm:items-center"><div className="grid w-[150px] grid-cols-2 items-center gap-4"><img className="h-7 w-[68px] object-contain" src="/payment-logos/alfamart.svg" alt="Logo Alfamart"/><img className="h-7 w-[68px] object-contain" src="/payment-logos/indomaret.svg" alt="Logo Indomaret"/></div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Bayar di kasir</p><b className="mt-1 block text-lg">Alfamart atau Indomaret</b></div><span className="text-left text-[9px] font-black text-[#5a36e8] sm:text-right">Biaya Rp5.000</span></div>
      </div>
    </div>
  </section>;
}
