import { comparisonGroups, type ComparisonLine, marketplaceComparisonLines, nemuComparisonLines, rupiah, subtotalLines } from './comparison-details';
import type { FeeRow } from './marketplace-fees';
import type { calculate } from './calculation';
import s from './calculator.module.css';

type Result = ReturnType<typeof calculate> | null;
type Props = {
  marketplace: string; onMarketplaceChange: (value: string) => void; rows: FeeRow[];
  price: number | null; cost: number | null; orders: number | null;
  nemu: { percent: string; perOrder: string; shipping: string; promotion: string };
  extras: string; sellerOperations: string; core: number; live: number; liveName: string;
  resultNemu: Result; resultOther: Result;
};
function Lines({ lines, platform }: { lines: ComparisonLine[]; platform: string }) {
  if (!lines.length) return <span className={s.comparisonMuted}>Belum dirinci untuk {platform}</span>;
  return <ul className={s.costLines}>{lines.map(line => <li key={line.id} data-state={line.status}>
    <span>{line.name}</span>
    <strong>{line.status === 'ready' ? rupiah(line.amount!) : line.status === 'off' ? 'Tidak dihitung' : 'Periksa input'}</strong>
    <small>{line.formula}</small>
  </li>)}</ul>;
}
export default function ComparisonTable(p: Props) {
  const nemuLines = nemuComparisonLines(p.price, p.orders, p.nemu, p.extras, p.core, p.live, p.liveName, p.sellerOperations);
  const otherLines = marketplaceComparisonLines(p.price, p.orders, p.rows);
  const money = (value: number | null | undefined) => value == null ? 'Belum lengkap' : rupiah(value);
  const basis = [
    ['Harga jual / produk', p.price === null ? '—' : rupiah(p.price)],
    ['Pesanan / bulan', p.orders === null ? '—' : p.orders.toLocaleString('id-ID')],
    ['Omzet / bulan', p.price === null || p.orders === null ? '—' : rupiah(p.price * p.orders)],
    ['Modal produk / bulan', p.cost === null || p.orders === null ? '—' : rupiah(p.cost * p.orders)],
  ];
  return <section className={`${s.breakdown} ${s.comparison}`} aria-label="Rincian perbandingan dinamis">
    <h3>Uang yang tersisa</h3>
    <p className={s.note}>Per bulan, setelah modal dan biaya yang kamu isi.</p>
    <div className={s.resultPair}>{[p.resultNemu, p.resultOther].map((result, i) => <div className={s.resultTile} key={i}>{i === 0 ? <h4>Jualan di NEMU</h4> : <label className={s.comparisonPicker}><span>Pembanding</span><select aria-label="Marketplace pada ringkasan" value={p.marketplace} onChange={e => p.onMarketplaceChange(e.target.value)}>{['Marketplace lain', 'Shopee', 'TikTok Shop', 'Tokopedia', 'Lazada', 'Blibli'].map(m => <option key={m}>{m}</option>)}</select></label>}<span className={s.resultLabel}>Sisa uang simulasi / bulan</span>{result && <small className={s.resultEquation}>{rupiah(result.revenue)} omzet − {rupiah(result.productCost)} modal − {rupiah(result.totalFees)} biaya</small>}<strong>{money(result?.remainder)}</strong>{i === 0 && <><span>Layanan NEMU · Core + add-on</span><b>{money(subtotalLines(nemuLines.monthly))}</b><span>Pengeluaran usaha di luar NEMU</span><b>{money(subtotalLines([...nemuLines.shipping, ...nemuLines.promotion, ...nemuLines.sellerMonthly]))}</b></>}<span>Total biaya & pengeluaran</span><b>{money(result?.totalFees)}</b>{!result && <small>Lengkapi angka di form.</small>}</div>)}</div>
    <details className={s.disclosure}><summary>Lihat rincian perhitungan <span>NEMU vs {p.marketplace}</span></summary>
    <div className={s.comparisonScroll}><table>
      <caption className={s.srOnly}>Rincian biaya NEMU dibandingkan dengan {p.marketplace}</caption>
      <thead><tr><th scope="col"><span className={s.comparisonBrand}>NEMU</span><small>Biaya sesuai inputmu</small></th><th scope="col"><label className={s.comparisonPicker}><span>Bandingkan dengan</span><select aria-label="Marketplace pada tabel perbandingan" value={p.marketplace} onChange={e => p.onMarketplaceChange(e.target.value)}>{['Marketplace lain', 'Shopee', 'TikTok Shop', 'Tokopedia', 'Lazada', 'Blibli'].map(m => <option key={m}>{m}</option>)}</select></label></th></tr></thead>
      <tbody><tr className={s.comparisonSection}><th colSpan={2} scope="colgroup">Dasar perhitungan</th></tr>
        <tr>{['NEMU', p.marketplace].map((m, i) => <td key={i}><dl className={s.comparisonBasis} aria-label={`Dasar perhitungan ${m}`}>{basis.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></td>)}</tr>
      </tbody>
      {comparisonGroups.map(group => <tbody key={group.id}><tr className={s.comparisonSection}><th colSpan={2} scope="colgroup">{group.label}</th></tr><tr><td><Lines lines={nemuLines[group.id]} platform="NEMU" /></td><td><Lines lines={otherLines[group.id]} platform={p.marketplace} /></td></tr></tbody>)}
      <tfoot>{([
        ['Total biaya & pengeluaran', 'totalFees'], ['Sisa setelah modal & pengeluaran', 'remainder'], ['Rata-rata biaya & pengeluaran / pesanan', 'perOrder'],
      ] as const).map(([label, key]) => <tr key={key} className={key === 'remainder' ? s.comparisonRemainder : undefined}>{[p.resultNemu, p.resultOther].map((result, i) => <td key={i}><span>{label}</span><strong>{result && key === 'perOrder' && result.perOrder === null ? '— (0 pesanan)' : money(result?.[key])}</strong></td>)}</tr>)}</tfoot>
    </table></div>
    <p className={s.note}>Rp0 = input valid bernilai nol. Tidak dihitung = komponen tidak dipilih, bukan klaim bebas biaya. Periksa input = tarif atau angka belum valid; total kolom itu belum ditampilkan.</p>
    <p className={s.note}>Biaya NEMU hanya langganan dan add-on layanan NEMU. Pengeluaran usaha seller dibayar untuk menjalankan bisnis di luar layanan NEMU, bukan biaya admin atau potongan NEMU. Keduanya dijumlahkan hanya untuk menghitung sisa uang. Sisa bukan laba bersih; biaya yang belum diisi belum dihitung.</p>
    </details>
    <p className={s.note}>Simulasi, bukan laba bersih atau jaminan penghematan. Biaya yang belum diisi belum dihitung.</p>
  </section>;
}
