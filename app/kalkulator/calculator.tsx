'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Calculator as CalculatorIcon, ImagePlus, Check, Sparkles } from 'lucide-react';
import { calculate, extractPrices, livePlans, humanLiveTerms } from './calculation';
import s from './calculator.module.css';
import PricingWorkbench from './pricing-workbench';
import { parseRupiah } from './pricing';
import MarketplaceFeeEditor from './marketplace-fee-editor';
import ComparisonTable from './comparison-table';
import { calculateMarketplace, initialMarketplaceFees, type FeeRow } from './marketplace-fees';
import NemuAddonEditor from './nemu-addon-editor';
import { calculateMarketingBudget, initialMarketingBudget, type MarketingBudget } from './marketing-budget';

const rupiah = (value: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
type FeeFields = { percent: string; perOrder: string; shipping: string; promotion: string };
const initialFees: FeeFields = { percent: '0', perOrder: '0', shipping: '0', promotion: '0' };
const numberValid = (value: string, max = 1000000000) => value.trim() !== '' && Number.isFinite(Number(value)) && Number(value) >= 0 && Number(value) <= max;
const moneyValid = (value: string, max = 1000000000) => Number.isFinite(parseRupiah(value)) && parseRupiah(value) <= max;

function Amount({ label, value, onChange, suffix = 'Rp', max = 1000000000, integer = false }: { label: string; value: string; onChange: (value: string) => void; suffix?: string; max?: number; integer?: boolean }) {
  const money = suffix === 'Rp';
  const invalid = value !== '' && (money ? !moneyValid(value, max) : !numberValid(value, max) || (integer && !Number.isInteger(Number(value))));
  return <label className={s.field}><span>{label}</span><span className={s.inputWrap}><small>{suffix}</small><input type={money ? 'text' : 'number'} inputMode={money || integer ? 'numeric' : 'decimal'} min="0" max={max} step={integer ? '1' : 'any'} placeholder="Isi tarif" value={value} onChange={e => onChange(e.target.value)} aria-invalid={invalid} /></span>{invalid && <small className={s.error}>{money ? 'Isi rupiah bulat, mis. 150000 atau 150.000. Maksimal ' + max.toLocaleString('id-ID') + '.' : `Isi angka 0–${max.toLocaleString('id-ID')}${integer ? ' tanpa desimal' : ''}.`}</small>}</label>;
}

export default function Calculator() {
  const [mode, setMode] = useState<'compare' | 'price'>('compare');
  const [price, setPrice] = useState('150000');
  const [cost, setCost] = useState('90000');
  const [orders, setOrders] = useState('100');
  const [nemu, setNemu] = useState<FeeFields>({ ...initialFees });
  const [marketplaceRows, setMarketplaceRows] = useState<Record<string, FeeRow[]>>({});
  const [marketplace, setMarketplace] = useState('Marketplace lain');
  const [nemuAddons, setNemuAddons] = useState<MarketingBudget>(initialMarketingBudget);
  const [sellerOperations, setSellerOperations] = useState('0');
  const [coreCharged, setCoreCharged] = useState(true);
  const [live, setLive] = useState<keyof typeof livePlans>('none');
  const [term, setTerm] = useState<1 | 6 | 12>(1);
  const [liveExtra, setLiveExtra] = useState(true);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  const [candidates, setCandidates] = useState<number[]>([]);
  const [ocrText, setOcrText] = useState('');
  const [applied, setApplied] = useState<number | null>(null);
  const workerRef = useRef<import('tesseract.js').Worker | null>(null);
  const job = useRef(0);
  useEffect(() => {
    if (!file) { setPreview(''); return; }
    const url = URL.createObjectURL(file); setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);
  useEffect(() => () => { job.current++; void workerRef.current?.terminate(); }, []);

  async function readScreenshot() {
    if (!file || busy) return;
    const currentJob = ++job.current;
    setBusy(true); setStatus('Menyiapkan pembaca teks…'); setCandidates([]); setOcrText(''); setApplied(null);
    let worker: import('tesseract.js').Worker | undefined;
    let timedOut = false;
    const timer = window.setTimeout(() => { timedOut = true; job.current++; void workerRef.current?.terminate(); setBusy(false); setStatus('Pembacaan terlalu lama. Coba lagi atau isi harga manual.'); }, 90000);
    try {
      const bitmap = await createImageBitmap(file);
      const pixels = bitmap.width * bitmap.height;
      bitmap.close();
      if (pixels > 20000000) throw new Error('Image too large');
      const { createWorker, PSM } = await import('tesseract.js');
      worker = await createWorker('eng', 1, { logger: info => { if (job.current === currentJob) setStatus(info.status === 'recognizing text' ? `Membaca screenshot… ${Math.round(info.progress * 100)}%` : 'Menyiapkan pembaca teks…'); } });
      if (job.current !== currentJob) return;
      workerRef.current = worker;
      await worker.setParameters({ tessedit_pageseg_mode: PSM.SPARSE_TEXT });
      const { data } = await worker.recognize(file);
      if (job.current !== currentJob) return;
      const found = extractPrices(data.text);
      setOcrText(data.text); setCandidates(found);
      setStatus(found.length ? 'Pilih harga jual yang benar. Harga coret, ongkir, dan cicilan bisa ikut terbaca.' : 'Harga belum terbaca. Coba screenshot lebih jelas atau isi harga manual.');
    } catch { if (job.current === currentJob) setStatus('Screenshot gagal dibaca. Periksa koneksi atau isi harga manual.'); }
    finally { window.clearTimeout(timer); if (worker && !timedOut) await worker.terminate().catch(() => {}); if (workerRef.current === worker) workerRef.current = null; if (job.current === currentJob) setBusy(false); }
  }

  const plan = livePlans[live];
  const liveMonthly = plan.prices[term];
  const coreMonthly = coreCharged && (live === 'none' || liveExtra) ? 199000 : 0;
  const addonResult = calculateMarketingBudget(nemuAddons);
  const nemuAddonTotal = addonResult.social + addonResult.collab + (addonResult.items.find(item => item.id === 'nemu')?.total ?? 0);
  const validFees = (f: FeeFields) => [f.shipping, f.promotion].every(v => moneyValid(v));
  const activeRows = marketplaceRows[marketplace] ?? initialMarketplaceFees(marketplace);
  const productValid = [price, cost].every(v => moneyValid(v)) && numberValid(orders, 1000000) && Number.isInteger(Number(orders));
  const detailedOther = productValid ? calculateMarketplace(parseRupiah(price), parseRupiah(cost), Number(orders), activeRows) : null;
  const valid = productValid && addonResult.valid && moneyValid(sellerOperations) && validFees(nemu) && detailedOther !== null;
  const asCosts = (f: FeeFields, monthly: number) => ({ percent: 0, perOrder: 0, shipping: parseRupiah(f.shipping), promotion: parseRupiah(f.promotion), monthly });
  const resultNemu = productValid && addonResult.valid && moneyValid(sellerOperations) && validFees(nemu) ? calculate(parseRupiah(price), parseRupiah(cost), Number(orders), asCosts(nemu, coreMonthly + liveMonthly + nemuAddonTotal + parseRupiah(sellerOperations))) : null;
  const resultOther = detailedOther;
  const difference = resultNemu && resultOther ? resultOther.totalFees - resultNemu.totalFees : 0;
  const feeRows = (fees: FeeFields, setter: (value: FeeFields) => void) => <div className={s.twoCol}>
    <Amount label="Subsidi ongkir / pesanan" value={fees.shipping} onChange={v => setter({ ...fees, shipping: v })} />
    <Amount label="Promo seller / pesanan" value={fees.promotion} onChange={v => setter({ ...fees, promotion: v })} />
  </div>;

  return <main className={s.page}>
    <header className={s.header}><Link href="/" className={s.brand}><Sparkles size={24} /> NEMU<span>Kalkulator seller</span></Link><Link href="/shop" className={s.back}><ArrowLeft size={16} /> Kembali ke Shop</Link></header>
    <div className={s.workspace}>
      <div className={s.intro}><div><h1>Kalkulator jualan</h1><p>Isi angkanya. Cek harga, biaya, dan sisa uangmu.</p></div><span className={s.beta}>SIMULASI</span></div>
      <div className={s.modeSwitch} role="group" aria-label="Mode kalkulator"><button aria-pressed={mode === 'compare'} onClick={() => setMode('compare')}>Bandingkan marketplace</button><button aria-pressed={mode === 'price'} onClick={() => setMode('price')}>Tentukan harga & forecast</button></div>
      <div hidden={mode !== 'price'}><PricingWorkbench onCompare={(newPrice, newCost, newOrders, fees, split, marketing) => { setPrice(String(newPrice)); setCost(String(newCost)); setOrders(String(newOrders)); setNemu({ percent: '0', perOrder: '0', shipping: String(fees.shipping), promotion: String(fees.promotion) }); setNemuAddons(marketing); setSellerOperations(String(split.sellerOperations)); setCoreCharged(split.coreCharged); setLive(split.live); setTerm(split.term); setLiveExtra(true); setApplied(null); setMode('compare'); }} /></div>
      <div hidden={mode !== 'compare'}><div className={s.layout}><div className={s.formColumn}>
        <section className={s.card} aria-labelledby="product-title"><div className={s.cardHeading}><span className={s.step}>01</span><h2 id="product-title">Produk & penjualan</h2></div>
          <details className={s.disclosure}><summary>Ambil harga dari screenshot <span>Opsional</span></summary><div className={s.upload}><ImagePlus size={25} /><div><label htmlFor="screenshot" className={s.uploadTitle}>Pilih screenshot produk</label><p>JPG, PNG, WebP · maksimal 10 MB. Diproses di browser; pembaca teks perlu internet.</p><input id="screenshot" type="file" accept="image/png,image/jpeg,image/webp" disabled={busy} onChange={e => { const chosen = e.target.files?.[0]; setCandidates([]); setOcrText(''); setApplied(null); if (!chosen) return; if (!['image/png', 'image/jpeg', 'image/webp'].includes(chosen.type) || chosen.size > 10 * 1024 * 1024) { setFile(null); setStatus('Pilih JPG, PNG, atau WebP dengan ukuran maksimal 10 MB.'); e.target.value = ''; return; } setFile(chosen); setStatus('Screenshot siap dibaca.'); }} /></div></div>
          {preview && <div className={s.preview}><img src={preview} alt="Screenshot produk yang dipilih" /><div><b>{file?.name}</b><button className={s.primary} disabled={busy} onClick={readScreenshot}>{busy ? 'Sedang membaca…' : 'Baca harga screenshot'}</button></div></div>}
          {status && <p className={s.status} role="status">{status}</p>}
          {candidates.length > 0 && <div className={s.candidates}>{candidates.map(candidate => <button key={candidate} aria-pressed={applied === candidate} onClick={() => { setPrice(String(candidate)); setApplied(candidate); setStatus('Harga dipakai. Cek kembali: gunakan harga jual setelah diskon, bukan cicilan.'); }}>{applied === candidate && <Check size={14} />}{rupiah(candidate)}</button>)}</div>}
          {ocrText && <details className={s.details}><summary>Lihat teks yang terbaca</summary><pre>{ocrText}</pre></details>}</details>
          <div className={s.twoCol}><Amount label="Harga jual setelah diskon" value={price} onChange={v => { setPrice(v); setApplied(null); }} /><Amount label="Modal produk (HPP)" value={cost} onChange={setCost} /><Amount label="Pesanan per bulan" suffix="×" value={orders} onChange={setOrders} integer max={1000000} /><div className={s.miniResult}><span>Omzet simulasi / bulan</span><b>{moneyValid(price) && numberValid(orders, 1000000) && Number.isInteger(Number(orders)) ? rupiah(parseRupiah(price) * Number(orders)) : '—'}</b></div></div>
          <p className={s.note}>Asumsi: 1 produk per pesanan. Jumlah pesanan bukan prediksi penjualan.</p>
        </section>

        <section className={s.card} aria-labelledby="fees-title"><div className={s.cardHeading}><span className={s.step}>02</span><h2 id="fees-title">Atur biaya jualan</h2></div>
          <h3 className={s.platform}>Biaya layanan NEMU</h3><div className={s.subscriptionNote}><b>Langganan NEMU Core</b><span>Rp199.000 / bulan</span><small>Harga langganan utama saja. Add-on opsional dihitung terpisah di bawah.</small></div>
          <details className={s.disclosure} open><summary>Add-on NEMU <span>Pilih hanya layanan yang kamu perlukan</span></summary><NemuAddonEditor value={nemuAddons} onChange={setNemuAddons} liveName={plan.name} liveMonthly={liveMonthly} /></details>
          <details className={s.disclosure}><summary>Pengeluaran usaha di luar NEMU <span>Bukan biaya admin atau potongan NEMU</span></summary><p className={s.note}>Biaya yang kamu keluarkan sendiri untuk menjalankan usaha, bukan untuk membeli layanan NEMU.</p>{feeRows(nemu, setNemu)}<Amount label="Host sendiri, iklan mandiri & operasional / bulan" value={sellerOperations} onChange={setSellerOperations} /><p className={s.note}>Contoh: gaji host sendiri, sewa, internet, atau iklan yang dibayar langsung ke Meta/TikTok/Google. Subsidi ongkir dan promo juga pengeluaran seller. Jangan masukkan biaya yang sudah ada di modal produk atau add-on NEMU.</p></details>
          <div className={s.platform}><label className={s.field}><span>Pembanding</span><select value={marketplace} onChange={e => setMarketplace(e.target.value)}><option>Marketplace lain</option><option>Shopee</option><option>TikTok Shop</option><option>Tokopedia</option><option>Lazada</option><option>Blibli</option></select></label></div>
          <MarketplaceFeeEditor marketplace={marketplace} rows={activeRows} orders={orders} onChange={rows => setMarketplaceRows(previous => ({ ...previous, [marketplace]: rows }))} />
          <p className={s.note}>Tarif kosong belum dihitung. Isi 0 hanya jika biayanya memang nol.</p>
        </section>

        <details className={`${s.card} ${s.planDisclosure}`}><summary>Paket NEMU <span>{rupiah(coreMonthly + liveMonthly)} / bulan · Ubah</span></summary><section aria-labelledby="plans-title"><h2 id="plans-title" className={s.srOnly}>Paket NEMU</h2>
          <div className={s.core}><div><span className={s.eyebrow}>PAKET UTAMA</span><h3>NEMU Core</h3><strong>Rp199.000 <small>/ bulan</small></strong></div><label className={s.check}><input type="checkbox" checked={coreCharged} onChange={e => setCoreCharged(e.target.checked)} />Hitung tagihan Core</label></div>
          <ul className={s.features}>{['Dashboard, pesanan & chat pembeli', 'Produk, halaman toko & pengiriman', 'Saldo, penarikan & rekening bank', 'Gambar, video & Studio Posting sesuai kuota dasar', 'Pengaturan gratis ongkir', 'Usulan kampanye harga & promosi mandiri'].map(feature => <li key={feature}><Check size={16} />{feature}</li>)}</ul>
          <p className={s.note}>Sumber: screenshot Paket & Add-on yang kamu berikan. Belum ada pemotongan otomatis dari Saldo Toko; tim NEMU menghubungi seller sebelum penagihan diaktifkan.</p>
          <div className={s.liveHeading} id="paket-live"><h3>Tambahkan Live</h3><span className={s.beta}>HARGA BETA · REFERENSI INTERNAL</span></div>
          {live !== 'human' && <label className={s.field}><span>Durasi paket Live</span><select value={term} onChange={e => setTerm(Number(e.target.value) as 1 | 6 | 12)}><option value={1}>1 bulan</option><option value={6}>6 bulan</option><option value={12}>12 bulan</option></select></label>}
          <div className={s.plans} role="group" aria-label="Pilih paket Live">{Object.entries(livePlans).map(([key, value]) => <button className={live === key ? s.selectedPlan : s.plan} key={key} aria-pressed={live === key} onClick={() => setLive(key as keyof typeof livePlans)}><span>{value.name}</span><strong>{rupiah(value.prices[term])}<small>/bulan</small></strong><p>{value.hours}</p>{key === 'human' && <p><b>Total {10 * term} jam selama {term} bulan</b></p>}</button>)}</div>
          {live === 'human' && <><h3>Durasi Human Live</h3><div className={s.plans} role="group" aria-label="Durasi Human Live">{humanLiveTerms.map(option => <button key={option.months} className={term === option.months ? s.selectedPlan : s.plan} aria-pressed={term === option.months} onClick={() => setTerm(option.months)}><span>{option.months} bulan · {option.totalHours} jam total</span><strong>{rupiah(option.monthly)}<small>/bulan</small></strong><p>Total kontrak: {rupiah(option.total)}</p></button>)}</div><p className={s.note}>10 jam per bulan. Harga di atas per bulan, bukan harga total selama kontrak. Host manusia disediakan seller.</p></>}
          {live !== 'none' && <><label className={s.check}><input type="checkbox" checked={liveExtra} onChange={e => setLiveExtra(e.target.checked)} />Biaya Live di luar NEMU Core</label><p className={s.note}>Asumsi simulasi: belum ada konfirmasi apakah Core termasuk paket Live. Nonaktifkan jika Core sudah termasuk. Biaya host manusia tidak termasuk; tambahkan dalam biaya bulanan platform terkait.</p><p className={s.termTotal}>Nilai paket Live {term} bulan: <b>{rupiah(liveMonthly * term)}</b><small>Ini nilai kontrak simulasi, bukan jadwal pembayaran. Harga dan ketentuan perlu konfirmasi NEMU.</small></p></>}
        </section></details>
      </div>

      <aside className={s.results} aria-labelledby="result-title"><div className={`${s.summary} ${s.compactSummary}`} aria-live="polite"><h2 id="result-title">{!valid ? 'Lengkapi angka untuk membandingkan.' : difference > 0 ? 'Total pengeluaran saat jualan di NEMU lebih rendah.' : difference < 0 ? `Total pengeluaran saat jualan di ${marketplace} lebih rendah.` : 'Total pengeluarannya sama.'}</h2>{valid ? <><strong className={s.bigNumber}>{rupiah(Math.abs(difference))} / bulan</strong><p>Selisih seluruh biaya layanan dan pengeluaran usaha yang diisi, bukan selisih admin saja.</p></> : <p>Cek input produk dan tarif pembanding yang dicentang. Layanan NEMU dan pengeluaran usaha seller dihitung terpisah.</p>}</div>
        <ComparisonTable marketplace={marketplace} onMarketplaceChange={setMarketplace} rows={activeRows} price={moneyValid(price) ? parseRupiah(price) : null} cost={moneyValid(cost) ? parseRupiah(cost) : null} orders={numberValid(orders, 1000000) && Number.isInteger(Number(orders)) ? Number(orders) : null} nemu={nemu} extras={String(nemuAddonTotal)} sellerOperations={sellerOperations} core={coreMonthly} live={liveMonthly} liveName={plan.name} resultNemu={resultNemu} resultOther={resultOther} />
        <Link href="/#jadwal-onboarding" className={s.consult}>Konfirmasi paket bersama NEMU <ArrowUpRight size={18} /></Link>
      </aside></div></div>
      <footer className={s.footer}>NEMU · Kalkulator biaya seller <Link href="/">Kembali ke beranda</Link></footer>
    </div>
  </main>;
}
