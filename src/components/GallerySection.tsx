import React, { useState } from 'react';
import { Sparkles, Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/messyDoorData';

export const GallerySection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Floral' | 'Food' | 'Drinks' | 'Ambience' | 'Dessert'>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeFilter === 'All'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((p) => p.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#FAF7F2] relative overflow-hidden">
      {/* Subtle paper texture */}
      <div className="absolute inset-0 paper-texture pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#E8A5B8]/25 border border-[#E8A5B8]/40 mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#B76E79]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B76E79]">
              VISUAL JOURNAL
            </span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-bold text-[#1E1E22] tracking-tight mb-3">
            Moments at The Messy Door
          </h2>

          <p className="text-xs sm:text-sm text-[#736B6E] font-light">
            A glimpse into our pink floral ceilings, sunlit seating nooks, handcrafted beverages and sweet indulgences.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {(['All', 'Floral', 'Food', 'Drinks', 'Dessert', 'Ambience'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#B76E79] text-white shadow-sm'
                    : 'bg-white text-[#736B6E] hover:bg-[#F4ECE1] border border-[#E8A5B8]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer bg-[#F4ECE1] aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />

              {/* Soft Pink & Charcoal Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141416]/85 via-[#B76E79]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <div className="flex justify-end">
                  <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                    <Eye className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#F3C5D3] font-semibold block mb-1">
                    {photo.category}
                  </span>
                  <h3 className="font-serif-luxury text-base font-bold text-white leading-snug">
                    {photo.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 sm:-right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevPhoto}
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextPhoto}
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/15 hover:bg-white/30 text-white transition-colors cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image Container with Smooth Scale */}
            <div className="rounded-2xl overflow-hidden border border-white/20 shadow-2xl max-h-[75vh]">
              <img
                src={filteredPhotos[lightboxIndex].src}
                alt={filteredPhotos[lightboxIndex].title}
                className="max-h-[75vh] w-auto object-contain mx-auto"
              />
            </div>

            {/* Caption Bar */}
            <div className="mt-4 text-center text-white">
              <span className="text-xs uppercase tracking-widest text-[#E8A5B8] font-semibold">
                {filteredPhotos[lightboxIndex].category} • {lightboxIndex + 1} of {filteredPhotos.length}
              </span>
              <h3 className="font-serif-luxury text-xl font-bold mt-1">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs text-white/70 max-w-md mx-auto mt-1">
                {filteredPhotos[lightboxIndex].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
