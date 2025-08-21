// 'use client'
// import React from 'react';
// import { Star } from 'lucide-react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import google from '../../../assets/googleIcon.webp'
// import googletext from '../../../assets/googletexticon.webp'
// import 'swiper/css';
// import Image from 'next/image';

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
//     <section className="py-10 md:py-16 bg-white">
//       <div className="w-[90%] mx-auto max-w-6xl">
//         <div className="text-center mb-12">
// <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.5rem] mb-6">
//   Customer Reviews
// </h2>
// <h3 className="text-xl text-gray-600 mb-6">What Our Customers Say</h3>

//           {/* -------------------------  */}
// <div className='flex justify-around items-center bg-gray-100 p-5 '>
//       <div>
//       <div className='flex gap-3 items-center'>
//        <Image 
//           src={googletext} 
//           alt="Google" 
//           width={1000} 
//           height={1000} 
//           quality={100}
//           className="w-20 h-7"
//         />
//        <span className='font-bold text-lg'> Reviews</span>


//     </div>
//     <div className="flex items-center gap-1 mt-1">
//           <span className="text-xl font-bold mr-1">4.9</span>
//           <div className="flex">
//             {[...Array(5)].map((_, i) => (
//               <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
//             ))}
//           </div>
//           <span className="text-gray-600 text-sm">(52)</span>
//         </div>
//     </div>

//      <div className="text-center">
//     <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-md font-medium transition-colors">
//       Review us on Google
//     </button>
//   </div>
// </div>
//   </div>
//         <Swiper
//           modules={[Autoplay]}
//           autoplay={{
//             delay: 4000,
//             disableOnInteraction: false,
//           }}
//           loop={true}
//           spaceBetween={20}
//           breakpoints={{
//             320: {
//               slidesPerView: 1,
//             },
//             640: {
//               slidesPerView: 1.5,
//             },
//             768: {
//               slidesPerView: 2,
//             },
//             1024: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {reviews.map((review, i) => (
//             <SwiperSlide key={i}>
//               <Card className="h-full hover:shadow-md transition-all border border-gray-200 bg-white rounded-lg">
//                 <CardHeader className="pb-3">
//                   <div className="flex justify-between items-start gap-4">
//                     <div className="flex items-center gap-3">
//                       <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center text-blue-600 font-medium">
//                         {review.name.charAt(0)}
//                       </div>
//                       <div>
//                         <CardTitle className="text-base font-medium">{review.name}</CardTitle>
//                         <p className="text-xs text-gray-500">{review.date}</p>
//                       </div>
//                     </div>
//                     {review.isGoogleReview && (
//                       <Image 
//                         src={google} 
//                         alt="Google Review" 
//                         width={16} 
//                         height={16} 
//                         className="w-4 h-4 mt-1"
//                       />
//                     )}
//                   </div>
//                 </CardHeader>
//                 <CardContent className="pt-0">
//                   <div className="flex gap-1 mb-3">
//                     {[...Array(5)].map((_, j) => (
//                       <Star
//                         key={j}
//                         className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
//                       />
//                     ))}
//                   </div>
//                   <p className="text-gray-700 mb-3 text-sm line-clamp-3">
//                     &quot;{review.comment}&quot;
//                   </p>
//                   <button className="text-blue-600 text-sm font-medium hover:underline">
//                     Read more
//                   </button>
//                 </CardContent>
//               </Card>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }


'use client'

import React from 'react';
import { Star, ChevronRight, Check } from 'lucide-react';
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
    isGoogleReview: true
  },
  {
    name: "Sarah M.",
    rating: 5,
    comment: "Honest mechanics who actually care. Didn't try to upsell unnecessary repairs like other shops.",
    date: "1 week ago",
    isGoogleReview: true
  },
  {
    name: "Rajiv P.",
    rating: 4,
    comment: "Great battery replacement service. Came to my location and installed it while I was at work. Very convenient!",
    date: "3 weeks ago",
    isGoogleReview: true
  },
  {
    name: "Fatima L.",
    rating: 5,
    comment: "Fast and transparent service. Explained everything clearly before starting the repair.",
    date: "5 days ago",
    isGoogleReview: true
  },
  {
    name: "Omar H.",
    rating: 4,
    comment: "Convenient on-site service, but a bit pricey compared to local garages. Still worth it for emergencies.",
    date: "2 weeks ago",
    isGoogleReview: true
  }
];

export default function Reviews() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="w-container md:w-[90%] mx-auto px-4 max-w-7xl ">
        <div className='mb-2'>

          <div className='text-center'>
            <h2 className="text-3xl font-bold sm:text-4xl md:text-[2.5rem] mb-2">
              Customer Reviews
            </h2>
            <h3 className="text-xl text-gray-600 mb-3">What Our Customers Say</h3>

          </div>

          <div className='w-full md:w-[70%] mx-auto mb-4 px-1 md:px-10 flex rounded justify-between items-center bg-gray-100 p-2 '>
            <div>
              <div className='flex gap-1 items-center'>
                <Image
                  src={googleTextIcon}
                  alt="Google"
                  width={1000}
                  height={1000}
                  quality={100}
                  className="w-20 h-8 md:w-24 md:h-10"
                />
                <span className='font-bold text-sm md:text-[20px]'> Reviews</span>


              </div>
              <div className="flex items-center gap-1 mt-1 px-1">
                <span className="text-[16px] md:text-[22px] font-bold mr-1">4.9</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-6 md:w-6 fill-yellow-400 text-yellow-500" />
                  ))}
                </div>
                <span className="text-gray-600 text-md">(52)</span>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-primary hover:bg-green-600 text-white px-4 md:px-6 py-2 rounded-full text-[13px] md:text-lg font-medium transition-colors">
               <Link href="https://g.page/r/CdrwD2SVrLO7EAI/review">
                Review us on Google</Link>
              </button>
            </div>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review, i) => (
              <SwiperSlide key={i}>
                <Card className="h-full border border-gray-200/70 bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <CardHeader className="pb-0">
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="bg-gradient-to-br from-primary to-green-600 rounded-full w-10 h-10 flex items-center justify-center text-white font-medium">
                            {review.name.charAt(0)}
                          </div>
                          {review.isGoogleReview && (
                            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5">
                              <Image
                                src={googleLogo}
                                alt="Google Verified"
                                width={14}
                                height={14}
                                className="w-3.5 h-3.5"
                              />
                            </div>
                          )}
                        </div>
                        <div>
                          <div className='flex justify-center items-center gap-1'>
                            <h3 className="text-base font-semibold">{review.name}</h3>
                            <Image
                              src={googleVerifiedBadge}
                              alt="Google"
                              width={100}
                              height={100}
                              quality={100}
                              className="w-6 h-6"
                            />
                          </div>
                          <p className="text-xs text-gray-500">{review.date}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`h-4 w-4 ${j < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 text-sm line-clamp-4">
                      &quot;{review.comment}&quot;
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href="https://share.google/2cj4qTPpn0OHGc1zf"
                        className="text-primary hover:text-green-600 text-sm font-medium flex items-center gap-1 transition-colors"
                      >
                        Read full review <ChevronRight className="w-4 h-4" />
                      </a>
                      {review.isGoogleReview && (
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
                          <Check className="w-3 h-3" />
                          Google Verified
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}