import React, { useState } from 'react';
import { Sparkles, Wine, GlassWater, ArrowRight } from 'lucide-react';
import { SIGNATURE_MOCKTAILS, MESSY_IMAGES } from '../data/messyDoorData';

export const MocktailSection: React.FC = () => {
  const [activeMocktailId, setActiveMocktailId] = useState(SIGNATURE_MOCKTAILS[0].id);

  const selectedMocktail =
    SIGNATURE_MOCKTAILS.find((m) => m.id === activeMocktailId) ||
    SIGNATURE_MOCKTAILS[0];

  return (
    <section id="mocktails" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative backdrop shapes */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-[#F3C5D3]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 -left-20 w-96 h-96 bg-[#98A892]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8A5B8]/20 border border-[#E8A5B8]/40 mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
                BOTANICAL INFUSIONS
              </span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1E1E22] tracking-tight">
              Signature Mocktails
            </h2>
          </div>

          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="font-script text-3xl sm:text-4xl text-[#B76E79] block">
              Made for good moods.
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-[#736B6E] font-medium">
              Hand-shaken & Botanically Steeped
            </span>
          </div>
        </div>

        {/* Large Editorial Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Signature Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-[#1C1C22]">
              <img
                src={MESSY_IMAGES.mocktails}
                alt="Signature Mocktails at The Messy Door"
                className="w-full h-[400px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Floating Active Drink Card Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8A5B8]/30 shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-1.5">
                  <h3 className="font-serif-luxury text-xl font-bold text-[#1E1E22]">
                    {selectedMocktail.name}
                  </h3>
                  <span className="font-serif text-base font-bold text-[#B76E79]">
                    {selectedMocktail.price}
                  </span>
                </div>

                <p className="text-xs text-[#736B6E] font-light leading-relaxed mb-3">
                  {selectedMocktail.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {selectedMocktail.notes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-[#F3C5D3]/30 text-[#8B4D58]"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle decorative flower petal */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#E8A5B8]/20 blur-md pointer-events-none animate-petal-drift" />
          </div>

          {/* Right Column: Interactive Mocktail Selector Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            {SIGNATURE_MOCKTAILS.map((item) => {
              const isActive = item.id === activeMocktailId;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveMocktailId(item.id)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'bg-white border-[#B76E79] shadow-[0_8px_25px_-5px_rgba(183,110,121,0.25)] translate-x-1.5'
                      : 'bg-white/60 border-[#E8A5B8]/25 hover:bg-white hover:border-[#E8A5B8] hover:shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3.5">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isActive
                            ? 'bg-[#B76E79] text-white shadow-sm'
                            : 'bg-[#FAF7F2] text-[#B76E79] border border-[#E8A5B8]/30'
                        }`}
                      >
                        <GlassWater className="w-5 h-5" />
                      </div>

                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-[#1E1E22]">
                            {item.name}
                          </h4>
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#B76E79] animate-pulse" />
                          )}
                        </div>
                        <span className="text-[11px] text-[#B76E79] font-medium tracking-wide">
                          {item.flavorProfile}
                        </span>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-serif text-sm sm:text-base font-bold text-[#1E1E22] block">
                        {item.price}
                      </span>
                      <span className="text-[10px] text-[#8B6D74] tracking-wider uppercase">
                        {isActive ? 'Selected' : 'Tap to View'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
