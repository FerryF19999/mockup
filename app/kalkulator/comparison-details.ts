import { calculateMarketplace, type FeeRow } from './marketplace-fees.ts';
import { parseRupiah } from './pricing.ts';

export type ComparisonLine = { id: string; name: string; amount: number | null; formula: string; status: 'ready' | 'missing' | 'off' };
export const comparisonGroups = [
  { id: 'transaction', label: 'Transaksi & layanan' },
  { id: 'shipping', label: 'Ongkir seller' },
  { id: 'promotion', label: 'Promo seller' },
  { id: 'monthly', label: 'Langganan & layanan tambahan' },
  { id: 'sellerMonthly', label: 'Pengeluaran usaha seller · bukan admin' },
  { id: 'tax', label: 'Potongan pajak pencairan' },
] as const;
export type ComparisonGroup = typeof comparisonGroups[number]['id'];
export const rupiah = (n: number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);
const countText = (n: number) => n.toLocaleString('id-ID');

export function marketplaceComparisonLines(price: number | null, orders: number | null, rows: FeeRow[]) {
  const groups: Record<ComparisonGroup, ComparisonLine[]> = { transaction: [], shipping: [], promotion: [], monthly: [], sellerMonthly: [], tax: [] };
  for (const row of rows) {
    const result = price !== null && orders !== null ? calculateMarketplace(price, 0, orders, [row]) : null;
    const status = !row.enabled ? 'off' : result ? 'ready' : 'missing';
    const count = row.count.trim() === '' ? orders : Number(row.count);
    const formula = status === 'off' ? 'Tidak dipilih · tidak dihitung' : status === 'missing' ? 'Lengkapi / periksa input' : row.kind === 'month'
      ? `${rupiah(parseRupiah(row.rate))} / bulan`
      : row.kind === 'order' ? `${rupiah(parseRupiah(row.rate))} × ${countText(count!)} pesanan`
      : `${Number(row.rate).toLocaleString('id-ID')}% × ${rupiah(price!)}${row.cap.trim() ? `; maks. ${rupiah(parseRupiah(row.cap))} / produk` : ''} × ${countText(count!)} pesanan`;
    groups[row.id === 'tax' ? 'tax' : ['nemu-seller', 'ads', 'operations', 'adjustment'].includes(row.id) ? 'sellerMonthly' : row.group].push({ id: row.id, name: row.name, amount: status === 'ready' ? result!.totalFees : null, formula, status });
  }
  return groups;
}

export function nemuComparisonLines(price: number | null, orders: number | null, fees: { percent: string; perOrder: string; shipping: string; promotion: string }, extras: string, core: number, live: number, liveName: string, sellerOperations = '0') {
  const rows: FeeRow[] = [
    { id: 'nemu-shipping', name: 'Subsidi ongkir seller', kind: 'order', rate: fees.shipping, group: 'shipping' },
    { id: 'nemu-promo', name: 'Promo seller', kind: 'order', rate: fees.promotion, group: 'promotion' },
    { id: 'nemu-core', name: 'NEMU Core', kind: 'month', rate: String(core), group: 'monthly' },
    { id: 'nemu-live', name: liveName === 'Tanpa paket Live' ? 'Paket Live' : liveName, kind: 'month', rate: String(live), group: 'monthly' },
    { id: 'nemu-extras', name: 'Add-on NEMU lainnya', kind: 'month', rate: extras, group: 'monthly' },
    { id: 'nemu-seller', name: 'Host sendiri, iklan mandiri & operasional', kind: 'month', rate: sellerOperations, group: 'monthly' },
  ].map(row => ({ ...row, kind: row.kind as FeeRow['kind'], group: row.group as FeeRow['group'], enabled: row.id === 'nemu-core' ? core > 0 : row.id === 'nemu-live' ? live > 0 : true, cap: '', count: '', note: '' }));
  const groups = marketplaceComparisonLines(price, orders, rows);
  groups.transaction = [{ id: 'nemu-commission', name: 'Komisi penjualan NEMU', amount: 0, formula: 'Model langganan + add-on, bukan potongan per transaksi.', status: 'ready' }];
  return groups;
}

export function subtotalLines(lines: ComparisonLine[]) {
  return lines.some(line => line.status === 'missing') ? null : lines.reduce((sum, line) => sum + (line.amount ?? 0), 0);
}
