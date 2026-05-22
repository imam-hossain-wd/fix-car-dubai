'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';
import Image from 'next/image';
import { Battery, Zap, Shield, Clock, Award, Star } from 'lucide-react';
import { batteryBrands as batteryBrandImages } from '@/utils/assets';

export function BatteryBrands() {
  const batteryBrands = [
    { name: "Amaron", origin: "India", description: "Premium automotive batteries", image: batteryBrandImages.amaron },
    { name: "Varta", origin: "Germany", description: "German engineering excellence", image: batteryBrandImages.varta },
    { name: "Bosch", origin: "Germany", description: "World-leading technology", image: batteryBrandImages.bosch },
    { name: "ACDelco", origin: "USA", description: "American reliability", image: batteryBrandImages.acDelco },
    { name: "Optima", origin: "USA", description: "Spiral cell technology", image: batteryBrandImages.optimaBlue },
    { name: "Solite", origin: "Korea", description: "Value performance", image: batteryBrandImages.solite },
    { name: "Delkor", origin: "Korea", description: "Premium Korean quality", image: batteryBrandImages.deta },
    { name: "Rocket", origin: "Korea", description: "Reliable everyday choice", image: batteryBrandImages.sbk },
    { name: "Panasonic", origin: "Japan", description: "Japanese precision", image: batteryBrandImages.panasonic },
    { name: "Exide", origin: "India", description: "Global power leader", image: batteryBrandImages.exide },
    { name: "Odyssey", origin: "USA", description: "Extreme performance", image: batteryBrandImages.optimaYellow },
    { name: "GS Yuasa", origin: "Japan", description: "Japanese technology", image: batteryBrandImages.fiamm },
    { name: "Hankook", origin: "Korea", description: "Korean innovation", image: batteryBrandImages.forgo },
    { name: "Kays", origin: "UAE", description: "Local trusted brand", image: batteryBrandImages.kays },
    { name: "Zeetex", origin: "Germany", description: "German value", image: batteryBrandImages.zeetex },
    { name: "Duracell", origin: "USA", description: "Trusted power", image: batteryBrandImages.duracell },
    { name: "Energizer", origin: "USA", description: "Long-lasting energy", image: batteryBrandImages.energizer },
    { name: "Furukawa Battery", origin: "Japan", description: "Japanese expertise", image: batteryBrandImages.tuflong },
    { name: "Global", origin: "UAE", description: "Regional favorite", image: batteryBrandImages.globatt },
    { name: "Eveready", origin: "USA", description: "Household name", image: batteryBrandImages.eveready },
  ];

  return (
    <section className="relative py-8 overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-medium mb-3">
            <Battery className="h-3 w-3" />
            PREMIUM BRANDS
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Battery Brands <span className="text-primary">We Supply</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            20+ world-renowned manufacturers for every vehicle need
          </p>
        </div>

        {/* Brands Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.brands-pagination' }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 2 },
              640: { slidesPerView: 2.2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="overflow-visible!"
          >
            {batteryBrands.map((brand, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 h-full relative group">


                  <div className="absolute top-3 right-3 bg-linear-to-r from-primary to-primary/80 text-white px-2 py-0.5 rounded-full text-[9px] font-bold z-10 shadow-md">
                    PREMIUM
                  </div>

                  <div className="p-4 text-center">
                    {/* Brand Image */}
                    <div className="w-20 h-20 mx-auto mb-3 flex items-center justify-center">
                      <Image
                        src={brand.image}
                        alt={`${brand.name} car battery`}
                        width={80}
                        height={80}
                        className="object-contain w-full h-full"
                      />
                    </div>

                    {/* Brand Name */}
                    <h3 className="text-base font-bold tracking-tight text-gray-800">
                      {brand.name === "Furukawa Battery" ? "Furukawa" : brand.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[11px] text-gray-500 mt-1 line-clamp-1">
                      {brand.description}
                    </p>

                    {/* Origin Badge */}
                    <div className="mt-2">
                      <span className="inline-block text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100">
                        {brand.origin}
                      </span>
                    </div>
                  </div>

                  {/* Bottom accent for premium */}
                  {brand.premium && (
                    <div className="h-0.5 bg-linear-to-r from-primary/50 via-primary to-primary/50"></div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-4 border-t border-gray-100">
          {[
            { icon: Shield, label: "100% Genuine", desc: "Manufacturer warranty" },
            { icon: Award, label: "Expert Selection", desc: "Tested for Dubai" },
            { icon: Zap, label: "Free Installation", desc: "On-site replacement" },
            { icon: Clock, label: "24/7 Support", desc: "Emergency service" }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{item.label}</p>
                <p className="text-xs text-gray-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <Link
            href="/dubai/book-appointment"
            className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-2.5 rounded-full text-sm shadow-md hover:bg-primary/90 transition-all"
          >
            Need a Battery?
            <Zap className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        .brands-bullet {
          width: 6px;
          height: 6px;
          background: #D1D5DB;
          border-radius: 3px;
          margin: 0 3px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .brands-bullet-active {
          width: 20px;
          background: #00963B;
        }
      `}</style>
    </section>
  );
}