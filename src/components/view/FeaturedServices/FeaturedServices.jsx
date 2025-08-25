'use client'

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench,  ArrowRight } from "lucide-react";
import { ServiceData } from "@/data/services";
import { ServiceCard } from "../Card/ServiceCard";


// Main Featured Services Component
export default function FeaturedServices() {
  return (
    <section className="relative py-10 md:py-10 bg-gray-50 overflow-hidden">
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
        <div className="w-full mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ServiceData.slice(0,8).map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-8">
          <Button size="lg" className="rounded-full gap-2" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

