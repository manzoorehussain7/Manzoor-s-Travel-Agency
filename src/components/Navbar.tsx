import React, { useState } from 'react';
import { Phone, Mail, MapPin, Menu, X, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/travelData';

interface NavbarProps {
  onOpenBooking: (pkgTitle?: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Tour Packages', href: '#packages' },
    { label: 'Balochistan Specials', href: '#balochistan' },
    { label: 'Trip Calculator', href: '#calculator' },
    { label: 'Our Services', href: '#services' },
    { label: 'Contact Quetta', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Utility Announcement Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Jinnah Road, Quetta, Balochistan</span>
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>+92 81 2834567</span>
            </span>
            <span className="hidden lg:inline-block text-slate-500">|</span>
            <span className="hidden lg:inline-flex items-center gap-1.5 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{AGENCY_INFO.email}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-emerald-400 font-medium">Govt Licensed Tour Operator (DTS #4182)</span>
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Manzoor's%20Travel%20Agency%20Quetta,%20I%20am%20interested%20in%20a%20tour`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors font-medium whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: +92 333 7891234</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main 3-Zone Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element Brand wordmark */}
        <a href="#" className="flex flex-col shrink-0 text-slate-900 group">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight whitespace-nowrap">
            Manzoor's <span className="text-emerald-700">Travel</span>
          </span>
          <span className="text-[11px] font-medium tracking-wider text-slate-500 uppercase -mt-1">
            Quetta · Pakistan
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-emerald-700 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="px-5 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 rounded-lg shadow-sm transition-all whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book a Tour
          </button>
        </div>

        {/* Mobile Hamburger toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenBooking()}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-emerald-700 rounded-lg"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-6 py-6 shadow-xl space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-800 hover:text-emerald-700 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-emerald-700 rounded-lg shadow"
            >
              Book a Tour Now
            </button>
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Manzoor's%20Travel%20Agency%20Quetta,%20I%20want%20to%20inquire%20about%20a%20tour`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center text-sm font-medium text-emerald-800 bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
