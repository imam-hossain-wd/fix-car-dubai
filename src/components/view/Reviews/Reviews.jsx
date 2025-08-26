// 'use client'

// import React from 'react';
// import { Star, ChevronRight, Check } from 'lucide-react';
// import { Card, CardContent, CardHeader } from '@/components/ui/card';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import Image from 'next/image';
// import googleLogo from '../../../assets/googleLogo.png'
// import googleVerifiedBadge from '../../../assets/googleVerifiedBadge.png'
// import googleTextIcon from '../../../assets/googleTextIcon.png'
// import Link from 'next/link';

// const reviews = [
//   {
//     name: "Ahmed K.",
//     rating: 5,
//     comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
//     date: "2 days ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Sarah M.",
//     rating: 5,
//     comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
//     date: "1 week ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Rajiv P.",
//     rating: 4,
//     comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
//     date: "3 weeks ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Fatima L.",
//     rating: 5,
//     comment: "Fast and transparent service. Explained everything clearly before starting the repair.",
//     date: "5 days ago",
//     isGoogleReview: true
//   },
//   {
//     name: "Omar H.",
//     rating: 4,
//     comment: "Convenient on-site service, but a bit pricey compared to local garages. Still worth it for emergencies.",
//     date: "2 weeks ago",
//     isGoogleReview: true
//   }
// ];

// export default function Reviews() {
//   return (
//     <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
//       <div className="w-container md:w-[90%] mx-auto px-4 max-w-7xl ">
//         <div className='mb-2'>

//           <div className='text-center'>
//             <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.5rem] mb-2">
//               Customer Reviews
//             </h2>
//             <h3 className="text-xl text-gray-600 mb-3">What Our Customers Say</h3>

//           </div>

//           <div className='w-full md:w-[70%] mx-auto mb-4 px-1 md:px-10 flex rounded justify-between items-center bg-gray-100 p-2 '>
//             <div>
//               <div className='flex gap-1 items-center'>
//                 <Image
//                   src={googleTextIcon}
//                   alt="Google"
//                   width={1000}
//                   height={1000}
//                   quality={100}
//                   className="w-20 h-8 md:w-24 md:h-10"
//                 />
//                 <span className='font-bold text-sm md:text-[20px]'> Reviews</span>


//               </div>
//               <div className="flex items-center gap-1 mt-1 px-1">
//                 <span className="text-[16px] md:text-[22px] font-bold mr-1">4.9</span>
//                 <div className="flex">
//                   {[...Array(5)].map((_, i) => (
//                     <Star key={i} className="h-4 w-4 md:h-6 md:w-6 fill-yellow-400 text-yellow-500" />
//                   ))}
//                 </div>
//                 <span className="text-gray-600 text-md">(52)</span>
//               </div>
//             </div>

//             <div className="text-center">
//               <button className="bg-primary hover:bg-green-600 text-white px-4 md:px-6 py-2 rounded-full text-[13px] md:text-lg font-medium transition-colors">
//                <Link href="https://g.page/r/CdrwD2SVrLO7EAI/review">
//                 Review us on Google</Link>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="relative">
//           <Swiper
//             modules={[Autoplay, Pagination]}
//             autoplay={{
//               delay: 5000,
//               disableOnInteraction: false,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             loop={true}
//             spaceBetween={30}
//             slidesPerView={1}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1.2,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//           >
//             {reviews.map((review, i) => (
//               <SwiperSlide key={i}>
//                 <Card className="h-full border border-gray-200/70 bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
//                   <CardHeader className="pb-0">
//                     <div className="flex justify-between items-start gap-4">
//                       <div className="flex items-center gap-3">
//                         <div className="relative">
//                           <div className="bg-gradient-to-br from-primary to-green-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-medium">
//                             {review.name.charAt(0)}
//                           </div>
//                           {review.isGoogleReview && (
//                             <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
//                               <Image
//                                 src={googleLogo}
//                                 alt="Google Verified"
//                                 width={14}
//                                 height={14}
//                                 className="w-3.5 h-3.5"
//                               />
//                             </div>
//                           )}
//                         </div>
//                         <div>
//                           <div className='flex justify-center items-center gap-1'>
//                             <h3 className="text-base font-semibold">{review.name}</h3>
//                             <Image
//                               src={googleVerifiedBadge}
//                               alt="Google"
//                               width={100}
//                               height={100}
//                               quality={100}
//                               className="w-6 h-6"
//                             />
//                           </div>
//                           <p className="text-xs text-gray-500">{review.date}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardContent className="pt-4">
//                     <div className="flex gap-1 mb-3">
//                       {[...Array(5)].map((_, j) => (
//                         <Star
//                           key={j}
//                           className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
//                         />
//                       ))}
//                     </div>
//                     <p className="text-gray-700 mb-4 text-sm line-clamp-4">
//                       &quot;{review.comment}&quot;
//                     </p>
//                     <div className="flex items-center justify-between">
//                       <a
//                         href="https://share.google/2cj4qTPpn0OHGc1zf"
//                         className="text-primary hover:text-green-600 text-sm font-medium flex items-center gap-1 transition-colors"
//                       >
//                         Read full review <ChevronRight className="w-4 h-4" />
//                       </a>
//                       {review.isGoogleReview && (
//                         <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
//                           <Check className="w-3 h-3" />
//                           Google Verified
//                         </span>
//                       )}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </SwiperSlide>
//             ))}
//           </Swiper>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import React from 'react';
import { Star, ChevronRight, Check, Quote, Sparkles, Heart, ThumbsUp } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import googleLogo from '../../../assets/googleLogo.png'
import googleVerifiedBadge from '../../../assets/googleVerifiedBadge.png'
import googleTextIcon from '../../../assets/googleTextIcon.png'
import Link from 'next/link';

