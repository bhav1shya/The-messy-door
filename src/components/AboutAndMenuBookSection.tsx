import React, { useState } from 'react';
import { Sparkles, BookOpen, Star, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO, MESSY_IMAGES, MENU_BOOK_PAGES } from '../data/messyDoorData';
import { StoryModal } from './StoryModal';

interface AboutAndMenuBookSectionProps {
  onOpenMenuBook: () => void;
  onReserveClick: () => void;
}

export const AboutAndMenuBookSection: React.FC<AboutAndMenuBookSectionProps> = ({
  onOpenMenuBook,
  onReserveClick,
}) => {
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);

  // Use page 1 data for open menu book display
  const previewPageLeft = MENU_BOOK_PAGES[0];
  const previewPageRight = MENU_BOOK_PAGES[1];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle ambient light and floral glow */}
      <div className="absolute top-1/3 -left-20 w-96 h-96 bg-[#FCEBF0]/80 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-96 h-96 bg-[#E8A5B8]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* LEFT SIDE: A Café With a Story + Stats */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCEBF0] border border-[#E8A5B8]/40 mb-3.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
                OUR STORY
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#221F20] tracking-tight mb-5 leading-tight"
            >
              A Café
              <span className="block font-script font-normal text-[#B76E79] text-4xl sm:text-6xl mt-0.5">
                With a Story
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#524B4E] font-light leading-relaxed mb-6"
            >
              The Messy Door Café is more than just a café — it's a place where
              good food, warm spaces and beautiful people come together.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              onClick={() => setIsStoryModalOpen(true)}
              className="inline-flex items-center space-x-2.5 px-6 py-3 rounded-full bg-[#221F20] text-white hover:bg-[#B76E79] transition-all duration-300 shadow-md text-xs sm:text-sm font-semibold tracking-wider uppercase mb-8 cursor-pointer group"
            >
              <span>Know Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Small Stats: 4.5 ★ 1,997+ Reviews | ₹200-1,200 Per Person | Mansarovar Jaipur */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 sm:gap-4 w-full pt-6 border-t border-[#E8A5B8]/25"
            >
              <div>
                <div className="flex items-center text-amber-500 mb-0.5">
                  <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#221F20]">
                    4.5 ★
                  </span>
                </div>
                <span className="text-[11px] sm:text-xs text-[#736B6E] font-medium leading-tight block">
                  1,997+ Reviews
                </span>
              </div>

              <div>
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#B76E79] block mb-0.5">
                  100%
                </span>
                <span className="text-[11px] sm:text-xs text-[#736B6E] font-medium leading-tight block">
                  Pure Veg & Fresh
                </span>
              </div>

              <div>
                <span className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#221F20] block mb-0.5">
                  Mansarovar
                </span>
                <span className="text-[11px] sm:text-xs text-[#736B6E] font-medium leading-tight block">
                  Jaipur, Rajasthan
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: THE DIGITAL OPEN RESTAURANT MENU BOOK */}
          <div className="lg:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              onClick={onOpenMenuBook}
              className="relative cursor-pointer group select-none"
              title="Click to open full-screen 3D interactive menu book"
            >
              {/* Floating Action Badge on top of Book */}
              <div className="absolute -top-4 right-4 sm:right-8 z-30 inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#B76E79] text-white text-xs font-semibold uppercase tracking-wider shadow-lg group-hover:scale-105 transition-transform">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Open Interactive Menu Book</span>
              </div>

              {/* Realistic Hardcover Book Structure */}
              <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-[#6A3944] shadow-[0_24px_60px_-15px_rgba(70,30,45,0.32)] border border-[#C5A059]/30 transition-all duration-500 group-hover:shadow-[0_32px_75px_-12px_rgba(183,110,121,0.4)] group-hover:-translate-y-1">
                {/* Book Gutter / Spine Spine Line */}
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-6 bg-gradient-to-r from-black/20 via-black/5 to-black/25 z-20 pointer-events-none hidden sm:block" />

                {/* Two Open Pages Spread Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 rounded-xl sm:rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#E8A5B8]/30 relative">
                  {/* Page 1 (Left Page) */}
                  <div className="p-5 sm:p-6 sm:border-r border-[#E8A5B8]/25 relative bg-[#FFFDF9] flex flex-col justify-between min-h-[360px] sm:min-h-[440px]">
                    {/* Corner Floral Filigree Decoration */}
                    <div className="absolute top-2 left-2 text-[#E8A5B8]/30 pointer-events-none">
                      <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
                        <path d="M0,0 Q20,5 25,25 Q5,20 0,0 Z" />
                      </svg>
                    </div>

                    <div>
                      <div className="border-b border-[#E8A5B8]/30 pb-2.5 mb-4 text-center">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B76E79] block">
                          FOLIO PAGE I
                        </span>
                        <h4 className="font-serif-luxury text-xl font-bold text-[#221F20]">
                          Munchies & Starters
                        </h4>
                      </div>

                      {/* Items List */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Truffle Parmesan Fries
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹240
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Loaded Mexican Nachos
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹290
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Smoked Paneer Tikka Panini
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹260
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Kurkure Crispy Momos
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹230
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#E8A5B8]/25 flex items-center justify-between text-[10px] text-[#736B6E]">
                      <span>The Messy Door Cafe</span>
                      <span className="font-semibold text-[#B76E79]">Page 1 / 6</span>
                    </div>
                  </div>

                  {/* Page 2 (Right Page) */}
                  <div className="p-5 sm:p-6 relative bg-[#FAF7F2] flex flex-col justify-between min-h-[360px] sm:min-h-[440px]">
                    {/* Corner Floral Filigree Decoration */}
                    <div className="absolute top-2 right-2 text-[#E8A5B8]/30 pointer-events-none">
                      <svg width="32" height="32" viewBox="0 0 40 40" fill="currentColor">
                        <path d="M40,0 Q20,5 15,25 Q35,20 40,0 Z" />
                      </svg>
                    </div>

                    <div>
                      <div className="border-b border-[#E8A5B8]/30 pb-2.5 mb-4 text-center">
                        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B76E79] block">
                          FOLIO PAGE II
                        </span>
                        <h4 className="font-serif-luxury text-xl font-bold text-[#221F20]">
                          Chinese & Wok Bowls
                        </h4>
                      </div>

                      {/* Items List */}
                      <div className="space-y-3">
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Honey Chilli Lotus Stem
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹290
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Classic Paneer Chilli Dry
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹280
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Veg Hakka Spring Noodles
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹240
                          </span>
                        </div>
                        <div className="flex justify-between items-baseline border-b border-dashed border-[#E8A5B8]/25 pb-1">
                          <span className="text-xs sm:text-sm font-semibold text-[#221F20]">
                            Messy Door Mezze Platter
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-[#B76E79] ml-2">
                            ₹420
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom Prompt inside book */}
                    <div className="pt-4 border-t border-[#E8A5B8]/25 flex items-center justify-between text-[10px] text-[#736B6E]">
                      <span className="text-[#B76E79] font-medium group-hover:underline">
                        Turn page or expand folio →
                      </span>
                      <span className="font-semibold text-[#B76E79]">Page 2 / 6</span>
                    </div>
                  </div>
                </div>

                {/* Overlapping Food Photograph with 3D shadow */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 w-36 sm:w-44 rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.22)] border-3 border-white z-30 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                  <img
                    src={MESSY_IMAGES.pastaPizza}
                    alt="Artisan Pizza & Truffle Pasta"
                    className="w-full h-28 sm:h-32 object-cover"
                  />
                  <div className="bg-white/95 px-2 py-1 text-center border-t border-[#E8A5B8]/20">
                    <span className="font-script text-xs sm:text-sm text-[#B76E79] block">
                      Artisan Hand-tossed
                    </span>
                  </div>
                </div>

                {/* Secondary Overlapping Drink/Dessert item */}
                <div className="absolute -top-4 -left-3 sm:-left-5 w-24 sm:w-28 rounded-xl overflow-hidden shadow-lg border-2 border-white z-30 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-2 hidden sm:block">
                  <img
                    src={MESSY_IMAGES.hotCoffee}
                    alt="Rose Cardamom Latte"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
        onReserveClick={onReserveClick}
      />
    </section>
  );
};
