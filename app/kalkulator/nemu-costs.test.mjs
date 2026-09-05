import test from 'node:test';
import assert from 'node:assert/strict';
import { initialMarketingBudget, calculateMarketingBudget } from './marketing-budget.ts';
import { splitNemuCosts, nemuCostTotals, nemuExpenseSummary } from './nemu-costs.ts';
import { calculate } from './calculation.ts';
import { nemuComparisonLines, subtotalLines } from './comparison-details.ts';

test('NEMU services exclude external advertising and own operational spending', () => {
  const budget = initialMarketingBudget();
  Object.assign(budget, { socialEnabled: true, videos: '4', perVideo: '50000' });
  budget.ads.nemu.enabled = true;
  Object.assign(budget.ads.meta, { enabled: true, budget: '30000', days: '7' });
  const split = splitNemuCosts(true, 'human', 6, 500000, calculateMarketingBudget(budget));
  assert.equal(split.addons, 249000);
  assert.equal(split.sellerOperations, 710000);
  const totals = nemuCostTotals(split);
  assert.equal(totals.services, 1548000);
  assert.equal(totals.monthly, 2258000);
  const lines = nemuComparisonLines(100000, 100, { percent: '0', perOrder: '0', shipping: '1000', promotion: '200' }, String(split.addons), totals.subscription, totals.addons - split.addons, 'Human Live', String(split.sellerOperations));
  assert.equal(subtotalLines(lines.monthly), totals.services);
  assert.equal(subtotalLines([...lines.shipping, ...lines.promotion, ...lines.sellerMonthly]), 830000);
  assert.equal(Object.values(lines).flat().reduce((s, l) => s + (l.amount ?? 0), 0), 2378000);
});
test('only seller expenses never increase the NEMU service subtotal', () => {
  const split = splitNemuCosts(false, 'none', 1, 800000, calculateMarketingBudget(initialMarketingBudget()));
  assert.equal(nemuCostTotals(split).services, 0);
  assert.equal(nemuCostTotals(split).monthly, 800000);
});
test('collab posting is counted as a NEMU add-on, not a seller expense', () => {
  const budget = initialMarketingBudget();
  Object.assign(budget, { collabEnabled: true, collabBudget: '175000' });
  const split = splitNemuCosts(true, 'none', 1, 0, calculateMarketingBudget(budget));
  assert.equal(split.addons, 175000);
  assert.equal(split.sellerOperations, 0);
  assert.equal(nemuCostTotals(split).services, 374000);
});
test('missing seller expenses do not make valid service costs disappear', () => {
  const lines = nemuComparisonLines(100000, 100, { percent: '0', perOrder: '0', shipping: '0', promotion: '0' }, '49000', 199000, 0, 'Tanpa paket Live', '');
  assert.equal(subtotalLines(lines.monthly), 248000);
  assert.equal(subtotalLines(lines.sellerMonthly), null);
});

test('seller screenshot reconciles fixed costs, shipping and promo at target volume', () => {
  const totals = nemuCostTotals({ coreCharged: true, live: 'hybrid', term: 1, addons: 109000, sellerOperations: 1500000 });
  assert.equal(totals.services, 2698000);
  const summary = nemuExpenseSummary(totals, 100, 20000, 35000);
  assert.equal(summary.shipping, 2000000);
  assert.equal(summary.promotion, 3500000);
  assert.equal(summary.seller, 7000000);
  assert.equal(summary.total, 9698000);
  const result = calculate(200000, 50000, 100, { percent: 0, perOrder: 0, shipping: 20000, promotion: 35000, monthly: totals.monthly });
  assert.equal(result.totalFees, summary.total);
  assert.equal(result.remainder, result.revenue - result.productCost - summary.total);
  assert.equal(nemuExpenseSummary(totals, 50, 20000, 35000).total, 6948000);
  assert.equal(nemuExpenseSummary(totals, 0, 20000, 35000).total, totals.monthly);
});

test('incomplete inputs never appear as zero monthly spending', () => {
  const totals = nemuCostTotals({ coreCharged: true, live: 'none', term: 1, addons: 0, sellerOperations: 0 });
  for (const orders of [null, NaN, Infinity, -1, 1.5, 1000001]) {
    const summary = nemuExpenseSummary(totals, orders, 20000, 35000);
    assert.equal(summary.orders, null);
    assert.equal(summary.total, null);
    assert.equal(summary.services, 199000);
  }
  assert.equal(nemuExpenseSummary(totals, 100, null, 0).total, null);
  assert.equal(nemuExpenseSummary(totals, 100, 0, -1).total, null);
  assert.equal(nemuExpenseSummary({ ...totals, sellerOperations: NaN }, 100, 0, 0).seller, null);
  assert.equal(nemuExpenseSummary(totals, 100, 0, 0).total, 199000);
});
