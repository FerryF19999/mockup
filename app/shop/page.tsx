import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { CategoryFilter, FavoriteButton, ShopSearch } from './shop-client';

export const metadata: Metadata = {
  title: 'Jelajahi produk — NEMU AI',
  description: 'Cari produk lokal dan preloved dengan bantuan AI NEMU.',
};

const categories = [
  ['⌘', 'Semua'], ['◒', 'Fashion'], ['◉', 'Elektronik'], ['⌂', 'Rumah'], ['✿', 'Kecantikan'], ['◇', 'Kriya'], ['☕', 'Kuliner'],
];

const products = [
  { name: 'Vivo V11 Pro 6/64', price: 'Rp950.000', old: 'Rp1.050.000', meta: 'Bagus · Klaten', match: '93% cocok', img: 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/7008540f-9a9c-4917-9368-55b0e5335908.png' },
  { name: 'GM Shoes Flat Sandal', price: 'Rp70.000', old: '', meta: 'Baru · Jakarta', match: 'Pilihan lokal', img: 'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/b65c53f0-b789-4dd0-84a0-ba883188e12a.jpg' },
  { name: 'Kopi Gayo Arabika', price: 'Rp95.000', old: 'Rp110.000', meta: 'Aceh · 250gr', match: '97% cocok', img: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&auto=format&fit=crop&q=80' },
  { name: 'Arunika Work Tote', price: 'Rp749.000', old: '', meta: 'Bandung · Kulit asli', match: 'NEMU pick', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80' },
  { name: 'Keramik Mug Handmade', price: 'Rp180.000', old: '', meta: 'Bandung · Handmade', match: 'Baru masuk', img: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=700&auto=format&fit=crop&q=80' },
  { name: 'Aluna Linen Dress', price: 'Rp385.000', old: 'Rp429.000', meta: 'Yogyakarta · 4 warna', match: '96% cocok', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&auto=format&fit=crop&q=80' },
  { name: 'Kacamata Acetate', price: 'Rp420.000', old: '', meta: 'Bandung · Unisex', match: 'Seller pilihan', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80' },
  { name: 'Tenun Sumba Laras', price: 'Rp650.000', old: '', meta: 'NTT · Buatan tangan', match: 'Cerita lokal', img: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&auto=format&fit=crop&q=80' },
];

const stores = [
  { name: 'AREI OUTDOORGEAR', tag: 'Outdoor & travel', count: '35 produk', color: '#174f3b' },
  { name: 'TRACKER OFFICIAL', tag: 'Sepatu & sandal', count: '30 produk', color: '#6d55ff' },
  { name: 'Cartenz', tag: 'Gear pendakian', count: '34 produk', color: '#ff765d' },
  { name: 'Kriya Handayani', tag: 'Karya lokal', count: '48 produk', color: '#d9ff43' },
];

export default function ShopPage() {
  return (
    <main className="site-shell shop-page">
      <Header variant="shop" />
      <section className="shop-hero">
        <div className="shop-hero-title"><p className="eyebrow"><span /> Belanja dengan cara baru</p><h1>Mau <em>nemu</em> apa hari ini?</h1><p>Satu kalimat cukup. NEMU bantu memahami, membandingkan, dan membawa pilihan yang paling relevan ke depanmu.</p></div>
        <ShopSearch />
        <div className="shop-benefits"><span>✓ Gratis ongkir s/d Rp30rb</span><span>✦ Cashback 20% produk preloved</span><span>◉ Seller lokal terverifikasi</span></div>
      </section>

      <section className="shop-section categories" id="kategori">
        <div className="shop-section-head"><div><p className="section-kicker">Mulai dari sini</p><h2>Jelajahi kategori</h2></div><span>Geser untuk lihat lainnya →</span></div>
        <div className="category-grid">{categories.map(([icon, name], index) => <button key={name} className={`category-tile cat-${index}`}><span>{icon}</span><strong>{name}</strong><small>Lihat pilihan →</small></button>)}</div>
      </section>

      <section className="shop-section discovery-strip">
        <article className="discovery-card discovery-main"><div><p className="section-kicker light">Kurasi NEMU</p><h2>Barang bagus<br />nggak harus baru.</h2><p>Temukan preloved pilihan dengan kondisi jelas dan seller tepercaya.</p><button>Jelajahi preloved →</button></div><img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop&q=85" alt="Fashion preloved pilihan" /></article>
        <article className="discovery-card discovery-small"><span>Made in Indonesia</span><h3>Dari tangan lokal,<br />untuk cerita baru.</h3><div className="craft-circles"><img src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&auto=format&fit=crop&q=80" alt="Keramik lokal" /><img src="https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&auto=format&fit=crop&q=80" alt="Kain tenun lokal" /></div></article>
      </section>

      <section className="shop-section product-section" id="produk">
        <div className="shop-section-head"><div><p className="section-kicker">Dipilih untukmu</p><h2>Produk yang layak dilihat</h2></div><button className="outline-button">Lihat semua produk ↗</button></div>
        <CategoryFilter categories={['Semua', 'Terbaru', 'Preloved', 'Brand lokal', 'Di bawah 200rb']} />
        <div className="product-grid">{products.map((product) => <article className="shop-product" key={product.name}><div className="shop-product-image"><img src={product.img} alt={product.name} /><span>{product.match}</span><FavoriteButton name={product.name} /></div><div className="shop-product-copy"><p>{product.meta}</p><h3>{product.name}</h3><div><strong>{product.price}</strong>{product.old && <del>{product.old}</del>}</div></div></article>)}</div>
      </section>

      <section className="shop-section store-section" id="toko">
        <div className="shop-section-head"><div><p className="section-kicker">Toko andalan</p><h2>Seller yang bikin lokal makin menarik.</h2></div><p className="head-copy">Katalog rapi, respons cepat, dan identitas yang sudah ditinjau NEMU.</p></div>
        <div className="store-grid">{stores.map((store, index) => <article className="store-card" key={store.name} style={{'--store-color': store.color} as React.CSSProperties}><div className="store-avatar">{store.name.split(' ').map(x=>x[0]).join('').slice(0,2)}</div><span className="verified">✓ terverifikasi</span><h3>{store.name}</h3><p>{store.tag} · {store.count}</p><a href="https://shop.nemu-ai.com/toko">Kunjungi toko <span>→</span></a><b>0{index + 1}</b></article>)}</div>
      </section>

      <section className="shop-seller-cta"><div><p className="section-kicker light">Gratis untuk mulai</p><h2>Punya produk bagus?<br />Bawa tokomu ke NEMU.</h2></div><div><p>Dapatkan storefront sendiri, bantuan listing dari foto, dan akses ke buyer yang benar-benar relevan.</p><a className="button button-lime" href="https://seller.nemu-ai.com/register">Mulai jualan <span>↗</span></a></div></section>
      <Footer />
    </main>
  );
}
