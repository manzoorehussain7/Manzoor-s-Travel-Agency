import React, { useState } from 'react';
import { Compass, Mountain, Car, Plane, Hotel, Footprints, CheckCircle2, ChevronDown } from 'lucide-react';
import { TRAVEL_SERVICES } from '../data/travelData';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you offer pickup and customized tours directly from Quetta?',
      a: 'Yes, absolutely. Being based on Jinnah Road in Quetta, we offer daily departures for Ziarat Valley, Hanna Lake, Urak, and Pishin, as well as direct connections to Northern Pakistan tours departing via flights from Quetta International Airport or private overland convoys.'
    },
    {
      q: 'Are your 4x4 vehicles suitable for rugged northern tracks like Deosai or Fairy Meadows?',
      a: 'All our mountain vehicles (Toyota Prado, Land Cruiser 100/200, and local 4x4 Willys jeeps) are commercially certified and driven by veteran mountain chauffeurs who understand high-altitude driving, river crossings, and pass regulations.'
    },
    {
      q: 'What is the booking policy and advance payment structure?',
      a: 'We require a 30% advance deposit to secure hotel bookings and vehicle reservations. The remaining balance can be settled prior to departure at our Quetta office or via online bank transfer (Meezan Bank, HBL, Bank of Punjab).'
    },
    {
      q: 'Is it safe for families and female travelers to visit Balochistan tourist spots?',
      a: 'Tourism in Ziarat, Hanna Lake, and along the Makran Coastal Highway to Kund Malir/Gwadar is peaceful and welcoming. Manzoor’s Travel arranges vetted family-friendly accommodations, female-respecting guides, and coordinated security clearances where required.'
    }
  ];

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-emerald-700" />;
      case 'Mountain':
        return <Mountain className="w-5 h-5 text-emerald-700" />;
      case 'Car':
        return <Car className="w-5 h-5 text-emerald-700" />;
      case 'Plane':
        return <Plane className="w-5 h-5 text-emerald-700" />;
      case 'Hotel':
        return <Hotel className="w-5 h-5 text-emerald-700" />;
      case 'Footprints':
        return <Footprints className="w-5 h-5 text-emerald-700" />;
      default:
        return <Compass className="w-5 h-5 text-emerald-700" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            Comprehensive Travel & Tourism Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Everything You Need for a Seamless Pakistan Journey
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From single-day Quetta excursions to nationwide two-week expeditions across the Karakoram, Hindu Kush, and Himalayas. We manage every detail so you can focus on the memories.
          </p>
        </div>

        {/* Services Grid (Numbered Editorial Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {TRAVEL_SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200 hover:border-emerald-600/50 bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-emerald-50 group-hover:bg-emerald-100 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {`0${index + 1}.`}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5 text-xs text-slate-600">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <button
                  onClick={() => onInquireService(service.title)}
                  className="text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
                >
                  Inquire About This Service →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Travel FAQ Accordion Block */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <h3 className="text-2xl font-bold text-slate-900">
              Frequently Asked Questions for Pakistan Travelers
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Have questions regarding permits, weather, road conditions, or booking? Our team is always here to assist.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
