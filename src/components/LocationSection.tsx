import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/messyDoorData';

interface LocationSectionProps {
  onReserveClick: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onReserveClick }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Business Address & Timings */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8A5B8]/25 border border-[#E8A5B8]/40 mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#B76E79]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
                FIND OUR CAFÉ
              </span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1E1E22] tracking-tight">
              Visit The Messy Door
            </h2>

            <p className="text-sm sm:text-base text-[#736B6E] font-light leading-relaxed">
              Conveniently located on Main 30 Shipra Path in Raghu Vihar, Mansarovar — with ample parking and a warm, inviting floral atmosphere.
            </p>

            {/* Address Details Card */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8A5B8]/30 shadow-sm space-y-4">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] border border-[#E8A5B8]/40 flex items-center justify-center text-[#B76E79] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-luxury text-lg font-bold text-[#1E1E22]">
                    The Messy Door Cafe
                  </h4>
                  <p className="text-xs sm:text-sm text-[#736B6E] font-light leading-relaxed mt-1">
                    Namokar Building, M-1-A, Raghu Vihar, Main 30, Shipra Path,<br />
                    Mansarovar, Jaipur, Rajasthan 302020
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E8A5B8]/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B76E79] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#736B6E] block font-medium">
                      Timings
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#1E1E22]">
                      Open until 11 PM
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF7F2] flex items-center justify-center text-[#B76E79] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#736B6E] block font-medium">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-xs sm:text-sm font-semibold text-[#B76E79] hover:underline"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-[#E8A5B8]/15 flex items-center justify-between text-xs text-[#736B6E]">
                <span>Experience:</span>
                <span className="font-medium text-[#B76E79]">Romantic Floral Ambiance & Artisanal Kitchen</span>
              </div>
            </div>

            {/* Action Buttons: Get Directions, Call Now, Reserve a Table */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#1E1E22] text-white hover:bg-[#B76E79] transition-all duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md group cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-white border border-[#B76E79] text-[#B76E79] hover:bg-[#B76E79] hover:text-white transition-all duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-xs cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onReserveClick}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#B76E79] text-white hover:bg-[#9E5A66] transition-all duration-300 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>

          {/* Right Column: Stylish Map Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              {/* Interactive Google Maps Embed with custom styled pin representation */}
              <div className="relative h-[400px] w-full bg-[#E5E3DF] overflow-hidden">
                <iframe
                  title="The Messy Door Cafe Location Map"
                  src="https://maps.google.com/maps?q=The+Messy+Door+Cafe+Namokar+Building+Shipra+Path+Mansarovar+Jaipur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'contrast(1.05) saturate(1.1)' }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />

                {/* Floating Map Label Badge */}
                <div className="absolute top-4 left-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8A5B8]/30 shadow-lg pointer-events-none">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B76E79] animate-ping" />
                    <span className="font-serif-luxury font-bold text-xs text-[#1E1E22]">
                      The Messy Door Cafe
                    </span>
                  </div>
                  <span className="text-[10px] text-[#736B6E] block mt-0.5">
                    Mansarovar, Jaipur • Open till 11 PM
                  </span>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="p-4 bg-[#FAF7F2] border-t border-[#E8A5B8]/20 flex items-center justify-between text-xs">
                <span className="text-[#736B6E]">
                  Landmark: Shipra Path, Near Landscape Garden
                </span>
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#B76E79] hover:underline flex items-center space-x-1"
                >
                  <span>Open in Google Maps</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
