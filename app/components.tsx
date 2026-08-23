import Link from 'next/link';

type HeaderProps = { variant?: 'landing' | 'shop' };

export function Header({ variant = 'landing' }: HeaderProps) {
  return (
    <header className={`nav-shell ${variant === 'shop' ? 'shop-nav' : ''}`}>
      <Link className="brand" href="/" aria-label="NEMU AI beranda">
        <span className="brand-mark">n</span>
        <span>nemu.ai</span>
      </Link>
      {variant === 'landing' ? (
        <nav aria-label="Navigasi utama">
          <a href="#fitur">Cara kerjanya</a>
          <a href="#seller">Untuk seller</a>
          <a href="#buyer">Untuk buyer</a>
          <Link href="/shop">Jelajahi produk</Link>
        </nav>
      ) : (
        <nav aria-label="Navigasi toko">
          <a href="#kategori">Kategori</a>
          <a href="#produk">Produk pilihan</a>
          <a href="#toko">Toko lokal</a>
        </nav>
      )}
      <Link className="button button-dark" href={variant === 'landing' ? '/shop' : '/#seller'}>
        {variant === 'landing' ? 'Mulai mencari' : 'Mulai jualan'} <span>↗</span>
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div>
          <Link className="brand brand-light" href="/"><span className="brand-mark">n</span><span>nemu.ai</span></Link>
          <p>Belanja lokal yang lebih personal, aman, dan mudah dengan bantuan AI.</p>
        </div>
        <div className="footer-links">
          <div><strong>Jelajahi</strong><Link href="/shop">Marketplace</Link><a href="#fitur">Cara kerja AI</a><a href="#seller">Untuk seller</a></div>
          <div><strong>Dukungan</strong><a href="https://shop.nemu-ai.com/help">Pusat bantuan</a><a href="https://shop.nemu-ai.com/privacy">Privasi</a><a href="https://shop.nemu-ai.com/terms">Syarat</a></div>
          <div><strong>Ikuti kami</strong><a href="https://www.instagram.com/nemu_ai_/">Instagram</a><a href="https://www.tiktok.com/@nemu_ai_">TikTok</a><a href="mailto:hello@nemu-ai.com">Email</a></div>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 PT Nusa Era Modern Unggul</span><span>Dibuat untuk Indonesia 🇮🇩</span></div>
    </footer>
  );
}
