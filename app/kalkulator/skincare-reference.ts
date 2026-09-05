// Research snapshot, not a live feed or sales-weighted market average.
export const researchedOn = '4 September 2026';
type Sample = { name: string; price: number; url: string; note: string };
export const skincareReferences: Record<string, { label: string; size: string; checkedOn?: string; samples: Sample[] }> = {
  serum: { label: 'Serum', size: '30 ml', checkedOn: '5 September 2026', samples: [
    { name: 'Emina Ms. Pimple Acne Solution', price: 61500, url: 'https://www.watsons.co.id/id/emina-emina-ms.-pimple-acne-solution-face-serum-30ml/p/BP_27004', note: 'Harga tampil' },
    { name: 'Garnier Light Complete Vitamin C 30x', price: 129000, url: 'https://www.watsons.co.id/id/garnier-light-complete-vitamin-c-30x-booster-serum-30ml/p/BP_15123', note: 'Harga promo; harga normal Rp184.000' },
    { name: 'Avoskin Your Skin Bae Vitamin C', price: 140000, url: 'https://www.watsons.co.id/id/avoskin-avoskin-your-skin-bae-vitamin-c-30ml-serum-30ml/p/BP_43886', note: 'Harga promo; harga normal Rp175.000' },
  ] },
  cleanser: { label: 'Facial wash', size: '100 ml', samples: [
    { name: 'Clean & Clear Foaming Face Wash Vitamin C', price: 23000, url: 'https://www.watsons.co.id/id/perawatan-kulit/pembersih-wajah/c/030103', note: 'Harga tampil pada katalog pembersih wajah' },
    { name: 'Emina Bright Stuff Niacinamide Oxy Ceramide', price: 34000, url: 'https://www.watsons.co.id/id/perawatan-kulit/pembersih-wajah/c/030103', note: 'Harga tampil pada katalog pembersih wajah' },
    { name: 'Scora Phytobright Gentle Low pH Cleanser', price: 47900, url: 'https://www.watsons.co.id/id/scora-phytobright-gentle-low-ph-cleanser-100ml/p/BP_74719', note: 'Harga tampil' },
  ] },
  moisturizer: { label: 'Moisturizer', size: '30 g', samples: [
    { name: 'Hanasui Ceramide Probiotics Gel', price: 29900, url: 'https://www.watsons.co.id/id/hanasui-hanasui-ceramide-probiotics-moisturizer-gel-30g/p/BP_41796', note: 'Harga promo; harga normal Rp50.000. Periksa syarat promosi.' },
    { name: 'Y.O.U AcnePlus B5 Barrier Gel', price: 55000, url: 'https://www.watsons.co.id/id/you-y.o.u-acneplus-b5-barrier-moisturizer-gel-30g/p/BP_59561', note: 'Harga tampil' },
    { name: 'Skintific 5X Ceramide Barrier Gel', price: 109300, url: 'https://www.watsons.co.id/id/skintific-5x-ceramide-barrier-moisturizer-gel-30g/p/BP_28566?sskey=9ca3e31b032640919b11119c9697c429', note: 'Harga promo pada halaman produk' },
  ] },
  sunscreen: { label: 'Sunscreen', size: '30 ml', samples: [
    { name: 'Emina Bright Glow UV Tone Up SPF50 PA++++', price: 56950, url: 'https://www.watsons.co.id/id/emina-bright-glow-uv-tone-up-sunscreen-spf-50-pa-30ml/p/BP_76173', note: 'Harga promo; harga normal Rp67.000' },
    { name: 'Emina Sun Battle Barrier Hydraburst SPF50 PA++++', price: 45000, url: 'https://www.watsons.co.id/id/emina-emina-sun-battle-spf-50-pa-barrier-hydraburst-sunscreen-30ml/p/BP_37434', note: 'Harga tampil' },
    { name: 'Carasun Solar Smart UV Protector SPF45 PA++++', price: 73100, url: 'https://www.watsons.co.id/id/carasun-carasun-sunscreen-solar-smart-uv-protector-spf-45-pa-30ml/p/BP_19823', note: 'Harga satuan tampil, belum memperhitungkan promo multibeli' },
  ] },
};
export function referenceStats(key: string) {
  const ref = skincareReferences[key];
  if (!ref) throw new Error('Subkategori tidak tersedia');
  const prices = ref.samples.map(s => s.price).sort((a, b) => a - b);
  return { mean: prices.reduce((sum, price) => sum + price, 0) / prices.length, min: prices[0], max: prices.at(-1)!, count: prices.length };
}
