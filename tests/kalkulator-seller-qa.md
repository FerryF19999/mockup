# Kalkulator NEMU — seller QA

## Update 5 September — service costs versus external business expenses

- Split the comparison form into NEMU add-ons and external seller business expenses. External host, direct advertising, operations, shipping subsidies and seller promotions are not described as NEMU admin fees or deductions.
- NEMU summary now shows services (Core + Live + other NEMU add-ons), external business expenses, and the combined outflow used to calculate remaining money. Detailed groups retain this separation.
- Pricing-to-comparison transfer preserves Core choice, Live plan/term, NEMU add-ons and external expenses independently. It no longer places the entire monthly amount into a generic NEMU add-on input.
- Social service and NEMU advertising requests are NEMU add-ons; direct Meta/TikTok/Google spend and own operations are external business expenses. Actual quotes remain subject to confirmation.
- Added 3 reconciliation tests: mixed budgets, external-expense-only scenarios, and independent incomplete-input states. **46/46 tests pass**. Generated `.next` TypeScript errors remain pre-existing. No browser visual QA in this follow-up.

## Update 5 September — simpler UI and seller-defined add-ons

- User clarified NEMU uses subscriptions plus optional add-ons, not transaction commissions. Both comparison and pricing now fix NEMU percentage/per-order platform fees at zero. Core, Live, seller shipping/promos and operational costs remain distinct. Historical variable-fee browser cases below describe the superseded version.
- Comparison shows remaining cash and total deductions first. Full dynamic ledger, screenshot upload, optional marketplace programs, fee caps, and Live details use native disclosure controls. Closed controls retain values and continue affecting calculations.
- Social-media budget = unique videos per month × seller-defined budget per video. Posting to multiple selected channels does not multiply production cost. This is a budget proposal, not a confirmed NEMU quote.
- Advertising separates NEMU monthly request (reference starts at Rp49,000 from supplied service screenshot) from Meta/TikTok/YouTube daily budget × planned days. Notes distinguish self-serve platform requirements and avoid charging the same campaign twice. Actual invoicing, tax, management fees and minimums still require confirmation.
- Added 6 marketing tests, **43/43 total pass**. Example: 4 videos × Rp50,000 + Rp49,000 NEMU request + Rp199,000 Core = Rp448,000 monthly; HPP Rp50,000, 100 orders, 20% margin gives price Rp68,100 and three-month target remainder Rp4,086,000.
- Production build passes. TypeScript still reports the existing generated `.next` route-type errors. No new browser interaction or visual QA performed in this follow-up.

## Update 5 September — dynamic side-by-side comparison

- Replaced the aggregate comparison plus duplicate single-marketplace table with one two-column ledger. The selector beside NEMU shares marketplace state with the fee editor.
- Labels, formulas, fee caps, eligible order counts, and enabled/disabled states derive from the selected marketplace's rows. NEMU Core, Live, and monthly extras are itemized separately; payout tax is separated from platform services.
- Each column's complete total is calculated independently. An incomplete comparator does not hide a valid NEMU total, and incomplete NEMU fees do not hide a valid comparator total. Difference claims still require both columns complete.
- Added 6 unit tests for dynamic templates, empty/disabled/zero states, capped formulas, tax grouping, NEMU total reconciliation, and invalid eligible counts. **37/37 tests pass** across all four test files, including `app/kalkulator/comparison-details.test.mjs`.
- No new browser visual QA was performed for this follow-up; browser observations below refer to the earlier version. Full TypeScript check still reports only the existing generated route-type errors described below.

Tested 4–5 September 2026 on localhost:3000/kalkulator. No production deployment or push performed.

## Automated checks

Run from the project root:

```powershell
node --test app/kalkulator/calculation.test.mjs app/kalkulator/pricing.test.mjs app/kalkulator/marketplace-fees.test.mjs
```

Result: **31 passed, 0 failed**. Covers original comparison/OCR parsing, Human Live contract totals, margin-based pricing, forecasts, zero orders, invalid values, negative outcomes, Indonesian currency parsing, Live capacity, category means, itemized marketplace fees, fee caps, eligible orders, and monthly deductions.

## Browser checks as a seller

