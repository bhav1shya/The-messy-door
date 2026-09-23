import React from 'react';
import { Sparkles, Utensils, Users, Camera } from 'lucide-react';
import { WHY_VISIT_REASONS } from '../data/messyDoorData';

export const FeaturesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#B76E79]" />;
      case 'Utensils':
        return <Utensils className="w-6 h-6 text-[#B76E79]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#B76E79]" />;
      case 'Camera':
        return <Camera className="w-6 h-6 text-[#B76E79]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#B76E79]" />;
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-[#F8F3ED] relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79] block mb-2">
            WHY VISIT US
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-[#1E1E22]">
            Crafted for Unforgettable Memories
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_VISIT_REASONS.map((reason) => (
            <div
              key={reason.id}
              className="bg-white p-7 rounded-2xl border border-[#E8A5B8]/25 shadow-sm hover:shadow-xl hover:border-[#B76E79]/40 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FAF7F2] border border-[#E8A5B8]/40 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {getIcon(reason.icon)}
              </div>

              <h3 className="font-serif-luxury text-xl font-bold text-[#1E1E22] group-hover:text-[#B76E79] transition-colors mb-2">
                {reason.title}
              </h3>

              <p className="text-xs sm:text-sm font-medium text-[#B76E79] mb-2">
                {reason.description}
              </p>

              <p className="text-xs text-[#736B6E] font-light leading-relaxed">
                {reason.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
