import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateMarketplace, initialMarketplaceFees } from './marketplace-fees.ts';
const configure = (market, values) => initialMarketplaceFees(market).map(row => values[row.id] ? { ...row, ...values[row.id] } : row);
test('Shopee administration and order processing are separate deductions', () => {
  const r = calculateMarketplace(100000, 50000, 100, configure('Shopee', { admin: { rate: '10' } }));
  assert.equal(r.transaction, 1125000); assert.equal(r.remainder, 3875000);
  assert.deepEqual(r.amounts.map(a => a.amount), [1000000,125000]);
});
test('per-item cap is applied before multiplying eligible orders', () => {
  const r = calculateMarketplace(100000, 50000, 100, configure('Shopee', { admin: { rate: '0' }, processing: { enabled: false }, gox: { enabled: true, rate: '10', cap: '5.000', count: '20' } }));
  assert.equal(r.transaction, 100000);
});
test('exempt orders and attributed affiliate orders are counted independently', () => {
  const r = calculateMarketplace(100000, 50000, 100, configure('Shopee', { admin: { rate: '10' }, processing: { count: '50' }, affiliate: { enabled: true, rate: '5', count: '10' } }));
  assert.equal(r.transaction, 1112500);
});
test('fixed monthly ads, shipping and promotion are not counted twice', () => {
  const r = calculateMarketplace(100000, 50000, 10, configure('Blibli', { commission: { rate: '0' }, ads: { enabled: true, rate: '100.000' }, 'seller-shipping': { enabled: true, rate: '1000', count: '5' }, 'seller-promo': { enabled: true, rate: '500' } }));
  assert.equal(r.monthly, 100000); assert.equal(r.shipping, 5000); assert.equal(r.promotion, 5000); assert.equal(r.totalFees, 110000);
});
test('blank active fees prevent apparently free comparisons', () => {
  for (const name of ['Shopee','TikTok Shop','Tokopedia','Lazada','Blibli','Marketplace lain']) assert.equal(calculateMarketplace(100000,50000,100,initialMarketplaceFees(name)),null);
});
test('invalid rate, cap, or eligible count prevents results', () => {
  for (const patch of [{rate:'101'},{rate:'-1'},{rate:'10',count:'101'},{rate:'10',count:'1.5'},{rate:'10',cap:'abc'}]) assert.equal(calculateMarketplace(100000,0,100,configure('Shopee',{admin:patch})),null);
});
test('zero sales keep only monthly deductions', () => {
  const r = calculateMarketplace(100000,50000,0,configure('Shopee',{admin:{rate:'10'},ads:{enabled:true,rate:'100000'}}));
  assert.equal(r.transaction,0); assert.equal(r.totalFees,100000); assert.equal(r.remainder,-100000); assert.equal(r.perOrder,null);
});
test('combined deductions over revenue stay negative, not silently capped', () => {
  const r = calculateMarketplace(100000,0,1,configure('Shopee',{admin:{rate:'80'},affiliate:{enabled:true,rate:'80'}}));
  assert.equal(r.remainder,-61250);
});
