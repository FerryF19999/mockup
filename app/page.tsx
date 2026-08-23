import Link from 'next/link';
import { Footer, Header } from './components';

const miniProducts = [
  ['Vivo V11 Pro', 'Rp950.000', 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/7008540f-9a9c-4917-9368-55b0e5335908.png'],
  ['GM Flat Sandal', 'Rp70.000', 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/b65c53f0-b789-4dd0-84a0-ba883188e12a.jpg'],
  ['Kopi Gayo', 'Rp95.000', 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&auto=format&fit=crop&q=80'],
];

export default function Home() {
  return (
    <main>
      <Header />
      <section className="landing-hero wrap">
        <div className="landing-copy">
          <p className="tiny-label">Marketplace lokal + AI</p>
          <h1>Nyari apa?<br /><em>Bilang aja.</em></h1>
          <p>Nggak perlu mikir kata kunci. Ketik kayak lagi chat. NEMU bantu cari yang paling pas.</p>
          <Link className="primary-btn" href="/shop">Mulai nyari <span>→</span></Link>
          <div className="easy-row"><span><b>✓</b> Harga jelas</span><span><b>✓</b> Seller dicek</span><span><b>✓</b> Nggak ribet</span></div>
        </div>
        <div className="hero-market-card">
          <div className="fake-chat"><span>✦</span><p>“Cariin HP bagus under 1 juta”</p><b>→</b></div>
          <div className="mini-product-row">{miniProducts.map(([name,price,img])=><article key={name}><img src={img} alt={name}/><div><small>Pas buat kamu</small><h3>{name}</h3><strong>{price}</strong></div></article>)}</div>
          <p className="ai-note">✦ Dari 120 produk, ini yang paling masuk.</p>
        </div>
      </section>

      <section className="quick-proof"><div><b>2.400+</b><span>produk</span></div><div><b>150+</b><span>seller lokal</span></div><div><b>4,9/5</b><span>rating pembeli</span></div><p>Intinya: cari lebih cepat, belanja lebih tenang.</p></section>

      <section className="simple-section wrap">
        <div className="simple-heading"><p className="tiny-label">Gampang banget</p><h2>Cuma tiga langkah.<br />Beneran.</h2></div>
        <div className="simple-steps"><article><span>1</span><h3>Ketik maumu</h3><p>Contoh: “outfit kondangan under 300 ribu.”</p></article><article><span>2</span><h3>NEMU nyariin</h3><p>Produk disaring. Yang zonk, minggir dulu.</p></article><article><span>3</span><h3>Pilih. Beres.</h3><p>Lihat harga, cek seller, lalu gas checkout.</p></article></div>
      </section>

      <section className="familiar-section">
        <div className="wrap familiar-grid">
          <div><p className="tiny-label light">Kenapa enak</p><h2>Tampilannya familiar.<br />Carinya lebih pinter.</h2><p>Kategori, promo, toko resmi, dan produk rekomendasi tetap ada di tempat yang kamu kenal. Bedanya, NEMU bisa diajak ngobrol.</p><Link className="secondary-btn" href="/shop">Lihat marketplace <span>↗</span></Link></div>
          <div className="familiar-list"><div><span>01</span><b>Cari kayak biasa</b><p>Pakai kolom search. Sat-set.</p></div><div><span>02</span><b>Atau chat sama AI</b><p>Kalau bingung nama barangnya.</p></div><div><span>03</span><b>Harga nggak ngumpet</b><p>Yang penting kelihatan dari awal.</p></div><div><span>04</span><b>Seller beneran</b><p>Ada tanda kalau sudah dicek.</p></div></div>
        </div>
      </section>

      <section className="seller-banner wrap">
        <div><p className="tiny-label">Buat yang jualan</p><h2>Punya barang bagus?<br />Yuk, buka toko.</h2><p>Upload foto. NEMU bantu bikin judul dan deskripsi. Kamu tinggal cek, lalu tayang.</p><a className="primary-btn" href="https://seller.nemu-ai.com/register">Mulai jualan <span>→</span></a></div>
        <div className="seller-phone"><div className="phone-head"><b>Toko Kriya</b><span>•••</span></div><div className="phone-score"><small>Omzet bulan ini</small><strong>Rp18,4 jt</strong><em>+24%</em></div><div className="phone-bars">{[40,55,38,72,58,86,70,98].map((h,i)=><i key={i} style={{height:h}} />)}</div><div className="phone-tip"><b>✦ NEMU bilang</b><p>Foto yang terang lebih sering diklik. Yuk ganti foto pertama.</p></div></div>
      </section>

      <section className="last-cta"><p>Udah siap nyari?</p><h2>Masuk. Ketik. <em>Nemu.</em></h2><Link href="/shop">Coba sekarang →</Link></section>
      <Footer />
    </main>
  );
}
