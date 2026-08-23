import type { Metadata } from 'next';
import { Footer, Header } from '../components';
import { CategoryFilter, FavoriteButton, ShopSearch } from './shop-client';

export const metadata: Metadata = { title: 'Belanja — NEMU AI', description: 'Cari barang lokal dan preloved. Ketik aja, NEMU bantu nyari.' };

const cats = [
  ['👗','Fashion'],['📱','HP & Gadget'],['💄','Kecantikan'],['🏠','Rumah'],['🎧','Elektronik'],['⚽','Olahraga'],['🧸','Hobi'],['♻','Preloved'],['✨','Semua'],
];

const products = [
  { name:'Vivo V11 Pro 6/64', price:'Rp950.000', old:'Rp1.050.000', badge:'-10%', note:'Preloved · Bagus', city:'Klaten', img:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/7008540f-9a9c-4917-9368-55b0e5335908.png' },
  { name:'GM Shoes Flat Sandal', price:'Rp70.000', old:'', badge:'Lokal', note:'Baru', city:'Jakarta', img:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/b65c53f0-b789-4dd0-84a0-ba883188e12a.jpg' },
  { name:'Kopi Gayo Arabika 250gr', price:'Rp95.000', old:'Rp110.000', badge:'-14%', note:'Best seller', city:'Aceh', img:'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&auto=format&fit=crop&q=80' },
  { name:'Arunika Work Tote', price:'Rp749.000', old:'', badge:'96% cocok', note:'Kulit asli', city:'Bandung', img:'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=700&auto=format&fit=crop&q=80' },
  { name:'Keramik Mug Handmade', price:'Rp180.000', old:'', badge:'Lokal', note:'Buatan tangan', city:'Bandung', img:'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=700&auto=format&fit=crop&q=80' },
  { name:'Aluna Linen Dress', price:'Rp385.000', old:'Rp429.000', badge:'-10%', note:'4 warna', city:'Yogyakarta', img:'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=700&auto=format&fit=crop&q=80' },
  { name:'Kacamata Acetate', price:'Rp420.000', old:'', badge:'Official', note:'Unisex', city:'Bandung', img:'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=700&auto=format&fit=crop&q=80' },
  { name:'Tenun Sumba Laras', price:'Rp650.000', old:'', badge:'Lokal', note:'Buatan tangan', city:'NTT', img:'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=700&auto=format&fit=crop&q=80' },
  { name:'Vivo Y12s 3/32', price:'Rp750.000', old:'Rp850.000', badge:'-12%', note:'Preloved · Bagus', city:'Klaten', img:'https://s3.ap-southeast-3.amazonaws.com/s3-production-nemu-ai/products/5b7d6a77-a594-420a-907c-edeafcdab0c4.png' },
  { name:'Jam Tangan Minimal', price:'Rp1.250.000', old:'', badge:'Official', note:'Garansi toko', city:'Jakarta', img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=700&auto=format&fit=crop&q=80' },
];

export default function ShopPage() {
  return (
    <main className="shop-page">
      <Header />
      <section className="market-wrap promo-grid">
        <article className="main-promo"><div><span className="promo-kicker">NEMU AI</span><h1>Mau apa?<br /><em>Sebutin aja.</em></h1><p>Biar kami yang nyari. Kamu tinggal pilih.</p><a href="#produk">Coba sekarang →</a></div><div className="promo-chat"><span>✦</span><p>“Cariin kado buat ibu, budget 200 ribu.”</p><b>NEMU nemu 38 pilihan</b></div></article>
        <article className="side-promo side-one"><span>ONGKIR?</span><h2>Tenang.<br />Kita bantu.</h2><p>Gratis s/d Rp30rb</p></article>
        <article className="side-promo side-two"><span>PRELOVED</span><h2>Masih bagus.<br />Harga lucu.</h2><p>Lihat barangnya →</p></article>
      </section>

      <section className="market-wrap ai-box"><div className="ai-title"><span>✦</span><div><b>Tanya NEMU</b><small>Nggak tahu nama barangnya? Cerita aja.</small></div></div><ShopSearch /></section>

      <section className="market-card market-wrap category-card" id="kategori">
        <div className="market-heading"><h2>Mau lihat apa?</h2><a href="#produk">Semua kategori →</a></div>
        <div className="circle-categories">{cats.map(([icon,name])=><a href="#produk" key={name}><span>{icon}</span><b>{name}</b></a>)}</div>
      </section>

      <section className="market-card market-wrap flash-card">
        <div className="market-heading flash-head"><div><span>⚡</span><h2>Lagi murah banget</h2><b>01 : 42 : 18</b></div><a href="#produk">Lihat semua →</a></div>
        <div className="flash-products">{products.slice(0,5).map((p,index)=><article key={p.name}><div><img src={p.img} alt={p.name}/><span>{p.badge}</span></div><p>{p.name}</p><strong>{p.price}</strong>{p.old&&<del>{p.old}</del>}<i><b style={{width:`${[72,84,63,91,77][index]}%`}}/>Hampir habis</i></article>)}</div>
      </section>

      <section className="market-wrap official-section"><div className="market-heading"><div><span className="mini-tag">TOKO YANG UDAH DICEK</span><h2>Official? Iya. Aman? Iya.</h2></div><a href="https://shop.nemu-ai.com/toko">Lihat semua toko →</a></div><div className="official-grid"><article><b>AREI</b><span>✓ Official</span><p>Outdoor & travel</p></article><article><b>TRACKER</b><span>✓ Official</span><p>Sepatu & sandal</p></article><article><b>Cartenz</b><span>✓ Official</span><p>Gear pendakian</p></article><article><b>KRIYA.</b><span>✓ Terverifikasi</span><p>Barang lokal pilihan</p></article></div></section>

      <section className="market-wrap recommendations" id="produk">
        <div className="market-heading"><div><span className="mini-tag">BUAT KAMU</span><h2>Scroll dikit. Siapa tahu jodoh.</h2></div></div>
        <CategoryFilter categories={['Semua','Lagi rame','Di bawah 200rb','Brand lokal','Preloved']} />
        <div className="market-product-grid">{products.map(p=><article className="market-product" key={p.name}><div className="market-product-img"><img src={p.img} alt={p.name}/><span>{p.badge}</span><FavoriteButton name={p.name}/></div><div className="market-product-info"><h3>{p.name}</h3><p>{p.note}</p><strong>{p.price}</strong>{p.old&&<del>{p.old}</del>}<small><span>★ 4.9</span> · {p.city}</small></div></article>)}</div>
        <button className="load-more">Lihat lebih banyak</button>
      </section>

      <section className="market-wrap trust-row"><div><span>🛡</span><b>Bayar aman</b><p>Uang diteruskan setelah barang sampai.</p></div><div><span>✓</span><b>Seller dicek</b><p>Biar belanjanya nggak waswas.</p></div><div><span>↩</span><b>Bisa komplain</b><p>Kalau ada apa-apa, bilang.</p></div><div><span>✦</span><b>AI bantu pilih</b><p>Bukan asal kasih produk.</p></div></section>

      <section className="market-seller"><div><span>JUALAN DI NEMU</span><h2>Foto. Upload.<br />Jualan.</h2></div><div><p>NEMU bantu bikin listing. Kamu fokus ke barang dan pembeli.</p><a href="https://seller.nemu-ai.com/register">Buka toko gratis →</a></div></section>
      <Footer />
    </main>
  );
}
