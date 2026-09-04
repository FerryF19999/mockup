import { parseRupiah } from './pricing.ts';
export const adChannels = [
  { id: 'nemu', name: 'Iklan lewat NEMU', note: 'Mulai Rp49.000 dari informasi layanan NEMU. Isi total pengajuan bulan ini; kanal dan cakupan mengikuti konfirmasi tim. Bukan minimum resmi Meta, TikTok, atau Google.' },
  { id: 'meta', name: 'Meta Ads · Instagram & Facebook', note: 'Isi rencana belanja iklan. Minimum untuk akun dan tujuan kampanyemu perlu dicek di Ads Manager; belum ada tarif minimum rupiah terverifikasi di sini.' },
  { id: 'tiktok', name: 'TikTok Ads', note: 'Dokumentasi Ads Manager menyebut budget campaign harus di atas US$50 dan harian ad group di atas US$20. Itu bukan tarif layanan NEMU; cek ekuivalen dan batas di akunmu.' },
  { id: 'youtube', name: 'YouTube Shorts · Google Ads', note: 'Shorts adalah penempatan iklan di Google Ads. Rencanakan budget sesuai tujuan kampanye; tidak ada minimum rupiah yang terverifikasi di sini.' },
] as const;
export type MarketingBudget = {
  socialEnabled: boolean; videos: string; perVideo: string; postingChannels: string[];
  ads: Record<string, { enabled: boolean; budget: string; days: string }>;
};
export function initialMarketingBudget(): MarketingBudget {
  return { socialEnabled: false, videos: '4', perVideo: '', postingChannels: ['Instagram'], ads: Object.fromEntries(adChannels.map(c => [c.id, { enabled: false, budget: c.id === 'nemu' ? '49000' : '', days: '7' }])) };
}
export function calculateMarketingBudget(value: MarketingBudget) {
  const errors: string[] = [];
  const amount = (raw: string) => { const n = parseRupiah(raw); return Number.isFinite(n) && n >= 0 && n <= 1e9 ? n : null; };
  const videos = Number(value.videos), unit = amount(value.perVideo);
  let social = 0;
  if (value.socialEnabled) {
    if (!value.videos.trim() || !Number.isInteger(videos) || videos < 1 || videos > 10000 || unit === null || !value.postingChannels.length) errors.push('Lengkapi jumlah video, budget per video, dan kanal posting.');
    else social = videos * unit;
  }
  const items = adChannels.filter(c => value.ads[c.id]?.enabled).map(c => {
    const ad = value.ads[c.id], budget = amount(ad.budget), days = Number(ad.days);
    if (budget === null || (c.id !== 'nemu' && (!ad.days.trim() || !Number.isInteger(days) || days < 1 || days > 31))) { errors.push(`Periksa budget dan durasi ${c.name}.`); return { id: c.id, name: c.name, total: 0 }; }
    return { id: c.id, name: c.name, total: budget * (c.id === 'nemu' ? 1 : days) };
  });
  const ads = items.reduce((sum, row) => sum + row.total, 0);
  return { valid: errors.length === 0, social, ads, total: social + ads, items, errors };
}
