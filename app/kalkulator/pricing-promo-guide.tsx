import { useState } from 'react';
import { parseRupiah, promotionBudget, type PricingInput } from './pricing';
import { referenceStats, skincareReferences } from './skincare-reference';
import { rupiah } from './comparison-details';
import s from './calculator.module.css';

type Props = {
  input: PricingInput;
  category: string;
  recommended: number;
  ads: number;
  onPromotion: (value: number) => void;
};

export default function PricingPromoGuide({ input, category, recommended, ads, onPromotion }: Props) {
  const stats = referenceStats(category);
  const ref = skincareReferences[category];
  const [customPrice, setCustomPrice] = useState<string | null>(null);
  const priceText = customPrice ?? String(Math.round(stats.mean / 100) * 100);
  const price = parseRupiah(priceText);
  const valid = Number.isFinite(price) && price > 0 && price <= 1000000000;
  const budget = valid ? promotionBudget(input, price) : null;
  const result = budget && !('error' in budget) ? budget : null;
  const adUnit = ads / input.orders;
  const otherMonthly = (input.fees.monthly - ads) / input.orders;
  const range = result ? result.low === result.high ? rupiah(result.high) : `${rupiah(result.low)}–${rupiah(result.high)}` : '';

  return <section className={s.card} aria-labelledby="promo-guide-title">
    <div className={s.cardHeading}><h2 id="promo-guide-title">Harga bersaing, promo tetap terukur.</h2></div>
    <p className={s.note}>Acuan {ref.label.toLowerCase()} {ref.size}: {rupiah(stats.min)}–{rupiah(stats.max)} dari 3 sampel. Bukan batas harga pasar; cocokkan merek, formula, dan ukuran.</p>
    {recommended > stats.max && <p className={s.notice}>Harga saranmu di atas rentang sampel. Coba harga di bawah, lalu lihat biaya yang perlu dikurangi agar target margin tetap tercapai.</p>}
    <label className={s.field}><span>Harga transaksi produk yang ingin diuji</span><span className={s.inputWrap}><small>Rp</small><input type="text" inputMode="numeric" value={priceText} aria-invalid={!valid} onChange={e => setCustomPrice(e.target.value)} /></span></label>
    <p className={s.note}>Awalnya memakai rata-rata 3 sampel, dibulatkan Rp100. Isi harga setelah diskon produk, belum termasuk ongkir pembeli. Ini harga uji, bukan harga yang otomatis dipakai forecast.</p>
    {result ? <>
      <div className={s.promoHighlight} aria-live="polite"><span>Budget promo tambahan yang bisa dicoba</span><strong>{range} <small>/ pesanan</small></strong><p>Ilustrasi awal 3–5% harga uji, dibatasi ruang biaya pada target margin {input.margin}%. Bukan tarif NEMU atau patokan promo pasar.</p></div>
      <dl className={s.priceCostList}>
        <div><dt>Iklan yang sudah masuk per produk<small>{rupiah(ads)} / bulan ÷ {input.orders.toLocaleString('id-ID')} pesanan</small></dt><dd>{rupiah(adUnit)}</dd></div>
        <div><dt>Langganan, add-on lain & operasional per produk</dt><dd>{rupiah(otherMonthly)}</dd></div>
        <div><dt>Promo tambahan yang sedang diisi</dt><dd>{rupiah(input.fees.promotion)}</dd></div>
        <div><dt>Batas promo pada harga uji & target margin</dt><dd>{rupiah(result.maximum)}</dd></div>
      </dl>
      {result.shortfall > .01 ? <p className={s.notice} role="status">Dengan promo saat ini, harga uji belum mencapai target margin. Kurangi biaya sekitar <b>{rupiah(Math.ceil(result.shortfall))} / produk</b>. {result.beforePromoShortfall > .01 ? <>Bahkan tanpa promo, masih perlu pengurangan {rupiah(Math.ceil(result.beforePromoShortfall))} / produk. Tinjau HPP, subsidi ongkir, budget iklan, atau layanan yang belum perlu.</> : <>Mulai dengan mengecilkan promo tambahan; harga tidak harus dinaikkan.</>}</p> : <p className={s.note}>Pada harga uji dan promo saat ini, margin simulasi {result.actualMargin.toFixed(1)}% dengan sisa {rupiah(result.monthlyRemainder)} / bulan. Hasil mengikuti asumsi pesanan dan biaya yang diisi.</p>}
      <button type="button" className={s.secondary} disabled={input.fees.promotion === result.high} onClick={() => onPromotion(result.high)}>Pakai budget promo {rupiah(result.high)} / pesanan</button>
      {result.suggestedPrice !== null && <p className={s.note}>Dengan budget promo ini, harga saran menjadi <b>{rupiah(result.suggestedPrice)}</b> pada target margin yang sama. {result.suggestedPrice > price ? 'Harga uji masih terlalu rendah untuk biaya yang diisi.' : 'Klik tombol untuk memperbarui harga saran, ringkasan, dan forecast.'}</p>}
    </> : <p className={s.error} role="status">{budget && 'error' in budget ? budget.error : 'Isi harga uji Rp1–Rp1 miliar.'}</p>}
    <p className={s.note}>Promo tambahan adalah pengeluaran seller, misalnya cashback. Jangan hitung lagi diskon yang sudah mengurangi harga transaksi. Iklan lewat NEMU maupun iklan mandiri sudah dihitung sekali dalam biaya bulanan; bukan komisi penjualan. Iklan tidak otomatis menghasilkan pesanan.</p>
  </section>;
}
