import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Sparkles,
  Maximize2,
  Minimize2,
  Share2,
  Volume2,
  VolumeX,
  Search,
  Check,
  Star,
  Leaf,
  X,
  Info,
} from 'lucide-react';
import { MENU_BOOK_PAGES } from '../data/messyDoorData';

interface MenuBookProps {
  initialPage?: number;
}

export interface BookItem {
  name: string;
  price: string;
  description?: string;
  isMustTry?: boolean;
  tag?: string;
}

// Synthetic organic page-turn sound using Web Audio API (no external asset needed)
const playSyntheticPageTurnSound = () => {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    const bufferSize = Math.floor(ctx.sampleRate * 0.14); // 140ms
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      // Soft rustle noise with smooth exponential decay
      const envelope = Math.exp(-i / (bufferSize * 0.3));
      data[i] = (Math.random() * 2 - 1) * envelope;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, ctx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(400, ctx.currentTime + 0.12);
    filter.Q.setValueAtTime(1.2, ctx.currentTime);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.13);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    noise.start();
  } catch {
    // Audio context may be restricted by browser policy before user interaction
  }
};

export const MenuBook: React.FC<MenuBookProps> = ({ initialPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [flipDirection, setFlipDirection] = useState<'next' | 'prev'>('next');
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTagFilter, setSelectedTagFilter] = useState<'all' | 'mustTry' | 'veg'>('all');
  const [activeItemModal, setActiveItemModal] = useState<BookItem | null>(null);

  // 3D Parallax tilt state for physical desk feel
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const bookCardRef = useRef<HTMLDivElement>(null);

  const totalPages = MENU_BOOK_PAGES.length;
  const bookContainerRef = useRef<HTMLDivElement>(null);

  // Sync initialPage when passed from external category clicks
  useEffect(() => {
    if (initialPage >= 1 && initialPage <= totalPages) {
      setCurrentPage(initialPage);
    }
  }, [initialPage, totalPages]);

  const handleNext = () => {
    if (isFlipping || currentPage >= totalPages) return;
    if (soundEnabled) playSyntheticPageTurnSound();
    setFlipDirection('next');
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      setIsFlipping(false);
    }, 700);
  };

  const handlePrev = () => {
    if (isFlipping || currentPage <= 1) return;
    if (soundEnabled) playSyntheticPageTurnSound();
    setFlipDirection('prev');
    setIsFlipping(true);

    setTimeout(() => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      setIsFlipping(false);
    }, 700);
  };

  const handleJumpToPage = (pageNum: number) => {
    if (isFlipping || pageNum === currentPage) return;
    if (soundEnabled) playSyntheticPageTurnSound();
    setFlipDirection(pageNum > currentPage ? 'next' : 'prev');
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentPage(pageNum);
      setIsFlipping(false);
    }, 650);
  };

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage, isFlipping]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  // 3D Parallax Tilt Handler (desktop only)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bookCardRef.current || window.innerWidth < 1024) return;
    const rect = bookCardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      x: Number((y * -4).toFixed(2)),
      y: Number((x * 6).toFixed(2)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const pageData = MENU_BOOK_PAGES[currentPage - 1];

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  // Search Results across all pages for quick jump helper
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase().trim();
    const matches: { pageNum: number; item: BookItem; sectionHeading: string }[] = [];

    MENU_BOOK_PAGES.forEach((page) => {
      page.sections.forEach((sec) => {
        sec.items.forEach((item) => {
          if (
            item.name.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query) ||
            item.tag?.toLowerCase().includes(query)
          ) {
            matches.push({
              pageNum: page.pageNumber,
              item,
              sectionHeading: sec.heading,
            });
          }
        });
      });
    });
    return matches.slice(0, 6);
  }, [searchQuery]);

  // Tab definitions for gilded side index
  const gildedTabs = [
    { page: 1, label: 'Starters', sub: 'I' },
    { page: 2, label: 'Mains & Bowls', sub: 'II' },
    { page: 3, label: 'Pizza & Pasta', sub: 'III' },
    { page: 4, label: 'Coffee & Brews', sub: 'IV' },
    { page: 5, label: 'Mocktails', sub: 'V' },
    { page: 6, label: 'Patisserie', sub: 'VI' },
  ];

  return (
    <section
      id="menu"
      ref={bookContainerRef}
      className={`py-16 sm:py-24 transition-colors duration-500 relative ${
        isFullscreen
          ? 'fixed inset-0 z-50 bg-[#FAF7F2] overflow-y-auto p-4 sm:p-8'
          : 'bg-[#F5ECE1]/60'
      }`}
    >
      {/* Background paper texture & warm ambient rose glow */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-25" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#E8A5B8]/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FAF7F2] border border-[#E8A5B8]/40 mb-3 shadow-xs">
            <BookOpen className="w-3.5 h-3.5 text-[#B76E79]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#B76E79]">
              LUXURY CAFÉ FOLIO
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1E1E22] tracking-tight mb-2">
            The Messy Door Menu
          </h2>

          <p className="text-xs sm:text-sm text-[#736B6E] font-light max-w-xl mx-auto leading-relaxed">
            Experience our printed café menu rendered digitally with tactile 3D page turns, chef's recommendations, and artisanal handcrafted selections.
          </p>

          {/* Quick Search & Filter Toolbar */}
          <div className="mt-6 max-w-xl mx-auto flex flex-col sm:flex-row items-center gap-3">
            {/* Search Box */}
            <div className="relative w-full">
              <Search className="w-4 h-4 text-[#B76E79] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g. Lotus Biscoff, Churros, Matcha, Truffle)..."
                className="w-full pl-9 pr-8 py-2 text-xs rounded-full bg-white/90 border border-[#E8A5B8]/35 focus:outline-none focus:ring-2 focus:ring-[#B76E79]/40 focus:border-[#B76E79] text-[#1E1E22] placeholder:text-[#9A9194] shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Dietary / Highlight Filters */}
            <div className="flex items-center space-x-1.5 shrink-0">
              <button
                onClick={() => setSelectedTagFilter('all')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedTagFilter === 'all'
                    ? 'bg-[#B76E79] text-white shadow-xs'
                    : 'bg-white/80 text-[#736B6E] border border-[#E8A5B8]/30 hover:bg-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTagFilter(selectedTagFilter === 'mustTry' ? 'all' : 'mustTry')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center space-x-1 ${
                  selectedTagFilter === 'mustTry'
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-white/80 text-[#736B6E] border border-[#E8A5B8]/30 hover:bg-white'
                }`}
              >
                <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>Must Try</span>
              </button>
              <button
                onClick={() => setSelectedTagFilter(selectedTagFilter === 'veg' ? 'all' : 'veg')}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center space-x-1 ${
                  selectedTagFilter === 'veg'
                    ? 'bg-[#4E6646] text-white shadow-xs'
                    : 'bg-white/80 text-[#736B6E] border border-[#E8A5B8]/30 hover:bg-white'
                }`}
              >
                <Leaf className="w-3 h-3" />
                <span>Veg</span>
              </button>
            </div>
          </div>

          {/* Search Dropdown Results Preview */}
          {searchQuery.trim() && (
            <div className="mt-3 max-w-xl mx-auto bg-white rounded-xl border border-[#E8A5B8]/30 shadow-lg p-3 text-left animate-in fade-in zoom-in-95 duration-200">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#B76E79] mb-2 px-1">
                Found {searchResults.length} matching item{searchResults.length !== 1 ? 's' : ''}:
              </div>
              {searchResults.length === 0 ? (
                <p className="text-xs text-neutral-500 py-1 px-1">
                  No matching item found. Explore our pages below!
                </p>
              ) : (
                <div className="space-y-1.5">
                  {searchResults.map((match, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleJumpToPage(match.pageNum);
                        setSearchQuery('');
                      }}
                      className="w-full flex items-center justify-between text-xs p-2 rounded-lg hover:bg-[#FAF7F2] transition-colors border border-transparent hover:border-[#E8A5B8]/20 group text-left"
                    >
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-[#1E1E22] group-hover:text-[#B76E79]">
                          {match.item.name}
                        </span>
                        <span className="text-[10px] text-neutral-400">
                          in {match.sectionHeading}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-serif font-bold text-[#1E1E22]">
                          {match.item.price}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-[#E8A5B8]/20 text-[#B76E79] font-medium">
                          Page {match.pageNum} →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Gilded Edge Chapter Ribbon Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6">
            {gildedTabs.map((tab) => (
              <button
                key={tab.page}
                onClick={() => handleJumpToPage(tab.page)}
                className={`group relative px-3 sm:px-4 py-1.5 rounded-full text-xs transition-all duration-300 cursor-pointer flex items-center space-x-1.5 ${
                  currentPage === tab.page
                    ? 'bg-[#B76E79] text-white shadow-md font-semibold scale-105 border border-[#C5A059]/50'
                    : 'bg-white/80 hover:bg-white text-[#736B6E] border border-[#E8A5B8]/30 font-medium hover:border-[#B76E79]'
                }`}
              >
                <span className="text-[10px] opacity-75 font-serif font-bold">{tab.sub}.</span>
                <span>{tab.label}</span>
                {currentPage === tab.page && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FAF7F2] animate-pulse" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 3D BOOK DESK CONTAINER */}
        <div
          ref={bookCardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative max-w-5xl mx-auto select-none transition-transform duration-300 ease-out"
          style={{
            transform: `perspective(1800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* External Book Tools & Controls Bar */}
          <div className="flex items-center justify-between mb-3 px-2 sm:px-4 text-xs text-[#736B6E]">
            <div className="flex items-center space-x-2 font-medium">
              <span className="font-serif-luxury text-sm text-[#B76E79] font-bold">
                Folio {currentPage} of {totalPages}
              </span>
              <span className="hidden sm:inline text-[#E8A5B8]">•</span>
              <span className="hidden sm:inline text-xs italic text-[#736B6E]">
                Swipe, click corner or use arrows to turn pages
              </span>
            </div>

            <div className="flex items-center space-x-2">
              {/* Synthetic Page Audio Toggle */}
              <button
                onClick={() => setSoundEnabled(!soundEnabled)}
                className={`p-1.5 rounded-md border transition-colors flex items-center space-x-1 text-xs ${
                  soundEnabled
                    ? 'bg-white border-[#E8A5B8]/40 text-[#B76E79]'
                    : 'bg-white/60 border-neutral-200 text-neutral-400'
                }`}
                title={soundEnabled ? 'Page Turn Sound: ON' : 'Page Turn Sound: OFF'}
              >
                {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
              </button>

              <button
                onClick={handleShare}
                className="px-2.5 py-1 rounded-md bg-white border border-[#E8A5B8]/30 hover:bg-[#FAF7F2] transition-colors flex items-center space-x-1.5 text-xs"
                title="Copy menu link"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
              </button>

              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-1.5 rounded-md bg-white border border-[#E8A5B8]/30 hover:bg-[#FAF7F2] transition-colors"
                title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen Book View'}
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* THE PHYSICAL OPEN BOOK CONTAINER */}
          <div className="menu-book-perspective relative">
            {/* Book Spine Base Ambient Drop Shadow */}
            <div className="absolute -bottom-8 inset-x-10 h-14 bg-black/20 blur-2xl rounded-[50%] pointer-events-none transform scale-y-75" />

            {/* Hardcover Outer Leather Binding Frame */}
            <div className="relative bg-[#231A1E] p-2.5 sm:p-4 rounded-[22px] sm:rounded-[26px] menu-book-hardcover transition-all duration-300">
              {/* Gold Filigree Ornamental Corner Protectors */}
              <div className="absolute top-2 left-2 w-7 h-7 border-t-2 border-l-2 border-[#C5A059] rounded-tl-xl pointer-events-none opacity-80" />
              <div className="absolute top-2 right-2 w-7 h-7 border-t-2 border-r-2 border-[#C5A059] rounded-tr-xl pointer-events-none opacity-80" />
              <div className="absolute bottom-2 left-2 w-7 h-7 border-b-2 border-l-2 border-[#C5A059] rounded-bl-xl pointer-events-none opacity-80" />
              <div className="absolute bottom-2 right-2 w-7 h-7 border-b-2 border-r-2 border-[#C5A059] rounded-br-xl pointer-events-none opacity-80" />

              {/* Gold & Dusty Rose Decorative Inset Line */}
              <div className="absolute inset-1.5 sm:inset-2.5 border border-[#C5A059]/35 rounded-[18px] sm:rounded-[22px] pointer-events-none opacity-70" />

              {/* Silk Ribbon Bookmark (Velvet Rose Satin) */}
              <div className="hidden lg:block absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-24 bg-gradient-to-b from-[#8B3A4A] via-[#B76E79] to-[#983445] rounded-b-sm shadow-md z-40 pointer-events-none">
                <div className="absolute bottom-0 inset-x-0 h-2 bg-[#C5A059]/60" />
              </div>

              {/* Open Book Spread (Two-column layout on Desktop, single on Mobile) */}
              <div
                className={`relative bg-[#FFFDF9] rounded-[14px] sm:rounded-[18px] overflow-hidden border border-[#E8A5B8]/20 transition-all duration-700 ${
                  isFlipping
                    ? flipDirection === 'next'
                      ? 'animate-[pageCurlNext_0.75s_cubic-bezier(0.25,1,0.5,1)]'
                      : 'animate-[pageCurlPrev_0.75s_cubic-bezier(0.25,1,0.5,1)]'
                    : ''
                }`}
                style={{
                  boxShadow:
                    'inset 0 0 50px rgba(183, 110, 121, 0.06), 0 12px 35px rgba(0, 0, 0, 0.08)',
                }}
              >
                {/* Central Gutter/Spine Shadow Effect */}
                <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-14 menu-book-gutter z-30 pointer-events-none" />

                {/* Subtitle Paper Texture Overlay */}
                <div className="absolute inset-0 paper-texture pointer-events-none opacity-30 z-20" />

                {/* Specular Light Sweep Overlay during page turn */}
                {isFlipping && (
                  <div
                    className={`absolute inset-0 pointer-events-none z-35 bg-gradient-to-r from-transparent via-white/40 to-transparent ${
                      flipDirection === 'next' ? 'animate-page-sweep-next' : 'animate-page-sweep-prev'
                    }`}
                  />
                )}

                {/* Grid: Left Page (Photo & Story) + Right Page (Items & Pricing) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[580px] sm:min-h-[640px] relative z-10">
                  {/* LEFT PAGE / LEAF (Col 1-5 on desktop) */}
                  <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8A5B8]/20 bg-gradient-to-br from-[#FFFDF9] via-[#FAF7F2] to-[#F8F2EB] relative menu-page-shadow-left">
                    {/* Corner Floral Filigree Decor */}
                    <div className="absolute top-4 left-4 text-[#E8A5B8]/40 pointer-events-none select-none">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="6" cy="6" r="2" />
                        <circle cx="12" cy="4" r="1.5" />
                        <circle cx="4" cy="12" r="1.5" />
                      </svg>
                    </div>

                    <div>
                      {/* Page Brand Header */}
                      <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E8A5B8]/20">
                        <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#B76E79]">
                          The Messy Door Café
                        </span>
                        <span className="font-editorial italic text-xs text-[#736B6E]">
                          Mansarovar, Jaipur
                        </span>
                      </div>

                      {/* Page Title & Subtitle */}
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E1E22] tracking-tight mb-2 leading-tight">
                        {pageData.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#736B6E] font-light leading-relaxed mb-5">
                        {pageData.subtitle}
                      </p>

                      {/* Editorial Visual Feature on Left Page with interactive zoom preview */}
                      {pageData.image && (
                        <div
                          onClick={() => {
                            // Find an item from this page to show detail modal
                            const firstItem = pageData.sections[0]?.items[0];
                            if (firstItem) setActiveItemModal(firstItem);
                          }}
                          className="relative rounded-2xl overflow-hidden border border-[#E8A5B8]/30 shadow-md group my-2 cursor-pointer"
                        >
                          <img
                            src={pageData.image}
                            alt={pageData.title}
                            className="w-full h-44 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-75 group-hover:opacity-60 transition-opacity" />
                          {pageData.imageCaption && (
                            <div className="absolute bottom-3 left-3 right-3 text-left flex items-center justify-between">
                              <span className="text-[10px] font-medium uppercase tracking-wider text-[#FAF7F2] drop-shadow">
                                {pageData.imageCaption}
                              </span>
                              <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-light">
                                Tap to view
                              </span>
                            </div>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Script Accent & Left Page Footer */}
                    <div className="pt-4 border-t border-[#E8A5B8]/20 mt-4 flex items-center justify-between">
                      <span className="font-script text-xl sm:text-2xl text-[#B76E79]">
                        Freshly Prepared & Loved
                      </span>
                      <span className="font-editorial text-xs font-semibold text-[#8B6D74]">
                        Page {currentPage} of {totalPages}
                      </span>
                    </div>

                    {/* Left corner dog-ear button (Previous page hover preview) */}
                    {currentPage > 1 && (
                      <button
                        onClick={handlePrev}
                        disabled={isFlipping}
                        className="group absolute bottom-0 left-0 w-12 h-12 flex items-end justify-start p-1.5 focus:outline-none cursor-pointer"
                        title="Turn to previous page"
                      >
                        <div className="w-6 h-6 border-b-2 border-l-2 border-[#B76E79]/50 group-hover:border-[#B76E79] group-hover:scale-110 transition-transform origin-bottom-left" />
                      </button>
                    )}
                  </div>

                  {/* RIGHT PAGE / LEAF (Col 6-12 on desktop) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#FFFDF9] relative menu-page-shadow-right">
                    {/* Top Foliage Stamp */}
                    <div className="absolute top-4 right-4 text-[#E8A5B8]/40 pointer-events-none select-none">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="18" cy="6" r="2" />
                        <circle cx="12" cy="4" r="1.5" />
                        <circle cx="20" cy="12" r="1.5" />
                      </svg>
                    </div>

                    {/* Menu Sections & Menu Items */}
                    <div className="space-y-6 sm:space-y-7">
                      {pageData.sections.map((sec, secIdx) => (
                        <div key={secIdx} className="space-y-3">
                          {/* Section Divider & Heading */}
                          <div className="flex items-baseline justify-between border-b border-[#E8A5B8]/25 pb-1">
                            <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-[#1E1E22] tracking-wide flex items-center">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79] mr-2" />
                              {sec.heading}
                            </h4>
                            {sec.subheading && (
                              <span className="text-[11px] font-editorial italic text-[#8B6D74] hidden sm:inline">
                                {sec.subheading}
                              </span>
                            )}
                          </div>

                          {/* Items List with Filter Logic */}
                          <div className="space-y-2.5">
                            {sec.items
                              .filter((item) => {
                                if (selectedTagFilter === 'mustTry') return item.isMustTry;
                                if (selectedTagFilter === 'veg') return item.tag?.toLowerCase().includes('veg');
                                return true;
                              })
                              .map((item, itemIdx) => {
                                const isSearched =
                                  searchQuery &&
                                  item.name.toLowerCase().includes(searchQuery.toLowerCase().trim());

                                return (
                                  <div
                                    key={itemIdx}
                                    onClick={() => setActiveItemModal(item)}
                                    className={`group/item py-1.5 px-2.5 -mx-2.5 rounded-xl transition-all duration-200 cursor-pointer ${
                                      isSearched
                                        ? 'bg-[#E8A5B8]/20 ring-1 ring-[#B76E79]'
                                        : 'hover:bg-[#F8F2EB]'
                                    }`}
                                  >
                                    <div className="flex items-baseline justify-between">
                                      <div className="flex items-center space-x-2">
                                        <span className="text-xs sm:text-sm font-semibold text-[#221F20] group-hover/item:text-[#B76E79] transition-colors flex items-center">
                                          {item.name}
                                        </span>
                                        {item.isMustTry && (
                                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-[#E8A5B8]/25 text-[#B76E79] uppercase tracking-wider flex items-center space-x-0.5">
                                            <Star className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                                            <span>Must Try</span>
                                          </span>
                                        )}
                                        {item.tag && (
                                          <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-[#98A892]/20 text-[#4E6646] uppercase">
                                            {item.tag}
                                          </span>
                                        )}
                                      </div>

                                      {/* Price with elegant styling */}
                                      <span className="font-serif text-xs sm:text-sm font-bold text-[#1E1E22] shrink-0 ml-2 group-hover/item:text-[#B76E79] transition-colors">
                                        {item.price}
                                      </span>
                                    </div>

                                    {item.description && (
                                      <p className="text-[11px] sm:text-xs text-[#736B6E] font-light leading-relaxed mt-0.5 line-clamp-2">
                                        {item.description}
                                      </p>
                                    )}
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom Right Page Details */}
                    <div className="pt-4 border-t border-[#E8A5B8]/20 mt-6 flex items-center justify-between text-[11px] text-[#736B6E]">
                      <span className="font-editorial italic">
                        All prices are in INR • Taxes extra as applicable
                      </span>
                      <span className="font-serif-luxury font-semibold text-[#B76E79]">
                        The Messy Door
                      </span>
                    </div>

                    {/* Right corner interactive dog-ear page turn button */}
                    {currentPage < totalPages && (
                      <button
                        onClick={handleNext}
                        disabled={isFlipping}
                        className="group absolute bottom-0 right-0 w-14 h-14 flex items-end justify-end p-2 focus:outline-none cursor-pointer"
                        title="Turn to next page"
                      >
                        <div className="relative">
                          {/* Corner triangle fold simulation */}
                          <div className="w-7 h-7 bg-gradient-to-br from-[#E8A5B8]/30 to-[#B76E79]/40 rounded-tl-xl shadow-md border-t border-l border-white/60 transform group-hover:scale-125 transition-transform origin-bottom-right" />
                          <span className="absolute -top-6 right-0 text-[9px] font-semibold uppercase tracking-wider text-[#B76E79] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap bg-white/95 px-1.5 py-0.5 rounded shadow-xs border border-[#E8A5B8]/30">
                            Next Page ➔
                          </span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PHYSICAL BOOK TURNING BUTTONS */}
          <div className="flex items-center justify-between mt-6 px-2 sm:px-6">
            <button
              onClick={handlePrev}
              disabled={currentPage <= 1 || isFlipping}
              className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border transition-all duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                currentPage <= 1
                  ? 'border-neutral-300 text-neutral-300 cursor-not-allowed bg-transparent'
                  : 'border-[#B76E79] text-[#B76E79] bg-white hover:bg-[#B76E79] hover:text-white shadow-sm hover:shadow cursor-pointer'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Page</span>
            </button>

            {/* Visual Page Counter & Indicator dots */}
            <div className="flex items-center space-x-2">
              {MENU_BOOK_PAGES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleJumpToPage(i + 1)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentPage === i + 1
                      ? 'w-8 h-2.5 bg-[#B76E79] shadow-xs'
                      : 'w-2.5 h-2.5 bg-[#E8A5B8]/50 hover:bg-[#B76E79]/80'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage >= totalPages || isFlipping}
              className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border transition-all duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider ${
                currentPage >= totalPages
                  ? 'border-neutral-300 text-neutral-300 cursor-not-allowed bg-transparent'
                  : 'border-[#B76E79] text-[#B76E79] bg-white hover:bg-[#B76E79] hover:text-white shadow-sm hover:shadow cursor-pointer'
              }`}
            >
              <span>Next Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Item Tasting Card Modal */}
      {activeItemModal && (
        <div
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveItemModal(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#FFFDF9] rounded-2xl max-w-md w-full p-6 sm:p-7 border border-[#E8A5B8]/30 shadow-2xl relative animate-in zoom-in-95 duration-200"
          >
            <button
              onClick={() => setActiveItemModal(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-neutral-100 text-neutral-400 hover:text-neutral-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center space-x-2 mb-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[#B76E79]">
                Chef's Selection
              </span>
              {activeItemModal.isMustTry && (
                <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-[#E8A5B8]/30 text-[#B76E79] flex items-center space-x-1">
                  <Star className="w-2.5 h-2.5 fill-[#B76E79]" />
                  <span>Popular Signature</span>
                </span>
              )}
            </div>

            <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1E22] mb-1">
              {activeItemModal.name}
            </h3>

            <div className="font-serif text-xl font-bold text-[#B76E79] mb-3">
              {activeItemModal.price}
            </div>

            {activeItemModal.description && (
              <p className="text-sm text-[#736B6E] font-light leading-relaxed mb-4">
                {activeItemModal.description}
              </p>
            )}

            <div className="bg-[#FAF7F2] p-3 rounded-xl border border-[#E8A5B8]/20 flex items-start space-x-2.5 text-xs text-[#736B6E] mb-5">
              <Info className="w-4 h-4 text-[#B76E79] shrink-0 mt-0.5" />
              <span>
                Freshly prepared to order using quality ingredients. Customizations or dietary adjustments can be requested to your server.
              </span>
            </div>

            <button
              onClick={() => setActiveItemModal(null)}
              className="w-full py-2.5 rounded-full bg-[#B76E79] text-white hover:bg-[#9E5A66] transition-colors text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-sm"
            >
              Back to Menu
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
