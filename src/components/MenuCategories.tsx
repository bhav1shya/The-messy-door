import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { MENU_CATEGORIES_PREVIEW } from '../data/messyDoorData';
import { MenuCategoryId } from '../types';

interface MenuCategoriesProps {
  onSelectCategory: (categoryId: MenuCategoryId) => void;
  onOpenMenuBook: () => void;
}

export const MenuCategories: React.FC<MenuCategoriesProps> = ({
  onSelectCategory,
  onOpenMenuBook,
}) => {
  return (
    <section id="menu-categories" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative ambient rose blur */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FCEBF0]/70 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#F3C5D3]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCEBF0] border border-[#E8A5B8]/40 mb-3.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#B76E79]">
              OUR MENU
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#221F20] tracking-tight mb-3"
          >
            Flavours for Every Mood
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-[#666062] font-light max-w-xl mx-auto leading-relaxed"
          >
            From crispy loaded munchies and artisanal pizzas to velvety coffees, refreshing botanical drinks and melt-in-mouth churros.
          </motion.p>
        </div>

        {/* Horizontal Premium Food Cards (Desktop grid, Mobile horizontal swipe carousel) */}
        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible pb-6 sm:pb-0 scrollbar-none snap-x snap-mandatory">
          {MENU_CATEGORIES_PREVIEW.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              onClick={() => {
                onSelectCategory(category.id);
                onOpenMenuBook();
              }}
              className="flex-shrink-0 w-[270px] sm:w-auto snap-center group relative bg-white rounded-2xl overflow-hidden border border-[#E8A5B8]/30 shadow-[0_4px_20px_-4px_rgba(183,110,121,0.08)] hover:shadow-[0_16px_36px_-6px_rgba(183,110,121,0.22)] transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Zoom */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-[#FCEBF0]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent transition-opacity duration-300 group-hover:opacity-40" />

                {/* Tagline / Subtitle */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-medium tracking-wide text-white/95 drop-shadow-sm flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F3C5D3]" />
                    <span>{category.tagline}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-gradient-to-b from-white to-[#FAF7F2]">
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h3 className="font-serif-luxury text-xl font-bold text-[#221F20] group-hover:text-[#B76E79] transition-colors duration-200">
                      {category.name}
                    </h3>
                    <div className="w-8 h-8 rounded-full bg-[#FAF7F2] border border-[#E8A5B8]/40 flex items-center justify-center text-[#B76E79] group-hover:bg-[#B76E79] group-hover:text-white transition-all duration-300 shadow-2xs">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="text-xs text-[#736B6E] font-light line-clamp-2 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E8A5B8]/20 flex items-center justify-between text-[11px] text-[#B76E79] font-medium">
                  <span className="group-hover:text-[#9E5A66] transition-colors">View Dishes & Prices</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 font-semibold">
                    Open Book →
                  </span>
                </div>
              </div>

              {/* Subtle pink border glow on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#B76E79]/40 rounded-2xl pointer-events-none transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
