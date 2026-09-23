import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuCategories } from './components/MenuCategories';
import { AboutAndMenuBookSection } from './components/AboutAndMenuBookSection';
import { MocktailSection } from './components/MocktailSection';
import { CoffeeSection } from './components/CoffeeSection';
import { DessertsSection } from './components/DessertsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ReservationSection } from './components/ReservationSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { BookingModal } from './components/BookingModal';
import { FullscreenMenuModal } from './components/FullscreenMenuModal';
import { MenuCategoryId } from './types';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false);
  const [selectedBookPage, setSelectedBookPage] = useState<number>(1);

  const handleOpenReserve = () => {
    setIsBookingModalOpen(true);
  };

  const handleCloseReserve = () => {
    setIsBookingModalOpen(false);
  };

  const handleOpenMenu = (page = 1) => {
    setSelectedBookPage(page);
    setIsMenuModalOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuModalOpen(false);
  };

  const handleSelectCategory = (catId: MenuCategoryId) => {
    // Map category ID to corresponding 3D Menu Book page
    let targetPage = 1;
    switch (catId) {
      case 'starters':
      case 'munchies':
      case 'burgers-sandwiches':
        targetPage = 1;
        break;
      case 'chinese':
        targetPage = 2;
        break;
      case 'pasta':
      case 'pizzas':
        targetPage = 3;
        break;
      case 'coffee':
        targetPage = 4;
        break;
      case 'beverages':
        targetPage = 5;
        break;
      case 'desserts':
        targetPage = 6;
        break;
      default:
        targetPage = 1;
    }

    setSelectedBookPage(targetPage);
    setIsMenuModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#221F20] flex flex-col selection:bg-[#E8A5B8]/30 selection:text-[#221F20]">
      {/* 1. Navbar: Clean, sits over hero with soft transparent overlay */}
      <Navbar
        onReserveClick={handleOpenReserve}
        onMenuClick={() => handleOpenMenu(1)}
      />

      <main className="flex-1">
        {/* 2. FULL-WIDTH HERO: Floral ambience photo background, no blocking dark card, light info bar */}
        <Hero
          onExploreMenuClick={() => handleOpenMenu(1)}
          onReserveClick={handleOpenReserve}
        />

        {/* 3. MENU CATEGORY CARDS: 8 horizontal cards in light cream aesthetic */}
        <MenuCategories
          onSelectCategory={handleSelectCategory}
          onOpenMenuBook={() => handleOpenMenu(selectedBookPage)}
        />

        {/* 4. ABOUT / STORY + OPEN MENU BOOK: "A Café With a Story" + Real Open Menu Book */}
        <AboutAndMenuBookSection
          onOpenMenuBook={() => handleOpenMenu(1)}
          onReserveClick={handleOpenReserve}
        />

        {/* 5. FOOD / DRINK SHOWCASE: Mocktails, Coffee, Desserts in light pastel aesthetic */}
        <MocktailSection />
        <CoffeeSection />
        <DessertsSection />

        {/* 6. GALLERY: Editorial masonry gallery with pink floral ambience */}
        <GallerySection />

        {/* 7. REVIEWS: 4.5 ★, 1,997+ Reviews */}
        <ReviewsSection />

        {/* 8. LOCATION: Mansarovar, Jaipur with 3 prominent action buttons */}
        <LocationSection onReserveClick={handleOpenReserve} />

        {/* 9. RESERVATION CTA: "Your Table Is Waiting" in light warm rose */}
        <ReservationSection onReserveClick={handleOpenReserve} />
      </main>

      {/* 10. FOOTER: Refined warm charcoal with dusty rose touches */}
      <Footer />

      {/* Floating Mobile Bottom Actions */}
      <FloatingActions
        onReserveClick={handleOpenReserve}
        onMenuClick={() => handleOpenMenu(1)}
      />

      {/* Table Reservation Dialog Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseReserve}
      />

      {/* DEDICATED FULL-SCREEN REAL DIGITAL 3D MENU BOOK */}
      <FullscreenMenuModal
        isOpen={isMenuModalOpen}
        onClose={handleCloseMenu}
        initialPage={selectedBookPage}
      />
    </div>
  );
}
