// src/components/view/ServiceAreaHomeBanner/ServiceAreaHomeBanner.jsx

"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Phone,
  MessageCircle,
  Clock3,
  Star,
  ShieldCheck,
  MapPin,
} from "lucide-react";

import { SiteConfig } from "@/config/site";
import { homebanner } from "@/utils/assets";

export function ServiceAreaHomeBanner({
  area,
}) {
  return (
    <section className="relative overflow-hidden">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={homebanner?.homebanner1}
          alt="best car repair service in al karama"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Gradient Blur */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30 z-10" />

      {/* Content */}
      <div className="container relative z-20 py-24 lg:py-36">

        <div className="max-w-4xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md mb-6">

            <ShieldCheck className="size-4 text-primary" />

            <span className="text-sm font-medium text-white">
              {area?.hero?.badge}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">

            {area?.hero?.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200 max-w-3xl">

            {area?.hero?.subtitle}
          </p>

          {/* Landmark Chips */}
          <div className="mt-8 flex flex-wrap gap-3">

            {area?.landmarks
              ?.slice(0, 4)
              ?.map((landmark) => (
                <div
                  key={landmark?.name}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 backdrop-blur-md"
                >
                  <MapPin className="size-4 text-primary" />

                  <span className="text-sm text-white">
                    {landmark?.name}
                  </span>
                </div>
              ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            {/* Call Button */}
            <Link
              href={SiteConfig?.numberCallLink}
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-black hover:scale-[1.02] transition-all duration-300 shadow-2xl"
            >
              <Phone className="size-5" />

              {area?.hero?.ctaPrimary}
            </Link>

            {/* WhatsApp Button */}
            <Link
              href={SiteConfig?.whatsappCallLink}
              target="_blank"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300"
            >
              <MessageCircle className="size-5" />

              {area?.hero?.ctaSecondary}
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl">

            {area?.hero?.stats?.map((item) => (
              <div
                key={item?.label}
                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6"
              >
                <div className="flex items-center gap-2 mb-3">

                  {item?.label ===
                    "Response Time" ? (
                    <Clock3 className="size-5 text-primary" />
                  ) : (
                    <Star className="size-5 text-primary fill-primary" />
                  )}

                  <span className="text-sm text-gray-300">
                    {item?.label}
                  </span>
                </div>

                <h3 className="text-3xl font-bold text-white">
                  {item?.value}
                </h3>
              </div>
            ))}
          </div>

          {/* SEO Content */}
          <div className="mt-14 max-w-4xl">

            <p className="text-base md:text-lg leading-8 text-gray-300">

              Our professional mobile mechanics provide fast and reliable
              emergency roadside assistance, car battery replacement,
              jump start, diagnostics, car AC repair, oil change,
              brake repair, and on-site auto maintenance across{" "}

              <span className="font-semibold text-white">
                {area?.name}
              </span>{" "}

              Dubai. Whether your vehicle breaks down near{" "}

              <span className="font-semibold text-primary">
                {area?.landmarks?.[0]?.name}
              </span>{" "}

              or inside residential basement parking areas,
              our technicians arrive quickly with advanced tools
              and genuine replacement parts.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}