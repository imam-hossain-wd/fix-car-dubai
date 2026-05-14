'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import Image from 'next/image'
import Link from 'next/link'
import { SiteConfig } from '@/config/site'
import { homebanner } from '@/utils/assets'

export default function HomeBanner() {

  const { numberCallLink, displayNumber } = SiteConfig;

  const { homebanner1, homebanner2, homebanner3 } = homebanner;

  const bannerSlides = [
    {
      id: 1,
      title: "Emergency Mobile Car Repair & Auto Service in Dubai",
      subtitle: "Professional Onsite Mechanic & Garage-Level Car Repair",
      description: "24/7 emergency car repair and professional onsite mechanic service anywhere in Dubai.",
      alt: "Emergency mobile car repair and professional onsite mechanic service in Dubai",
      image: homebanner1,
      ctaText: "Book Appointment",
      ctaLink: "/dubai/book-appointment"
    },
    {
      id: 2,
      title: "Professional Car Repair Services & Brake Service in Dubai",
      subtitle: "Trusted Car Mechanic for Safe & Affordable Auto Repair",
      description: "Expert brake repair and complete car service by a professional mechanic in Dubai.",
      alt: "Professional car repair and brake auto repair service in Dubai garage",
      image: homebanner2,
      ctaText: "View Services",
      ctaLink: "/dubai/services"
    },
    {
      id: 3,
      title: "24/7 Emergency Car Repair & Onsite Mechanic in Dubai",
      subtitle: "Fast, Urgent Roadside Assistance & Mobile Garage Support",
      description: "Urgent auto repair and car mechanic support across Dubai, anytime you need.",
      alt: "24/7 emergency car repair and urgent onsite mechanic service in Dubai",
      image: homebanner3,
      ctaText: `Call Now: ${displayNumber}`,
      ctaLink: numberCallLink
    }
  ];


  return (
    <div className="relative w-full h-screen max-h-[500px]">

      {/* ✅ H1 ONLY ONCE */}
      <div className="w-full absolute top-24 left-1/2 mb-5 -translate-x-1/2 z-30 text-center px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-white max-w-4xl mx-auto">
          {/* 24/7 Car Repair & Emergancy Auto Mobile Mechanic Service Dubai */}
          24/7 Car Repair & Emergency Mobile Mechanic Service in Dubai
        </h1>
      </div>

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

              <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
              {/* <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover"
                priority
              /> */}

              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                placeholder="blur"
                priority={slide.id === 1}
                loading={slide.id === 1 ? "eager" : "lazy"}
                sizes="100vw"
                className="object-cover"
              />

              {/* Content */}
              <div className="relative z-20 flex items-center justify-center h-full px-4">
                <div className="max-w-4xl mx-auto text-center text-white">

                  {/* Only subtitles & descriptions inside slider */}
                  <h2 className="text-lg md:text-xl mb-5 mt-20 font-semibold md:mt-8 text-amber-500">
                    {slide.subtitle}
                  </h2>

                  {/* <p className="text-sm md:text-lg mb-5 max-w-2xl mx-auto text-slate-200">
                    {slide.description}
                  </p> */}

                  <div>
                    <Link
                      href={slide.ctaLink}
                      className="inline-block -mb-20 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-8 rounded-lg text-md transition-all duration-300 transform hover:scale-105 shadow-lg"
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
    </div>
  )
}
