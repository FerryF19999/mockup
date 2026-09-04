import { calculate, livePlans, type Costs } from './calculation.ts';

export function parseRupiah(value: string): number {
  const raw = value.trim().replace(/^Rp\.?\s*/i, '');
  // Indonesian whole-rupiah inputs; reject ambiguous decimal/group formats.
  if (!/^(?:\d+|\d{1,3}(?:\.\d{3})+)$/.test(raw)) return NaN;
  return Number(raw.replaceAll('.', ''));
}

export function liveCapacity(plan: keyof typeof livePlans, term: 1 | 6 | 12, targetHours: number) {
  if (!Number.isFinite(targetHours) || targetHours < 0 || targetHours > 744) throw new Error('Jam Live tidak valid');
  const includedHours = plan === 'none' ? 0 : plan === 'hybrid' ? 20 : 10;
  return { includedHours, totalHours: includedHours * term, targetTotal: targetHours * term, missingHours: Math.max(0, targetHours - includedHours), monthly: livePlans[plan].prices[term] };
}

export type PricingInput = { cost: number; orders: number; margin: number; fees: Costs };
export function planPrice({ cost, orders, margin, fees }: PricingInput) {
  calculate(0, cost, orders, fees);
  if (!Number.isFinite(margin) || margin < 0 || margin >= 100) throw new Error('Margin tidak valid');
  if (orders === 0) return { error: 'Isi target pesanan minimal 1 agar biaya bulanan bisa dibagi.' } as const;
  if (fees.percent + margin >= 100) return { error: 'Tarif variabel + target margin harus kurang dari 100%.' } as const;
  const unitCost = cost + fees.perOrder + fees.shipping + fees.promotion;
  const allocated = unitCost + fees.monthly / orders;
  if (allocated === 0) return { error: 'Isi minimal satu biaya agar harga saran punya dasar perhitungan.' } as const;
  const floor = Math.ceil(allocated / (1 - fees.percent / 100));
  const recommended = Math.ceil(allocated / (1 - (fees.percent + margin) / 100) / 100) * 100;
  const contribution = recommended * (1 - fees.percent / 100) - unitCost;
  const breakEvenOrders = contribution > 0 ? Math.ceil(fees.monthly / contribution) : null;
  const result = calculate(recommended, cost, orders, fees);
  return { floor, recommended, contribution, breakEvenOrders, result, actualMargin: result.remainder / result.revenue * 100 };
}

export function forecast(price: number, cost: number, baseOrders: number, fees: Costs, months: number) {
  if (![1, 3, 6, 12].includes(months)) throw new Error('Periode tidak valid');
  calculate(price, cost, baseOrders, fees);
  return [{ name: 'Sepi', multiplier: .5 }, { name: 'Sesuai target', multiplier: 1 }, { name: 'Ramai', multiplier: 1.5 }].map(scenario => {
    const orders = Math.floor(baseOrders * scenario.multiplier);
    const monthly = calculate(price, cost, orders, fees);
    return { ...scenario, orders, totalOrders: orders * months, revenue: monthly.revenue * months, remainder: monthly.remainder * months, monthlyRemainder: monthly.remainder };
  });
}
