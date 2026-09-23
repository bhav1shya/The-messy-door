import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Phone, Sparkles, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/messyDoorData';
import { ReservationFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: '2 People',
    specialRequest: '',
  });

  const [seatingPreference, setSeatingPreference] = useState('Floral Canopy');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [confirmationCode, setConfirmationCode] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = 'TMD-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(randomCode);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const handleWhatsAppConfirm = () => {
    const text = encodeURIComponent(
      `Hello The Messy Door Cafe! I would like to confirm my table reservation (Booking Ref: ${confirmationCode}) for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests}. Preference: ${seatingPreference}. Notes: ${formData.specialRequest || 'None'}`
    );
    window.open(`https://wa.me/919351057718?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleReset}
    >
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] border border-[#E8A5B8]/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full bg-white border border-[#E8A5B8]/30 text-[#736B6E] hover:text-[#B76E79] hover:bg-[#F4ECE1] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center space-x-2 text-[11px] font-bold uppercase tracking-widest text-[#B76E79] mb-1.5">
              <Sparkles className="w-4 h-4" />
              <span>TABLE RESERVATION</span>
            </div>

            <h3 className="font-serif-luxury font-bold text-2xl sm:text-3xl text-[#1E1E22]">
              Reserve Your Table
            </h3>

            <p className="text-xs sm:text-sm text-[#736B6E] font-light mt-1 mb-6">
              Experience the romantic floral ambience of The Messy Door Café in Mansarovar, Jaipur.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E1E22] uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Aanya Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8A5B8]/40 text-sm text-[#1E1E22] focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E1E22] uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="093510 57718"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8A5B8]/40 text-sm text-[#1E1E22] focus:outline-none focus:border-[#B76E79] focus:ring-1 focus:ring-[#B76E79]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1E1E22] uppercase tracking-wider mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-white border border-[#E8A5B8]/40 text-xs text-[#1E1E22] focus:outline-none focus:border-[#B76E79]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#1E1E22] uppercase tracking-wider mb-1.5">
                    Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-white border border-[#E8A5B8]/40 text-xs text-[#1E1E22] focus:outline-none focus:border-[#B76E79]"
                  >
                    <option value="12:00">12:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="17:00">5:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:30">9:30 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-[#1E1E22] uppercase tracking-wider mb-1.5">
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-2.5 py-2.5 rounded-xl bg-white border border-[#E8A5B8]/40 text-xs text-[#1E1E22] focus:outline-none focus:border-[#B76E79]"
                  >
                    <option value="1 Person">1 Guest</option>
                    <option value="2 People">2 Guests</option>
                    <option value="3-4 People">3-4 Guests</option>
                    <option value="5-8 People">5-8 Guests</option>
                    <option value="8+ People">8+ Guests (Celebration)</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#1E1E22] uppercase tracking-wider mb-1.5">
                  Seating Vibe
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  {['Floral Canopy', 'Cozy Velvet Nook', 'Window Booth'].map((vibe) => (
                    <button
                      type="button"
                      key={vibe}
                      onClick={() => setSeatingPreference(vibe)}
                      className={`p-2 rounded-lg border text-center transition-all cursor-pointer ${
                        seatingPreference === vibe
                          ? 'border-[#B76E79] bg-[#B76E79] text-white font-medium shadow-xs'
                          : 'border-[#E8A5B8]/30 bg-white text-[#736B6E] hover:bg-[#F4ECE1]'
                      }`}
                    >
                      {vibe}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#1E1E22] uppercase tracking-wider mb-1.5">
                  Special Notes / Occasion (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Birthday celebration, anniversary, cake request"
                  value={formData.specialRequest}
                  onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-[#E8A5B8]/40 text-xs text-[#1E1E22] focus:outline-none focus:border-[#B76E79]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-[#B76E79] hover:bg-[#9E5A66] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all duration-300 cursor-pointer"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 border border-emerald-200">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif-luxury font-bold text-2xl text-[#1E1E22] mb-1">
              Table Reserved!
            </h3>

            <span className="font-script text-2xl text-[#B76E79] block mb-2">
              We look forward to hosting you
            </span>

            <div className="bg-white p-4 rounded-2xl border border-[#E8A5B8]/30 max-w-sm mx-auto text-xs space-y-2 text-left mb-6 shadow-xs">
              <div className="flex justify-between border-b border-[#E8A5B8]/20 pb-1.5">
                <span className="text-[#736B6E]">Booking Ref:</span>
                <span className="font-bold font-mono text-[#B76E79]">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B6E]">Guest Name:</span>
                <span className="font-semibold text-[#1E1E22]">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B6E]">Date & Time:</span>
                <span className="font-semibold text-[#1E1E22]">{formData.date} at {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#736B6E]">Guests & Seating:</span>
                <span className="font-semibold text-[#1E1E22]">{formData.guests} • {seatingPreference}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppConfirm}
                className="flex-1 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center space-x-1.5 cursor-pointer"
              >
                <span>Notify via WhatsApp</span>
              </button>

              <button
                onClick={handleReset}
                className="py-3 px-6 rounded-full bg-[#1E1E22] hover:bg-[#333] text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
