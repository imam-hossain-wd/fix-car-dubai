'use client'

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wrench, Droplet, Fan, Battery, Settings, Clock, Shield, Award, Zap, Phone, MessageCircle, Calendar } from "lucide-react";
import { useState } from "react";

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
export const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
        <div className="absolute top-4 right-4 p-2 rounded-xl bg-primary text-white backdrop-blur-sm">
          {getServiceIcon(service?.title)}
        </div>

        {/* Service title overlay */}
        <div className="absolute bottom-4 left-4">
          <h3 className="text-lg font-bold text-white">{service.title}</h3>
          {service.duration && (
            <div className="flex items-center text-white/90 text-sm mt-1">
              <Clock className="h-4 w-4 mr-1" />
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

        {/* Price and main action button */}
        <div className="flex items-center justify-between mb-3">
          {service.price && (
            <div>
              <span className="text-xs text-gray-500 block">Starting from</span>
              <span className="font-bold text-primary text-xl">{service.price}</span>
            </div>
          )}

          <Button className="rounded-lg gap-2 text-xs group-hover:bg-primary/90 transition-all" asChild>
            <Link href={`/dubai/services/${service?.slug}`}>
              Explore
              <Zap className="h-4 w-4 group-hover:animate-pulse" />
            </Link>
          </Button>

           {/* Quick action icons */}
        <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100">
          {/* Call Button */}
          <Link
            href="tel:+971506695990"
            className="flex flex-col items-center group/action transition-all duration-300 transform hover:-translate-y-1"
            title="Call Now"
          >
            <div className="p-2 bg-blue-100 rounded-full group-hover/action:bg-blue-500 transition-colors">
              <Phone className="h-4 w-4 text-blue-600 group-hover/action:text-white" />
            </div>
            <span className="text-xs text-gray-600 mt-1 opacity-0 opacity-100 transition-opacity">
              Call
            </span>
          </Link>

          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/971506695990"
            className="flex flex-col items-center group/action transition-all duration-300 transform hover:-translate-y-1"
            title="WhatsApp"
          >
            <div className="p-2 bg-green-100 rounded-full group-hover/action:bg-green-500 transition-colors">
              <MessageCircle className="h-4 w-4 text-green-600 group-hover/action:text-white" />
            </div>
            <span className="text-xs text-gray-600 mt-1 opacity-0 opacity-100 transition-opacity">
              WhatsApp
            </span>
          </Link>

          {/* Booking Button */}
          <Link
            href="/booking"
            className="flex flex-col items-center group/action transition-all duration-300 transform hover:-translate-y-1"
            title="Book Now"
          >
            <div className="p-2 bg-primary rounded-full  transition-colors">
              <Calendar className="h-4 w-4 text-white group-hover/action:text-white" />
            </div>
            <span className="text-xs text-gray-600 mt-1 opacity-0 opacity-100 transition-opacity">
              Book
            </span>
          </Link>
        </div>
        </div>
{/* ---------------------------------------------------------------- */}
        {/* Quick action icons */}
 
{/* //------------------------------------ */}
        {/* Alternative: Horizontal quick actions that appear on hover */}
        {/* <div className={`flex justify-center gap-2 mt-3 transition-all duration-300  'opacity-100' : 'opacity-0 h-0'}`}>
          <Button variant="outline" size="sm" className="rounded-full px-3 text-xs gap-1" asChild>
            <Link href="tel:+971506695990">
              <Phone className="h-3 w-3" />
              Call
            </Link>
          </Button>
          <Button variant="outline" size="sm" className="rounded-full px-3 text-xs gap-1 border-green-300 text-green-600 hover:bg-green-50" asChild>
            <Link href="https://wa.me/971506695990">
              <MessageCircle className="h-3 w-3" />
              WhatsApp
            </Link>
          </Button>
          <Button size="sm" className="rounded-full px-3 text-xs gap-1 bg-primary hover:bg-primary/90" asChild>
            <Link href="/booking">
              <Calendar className="h-3 w-3" />
              Book Now
            </Link>
          </Button>
        </div> */}
      </div>

      {/* Border effect on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};