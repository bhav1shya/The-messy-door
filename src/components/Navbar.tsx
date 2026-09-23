import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO } from '../data/messyDoorData';

interface NavbarProps {
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onReserveClick, onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', isMenu: false },
    { label: 'Menu', href: '#menu', isMenu: true },
    { label: 'Gallery', href: '#gallery', isMenu: false },
    { label: 'About', href: '#about', isMenu: false },
    { label: 'Contact', href: '#contact', isMenu: false },
  ];

  const handleNavClick = (link: { label: string; href: string; isMenu: boolean }) => {
    setIsMobileMenuOpen(false);
    if (link.isMenu) {
      onMenuClick();
      return;
    }
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md py-3.5 shadow-[0_4px_20px_-4px_rgba(183,110,121,0.12)] border-b border-[#E8A5B8]/30'
          : 'bg-[#FAF7F2]/50 backdrop-blur-[6px] py-4 sm:py-5 border-b border-white/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* LEFT: The Messy Door / CAFÉ • MANSAROVAR */}
          <a
            href="#home"
            className="flex items-center space-x-3 group cursor-pointer select-none"
          >
            {/* Elegant Floral Brand Monogram */}
            <div className="w-9 h-9 rounded-full bg-white/80 border border-[#E8A5B8]/60 flex items-center justify-center text-[#B76E79] shadow-xs group-hover:bg-[#FCEBF0] group-hover:scale-105 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 text-[#B76E79] group-hover:rotate-45 transition-transform duration-500"
              >
                <path d="M12 2C13.5 4.5 16 6 18.5 6C18.5 8.5 17 11 14.5 12C17 13.5 18.5 16 18.5 18.5C16 18.5 13.5 17 12 14.5C10.5 17 8 18.5 5.5 18.5C5.5 16 7 13.5 9.5 12C7 11 5.5 8.5 5.5 6C8 6 10.5 4.5 12 2Z" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
              </svg>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif-luxury text-lg sm:text-xl font-bold tracking-tight text-[#221F20] leading-none group-hover:text-[#B76E79] transition-colors">
                The Messy Door
              </span>
              <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#B76E79] mt-1">
                CAFÉ • MANSAROVAR
              </span>
            </div>
          </a>

          {/* CENTER: Clean editorial nav links with subtle hover underlines */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium tracking-wide text-[#2D2727] hover:text-[#B76E79] transition-colors relative py-1 group select-none cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B76E79] group-hover:w-full transition-all duration-300 rounded-full" />
              </button>
            ))}
          </nav>

          {/* RIGHT: Reserve a Table */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="p-2.5 rounded-full bg-white/70 border border-[#E8A5B8]/40 text-[#B76E79] hover:bg-[#FCEBF0] hover:border-[#B76E79] transition-all duration-300 shadow-xs"
              title={`Call ${BUSINESS_INFO.phone}`}
            >
              <Phone className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onReserveClick}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#B76E79] hover:bg-[#9E5A66] rounded-full shadow-[0_4px_16px_-2px_rgba(183,110,121,0.45)] hover:shadow-[0_6px_22px_-2px_rgba(183,110,121,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 mr-2" />
              <span>Reserve a Table</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-white/80 border border-[#E8A5B8]/40 text-[#221F20] hover:text-[#B76E79] transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF7F2]/98 backdrop-blur-xl border-b border-[#E8A5B8]/30 shadow-xl px-6 py-5 overflow-hidden"
          >
            <div className="flex flex-col space-y-3.5">
              <div className="pb-2.5 border-b border-[#E8A5B8]/20 flex items-center justify-between text-xs">
                <span className="uppercase tracking-widest text-[#B76E79] font-semibold">
                  Navigation
                </span>
                <span className="text-[#6F8367] flex items-center font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  Open until 11 PM
                </span>
              </div>

              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link)}
                  className="text-left py-1 text-base font-serif-luxury font-medium text-[#221F20] hover:text-[#B76E79] flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#B76E79]">→</span>
                </button>
              ))}

              <div className="pt-3 border-t border-[#E8A5B8]/20 flex flex-col space-y-2.5">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onReserveClick();
                  }}
                  className="w-full py-3 rounded-full bg-[#B76E79] text-white font-medium text-xs tracking-wider uppercase shadow-md flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Reserve a Table</span>
                </button>

                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="w-full py-2.5 rounded-full border border-[#B76E79]/30 text-[#B76E79] font-medium text-xs tracking-wider uppercase flex items-center justify-center space-x-2 bg-white/60"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call {BUSINESS_INFO.phone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
