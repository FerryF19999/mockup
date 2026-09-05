import test from 'node:test';
import assert from 'node:assert/strict';
import { planPrice, forecast, liveCapacity, parseRupiah, promotionBudget } from './pricing.ts';
import { calculate } from './calculation.ts';
import { calculateMarketingBudget, initialMarketingBudget } from './marketing-budget.ts';
import { nemuCostTotals, splitNemuCosts, nemuExpenseSummary } from './nemu-costs.ts';
import { referenceStats, skincareReferences } from './skincare-reference.ts';
const fees = { percent: 0, perOrder: 0, shipping: 0, promotion: 0, monthly: 199000 };
const base = { cost: 50000, orders: 100, margin: 20, fees };
test('rupiah inputs accept Indonesian thousands, reject ambiguous formats', () => {
  for (const value of ['150000', '150.000', 'Rp150.000', 'Rp. 150.000']) assert.equal(parseRupiah(value), 150000);
  for (const value of ['', '-1', '1e5', '150,000', '12.34', 'Infinity', 'abc']) assert.ok(Number.isNaN(parseRupiah(value)));
});
test('Live hours preserve contract capacity and expose uncovered demand', () => {
  assert.deepEqual(liveCapacity('human', 6, 12), { includedHours: 10, totalHours: 60, targetTotal: 72, missingHours: 2, monthly: 1100000 });
  assert.equal(liveCapacity('human', 12, 10).totalHours, 120);
  assert.equal(liveCapacity('hybrid', 1, 20).missingHours, 0);
  assert.equal(liveCapacity('none', 1, 10).missingHours, 10);
  for (const v of [-1, NaN, Infinity, 745]) assert.throws(() => liveCapacity('none', 1, v));
});
test('category reference means are calculated only within equal-size groups', () => {
  assert.equal(referenceStats('serum').mean, (61500 + 129000 + 140000) / 3);
  assert.equal(referenceStats('sunscreen').mean, 58350);
  for (const key of Object.keys(skincareReferences)) assert.equal(referenceStats(key).count, 3);
  assert.throws(() => referenceStats('unknown'));
});
test('seller starting from HPP gets margin-based price, not markup', () => {
  const p = planPrice(base);
  assert.equal(p.floor, 51990); assert.equal(p.recommended, 65000);
  assert.equal(p.result.remainder, 1301000); assert.equal(p.breakEvenOrders, 14);
  assert.ok(p.actualMargin >= 20);
});
test('variable + per-order fees are included in suggested price', () => {
  const p = planPrice({ ...base, fees: { ...fees, percent: 5, perOrder: 1000, shipping: 2000, promotion: 3000 } });
  assert.equal(p.recommended, 77400); assert.ok(p.actualMargin >= 20);
});
test('zero orders does not divide by zero', () => assert.match(planPrice({ ...base, orders: 0 }).error, /minimal 1/));
test('impossible margin is explained', () => assert.match(planPrice({ ...base, margin: 95, fees: { ...fees, percent: 5 } }).error, /kurang dari 100/));
test('all zero costs do not invent a market price', () => assert.match(planPrice({ ...base, cost: 0, fees: { ...fees, monthly: 0 } }).error, /minimal satu biaya/));
test('zero target margin allows break even', () => {
  const p = planPrice({ ...base, margin: 0 });
  assert.equal(p.recommended, 52000); assert.ok(p.result.remainder >= 0);
});
test('without monthly costs break-even is zero orders', () => assert.equal(planPrice({ ...base, fees: { ...fees, monthly: 0 } }).breakEvenOrders, 0));
test('forecast repeats monthly costs for each month', () => {
  const rows = forecast(65000, 50000, 100, fees, 3);
  assert.deepEqual(rows.map(r => r.orders), [50, 100, 150]);
  assert.equal(rows[1].revenue, 19500000); assert.equal(rows[1].remainder, 3903000);
  assert.equal(rows[0].remainder, 1653000); assert.equal(rows[2].remainder, 6153000);
});
test('low volume scenario can lose money; never clamp loss to zero', () => {
  const p = planPrice({ ...base, cost: 1000, orders: 10 });
  assert.ok(forecast(p.recommended, 1000, 10, fees, 1)[0].remainder < 0);
});
test('one target order yields zero sepi orders and full monthly bill', () => {
  const row = forecast(100000, 50000, 1, fees, 12)[0];
  assert.equal(row.orders, 0); assert.equal(row.remainder, -2388000);
});
test('invalid numbers and horizons are rejected', () => {
  for (const v of [-1, Infinity, NaN, 100]) assert.throws(() => planPrice({ ...base, margin: v }));
  assert.throws(() => planPrice({ ...base, orders: 1.5 }));
  assert.throws(() => forecast(1, 0, 1, fees, 2));
});
test('rounded price reaches target across seller volumes and fees', () => {
  for (const orders of [1, 10, 100, 1000000]) for (const percent of [0, 0.7, 10, 30]) {
    const p = planPrice({ ...base, orders, fees: { ...fees, percent } });
    assert.ok(p.actualMargin >= 20 - 1e-8);
    assert.ok(Number.isFinite(p.recommended));
  }
});

