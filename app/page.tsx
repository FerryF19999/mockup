import { Footer, Header, MobileDock } from './components';
import { SectionTransitions } from './experience';
import { WhatnotMarketplaceIntro } from './whatnot-marketplace-intro';
import { faqItems, WhatnotSellerJourney } from './whatnot-seller-journey';

const baseUrl = 'https://nemu-ai-redesign.openclawid6.chatgpt.site';

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'OnlineStore'],
      '@id': `${baseUrl}/#organization`,
      name: 'NEMU AI',
      url: `${baseUrl}/`,
      logo: `${baseUrl}/favicon.svg`,
      description: 'Marketplace Indonesia untuk mencari produk dan membuka toko online dengan bantuan AI, pembayaran DOKU, serta 30+ pilihan kurir.',
      areaServed: 'Indonesia',
      sameAs: ['https://nemu-ai.com/', 'https://shop.nemu-ai.com/'],
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: `${baseUrl}/`,
      name: 'NEMU AI',
      publisher: { '@id': `${baseUrl}/#organization` },
      inLanguage: 'id-ID',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/shop?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Service',
      name: 'Layanan seller NEMU Marketplace',
      provider: { '@id': `${baseUrl}/#organization` },
      areaServed: 'Indonesia',
      audience: { '@type': 'BusinessAudience', audienceType: 'Seller, UMKM, dan brand lokal' },
      description: 'Seller mendapat website toko, bantuan listing, AI foto dan video, studio posting, pembayaran DOKU, promo gratis ongkir, serta 30+ pilihan kurir.',
      offers: {
        '@type': 'Offer',
        price: '199000',
        priceCurrency: 'IDR',
        description: 'Gratis sampai penjualan pertama, lalu Rp199.000 per bulan.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqItems.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main className="home-page overflow-hidden bg-white text-[#17121f]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header landing />
      <MobileDock />
      <SectionTransitions variant="cinematic" />
      <WhatnotMarketplaceIntro />
      <WhatnotSellerJourney />
      <Footer />
    </main>
  );
}
