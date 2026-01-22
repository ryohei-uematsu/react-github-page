const stats = [
  { number: '7', label: '創業年数' },
  { number: '20+', label: 'プロジェクト実績' },
  { number: '45万', label: '平均月収（円）' },
  { number: '100%', label: '社会保険完備' },
];

export const Stats = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-primary text-white text-center">
      <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block text-white after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-20 after:h-1 after:bg-white/50">
        Numbers
      </h2>
      <p className="text-lg text-white/80 mb-16 mt-8">数字で見るHIGHFLAT</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 mt-16">
        {stats.map((stat) => (
          <div key={stat.label} className="p-8">
            <div className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 text-gradient">
              {stat.number}
            </div>
            <div className="text-lg opacity-90 font-light">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
