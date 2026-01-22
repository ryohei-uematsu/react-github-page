import { useState } from 'react';
import companyLogo from '../assets/companyname.png';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  const navLinks = [
    { href: '#vision', label: 'ビジョン' },
    { href: '#projects', label: '実績' },
    { href: '#culture', label: '企業文化' },
    { href: '#recruitment', label: '採用情報' },
    { href: '#company', label: '会社概要' },
    {
      href: 'https://docs.google.com/forms/d/e/1FAIpQLScpzWx-7777Ubaj3FVrbNV0I-v8uoaar3l8ZyGOGoDBr839CA/viewform?pli=1',
      label: 'お問い合わせ',
      external: true,
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm animate-slide-down transition-shadow duration-300">
        <nav className="max-w-[1400px] mx-auto px-6 min-[950px]:px-12 py-6 flex justify-between items-center">
          <a href="#" className="block">
            <img src={companyLogo} alt="HIGHFLAT" className="h-6 min-[950px]:h-8" />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden min-[950px]:flex gap-12 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-text-dark font-medium text-sm relative transition-colors duration-300 hover:text-highlight after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-highlight after:transition-all after:duration-300 hover:after:w-full"
                  {...(link.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="min-[950px]:hidden flex flex-col cursor-pointer z-[1001]"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            <span
              className={`w-7 h-0.5 bg-primary my-1 rounded transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''
              }`}
            />
            <span
              className={`w-7 h-0.5 bg-primary my-1 rounded transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-7 h-0.5 bg-primary my-1 rounded transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`min-[950px]:hidden fixed inset-0 bg-[rgba(10,22,40,0.98)] z-[999] pt-24 px-8 transition-all duration-400 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={(e) => e.target === e.currentTarget && closeMenu()}
      >
        <ul className="list-none text-center">
          {navLinks.map((link, index) => (
            <li
              key={link.href}
              className={`my-8 transition-all duration-400 ${
                isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
              style={{ transitionDelay: isMenuOpen ? `${(index + 1) * 0.1}s` : '0s' }}
            >
              <a
                href={link.href}
                className="text-white text-3xl font-bold transition-colors duration-300 hover:text-highlight"
                onClick={closeMenu}
                {...(link.external && {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                })}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
