import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

const cultureItems = [
  {
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop',
    title: 'フラットな組織',
    description: '上下関係にとらわれず、自由に意見を交換できる風通しの良い職場です。',
  },
  {
    image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop',
    title: '充実した社内イベント',
    description: '花見、社員旅行、忘年会など、チームの絆を深めるイベントを定期開催。',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    title: '成長できる環境',
    description: '最新技術に触れながら、スキルアップできるプロジェクトに参加できます。',
  },
];

const CultureCard = ({ item, index }: { item: (typeof cultureItems)[0]; index: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="group relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <img
        src={item.image}
        alt={item.title}
        className={`w-full h-full object-cover transition-transform duration-600 ${
          isVisible ? 'scale-110' : 'scale-100'
        }`}
      />
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(10,22,40,0.9)] to-transparent p-8 md:p-10 text-white transition-transform duration-500 ${
          isVisible ? 'translate-y-0' : 'translate-y-[60%]'
        }`}
      >
        <h3 className="text-2xl md:text-3xl mb-3 font-bold">{item.title}</h3>
        <p
          className={`transition-all duration-400 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

export const Culture = () => {
  const { ref, isInView } = useInView();
  return (
    <section
      ref={ref}
      id="culture"
      className={`py-32 px-6 md:px-12 section-bg-scroll ${isInView ? 'in-view' : ''}`}
    >
      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-4 relative inline-block after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-20 after:h-1 after:bg-highlight">
          Culture
        </h2>
        <p className="text-lg text-text-light mb-16 mt-8">働きやすい環境づくり</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cultureItems.map((item, index) => (
            <CultureCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
