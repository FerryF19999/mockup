import Link from 'next/link';

export function Header() {
  return (
    <>
      <div className="topbar"><span>Gratis ongkir buat order pertama ✨</span><div><a href="https://seller.nemu-ai.com/register">Mulai jualan</a><a href="https://shop.nemu-ai.com/help">Bantuan</a><span>Indonesia ▾</span></div></div>
      <header className="main-header">
        <Link className="brand" href="/" aria-label="NEMU AI beranda"><span className="brand-bubble">n</span><b>nemu.ai</b></Link>
        <form className="header-search" action="/shop" role="search"><span>⌕</span><input name="q" placeholder="Mau cari apa?" aria-label="Cari produk" /><button type="submit">Cari</button></form>
        <nav aria-label="Menu akun"><Link href="/shop" aria-label="Favorit">♡<small>Favorit</small></Link><Link href="/shop" aria-label="Keranjang">♧<small>Keranjang</small></Link><a href="https://shop.nemu-ai.com/login">Masuk</a></nav>
      </header>
      <nav className="category-nav" aria-label="Kategori populer"><Link href="/shop">Semua kategori</Link><Link href="/shop">Fashion</Link><Link href="/shop">Elektronik</Link><Link href="/shop">Rumah tangga</Link><Link href="/shop">Kecantikan</Link><Link href="/shop">Preloved</Link><Link href="/shop">Toko lokal</Link><Link className="nav-ai" href="/shop">✦ Tanya NEMU</Link></nav>
    </>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div><Link className="brand brand-footer" href="/"><span className="brand-bubble">n</span><b>nemu.ai</b></Link><p>Belanja online, tapi nggak bikin capek.</p></div>
        <div><b>NEMU</b><Link href="/shop">Belanja</Link><a href="https://seller.nemu-ai.com/register">Mulai jualan</a><a href="https://shop.nemu-ai.com/about">Tentang kami</a></div>
        <div><b>Bantuan</b><a href="https://shop.nemu-ai.com/help">Pusat bantuan</a><a href="https://shop.nemu-ai.com/pengiriman">Pengiriman</a><a href="https://shop.nemu-ai.com/retur-garansi">Retur & garansi</a></div>
        <div><b>Ikutan, yuk</b><a href="https://www.instagram.com/nemu_ai_/">Instagram</a><a href="https://www.tiktok.com/@nemu_ai_">TikTok</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 PT Nusa Era Modern Unggul</span><span>Belanja lokal. Biar sama-sama naik.</span></div>
    </footer>
  );
}
