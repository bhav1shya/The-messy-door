import React from 'react';
import { Sparkles, Heart, Coffee, Users, ArrowRight } from 'lucide-react';
import { MESSY_IMAGES } from '../data/messyDoorData';

interface AboutSectionProps {
  onReserveClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Decorative floral elements */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-[#E8A5B8]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Overlapping Editorial Images */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Seating & Floral Ambience */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={MESSY_IMAGES.seating}
                  alt="The Messy Door Cafe Floral Ambiance"
                  className="w-full h-[400px] sm:h-[460px] object-cover"
                />
              </div>

              {/* Secondary Overlapping Image: Artisanal Coffee/Dessert */}
              <div className="absolute -bottom-8 -right-6 w-52 sm:w-60 rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src={MESSY_IMAGES.waffles}
                  alt="Delicious Café Treats"
                  className="w-full h-44 object-cover"
                />
                <div className="bg-white p-2.5 text-center">
                  <span className="font-script text-lg text-[#B76E79]">
                    Made with love in Jaipur
                  </span>
                </div>
              </div>

              {/* Decorative Floating Floral Petal */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-[#F3C5D3]/40 blur-sm pointer-events-none animate-petal-drift" />
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8A5B8]/20 border border-[#E8A5B8]/40 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
                OUR PHILOSOPHY
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1E1E22] tracking-tight mb-6">
              A Café With a Story
            </h2>

            {/* Hand-lettered decorative quote */}
            <div className="mb-6 pl-4 border-l-2 border-[#B76E79]">
              <span className="font-script text-3xl sm:text-4xl text-[#B76E79] block leading-tight">
                “Good Food, Good Company, Always”
              </span>
            </div>

            <p className="text-base sm:text-lg text-[#666062] font-light leading-relaxed mb-6">
              “The Messy Door Café is more than just a café — it’s a place where good food, warm spaces and beautiful people come together. Whether it’s a quick coffee, a long chat, or a celebration with friends — our doors are always open for you.”
            </p>

            <p className="text-sm text-[#736B6E] font-light leading-relaxed mb-8">
              Nestled in the heart of Mansarovar, Jaipur, every element of our space is curated to inspire delight — from the whimsical floral chandeliers to the comforting aroma of hand-pulled espresso and freshly baked golden churros.
            </p>

            {/* Feature Stat Pills */}
            <div className="grid grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-white border border-[#E8A5B8]/30 shadow-xs">
                <span className="font-serif-luxury text-2xl font-bold text-[#B76E79] block">
                  1,997+
                </span>
                <span className="text-xs text-[#736B6E]">Happy Guests Reviewed (4.5★)</span>
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#E8A5B8]/30 shadow-xs">
                <span className="font-serif-luxury text-2xl font-bold text-[#B76E79] block">
                  100%
                </span>
                <span className="text-xs text-[#736B6E]">Inclusive & Aesthetic Ambience</span>
              </div>
            </div>

            <button
              onClick={onReserveClick}
              className="inline-flex items-center space-x-2.5 px-7 py-3 rounded-full bg-[#1E1E22] text-white hover:bg-[#B76E79] transition-all duration-300 shadow-md hover:shadow-lg text-xs sm:text-sm font-semibold uppercase tracking-wider cursor-pointer group"
            >
              <span>Know Our Story & Visit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
