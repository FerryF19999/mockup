import { calculateMarketingBudget, type MarketingBudget } from './marketing-budget';
import { rupiah } from './comparison-details';
import s from './calculator.module.css';

type Props = {
  value: MarketingBudget;
  onChange: (next: MarketingBudget) => void;
  liveName: string;
  liveMonthly: number;
};

export default function NemuAddonEditor({ value, onChange, liveName, liveMonthly }: Props) {
  const result = calculateMarketingBudget(value);
  const nemuAd = value.ads.nemu;
  const nemuAdTotal = result.items.find(item => item.id === 'nemu')?.total ?? 0;
  const total = result.social + result.collab + nemuAdTotal + liveMonthly;
  const input = (label: string, current: string, change: (next: string) => void, number = false) => <label className={s.field}><span>{label}</span><span className={s.inputWrap}><input type={number ? 'number' : 'text'} inputMode="numeric" min="0" step="1" value={current} placeholder={number ? 'Isi jumlah' : 'Isi rupiah'} onChange={event => change(event.target.value)} /></span></label>;
  const updateAd = (patch: Partial<typeof nemuAd>) => onChange({ ...value, ads: { ...value.ads, nemu: { ...nemuAd, ...patch } } });

  return <div className={s.addonList}>
    <section className={s.addonItem}>
      <div className={s.addonTop}><label className={s.check}><input type="checkbox" checked={value.socialEnabled} onChange={event => onChange({ ...value, socialEnabled: event.target.checked })} /><span><b>Kelola sosial media</b><small>Tim NEMU menyiapkan video sesuai brief dan kanal pilihanmu.</small></span></label><em>Budget per video</em></div>
      {value.socialEnabled && <><div className={s.twoCol}>{input('Jumlah video / bulan', value.videos, videos => onChange({ ...value, videos }), true)}{input('Budget seller / video (Rp)', value.perVideo, perVideo => onChange({ ...value, perVideo }))}</div><fieldset className={s.channelChoices}><legend>Kanal posting</legend>{['Instagram', 'TikTok', 'Facebook', 'YouTube Shorts'].map(channel => <label className={s.check} key={channel}><input type="checkbox" checked={value.postingChannels.includes(channel)} onChange={event => onChange({ ...value, postingChannels: event.target.checked ? [...value.postingChannels, channel] : value.postingChannels.filter(item => item !== channel) })} />{channel}</label>)}</fieldset><p className={s.note}>Dihitung dari jumlah video × budget per video. Budget ini menjadi dasar penawaran, bukan tarif tetap NEMU.</p></>}
    </section>

    <section className={s.addonItem}>
      <div className={s.addonTop}><label className={s.check}><input type="checkbox" checked={nemuAd.enabled} onChange={event => updateAd({ enabled: event.target.checked })} /><span><b>Iklan lewat NEMU</b><small>Pengajuan promosi melalui akun atau inventori iklan NEMU.</small></span></label><em>Mulai Rp49.000</em></div>
      {nemuAd.enabled && <>{input('Budget pengajuan / bulan (Rp)', nemuAd.budget, budget => updateAd({ budget }))}<p className={s.note}>Nominal awal berasal dari informasi layanan yang kamu berikan. Kanal, cakupan, dan hasil iklan mengikuti konfirmasi tim NEMU.</p></>}
    </section>

    <section className={s.addonItem}>
      <div className={s.addonTop}><label className={s.check}><input type="checkbox" checked={value.collabEnabled} onChange={event => onChange({ ...value, collabEnabled: event.target.checked })} /><span><b>Collab posting</b><small>Produk diajukan untuk posting bersama kanal NEMU.</small></span></label><em>Kurasi & penawaran</em></div>
      {value.collabEnabled && <>{input('Harga penawaran yang diterima / bulan (Rp)', value.collabBudget, collabBudget => onChange({ ...value, collabBudget }))}<p className={s.note}>Belum ada harga baku. Isi hanya setelah produk lolos kurasi dan kamu menerima penawaran dari NEMU.</p></>}
    </section>

    <section className={s.addonItem}>
      <div className={s.addonTop}><div className={s.addonStatic}><span className={s.addonDot} aria-hidden="true" /><span><b>Live Commerce</b><small>Human Live, AI Commerce Live, atau paket Hybrid.</small></span></div><em>{liveMonthly ? `${rupiah(liveMonthly)} / bulan` : 'Belum dipilih'}</em></div>
      <a className={s.addonLink} href="#paket-live">{liveName === 'Tanpa paket Live' ? 'Lihat pilihan paket Live ↑' : `Paket aktif: ${liveName} · ubah pilihan ↑`}</a>
    </section>

    <div className={s.addonTotal}><span>Total add-on NEMU terpilih</span><strong>{result.valid ? `${rupiah(total)} / bulan` : 'Lengkapi add-on'}</strong><small>Di luar langganan NEMU Core Rp199.000/bulan.</small></div>
    {result.errors.map(error => <p className={s.error} role="status" key={error}>{error}</p>)}
  </div>;
}
