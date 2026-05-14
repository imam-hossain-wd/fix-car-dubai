'use client'

import React from 'react';
import { Star, ChevronRight, Check, ThumbsUp, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { reviews } from '@/constants/reviewdata';
import { Button } from '@/components/ui/button';
import { google } from '@/utils/assets';

const { googleLogo, googleTextIcon, googleVerifiedBadge } = google;

export default function Reviews() {
  return (
    <section className="relative py-8 overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Header Section - Compact */}
        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Loved by <span className="text-primary">Car Owners</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by Dubai's drivers
          </p>
        </div>

        {/* Rating Summary - Compact */}
        <div className="bg-gradient-to-r from-gray-900 to-primary rounded-2xl p-5 text-white shadow-xl mb-8 w-[50%] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Left */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                <Image
                  src={googleTextIcon}
                  alt="Google Reviews"
                  width={75}
                  height={30}
                  className="w-[75px] h-auto"
                />
                <span className="font-semibold text-lg">Reviews</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-2xl font-bold">5.0</span>

                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <span className="text-sm text-white/70">(52)</span>
              </div>
            </div>

            {/* Right */}
            <Link
              href="https://g.page/r/CdrwD2SVrLO7EAI/review" target='_blank'
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-5 py-2 rounded-full text-sm font-semibold shadow-md"
            >
              <ThumbsUp className="h-4 w-4" />
              Review on Google
            </Link>
          </div>
        </div>

        {/* Reviews Carousel - Compact Cards */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.reviews-pagination' }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!overflow-visible"
          >
            {reviews.slice(0, 6).map((review, i) => (
              <SwiperSlide key={i}>
                <Card className="h-full border-0 bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="absolute top-3 right-3 bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-medium">
                    {review.service}
                  </div>

                  <CardHeader className="pb-0 pt-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-gradient-to-br from-primary to-green-600 rounded-xl w-10 h-10 flex items-center justify-center text-white font-bold text-sm shadow-md">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className='flex items-center gap-1'>
                          <h3 className="text-sm font-semibold">{review.name}</h3>
                          <Image
                            src={googleVerifiedBadge}
                            alt="Verified"
                            width={16}
                            height={16}
                            className="w-4 h-4"
                          />
                        </div>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-2 px-4 pb-4">
                    <div className="flex gap-0.5 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-3 w-3 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3">
                      &quot;{review.comment}&quot;
                    </p>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                      <span className="inline-flex items-center gap-1 text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                        <Check className="w-2 h-2" />
                        Verified
                      </span>
                      <button className="text-primary text-xs font-medium flex items-center gap-0.5">
                        Read
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="reviews-pagination flex justify-center gap-1.5 mt-6"></div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Button size="default" className="rounded-full gap-2 text-sm px-6" asChild>
            <Link href="/dubai/reviews">
              All Reviews
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <style jsx>{`
        .reviews-bullet {
          width: 6px;
          height: 6px;
          background: #D1D5DB;
          border-radius: 3px;
          margin: 0 3px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .reviews-bullet-active {
          width: 20px;
          background: #00963B;
        }
      `}</style>
    </section>
  );
}