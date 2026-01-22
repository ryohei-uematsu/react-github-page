export const Vision = () => {
  const visionPoints = [
    'フラットな組織文化',
    '働きやすい環境の提供',
    '成長とチャレンジの機会',
    'ワークライフバランスの尊重',
    '社員とその家族の幸せ',
  ];

  return (
    <section id="vision" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto gradient-secondary">
      <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-20 after:h-1 after:bg-highlight">
        Vision
      </h2>
      <p className="text-lg text-text-light mb-16 mt-8">
        私たちが大切にしていること
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-lg md:text-xl leading-loose text-text-dark space-y-4">
          <p>
            世の中が変化している中で、会社という組織のあり方も変化が必要と考えています。
          </p>
          <p>
            <strong className="text-highlight font-bold">
              強いるのではなく、社員の働きやすい環境を提供する。
            </strong>
          </p>
          <p>
            上も下もなく、自由、希望、夢を与え、社員とその家族が幸せになる会社でありたいと思います。
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <h3 className="text-2xl md:text-3xl mb-6 text-primary font-bold">
            HIGHFLATの約束
          </h3>
          <ul className="list-none space-y-1">
            {visionPoints.map((point) => (
              <li
                key={point}
                className="py-4 pl-8 relative text-lg before:content-['✓'] before:absolute before:left-0 before:text-highlight before:font-black before:text-xl"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
