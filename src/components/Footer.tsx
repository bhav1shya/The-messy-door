import React from 'react';
import { Phone, MapPin, Clock, Heart, Sparkles, ArrowUp } from 'lucide-react';
import { BUSINESS_INFO } from '../data/messyDoorData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141416] text-[#FAF7F2] border-t border-[#E8A5B8]/20 relative overflow-hidden pt-16 pb-24 lg:pb-16">
      {/* Decorative rose ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#B76E79]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Col (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-[#E8A5B8]/40 flex items-center justify-center text-[#E8A5B8]">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2C13.5 4.5 16 6 18.5 6C18.5 8.5 17 11 14.5 12C17 13.5 18.5 16 18.5 18.5C16 18.5 13.5 17 12 14.5C10.5 17 8 18.5 5.5 18.5C5.5 16 7 13.5 9.5 12C7 11 5.5 8.5 5.5 6C8 6 10.5 4.5 12 2Z" />
                </svg>
              </div>

              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-wide text-white block">
                  The Messy Door
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-[#E8A5B8]">
                  Café • Mansarovar Jaipur
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-sm">
              A premium, feminine & romantic café in Jaipur crafting artisanal coffees, signature mocktails, gourmet pizzas and warm churros.
            </p>

            <span className="font-script text-2xl text-[#F3C5D3] block pt-1">
              Good food • Pretty spaces • Better company
            </span>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold uppercase tracking-wider text-[#E8A5B8]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-white/75 font-light">
              <li>
                <a href="#home" className="hover:text-[#F3C5D3] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F3C5D3] transition-colors">
                  Digital Menu Book
                </a>
              </li>
              <li>
                <a href="#mocktails" className="hover:text-[#F3C5D3] transition-colors">
                  Signature Mocktails
                </a>
              </li>
              <li>
                <a href="#coffee" className="hover:text-[#F3C5D3] transition-colors">
                  Artisanal Coffee
                </a>
              </li>
              <li>
                <a href="#desserts" className="hover:text-[#F3C5D3] transition-colors">
                  Luxury Desserts
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F3C5D3] transition-colors">
                  Gallery & Interiors
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#F3C5D3] transition-colors">
                  About Our Story
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F3C5D3] transition-colors">
                  Contact & Directions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold uppercase tracking-wider text-[#E8A5B8]">
              Contact & Visit
            </h4>

            <div className="space-y-3 text-xs text-white/75 font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#E8A5B8] shrink-0 mt-0.5" />
                <span>
                  Namokar Building, M-1-A, Raghu Vihar, Main 30, Shipra Path, Mansarovar, Jaipur, Rajasthan 302020
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#E8A5B8] shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-[#F3C5D3] hover:underline font-medium"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#E8A5B8] shrink-0" />
                <span>Open Monday – Sunday: until 11:00 PM</span>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-[#E8A5B8]/80 block font-medium">Dine-in • Takeaway • Private Celebrations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60">
          <div className="flex items-center space-x-1.5 mb-4 sm:mb-0">
            <span>© {new Date().getFullYear()} The Messy Door Cafe. All rights reserved.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-xs text-[#E8A5B8] hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
