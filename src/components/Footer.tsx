import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import { AGENCY_INFO } from '../data/travelData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Agency Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block text-white">
              <span className="text-xl font-extrabold tracking-tight">
                Manzoor's <span className="text-emerald-400">Travel Agency</span>
              </span>
              <span className="block text-[11px] font-medium tracking-wider text-slate-500 uppercase -mt-0.5">
                Quetta · Balochistan · Pakistan
              </span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Your premier licensed tour operator based in Quetta, Balochistan. Specializing in authentic mountain expeditions, family-friendly holiday packages, 4x4 vehicle rentals, and nationwide Pakistan tourism.
            </p>

            <div className="flex items-center gap-2 text-emerald-400 text-xs">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{AGENCY_INFO.dtsLicense}</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="hover:text-emerald-400 transition-colors">
                  Top Destinations
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-emerald-400 transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#balochistan" className="hover:text-emerald-400 transition-colors">
                  Balochistan Specials
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-emerald-400 transition-colors">
                  Trip Cost Calculator
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-emerald-400 transition-colors">
                  Travel Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-emerald-400 transition-colors">
                  Contact Quetta Office
                </a>
              </li>
            </ul>
          </div>

          {/* Key Pakistan Destinations */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Key Destinations
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#destinations" className="hover:text-emerald-400 transition-colors">
                  Ziarat Juniper Valley (Balochistan)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-emerald-400 transition-colors">
                  Hanna Lake & Urak (Quetta)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-emerald-400 transition-colors">
                  Hunza & Passu Cones (Karakoram)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-emerald-400 transition-colors">
                  Skardu & Deosai Plains (Baltistan)
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-emerald-400 transition-colors">
                  Kund Malir & Gwadar Coast
                </a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-emerald-400 transition-colors">
                  Swat Valley & Kalam (KPK)
                </a>
              </li>
            </ul>
          </div>

          {/* Quetta Desk Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quetta Head Office
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jinnah Road (Near Meezan Chowk), Quetta, Balochistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{AGENCY_INFO.phonePrimary}</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>WhatsApp: {AGENCY_INFO.whatsapp}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{AGENCY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
          <p>© {new Date().getFullYear()} Manzoor's Travel Agency (Quetta, Pakistan). All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Govt. of Pakistan DTS License #4182</span>
            <span>·</span>
            <span>Balochistan Tourism Development Partner</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
