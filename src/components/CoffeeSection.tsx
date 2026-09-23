import React, { useState } from 'react';
import { Coffee, Leaf } from 'lucide-react';
import { COFFEE_SPECIALTIES, MESSY_IMAGES } from '../data/messyDoorData';

export const CoffeeSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Hot' | 'Cold Brew' | 'Matcha' | 'Crème'>('All');

  const filteredItems =
    activeTab === 'All'
      ? COFFEE_SPECIALTIES
      : COFFEE_SPECIALTIES.filter((c) => c.type === activeTab);

  return (
    <section id="coffee" className="py-20 sm:py-28 bg-[#FFFDF9] text-[#221F20] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#FCEBF0]/70 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#8FA382]/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCEBF0] border border-[#E8A5B8]/40 mb-3.5">
            <Coffee className="w-3.5 h-3.5 text-[#B76E79]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
              ROASTERY & BARISTA BAR
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#221F20] tracking-tight mb-4">
            Coffee, Crafted Beautifully
          </h2>

          <p className="text-sm sm:text-base text-[#524B4E] font-light leading-relaxed">
            100% shade-grown Arabica estate beans, pulled into silky espresso, paired with delicate floral infusions and Japanese ceremonial matcha.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Hot', 'Cold Brew', 'Matcha', 'Crème'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? 'bg-[#B76E79] text-white shadow-md'
                    : 'bg-white text-[#524B4E] hover:bg-[#FCEBF0] hover:text-[#B76E79] border border-[#E8A5B8]/30 shadow-2xs'
                }`}
              >
                {tab === 'All' ? 'All Creations' : tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dual Layout: Feature Photography with Steam Animation + Coffee Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Hot Coffee Image with Realistic Rising Steam Animation */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
              <img
                src={MESSY_IMAGES.hotCoffee}
                alt="Artisanal Hot Coffee with Latte Art at The Messy Door"
                className="w-full h-[420px] sm:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

              {/* STEAM ANIMATIONS OVER CUP */}
              <div className="absolute top-[28%] left-[48%] -translate-x-1/2 pointer-events-none flex space-x-1.5 opacity-85">
                <div className="w-2.5 h-12 bg-gradient-to-t from-white/60 via-white/30 to-transparent blur-[3px] rounded-full animate-steam-1" />
                <div className="w-3 h-14 bg-gradient-to-t from-white/70 via-white/35 to-transparent blur-[3px] rounded-full animate-steam-2" />
                <div className="w-2 h-10 bg-gradient-to-t from-white/50 via-white/20 to-transparent blur-[2px] rounded-full animate-steam-3" />
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#E8A5B8]/30 shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-serif-luxury text-lg font-bold text-[#221F20] block">
                      Damask Rose Latte
                    </span>
                    <span className="text-xs text-[#B76E79] font-medium">
                      Infused with organic rose petals
                    </span>
                  </div>
                  <span className="font-serif text-lg font-bold text-[#B76E79]">₹220</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 space-y-3.5">
            {filteredItems.map((coffee) => (
              <div
                key={coffee.id}
                className="p-5 rounded-2xl bg-white border border-[#E8A5B8]/30 hover:border-[#B76E79]/50 hover:shadow-md transition-all duration-300 group shadow-2xs"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2.5">
                      <h4 className="font-serif-luxury text-lg sm:text-xl font-bold text-[#221F20] group-hover:text-[#B76E79] transition-colors">
                        {coffee.name}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] uppercase font-semibold bg-[#FCEBF0] text-[#B76E79]">
                        {coffee.type}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#666062] font-light leading-relaxed">
                      {coffee.notes}
                    </p>

                    {coffee.accent && (
                      <span className="inline-block text-[11px] font-editorial italic text-[#B76E79]">
                        {coffee.accent}
                      </span>
                    )}
                  </div>

                  <div className="text-right shrink-0 ml-4">
                    <span className="font-serif text-base sm:text-lg font-bold text-[#221F20]">
                      {coffee.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}

            {/* Pour-Over / Milk note */}
            <div className="p-4 rounded-xl bg-[#FCEBF0]/50 border border-[#E8A5B8]/40 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Leaf className="w-5 h-5 text-[#8FA382]" />
                <span className="text-xs text-[#524B4E]">
                  Custom milk alternatives available: Oat milk & Almond milk on request.
                </span>
              </div>
              <span className="text-xs text-[#B76E79] font-semibold hidden sm:inline">+₹40</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
