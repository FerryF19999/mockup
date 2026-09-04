import test from 'node:test';
import assert from 'node:assert/strict';
import { initialMarketingBudget, calculateMarketingBudget } from './marketing-budget.ts';
import { planPrice, forecast } from './pricing.ts';

test('optional marketing starts at zero, not mandatory add-on spend', () => {
  const result = calculateMarketingBudget(initialMarketingBudget());
  assert.equal(result.valid, true);
  assert.equal(result.total, 0);
});
test('seller per-video budget counts unique videos once across channels', () => {
  const input = initialMarketingBudget();
  Object.assign(input, { socialEnabled: true, videos: '4', perVideo: '50.000', postingChannels: ['Instagram', 'TikTok', 'YouTube Shorts'] });
  const result = calculateMarketingBudget(input);
  assert.equal(result.valid, true);
  assert.equal(result.social, 200000);
});
test('NEMU total request and daily channel budgets use different bases', () => {
  const input = initialMarketingBudget();
  input.ads.nemu.enabled = true;
  Object.assign(input.ads.meta, { enabled: true, budget: '30.000', days: '7' });
  Object.assign(input.ads.youtube, { enabled: true, budget: '20.000', days: '10' });
  const result = calculateMarketingBudget(input);
  assert.equal(result.ads, 459000);
  assert.equal(result.items.find(row => row.id === 'nemu').total, 49000);
});
test('enabled budget needs valid amount, whole duration and a posting channel', () => {
  const input = initialMarketingBudget();
  input.socialEnabled = true;
  assert.equal(calculateMarketingBudget(input).valid, false);
  input.perVideo = '50000'; input.postingChannels = [];
  assert.equal(calculateMarketingBudget(input).valid, false);
  input.socialEnabled = false;
  Object.assign(input.ads.tiktok, { enabled: true, budget: '100000', days: '1.5' });
  assert.equal(calculateMarketingBudget(input).valid, false);
  input.ads.tiktok.days = '32';
  assert.equal(calculateMarketingBudget(input).valid, false);
  input.ads.tiktok.days = '7'; input.ads.tiktok.budget = '-100';
  assert.equal(calculateMarketingBudget(input).valid, false);
});
test('disabled marketing retains edits but removes costs from forecast', () => {
  const input = initialMarketingBudget();
  Object.assign(input, { socialEnabled: true, perVideo: '50000' });
  assert.equal(calculateMarketingBudget(input).total, 200000);
  input.socialEnabled = false;
  assert.equal(calculateMarketingBudget(input).total, 0);
});
test('subscription and selected marketing flow into price and forecast once', () => {
  const input = initialMarketingBudget();
  Object.assign(input, { socialEnabled: true, perVideo: '50000' });
  input.ads.nemu.enabled = true;
  const marketing = calculateMarketingBudget(input);
  const fees = { percent: 0, perOrder: 0, shipping: 0, promotion: 0, monthly: 199000 + marketing.total };
  assert.equal(fees.monthly, 448000);
  const result = planPrice({ cost: 50000, orders: 100, margin: 20, fees });
  assert.equal(result.recommended, 68100);
  assert.equal(result.result.remainder, 1362000);
  assert.equal(forecast(result.recommended, 50000, 100, fees, 3)[1].remainder, 4086000);
});
