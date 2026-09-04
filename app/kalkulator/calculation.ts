export const livePlans = {
  none: { name: 'Tanpa paket Live', hours: 'Tanpa tambahan sesi live', prices: { 1: 0, 6: 0, 12: 0 } },
  human: { name: 'Human Live', hours: '10 jam/bulan · host disediakan seller', prices: { 1: 1250000, 6: 1100000, 12: 950000 } },
  ai: { name: 'AI Commerce', hours: '10 jam/bulan · AI salesperson NEMU', prices: { 1: 1790000, 6: 1590000, 12: 1490000 } },
  hybrid: { name: 'Live Hybrid', hours: '10 jam Human + 10 jam AI per bulan', prices: { 1: 2390000, 6: 2190000, 12: 2090000 } },
};

export type Costs = { percent: number; perOrder: number; monthly: number; shipping: number; promotion: number };
export const humanLiveTerms = ([1, 6, 12] as const).map(months => ({
  months,
  monthly: livePlans.human.prices[months],
  total: livePlans.human.prices[months] * months,
  totalHours: 10 * months,
}));
export function calculate(price: number, cost: number, orders: number, fees: Costs) {
  const values = [price, cost, orders, ...Object.values(fees)];
  if (values.some(v => !Number.isFinite(v) || v < 0) || !Number.isInteger(orders) || fees.percent > 100) throw new Error('Angka tidak valid');
  const revenue = price * orders;
  const transaction = revenue * fees.percent / 100 + fees.perOrder * orders;
  const shipping = fees.shipping * orders;
  const promotion = fees.promotion * orders;
  const totalFees = transaction + shipping + promotion + fees.monthly;
  return { revenue, transaction, shipping, promotion, monthly: fees.monthly, totalFees, productCost: cost * orders, remainder: revenue - cost * orders - totalFees, perOrder: orders ? totalFees / orders : null };
}

// Only rupiah-labelled amounts are candidates; users must choose the selling price.
export function extractPrices(text: string): number[] {
  const matches = text.matchAll(/\bRp\.?\s*(\d+(?:[.,]\d+)*)(?:\s*(ribu|juta|rb|jt))?/gi);
  return [...new Set(Array.from(matches, match => {
    const suffix = match[2]?.toLowerCase();
    const raw = suffix ? match[1].replace(',', '.') : match[1].replace(/,\d{2}$/, '').replace(/[.,]/g, '');
    return Math.round(Number(raw) * (suffix === 'jt' || suffix === 'juta' ? 1000000 : suffix ? 1000 : 1));
  }).filter(n => Number.isFinite(n) && n > 0 && n <= 100000000000))].slice(0, 20);
}
