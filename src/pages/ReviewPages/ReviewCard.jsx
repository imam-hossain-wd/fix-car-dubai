'use client';

import React, { memo, useCallback } from 'react';
import { Star, Calendar, Share, ChevronDown, ChevronUp, Quote, Check } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const ReviewCard = memo(function ReviewCard({ 
  review, 
  index, 
  isExpanded, 
  onToggleExpand, 
  onShare,
  googleVerifiedBadge 
}) {
  const handleShare = useCallback(() => onShare(review), [review, onShare]);
  const handleToggle = useCallback(() => onToggleExpand(index), [index, onToggleExpand]);

  const shortComment = review.comment.length > 180 
    ? review.comment.slice(0, 180) + '...' 
    : review.comment;

  return (
    <Card className="group h-full border border-gray-200 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-0">
      {/* Service Badge */}
      <span className="absolute top-4 right-4 z-10 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
        {review.service}
      </span>

      <CardHeader className="pb-0 pt-6 px-6">
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="bg-gradient-to-br from-primary to-green-600 rounded-xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              {review.name.charAt(0).toUpperCase()}
            </div>
            {review.isGoogleReview && (
              <span className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm border border-gray-100">
                <Image 
                  src={googleVerifiedBadge} 
                  alt="Verified reviewer" 
                  width={16} 
                  height={16} 
                  className="w-4 h-4"
                  loading="lazy"
                />
              </span>
            )}
          </div>

          {/* User Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-base font-bold text-gray-900 truncate">{review.name}</h3>
              {review.isGoogleReview && (
                <Image 
                  src={googleVerifiedBadge} 
                  alt="Google Verified" 
                  width={18} 
                  height={18} 
                  className="w-4.5 h-4.5 flex-shrink-0"
                  loading="lazy"
                />
              )}
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
              <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
              <time dateTime={review.date}>{review.date}</time>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-4 px-6 pb-6">
        {/* Rating */}
        <div className="flex gap-0.5 mb-4" role="img" aria-label={`Rating: ${review.rating} out of 5 stars`}>
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${i < review.rating ? 'fill-primary text-primary' : 'text-gray-200'}`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Comment */}
        <blockquote className="relative">
          <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/10 rotate-180" aria-hidden="true" />
          <p className="text-gray-700 text-sm leading-relaxed relative z-10">
            &quot;{isExpanded ? review.comment : shortComment}&quot;
          </p>
        </blockquote>

        {/* Expand Toggle */}
        {review.comment.length > 180 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleToggle}
            className="mt-3 h-auto p-0 text-primary text-xs font-semibold hover:bg-transparent hover:text-primary/80"
            aria-expanded={isExpanded}
            aria-controls={`review-content-${index}`}
          >
            {isExpanded ? (
              <span className="inline-flex items-center gap-1">Show less <ChevronUp className="w-3.5 h-3.5" /></span>
            ) : (
              <span className="inline-flex items-center gap-1">Read more <ChevronDown className="w-3.5 h-3.5" /></span>
            )}
          </Button>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <span className="inline-flex items-center gap-1.5 text-[11px] bg-green-50 text-green-700 px-3 py-1.5 rounded-md font-medium">
            <Check className="w-3.5 h-3.5" aria-hidden="true" />
            Verified Customer
          </span>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleShare}
            className="h-9 w-9 text-gray-400 hover:text-primary hover:bg-gray-50 rounded-lg"
            aria-label={`Share review by ${review.name}`}
            title="Share this review"
          >
            <Share className="w-4 h-4" aria-hidden="true" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

export default ReviewCard;