const projects = [
  {
    tag: 'モバイル開発',
    title: 'スマホゲーム開発',
    description:
      '最新技術を活用した高品質なモバイルゲームの設計・開発を担当。ユーザー体験を重視したインターフェース設計により、高い評価を獲得。',
  },
  {
    tag: 'エンタープライズ',
    title: '大手百貨店向け物流システム',
    description:
      '複雑な物流プロセスを最適化するシステムの開発と保守。業務効率を大幅に改善し、運用コストの削減に貢献。',
  },
  {
    tag: 'IoT・先端技術',
    title: 'ドローン向けシステム開発',
    description:
      '次世代技術を活用したドローン制御システムの開発。リアルタイムデータ処理と安定した通信を実現。',
  },
  {
    tag: '教育・社会貢献',
    title: '教育系支援金システム',
    description:
      '教育機会の拡大を支援するシステムの保守開発。セキュアで使いやすいプラットフォームを提供。',
  },
  {
    tag: 'Web開発',
    title: 'アイドル向けファンサイト',
    description:
      '大規模トラフィックに対応したファンコミュニティサイトの開発・運用。高い可用性とユーザー満足度を実現。',
  },
  {
    tag: 'ディレクション',
    title: '有名サイトディレクション',
    description:
      '大規模Webサイトのディレクション業務とフロントエンド開発。プロジェクト管理からUI実装まで幅広く対応。',
  },
];

import { useInView } from '../hooks/useInView';

export const Projects = () => {
  const { ref, isInView } = useInView();
  return (
    <section
      ref={ref}
      id="projects"
      className={`py-32 px-6 md:px-12 section-bg-scroll ${isInView ? 'in-view' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-20 after:h-1 after:bg-highlight">
          Projects
        </h2>
        <p className="text-lg text-text-light mb-16 mt-8">確かな実績と技術力</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-md transition-all duration-400 relative hover:-translate-y-3 hover:shadow-xl before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:gradient-primary before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100"
            >
              <div className="p-8 md:p-10">
                <span className="inline-block px-4 py-2 gradient-secondary text-primary text-sm font-semibold rounded-full mb-6">
                  {project.tag}
                </span>
                <h3 className="text-xl md:text-2xl mb-4 text-primary font-bold">{project.title}</h3>
                <p className="text-text-light leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
