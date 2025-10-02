"use client";

import { SiteConfig } from "@/config/site";

export const LocationSchema = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${SiteConfig.url}#location`,
    "name": SiteConfig.brandName,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": SiteConfig.location,
      "addressLocality": SiteConfig.city,
      "addressCountry": SiteConfig.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "25.2485261",
      "longitude": "55.3034075"
    },
    "hasMap": "https://maps.app.goo.gl/SPtYU8eEz5jw8fDa7"
  };

  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
  );
};
