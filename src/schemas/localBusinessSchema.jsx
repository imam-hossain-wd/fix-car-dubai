"use client";

import { SiteConfig } from "@/config/site";



export const LocalBusinessSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${SiteConfig.url}#localbusiness`,
    "name": SiteConfig.brandName,
    "image": `${SiteConfig.url}/logo.png`,
    "url": SiteConfig.url,
    "telephone": SiteConfig.displayNumber,
    "email": SiteConfig.email,
    "priceRange": "AED",
    "description": SiteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SiteConfig.location,
      "addressLocality": SiteConfig.city,
      "addressRegion": SiteConfig.city,
      "addressCountry": SiteConfig.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SiteConfig.latitude,
      "longitude": SiteConfig.longitude,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "areaServed": SiteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      "name": area.name
    })),
    "brand": {
      "@type": "Brand",
      "name": SiteConfig.brandName
    },
    "hasMap": "https://maps.app.goo.gl/SPtYU8eEz5jw8fDa7",
    "slogan": "Your On-Demand Car Savior Anywhere, Anytime!",
    "founder": {
      "@type": "Person",
      "name": SiteConfig.authorName
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};