const reviews = [
  {
    name: "Ahmed K.",
    rating: 5,
    comment: "Best car service in Dubai! Fixed my AC in under 2 hours during emergency. Highly professional team.",
    date: "2 days ago",
    isGoogleReview: true,
    service: "AC Repair"
  },
  {
    name: "Sarah M.",
    rating: 5,
    comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
    date: "1 week ago",
    isGoogleReview: true,
    service: "General Maintenance"
  },
  {
    name: "Rajiv P.",
    rating: 4,
    comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
    date: "3 weeks ago",
    isGoogleReview: true,
    service: "Battery Replacement"
  },
  {
    name: "Fatima L.",
    rating: 5,
    comment: "Fast and transparent service. Explained everything clearly before starting the repair.",
    date: "5 days ago",
    isGoogleReview: true,
    service: "Engine Repair"
  },
  {
    name: "Omar H.",
    rating: 4,
    comment: "Convenient on-site service, but a bit pricey compared to local garages. Still worth it for emergencies.",
    date: "2 weeks ago",
    isGoogleReview: true,
    service: "Mobile Service"
  }
];

export default function Reviews() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 max-w-7xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4 fill-primary" />
            CUSTOMER TESTIMONIALS
          </div>
          <h2 className="text-4xl font-bold sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-gray-900 to-primary bg-clip-text text-transparent">
            Loved by <span className="text-primary">Car Owners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover why Dubai's drivers trust us with their vehicles
          </p>
        </div>

        {/* Rating Summary Card */}
        <div className="relative bg-gradient-to-r from-gray-900 to-primary rounded-3xl p-8 text-white shadow-2xl mb-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Image
                  src={googleTextIcon}
                  alt="Google"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-24 h-10"
                />
                <span className='font-bold text-2xl'>Reviews</span>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-3xl font-bold">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-white/80 mt-2">Based on 52 reviews</p>
            </div>

            <div className="hidden md:block">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => (
                  <div key={rating} className="flex items-center gap-3">
                    <span className="text-sm w-4">{rating}</span>
                    <div className="flex-1 bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-yellow-400 h-2 rounded-full" 
                        style={{ width: `${rating === 5 ? '90%' : rating === 4 ? '8%' : '2%'}` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="https://g.page/r/CdrwD2SVrLO7EAI/review"
                className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all font-semibold shadow-lg hover:shadow-xl"
              >
                <ThumbsUp className="h-5 w-5" />
                Review us on Google
              </Link>
            </div>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.reviews-pagination',
              bulletClass: 'reviews-bullet',
              bulletActiveClass: 'reviews-bullet-active',
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2.1,
              },
              1024: {
                slidesPerView: 3.1,
              },
              1280: {
                slidesPerView: 3.5,
              },
            }}
            className="!overflow-visible"
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <Card className="h-full border-0 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                  {/* Service Badge */}
                  <div className="absolute top-4 right-4 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
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
                              <Image
                                src={googleLogo}
                                alt="Google Verified"
                                width={16}
                                height={16}
                                className="w-4 h-4"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className='flex items-center gap-2'>
                            <h3 className="text-lg font-semibold">{review.name}</h3>
                            <Image
                              src={googleVerifiedBadge}
                              alt="Google Verified"
                              width={20}
                              height={20}
                              className="w-5 h-5"
                            />
                          </div>
                          <p className="text-sm text-gray-500">{review.date}</p>
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
                    </div>
                    
                    {/* Review Text */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20 rotate-180" />
                      <p className="text-gray-700 mb-6 text-sm leading-relaxed relative z-10">
                        &quot;{review.comment}&quot;
                      </p>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className="inline-flex items-center gap-2 text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                        <Check className="w-3 h-3" />
                        Verified Customer
                      </span>
                      <button className="text-primary hover:text-primary/90 text-sm font-medium flex items-center gap-1 transition-colors group-hover:gap-2">
                        Read more
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="reviews-pagination flex justify-center gap-2 mt-8"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          {[
            { value: "98%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Support Available" },
            { value: "5000+", label: "Cars Serviced" },
            { value: "15min", label: "Avg. Response Time" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reviews-bullet {
          width: 8px;
          height: 8px;
          background: #D1D5DB;
          border-radius: 4px;
          margin: 0 4px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .reviews-bullet-active {
          width: 24px;
          background: #00963B;
        }
      `}</style>
    </section>
  );
}