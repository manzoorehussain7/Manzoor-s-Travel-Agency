import React from 'react';
import { Star, MessageSquareQuote, ShieldCheck, MapPin } from 'lucide-react';
import { REVIEWS } from '../data/travelData';

export const ReviewsAndProof: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-emerald-700 uppercase mb-2">
              Verified Client Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight text-balance">
              Trusted by Families & Adventure Travelers Across Pakistan
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs text-slate-600 bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-sm shrink-0 self-start md:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>4.9 / 5.0 Rating based on 450+ guided tours</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">{review.author}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>Resident of {review.city}</span>
                  </div>
                </div>

                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                  {review.package}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
