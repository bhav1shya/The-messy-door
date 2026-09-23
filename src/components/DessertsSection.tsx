import React, { useState } from 'react';
import { Sparkles, Cake, Heart, Flame } from 'lucide-react';
import { LUXURY_DESSERTS, MESSY_IMAGES } from '../data/messyDoorData';

export const DessertsSection: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Cheesecake' | 'Churros' | 'Brownie' | 'Signature'>('All');

  const filteredDesserts =
    filter === 'All'
      ? LUXURY_DESSERTS
      : LUXURY_DESSERTS.filter((d) => d.category === filter);

  return (
    <section id="desserts" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative rose ambient background */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#E8A5B8]/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#F3C5D3]/25 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8A5B8]/25 border border-[#E8A5B8]/40 mb-3.5">
            <Cake className="w-3.5 h-3.5 text-[#B76E79]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
              PATISSERIE & SWEET CRAFTS
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1E1E22] tracking-tight mb-3">
            Luxury Dessert Showcase
          </h2>

          <p className="text-sm sm:text-base text-[#736B6E] font-light leading-relaxed">
            From oven-warm Spanish churros with melted Nutella to our signature San Sebastián Basque burnt cheesecake and sizzling cast-iron brownies.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {(['All', 'Churros', 'Cheesecake', 'Brownie', 'Signature'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  filter === cat
                    ? 'bg-[#B76E79] text-white shadow-sm'
                    : 'bg-white text-[#736B6E] hover:bg-[#F4ECE1] border border-[#E8A5B8]/30'
                }`}
              >
                {cat === 'All' ? 'All Delights' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Spotlight Dessert + Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Spotlight Hero Card (5 Cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#E8A5B8]/30 bg-white relative">
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                  src={MESSY_IMAGES.desserts}
                  alt="Spanish Churros and Basque Cheesecake"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-[#B76E79] uppercase tracking-wider shadow">
                  ★ Chef Signature
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif-luxury text-2xl font-bold text-[#1E1E22]">
                    Nutella Stuffed Churros Platter
                  </h3>
                  <span className="font-serif text-xl font-bold text-[#B76E79]">₹310</span>
                </div>
                <p className="text-xs sm:text-sm text-[#736B6E] font-light leading-relaxed mb-4">
                  Warm, crispy ridged Spanish churros fried golden upon order, rolled in fine cinnamon crystal sugar and accompanied by a warm bowl of rich Nutella & strawberry garnish.
                </p>
                <div className="flex items-center space-x-2 text-xs text-[#B76E79] font-medium">
                  <Flame className="w-3.5 h-3.5" />
                  <span>Served piping hot from our pastry kitchen</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid of Dessert Cards (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredDesserts.map((dessert) => (
              <div
                key={dessert.id}
                className="p-5 rounded-2xl bg-white border border-[#E8A5B8]/25 shadow-sm hover:shadow-md hover:border-[#B76E79]/50 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-[#B76E79] bg-[#F3C5D3]/30 px-2 py-0.5 rounded-full">
                      {dessert.category}
                    </span>
                    <span className="font-serif text-base font-bold text-[#1E1E22]">
                      {dessert.price}
                    </span>
                  </div>

                  <h4 className="font-serif-luxury text-base font-bold text-[#1E1E22] group-hover:text-[#B76E79] transition-colors mb-1.5">
                    {dessert.name}
                  </h4>

                  <p className="text-xs text-[#736B6E] font-light leading-relaxed line-clamp-2">
                    {dessert.description}
                  </p>
                </div>

                {dessert.tag && (
                  <div className="mt-3 pt-2.5 border-t border-[#E8A5B8]/15 flex items-center justify-between text-[11px] text-[#B76E79]">
                    <span>★ {dessert.tag}</span>
                    <span className="text-[10px] text-[#736B6E]">Fresh Daily</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
