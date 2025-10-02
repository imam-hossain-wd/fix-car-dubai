"use client";

import { SiteConfig } from "@/config/site";

export const OrganizationSchema = () => {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SiteConfig.url}#organization`,
    "name": SiteConfig.brandName,
    "url": SiteConfig.url,
    "logo": `${SiteConfig.url}/logo.png`,
    "sameAs": SiteConfig.socialLinks.map((s) => s.href),
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": SiteConfig.displayNumber,
        "contactType": "customer service",
        "areaServed": "AE",
        "availableLanguage": ["en", "ar"]
      }
    ]
  };

  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
  );
};
