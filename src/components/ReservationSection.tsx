import React from 'react';
import { Calendar, Phone, Sparkles } from 'lucide-react';
import { BUSINESS_INFO, MESSY_IMAGES } from '../data/messyDoorData';

interface ReservationSectionProps {
  onReserveClick: () => void;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({ onReserveClick }) => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FCEBF0]/60 to-[#FAF7F2] text-[#221F20]">
      {/* Background Floral Ambiance Scrim */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <img
          src={MESSY_IMAGES.hero}
          alt="The Messy Door Interior Ambiance"
          className="w-full h-full object-cover object-center filter blur-xs"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#FAF7F2]/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#FCEBF0] border border-[#E8A5B8]/40 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
            RESERVATIONS & CELEBRATIONS
          </span>
        </div>

        <h2 className="font-serif-luxury text-4xl sm:text-6xl font-bold tracking-tight text-[#221F20] mb-3">
          Your Table Is Waiting
        </h2>

        <p className="font-script text-3xl sm:text-5xl text-[#B76E79] mb-5">
          Good food, pretty spaces and better company.
        </p>

        <p className="text-sm sm:text-base text-[#524B4E] font-light max-w-xl mx-auto leading-relaxed mb-10">
          Whether you’re planning a romantic coffee date, a weekend brunch reunion, or a birthday party beneath our floral chandeliers — let us save the perfect spot for you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onReserveClick}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#B76E79] hover:bg-[#9E5A66] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase shadow-[0_6px_25px_rgba(183,110,121,0.4)] hover:shadow-[0_8px_30px_rgba(183,110,121,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <Calendar className="w-4 h-4 mr-2.5" />
            <span>Reserve a Table</span>
          </button>

          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-white hover:bg-[#FCEBF0] text-[#221F20] border border-[#E8A5B8]/40 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm cursor-pointer"
          >
            <Phone className="w-4 h-4 mr-2.5 text-[#B76E79]" />
            <span>Call Now ({BUSINESS_INFO.phone})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
