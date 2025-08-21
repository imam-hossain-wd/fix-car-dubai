'use client'

import { ServicesGrid } from "@/components/view/Card/ServicesGrid";
import servicesData from "../../data/services.json";
import { SeoHead } from "@/seo/SeoHead";
import { getServicesPageSchema } from "@/schemas/servicePageSchema";


export default function ServicePage() {

 const pageTitle = "Our Mobile Car Repair Services in Dubai | 24 Car Service Dubai";
const pageDescription = "Explore comprehensive on-demand car repair services in Dubai including AC repair, battery replacement, engine diagnostics, oil change, and brake service. Available 24/7.";
const pageCanonical = "https://24CarServiceDubai.com/services"; // CORRECTED: Canonical URL for the Services page
const pageKeywords = "car services Dubai, mobile auto repair Dubai, Dubai car mechanics, vehicle repair services, on-site car service, Dubai auto care, emergency car services Dubai";

 const servicesPageSchema = getServicesPageSchema();


  return (
    <div>
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={pageCanonical}
        schema={servicesPageSchema} // Pass the services page specific schema
      />
      <div className="container py-12 mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Professional automotive services tailored to your needs
          </p>
        </div>

        <ServicesGrid services={servicesData.services} />
      </div>
    </div>
  );
}

