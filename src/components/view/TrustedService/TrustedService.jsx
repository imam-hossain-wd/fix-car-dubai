// import Image from "next/image";
// import { 
//   BadgeCheck, Zap, Clock, DollarSign, 
//   MessageCircle, Shield, Leaf, ChevronRight 
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export function TrustedService() {
//   return (
//     <section className="py-16 md:py-10 bg-gradient-to-br from-gray-50 to-white">
//       <div className="container mx-auto px-4 max-w-7xl">
//         {/* Animated header */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-green-600 bg-green-100 rounded-full animate-pulse">
//             Dubai's Preferred Choice
//           </span>
//           <h2 className="text-4xl lg:text-5xl font-bold sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-primary">
//             Why Dubai Trusts <br/>
//             <span className="text-primary">24 Car Service</span>
//           </h2>
//         </div>

//         <div className="grid items-center gap-16 lg:grid-cols-2">
//           {/* 3D Card with Parallax Effect */}
//           <div className="relative group h-[300px] lg:h-[500px] w-[90%] md:w-full mx-auto perspective-1000">
//             <div className="relative h-full transition-all duration-700 transform-style-preserve-3d group-hover:rotate-y-12">
//               <div className="absolute inset-0 -mt-5 lg:-mt-20 rounded-3xl shadow-2xl overflow-hidden border-2 border-white/10 bg-gradient-to-br from-gray-900 to-gray-800 backface-hidden">
//                 <Image
//                   src="https://img.freepik.com/free-photo/mechanic-man-uniform-holding-wrenches-auto-service-center-smiling-camera_496169-1000.jpg?t=st=1746875957~exp=1746879557~hmac=e38a8a718281435b7f985692e92bd36f91dbbdfecf814e46a1d851d650f05d67&w=996"
//                   alt="Luxury car service in Dubai"
//                   fill
//                   className=" opacity-70 w-[300px] h-[300px]"
//                   quality={100}
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
//                   <div className="space-y-2 text-white">
//                     <div className="flex items-center gap-1">
//                       <div className="p-2 rounded-full bg-green-500/20">
//                         <BadgeCheck className="h-6 w-6 text-green-400" />
//                       </div>
//                       <span className="text-xl font-bold">Dubai's Most Trusted</span>
//                     </div>
//                     <h3 className="text-3xl font-bold">Premium Car Care <br/>Redefined</h3>
//                     <div className="flex flex-wrap gap-4">
//                       {["10,000+ Cars Repaired", "4.9 ★ Google Rating", "98% Retention"].map((stat, i) => (
//                         <span key={i} className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full">
//                           {stat}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Modern Feature Grid */}
//           <div className="space-y-8 mx-5">
//             <p className="text-lg text-gray-600 leading-relaxed">
//               With 15+ years perfecting automotive excellence in Dubai, we combine cutting-edge technology with artisan craftsmanship for your luxury vehicle.
//             </p>

//             {/* Hexagonal Grid Features */}
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-4 ">
//               {[
//                 { icon: <BadgeCheck className="h-6 w-6" />, title: "Certified Technicians", color: "text-green-500" },
//                 { icon: <Zap className="h-6 w-6" />, title: "On-Demand Service", color: "text-yellow-500" },
//                 { icon: <Clock className="h-6 w-6" />, title: "24/7 Availability", color: "text-blue-500" },
//                 { icon: <DollarSign className="h-6 w-6" />, title: "Transparent Pricing", color: "text-emerald-500" },
//                 { icon: <MessageCircle className="h-6 w-6" />, title: "Free Consultation", color: "text-purple-500" },
//                 { icon: <Shield className="h-6 w-6" />, title: "Guaranteed Repairs", color: "text-red-500" },
//                 { icon: <Leaf className="h-6 w-6" />, title: "Eco-Friendly", color: "text-teal-500" },
//                 { icon: <Leaf className="h-6 w-6" />, title: "Hassle-Free Booking", color: "text-teal-500" },
//               ].map((feature, index) => ( 
//                 <div 
//                   key={index}
//                   className="p-1 lg:p-2 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 hover:border-primary/20 group border border-primary"
//                 >
//                   <div className="flex items-center gap-2 lg:gap-4">
//                     <div className={`p-2 lg:p-3 rounded-lg ${feature.color}/10 group-hover:bg-primary/10 transition-colors`}>
//                       <div className={feature.color}>
//                         {feature.icon}
//                       </div>
//                     </div>
//                     <h3 className="text-md font-semibold text-gray-800 group-hover:text-primary transition-colors">
//                       {feature.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Animated Stats */}
//             <div className="grid grid-cols-3 gap-2 ">
//               {[
//                 { value: "15+", label: "Years", decoration: "🏆" },
//                 { value: "10k+", label: "Clients", decoration: "🚗" },
//                 { value: "24/7", label: "Support", decoration: "⏱️" },
//               ].map((stat, index) => (
//                 <div 
//                   key={index}
//                   className="p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 text-center hover:shadow-lg transition-all border border-primary"
//                 >
//                   <p className="text-3xl font-bold text-primary flex flex-col items-center justify-center gap-1 lg:gap-3">
//                    <span className="text-xl">{stat.decoration} {stat.value} </span>
//                   </p>
//                   <p className="text-sm lg:text-md text-gray-600 mt-1">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Glowing CTA */}
//             <Button className=" h-14 px-8 text-lg font-medium rounded-xl bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all group">
//               Explore Premium Services
//               <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
//             </Button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { 
  ShieldCheck, BadgeDollarSign, Clock, Star, 
  Trophy, Heart, Zap, Users, Award, CheckCircle,
  MapPin, Phone, Calendar, MessageCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function TrustedService() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header with badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="h-4 w-4" />
            DUBAI'S MOST TRUSTED
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            Why <span className="text-primary">10,000+ Dubai Drivers</span> 
            <br />Choose Us Every Year
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference that comes with over a decade of excellence in automotive care
          </p>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Trust Indicators */}
          <div className="space-y-8">
            {/* Excellence Badges */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Recognitions</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Award className="h-8 w-8" />, title: "Best Auto Care 2023", desc: "Dubai Excellence Awards" },
                  { icon: <ShieldCheck className="h-8 w-8" />, title: "Quality Certified", desc: "ISO 9001:2023" },
                  { icon: <Star className="h-8 w-8" />, title: "Customer Choice", desc: "4.9/5 Rating" },
                  { icon: <Trophy className="h-8 w-8" />, title: "Industry Leader", desc: "13+ Years Experience" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="text-primary mb-3">{item.icon}</div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Value Propositions */}
          <div className="space-y-8">
            {/* Guarantees */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Promises to You</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <BadgeDollarSign className="h-6 w-6" />,
                    title: "Price Match Guarantee",
                    description: "Find a better price? We'll match it plus give you 10% off."
                  },
                  {
                    icon: <ShieldCheck className="h-6 w-6" />,
                    title: "Lifetime Warranty",
                    description: "All repairs come with our exclusive lifetime service warranty"
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "On-Time Promise",
                    description: "We complete services on time or you get 20% off your next visit"
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Quick Service",
                    description: "Most services completed in under 45 minutes while you wait"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary bg-primary/10 p-2 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          {[
            { icon: <Users className="h-8 w-8" />, value: "10,000+", label: "Satisfied Clients" },
            { icon: <Star className="h-8 w-8" />, value: "4.9/5", label: "Customer Rating" },
            { icon: <CheckCircle className="h-8 w-8" />, value: "98%", label: "Retention Rate" },
            { icon: <Award className="h-8 w-8" />, value: "13+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary mb-3 inline-flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}