| Case | Input / action | Expected and observed |
| --- | --- | --- |
| Missing tariff | Leave active commission empty | Results withheld; not silently treated as free |
| Basic comparison | Price 150,000; HPP 90,000; 100 orders; NEMU 0% + Core 199,000; comparator 10% + 5,000/order | NEMU remainder 5,801,000; comparator 4,500,000 (original comparison before fee editor replacement) |
| Zero orders | Set orders to 0 | Fixed Core cost remains; remainder -199,000; per-order result absent |
| Fractional orders | Set orders to 1.5 | Validation shown; results withheld |
| Indonesian currency | Enter 150.000 at 100 orders | Initially reproduced incorrect omzet 15,000. Fixed shared comparison currency inputs to use parseRupiah; retest gives omzet 15,000,000 |
| Human Live terms | Select 6 and 12 months | 1,100,000/month, 6,600,000 total/60 hours; 950,000/month, 11,400,000 total/120 hours |
| Price from costs | HPP 50,000; 100 orders; 20% margin; 0% fee; monthly 199,000 | Suggested 65,000; floor 51,990; BEP 14 orders; remainder 1,301,000/month |
| Three-month forecast | Above price, 50/100/150 orders per month | Remainders 1,653,000 / 3,903,000 / 6,153,000; no implied growth |
| Annual forecast | Same target for 12 months | Remainder 15,612,000 |
| Impossible margin | Fee 80% and margin 20% | Clear denominator error; no invalid recommendation |
| Zero price target | Set pricing target orders to 0 | Minimum-one-order explanation; no division by zero |
| Transfer pricing to comparison | Use 65,000 suggestion | HPP 50,000, 100 orders, manual monthly 199,000; Core disabled to avoid double counting |
| Marketing and Live costs | Core 199,000 + ads 49,000 + social 100,000 + Human Live 1,100,000 | Monthly total 1,448,000; suggestion 80,600; BEP 48 orders |
| Live target | Human 6 months; target 12 hours/month | Included 10/month and 60/contract; target 72/contract; 2-hour monthly shortfall flagged without inventing overage price |
| Skincare category | Switch cleanser, sunscreen, moisturizer | Sample means 34,967; 58,350; 64,733. Inputs do not silently change |
| OCR | Upload supplied NEMU Core pricing screenshot and run OCR | Candidate Rp199,000 recognized; no automatic application. Candidate application was not retested after later HMR |
| Shopee itemization | Price 100,000; HPP 50,000; 100 orders; test admin 10%; processing 1,250/order | Admin 1,000,000 + processing 125,000 = 1,125,000; remainder 3,875,000 |
| Capped program fee | Above plus test GOX 10%, cap 5,000, 20 eligible orders | Program 100,000; total 1,225,000. These percentages are test inputs, not published tariff claims |
| Invalid eligible orders | Enter 101 eligible on 100 total orders | Results withheld |
| Marketplace switching | Fill Shopee; switch Tokopedia and fill 8%; return Shopee | Shopee 10%, program cap and order count retained; per-market data isolated |
| Other templates | Select TikTok Shop, Lazada, Blibli | Marketplace-specific checklists displayed; Blibli does not inherit generic mandatory processing/admin fees |
| Mobile | 390 × 844 viewport | Document width 375 (scrollbar allowance), no horizontal page overflow. Pricing inputs and itemized fee cards visually inspected |

## Findings and limitations

- Fixed: thousands separators in comparison money inputs previously interpreted as decimals.
- Fixed: changing comparator previously erased its fee inputs. State now persists separately per marketplace during the session (not across a page reload).
- Itemized fee validation currently reports invalid/missing active fees in the result panel; per-field messages could make long forms easier to correct.
- Forecasts are arithmetic scenarios, not demand predictions. Suggestions are rule-based, not a live Codex/API response.
- Skincare benchmarks are small, equal-size product samples from Watsons, researched 4 September; not a sales-weighted market average or real-time feed. Promo eligibility and formula differences matter.
- Marketplace deductions assume one product per order. The amount charged is percentage × discounted product price, capped per product, then multiplied by eligible orders. Different tax bases, multi-item baskets, rate tiers, refunds, and commission reversals are not modeled automatically.
- Only the specifically labeled Shopee processing/pre-order reference amounts were verified against readable official terms. Admin/category rates and most other marketplace schedules remain seller-supplied. Optional checklists do not assert that every fee applies to every account.
- Taxes withheld from payout are not necessarily an economic expense. The calculator shows the effect on remaining cash; it does not determine tax liability.
- OCR invalid-file, timeout, offline, corrupt-image, and very-large-image paths were not browser-tested. Real account invoices and every device/browser were not tested.
- TypeScript full check is not clean: existing `.next/types/validator.ts` imports missing `AppRoutes`, `LayoutRoutes`, and `ParamMap` from generated `routes.js`. Production build succeeds; this generated-type issue was not changed.

## Evidence sources linked in the UI

- Shopee official terms: https://help.shopee.co.id/portal/4/article/71187-Syarat-Layanan-Shopee
- Shopee Gratis Ongkir XTRA: https://help.shopee.co.id/portal/4/article/71196?seo=1
- TikTok Shop / Tokopedia Seller University: https://seller-id.tokopedia.com/university/essay?knowledge_id=7753828090824449 (not readable during research; no numeric presets claimed)
- Lazada Seller Center: https://sellercenter.lazada.co.id (current detailed tariff unverified)
- Blibli official seller-cost explanation: https://about.blibli.com/en/media/press-release/seller-lebih-tenang-dan-cuan-jualan-di-blibli-biaya-jelas-gak-ada-tambahan-tiba-tiba
- Individual skincare product URLs and sampled values: `app/kalkulator/skincare-reference.ts`.
