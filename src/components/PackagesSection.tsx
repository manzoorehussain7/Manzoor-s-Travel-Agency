import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Check, X as XIcon, ChevronRight, FileText } from 'lucide-react';
import { TOUR_PACKAGES } from '../data/travelData';
import { TourPackage, Region } from '../types/travel';

interface PackagesSectionProps {
  filterRegion?: Region | 'All';
  filterDuration?: string;
  filterStyle?: string;
  onBookPackage: (packageTitle: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  filterRegion = 'All',
  filterDuration = 'all',
  filterStyle = 'all',
  onBookPackage,
}) => {
  const [selectedPackageForModal, setSelectedPackageForModal] = useState<TourPackage | null>(null);

  // Apply filters
  const filteredPackages = TOUR_PACKAGES.filter((pkg) => {
    if (filterRegion !== 'All' && pkg.region !== filterRegion) {
      return false;
    }
    if (filterDuration === 'short' && pkg.durationDays > 3) {
      return false;
    }
    if (filterDuration === 'medium' && (pkg.durationDays < 4 || pkg.durationDays > 6)) {
      return false;
    }
    if (filterDuration === 'long' && pkg.durationDays < 7) {
      return false;
    }
    return true;
  });

  return (
    <section id="packages" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            Curated Pakistan Tour Packages
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Handcrafted Itineraries with Transparent Pricing
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Every itinerary is personally tested and managed by Manzoor’s Travel team. Enjoy vetted 4x4 mountain jeeps, family-safe accommodations, seasoned local drivers, and 24/7 on-tour coordination.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Package Banner Image */}
                <div className="relative aspect-[16/9] bg-slate-900 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Price Tag Overlay */}
                  <div className="absolute top-4 right-4 bg-emerald-700 text-white px-3.5 py-1.5 rounded-lg shadow-md">
                    <span className="text-xs font-medium block text-emerald-200">Starting from</span>
                    <span className="text-lg font-bold font-mono tabular-nums">
                      PKR {pkg.pricePerPersonPKR.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-emerald-200 block text-right">/ person</span>
                  </div>

                  {/* Departure & Region info */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-300 mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>Departs: {pkg.startingCity} · {pkg.region}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                {/* Package Core Info */}
                <div className="p-6">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pkg.durationDays} Days / {pkg.durationNights} Nights</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pkg.groupType}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{pkg.departureSchedule}</span>
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-5">
                    {pkg.subtitle}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Tour Highlights</div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                      {pkg.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Package Card Bottom Actions */}
              <div className="p-6 pt-0 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <button
                  onClick={() => setSelectedPackageForModal(pkg)}
                  className="text-xs font-semibold text-slate-700 hover:text-emerald-700 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>View Day-by-Day Itinerary</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookPackage(pkg.title)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  Book This Tour
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Itinerary Modal */}
      {selectedPackageForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-10">
              <div>
                <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                  Complete Tour Itinerary · {selectedPackageForModal.durationDays} Days / {selectedPackageForModal.durationNights} Nights
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {selectedPackageForModal.title}
                </h3>
                <div className="text-xs text-slate-500 mt-1">
                  Starting Price: <span className="font-bold text-slate-900 font-mono tabular-nums">PKR {selectedPackageForModal.pricePerPersonPKR.toLocaleString()}</span> / person
                </div>
              </div>

              <button
                onClick={() => setSelectedPackageForModal(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Close itinerary modal"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Day-by-day Itinerary Timeline */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                  Day-by-Day Schedule
                </h4>
                <div className="space-y-4">
                  {selectedPackageForModal.itinerary.map((day) => (
                    <div key={day.day} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 text-xs font-bold text-emerald-800 bg-emerald-100 rounded">
                          Day {day.day}
                        </span>
                        <h5 className="text-sm font-bold text-slate-900">{day.title}</h5>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-1">
                        {day.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                {/* Included */}
                <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-900 mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-700" />
                    <span>Package Inclusions</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {selectedPackageForModal.included.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Excluded */}
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-3 flex items-center gap-1.5">
                    <XIcon className="w-4 h-4 text-slate-500" />
                    <span>Not Included</span>
                  </h5>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {selectedPackageForModal.excluded.map((exc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-slate-400 font-bold">•</span>
                        <span>{exc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedPackageForModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Back to Packages
                </button>
                <button
                  onClick={() => {
                    const title = selectedPackageForModal.title;
                    setSelectedPackageForModal(null);
                    onBookPackage(title);
                  }}
                  className="px-6 py-2.5 text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow cursor-pointer whitespace-nowrap"
                >
                  Reserve This Package Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
