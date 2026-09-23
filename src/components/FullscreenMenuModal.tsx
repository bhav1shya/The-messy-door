import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  BookOpen,
  Volume2,
  VolumeX,
  Search,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_BOOK_PAGES, MESSY_IMAGES, BUSINESS_INFO } from '../data/messyDoorData';
import { BookItem } from './MenuBook';

interface FullscreenMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

// Synthetic page turn sound with Web Audio API
const playPageTurnAudio = () => {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    if (ctx.state === 'suspended') ctx.resume();

    const duration = 0.16;
    const bufferSize = Math.floor(ctx.sampleRate * duration);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      const envelope = Math.exp(-i / (bufferSize * 0.28));
      data[i] = (Math.random() * 2 - 1) * envelope;
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1100, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(350, ctx.currentTime + 0.14);
    filter.Q.setValueAtTime(1.1, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.09, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
  } catch {
    // Web Audio may require initial gesture
  }
};

export const FullscreenMenuModal: React.FC<FullscreenMenuModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  // Book states: 'cover' (closed) or 'open' (spread)
  const [isBookOpen, setIsBookOpen] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalPages = MENU_BOOK_PAGES.length;

  useEffect(() => {
    if (initialPage >= 1 && initialPage <= totalPages) {
      setCurrentPage(initialPage);
    }
  }, [initialPage, totalPages]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNext = () => {
    if (isFlipping || currentPage >= totalPages) return;
    if (soundEnabled) playPageTurnAudio();
    setFlipDirection('next');
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      setIsFlipping(false);
    }, 750);
  };

  const handlePrev = () => {
    if (isFlipping || currentPage <= 1) return;
    if (soundEnabled) playPageTurnAudio();
    setFlipDirection('prev');
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      setIsFlipping(false);
    }, 750);
  };

  const handleJumpToPage = (pageNum: number) => {
    if (isFlipping || pageNum === currentPage) return;
    if (soundEnabled) playPageTurnAudio();
    setFlipDirection(pageNum > currentPage ? 'next' : 'prev');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(pageNum);
      setIsFlipping(false);
    }, 700);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentPage, isFlipping]);

  const handleClose = () => {
    // Smoothly close book cover before unmounting
    setIsBookOpen(false);
    setTimeout(() => {
      onClose();
      setIsBookOpen(true);
    }, 450);
  };

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEndX;
    if (distance > 50) handleNext();
    else if (distance < -50) handlePrev();
    setTouchStartX(null);
  };

  if (!isOpen) return null;

  const activePageData = MENU_BOOK_PAGES[currentPage - 1];
  // Calculate spread: for desktop we can show current page and its facing page
  // If currentPage is odd (1, 3, 5), facing is currentPage + 1
  // If currentPage is even (2, 4, 6), facing is currentPage - 1
  const isOdd = currentPage % 2 === 1;
  const leftPageNum = isOdd ? currentPage : currentPage - 1;
  const rightPageNum = isOdd ? Math.min(currentPage + 1, totalPages) : currentPage;

  const leftPageData = MENU_BOOK_PAGES[leftPageNum - 1];
  const rightPageData = MENU_BOOK_PAGES[rightPageNum - 1];

  const categoryRibbons = [
    { page: 1, label: 'Starters', sub: 'Munchies & Bites' },
    { page: 2, label: 'Chinese', sub: 'Bowls & Platters' },
    { page: 3, label: 'Pastas & Pizzas', sub: 'Italian Sizzlers' },
    { page: 4, label: 'Artisanal Coffee', sub: 'Matcha & Brews' },
    { page: 5, label: 'Mocktails', sub: 'Mojitos & Shakes' },
    { page: 6, label: 'Patisserie', sub: 'Cheesecake & Churros' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF7F2] select-none overflow-hidden">
      {/* Background paper texture & warm ambient rose glow */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#FCEBF0]/80 blur-[140px] rounded-full pointer-events-none" />

      {/* TOP BAR: Clean, elegant title + Search + Sound Toggle + Close Button */}
      <div className="relative z-30 px-4 sm:px-8 py-3.5 border-b border-[#E8A5B8]/30 bg-[#FAF7F2]/90 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-[#FCEBF0] border border-[#E8A5B8]/50 flex items-center justify-center text-[#B76E79]">
            <BookOpen className="w-4 h-4" />
          </div>
          <div>
            <h2 className="font-serif-luxury text-base sm:text-lg font-bold text-[#221F20] leading-none">
              The Messy Door Cafe
            </h2>
            <span className="text-[10px] tracking-[0.22em] uppercase font-semibold text-[#B76E79]">
              REAL DIGITAL MENU BOOK • FOLIO EDITION
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className="p-2 rounded-full border border-[#E8A5B8]/40 bg-white/70 text-[#736B6E] hover:text-[#B76E79] transition-colors cursor-pointer"
            title={soundEnabled ? 'Mute page rustle' : 'Enable page rustle'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <button
            onClick={handleClose}
            className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-[#221F20] hover:bg-[#B76E79] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Close Menu</span>
          </button>
        </div>
      </div>

      {/* CATEGORY RIBBON STRIP (Quick Jump Tabs) */}
      <div className="relative z-20 px-4 py-2 border-b border-[#E8A5B8]/20 bg-[#FFFDF9]/80 backdrop-blur-sm overflow-x-auto scrollbar-none flex items-center justify-start md:justify-center space-x-2 shrink-0">
        {categoryRibbons.map((ribbon) => {
          const isActive = currentPage === ribbon.page;
          return (
            <button
              key={ribbon.page}
              onClick={() => handleJumpToPage(ribbon.page)}
              className={`px-3.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                isActive
                  ? 'bg-[#B76E79] text-white shadow-xs'
                  : 'bg-white/80 text-[#524B4E] hover:bg-[#FCEBF0] hover:text-[#B76E79] border border-[#E8A5B8]/30'
              }`}
            >
              <span className="text-[10px] opacity-75">p.{ribbon.page}</span>
              <span>{ribbon.label}</span>
            </button>
          );
        })}
      </div>

      {/* MAIN 3D BOOK CONTAINER VIEWPORT */}
      <div
        className="flex-1 relative flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-hidden menu-book-perspective"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          {!isBookOpen ? (
            /* CLOSED HARDCOVER STATE */
            <motion.div
              key="closed-cover"
              initial={{ rotateY: -90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: -90, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="w-full max-w-md h-[540px] sm:h-[600px] rounded-3xl bg-[#542B35] border-4 border-[#C5A059]/50 shadow-[0_30px_70px_rgba(40,15,25,0.45)] p-8 flex flex-col justify-between items-center text-center relative overflow-hidden"
            >
              {/* Gold foil border embellishment */}
              <div className="absolute inset-4 border border-[#C5A059]/40 rounded-2xl pointer-events-none" />

              <div className="mt-8">
                <div className="w-16 h-16 rounded-full bg-[#FAF7F2]/10 border border-[#C5A059]/60 flex items-center justify-center mx-auto mb-4 text-[#F3C5D3]">
                  <BookOpen className="w-8 h-8" />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#C5A059] block">
                  MANSAROVAR • JAIPUR
                </span>
                <h3 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#FAF7F2] mt-2">
                  The Messy Door
                  <span className="block font-script font-normal text-[#F3C5D3] text-4xl sm:text-5xl">
                    Café
                  </span>
                </h3>
              </div>

              <div className="my-auto">
                <p className="font-script text-2xl text-[#FAF7F2]/90">
                  “Good Food, Pretty Spaces, Better Company”
                </p>
                <p className="text-xs text-[#FAF7F2]/70 font-light mt-2 max-w-xs">
                  Artisanal food, handcrafted coffees, botanical infusions and gourmet patisserie.
                </p>
              </div>

              <button
                onClick={() => {
                  if (soundEnabled) playPageTurnAudio();
                  setIsBookOpen(true);
                }}
                className="mb-6 px-8 py-3 rounded-full bg-[#C5A059] hover:bg-[#d6b168] text-[#1E1E22] font-semibold text-xs tracking-widest uppercase shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Open Menu Folio
              </button>
            </motion.div>
          ) : (
            /* OPEN HARDCOVER BOOK (Two-page spread on desktop, one readable page on mobile) */
            <div
              key="open-book"
              className="relative w-full max-w-5xl h-[85vh] max-h-[660px] flex items-center justify-center"
            >
              {/* Realistic Hardcover Base Chassis with Leather Rim & Shadow */}
              <div className="absolute inset-0 bg-[#542B35] rounded-3xl shadow-[0_30px_70px_-15px_rgba(40,15,25,0.4)] border-2 border-[#C5A059]/40 p-2.5 sm:p-4 transition-all duration-500">
                {/* Book Gutter Spine Shadow in Center */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-8 bg-gradient-to-r from-black/25 via-black/5 to-black/30 z-30 pointer-events-none hidden md:block" />

                {/* DESKTOP VIEW: Two Visible Pages Side-by-Side */}
                <div className="hidden md:grid grid-cols-2 w-full h-full rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8A5B8]/30 relative shadow-inner">
                  {/* LEFT PAGE (leftPageData) */}
                  <div
                    className={`p-6 sm:p-8 border-r border-[#E8A5B8]/25 bg-[#FFFDF9] flex flex-col justify-between overflow-y-auto relative menu-page-shadow-left ${
                      isFlipping && flipDirection === 'prev' ? 'animate-page-curl-prev' : ''
                    }`}
                  >
                    {/* Corner filigree */}
                    <div className="absolute top-3 left-3 text-[#E8A5B8]/35 pointer-events-none">
                      <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
                        <path d="M0,0 Q20,5 25,25 Q5,20 0,0 Z" />
                      </svg>
                    </div>

                    <div>
                      {/* Page Title & Subtitle */}
                      <div className="border-b border-[#E8A5B8]/30 pb-3 mb-5 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B76E79] block">
                          FOLIO PAGE {leftPageData.pageNumber}
                        </span>
                        <h3 className="font-serif-luxury text-2xl font-bold text-[#221F20]">
                          {leftPageData.title}
                        </h3>
                        <p className="text-xs text-[#736B6E] font-light mt-0.5">
                          {leftPageData.subtitle}
                        </p>
                      </div>

                      {/* Sections & Items */}
                      <div className="space-y-5">
                        {leftPageData.sections.map((section, sIdx) => (
                          <div key={sIdx}>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-serif-luxury text-sm font-bold text-[#B76E79] uppercase tracking-wider">
                                {section.heading}
                              </span>
                              {section.subheading && (
                                <span className="text-[10px] text-[#736B6E] font-light hidden sm:inline">
                                  — {section.subheading}
                                </span>
                              )}
                            </div>

                            <div className="space-y-2.5">
                              {section.items.map((item, iIdx) => (
                                <div
                                  key={iIdx}
                                  className="group/item flex flex-col border-b border-dashed border-[#E8A5B8]/20 pb-1.5"
                                >
                                  <div className="flex justify-between items-baseline">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-xs sm:text-sm font-semibold text-[#221F20] group-hover/item:text-[#B76E79] transition-colors">
                                        {item.name}
                                      </span>
                                      {item.isMustTry && (
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-1.5 py-0.5 rounded-sm">
                                          Must Try
                                        </span>
                                      )}
                                      {item.tag && !item.isMustTry && (
                                        <span className="text-[9px] font-medium text-[#B76E79] bg-[#FCEBF0] px-1.5 py-0.5 rounded-sm">
                                          {item.tag}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2 shrink-0 tabular-nums">
                                      {item.price}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <p className="text-[11px] text-[#736B6E] font-light line-clamp-1 mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Page Footer */}
                    <div className="pt-4 mt-4 border-t border-[#E8A5B8]/25 flex items-center justify-between text-[11px] text-[#736B6E]">
                      <span>The Messy Door • Mansarovar</span>
                      <span className="font-semibold text-[#B76E79]">
                        Page {leftPageData.pageNumber} / {totalPages}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT PAGE (rightPageData) */}
                  <div
                    className={`p-6 sm:p-8 bg-[#FAF7F2] flex flex-col justify-between overflow-y-auto relative menu-page-shadow-right ${
                      isFlipping && flipDirection === 'next' ? 'animate-page-curl-next' : ''
                    }`}
                  >
                    {/* Corner filigree */}
                    <div className="absolute top-3 right-3 text-[#E8A5B8]/35 pointer-events-none">
                      <svg width="28" height="28" viewBox="0 0 40 40" fill="currentColor">
                        <path d="M40,0 Q20,5 15,25 Q35,20 40,0 Z" />
                      </svg>
                    </div>

                    <div>
                      {/* Page Title & Subtitle */}
                      <div className="border-b border-[#E8A5B8]/30 pb-3 mb-5 text-center">
                        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B76E79] block">
                          FOLIO PAGE {rightPageData.pageNumber}
                        </span>
                        <h3 className="font-serif-luxury text-2xl font-bold text-[#221F20]">
                          {rightPageData.title}
                        </h3>
                        <p className="text-xs text-[#736B6E] font-light mt-0.5">
                          {rightPageData.subtitle}
                        </p>
                      </div>

                      {/* Sections & Items */}
                      <div className="space-y-5">
                        {rightPageData.sections.map((section, sIdx) => (
                          <div key={sIdx}>
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-serif-luxury text-sm font-bold text-[#B76E79] uppercase tracking-wider">
                                {section.heading}
                              </span>
                              {section.subheading && (
                                <span className="text-[10px] text-[#736B6E] font-light hidden sm:inline">
                                  — {section.subheading}
                                </span>
                              )}
                            </div>

                            <div className="space-y-2.5">
                              {section.items.map((item, iIdx) => (
                                <div
                                  key={iIdx}
                                  className="group/item flex flex-col border-b border-dashed border-[#E8A5B8]/20 pb-1.5"
                                >
                                  <div className="flex justify-between items-baseline">
                                    <div className="flex items-center space-x-2">
                                      <span className="text-xs sm:text-sm font-semibold text-[#221F20] group-hover/item:text-[#B76E79] transition-colors">
                                        {item.name}
                                      </span>
                                      {item.isMustTry && (
                                        <span className="text-[9px] font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-1.5 py-0.5 rounded-sm">
                                          Must Try
                                        </span>
                                      )}
                                      {item.tag && !item.isMustTry && (
                                        <span className="text-[9px] font-medium text-[#B76E79] bg-[#FCEBF0] px-1.5 py-0.5 rounded-sm">
                                          {item.tag}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2 shrink-0 tabular-nums">
                                      {item.price}
                                    </span>
                                  </div>
                                  {item.description && (
                                    <p className="text-[11px] text-[#736B6E] font-light line-clamp-1 mt-0.5">
                                      {item.description}
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Page Footer */}
                    <div className="pt-4 mt-4 border-t border-[#E8A5B8]/25 flex items-center justify-between text-[11px] text-[#736B6E]">
                      <span className="text-[#B76E79] font-medium">Click Next to flip folio →</span>
                      <span className="font-semibold text-[#B76E79]">
                        Page {rightPageData.pageNumber} / {totalPages}
                      </span>
                    </div>
                  </div>
                </div>

                {/* MOBILE VIEW: One Large Readable Page at a time */}
                <div className="md:hidden w-full h-full rounded-2xl overflow-y-auto bg-[#FFFDF9] border border-[#E8A5B8]/30 p-5 flex flex-col justify-between shadow-inner">
                  <div>
                    <div className="border-b border-[#E8A5B8]/30 pb-3 mb-4 text-center">
                      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#B76E79] block">
                        FOLIO PAGE {activePageData.pageNumber} OF {totalPages}
                      </span>
                      <h3 className="font-serif-luxury text-xl font-bold text-[#221F20]">
                        {activePageData.title}
                      </h3>
                      <p className="text-[11px] text-[#736B6E] font-light mt-0.5">
                        {activePageData.subtitle}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {activePageData.sections.map((section, sIdx) => (
                        <div key={sIdx}>
                          <span className="font-serif-luxury text-xs font-bold text-[#B76E79] uppercase tracking-wider block mb-2">
                            {section.heading}
                          </span>
                          <div className="space-y-2">
                            {section.items.map((item, iIdx) => (
                              <div
                                key={iIdx}
                                className="flex flex-col border-b border-dashed border-[#E8A5B8]/25 pb-1.5"
                              >
                                <div className="flex justify-between items-baseline">
                                  <span className="text-xs font-semibold text-[#221F20]">
                                    {item.name}
                                  </span>
                                  <span className="text-xs font-bold text-[#B76E79] ml-2 tabular-nums">
                                    {item.price}
                                  </span>
                                </div>
                                {item.description && (
                                  <p className="text-[10px] text-[#736B6E] font-light mt-0.5">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#E8A5B8]/25 flex items-center justify-between text-[10px] text-[#736B6E]">
                    <span>Swipe left/right to turn</span>
                    <span className="font-semibold text-[#B76E79]">
                      Page {activePageData.pageNumber} / {totalPages}
                    </span>
                  </div>
                </div>

                {/* Overlapping Food Photograph with natural shadow and 3D depth */}
                <div className="absolute -bottom-4 -right-2 sm:-right-4 w-32 sm:w-44 rounded-2xl overflow-hidden shadow-[0_16px_36px_rgba(0,0,0,0.28)] border-3 border-white z-40 transition-transform duration-500 hover:scale-105 pointer-events-none">
                  <img
                    src={activePageData.image}
                    alt={activePageData.imageCaption}
                    className="w-full h-24 sm:h-32 object-cover"
                  />
                  <div className="bg-white/95 px-2 py-1 text-center border-t border-[#E8A5B8]/20">
                    <span className="font-script text-xs text-[#B76E79] block truncate">
                      {activePageData.imageCaption}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* BOTTOM NAVIGATION BAR: ← Previous   Page X / 6   Next → */}
      <div className="relative z-30 px-6 py-3.5 border-t border-[#E8A5B8]/30 bg-[#FAF7F2]/95 backdrop-blur-md flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={currentPage <= 1 || isFlipping}
          className={`inline-flex items-center space-x-2 px-4 sm:px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            currentPage <= 1 || isFlipping
              ? 'opacity-40 cursor-not-allowed bg-neutral-200 text-neutral-500'
              : 'bg-white border border-[#E8A5B8]/40 text-[#221F20] hover:bg-[#FCEBF0] hover:border-[#B76E79] shadow-xs cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous</span>
        </button>

        {/* Page Counter & Direct Indicator */}
        <div className="flex items-center space-x-2">
          <span className="font-serif-luxury font-bold text-sm sm:text-base text-[#221F20]">
            Page {currentPage} of {totalPages}
          </span>
          <span className="hidden sm:inline text-xs text-[#736B6E]">
            ({activePageData.title})
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage >= totalPages || isFlipping}
          className={`inline-flex items-center space-x-2 px-4 sm:px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
            currentPage >= totalPages || isFlipping
              ? 'opacity-40 cursor-not-allowed bg-neutral-200 text-neutral-500'
              : 'bg-[#B76E79] hover:bg-[#9E5A66] text-white shadow-md cursor-pointer'
          }`}
        >
          <span>Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
