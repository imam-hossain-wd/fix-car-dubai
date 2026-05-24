// // src/components/view/ServiceAreaHomeBanner/ServiceAreaHomeBanner.jsx

// "use client";

// import Image from "next/image";
// import Link from "next/link";

// import {
//   Phone,
//   MessageCircle,
//   Clock3,
//   Star,
//   ShieldCheck,
//   MapPin,
// } from "lucide-react";

// import { SiteConfig } from "@/config/site";
// import { homebanner } from "@/utils/assets";

// export function ServiceAreaHomeBanner({
//   area,
// }) {
//   return (
//     <section className="relative overflow-hidden">

//       {/* Background Overlay */}
//       <div className="absolute inset-0 bg-black/60 z-10" />

//       {/* Background Image */}
//       <div className="absolute inset-0">
//         <Image
//           src={homebanner?.homebanner1}
//           alt="best car repair service in al karama"
//           fill
//           priority
//           className="object-cover"
//         />
//       </div>

//       {/* Gradient Blur */}
//       <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/60 to-black/30 z-10" />

//       {/* Content */}
//       <div className="container relative z-20 py-24 lg:py-36">

//         <div className="max-w-4xl">

//           {/* Badge */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md mb-6">

//             <ShieldCheck className="size-4 text-primary" />

//             <span className="text-sm font-medium text-white">
//               {area?.hero?.badge}
//             </span>
//           </div>

//           {/* Heading */}
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">

//             {area?.hero?.title}
//           </h1>

//           {/* Subtitle */}
//           <p className="mt-6 text-lg md:text-xl leading-8 text-gray-200 max-w-3xl">

//             {area?.hero?.subtitle}
//           </p>

//           {/* Landmark Chips */}
//           <div className="mt-8 flex flex-wrap gap-3">

//             {area?.landmarks
//               ?.slice(0, 4)
//               ?.map((landmark) => (
//                 <div
//                   key={landmark?.name}
//                   className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-2 backdrop-blur-md"
//                 >
//                   <MapPin className="size-4 text-primary" />

//                   <span className="text-sm text-white">
//                     {landmark?.name}
//                   </span>
//                 </div>
//               ))}
//           </div>

//           {/* CTA Buttons */}
//           <div className="mt-10 flex flex-col sm:flex-row gap-4">

//             {/* Call Button */}
//             <Link
//               href={SiteConfig?.numberCallLink}
//               className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-4 text-lg font-semibold text-black hover:scale-[1.02] transition-all duration-300 shadow-2xl"
//             >
//               <Phone className="size-5" />

//               {area?.hero?.ctaPrimary}
//             </Link>

//             {/* WhatsApp Button */}
//             <Link
//               href={SiteConfig?.whatsappCallLink}
//               target="_blank"
//               className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300"
//             >
//               <MessageCircle className="size-5" />

//               {area?.hero?.ctaSecondary}
//             </Link>
//           </div>

//           {/* Stats */}
//           <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl">

//             {area?.hero?.stats?.map((item) => (
//               <div
//                 key={item?.label}
//                 className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-md p-6"
//               >
//                 <div className="flex items-center gap-2 mb-3">

//                   {item?.label ===
//                     "Response Time" ? (
//                     <Clock3 className="size-5 text-primary" />
//                   ) : (
//                     <Star className="size-5 text-primary fill-primary" />
//                   )}

//                   <span className="text-sm text-gray-300">
//                     {item?.label}
//                   </span>
//                 </div>

//                 <h3 className="text-3xl font-bold text-white">
//                   {item?.value}
//                 </h3>
//               </div>
//             ))}
//           </div>

//           {/* SEO Content */}
//           <div className="mt-14 max-w-4xl">

//             <p className="text-base md:text-lg leading-8 text-gray-300">

//               Our professional mobile mechanics provide fast and reliable
//               emergency roadside assistance, car battery replacement,
//               jump start, diagnostics, car AC repair, oil change,
//               brake repair, and on-site auto maintenance across{" "}

//               <span className="font-semibold text-white">
//                 {area?.name}
//               </span>{" "}

//               Dubai. Whether your vehicle breaks down near{" "}

//               <span className="font-semibold text-primary">
//                 {area?.landmarks?.[0]?.name}
//               </span>{" "}

//               or inside residential basement parking areas,
//               our technicians arrive quickly with advanced tools
//               and genuine replacement parts.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
//     </section>
//   );
// }

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
  Award,
  Zap,
  Wrench,
} from "lucide-react";

import { SiteConfig } from "@/config/site";
import { homebanner } from "@/utils/assets";

