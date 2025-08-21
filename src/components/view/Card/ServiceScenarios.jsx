// 'use client'
// import { CarFront, Home, CalendarCheck, AlertTriangle, Building2 } from 'lucide-react'
// import { motion } from 'framer-motion'

// export function PremiumServiceGrid() {
//   const services = [
//     {
//       title: "Emergency Roadside",
//       icon: <AlertTriangle className="w-7 h-7" />,
//       description: "24/7 instant rescue within 30 minutes",
//       gradient: "from-blue-600 to-blue-500"
//     },
//     {
//       title: "At Your Office",
//       icon: <Building2 className="w-7 h-7" />,
//       description: "Discreet repairs while you work",
//       gradient: "from-amber-500 to-amber-400"
//     },
//     {
//       title: "Home Breakdown",
//       icon: <Home className="w-7 h-7" />,
//       description: "We come to you at any location",
//       gradient: "from-blue-600 to-blue-500"
//     },
//     {
//       title: "Engine Crisis",
//       icon: <CarFront className="w-7 h-7" />,
//       description: "Emergency diagnostics & repair",
//       gradient: "from-amber-500 to-amber-400"
//     },
//     {
//       title: "Scheduled Care",
//       icon: <CalendarCheck className="w-7 h-7" />,
//       description: "Premium maintenance at your door",
//       gradient: "from-blue-600 to-blue-500"
//     }
//   ]

//   return (
//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
//         {services.map((service, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             whileHover={{ y: -5 }}
//             className={`
//               relative overflow-hidden rounded-2xl
//               bg-white/90 backdrop-blur-sm
//               border border-gray-100
//               shadow-xl hover:shadow-2xl
//               transition-all duration-300
//               group
//             `}
//           >
//             {/* Gradient accent bar */}
//             <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`} />
            
//             <div className="p-4 flex flex-col items-center text-center h-full">
//               {/* Icon with gradient background */}
//               <div className={`
//                 mb-3 p-3 rounded-xl 
//                 bg-gradient-to-br ${service.gradient}
//                 shadow-lg group-hover:shadow-xl
//                 transition-shadow duration-300
//               `}>
//                 {service.icon}
//               </div>
              
//               {/* Content */}
//               <h3 className="text-lg font-bold text-gray-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-sm text-gray-600 mb-3">
//                 {service.description}
//               </p>
              
//               {/* Animated button */}
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`
//                   mt-auto px-4 py-2 text-xs font-semibold rounded-lg
//                   bg-white border border-gray-200
//                   text-gray-800 hover:text-white
//                   hover:bg-gradient-to-r ${service.gradient}
//                   transition-all duration-300
//                   shadow-sm hover:shadow-md
//                 `}
//               >
//                 Request Service
//               </motion.button>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   )
// }


// 'use client'
// import { CarFront, Home, CalendarCheck, AlertTriangle, Building2 } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'

// export function PremiumServiceSlider() {
//   const services = [
//     {
//       title: "Emergency Roadside",
//       icon: <AlertTriangle className="w-7 h-7" />,
//       description: "24/7 instant rescue within 30 minutes",
//       gradient: "from-[#008236] to-[#00a341]"
//     },
//     {
//       title: "At Your Office",
//       icon: <Building2 className="w-7 h-7" />,
//       description: "Discreet repairs while you work",
//       gradient: "from-[#FFDF1E] to-[#ffea57]"
//     },
//     {
//       title: "Home Breakdown",
//       icon: <Home className="w-7 h-7" />,
//       description: "We come to you at any location",
//       gradient: "from-[#008236] to-[#00a341]"
//     },
//     {
//       title: "Engine Crisis",
//       icon: <CarFront className="w-7 h-7" />,
//       description: "Emergency diagnostics & repair",
//       gradient: "from-[#FFDF1E] to-[#ffea57]"
//     },
//     {
//       title: "Scheduled Care",
//       icon: <CalendarCheck className="w-7 h-7" />,
//       description: "Premium maintenance at your door",
//       gradient: "from-[#008236] to-[#00a341]"
//     }
//   ]

