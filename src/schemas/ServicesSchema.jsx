"use client";

import { SiteConfig } from "@/config/site";

export const ServicesSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SiteConfig.url}#services`,
    "provider": {
      "@type": "AutoRepair",
      "name": SiteConfig.brandName,
      "url": SiteConfig.url
    },
    "serviceType": SiteConfig.services.map((service) => service.name),
    "areaServed": SiteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      "name": area.name
    }))
  };

  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
  );
};
