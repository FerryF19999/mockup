import type { FeeRow } from './marketplace-fees';
import { marketplaceSources } from './marketplace-fees';
import s from './calculator.module.css';

export default function MarketplaceFeeEditor({ marketplace, rows, onChange, orders }: { marketplace: string; rows: FeeRow[]; onChange: (rows: FeeRow[]) => void; orders: string }) {
  const change = (id: string, patch: Partial<FeeRow>) => onChange(rows.map(row => row.id === id ? { ...row, ...patch } : row));
  return <div>
    <p className={s.note}>Isi tarif akun {marketplace}. Pilih hanya biaya yang berlaku untuk tokomu.</p>
    {['utama', 'tambahan'].map(group => {
      const selected = rows.filter(row => ['admin', 'commission', 'processing'].includes(row.id) === (group === 'utama'));
      const fields = selected.map(row => <fieldset className={`${s.feeItem} ${s.compactFee}`} key={row.id}><legend><label className={s.check}><input type="checkbox" checked={row.enabled} onChange={e => change(row.id, { enabled: e.target.checked })} />{row.name}</label></legend>{row.enabled && <>
      <label className={s.field}><span>{row.kind === 'percent' ? 'Tarif (%)' : row.kind === 'order' ? 'Nominal per pesanan (Rp)' : 'Nominal per bulan (Rp)'}</span><span className={s.inputWrap}><input aria-label={`${row.name}: tarif`} type={row.kind === 'percent' ? 'number' : 'text'} inputMode="decimal" min="0" max={row.kind === 'percent' ? 100 : 1e9} step="any" value={row.rate} placeholder="Wajib diisi, termasuk 0" onChange={e => change(row.id, { rate: e.target.value })} /></span></label>
      </>}<details className={s.feeRules}><summary>{row.cap || row.count ? 'Batas / jumlah pesanan disesuaikan' : 'Ketentuan & pengaturan'}{row.cap && <small> · Batas Rp{row.cap}</small>}{row.count && <small> · {row.count} pesanan</small>}</summary><p className={s.note}>{row.note}</p>{row.enabled && <div className={s.twoCol}>
      {row.kind !== 'month' && <label className={s.field}><span>Pesanan terkena / bulan</span><span className={s.inputWrap}><input aria-label={`${row.name}: pesanan terkena`} type="number" min="0" max={orders} step="1" placeholder={`Semua (${orders || '0'})`} value={row.count} onChange={e => change(row.id, { count: e.target.value })} /></span><small>Kosong = semua pesanan. Isi 0 jika semuanya dibebaskan.</small></label>}
      {row.kind === 'percent' && <label className={s.field}><span>Batas biaya / produk (Rp)</span><span className={s.inputWrap}><input aria-label={`${row.name}: batas biaya`} type="text" inputMode="numeric" placeholder="Kosong = tanpa batas" value={row.cap} onChange={e => change(row.id, { cap: e.target.value })} /></span></label>}
    </div>}</details></fieldset>);
      return group === 'utama' ? <div key={group}>{fields}</div> : <details className={s.disclosure} key={group}><summary>Program & biaya tambahan <span>{selected.filter(row => row.enabled).length} dipilih</span></summary><p className={s.note}>Ongkir, affiliate, promo, iklan, dan potongan lain. Biaya yang dicentang tetap dihitung saat bagian ini ditutup.</p>{fields}</details>;
    })}
    <details className={s.details}><summary>Asumsi & sumber tarif</summary><p>Asumsi satu produk per pesanan. Persentase memakai harga setelah diskon, dengan batas per produk dan jumlah pesanan yang kamu atur. Kosong pada jumlah pesanan berarti semua pesanan; kosong pada batas berarti tanpa batas. Jangan hitung PPN atau diskon yang sama dua kali. Biaya pembeli, retur/refund, dan pengembalian komisi tidak diotomatisasi.</p>{(marketplaceSources[marketplace] ?? []).map(source => <p key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a><br />{source.note}</p>)}<p>Riset 4 September 2026. Cocokkan dengan akun seller. Tarif yang belum terverifikasi harus diisi sendiri; daftar ini bukan daftar biaya wajib untuk semua akun.</p></details>
  </div>;
}
