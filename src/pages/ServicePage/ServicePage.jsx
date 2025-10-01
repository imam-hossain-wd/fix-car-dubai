'use client'

import { ServiceCard } from "@/components/view/Card/ServiceCard";
import { ServiceData } from "@/data/services";
import { SiteConfig } from "@/config/site";
import Link from "next/link";
import Breadcrumb from "@/components/ui/shared/BreadCrumb/BreadCrumb";




export default function ServicePage() {

  // const servicesPageSchema = getServicesPageSchema();

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' }
  ]

  return (
    <div className="min-h-screen">
      {/* Services Section */}
      <section className="">

        <div className="px-4 mx-auto bg-secondary/90 border-b">
          <Breadcrumb items={breadcrumbItems} />
        </div>

        <div className="text-center py-10 mb-10 bg-amber-50">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-amber-400 mr-4"></div>
            <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Our Services</span>
            <div className="w-12 h-0.5 bg-amber-400 ml-4"></div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Automotive Services</h1>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of automotive services to keep your vehicle running smoothly and safely on Dubai roads.
          </p>
        </div>
        <div className="container mx-auto px-4">
          {/* Section Header */}

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ServiceData.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-20 mb-10 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-amber-100 mb-8 max-w-2xl mx-auto">
                Our team of certified mechanics is ready to provide prompt and professional service at your location.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-amber-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <Link href={`tel:${SiteConfig.callNumber}`}>
                    Call Now: {SiteConfig.callNumber}
                  </Link>
                </button>
                <button className="bg-emerald-500 border-2 border-emerald-500 text-white hover:bg-emerald-600 hover:border-emerald-600 font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-md flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                  </svg>

                  <Link href={`tel:${SiteConfig.whatsappNumber}`}>
                    WhatsApp Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
