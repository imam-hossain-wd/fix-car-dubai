'use client'

import React, { useState, useMemo } from 'react';
import { Star, Search, Calendar, ThumbsUp, Share, ChevronDown, ChevronUp, Quote, Sparkles, Check, Heart, Filter, X, TrendingUp, Clock, Award, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Image from 'next/image';
import Link from 'next/link';
import { google } from '@/utils/assets';
import { reviews } from '@/data/review';

const { googleTextIcon, googleVerifiedBadge } = google;

export default function ReviewPages() {
  const [searchTerm, setSearchTerm] = useState('');
  const [ratingFilter, setRatingFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [expandedReview, setExpandedReview] = useState(null);

  // Filter and sort reviews
  const filteredReviews = useMemo(() => {
    let filtered = [...reviews];

    if (searchTerm) {
      filtered = filtered.filter(review =>
        review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.comment.toLowerCase().includes(searchTerm.toLowerCase()) ||
        review.service.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (ratingFilter !== 'all') {
      filtered = filtered.filter(review => review.rating === parseInt(ratingFilter));
    }

    if (serviceFilter !== 'all') {
      filtered = filtered.filter(review => review.service === serviceFilter);
    }

    switch (sortBy) {
      case 'newest':
        filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case 'oldest':
        filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case 'highest':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'lowest':
        filtered.sort((a, b) => a.rating - b.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchTerm, ratingFilter, serviceFilter, sortBy]);

  const services = useMemo(() => [...new Set(reviews.map(review => review.service))], []);

  const ratingStats = useMemo(() => {
    const total = reviews.length;
    const average = reviews.reduce((sum, review) => sum + review.rating, 0) / total;
    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    reviews.forEach(review => { distribution[review.rating]++; });
    return { total, average: average.toFixed(1), distribution };
  }, []);

  const toggleReviewExpansion = (index) => {
    setExpandedReview(expandedReview === index ? null : index);
  };

  const shareReview = async (review) => {
    const text = `⭐ ${review.rating}/5 - ${review.name}\n"${review.comment.substring(0, 100)}..."\nService: ${review.service}`;
    if (navigator.share) {
      try { await navigator.share({ title: 'Car Service Review', text, url: window.location.href }); } 
      catch (error) { navigator.clipboard.writeText(text); }
    } else { navigator.clipboard.writeText(text); }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setRatingFilter('all');
    setServiceFilter('all');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Professional */}
      <section className="bg-gray-900 text-white border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-7xl py-16 md:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              CUSTOMER TESTIMONIALS
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              What Our{' '}
              <span className="text-primary">
                Customers
              </span>{' '}
              Say
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Real experiences from car owners who trusted Fix Car Dubai with their vehicles
            </p>

            {/* Rating Summary Card */}
            <div className="bg-gray-800 rounded-2xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                    <Image src={googleTextIcon} alt="Google" width={100} height={32} className="w-28 h-auto brightness-0 invert" />
                    <span className="text-2xl font-bold">Reviews</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-4 mb-2">
                    <span className="text-5xl font-bold text-primary">{ratingStats.average}</span>
                    <div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < Math.floor(ratingStats.average) ? 'fill-primary text-primary' : 'text-gray-600'}`} />
                        ))}
                      </div>
                      <p className="text-gray-400 text-sm mt-1">Based on {ratingStats.total} reviews</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center gap-3">
                      <span className="text-sm w-4 text-gray-300">{rating}</span>
                      <div className="flex-1 bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(ratingStats.distribution[rating] / ratingStats.total) * 100}%` }}
                        />
                      </div>
                      <span className="text-gray-400 text-sm w-8 text-right">
                        {ratingStats.distribution[rating]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Clean Metrics */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, label: "Happy Customers", value: "5,000+", color: "text-primary", bg: "bg-primary/10" },
              { icon: Award, label: "5-Star Reviews", value: `${(ratingStats.distribution[5] / ratingStats.total * 100).toFixed(0)}%`, color: "text-primary", bg: "bg-primary/10" },
              { icon: TrendingUp, label: "Satisfaction Rate", value: "98%", color: "text-primary", bg: "bg-primary/10" },
              { icon: Clock, label: "Years of Excellence", value: "11+", color: "text-primary", bg: "bg-primary/10" }
            ].map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50/30">
                <div className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Section - Sticky & Functional */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search reviews..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 rounded-lg border-gray-200 focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div className="flex gap-3">
              <Select value={ratingFilter} onValueChange={setRatingFilter}>
                <SelectTrigger className="h-11 rounded-lg w-32 border-gray-200">
                  <SelectValue placeholder="Rating" />
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

              <Select value={serviceFilter} onValueChange={setServiceFilter}>
                <SelectTrigger className="h-11 rounded-lg w-36 border-gray-200">
                  <SelectValue placeholder="Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Services</SelectItem>
                  {services.map(service => (
                    <SelectItem key={service} value={service}>{service}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="h-11 rounded-lg w-32 border-gray-200">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="highest">Highest Rated</SelectItem>
                  <SelectItem value="lowest">Lowest Rated</SelectItem>
                </SelectContent>
              </Select>

              {(searchTerm || ratingFilter !== 'all' || serviceFilter !== 'all') && (
                <Button
                  variant="outline"
                  onClick={clearFilters}
                  className="h-11 px-4 rounded-lg border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-12 bg-gray-50/30">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Results Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              <p className="text-gray-600">
                Showing <span className="font-semibold text-gray-900">{filteredReviews.length}</span> of{' '}
                <span className="font-semibold text-gray-900">{reviews.length}</span> reviews
              </p>
            </div>
            
            <Link
              href="https://g.page/r/CdrwD2SVrLO7EAI/review"
              target="_blank"
              className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm"
            >
              <ThumbsUp className="h-4 w-4" />
              Write a Review
              <ExternalLink className="h-3 w-3" />
            </Link>
          </div>

          {/* Reviews Grid */}
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredReviews.map((review, index) => (
                <Card key={index} className="h-full border border-gray-200 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  {/* Service Badge */}
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary px-2.5 py-1 rounded-full text-xs font-medium">
                    {review.service}
                  </div>

                  <CardHeader className="pb-0 pt-6 px-6">
                    <div className="flex items-start gap-3">
                      <div className="relative flex-shrink-0">
                        <div className="bg-gradient-to-br from-primary to-green-600 rounded-xl w-11 h-11 flex items-center justify-center text-white font-bold text-base shadow-sm">
                          {review.name.charAt(0)}
                        </div>
                        {review.isGoogleReview && (
                          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                            <Image src={googleVerifiedBadge} alt="Verified" width={14} height={14} className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="text-base font-bold text-gray-900 truncate">{review.name}</h3>
                          <Image src={googleVerifiedBadge} alt="Google Verified" width={16} height={16} className="w-4 h-4 flex-shrink-0" />
                        </div>
                        <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-0.5">
                          <Calendar className="w-3 h-3" />
                          <span>{review.date}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-4 px-6 pb-6">
                    {/* Rating Stars */}
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < review.rating ? 'fill-primary text-primary' : 'text-gray-200'}`}
                        />
                      ))}
                    </div>

                    {/* Review Text */}
                    <div className="relative">
                      <Quote className="absolute -top-1 -left-1 w-5 h-5 text-primary/10 rotate-180" />
                      <p className={`text-gray-600 text-sm leading-relaxed relative z-10 ${expandedReview === index ? '' : 'line-clamp-3'}`}>
                        &quot;{review.comment}&quot;
                      </p>
                    </div>

                    {review.comment.length > 120 && (
                      <button
                        onClick={() => toggleReviewExpansion(index)}
                        className="text-primary text-xs font-medium flex items-center gap-1 mt-3 hover:text-primary/80 transition-colors"
                      >
                        {expandedReview === index ? (
                          <>Show less <ChevronUp className="w-3 h-3" /></>
                        ) : (
                          <>Read more <ChevronDown className="w-3 h-3" /></>
                        )}
                      </button>
                    )}

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-1.5 text-[11px] bg-green-50 text-green-700 px-2.5 py-1 rounded-md font-medium">
                        <Check className="w-3 h-3" />
                        Verified
                      </span>
                      <button
                        onClick={() => shareReview(review)}
                        className="p-1.5 text-gray-400 hover:text-primary transition-colors rounded-md hover:bg-gray-50"
                        title="Share review"
                      >
                        <Share className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No reviews found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your search or filters</p>
              <Button onClick={clearFilters} variant="outline" className="rounded-lg">
                Clear all filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredReviews.length > 0 && filteredReviews.length < reviews.length && (
            <div className="text-center mt-10">
              <Button variant="outline" size="lg" className="rounded-lg px-8 border-gray-300 hover:bg-gray-50">
                Load More Reviews
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section - Professional */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <Heart className="w-12 h-12 text-primary mx-auto mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Share Your Experience
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Help other car owners make the right choice. Your honest review makes a difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://g.page/r/CdrwD2SVrLO7EAI/review"
              target="_blank"
              className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
            >
              <ThumbsUp className="h-5 w-5" />
              Write a Review on Google
            </Link>
            <Link
              href="/dubai/services"
              className="inline-flex items-center gap-2 border border-gray-600 text-gray-300 px-7 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition-colors font-semibold"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}