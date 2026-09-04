import test from 'node:test';
import assert from 'node:assert/strict';
import { calculate, extractPrices, livePlans, humanLiveTerms } from './calculation.ts';
const noFees = { percent: 0, perOrder: 0, shipping: 0, promotion: 0, monthly: 0 };
test('Human Live six and twelve month contracts include the requested total hours', () => {
  assert.deepEqual(humanLiveTerms.find(option => option.months === 6), { months: 6, monthly: 1100000, total: 6600000, totalHours: 60 });
  assert.deepEqual(humanLiveTerms.find(option => option.months === 12), { months: 12, monthly: 950000, total: 11400000, totalHours: 120 });
});
test('Core is allocated once each month', () => {
  const r = calculate(150000, 90000, 100, { ...noFees, monthly: 199000 });
  assert.equal(r.revenue, 15000000); assert.equal(r.remainder, 5801000); assert.equal(r.perOrder, 1990);
});
test('fees combine without double counting', () => {
  const r = calculate(100000, 50000, 10, { percent: 10, perOrder: 1250, shipping: 5000, promotion: 2000, monthly: 199000 });
  assert.equal(r.transaction, 112500); assert.equal(r.totalFees, 381500); assert.equal(r.remainder, 118500);
});
test('no orders preserves subscription without division by zero', () => {
  const r = calculate(150000, 90000, 0, { ...noFees, monthly: 199000 });
  assert.equal(r.remainder, -199000); assert.equal(r.perOrder, null);
});
test('negative margins remain negative; invalid input is rejected', () => {
  assert.equal(calculate(50000, 90000, 1, noFees).remainder, -40000);
  for (const v of [-1, NaN, Infinity]) assert.throws(() => calculate(v, 0, 1, noFees));
  assert.throws(() => calculate(1, 0, 1.5, noFees));
  assert.throws(() => calculate(1, 0, 1, { ...noFees, percent: 101 }));
});
test('same inputs produce the same result for either platform', () => {
  assert.deepEqual(calculate(100000, 60000, 2, noFees), calculate(100000, 60000, 2, noFees));
});
test('OCR candidates support Indonesian separators and abbreviations', () => {
  assert.deepEqual(extractPrices('Rp. 199.000/bulan Rp1,25 juta Rp950 rb Rp 199.000 Rp89.000,00'), [199000,1250000,950000,89000]);
  assert.deepEqual(extractPrices('Terjual 100, rating 4.9, kode 12345'), []);
  assert.deepEqual(extractPrices('Rp150.000 - Rp200.000'), [150000,200000]);
});
test('Live plans match the supplied screenshot', () => {
  assert.deepEqual(livePlans.human.prices, {1:1250000,6:1100000,12:950000});
  assert.deepEqual(livePlans.ai.prices, {1:1790000,6:1590000,12:1490000});
  assert.deepEqual(livePlans.hybrid.prices, {1:2390000,6:2190000,12:2090000});
  assert.equal(livePlans.hybrid.prices[12] * 12, 25080000);
});
