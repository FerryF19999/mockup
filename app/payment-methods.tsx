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
        <div className="grid grid-cols-[92px_1fr] items-center gap-x-4 gap-y-2 border-b border-[#dcdce0] py-6 sm:grid-cols-[170px_minmax(0,1fr)_110px] sm:gap-5 sm:py-7"><div className="flex h-12 items-center"><img className="h-8 w-[92px] sm:h-9 sm:w-[130px] object-contain object-left" src="/payment-logos/qris.svg" alt="Logo QRIS"/></div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Scan langsung</p><b className="mt-1 block text-lg">QRIS</b></div><span className="col-start-2 text-left text-[9px] font-black text-[#5a36e8] sm:col-start-auto sm:text-right">Biaya 0,7%</span></div>
        <div className="grid grid-cols-[92px_1fr] items-center gap-x-4 gap-y-2 border-b border-[#dcdce0] py-6 sm:grid-cols-[170px_minmax(0,1fr)_110px] sm:gap-5 sm:py-7"><div className="grid w-[92px] grid-cols-2 gap-2 sm:w-[150px] sm:gap-x-4 sm:gap-y-3">{bankLogos.map(([logo,name])=><img className="h-5 w-[42px] object-contain object-left sm:h-6 sm:w-[66px]" src={logo} alt={`Logo ${name}`} key={name}/>)}</div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Virtual Account</p><b className="mt-1 block text-lg">BRI, BNI, Permata, CIMB Niaga</b></div><span className="col-start-2 text-left text-[9px] font-black text-[#5a36e8] sm:col-start-auto sm:text-right">Biaya Rp4.000</span></div>
        <div className="grid grid-cols-[92px_1fr] items-center gap-x-4 gap-y-2 py-6 sm:grid-cols-[170px_minmax(0,1fr)_110px] sm:gap-5 sm:py-7"><div className="grid w-[92px] grid-cols-2 items-center gap-2 sm:w-[150px] sm:gap-4"><img className="h-6 w-[42px] object-contain sm:h-7 sm:w-[68px]" src="/payment-logos/alfamart.svg" alt="Logo Alfamart"/><img className="h-6 w-[42px] object-contain sm:h-7 sm:w-[68px]" src="/payment-logos/indomaret.svg" alt="Logo Indomaret"/></div><div><p className="text-[8px] font-black uppercase tracking-[.13em] text-[#704bfd]">Bayar di kasir</p><b className="mt-1 block text-lg">Alfamart atau Indomaret</b></div><span className="col-start-2 text-left text-[9px] font-black text-[#5a36e8] sm:col-start-auto sm:text-right">Biaya Rp5.000</span></div>
      </div>
    </div>
  </section>;
}
