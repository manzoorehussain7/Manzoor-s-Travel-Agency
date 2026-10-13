import React, { useState } from 'react';
import { Calculator, Send, MessageCircle, Sparkles, Check } from 'lucide-react';
import { AGENCY_INFO } from '../data/travelData';

interface TripCostCalculatorProps {
  onBookWithCustomQuote: (details: {
    origin: string;
    destination: string;
    days: number;
    travelers: number;
    hotelTier: string;
    transport: string;
    estimatedCost: number;
  }) => void;
}

export const TripCostCalculator: React.FC<TripCostCalculatorProps> = ({ onBookWithCustomQuote }) => {
  const [origin, setOrigin] = useState('Quetta');
  const [destination, setDestination] = useState('Hunza Valley & Karakoram');
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(4);
  const [hotelTier, setHotelTier] = useState<'standard' | 'deluxe' | 'luxury'>('deluxe');
  const [transport, setTransport] = useState<'car' | 'prado' | 'hiace'>('prado');

  // Base rates per day calculation (in PKR)
  const hotelDailyRates = {
    standard: 9000,
    deluxe: 16000,
    luxury: 28000,
  };

  const transportDailyRates = {
    car: 8500,
    prado: 19000,
    hiace: 15500,
  };

  // Estimate room count (typically 2 persons per room)
  const roomsNeeded = Math.ceil(travelers / 2);
  const totalHotelCost = roomsNeeded * hotelDailyRates[hotelTier] * (days - 1);
  const totalTransportCost = transportDailyRates[transport] * days;
  const guideAndServiceFee = 4500 * days;
  const estimatedTotal = totalHotelCost + totalTransportCost + guideAndServiceFee;
  const perPersonCost = Math.round(estimatedTotal / travelers);

  const handleWhatsAppSend = () => {
    const text = `Hello Manzoor's Travel Agency Quetta! I calculated an estimate for a custom tour:%0A- Origin: ${origin}%0A- Destination: ${destination}%0A- Duration: ${days} Days%0A- Group: ${travelers} Travelers%0A- Hotel Tier: ${hotelTier.toUpperCase()}%0A- Transport: ${transport.toUpperCase()}%0A- Estimated Budget: ~PKR ${estimatedTotal.toLocaleString()}%0APlease confirm availability and best discount.`;
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            <Calculator className="w-4 h-4 text-emerald-700" />
            <span>Interactive Trip Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Estimate Your Pakistan Tour Budget in PKR
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Get an instant, transparent cost estimation based on current vehicle fuel, hotel tariffs, and local guiding rates in Pakistan. Customize to suit your family or travel group.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Origin City */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                  Starting City
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800"
                >
                  <option value="Quetta">Quetta (Balochistan)</option>
                  <option value="Islamabad">Islamabad / Rawalpindi</option>
                  <option value="Karachi">Karachi</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Peshawar">Peshawar</option>
                </select>
              </div>

              {/* Destination */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                  Target Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800"
                >
                  <option value="Hunza Valley & Karakoram">Hunza Valley & Karakoram</option>
                  <option value="Skardu & Deosai Plains">Skardu & Deosai Plains</option>
                  <option value="Ziarat & Quetta Heritage">Ziarat & Quetta Heritage</option>
                  <option value="Hingol & Gwadar Coast">Hingol & Gwadar Coast</option>
                  <option value="Swat Valley & Kalam">Swat Valley & Kalam</option>
                  <option value="Fairy Meadows & Nanga Parbat">Fairy Meadows & Nanga Parbat</option>
                </select>
              </div>
            </div>

            {/* Sliders: Days and Travelers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Number of Days
                  </label>
                  <span className="text-sm font-bold text-emerald-800 font-mono tabular-nums">
                    {days} Days
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="14"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>2 Days (Weekend)</span>
                  <span>14 Days (Expedition)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Travelers / Group Size
                  </label>
                  <span className="text-sm font-bold text-emerald-800 font-mono tabular-nums">
                    {travelers} People
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="16"
                  value={travelers}
                  onChange={(e) => setTravelers(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-700"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>1 Solo / Couple</span>
                  <span>16 Group</span>
                </div>
              </div>
            </div>

            {/* Transport Options */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Vehicle Preference (Driver & Fuel Included)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setTransport('car')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    transport === 'car'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Saloon Sedan</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Toyota Corolla / Yaris (1-3 Pax)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTransport('prado')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    transport === 'prado'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">4x4 Prado SUV</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Toyota Prado / V8 (Mountain terrain)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setTransport('hiace')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    transport === 'hiace'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Grand Cabin Van</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Toyota Hiace 14-seat (Family group)</div>
                </button>
              </div>
            </div>

            {/* Accommodation Tier */}
            <div>
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">
                Hotel & Room Category
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setHotelTier('standard')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    hotelTier === 'standard'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Standard 3-Star</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Clean rooms, hot water, WiFi</div>
                </button>

                <button
                  type="button"
                  onClick={() => setHotelTier('deluxe')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    hotelTier === 'deluxe'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">Deluxe 4-Star</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Scenic views, breakfast buffet</div>
                </button>

                <button
                  type="button"
                  onClick={() => setHotelTier('luxury')}
                  className={`p-3 text-left rounded-xl border transition-all cursor-pointer ${
                    hotelTier === 'luxury'
                      ? 'border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">5-Star / Heritage</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Serena Hotels, PC, Shangrila</div>
                </button>
              </div>
            </div>
          </div>

          {/* Cost Estimate Output Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm sticky top-28 space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                Estimated Tour Budget
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono tabular-nums">
                  PKR {estimatedTotal.toLocaleString()}
                </span>
                <span className="text-xs text-slate-500">total estimate</span>
              </div>
              <div className="text-xs text-slate-600 mt-1">
                Approx. <span className="font-bold text-emerald-800 font-mono tabular-nums">PKR {perPersonCost.toLocaleString()}</span> per person ({travelers} travelers)
              </div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex justify-between">
                <span>Hotels ({roomsNeeded} room{roomsNeeded > 1 ? 's' : ''} × {days - 1} nights):</span>
                <span className="font-semibold text-slate-900 font-mono tabular-nums">
                  PKR {totalHotelCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Vehicle, Driver & Fuel ({days} days):</span>
                <span className="font-semibold text-slate-900 font-mono tabular-nums">
                  PKR {totalTransportCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tour Coordinator, Tolls & Support:</span>
                <span className="font-semibold text-slate-900 font-mono tabular-nums">
                  PKR {guideAndServiceFee.toLocaleString()}
                </span>
              </div>
            </div>

            <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-500 space-y-1 border border-slate-100">
              <div className="font-semibold text-slate-700 flex items-center gap-1">
                <Check className="w-3.5 h-3.5 text-emerald-600" />
                <span>Price Guarantee by Manzoor's Travel</span>
              </div>
              <p>
                Actual cost may vary slightly based on seasonal hotel surge (summer/Eid peak) and custom stopovers. Final quotation guaranteed upon confirmation.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Inquire on WhatsApp with this Estimate</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  onBookWithCustomQuote({
                    origin,
                    destination,
                    days,
                    travelers,
                    hotelTier,
                    transport,
                    estimatedCost: estimatedTotal,
                  })
                }
                className="w-full py-2.5 px-4 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Send as Formal Booking Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
