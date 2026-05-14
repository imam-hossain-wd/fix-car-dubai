'use client'

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ServiceCard } from "../Card/ServiceCard";
import { services } from "@/data/services/services";


export default function FeaturedServices() {
  return (
    <section className="relative py-6 bg-gray-50 overflow-hidden">
      <div className="container relative mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-12 max-w-3xl mx-auto -mt-5">
          {/* <Badge variant="outline" className="mb-4 bg-primary/10 text-primary px-4 py-1.5 text-sm font-medium rounded-full">
            <Wrench className="h-4 w-4 mr-2" />
            Our Services
          </Badge> */}
          <h2 className=" text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            Premium <span className="text-primary">Car Care</span> Solutions
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Expert automotive services tailored for optimal performance and longevity of your vehicle
          </p>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services?.slice(0,8).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-8">
          <Button size="lg" className="rounded-full gap-2" asChild>
            <Link href="/dubai/services">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

