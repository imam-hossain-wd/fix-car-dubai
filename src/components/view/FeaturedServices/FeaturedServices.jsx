
// import { Badge } from "@/components/ui/badge";
// import servicesData from "../../../data/services.json";
// import { ServicesGrid } from "../Card/ServicesGrid";



// export default function FeaturedServices() {
//   return (
//     <div className="container py-12 mx-auto">
//        <div className="text-center mb-16">
//           <Badge variant="outline" className="mb-4 bg-primary/10 text-primary">
//             Our Services
//           </Badge>
//           <h2 className="text-3xl font-bold sm:text-3xl md:text-5xl mb-4">
//             Featured <span className="text-primary">Car Repair</span> Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Professional automotive solutions tailored for Dubai's climate and driving conditions
//           </p>
//         </div>
//       <ServicesGrid services={servicesData.services} />
//     </div>
//   );
// }




// 'use client'

// import { useState } from "react";
// import Link from "next/link";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import servicesData from "../../../data/services.json";
// import {  Wrench, Droplet, Fan, Battery, Settings, Clock, ArrowRight,  Shield, Award, Zap } from "lucide-react";

// // Service icon mapping
// const serviceIcons = {
//   battery: <Battery className="h-5 w-5" />,
//   ac: <Fan className="h-5 w-5" />,
//   oil: <Droplet className="h-5 w-5" />,
//   brake: <Wrench className="h-5 w-5" />,
//   radiator: <Droplet className="h-5 w-5" />,
//   engine: <Settings className="h-5 w-5" />,
//   abs: <Wrench className="h-5 w-5" />,
//   default: <Wrench className="h-5 w-5" />
// };

// const getServiceIcon = (title) => {
//   const lowerTitle = title.toLowerCase();
//   if (lowerTitle.includes("battery")) return serviceIcons.battery;
//   if (lowerTitle.includes("ac") || lowerTitle.includes("air conditioning")) return serviceIcons.ac;
//   if (lowerTitle.includes("oil")) return serviceIcons.oil;
//   if (lowerTitle.includes("brake")) return serviceIcons.brake;
//   if (lowerTitle.includes("radiator")) return serviceIcons.radiator;
//   if (lowerTitle.includes("engine")) return serviceIcons.engine;
//   if (lowerTitle.includes("abs")) return serviceIcons.abs;
//   return serviceIcons.default;
// };





// // Style 4: Bold Card with Geometric Elements
// const GeometricCard = ({ service }) => {
//   return (
//     <div className="group relative bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
//       {/* Geometric shapes in background */}
//       <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/5"></div>
//       <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-primary/5"></div>
      
//       <div className="relative z-10 p-6">
//         <div className="flex items-center justify-between mb-5">
//           <div className="p-2 rounded-xl bg-primary text-white">
//             {getServiceIcon(service?.title)}
//           </div>
//           <Shield className="h-6 w-6 text-primary/70" />
//         </div>
        
//         <h3 className="font-bold text-xl text-gray-900 mb-3">{service.title}</h3>
        
//         {service.duration && (
//           <div className="flex items-center text-sm text-gray-500 mb-4">
//             <Clock className="h-4 w-4 mr-1" />
//             <span>{service.duration}</span>
//           </div>
//         )}
        
//         <div className="mb-6 space-y-3">
//           {service?.features?.slice(0, 3).map((feature, i) => (
//             <div key={i} className="flex items-start gap-3">
//               <Award className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
//               <span className="text-sm text-gray-700">{feature}</span>
//             </div>
//           ))}
//         </div>
        
//         <div className="flex items-center justify-between">
//           {service.price && (
//             <div>
//               <span className="text-xs text-gray-500 block">Starting from</span>
//               <span className="font-bold text-primary text-xl">{service.price}</span>
//             </div>
//           )}
          
//           <Button className="rounded-lg gap-2 group-hover:bg-primary/90" asChild>
//             <Link href={`/services/${service?.slug}`}>
//               Explore
//               <Zap className="h-4 w-4 group-hover:animate-pulse" />
//             </Link>
//           </Button>
//         </div>
//       </div>
      
//       {/* Border effect on hover */}
//       <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
//     </div>
//   );
// };

// // Services Grid with style selector
// const ServicesGrid = ({ services, style = "minimalist" }) => {
//   const renderCard = (service, index) => {
//     return <GeometricCard key={index} service={service} />
//   };

//   return (
//     <div className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//       {services.map((service, index) => renderCard(service, index))}
//     </div>
//   );
// };

// // Main Featured Services Component
// export default function FeaturedServices() {
//   const [activeStyle, setActiveStyle] = useState("minimalist");
  
