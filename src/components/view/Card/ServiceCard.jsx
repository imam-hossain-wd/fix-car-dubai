'use client'

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Wrench, Droplet, Fan, Battery, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";



const getServiceIcon = (title) => {
  if (title.includes("Battery")) return <Battery className="h-8 w-8 text-yellow-500" />;
  if (title.includes("AC")) return <Fan className="h-8 w-8 text-blue-500" />;
  if (title.includes("Oil")) return <Droplet className="h-8 w-8 text-green-500" />;
  if (title.includes("Brake")) return <Wrench className="h-8 w-8 text-red-500" />;
  if (title.includes("Radiator")) return <Droplet className="h-8 w-8 text-blue-500" />;
  if (title.includes("Engine")) return <Settings className="h-8 w-8 text-purple-500" />;
  if (title.includes("ABS")) return <Wrench className="h-8 w-8 text-orange-500" />;
  if (title.includes("DenamoCraft")) return <Wrench className="h-8 w-8 text-primary" />;
  return <Wrench className="h-8 w-8 text-primary" />;
};

export const ServiceCard = ({ service }) => {
  
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 border-2 border-primary">
      <div className="relative h-44 overflow-hidden ">
        <Image
          src={service?.service_image}
          alt='object'
          // alt={service.title}
          fill
          className="object-cover  transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex  items-center gap-3">
            <div className="rounded-lg bg-white p-2 shadow-sm">
              {getServiceIcon(service?.title)}
            </div>
            <h3 className="text-md font-bold text-white line-clamp-3">
              {service.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4 space-y-2 ">
          {service?.features?.slice(0, 4).map((feature, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-500" />
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            asChild
          >
            <Link href={`/services/${service?.slug}`}>
              Details
            </Link>
          </Button>
          <Button asChild>
            <Link href="/contact">
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};