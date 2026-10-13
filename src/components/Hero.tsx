import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users, Award, ShieldCheck, Compass } from 'lucide-react';
import { Region } from '../types/travel';

interface HeroProps {
  onSearch: (region: Region | 'All', duration: string, style: string) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onOpenBooking }) => {
  const [selectedRegion, setSelectedRegion] = useState<Region | 'All'>('All');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedRegion, selectedDuration, selectedStyle);
    const element = document.getElementById('packages');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-slate-950 text-white overflow-hidden">
      {/* Background Hero Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hunza_passu_cones_1791869354390.jpg"
          alt="Majestic Passu Cones in Hunza Valley Pakistan"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Editorial Subtitle & Tagline */}
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-4">
          <Compass className="w-4 h-4 text-emerald-400" />
          <span>Manzoor's Travel Agency · Based in Quetta, Balochistan</span>
        </div>

        {/* Display Headline with Balance */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl text-balance leading-tight">
          Experience the Majestic Natural Wonders of Pakistan
        </h1>

        {/* Concrete Proposition */}
        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
          From the ancient juniper forests of Ziarat and turquoise waters of Hanna Lake in Quetta to the towering cathedral spires of Hunza and Skardu. We craft authentic, safe, and unforgettable domestic tours with vetted 4x4 vehicles and experienced mountain guides.
        </p>

        {/* CTA Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all cursor-pointer whitespace-nowrap"
          >
            Plan Your Pakistan Journey
          </button>
          <a
            href="#destinations"
            className="px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 rounded-lg backdrop-blur-sm transition-all whitespace-nowrap"
          >
            Explore Tourist Places
          </a>
        </div>

        {/* Interactive Tour Finder / Search Form */}
        <div className="mt-12 bg-white rounded-xl shadow-2xl p-4 sm:p-6 text-slate-900 border border-slate-100 max-w-5xl">
          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
            <Search className="w-4 h-4 text-emerald-600" />
            <span>Quick Tour Finder & Itinerary Filter</span>
          </div>

          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Region / Destination */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="region-select" className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                <span>Destination Region</span>
              </label>
              <select
                id="region-select"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value as Region | 'All')}
                className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 bg-slate-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800"
              >
                <option value="All">All Pakistan Regions</option>
                <option value="Balochistan">Balochistan (Ziarat, Hanna Lake, Gwadar)</option>
                <option value="Gilgit-Baltistan">Gilgit-Baltistan (Hunza, Skardu, Deosai)</option>
                <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa (Swat, Kalam)</option>
              </select>
            </div>

            {/* Duration */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="duration-select" className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                <span>Trip Duration</span>
              </label>
              <select
                id="duration-select"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 bg-slate-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800"
              >
                <option value="all">Any Duration</option>
                <option value="short">Short Getaway (1–3 Days)</option>
                <option value="medium">Classic Tour (4–6 Days)</option>
                <option value="long">Grand Expedition (7+ Days)</option>
              </select>
            </div>

            {/* Travel Style */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="style-select" className="text-xs font-semibold text-slate-700 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-600" />
                <span>Travel Style</span>
              </label>
              <select
                id="style-select"
                value={selectedStyle}
                onChange={(e) => setSelectedStyle(e.target.value)}
                className="w-full text-sm rounded-lg border border-slate-300 px-3 py-2.5 bg-slate-50 hover:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800"
              >
                <option value="all">All Travel Styles</option>
                <option value="family">Private Family Vacation</option>
                <option value="adventure">4x4 Mountain Adventure</option>
                <option value="heritage">Balochistan Cultural Tour</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="flex items-end">
              <button
                type="submit"
                className="w-full h-[42px] px-4 text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Search className="w-4 h-4" />
                <span>Filter Packages</span>
              </button>
            </div>
          </form>
        </div>

        {/* 4-Column Trust Marker Strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-slate-800">
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">14+</div>
            <div className="text-xs sm:text-sm text-slate-400">Years in Quetta, Balochistan</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">12,500+</div>
            <div className="text-xs sm:text-sm text-slate-400">Happy Travelers Served</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">1,450+</div>
            <div className="text-xs sm:text-sm text-slate-400">Northern & Local Tours</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono tabular-nums">DTS #4182</div>
            <div className="text-xs sm:text-sm text-slate-400">Govt of Pakistan Licensed</div>
          </div>
        </div>
      </div>
    </section>
  );
};