//   return (
//     <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
//       <div className="container relative mx-auto px-4">
//         {/* Section header */}
//         <div className="text-center mb-12 max-w-3xl mx-auto">
//           <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium rounded-full">
//             <Wrench className="h-4 w-4 mr-2" />
//             Our Services
//           </Badge>
//           <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 text-gray-900">
//             Premium <span className="text-primary">Car Care</span> Solutions
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Expert automotive services tailored for optimal performance and longevity of your vehicle
//           </p>
//         </div>
//         {/* Services grid */}
//         <ServicesGrid services={servicesData.services} style={activeStyle} />

//         {/* CTA section */}
//         <div className="text-center mt-16 pt-8 border-t border-gray-200">
//           <p className="text-gray-600 mb-6">Need a service not listed here?</p>
//           <Button size="lg" className="rounded-full gap-2" asChild>
//             <Link href="/contact">
//               Contact Us
//               <ArrowRight className="h-5 w-5" />
//             </Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import servicesData from "../../../data/services.json";
import { Wrench, Droplet, Fan, Battery, Settings, Clock, ArrowRight, Shield, Award, Zap } from "lucide-react";

// Service icon mapping
const serviceIcons = {
  battery: <Battery className="h-5 w-5" />,
  ac: <Fan className="h-5 w-5" />,
  oil: <Droplet className="h-5 w-5" />,
  brake: <Wrench className="h-5 w-5" />,
  radiator: <Droplet className="h-5 w-5" />,
  engine: <Settings className="h-5 w-5" />,
  abs: <Wrench className="h-5 w-5" />,
  default: <Wrench className="h-5 w-5" />
};

const getServiceIcon = (title) => {
  const lowerTitle = title.toLowerCase();
  if (lowerTitle.includes("battery")) return serviceIcons.battery;
  if (lowerTitle.includes("ac") || lowerTitle.includes("air conditioning")) return serviceIcons.ac;
  if (lowerTitle.includes("oil")) return serviceIcons.oil;
  if (lowerTitle.includes("brake")) return serviceIcons.brake;
  if (lowerTitle.includes("radiator")) return serviceIcons.radiator;
  if (lowerTitle.includes("engine")) return serviceIcons.engine;
  if (lowerTitle.includes("abs")) return serviceIcons.abs;
  return serviceIcons.default;
};

// Style 4: Bold Card with Geometric Elements (with image)
const GeometricCard = ({ service }) => {
  return (
    <div className="group relative bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Image section */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={service?.service_image || "/placeholder-service.jpg"}
          alt={service.title || "Car repair service"}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        
        {/* Service icon overlay */}
        <div className="absolute top-4 right-4 p-2 rounded-xl bg-white/90 backdrop-blur-sm">
          {getServiceIcon(service?.title)}
        </div>
        
        {/* Service title overlay */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-lg font-bold text-white">{service.title}</h3>
          {service.duration && (
            <div className="flex items-center text-white/90 text-sm mt-1">
              <Clock className="h-4 w-4 mr-1 bg-primary" />
              <span>{service.duration}</span>
            </div>
          )}
        </div>
      </div>
      
      {/* Geometric shapes in background */}
      <div className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-primary/5 z-0"></div>
      <div className="absolute -bottom-8 -left-8 h-16 w-16 rounded-full bg-primary/5 z-0"></div>
      
      <div className="relative z-10 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-primary mr-2" />
            <span className="text-sm font-medium text-gray-600">Premium Service</span>
          </div>
          {service.rating && (
            <div className="flex items-center bg-amber-50 rounded-full px-2 py-1">
              <Award className="h-4 w-4 text-amber-500 mr-1" />
              <span className="text-xs font-medium text-amber-700">{service.rating}</span>
            </div>
          )}
        </div>
        
        <div className="mb-4 space-y-1">
          {service?.features?.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="flex items-center justify-between">
          {service.price && (
            <div>
              <span className="text-xs text-gray-500 block">Starting from</span>
              <span className="font-bold text-primary text-xl">{service.price}</span>
            </div>
          )}
          
          <Button className="rounded-lg gap-2 group-hover:bg-primary/90" asChild>
            <Link href={`/services/${service?.slug}`}>
              Explore
              <Zap className="h-4 w-4 group-hover:animate-pulse" />
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Border effect on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

// Services Grid
const ServicesGrid = ({ services }) => {
  return (
    <div className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service, index) => (
        <GeometricCard key={index} service={service} />
      ))}
    </div>
  );
};

// Main Featured Services Component
export default function FeaturedServices() {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium rounded-full">
            <Wrench className="h-4 w-4 mr-2" />
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 text-gray-900">
            Premium <span className="text-primary">Car Care</span> Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Expert automotive services tailored for optimal performance and longevity of your vehicle
          </p>
        </div>
        
        {/* Services grid */}
        <ServicesGrid services={servicesData.services} />

        {/* CTA section */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-6">Need a service not listed here?</p>
          <Button size="lg" className="rounded-full gap-2" asChild>
            <Link href="/contact">
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

