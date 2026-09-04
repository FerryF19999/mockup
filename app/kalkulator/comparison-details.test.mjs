import test from 'node:test';
import assert from 'node:assert/strict';
import { marketplaceComparisonLines, nemuComparisonLines } from './comparison-details.ts';
import { initialMarketplaceFees, calculateMarketplace } from './marketplace-fees.ts';
const sum = groups => Object.values(groups).flat().reduce((total, line) => total + (line.amount ?? 0), 0);

test('comparison labels follow each marketplace without leaking another template', () => {
  const shopee = marketplaceComparisonLines(100000, 100, initialMarketplaceFees('Shopee'));
  const lazada = marketplaceComparisonLines(100000, 100, initialMarketplaceFees('Lazada'));
  const blibli = marketplaceComparisonLines(100000, 100, initialMarketplaceFees('Blibli'));
  assert.ok(shopee.transaction.some(r => r.name === 'Layanan Gratis Ongkir XTRA'));
  assert.ok(lazada.transaction.some(r => r.name === 'Free Shipping Max'));
  assert.ok(!lazada.transaction.some(r => r.name.includes('Gratis Ongkir XTRA')));
  assert.equal(blibli.transaction.length, 1);
  assert.equal(blibli.transaction[0].name, 'Komisi sesuai kontrak Blibli');
});
test('missing tariff, disabled fee and explicit zero remain distinguishable', () => {
  const rows = initialMarketplaceFees('Shopee');
  let groups = marketplaceComparisonLines(100000, 100, rows);
  assert.equal(groups.transaction.find(r => r.id === 'admin').status, 'missing');
  assert.equal(groups.transaction.find(r => r.id === 'gox').status, 'off');
  assert.equal(groups.transaction.find(r => r.id === 'processing').amount, 125000);
  rows.find(r => r.id === 'admin').rate = '0';
  groups = marketplaceComparisonLines(100000, 100, rows);
  assert.equal(groups.transaction[0].status, 'ready');
  assert.equal(groups.transaction[0].amount, 0);
});
test('capped fee formula and eligible orders reconcile to calculation', () => {
  const rows = initialMarketplaceFees('Shopee');
  rows.find(r => r.id === 'admin').rate = '10';
  Object.assign(rows.find(r => r.id === 'gox'), { enabled: true, rate: '10', cap: '5.000', count: '20' });
  const groups = marketplaceComparisonLines(100000, 100, rows);
  const gox = groups.transaction.find(r => r.id === 'gox');
  assert.equal(gox.amount, 100000);
  assert.match(gox.formula, /maks\..*5\.000.*20 pesanan/);
  assert.equal(sum(groups), calculateMarketplace(100000, 50000, 100, rows).totalFees);
  assert.equal(sum(groups), 1225000);
});
test('tax withholding is presented separately from monthly platform fees', () => {
  const rows = initialMarketplaceFees('Blibli');
  rows[0].rate = '0';
  Object.assign(rows.find(r => r.id === 'tax'), { enabled: true, rate: '50.000' });
  const groups = marketplaceComparisonLines(100000, 100, rows);
  assert.equal(groups.tax[0].amount, 50000);
  assert.ok(!groups.monthly.some(r => r.id === 'tax'));
  assert.equal(sum(groups), 50000);
});
test('NEMU breakdown counts Core, Live and extras once', () => {
  const groups = nemuComparisonLines(100000, 100, { percent: '1', perOrder: '100', shipping: '1000', promotion: '200' }, '49.000', 199000, 1100000, 'Human Live');
  assert.equal(groups.monthly.find(r => r.id === 'nemu-live').name, 'Human Live');
  assert.equal(sum(groups), 1468000);
  assert.equal(groups.transaction[0].amount, 0, 'NEMU subscription model ignores transaction fee fields');
  const transferred = nemuComparisonLines(65000, 100, { percent: '0', perOrder: '0', shipping: '0', promotion: '0' }, '199000', 0, 0, 'Tanpa paket Live');
  assert.equal(sum(transferred), 199000);
  assert.equal(transferred.monthly[0].status, 'off');
});
test('invalid and zero eligible orders keep their distinct outcomes', () => {
  const rows = initialMarketplaceFees('Shopee');
  rows[0].rate = '10';
  rows[0].count = '101';
  assert.equal(marketplaceComparisonLines(100000, 100, rows).transaction[0].status, 'missing');
  rows[0].count = '0';
  assert.equal(marketplaceComparisonLines(100000, 100, rows).transaction[0].amount, 0);
  assert.equal(marketplaceComparisonLines(null, null, rows).transaction[0].status, 'missing');
});
