import React from 'react';
import { X, Sparkles, Heart, Coffee, Users, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BUSINESS_INFO, MESSY_IMAGES } from '../data/messyDoorData';

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReserveClick: () => void;
}

export const StoryModal: React.FC<StoryModalProps> = ({
  isOpen,
  onClose,
  onReserveClick,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#221F20]/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-3xl border border-[#E8A5B8]/40 shadow-2xl overflow-hidden z-10 my-auto"
        >
          {/* Header Banner */}
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <img
              src={MESSY_IMAGES.seating}
              alt="The Messy Door Floral Corner"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-black/30 to-transparent" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-[#221F20] flex items-center justify-center shadow-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
                OUR HERITAGE & VISION
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#221F20]">
                A Café With a Story
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 space-y-5">
            <div className="pl-4 border-l-2 border-[#B76E79]">
              <p className="font-script text-2xl sm:text-3xl text-[#B76E79] leading-tight">
                “Good food, warm spaces and beautiful people coming together.”
              </p>
            </div>

            <p className="text-sm text-[#524B4E] leading-relaxed font-light">
              Founded with the belief that life is lived best amidst flowers, laughter, and warm cups of artisanal coffee, The Messy Door Café was born in Mansarovar, Jaipur. We envisioned a sanctuary where people could escape daily chaos and step through a doorway filled with lush blossoms, fairy lights, and unforgettable flavors.
            </p>

            <p className="text-sm text-[#524B4E] leading-relaxed font-light">
              From hand-kneaded Neapolitan-style dough and slow-steeped cold brews to molten churros and festive birthday feasts — every single detail is prepared with love and genuine hospitality. We are proudly LGBTQ+ friendly, pet-loving, and dedicated to being Mansarovar's most welcoming gathering space.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-2xl bg-white border border-[#E8A5B8]/30 text-center">
                <span className="font-serif-luxury font-bold text-lg text-[#B76E79] block">4.5 ★</span>
                <span className="text-[11px] text-[#736B6E]">1,997+ Reviews</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E8A5B8]/30 text-center">
                <span className="font-serif-luxury font-bold text-lg text-[#B76E79] block">Shipra Path</span>
                <span className="text-[11px] text-[#736B6E]">Mansarovar, Jaipur</span>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E8A5B8]/30 text-center">
                <span className="font-serif-luxury font-bold text-lg text-[#B76E79] block">Open Daily</span>
                <span className="text-[11px] text-[#736B6E]">Until 11 PM</span>
              </div>
            </div>

            <div className="pt-3 flex items-center justify-end space-x-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full border border-[#E8A5B8]/40 text-xs uppercase tracking-wider font-semibold text-[#524B4E] hover:bg-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onReserveClick();
                }}
                className="px-6 py-2.5 rounded-full bg-[#B76E79] hover:bg-[#9E5A66] text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-colors flex items-center space-x-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