export function ServiceAreaHomeBanner({ area }) {
  // Helper function to format phone number for display
  const formatPhoneNumber = (number) => {
    if (!number) return "";
    return number.replace(/(\d{2})(\d{3})(\d{4})/, "+$1 $2 $3");
  };

  return (
    <section className="relative w-full bg-gray-900">
      {/* Background Image Container */}
      <div className="relative w-full min-h-[700px] md:min-h-[800px] lg:min-h-[900px] overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={homebanner?.homebanner1 || "/images/hero-banner-default.jpg"}
            alt={`Professional mobile car repair and emergency roadside assistance service in ${area?.name} Dubai`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* Dark Gradient Overlay - Professional & Readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/70" />

        {/* Secondary Gradient for Depth */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-transparent to-transparent opacity-60" />

        {/* Main Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="min-h-175 md:min-h-200 lg:min-h-225 flex flex-col justify-center">
            <div className="max-w-4xl">

              {/* Trust Badge - Top Indicator */}
              <div className="mb-3">
                <div className="inline-flex items-center gap-2.5 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-gray-200 tracking-wide">
                    {area?.hero?.badge || "24/7 Emergency Mobile Mechanic"}
                  </span>
                  <div className="w-1 h-1 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-400">
                    Google Verified
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight lg:leading-tight">
                {area?.hero?.title ||
                  `24/7 Car Repair & Mobile Mechanic Service in ${area?.name} Dubai`
                }
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-3 text-base md:text-lg text-gray-300 leading-relaxed max-w-3xl">
                {area?.hero?.subtitle ||
                  `Professional on-site car repair, emergency battery replacement, roadside assistance, diagnostics, AC repair, oil change, brake service, and mobile mechanic support across ${area?.name}.`
                }
              </p>

              {/* Key Landmarks / Service Areas Chips */}
              {area?.nearbyLandmarksSection?.landmarks?.length > 0 && (
                <div className="mt-8">
                  <p className="text-sm font-medium text-gray-400 mb-3 uppercase tracking-wide">
                    Service Coverage Areas
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    {area?.nearbyLandmarksSection?.landmarks
                      ?.slice(0, 5)
                      ?.map((landmark, idx) => (
                        <div
                          key={idx}
                          className="inline-flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-full px-3.5 py-1.5"
                        >
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                          <span className="text-xs sm:text-sm text-gray-300">
                            {landmark?.name}
                          </span>
                        </div>
                      ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons Section */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {/* Primary Call Button */}
                <Link
                  href={SiteConfig?.numberCallLink || "tel:+971501234567"}
                  className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-gray-900 font-bold text-base sm:text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-xl"
                  aria-label={`Call ${area?.name} mobile mechanic - 24/7 emergency service`}
                >
                  <Phone className="w-5 h-5" />
                  {area?.hero?.ctaPrimary || "Call Mobile Mechanic"}
                  <span className="text-xs font-normal text-gray-800/70 ml-1 hidden sm:inline">
                    {formatPhoneNumber(SiteConfig?.displayNumber)}
                  </span>
                </Link>

                {/* Secondary WhatsApp Button */}
                <Link
                  href={SiteConfig?.whatsappCallLink || "https://wa.me/971501234567"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:bg-gray-700 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-xl transition-colors duration-200"
                  aria-label={`WhatsApp ${area?.name} mobile mechanic for emergency car repair`}
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  {area?.hero?.ctaSecondary || "WhatsApp Now"}
                </Link>
              </div>

              {/* Trust Indicators / Stats Grid */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
                {area?.hero?.stats?.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {stat?.label === "Response Time" && (
                        <Clock3 className="w-4 h-4 text-primary" />
                      )}
                      {stat?.label === "Customer Rating" && (
                        <Star className="w-4 h-4 text-primary fill-primary" />
                      )}
                      {stat?.label === "Emergency Support" && (
                        <Zap className="w-4 h-4 text-primary" />
                      )}
                      {stat?.label === "Satisfaction Rate" && (
                        <Award className="w-4 h-4 text-primary" />
                      )}
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {stat?.label}
                      </span>
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      {stat?.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* SEO-Friendly Service Description */}
              <div className="mt-10 pt-4 border-t border-gray-800 max-w-3xl">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <span className="font-semibold text-gray-300">📍 Service Area:</span>{" "}
                  Our professional mobile mechanics provide fast and reliable
                  emergency roadside assistance, car battery replacement,
                  jump start services, vehicle diagnostics, car AC repair,
                  oil change, brake repair, and on-site auto maintenance across{" "}
                  <strong className="text-white">{area?.name}</strong>, Dubai.
                  {area?.nearbyLandmarksSection?.landmarks?.[0]?.name && (
                    <> Whether you're near <strong className="text-primary">
                      {area?.nearbyLandmarksSection?.landmarks[0]?.name}
                    </strong> or inside residential basement parking,</>
                  )}{" "}
                  our certified technicians arrive quickly with advanced diagnostic
                  tools and genuine replacement parts. Available 24 hours a day,
                  7 days a week for all vehicle makes and models.
                </p>
              </div>

              {/* Schema.org Geo Coordinates (Hidden but present for SEO) */}
              {area?.coordinates && (
                <div className="hidden" aria-hidden="true">
                  <span itemProp="latitude">{area.coordinates.lat}</span>
                  <span itemProp="longitude">{area.coordinates.lng}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}