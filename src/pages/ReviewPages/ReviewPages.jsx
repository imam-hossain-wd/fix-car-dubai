

// import React from 'react'

// export default function ReviewPages() {
//   return (
//     <div>ReviewPages</div>
//   )
// }


'use client'

import React, { useState, useMemo } from 'react';
import { Star, Filter, Search, Calendar, ThumbsUp, MessageCircle, Share, ChevronDown, ChevronUp, Quote, Sparkles, Check, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { reviews } from '@/constants/reviewdata';

import googleLogo from '../../assets/googleLogo.png'
import googleVerifiedBadge from '../../assets/googleVerifiedBadge.png'
import googleTextIcon from '../../assets/googleTextIcon.png'

export default function ReviewPages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [expandedReview, setExpandedReview] = useState(null);

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = reviews;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(review =>
        review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by rating
    if (ratingFilter !== 'all') {
      filtered = filtered.filter(review => review.rating === parseInt(ratingFilter));
    }

    // Filter by service
    if (serviceFilter !== 'all') {
      filtered = filtered.filter(review => review.service === serviceFilter);
    }

    // Sort reviews
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date) - new Date(a.date);
        case 'oldest':
          return new Date(a.date) - new Date(b.date);
        case 'highest':
          return b.rating - a.rating;
        case 'lowest':
          return a.rating - b.rating;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, ratingFilter, serviceFilter, sortBy]);

  // Get unique services for filter
  const services = useMemo(() => {
    const uniqueServices = [...new Set(reviews.map(review => review.service))];
    return uniqueServices;
  }, []);

  // Calculate rating statistics
  const ratingStats = useMemo(() => {
    const total = reviews.length;
    const average = reviews.reduce((sum, review) => sum + review.rating, 0) / total;
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

    reviews.forEach(review => {
      distribution[review.rating]++;
    });

    return { total, average: average.toFixed(1), distribution };
  }, []);

  const toggleReviewExpansion = (index) => {
    setExpandedReview(expandedReview === index ? null : index);
  };

  const shareReview = async (review) => {
    const text = `Check out this review from ${review.name}: "${review.comment}" - ${review.rating}⭐`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Car Service Review',
          text: text,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(text);
      alert('Review text copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-primary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

        <div className="container relative mx-auto px-4 max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 fill-white" />
            CUSTOMER TESTIMONIALS
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            What Our <span className="text-yellow-400">Customers</span> Say
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
            Real stories from car owners who trusted us with their vehicles
          </p>

          {/* Overall Rating Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Image
                    src={googleTextIcon}
                    alt="Google"
                    width={120}
                    height={40}
                    className="w-24 h-8"
                  />
                  <span className="text-2xl font-bold text-white">Reviews</span>
                </div>
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-5xl font-bold text-yellow-400">{ratingStats.average}</span>
                  <div className="flex flex-col items-start">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(ratingStats.average) ? 'fill-yellow-400 text-yellow-400' : 'text-white/50'}`}
                        />
                      ))}
                    </div>
                    <p className="text-white/80 text-sm mt-1">Based on {ratingStats.total} reviews</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm w-4 text-white">{rating}</span>
                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full transition-all duration-500"
                        style={{
                          width: `${(ratingStats.distribution[rating] / ratingStats.total) * 100}%`
                        }}
                      ></div>
                    </div>
                    <span className="text-white/80 text-sm w-8 text-right">
                      {ratingStats.distribution[rating]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search Section */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Rating Filter */}
            <Select value={ratingFilter} onValueChange={setRatingFilter}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="All Ratings" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Ratings</SelectItem>
                <SelectItem value="5">5 Stars</SelectItem>
                <SelectItem value="4">4 Stars</SelectItem>
                <SelectItem value="3">3 Stars</SelectItem>
                <SelectItem value="2">2 Stars</SelectItem>
                <SelectItem value="1">1 Star</SelectItem>
              </SelectContent>
            </Select>

            {/* Service Filter */}
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="All Services" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {services.map(service => (
                  <SelectItem key={service} value={service}>{service}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Sort By */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="highest">Highest Rated</SelectItem>
                <SelectItem value="lowest">Lowest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Results Count */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredReviews.length}</span> of{' '}
              <span className="font-semibold">{reviews.length}</span> reviews
            </p>

            <Link
              href="https://g.page/r/CdrwD2SVrLO7EAI/review"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              <ThumbsUp className="h-5 w-5" />
              Write a Review
            </Link>
          </div>

          {/* Reviews Grid */}
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredReviews.map((review, index) => (
                <Card
                  key={index}
                  className="border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-1"
                >
                  {/* Service Badge */}
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium z-10">
                    {review.service}
                  </div>

                  <CardHeader className="pb-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="bg-gradient-to-br from-primary to-green-600 rounded-2xl w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-md">
                            {review.name.charAt(0)}
                          </div>
                          {review.isGoogleReview && (
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                              {/* <Image
                                src={googleLogo}
                                alt="Google Verified"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              /> */}
                            </div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold">{review.name}</h3>
                            <Image
                              src={googleVerifiedBadge}
                              alt="Google Verified"
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {review.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-5 w-5 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm font-medium text-gray-600">
                        {review.rating}.0
                      </span>
                    </div>

                    {/* Review Text */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20 rotate-180" />
                      <p className={`text-gray-700 mb-4 text-sm leading-relaxed relative z-10 ${expandedReview === index ? '' : 'line-clamp-3'
                        }`}>
                        &quot;{review.comment}&quot;
                      </p>

                      {review.comment.length > 150 && (
                        <button
                          onClick={() => toggleReviewExpansion(index)}
                          className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1 transition-colors mb-4"
                        >
                          {expandedReview === index ? (
                            <>
                              Show less <ChevronUp className="w-4 h-4" />
                            </>
                          ) : (
                            <>
                              Read more <ChevronDown className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                        <Check className="w-3 h-3" />
                        Verified Customer
                      </span>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => shareReview(review)}
                          className="p-2 text-gray-400 hover:text-primary transition-colors"
                          title="Share review"
                        >
                          <Share className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // No Results State
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No reviews found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setRatingFilter('all');
                  setServiceFilter('all');
                }}
                variant="outline"
              >
                Clear all filters
              </Button>
            </div>
          )}

          {/* Load More Button (if you have pagination) */}
          {filteredReviews.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" className="rounded-full">
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Heart className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Share Your Experience
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Help other car owners make the right choice. Your review can make a difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://g.page/r/CdrwD2SVrLO7EAI/review"
              className="inline-flex items-center gap-3 bg-yellow-400 text-gray-900 px-8 py-4 rounded-full hover:bg-yellow-300 transition-all font-bold text-lg shadow-2xl hover:shadow-3xl"
            >
              <ThumbsUp className="h-6 w-6" />
              Write a Review on Google
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-gray-900 transition-all font-bold text-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
