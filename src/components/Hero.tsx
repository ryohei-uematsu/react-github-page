export const Hero = () => {
  return (
    <section className="h-screen gradient-primary relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-float">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(161, 169, 120, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(125, 104, 83, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-[1200px] px-8 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight tracking-tight">
          技術で未来を創る
        </h1>
        <p className="text-lg md:text-2xl font-light mb-12 opacity-90 tracking-wide">
          社員の幸せを第一に、革新的なソリューションを提供します
        </p>
        <a
          href="#recruitment"
          className="inline-block px-12 py-5 bg-white text-primary font-bold rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl"
        >
          採用情報を見る
        </a>
      </div>
    </section>
  );
};
