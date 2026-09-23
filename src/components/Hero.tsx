import React from 'react';
import { ArrowRight, Calendar, Clock, MapPin, Phone, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { BUSINESS_INFO, MESSY_IMAGES } from '../data/messyDoorData';

interface HeroProps {
  onExploreMenuClick: () => void;
  onReserveClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreMenuClick,
  onReserveClick,
}) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 pb-8 sm:pt-32 sm:pb-12 overflow-hidden bg-[#FAF7F2]"
    >
      {/* Background: Actual Café Interior with Pink Floral Ambience - High clarity, saturated and vivid */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.img
          initial={{ scale: 1.03 }}
          animate={{ scale: 1 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          src={MESSY_IMAGES.hero}
          alt="The Messy Door Cafe Interior with Pink Floral Ambience"
          className="w-full h-full object-cover object-[62%_center] lg:object-[68%_center] filter brightness-[1.04] contrast-[1.10] saturate-[1.35]"
          loading="eager"
        />

        {/* Minimal, transparent ambient gradients: leaves the colorful cafe interior completely clear & vibrant */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/15 z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#FAF7F2]/50 via-[#FAF7F2]/20 to-transparent z-10 pointer-events-none" />

        {/* Subtle Swaying Floral Sprigs (Top-Right overlay) */}
        <motion.div
          animate={{ rotate: [-1.5, 1.5, -1.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-6 right-8 sm:right-24 z-20 pointer-events-none hidden md:block opacity-65"
        >
          <svg width="220" height="150" viewBox="0 0 220 150" fill="none">
            <path
              d="M200 0 C 170 35, 120 40, 70 80 C 40 105, 15 130, 0 145"
              stroke="#8FA382"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Blossom clusters */}
            <circle cx="160" cy="38" r="9" fill="#F3C5D3" />
            <circle cx="160" cy="38" r="4" fill="#B76E79" />
            <circle cx="120" cy="55" r="11" fill="#F7D6DE" />
            <circle cx="120" cy="55" r="5" fill="#E8A5B8" />
            <circle cx="75" cy="85" r="10" fill="#F3C5D3" />
            <circle cx="75" cy="85" r="4" fill="#B76E79" />
            <circle cx="35" cy="118" r="8" fill="#F7D6DE" />
            <circle cx="35" cy="118" r="3.5" fill="#E8A5B8" />
          </svg>
        </motion.div>

        {/* Hanging Warm Lights with Subtle Warm Pulse */}
        <div className="absolute top-0 right-1/4 sm:right-1/3 z-20 pointer-events-none hidden lg:flex space-x-12">
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-20 bg-gradient-to-b from-[#221F20]/30 to-[#C5A059]" />
            <motion.div
              animate={{ opacity: [0.75, 1, 0.75], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-4 h-6 rounded-full bg-amber-100 border border-amber-300 shadow-[0_0_24px_6px_rgba(245,158,11,0.35)]"
            />
          </div>
          <div className="flex flex-col items-center pt-6">
            <div className="w-[1px] h-28 bg-gradient-to-b from-[#221F20]/30 to-[#C5A059]" />
            <motion.div
              animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.08, 1] }}
              transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="w-4 h-6 rounded-full bg-amber-100 border border-amber-300 shadow-[0_0_26px_8px_rgba(245,158,11,0.38)]"
            />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT SIDE: Heading & Description & Actions - Integrated directly into background, NO BOX */}
          <div className="lg:col-span-8 flex flex-col items-start text-left pt-4 sm:pt-6 max-w-2xl">
            {/* Tagline / Kicker */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-3.5 flex flex-wrap items-center gap-3"
            >
              <span className="text-xs sm:text-[13px] font-semibold tracking-[0.24em] uppercase text-[#B76E79]">
                GOOD FOOD • PRETTY SPACES • BETTER COMPANY
              </span>
              <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-white/80 backdrop-blur-xs border border-[#E8A5B8]/40 text-[11px] font-bold text-[#B76E79]">
                <span>★ 4.5</span>
                <span className="text-[#736B6E] font-normal">(1,997+ reviews)</span>
              </span>
            </motion.div>

            {/* Large Heading - Seamlessly on background */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-4"
            >
              <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#221F20] leading-[1.05]">
                The Messy Door
                <span className="block font-script font-normal text-[#B76E79] text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-1 tracking-normal">
                  Café
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl text-[#4A4346] max-w-xl font-light leading-relaxed mb-8"
            >
              A cozy café in Mansarovar, Jaipur serving delicious food, refreshing beverages and memorable moments beneath floral ceilings.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-8 w-full sm:w-auto"
            >
              <button
                onClick={onExploreMenuClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#221F20] hover:bg-[#B76E79] rounded-full shadow-[0_4px_16px_rgba(34,31,32,0.18)] hover:shadow-[0_6px_22px_rgba(183,110,121,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer group"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onReserveClick}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-white bg-[#B76E79] hover:bg-[#9E5A66] rounded-full shadow-[0_4px_18px_rgba(183,110,121,0.35)] hover:shadow-[0_6px_24px_rgba(183,110,121,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Calendar className="w-4 h-4 mr-2.5" />
                <span>Reserve a Table</span>
              </button>
            </motion.div>

            {/* Feature Highlights (Clean unboxed metadata with separators) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-[#524B4E] font-medium"
            >
              <span className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                <span>Aesthetic Ambience</span>
              </span>
              <span className="text-[#B76E79]/40 font-bold">·</span>
              <span className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                <span>LGBTQ+ Friendly</span>
              </span>
              <span className="text-[#B76E79]/40 font-bold">·</span>
              <span className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                <span>Celebrations & Groups</span>
              </span>
              <span className="text-[#B76E79]/40 font-bold">·</span>
              <span className="flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B76E79]" />
                <span>Prime Location</span>
              </span>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Open space showcasing the clear, colorful floral cafe interior photo */}
          <div className="lg:col-span-4 hidden lg:block pointer-events-none" />
        </div>
      </div>

      {/* Bottom Information Bar (Clean translucent/light information strip) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8 sm:mt-12"
      >
        <div className="bg-white/85 backdrop-blur-xl border border-[#E8A5B8]/35 rounded-2xl p-4 sm:p-5 shadow-[0_8px_30px_-6px_rgba(183,110,121,0.12)]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#E8A5B8]/20 text-xs sm:text-sm">
            {/* Status & Hours */}
            <div className="flex items-center space-x-3 pt-2 sm:pt-0">
              <div className="w-9 h-9 rounded-xl bg-[#FCEBF0] border border-[#E8A5B8]/40 flex items-center justify-center text-[#B76E79] shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#736B6E] font-semibold">
                  STATUS & HOURS
                </span>
                <span className="font-semibold text-[#221F20] flex items-center text-xs sm:text-sm mt-0.5 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse" />
                  OPEN NOW • CLOSES 11 PM
                </span>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:pl-6">
              <div className="w-9 h-9 rounded-xl bg-[#FCEBF0] border border-[#E8A5B8]/40 flex items-center justify-center text-[#B76E79] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#736B6E] font-semibold">
                  LOCATION
                </span>
                <span className="font-semibold text-[#221F20] text-xs sm:text-sm truncate block max-w-xs mt-0.5 whitespace-nowrap">
                  SHIPRA PATH, MANSAROVAR
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3 pt-3 sm:pt-0 sm:pl-6">
              <div className="w-9 h-9 rounded-xl bg-[#FCEBF0] border border-[#E8A5B8]/40 flex items-center justify-center text-[#B76E79] shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-wider text-[#736B6E] font-semibold">
                  CALL FOR TABLE
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-semibold text-[#B76E79] hover:underline block text-xs sm:text-sm mt-0.5 whitespace-nowrap"
                >
                  093510 57718
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