test('suggested promo is capped by available margin and rounded down', () => {
  const p = promotionBudget(base, 100000);
  assert.equal(p.maximum, 28010);
  assert.equal(p.low, 3000);
  assert.equal(p.high, 5000);
  const tight = promotionBudget(base, 66000);
  assert.equal(tight.maximum, 810);
  assert.equal(tight.low, 800);
  assert.equal(tight.high, 800);
  const calc = calculate(66000, base.cost, base.orders, { ...fees, promotion: tight.high });
  assert.ok(calc.remainder / calc.revenue * 100 >= base.margin);
});

test('low test prices never produce a loss-making promo recommendation', () => {
  const p = promotionBudget({ ...base, fees: { ...fees, shipping: 20000, promotion: 35000, monthly: 4198000 } }, 100000);
  assert.equal(p.high, 0);
  assert.equal(p.maximum, 0);
  assert.equal(p.beforePromoShortfall, 31980);
  assert.equal(p.shortfall, 66980);
  assert.ok(p.suggestedPrice > 100000);
  assert.ok(p.actualMargin < 0);
});

test('ads through NEMU and every direct channel affect pricing once, promo headroom and forecast', () => {
  const budget = initialMarketingBudget();
  budget.ads.nemu.enabled = true; // 49,000 total, not a daily budget
  Object.assign(budget.ads.meta, { enabled: true, budget: '30000', days: '7' });
  Object.assign(budget.ads.tiktok, { enabled: true, budget: '20000', days: '7' });
  Object.assign(budget.ads.youtube, { enabled: true, budget: '10000', days: '7' });
  const marketing = calculateMarketingBudget(budget);
  assert.equal(marketing.ads, 469000);
  const totals = nemuCostTotals(splitNemuCosts(true, 'none', 1, 0, marketing));
  assert.equal(totals.services, 248000);
  assert.equal(totals.sellerOperations, 420000);
  assert.equal(totals.monthly, 668000);
  const paid = { ...base, fees: { ...fees, monthly: totals.monthly } };
  assert.equal(planPrice(paid).recommended, 70900);
  assert.equal(promotionBudget(base, 100000).maximum - promotionBudget(paid, 100000).maximum, 4690);
  assert.equal(nemuExpenseSummary(totals, 100, 0, 0).total, 668000);
  assert.equal(forecast(100000, base.cost, base.orders, fees, 3)[1].remainder - forecast(100000, base.cost, base.orders, paid.fees, 3)[1].remainder, marketing.ads * 3);
  const zeroAds = calculateMarketingBudget(initialMarketingBudget());
  assert.equal(nemuCostTotals(splitNemuCosts(true, 'none', 1, 0, zeroAds)).monthly, 199000);
});

test('changing seller promo updates suggested price and forecast without duplicating the discount', () => {
  const nextPromo = promotionBudget(base, 100000).high;
  const updated = { ...base, fees: { ...fees, promotion: nextPromo } };
  const plan = planPrice(updated);
  assert.equal(plan.recommended, 71300);
  assert.equal(plan.result.promotion, 500000);
  assert.equal(plan.result.revenue, 7130000);
  assert.equal(forecast(plan.recommended, base.cost, base.orders, updated.fees, 1)[1].remainder, plan.result.remainder);
});

test('promo guidance handles zero orders, invalid prices and impossible margins', () => {
  assert.match(promotionBudget({ ...base, orders: 0 }, 100000).error, /minimal 1/);
  assert.match(promotionBudget(base, 0).error, /lebih dari/);
  for (const value of [NaN, Infinity, -1]) assert.throws(() => promotionBudget(base, value));
  assert.match(promotionBudget({ ...base, margin: 99, fees: { ...fees, percent: 1 } }, 100000).error, /kurang dari/);
});
