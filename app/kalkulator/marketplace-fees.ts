import { calculate } from './calculation.ts';
import { parseRupiah } from './pricing.ts';

export type FeeRow = { id: string; name: string; kind: 'percent' | 'order' | 'month'; group: 'transaction' | 'shipping' | 'promotion' | 'monthly'; enabled: boolean; rate: string; cap: string; count: string; note: string };
const row = (id: string, name: string, kind: FeeRow['kind'], note: string, enabled = false, rate = '', group: FeeRow['group'] = 'transaction'): FeeRow => ({ id, name, kind, note, enabled, rate, group, cap: '', count: '' });
export const marketplaceSources: Record<string, { url: string; label: string; note: string }[]> = {
  Shopee: [
    { url: 'https://help.shopee.co.id/portal/4/article/71187-Syarat-Layanan-Shopee', label: 'Syarat Layanan Shopee · bagian 19', note: 'Dibaca 4 September 2026: proses pesanan Rp1.250; pre-order 3% hanya jika memenuhi ketentuan. Admin berbeda menurut kategori/status.' },
    { url: 'https://help.shopee.co.id/portal/4/article/71196?seo=1', label: 'Ketentuan Gratis Ongkir XTRA', note: 'Program opsional, biaya dapat tetap dikenakan pada transaksi peserta tanpa penggunaan voucher. Tarif kategori belum berhasil diverifikasi.' },
  ],
  'TikTok Shop': [{ url: 'https://seller-id.tokopedia.com/university/essay?knowledge_id=7753828090824449', label: 'Pengenalan Biaya Penjual · Seller University', note: 'Halaman resmi belum dapat dibaca saat riset. Komponen di bawah adalah daftar untuk dicocokkan dengan laporan akun, bukan konfirmasi semua biaya berlaku.' }],
  Tokopedia: [{ url: 'https://seller-id.tokopedia.com/university/essay?knowledge_id=7753828090824449', label: 'Pengenalan Biaya Penjual · Seller University', note: 'Gunakan ketentuan akun Seller Center terintegrasi. Halaman resmi belum dapat dibaca saat riset; tarif dan keberlakuan wajib dicocokkan.' }],
  Lazada: [{ url: 'https://sellercenter.lazada.co.id', label: 'Lazada Seller Center', note: 'Tarif rinci terkini belum terverifikasi. Cocokkan status Marketplace/LazMall, usia toko, promo pembebasan, dan program aktif.' }],
  Blibli: [{ url: 'https://about.blibli.com/en/media/press-release/seller-lebih-tenang-dan-cuan-jualan-di-blibli-biaya-jelas-gak-ada-tambahan-tiba-tiba', label: 'Penjelasan biaya seller Blibli', note: 'Blibli menyebut komisi dan biaya pengiriman. Persentase mengikuti kontrak; biaya iklan/operasional di bawah bukan biaya wajib Blibli.' }],
};
export function initialMarketplaceFees(marketplace: string): FeeRow[] {
  let specific: FeeRow[];
  if (marketplace === 'Shopee') specific = [
    row('admin', 'Administrasi kategori / status seller', 'percent', 'Cocokkan Non-Star, Star/Star+, atau Mall serta subkategori produk. Isi tarif efektif termasuk pajak jika sudah termasuk.', true),
    row('processing', 'Proses pesanan', 'order', 'Referensi resmi Rp1.250/transaksi selesai. Pengecualian 50 pesanan awal Non-Star pada ketentuan yang dibaca berlaku untuk upload produk pertama sebelum 1 Agustus 2026. Atur pesanan terkena biaya sesuai akun.', true, '1250'),
    row('gox', 'Layanan Gratis Ongkir XTRA', 'percent', 'Hanya peserta program. Jangan samakan biaya layanan program dengan subsidi ongkir seller. Isi batas nominal bila berlaku.'),
    row('promo-xtra', 'Promo XTRA / layanan kampanye', 'percent', 'Aktifkan hanya jika ada di program atau rincian penghasilan akun; tarif belum terverifikasi.'),
    row('preorder', 'Layanan pre-order', 'percent', 'Referensi resmi 3%, hanya produk pre-order yang memenuhi kriteria. Isi jumlah pesanan yang benar-benar terkena.', false, '3'),
    row('affiliate', 'Komisi affiliate seller', 'percent', 'Komisi yang kamu tanggung sesuai program. Hitung hanya pesanan teratribusi; bukan semua pesanan.'),
  ]; else if (marketplace === 'TikTok Shop' || marketplace === 'Tokopedia') specific = [
    row('commission', 'Komisi platform', 'percent', 'Tarif efektif kategori dan tipe Marketplace/Mall, setelah pengurangan yang benar-benar berlaku.', true),
    row('dynamic', 'Komisi dinamis', 'percent', 'Cek apakah muncul di rincian akun. Tarif dan batas nominal terkini belum terverifikasi.'),
    row('mall', 'Layanan Mall', 'percent', 'Periksa khusus status Mall; jangan diaktifkan untuk non-Mall tanpa bukti tagihan.'),
    row('processing', 'Pemrosesan order', 'order', 'Isi tarif dan pesanan yang dikenai setelah pembebasan. Tarif resmi terkini belum dapat dibaca.'),
    row('growth', 'Growth Xtra / program promosi', 'percent', 'Cocokkan program aktif. Jangan hitung skema lama dan penggantinya bersamaan; masukkan komisi platform efektif setelah diskon.'),
    row('preorder', 'Layanan pre-order', 'percent', 'Hanya pesanan pre-order yang memenuhi ketentuan akun.'),
    row('affiliate', 'Komisi affiliate', 'percent', 'Tarif yang seller tanggung, hanya untuk pesanan teratribusi.'),
    row('logistics', 'Layanan logistik tambahan', 'order', 'Aktifkan jika tercantum pada laporan akun; terpisah dari ongkir seller.'),
  ]; else if (marketplace === 'Lazada') specific = [
    row('commission', 'Komisi kategori Marketplace / LazMall', 'percent', 'Tarif efektif mengikuti kategori, tipe seller, dan pembebasan akun. Belum ada preset tarif resmi.', true),
    row('payment', 'Pembayaran / administrasi transaksi', 'percent', 'Cocokkan nama dan dasar biaya pada laporan. Jika basisnya bukan harga produk, masukkan nominal aktual lewat potongan lain.'),
    row('processing', 'Proses pesanan', 'order', 'Periksa tarif dan pengecualian seller baru pada akun.'),
    row('freeship', 'Free Shipping Max', 'percent', 'Hanya jika ikut program; isi tarif dan cap sesuai kategori.'),
    row('campaign', 'Voucher / program kampanye', 'percent', 'Tidak diasumsikan berbayar. Aktifkan hanya jika ada potongan sesuai program saat ini.'),
    row('affiliate', 'Affiliate / Sponsored Affiliate', 'percent', 'Hanya pesanan yang menjadi dasar komisi menurut laporan.'),
    row('fulfillment', 'Fulfillment / penanganan gudang', 'order', 'Jika memakai layanan berbayar. Penyimpanan bulanan dapat dimasukkan pada operasional.'),
  ]; else if (marketplace === 'Blibli') specific = [
    row('commission', 'Komisi sesuai kontrak Blibli', 'percent', 'Gunakan komisi kategori pada kontrak akun. Tidak mengasumsikan biaya admin tambahan di luar komisi.', true),
  ]; else specific = [row('commission', 'Komisi / administrasi platform', 'percent', 'Isi tarif efektif pada akun marketplace yang ingin dibandingkan.', true), row('processing', 'Biaya proses per pesanan', 'order', 'Aktifkan jika dikenakan platform.')];
  return [...specific,
    row('seller-shipping', 'Ongkir / subsidi yang ditanggung seller', 'order', 'Nominal per pesanan terkena biaya, di luar biaya layanan program gratis ongkir.', false, '', 'shipping'),
    row('seller-promo', 'Promo seller tambahan', 'order', 'Hanya biaya yang belum mengurangi harga jual setelah diskon. Jangan hitung diskon/voucher yang sama dua kali.', false, '', 'promotion'),
    row('ads', 'Belanja iklan per bulan', 'month', 'Anggaran pilihan seller; bukan potongan wajib marketplace.', false, '', 'monthly'),
    row('operations', 'Langganan, host & operasional bulanan', 'month', 'Biaya lain yang belum masuk modal atau baris lainnya.', false, '', 'monthly'),
    row('adjustment', 'Retur, selisih ongkir & potongan lain', 'month', 'Total potongan tambahan berdasarkan laporan. Bukan klaim semua marketplace mengenakannya.', false, '', 'monthly'),
    row('tax', 'Pajak dipotong dari pencairan', 'month', 'Isi nominal aktual hanya jika berlaku dan belum dihitung. Ini potongan pencairan, tidak selalu biaya/laba rugi; kalkulator tidak menentukan kewajiban pajak.', false, '', 'monthly'),
  ];
}
export function calculateMarketplace(price: number, cost: number, orders: number, rows: FeeRow[]) {
  const base = calculate(price, cost, orders, { percent: 0, perOrder: 0, shipping: 0, promotion: 0, monthly: 0 });
  const amounts: { id: string; name: string; amount: number; chargedOrders: number | null; group: FeeRow['group'] }[] = [];
  for (const row of rows.filter(r => r.enabled)) {
    const rate = row.kind === 'percent' ? Number(row.rate) : parseRupiah(row.rate);
    const cap = row.cap.trim() === '' ? Infinity : parseRupiah(row.cap);
    const count = row.count.trim() === '' ? orders : Number(row.count);
    if (row.rate.trim() === '' || !Number.isFinite(rate) || rate < 0 || rate > (row.kind === 'percent' ? 100 : 1e9)) return null;
    if (row.kind !== 'month' && (!Number.isInteger(count) || count < 0 || count > orders)) return null;
    if (row.kind === 'percent' && (Number.isNaN(cap) || cap < 0 || (cap !== Infinity && cap > 1e9))) return null;
    const amount = row.kind === 'month' ? rate : (row.kind === 'percent' ? Math.min(price * rate / 100, cap) : rate) * count;
    amounts.push({ id: row.id, name: row.name, amount, chargedOrders: row.kind === 'month' ? null : count, group: row.group });
  }
  const sum = (group: FeeRow['group']) => amounts.filter(r => r.group === group).reduce((a, r) => a + r.amount, 0);
  const totalFees = amounts.reduce((sum, r) => sum + r.amount, 0);
  return { ...base, transaction: sum('transaction'), shipping: sum('shipping'), promotion: sum('promotion'), monthly: sum('monthly'), totalFees, remainder: base.revenue - base.productCost - totalFees, perOrder: orders ? totalFees / orders : null, amounts };
}
