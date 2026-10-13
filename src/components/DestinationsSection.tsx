import React, { useState } from 'react';
import { MapPin, Compass, Clock, Mountain, ArrowRight, X, Calendar, CheckCircle2 } from 'lucide-react';
import { DESTINATIONS } from '../data/travelData';
import { Destination, Region } from '../types/travel';

interface DestinationsSectionProps {
  onSelectDestinationForBooking: (destName: string) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ onSelectDestinationForBooking }) => {
  const [activeFilter, setActiveFilter] = useState<Region | 'All'>('All');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  const filterTabs: (Region | 'All')[] = ['All', 'Balochistan', 'Gilgit-Baltistan', 'Khyber Pakhtunkhwa'];

  const filteredDestinations = activeFilter === 'All'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.region === activeFilter);

  return (
    <section id="destinations" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
              <Compass className="w-4 h-4 text-emerald-700" />
              <span>Iconic Pakistani Tourism Destinations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Explore the Breathtaking Landscapes of Pakistan
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              From our native Balochistan gems like Ziarat and Hanna Lake to the Karakoram heights of Hunza and Skardu. Discover destinations managed by Manzoor’s Travel Agency with local guides and dedicated transport.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center flex-wrap gap-1.5 p-1.5 bg-slate-200/80 rounded-xl shrink-0 self-start md:self-end">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest) => (
            <article
              key={dest.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group"
            >
              {/* Image Container with Fallback */}
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />

                {/* Region Location Overlay */}
                <div className="absolute top-3 left-3 text-xs font-semibold text-white drop-shadow bg-slate-950/60 backdrop-blur-md px-2.5 py-1 rounded">
                  {dest.region}
                </div>

                {/* Urdu Name and Caption */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-emerald-300 font-medium">{dest.location}</span>
                    {dest.urduName && (
                      <span className="text-sm font-semibold tracking-wide text-white/90">{dest.urduName}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{dest.recommendedDays} Days</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Mountain className="w-3.5 h-3.5 text-slate-400" />
                      <span>{dest.altitude || 'Scenic Valley'}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {dest.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                    {dest.tagline}
                  </p>

                  {/* Highlights Mini List */}
                  <ul className="mt-4 space-y-1.5 text-xs text-slate-600">
                    {dest.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Controls */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedDestination(dest)}
                    className="text-xs font-semibold text-slate-700 hover:text-emerald-700 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View Destination Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectDestinationForBooking(dest.name)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                  >
                    Inquire Tour
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Destination Detail Modal */}
      {selectedDestination && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header Image */}
            <div className="relative aspect-[16/9] w-full bg-slate-900">
              <img
                src={selectedDestination.image}
                alt={selectedDestination.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />

              <button
                onClick={() => setSelectedDestination(null)}
                className="absolute top-4 right-4 p-2 bg-slate-950/60 hover:bg-slate-950 text-white rounded-full transition-colors cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                  {selectedDestination.region} · {selectedDestination.location}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                  {selectedDestination.name}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">About This Destination</h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {selectedDestination.description}
                </p>
              </div>

              {/* Key Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                <div>
                  <span className="font-semibold text-slate-500 block mb-1">Best Season to Travel:</span>
                  <span className="text-slate-800 font-medium">{selectedDestination.bestSeason}</span>
                </div>
                <div>
                  <span className="font-semibold text-slate-500 block mb-1">Altitude:</span>
                  <span className="text-slate-800 font-medium">{selectedDestination.altitude || 'N/A'}</span>
                </div>
                {selectedDestination.distanceFromQuetta && (
                  <div className="sm:col-span-2">
                    <span className="font-semibold text-slate-500 block mb-1">Route & Access from Quetta:</span>
                    <span className="text-slate-800 font-medium">{selectedDestination.distanceFromQuetta}</span>
                  </div>
                )}
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">Key Highlights & Attractions</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedDestination.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Popular Activities</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedDestination.popularActivities.map((act, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md">
                      {act}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedDestination(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const name = selectedDestination.name;
                    setSelectedDestination(null);
                    onSelectDestinationForBooking(name);
                  }}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow cursor-pointer whitespace-nowrap"
                >
                  Book Tour to {selectedDestination.name}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
