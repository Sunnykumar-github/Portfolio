import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Initialize theme
  useEffect(() => {
    if (document.documentElement.classList.contains('light')) {
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    document.documentElement.classList.toggle('light');
  };

  const navLinks = [
    { label: 'HOME', href: '#home', id: 'home' },
    { label: 'ABOUT ME', href: '#about', id: 'about' },
    { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { label: 'SKILLS', href: '#skills', id: 'skills' },
    { label: 'EDUCATION', href: '#education', id: 'education' },
    { label: 'PROJECTS', href: '#projects', id: 'projects' },
    { label: 'LEADERSHIP', href: '#leadership', id: 'leadership' },
    // { label: 'CERTIFICATIONS', href: '#certifications', id: 'certifications' },
    { label: 'ACHIEVEMENTS', href: '#achievements', id: 'achievements' },
    { label: 'WHY HIRE ME', href: '#whyhireme', id: 'whyhireme' },
    { label: 'TESTIMONIALS', href: '#testimonials', id: 'testimonials' },
    { label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-surface/70 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_1px_16px_rgba(0,0,0,0.3)]'
          : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="h-[56px] max-w-[1440px] mx-auto px-5 flex items-center justify-between gap-4">
          {/* Logo only — ultra-thin border that blends with background */}
          <div className="shrink-0 cursor-pointer">
            <img
              alt="Logo"
              className="h-7 w-7 object-cover rounded-full"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYnMkrLThq4R7ghTnr85mUTY3pRlsI3oN4md-d00PeDV8nsaOOUabfyTuacXTopb-UeWrmVULoKOJ_C9Vo_xWkrOsi1VcS0_xB6-zobuVzZq1wj7-weYVaABGGT5FzlAUZzjTZQNF3GbMijoP0Vg-IrNzJKHjwI3Ohoktr1oIJKcfYP1W1GyeKw26XY2M0qULtSAbJm9OqPy6dEKfhd2znY48QR2zkea6ue4n44XTsOm1sjYBOKbe9jwOxqRSnOGKBjA"
            />
          </div>

          {/* Nav — hidden on mobile, center flex on large screens */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-0 flex-nowrap">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                className={`relative whitespace-nowrap px-[9px] py-1.5 text-[9px] font-bold tracking-[0.07em] transition-colors duration-200 rounded leading-none
                  ${activeSection === link.id
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                  }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            ))}
          </nav>

          {/* Controls: Theme Switcher Toggle & Mobile Hamburger */}
          <div className="shrink-0 flex items-center justify-end gap-3">
            <button
              onClick={toggleTheme}
              className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest border border-white/5 transition-all duration-300"
              aria-label="Toggle Theme"
            >
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-500 absolute
                ${isDarkMode ? 'text-primary opacity-100 rotate-0 scale-100' : 'text-on-surface-variant opacity-0 -rotate-90 scale-50'}`}
              >
                dark_mode
              </span>
              <span className={`material-symbols-outlined text-[18px] transition-transform duration-500 absolute
                ${isDarkMode ? 'text-on-surface-variant opacity-0 rotate-90 scale-50' : 'text-amber-400 opacity-100 rotate-0 scale-100'}`}
              >
                light_mode
              </span>
            </button>

            {/* Hamburger Button (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-highest border border-white/5 transition-all duration-300"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-[56px] left-0 w-full bg-surface-container/95 backdrop-blur-2xl border-b border-white/5 flex flex-col py-6 px-4 lg:hidden shadow-2xl animate-fade-in-down z-40 max-h-[calc(100vh-56px)] overflow-y-auto">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`py-4 text-center text-xs font-bold tracking-[0.1em] transition-colors duration-200 border-b border-white/5 last:border-b-0
                  ${activeSection === link.id
                    ? 'text-primary'
                    : 'text-on-surface-variant hover:text-on-surface'
                  }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