//   return (
//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//         }}
//         pagination={{
//           clickable: true,
//           bulletClass: 'swiper-pagination-bullet',
//           bulletActiveClass: 'swiper-pagination-bullet-active',
//           renderBullet: (_, className) => {
//             return `<span class="${className} bg-[#008236] opacity-30 hover:opacity-100 transition-opacity duration-300"></span>`
//           }
//         }}
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 4 }
//         }}
//         className="pb-16"
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -8 }}
//               className={`
//                 h-full mx-2 bg-white/95 backdrop-blur-sm
//                 rounded-2xl overflow-hidden border border-gray-100
//                 shadow-xl hover:shadow-2xl transition-all duration-300
//                 group relative
//               `}
//             >
//               {/* Gradient glow effect */}
//               <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
//               <div className="p-6 flex flex-col items-center text-center h-full relative z-10">
//                 {/* Icon with gradient border */}
//                 <div className={`
//                   mb-5 p-3 rounded-xl bg-white
//                   border-2 ${service.gradient.includes('FFDF1E') ? 'border-[#FFDF1E]' : 'border-[#008236]'}
//                   shadow-inner group-hover:shadow-none
//                   transition-all duration-300
//                 `}>
//                   {service.icon}
//                 </div>
                
//                 <h3 className="text-lg font-bold text-gray-900 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mb-5">
//                   {service.description}
//                 </p>
                
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   className={`
//                     mt-auto px-4 py-2 text-xs font-semibold rounded-lg
//                     ${service.gradient.includes('FFDF1E') 
//                       ? 'bg-[#FFDF1E] text-gray-900 hover:bg-[#ffea57]' 
//                       : 'bg-[#008236] text-white hover:bg-[#00a341]'}
//                     transition-all duration-300
//                     shadow-md hover:shadow-lg
//                   `}
//                 >
//                   Book Now
//                 </motion.button>
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }  


// 'use client'
// import { CarFront, Home, CalendarCheck, AlertTriangle, Building2, NotebookPen } from 'lucide-react'
// import { motion } from 'framer-motion'
// import { Swiper, SwiperSlide } from 'swiper/react'
// import { Autoplay, Pagination } from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/pagination'
// import { BookAppointmentButton } from '@/components/ui/shared/Buttons/BookingAppointmentButton/BookingAppointmentButton'
// import { Button } from '@/components/ui/button'
// import { CallNowButton } from '@/components/ui/shared/Buttons/CallNowButton/CallNowButton'

// export function PremiumServiceSlider() {
//   const services = [
//     {
//       title: "Emergency Roadside",
//       icon: <AlertTriangle className="w-6 h-6" />,
//       description: "24/7 instant rescue within 30 minutes",
//       bgColor: "#adcef1",
//       textColor: "#1a4b8c"
//     },
//     {
//       title: "At Your Office",
//       icon: <Building2 className="w-6 h-6" />,
//       description: "Discreet repairs while you work",
//       bgColor: "#3ac950",
//       textColor: "#1a5c1f"
//     },
//     {
//       title: "Home Breakdown",
//       icon: <Home className="w-6 h-6" />,
//       description: "We come to you at any location",
//       bgColor: "#F0BDBB",
//       textColor: "#8a4e4d"
//     },
//     {
//       title: "Engine Crisis",
//       icon: <CarFront className="w-6 h-6" />,
//       description: "Emergency diagnostics & repair",
//       bgColor: "#9DC64D",
//       textColor: "#3f5a1f"
//     },
//     {
//       title: "Scheduled Care",
//       icon: <CalendarCheck className="w-6 h-6" />,
//       description: "Premium maintenance at your door",
//       bgColor: "#FF9F28",
//       textColor: "#8a4a0a"
//     }
//   ]

//   return (
//     <div className="relative  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//         }}
//         pagination={{
//           clickable: true,
//           bulletClass: 'swiper-pagination-bullet',
//           bulletActiveClass: 'swiper-pagination-bullet-active',
//           renderBullet: (_, className) => {
//             return `<span class="${className} bg-[#adcef1] opacity-50 hover:opacity-100 transition-all duration-300"></span>`
//           }
//         }}
//         spaceBetween={20}
//         slidesPerView={1}
//         breakpoints={{
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1280: { slidesPerView: 4 }
//         }}
//         className="pb-12 "
//       >
//         {services.map((service, index) => (
//           <SwiperSlide key={index}>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               whileHover={{ y: -8, scale: 1.02 }}
//               style={{ backgroundColor: service.bgColor }}
//               className={`
//                 h-full mx-2
//                 rounded-2xl overflow-hidden
//                 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
//                 transition-all duration-300
//                 group relative
//               `}
//             >
//               <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none" />
              
//               <div className="p-5 flex flex-col items-center text-center h-full relative z-10">
//                 {/* Icon container */}
//                 <div 
//                   className={`
//                     mb-2 -mt-3 p-4 rounded-xl bg-white/90
//                     shadow-[0_2px_12px_rgba(0,0,0,0.05)]
//                     group-hover:bg-white
//                     transition-all duration-300
//                   `}
//                   style={{ color: service.textColor }}
//                 >
//                   {service.icon}
//                 </div>
                
