import React from 'react';
import { Mountain, MapPin, Compass, ShieldCheck, HeartHandshake, UtensilsCrossed, ArrowRight } from 'lucide-react';

interface BalochistanSpecialProps {
  onSelectTour: (tourName: string) => void;
}

export const BalochistanSpecialSection: React.FC<BalochistanSpecialProps> = ({ onSelectTour }) => {
  return (
    <section id="balochistan" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative subtle map texture / ambient glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-400 uppercase mb-3">
            <Mountain className="w-4 h-4 text-emerald-400" />
            <span>Our Native Heritage & Homeland</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white text-balance">
            Discover Balochistan: The Land of Pure Hospitality
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Headquartered in Quetta on Jinnah Road, Manzoor's Travel Agency provides exclusive local access to Balochistan’s best kept secrets. From the cool mountain pines of Ziarat to the golden waters of Hanna Lake and the coastal wonders of Makran.
          </p>
        </div>

        {/* 2-Column Split: Visual Highlight + Native Tour Advantages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Visual Showcase (Ziarat & Hanna Lake) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Ziarat Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col justify-end p-6 min-h-[300px]">
              <img
                src="/src/assets/images/ziarat_balochistan_1791869354755.jpg"
                alt="Quaid-e-Azam Residency in Ziarat Balochistan"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="relative z-10">
                <span className="text-xs font-semibold text-emerald-400 block mb-1">
                  120 km from Quetta · 2,400m
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Ziarat Juniper Sanctuary
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Visit the historic wooden Quaid-e-Azam Residency, trek ancient juniper trails, and enjoy fresh summer cherries and winter snows.
                </p>
                <button
                  onClick={() => onSelectTour('Ziarat Valley & Quetta Heritage Experience')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Explore Ziarat Tours</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Hanna Lake Card */}
            <div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 flex flex-col justify-end p-6 min-h-[300px]">
              <img
                src="/src/assets/images/hanna_lake_quetta_1791869356989.jpg"
                alt="Hanna Lake Quetta Balochistan"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="relative z-10">
                <span className="text-xs font-semibold text-emerald-400 block mb-1">
                  14 km from Quetta Center
                </span>
                <h3 className="text-xl font-bold text-white mb-2">
                  Hanna Lake & Urak Valley
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  Pristine turquoise waters surrounded by dramatic Zarghoon ridges, rowboats, and lush apple orchards in adjacent Urak Valley.
                </p>
                <button
                  onClick={() => onSelectTour('Hanna Lake & Quetta Day Excursion')}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer"
                >
                  <span>Book Day Excursion</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Native Agency Advantage Bento Column */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-slate-800 bg-slate-950/80 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                Why Book Balochistan with a Quetta Agency?
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Authentic Safety, Native Culture & Local Trust
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Balochistan’s terrains require authentic local familiarity. Unlike non-local agents operating remotely from other cities, Manzoor's Travel is based right on Jinnah Road Quetta with strong family roots, community relations, and direct route insight.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Safe & Verified Travel Routes</span>
                  <span className="text-slate-400 text-xs">Real-time highway updates, local security clearance protocols, and family-friendly itineraries.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <UtensilsCrossed className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Traditional Baloch & Pashtun Feasts</span>
                  <span className="text-slate-400 text-xs">Authentic Quetta Rosh, mountain namkeen sajji, Landhi mutton, and fresh Kandahari Naan included in private tours.</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Warm Regional Hospitality (Mehmandari)</span>
                  <span className="text-slate-400 text-xs">Experience genuine Pakistani and Baloch hospitality that treats every traveler like family.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => onSelectTour('Balochistan Custom Guided Tour')}
                className="w-full py-3 text-center text-xs sm:text-sm font-semibold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-colors cursor-pointer"
              >
                Request Custom Balochistan Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
