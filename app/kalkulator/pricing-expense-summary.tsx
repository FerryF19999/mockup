import { livePlans } from './calculation';
import { rupiah } from './comparison-details';
import type { NemuCostSplit, nemuCostTotals } from './nemu-costs';
import { nemuExpenseSummary } from './nemu-costs';
import type { calculateMarketingBudget } from './marketing-budget';
import s from './calculator.module.css';

type Props = {
  totals: ReturnType<typeof nemuCostTotals>;
  split: NemuCostSplit;
  orders: number | null;
  shipping: number | null;
  promotion: number | null;
  marketing: ReturnType<typeof calculateMarketingBudget>;
  operations: number | null;
};

export default function PricingExpenseSummary({ totals, split, orders, shipping, promotion, marketing, operations }: Props) {
  const marketingValid = marketing.valid;
  const summary = nemuExpenseSummary({ ...totals, sellerOperations: operations === null ? NaN : totals.sellerOperations }, orders, shipping, promotion);
  const money = (value: number | null) => value !== null && Number.isFinite(value) ? rupiah(value) : 'Lengkapi input';
  const count = summary.orders === null ? 'Lengkapi target pesanan' : `${summary.orders.toLocaleString('id-ID')} pesanan / bulan`;
  const basis = (unit: number | null) => unit !== null && summary.orders !== null ? `${rupiah(unit)} × ${summary.orders.toLocaleString('id-ID')} pesanan` : 'Lengkapi biaya per pesanan dan target';
  const liveMonthly = livePlans[split.live].prices[split.term];

  return <section className={s.expenseSummary} aria-labelledby="expense-summary-title" aria-live="polite">
    <div className={s.expenseHeader}><h3 id="expense-summary-title">Ringkasan pengeluaran / bulan</h3><span>{count}</span></div>
    <div className={s.expenseGroup}>
      <h4>Layanan NEMU</h4>
      <dl>
        <div><dt>Langganan NEMU Core</dt><dd>{money(totals.subscription)}</dd></div>
        {split.live !== 'none' && <div><dt>Add-on {livePlans[split.live].name}<small>Tarif bulanan untuk kontrak {split.term} bulan</small></dt><dd>{money(liveMonthly)}</dd></div>}
        <div><dt>Kelola sosial media & Collab posting</dt><dd>{marketingValid ? money(marketing.social + marketing.collab) : 'Lengkapi budget'}</dd></div>
        <div><dt>Iklan lewat NEMU</dt><dd>{marketingValid ? money(marketing.items.find(item => item.id === 'nemu')?.total ?? 0) : 'Lengkapi budget'}</dd></div>
        <div className={s.expenseSubtotal}><dt>Subtotal layanan NEMU</dt><dd>{marketingValid ? money(summary.services) : 'Lengkapi budget'}</dd></div>
      </dl>
    </div>
    <div className={s.expenseGroup}>
      <h4>Pengeluaran usaha di luar NEMU</h4>
      <dl>
        <div><dt>Host, sewa & operasional lain</dt><dd>{money(operations)}</dd></div>
        {marketing.items.filter(item => item.id !== 'nemu').map(item => <div key={item.id}><dt>{item.name}<small>Budget iklan mandiri / bulan</small></dt><dd>{marketingValid ? money(item.total) : 'Lengkapi budget'}</dd></div>)}
        <div><dt>Subsidi ongkir seller<small>{basis(shipping)}</small></dt><dd>{money(summary.shipping)}</dd></div>
        <div><dt>Promo seller<small>{basis(promotion)}</small></dt><dd>{money(summary.promotion)}</dd></div>
        <div className={s.expenseSubtotal}><dt>Subtotal pengeluaran usaha</dt><dd>{marketingValid ? money(summary.seller) : 'Lengkapi budget'}</dd></div>
      </dl>
    </div>
    <div className={s.expenseGrandTotal}><span>Total layanan & pengeluaran usaha</span><strong>{marketingValid ? money(summary.total) : 'Lengkapi budget'}</strong></div>
    <p>Belum termasuk modal produk (HPP). Angka ini sudah masuk perhitungan harga dan forecast. Ongkir dan promo mengikuti jumlah pesanan pada setiap skenario.</p>
  </section>;
}