//                 <h3 
//                   className="text-xl font-semibold mb-2"
//                 //   style={{ color: service.textColor }}
//                 >
//                   {service.title}
//                 </h3>
//                 <p 
//                   className="text-sm mb-3 opacity-90"
//                 //   style={{ color: service.textColor }}
//                 >
//                   {service.description}
//                 </p>
                
//                 {/* <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.98 }}
//                   className={`
//                     mt-auto px-6 py-2.5 text-sm font-medium rounded-xl
//                     bg-white/90 backdrop-blur-sm
//                     hover:bg-white
//                     transition-all duration-300
//                     shadow-sm
//                   `}
//                   style={{ color: service.textColor }}
//                 >
//                   Book Now
//                 </motion.button> */}
//                 {/* <Button className= "sm:w-[160px] md:w-[200px] bg-white text-black hover:bg-gray-200 gap-2 py-2 text-sm">
//          <NotebookPen className="h-6 w-6" />
//         <span>Book Appointment</span>
//         </Button> */}
//         <CallNowButton  className='bg-white text-black hover:bg-gray-100'/>
//               </div>
              
//               {/* Subtle floating dots decoration */}
//               <div className="absolute bottom-4 left-4 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
//                 <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-white" />
//                 <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white" />
//                 <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-white" />
//                 <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-white" />
//               </div>
//             </motion.div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   )
// }

'use client'
import { CarFront, Home, CalendarCheck, AlertTriangle, Building2 } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { CallNowButton } from '@/components/ui/shared/Buttons/CallNowButton/CallNowButton'

export function PremiumServiceSlider() {
  const services = [
    {
      title: "Emergency Roadside",
      icon: <AlertTriangle className="w-6 h-6" />,
      description: "24/7 instant rescue within 30 minutes",
      bgColor: "#adcef1",
      textColor: "#1a4b8c"
    },
    {
      title: "At Your Office",
      icon: <Building2 className="w-6 h-6" />,
      description: "Discreet repairs while you work",
      bgColor: "#3ac950",
      textColor: "#1a5c1f"
    },
    {
      title: "Home Breakdown",
      icon: <Home className="w-6 h-6" />,
      description: "We come to you at any location",
      bgColor: "#F0BDBB",
      textColor: "#8a4e4d"
    },
    {
      title: "Engine Crisis",
      icon: <CarFront className="w-6 h-6" />,
      description: "Emergency diagnostics & repair",
      bgColor: "#9DC64D",
      textColor: "#3f5a1f"
    },
    {
      title: "Scheduled Care",
      icon: <CalendarCheck className="w-6 h-6" />,
      description: "Premium maintenance at your door",
      bgColor: "#FF9F28",
      textColor: "#8a4a0a"
    }
  ]

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        pagination={{
          clickable: true,
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (_, className) => {
            return `<span class="${className} bg-[#adcef1] opacity-50 hover:opacity-100 transition-all duration-300"></span>`
          }
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }}
        className="pb-12"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundColor: service.bgColor }}
              className={`
                h-full mx-2
                rounded-2xl overflow-hidden
                shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                transition-all duration-300
                group relative
                hover:-translate-y-2 hover:scale-[1.02]
              `}
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] pointer-events-none" />
              
              <div className="p-5 flex flex-col items-center text-center h-full relative z-10">
                {/* Icon container */}
                <div 
                  className={`
                    mb-2 -mt-3 p-4 rounded-xl bg-white/90
                    shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                    group-hover:bg-white
                    transition-all duration-300
                  `}
                  style={{ color: service.textColor }}
                >
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm mb-3 opacity-90">
                  {service.description}
                </p>
                
                <CallNowButton className='bg-white text-black hover:bg-gray-100'/>
              </div>
              
              {/* Subtle floating dots decoration */}
              <div className="absolute bottom-4 left-4 w-12 h-12 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute top-0 left-0 w-2 h-2 rounded-full bg-white" />
                <div className="absolute top-0 right-0 w-2 h-2 rounded-full bg-white" />
                <div className="absolute bottom-0 left-0 w-2 h-2 rounded-full bg-white" />
                <div className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-white" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}




  const services = [
    {
      title: "Emergency Roadside",
      icon: <AlertTriangle className="w-6 h-6" />,
    },
    {
      title: "At Your Office",
      icon: <Building2 className="w-6 h-6" />,
    },
    {
      title: "Home Breakdown",
      icon: <Home className="w-6 h-6" />,
    },
    {
      title: "Engine Crisis",
      icon: <CarFront className="w-6 h-6" />,

    },
    {
      title: "Scheduled Care",
      icon: <CalendarCheck className="w-6 h-6" />,

    }
  ]