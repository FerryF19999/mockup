import { researchedOn, skincareReferences, referenceStats } from './skincare-reference';
import s from './calculator.module.css';
const money = (n: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
export default function SkincareBenchmark({ category, onCategory, suggested }: { category: string; onCategory: (value: string) => void; suggested?: number }) {
  const ref = skincareReferences[category];
  const stats = referenceStats(category);
  return <section className={s.card} aria-labelledby="skincare-title">
    <div className={s.cardHeading}><span className={s.step}>SKINCARE</span><h2 id="skincare-title">Cek harga produk sejenis</h2></div>
    <label className={s.field}><span>Subkategori & ukuran produkmu</span><select value={category} onChange={e => onCategory(e.target.value)}>{Object.entries(skincareReferences).map(([key, value]) => <option key={key} value={key}>{value.label} · {value.size}</option>)}</select></label>
    <div className={s.twoCol}><div className={s.miniResult}><span>Rata-rata {stats.count} sampel · {ref.size}</span><b>{money(stats.mean)}</b></div><div className={s.miniResult}><span>Rentang harga sampel</span><b>{money(stats.min)}–{money(stats.max)}</b></div></div>
    <p className={s.note}>Sumber awal: Watsons Indonesia, ditelusuri {researchedOn}. Rata-rata aritmetika dari 3 produk satuan berukuran sama, bukan rata-rata seluruh pasar atau harga transaksi. Formula, merek, SPF, dan segmen berbeda. Tidak menaksir harga ukuran lain atau paket bundling.</p>
    {suggested !== undefined && <p className={s.notice}>{suggested > stats.max ? <>Harga saranmu {money(suggested)} di atas rentang sampel. Periksa modal dan alokasi promosi/Live; jika tetap premium, pastikan perbedaan produknya jelas.</> : suggested < stats.min ? <>Harga saranmu {money(suggested)} di bawah rentang sampel. Cek biaya yang belum masuk sebelum memutuskan harga murah.</> : <>Harga saranmu {money(suggested)} berada dalam rentang sampel. Ini belum membuktikan harga akan diterima pembeli; uji dengan produk yang benar-benar sebanding.</>}</p>}
    <details className={s.details}><summary>Lihat 3 produk, harga & sumber</summary><ul className={s.advice}>{ref.samples.map(sample => <li key={sample.name}><a href={sample.url} target="_blank" rel="noreferrer">{sample.name} · {ref.size} ↗</a><br /><b>{money(sample.price)}</b><br /><small>{sample.note}</small></li>)}</ul><p>Snapshot harga yang terbaca saat riset, sebagian dari hasil indeks pencarian. Harga/promo/stok dapat berubah dan tidak diperbarui otomatis. Tidak termasuk ongkir, voucher personal, atau diskon member. Buka sumber dan cocokkan SKU sebelum mengambil keputusan.</p></details>
    <p className={s.note}>Acuan pasar tidak mengubah modal, margin, atau jumlah pesananmu secara otomatis. Perubahan kategori hanya mengganti pembanding; sesuaikan modal produk sendiri.</p>
  </section>;
}
