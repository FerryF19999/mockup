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
