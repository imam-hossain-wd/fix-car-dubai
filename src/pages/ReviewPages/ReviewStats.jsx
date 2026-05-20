'use client';

import React, { memo } from 'react';
import { Star, Users, Award, TrendingUp, Clock } from 'lucide-react';
import Image from 'next/image';

const ReviewStats = memo(function ReviewStats({ ratingStats, googleTextIcon }) {
  const { total, average, distribution } = ratingStats;
  
  return (
    <div className="bg-gray-900/95 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-gray-800">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Average Rating */}
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
            <Image 
              src={googleTextIcon} 
              alt="Google Reviews" 
              width={100} 
              height={32} 
              className="w-28 h-auto brightness-0 invert opacity-90"
              loading="eager"
              priority
            />
            <span className="text-xl font-semibold text-gray-200">Reviews</span>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-5">
            <span className="text-6xl font-bold text-primary tabular-nums">{average}</span>
            <div>
              <div className="flex gap-1" aria-label={`${average} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(average) ? 'fill-primary text-primary' : 'text-gray-700'}`} 
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-1.5">Based on <span className="font-semibold text-gray-200">{total}</span> verified reviews</p>
            </div>
          </div>
        </div>

        {/* Distribution Bars */}
        <div className="space-y-2.5">
          {[5, 4, 3, 2, 1].map((rating) => {
            const count = distribution[rating];
            const percentage = total > 0 ? (count / total) * 100 : 0;
            
            return (
              <div key={rating} className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-300 w-4 tabular-nums">{rating}</span>
                <div className="flex-1 bg-gray-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-primary h-full rounded-full transition-none"
                    style={{ width: `${percentage}%` }}
                    aria-label={`${count} ${rating}-star reviews`}
                  />
                </div>
                <span className="text-gray-400 text-sm w-8 text-right tabular-nums">{count}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
});

export default ReviewStats;