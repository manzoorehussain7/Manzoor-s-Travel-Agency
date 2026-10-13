import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DestinationsSection } from './components/DestinationsSection';
import { PackagesSection } from './components/PackagesSection';
import { BalochistanSpecialSection } from './components/BalochistanSpecialSection';
import { TripCostCalculator } from './components/TripCostCalculator';
import { ServicesSection } from './components/ServicesSection';
import { ReviewsAndProof } from './components/ReviewsAndProof';
import { QuettaOfficeAndContact } from './components/QuettaOfficeAndContact';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Region } from './types/travel';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [prefilledPackage, setPrefilledPackage] = useState<string | undefined>();
  const [prefilledDestination, setPrefilledDestination] = useState<string | undefined>();
  const [prefilledEstimate, setPrefilledEstimate] = useState<
    | {
        origin: string;
        destination: string;
        days: number;
        travelers: number;
        hotelTier: string;
        transport: string;
        estimatedCost: number;
      }
    | undefined
  >();

  // Filter state passed from Hero Search to PackagesSection
  const [filterRegion, setFilterRegion] = useState<Region | 'All'>('All');
  const [filterDuration, setFilterDuration] = useState('all');
  const [filterStyle, setFilterStyle] = useState('all');

  const handleOpenBooking = (pkgTitle?: string) => {
    setPrefilledPackage(pkgTitle);
    setPrefilledDestination(undefined);
    setPrefilledEstimate(undefined);
    setBookingModalOpen(true);
  };

  const handleSelectDestinationForBooking = (destName: string) => {
    setPrefilledPackage(undefined);
    setPrefilledDestination(destName);
    setPrefilledEstimate(undefined);
    setBookingModalOpen(true);
  };

  const handleBookWithCustomQuote = (quote: {
    origin: string;
    destination: string;
    days: number;
    travelers: number;
    hotelTier: string;
    transport: string;
    estimatedCost: number;
  }) => {
    setPrefilledPackage(undefined);
    setPrefilledDestination(undefined);
    setPrefilledEstimate(quote);
    setBookingModalOpen(true);
  };

  const handleHeroSearch = (region: Region | 'All', duration: string, style: string) => {
    setFilterRegion(region);
    setFilterDuration(duration);
    setFilterStyle(style);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} activeSection="" />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section with Quick Search */}
        <Hero onSearch={handleHeroSearch} onOpenBooking={() => handleOpenBooking()} />

        {/* Top Pakistani Tourism Places Showcase */}
        <DestinationsSection onSelectDestinationForBooking={handleSelectDestinationForBooking} />

        {/* Handcrafted Tour Packages & Pricing */}
        <PackagesSection
          filterRegion={filterRegion}
          filterDuration={filterDuration}
          filterStyle={filterStyle}
          onBookPackage={(title) => handleOpenBooking(title)}
        />

        {/* Balochistan Special Feature (Ziarat & Hanna Lake) */}
        <BalochistanSpecialSection onSelectTour={(tourName) => handleOpenBooking(tourName)} />

        {/* Interactive Trip Cost Calculator (Instant PKR Quote) */}
        <TripCostCalculator onBookWithCustomQuote={handleBookWithCustomQuote} />

        {/* Comprehensive Services & Travel FAQs */}
        <ServicesSection onInquireService={(srvTitle) => handleOpenBooking(`Service: ${srvTitle}`)} />

        {/* Social Proof & Traveler Testimonials */}
        <ReviewsAndProof />

        {/* Quetta Head Office, Map & Direct Inquiry Form */}
        <QuettaOfficeAndContact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Universal Booking & Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        prefilledPackage={prefilledPackage}
        prefilledDestination={prefilledDestination}
        prefilledEstimate={prefilledEstimate}
      />
    </div>
  );
}
