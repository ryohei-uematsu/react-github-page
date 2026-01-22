import { useState, useEffect } from 'react';
import office1 from '../assets/office1.jpg';
import office2 from '../assets/office2.jpg';
import office3 from '../assets/office3.jpg';
import office4 from '../assets/office4.jpg';

const images = [office1, office2, office3, office4];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5秒ごとに切り替え

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background Images with Fade */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}

      {/* Dark Overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient Overlay for warmth */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.4) 100%)
          `,
        }}
      />

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
