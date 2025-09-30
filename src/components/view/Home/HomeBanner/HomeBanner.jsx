'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'
import { SiteConfig } from '@/config/site'




export default function HomeBanner() {


  const {
    numberCallLink, displayNumber
  } = SiteConfig;



  const bannerSlides = [
    {
      id: 1,
      title: "Premium Car Service & Repair",
      subtitle: "Expert mechanics with over 15 years of experience",
      description: "We provide top-quality service for all car makes and models with a 12-month warranty on all repairs.",
      image: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?_gl=1*w1tjmz*_ga*NTEwNDIzNzA4LjE3NTI5Mzg5Mjg.*_ga_8JE65Q40S6*czE3NTU3OTM3MzIkbzYkZzEkdDE3NTU3OTM3NzMkajE5JGwwJGgw",
      ctaText: "Book Appointment",
      ctaLink: "/dubai/book-appointment"
    },
    {
      id: 2,
      title: "Brake Service Special",
      subtitle: "20% Off All Brake Services This Month",
      description: "Ensure your safety on the road with our professional brake inspection and repair services.",
      image: "https://images.pexels.com/photos/4116230/pexels-photo-4116230.jpeg?_gl=1*1mrv04*_ga*NTEwNDIzNzA4LjE3NTI5Mzg5Mjg.*_ga_8JE65Q40S6*czE3NTU3OTM3MzIkbzYkZzEkdDE3NTU3OTM3NTMkajM5JGwwJGgw",
      ctaText: "View Services",
      ctaLink: "/dubai/services"
    },
    {
      id: 3,
      title: "24/7 Emergency Towing",
      subtitle: "Fast response times across the city",
      description: "Broken down? Our team will come to you quickly and get you back on the road.",
      image: "https://images.pexels.com/photos/4489704/pexels-photo-4489704.jpeg?_gl=1*tohyt1*_ga*NTEwNDIzNzA4LjE3NTI5Mzg5Mjg.*_ga_8JE65Q40S6*czE3NTU3OTM3MzIkbzYkZzEkdDE3NTU3OTM3OTgkajYwJGwwJGgw",
      ctaText: `Call Now: ${displayNumber}`,
      ctaLink: numberCallLink
    }
  ];



  return (
    <div className="relative w-full h-screen max-h-[500px]">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="background-color: #f59e0b;"></span>`;
          },
        }}
        loop={true}
        className="h-full"
      >
        {bannerSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[90%]">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority
              />

              {/* Content */}
              <div className="relative z-20 flex items-center justify-center h-full px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-amber-500 animate-fade-in-delay">
                    {slide.subtitle}
                  </h2>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-slate-200 animate-fade-in-delay-2">
                    {slide.description}
                  </p>
                  <div className="animate-fade-in-delay-3">
                    <Link
                      href={slide.ctaLink}
                      className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      {slide.ctaText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom navigation arrows */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-12">
        <button className="home-banner-prev bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-amber-500 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="home-banner-next bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-amber-500 transition-all duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div> */}
    </div>
  )
}