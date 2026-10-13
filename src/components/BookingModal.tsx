import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageCircle, Calendar, Users, MapPin, Send, AlertCircle } from 'lucide-react';
import { AGENCY_INFO, TOUR_PACKAGES } from '../data/travelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledPackage?: string;
  prefilledDestination?: string;
  prefilledEstimate?: {
    origin: string;
    destination: string;
    days: number;
    travelers: number;
    hotelTier: string;
    transport: string;
    estimatedCost: number;
  };
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  prefilledPackage,
  prefilledDestination,
  prefilledEstimate,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedTour, setSelectedTour] = useState('');
  const [travelDate, setTravelDate] = useState('');
  const [travelers, setTravelers] = useState(2);
  const [departureCity, setDepartureCity] = useState('Quetta');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (prefilledPackage) {
      setSelectedTour(prefilledPackage);
    } else if (prefilledDestination) {
      setSelectedTour(`Custom Tour: ${prefilledDestination}`);
    } else if (prefilledEstimate) {
      setSelectedTour(`Custom Quote: ${prefilledEstimate.destination} (${prefilledEstimate.days} Days)`);
      setDepartureCity(prefilledEstimate.origin);
      setTravelers(prefilledEstimate.travelers);
      setNotes(`Transport: ${prefilledEstimate.transport.toUpperCase()}, Hotel: ${prefilledEstimate.hotelTier.toUpperCase()}, Estimated Budget: PKR ${prefilledEstimate.estimatedCost.toLocaleString()}`);
    } else {
      setSelectedTour('Hunza & Passu Cones Expedition');
    }
  }, [prefilledPackage, prefilledDestination, prefilledEstimate, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setErrorMsg('Please provide your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setIsSuccess(true);
  };

  const handleWhatsAppInstant = () => {
    const text = `Hello Manzoor's Travel Agency Quetta!%0AI would like to book / inquire about a tour:%0A- Name: ${name || 'Prospective Traveler'}%0A- Tour: ${selectedTour}%0A- Departure City: ${departureCity}%0A- Travelers: ${travelers}%0A- Date: ${travelDate || 'Flexible'}%0A- Special Notes: ${notes || 'None'}`;
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200">
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between gap-4 sticky top-0 bg-white/95 backdrop-blur-md z-10">
          <div>
            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
              Manzoor's Travel Agency · Quetta Desk
            </span>
            <h3 className="text-xl font-bold text-slate-900 mt-0.5">
              Tour Reservation & Quotation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Tour Request Confirmed!</h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-slate-900">{name}</span>. Your request for <span className="font-semibold text-slate-900">{selectedTour}</span> has been assigned to our senior tour coordinator in Quetta. We will reach you at <span className="font-semibold text-slate-900">{phone}</span> shortly.
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <button
                  onClick={handleWhatsAppInstant}
                  className="w-full py-3 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect Immediately on WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Selected Tour Selection */}
              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Selected Package or Destination
                </label>
                <select
                  value={selectedTour}
                  onChange={(e) => setSelectedTour(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600 text-slate-800"
                >
                  {TOUR_PACKAGES.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title} (PKR {p.pricePerPersonPKR.toLocaleString()})
                    </option>
                  ))}
                  <option value="Custom Tour: Ziarat & Hanna Lake Quetta">Custom Tour: Ziarat & Hanna Lake Quetta</option>
                  <option value="Custom Tour: Hunza Valley & Passu Cones">Custom Tour: Hunza Valley & Passu Cones</option>
                  <option value="Custom Tour: Skardu & Deosai Plains">Custom Tour: Skardu & Deosai Plains</option>
                  <option value="Custom Tour: Hingol National Park & Gwadar">Custom Tour: Hingol National Park & Gwadar</option>
                  <option value="Custom Multi-Day Pakistan Expedition">Custom Multi-Day Pakistan Expedition</option>
                </select>
              </div>

              {/* Traveler Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0333 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Departure City
                  </label>
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-2 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  >
                    <option value="Quetta">Quetta</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full text-sm rounded-lg border border-slate-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Travelers
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="40"
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full text-sm rounded-lg border border-slate-300 px-2 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Email (Optional)
                </label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                  Special Notes / Accommodation Preferences
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Family with children, need 4x4 Prado, prefer Serena Hotel..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                />
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Reservation Request</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstant}
                  className="w-full py-2.5 text-xs font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-lg border border-emerald-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Or Book Instantly via WhatsApp Chat</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
