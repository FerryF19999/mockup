import { livePlans } from './calculation.ts';
import type { calculateMarketingBudget } from './marketing-budget.ts';
export type NemuCostSplit = { coreCharged: boolean; live: keyof typeof livePlans; term: 1 | 6 | 12; addons: number; sellerOperations: number };
export function splitNemuCosts(coreCharged: boolean, live: keyof typeof livePlans, term: 1 | 6 | 12, operations: number, marketing: ReturnType<typeof calculateMarketingBudget>): NemuCostSplit {
  return { coreCharged, live, term, addons: marketing.social + marketing.collab + marketing.items.filter(item => item.id === 'nemu').reduce((sum, item) => sum + item.total, 0), sellerOperations: operations + marketing.items.filter(item => item.id !== 'nemu').reduce((sum, item) => sum + item.total, 0) };
}
export function nemuCostTotals(split: NemuCostSplit) {
  const subscription = split.coreCharged ? 199000 : 0;
  const addons = split.addons + livePlans[split.live].prices[split.term];
  return { subscription, addons, services: subscription + addons, sellerOperations: split.sellerOperations, monthly: subscription + addons + split.sellerOperations };
}

// The same fixed and per-order amounts used by pricing, shown at the seller's target volume.
// Unknown inputs remain unknown so an incomplete plan never looks like zero spending.
export function nemuExpenseSummary(totals: ReturnType<typeof nemuCostTotals>, orders: number | null, shippingPerOrder: number | null, promotionPerOrder: number | null) {
  const amount = (value: number | null) => value !== null && Number.isFinite(value) && value >= 0 ? value : null;
  const add = (...values: (number | null)[]) => values.every(value => value !== null) ? values.reduce<number>((sum, value) => sum + value!, 0) : null;
  const count = orders !== null && Number.isInteger(orders) && orders >= 0 && orders <= 1000000 ? orders : null;
  const shippingUnit = amount(shippingPerOrder), promotionUnit = amount(promotionPerOrder);
  const shipping = count !== null && shippingUnit !== null ? count * shippingUnit : null;
  const promotion = count !== null && promotionUnit !== null ? count * promotionUnit : null;
  const services = amount(totals.services);
  const sellerFixed = amount(totals.sellerOperations);
  const seller = add(sellerFixed, shipping, promotion);
  return { orders: count, services, sellerFixed, shipping, promotion, seller, total: add(services, seller) };
}
