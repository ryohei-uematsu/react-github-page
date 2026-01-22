const footerSections = [
  {
    title: '会社情報',
    links: [
      { href: '#vision', label: 'ビジョン' },
      { href: '#projects', label: '実績' },
      { href: '#culture', label: '企業文化' },
      { href: '#', label: '会社概要' },
    ],
  },
  {
    title: 'サービス',
    links: [
      { href: '#', label: 'システム開発' },
      { href: '#', label: 'Web制作' },
      { href: '#', label: 'インフラ構築' },
      { href: '#', label: 'サポート業務' },
    ],
  },
  {
    title: 'お問い合わせ',
    links: [
      { href: 'tel:050-3852-7092', label: '050-3852-7092' },
      { href: 'mailto:info@highflat.jp', label: 'info@highflat.jp' },
      { href: '#', label: 'お問い合わせフォーム' },
    ],
  },
];

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="font-serif text-3xl font-bold mb-6 tracking-wide">
              HIGHFLAT
            </div>
            <p className="opacity-80 leading-relaxed">
              技術で未来を創る。
              <br />
              社員の幸せを第一に考え、革新的なソリューションを提供します。
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="md:text-left text-center">
              <h4 className="text-xl font-bold mb-6">{section.title}</h4>
              <ul className="list-none space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-12 border-t border-white/10 text-center opacity-60 text-sm">
          <p>&copy; 2025 HIGHFLAT Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
