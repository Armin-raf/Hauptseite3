import React, { useState, useRef, useEffect } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('DE');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Lösungen', id: 'solutions' },
    { name: 'Ansatz', id: 'mission' },
    { name: 'Branchen', id: 'sectors' },
    { name: 'Sicherheit', id: 'security' },
    { name: 'Ablauf', id: 'process' }
  ];

  const languages = [
    { code: 'DE', name: 'Deutsch' },
    { code: 'EN', name: 'English' },
    { code: 'FR', name: 'Français' },
    { code: 'ES', name: 'Español' },
    { code: 'IT', name: 'Italiano' }
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className={`material-symbols-outlined !text-3xl text-primary`}>smart_toy</span>
          <h2 className={`text-2xl font-extrabold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            Blue Process
          </h2>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-semibold transition-colors ${
                isScrolled 
                  ? 'text-slate-600 hover:text-primary' 
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Language Selector */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all text-xs font-bold ${
                isScrolled 
                  ? 'border-slate-200 text-slate-700 hover:bg-slate-50' 
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
            >
              <span className="material-symbols-outlined !text-sm">language</span>
              {selectedLang}
              <span className={`material-symbols-outlined !text-xs transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}>expand_more</span>
            </button>

            {isLangOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 animate-in fade-in zoom-in-95 duration-200 overflow-hidden">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setSelectedLang(lang.code);
                      setIsLangOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors ${
                      selectedLang === lang.code 
                        ? 'bg-blue-50 text-primary' 
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {lang.name}
                    {selectedLang === lang.code && (
                      <span className="material-symbols-outlined !text-sm">check</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a 
            href="#contact" 
            className={`hidden sm:block bg-primary text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-blue-600 transition-all shadow-lg ${
              isScrolled ? 'shadow-primary/20' : 'shadow-none'
            }`}
          >
            Erstgespräch buchen
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;