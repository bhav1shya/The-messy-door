import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Heart } from 'lucide-react';
import { REVIEWS_THEMES, BUSINESS_INFO } from '../data/messyDoorData';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll carousel every 5.5s with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS_THEMES.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_THEMES.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_THEMES.length) % REVIEWS_THEMES.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative rose glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#E8A5B8]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Rating Score Banner */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-1.5 px-4 py-1.5 rounded-full bg-white border border-[#E8A5B8]/40 shadow-xs mb-4">
            <div className="flex items-center text-amber-400 space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="font-serif-luxury font-bold text-sm text-[#1E1E22] ml-1.5">
              {BUSINESS_INFO.rating.score} ★
            </span>
            <span className="text-xs text-[#736B6E] font-medium">
              ({BUSINESS_INFO.rating.count} Google Verified Reviews)
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1E1E22] tracking-tight mb-3">
            Loved By Jaipur
          </h2>

          <p className="text-xs sm:text-sm text-[#736B6E] font-light">
            Genuine themes and reflections shared by thousands of guests who have walked through our messy door.
          </p>
        </div>

        {/* Testimonial Carousel Card */}
        <div
          className="max-w-3xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-[#E8A5B8]/30 shadow-[0_10px_35px_-5px_rgba(183,110,121,0.1)] transition-all duration-500">
            {/* Top Quote Icon */}
            <div className="flex items-center justify-between mb-6">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#F3C5D3]/25 text-[#B76E79]">
                Theme: {REVIEWS_THEMES[currentIndex].theme}
              </span>

              <div className="flex items-center space-x-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Review Highlight & Text */}
            <div className="min-h-[140px] flex flex-col justify-center">
              <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#1E1E22] mb-3 leading-snug">
                {REVIEWS_THEMES[currentIndex].highlight}
              </h3>

              <p className="text-sm sm:text-base text-[#666062] font-light leading-relaxed">
                {REVIEWS_THEMES[currentIndex].comment}
              </p>
            </div>

            {/* Review Meta Info */}
            <div className="pt-6 border-t border-[#E8A5B8]/20 mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#F4ECE1] border border-[#E8A5B8]/40 flex items-center justify-center font-serif font-bold text-[#B76E79]">
                  {REVIEWS_THEMES[currentIndex].theme.charAt(0)}
                </div>
                <div>
                  <span className="font-serif-luxury font-semibold text-sm text-[#1E1E22] block">
                    Verified Customer
                  </span>
                  <span className="text-[11px] text-[#736B6E]">
                    {REVIEWS_THEMES[currentIndex].visitType}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full border border-[#E8A5B8]/40 hover:bg-[#FAF7F2] text-[#B76E79] transition-colors cursor-pointer"
                  aria-label="Previous Review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full border border-[#E8A5B8]/40 hover:bg-[#FAF7F2] text-[#B76E79] transition-colors cursor-pointer"
                  aria-label="Next Review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {REVIEWS_THEMES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === i
                    ? 'w-6 h-2 bg-[#B76E79]'
                    : 'w-2 h-2 bg-[#E8A5B8]/40 hover:bg-[#B76E79]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
