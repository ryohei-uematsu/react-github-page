import { useState } from 'react';
import { PolicyModal } from './PolicyModal';

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
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [securityModalOpen, setSecurityModalOpen] = useState(false);

  return (
    <footer id="contact" className="bg-primary text-white py-20 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          {/* Logo & Description */}
          <div>
            <div className="font-serif text-3xl font-bold mb-6 tracking-wide">HIGHFLAT</div>
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

        {/* Policy Links & Copyright */}
        <div className="pt-12 border-t border-white/10 text-center text-sm">
          <div className="flex justify-center gap-6 mb-4">
            <button
              onClick={() => setPrivacyModalOpen(true)}
              className="text-white/80 hover:text-white transition-colors duration-300 underline-offset-4 hover:underline"
            >
              個人情報保護方針
            </button>
            <button
              onClick={() => setSecurityModalOpen(true)}
              className="text-white/80 hover:text-white transition-colors duration-300 underline-offset-4 hover:underline"
            >
              情報セキュリティ基本方針
            </button>
          </div>
          <p className="opacity-60">&copy; 2025 HIGHFLAT Inc. All Rights Reserved.</p>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <PolicyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
        title="個人情報保護方針"
      >
        <p className="mb-6">
          株式会社HIGHFLATは、個人情報保護の重要性を認識し、その適切な管理を行うことを重要な社会責務を考え、この責務を果たすため、次のプライバシー・ポリシーを定め、個人情報の保護に努めます。
        </p>

        <h3 className="text-lg font-bold text-primary mb-3">個人情報保護に対する当社の考え方</h3>
        <p className="mb-6">
          株式会社HIGHFLAT（以下、『当社』といいます。）は、個人情報保護の重要性を認識し、その適切な管理を行うことを重要な社会的責務と考え、個人情報の保護に努めます。
        </p>

        <h3 className="text-lg font-bold text-primary mb-3">個人情報の使用目的</h3>
        <p className="mb-6">
          お客様の個人情報は、お問い合わせに対しての返事を差し上げることを利用目的とし当社にて適切に管理させていただきます。お客様の個人情報をお客様の同意無しに業務委託先以外の第三者に開示・提供することはありません。（法令などにより開示を求められた場合を除く。）
        </p>

        <h3 className="text-lg font-bold text-primary mb-3">第三者への情報開示について</h3>
        <p>
          個人情報への不当アクセスまたは個人情報の紛失、破壊、改竄、漏洩などの危険に対して、技術面及び組織面において必要な安全対策を継続的に講じるように努めてます。
        </p>
      </PolicyModal>

      {/* Security Policy Modal */}
      <PolicyModal
        isOpen={securityModalOpen}
        onClose={() => setSecurityModalOpen(false)}
        title="情報セキュリティ基本方針"
      >
        <p className="mb-6">
          株式会社HIGHFLAT（以下、『当社』といいます。）
          <br />
          お客様からお預かりする個人情報を含む多くの情報資産を保護することは、経営上の最重要課題であると認識しています。よって、当社は以下のセキュリティ目的を設定し、この目的を達成するための諸施策を確実に実施します。
        </p>

        <ul className="space-y-4">
          <li className="flex gap-3">
            <span className="text-primary font-bold">１.</span>
            <span>お客様との契約及び法的または規制要求事項を尊重し遵守する。</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">２.</span>
            <span>情報セキュリティ事故を未然に防止する。</span>
          </li>
          <li className="flex gap-3">
            <span className="text-primary font-bold">３.</span>
            <span>万一情報セキュリティ事故が発生した場合、影響を最小限にする。</span>
          </li>
        </ul>

        <p className="mt-6 text-right">以上</p>
      </PolicyModal>
    </footer>
  );
};
