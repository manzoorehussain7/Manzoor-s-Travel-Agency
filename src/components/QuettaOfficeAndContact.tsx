import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/travelData';

export const QuettaOfficeAndContact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: 'Hunza Valley & Karakoram',
    travelDate: '',
    travelers: 2,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
            Visit Us or Send an Inquiry
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
            Manzoor's Travel Agency — Quetta Head Office
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Conveniently located on Jinnah Road near Meezan Chowk in central Quetta. Drop by for freshly brewed chai and personalized tour planning, or reach out to our team online 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Office Contact Info & Embedded Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-900">
                Official Agency Credentials
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Quetta Office Address</span>
                    <span className="text-slate-600">{AGENCY_INFO.headOffice}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Direct Phones & WhatsApp</span>
                    <span className="text-slate-600 block">Landline: {AGENCY_INFO.phonePrimary}</span>
                    <span className="text-slate-600 block">Mobile/WhatsApp: {AGENCY_INFO.phoneMobile}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Official Email</span>
                    <span className="text-slate-600">{AGENCY_INFO.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900 block">Working Hours</span>
                    <span className="text-slate-600">{AGENCY_INFO.operatingHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Manzoor's%20Travel%20Quetta,%20I%20would%20like%20to%20visit%20your%20office%20or%20book%20a%20tour`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded-lg shadow transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Responsive Google Map of Quetta */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm aspect-[16/10] bg-slate-100">
              <iframe
                title="Manzoor Travel Agency Quetta Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110197.89252390237!2d66.93859873099958!3d30.17983050478631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed2df54beafef33%3A0xe5a3637e11942186!2sQuetta%2C%20Balochistan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              Send a Tour Booking Inquiry
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Our travel manager will respond within 2 hours with customized options and guaranteed rates.
            </p>

            {submitted ? (
              <div className="p-8 text-center bg-emerald-50 rounded-xl border border-emerald-200 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-950">Inquiry Received Successfully!</h4>
                <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto">
                  Thank you, <span className="font-bold">{formData.name}</span>. Our Quetta tour manager has received your travel request for <span className="font-bold">{formData.destination}</span> and will contact you shortly at {formData.phone}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      destination: 'Hunza Valley & Karakoram',
                      travelDate: '',
                      travelers: 2,
                      message: '',
                    });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-white border border-emerald-300 rounded-lg hover:bg-emerald-100/50 cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMsg && (
                  <div className="p-3 bg-red-50 text-red-700 border border-red-200 rounded-lg text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Manzoor Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0333 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Destination of Interest
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    >
                      <option value="Hunza Valley & Karakoram">Hunza Valley & Karakoram</option>
                      <option value="Skardu & Shangrila / Deosai">Skardu & Shangrila / Deosai</option>
                      <option value="Ziarat & Quetta Heritage">Ziarat & Quetta Heritage (Balochistan)</option>
                      <option value="Hanna Lake & Urak Day Tour">Hanna Lake & Urak Day Tour</option>
                      <option value="Kund Malir Beach & Gwadar">Kund Malir Beach & Gwadar</option>
                      <option value="Swat Valley & Kalam">Swat Valley & Kalam</option>
                      <option value="Custom Multi-Region Tour">Custom Multi-Region Tour</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Planned Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: Number(e.target.value) })}
                      className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1">
                    Special Requests or Preferred Stops
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your group, preferred hotels, 4x4 jeep requirements, or budget expectations..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-sm rounded-lg border border-slate-300 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-slate-900 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Tour Request to Quetta Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
