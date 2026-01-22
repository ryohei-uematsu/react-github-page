const benefits = [
  {
    icon: '💰',
    title: '好待遇',
    description:
      '平均月収45万円、通勤手当・営業手当あり。スキルに応じた適正な評価を実施。',
  },
  {
    icon: '📅',
    title: '働きやすさ',
    description: '週休2日制（土日祝）、9:00〜18:00勤務。ワークライフバランスを重視。',
  },
  {
    icon: '🎯',
    title: '成長機会',
    description: '最新技術に触れる機会が豊富。自己成長とキャリアアップをサポート。',
  },
];

export const Recruitment = () => {
  return (
    <section id="recruitment" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-light text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-highlight">
        Recruitment
      </h2>
      <p className="text-lg text-text-light mb-16 mt-8">一緒に未来を創りませんか</p>

      <div className="max-w-[900px] mx-auto">
        <p className="text-lg md:text-xl leading-loose mb-12">
          HIGHFLATでは、システムエンジニア、フロントエンドエンジニア、Webデザイナーなど、
          <br className="hidden md:block" />
          様々なジャンルの人材を募集しています。
          <br className="hidden md:block" />
          あなたの持つスキルを活かし、やりたいことをしませんか?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white p-8 md:p-12 rounded-2xl shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-5xl mb-6">{benefit.icon}</div>
              <h3 className="text-xl md:text-2xl mb-4 text-primary font-bold">
                {benefit.title}
              </h3>
              <p className="text-text-light leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-block px-12 py-5 gradient-primary text-white font-bold rounded-full mt-12 transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
        >
          採用に応募する
        </a>
      </div>
    </section>
  );
};
