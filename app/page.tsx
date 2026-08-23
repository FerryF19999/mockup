import Link from 'next/link';
import { Footer, Header } from './components';

const steps = [
  ['01', 'Ceritakan', 'Tulis kebutuhanmu dengan bahasa sehari-hari—warna, ukuran, budget, sampai gaya.'],
  ['02', 'NEMU memahami', 'AI membaca konteks dan menyaring katalog dari seller yang relevan dan tepercaya.'],
  ['03', 'Pilih dengan yakin', 'Bandingkan alasan rekomendasi, harga, kualitas seller, lalu kamu yang memutuskan.'],
];

const trust = [
  ['⌁', 'Biaya transparan', 'Seller tahu struktur biaya dari awal. Buyer mendapat harga yang lebih wajar.'],
  ['◉', 'Seller terverifikasi', 'Identitas dan kualitas toko ditinjau agar transaksi terasa lebih aman.'],
  ['✦', 'AI yang membantu', 'Rekomendasi menjelaskan alasannya dan keputusan tetap selalu di tanganmu.'],
  ['♡', 'Lokal jadi prioritas', 'Lebih mudah menemukan brand, UMKM, dan karya dari berbagai kota Indonesia.'],
];

export default function Home() {
  return (
    <main className="site-shell">
      <Header />

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Marketplace lokal dengan AI</p>
          <h1>Yang kamu cari, <em>NEMU</em> bantu temukan.</h1>
          <p className="hero-lede">Ceritakan kebutuhanmu seperti ngobrol biasa. Kami bantu memilih produk lokal yang paling pas—lebih cepat, lebih yakin, tanpa scroll tanpa akhir.</p>
          <div className="ai-prompt" role="search">
            <span className="spark">✦</span>
            <span className="prompt-copy">Aku cari sepatu lari olive di bawah 600 ribu</span>
            <Link href="/shop" aria-label="Cari dengan NEMU">→</Link>
          </div>
          <div className="hero-proof">
            <div><strong>2.400+</strong><span>produk terkurasi</span></div>
            <div><strong>150+</strong><span>seller lokal</span></div>
            <div><strong>4,9/5</strong><span>rating pembeli</span></div>
          </div>
        </div>

        <div className="hero-stage" aria-label="Contoh rekomendasi produk NEMU">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="product-card product-card-main">
            <div className="match-pill">94% cocok</div>
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&auto=format&fit=crop&q=85" alt="Sepatu lari warna merah" />
            <div className="product-info"><p>Stride One · Olive</p><strong>Rp589.000</strong></div>
          </div>
          <div className="floating-note note-one"><span>✓</span> Budget sesuai</div>
          <div className="floating-note note-two"><span>★</span> Seller terverifikasi</div>
          <div className="mini-card"><div className="mini-icon">✦</div><div><small>NEMU insight</small><p>Pilihan terbaik dari 184 produk</p></div></div>
        </div>
      </section>

      <section className="logo-run" aria-label="Seller pilihan NEMU">
        <p>Dipercaya seller lokal pilihan</p>
        <div><strong>AREI</strong><strong>TRACKER</strong><strong>Cartenz</strong><strong>FDR</strong><strong>Kemfood</strong></div>
      </section>

      <section className="section how" id="fitur">
        <div className="section-heading">
          <p className="section-kicker">Satu percakapan, banyak kemungkinan</p>
          <h2>Dari “aku butuh…” sampai “ini yang paling cocok.”</h2>
          <p>NEMU mengubah pencarian yang panjang menjadi proses yang terasa seperti dibantu teman yang paham kebutuhanmu.</p>
        </div>
        <div className="steps">
          {steps.map(([number, title, copy]) => (
            <article className="step-card" key={number}>
              <span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
        <div className="chat-demo">
          <div className="chat-sidebar">
            <div className="chat-logo">n</div>
            <div className="chat-dots"><i /><i /><i /></div>
            <small>AI aktif</small>
          </div>
          <div className="chat-conversation">
            <p className="chat-label">Percakapan dengan NEMU</p>
            <div className="bubble bubble-user">Aku cari tas kerja kulit lokal, muat laptop 14 inci. Budget maksimal 800 ribu.</div>
            <div className="bubble bubble-ai"><b>✦ NEMU</b> Aku menemukan 26 produk. Tiga ini paling cocok karena ukurannya pas, materialnya kulit asli, dan sellernya terverifikasi.</div>
          </div>
          <div className="chat-result">
            <img src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=900&auto=format&fit=crop&q=85" alt="Tas kulit warna cokelat" />
            <div><small>97% cocok</small><h3>Arunika Work Tote</h3><p>Bandung · Kulit sapi</p><strong>Rp749.000</strong></div>
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="section-heading split-heading"><div><p className="section-kicker">Kenapa NEMU</p><h2>Belanja yang terasa lebih manusiawi.</h2></div><p>Teknologi berjalan di belakang layar. Di depan, kamu mendapat pengalaman yang jernih, aman, dan tetap punya kendali.</p></div>
        <div className="trust-grid">
          {trust.map(([icon, title, copy], index) => <article className={`trust-card trust-${index + 1}`} key={title}><span>{icon}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="seller-section" id="seller">
        <div className="seller-copy">
          <p className="section-kicker light">Untuk seller lokal</p>
          <h2>Lebih banyak waktu untuk tumbuh, lebih sedikit kerja berulang.</h2>
          <p>Dari foto menjadi draft listing, dari katalog lama ke toko baru, sampai insight harga—NEMU membantu pekerjaan yang bikin seller kehabisan waktu.</p>
          <ul><li><span>01</span> Listing lebih cepat dari foto produk</li><li><span>02</span> Migrasi katalog yang didampingi</li><li><span>03</span> Insight harga tanpa kehilangan kendali</li></ul>
          <a className="button button-lime" href="https://seller.nemu-ai.com/register">Buka toko di NEMU <span>↗</span></a>
        </div>
        <div className="seller-dashboard" aria-label="Contoh dashboard seller NEMU">
          <div className="dash-top"><div><small>Selamat pagi, Kriya ✦</small><h3>Toko kamu tumbuh.</h3></div><span>30 hari terakhir⌄</span></div>
          <div className="dash-stats"><div><small>Omzet</small><strong>Rp18,4jt</strong><em>↗ 24%</em></div><div><small>Pesanan</small><strong>186</strong><em>↗ 18%</em></div></div>
          <div className="dash-chart"><div className="chart-label"><span>Performa toko</span><strong>Rp18.410.000</strong></div><div className="bars">{[36,48,42,64,56,78,72,96,82,110,92,122].map((h,i)=><i key={i} style={{height:h}} />)}</div></div>
          <div className="ai-tip"><span>✦</span><div><strong>Insight NEMU</strong><p>Produk dengan latar polos mendapat 22% lebih banyak klik minggu ini.</p></div></div>
        </div>
      </section>

      <section className="section buyer-section" id="buyer">
        <div className="buyer-visual">
          <div className="phone-card">
            <div className="phone-top"><span>9:41</span><b>nemu.ai</b><span>•••</span></div>
            <div className="phone-photo"><img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&auto=format&fit=crop&q=85" alt="Dress merah elegan" /><span>♡</span></div>
            <div className="phone-info"><small>NEMU PICK · 96% COCOK</small><h3>Aluna Linen Dress</h3><p>Nyaman untuk acara siang · tersedia 4 warna</p><strong>Rp385.000</strong><button>Lihat detail</button></div>
          </div>
          <div className="buyer-sticker">Pilihanmu,<br />bukan algoritma.</div>
        </div>
        <div className="buyer-copy">
          <p className="section-kicker">Untuk buyer</p><h2>Temukan barang bagus tanpa tersesat di pilihan.</h2><p>Kamu cukup cerita. NEMU membantu menyusun pilihan berdasarkan kebutuhan, ukuran, lokasi, budget, dan kualitas seller—lengkap dengan alasan yang mudah dipahami.</p>
          <div className="buyer-points"><div><span>✓</span><p><b>Cari tinggal chat</b><small>Bahasa sehari-hari, bukan kata kunci kaku.</small></p></div><div><span>✓</span><p><b>Alasan rekomendasi jelas</b><small>Tahu kenapa sebuah produk cocok untukmu.</small></p></div><div><span>✓</span><p><b>Checkout lebih tenang</b><small>Seller tepercaya dan info produk yang rapi.</small></p></div></div>
          <Link className="text-link" href="/shop">Coba jelajahi marketplace <span>→</span></Link>
        </div>
      </section>

      <section className="cta-section">
        <div><p className="section-kicker">Masuk ke arah baru belanja online</p><h2>Kebutuhanmu unik.<br />Cara belanjamu juga harus begitu.</h2></div>
        <Link className="cta-orb" href="/shop"><span>Mulai dengan NEMU</span><b>↗</b></Link>
      </section>

      <Footer />
    </main>
  );
}
