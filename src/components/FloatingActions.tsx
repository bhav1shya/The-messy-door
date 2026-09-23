import React from 'react';
import { Phone, BookOpen, Calendar } from 'lucide-react';
import { BUSINESS_INFO } from '../data/messyDoorData';

interface FloatingActionsProps {
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onReserveClick,
  onMenuClick,
}) => {
  return (
    <aside aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-[#FAF7F2]/95 backdrop-blur-lg border-t border-[#E8A5B8]/30 px-4 py-2.5 shadow-[0_-4px_20px_rgba(183,110,121,0.12)]">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E8A5B8]/30 text-[#736B6E] hover:text-[#B76E79] active:bg-[#F4ECE1] transition-colors"
        >
          <Phone className="w-4 h-4 text-[#B76E79] mb-1" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            Call
          </span>
        </a>

        {/* Menu button */}
        <button
          onClick={onMenuClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-white border border-[#E8A5B8]/30 text-[#736B6E] hover:text-[#B76E79] active:bg-[#F4ECE1] transition-colors cursor-pointer"
        >
          <BookOpen className="w-4 h-4 text-[#B76E79] mb-1" />
          <span className="text-[11px] font-semibold uppercase tracking-wider">
            Menu
          </span>
        </button>

        {/* Reserve button */}
        <button
          onClick={onReserveClick}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#B76E79] text-white shadow-md active:bg-[#9E5A66] transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">
            Reserve
          </span>
        </button>
      </div>
    </aside>
  );
};
