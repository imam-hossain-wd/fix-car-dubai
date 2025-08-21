export const getServicesPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service", // The page itself is a collection of services
    "name": "24 Car Service Dubai - Our Mobile Car Repair Services",
    "description": "Comprehensive 24/7 on-demand car repair and maintenance services available throughout Dubai.",
    "url": "https://24CarServiceDubai.com/services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "24 Car Service Dubai",
      "url": "https://24CarServiceDubai.com/"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Dubai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "24 Car Service Dubai - All Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Battery Replacement Dubai – Fast & Reliable Mobile Service",
            "url": "https://24CarServiceDubai.com/services/car-battery-replacement-dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car AC Repair Dubai – Professional Car Air Conditioning Services",
            "url": "https://24CarServiceDubai.com/services/car-ac-repair-dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Engine Oil & Gear Oil Change Dubai – Professional Car Lubrication Service",
            "url": "https://24CarServiceDubai.com/services/engine-oil-gear-oil-change-dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Brake Pad Repair and Replacement in Dubai – Affordable & Professional Service",
            "url": "https://24CarServiceDubai.com/services/car-brake-pad-repair-and-replacement-dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Car Radiator Repair and Replacement Dubai – Reliable & Affordable Service",
            "url": "https://24CarServiceDubai.com/car-radiator-repair-and-replacement-dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ABS System Repair Dubai – Expert Anti-Lock Braking Services",
            "url": "https://24CarServiceDubai.com/services/abs-system-repair-dubai"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DenamoCraft Tailored Car Transformation – Custom Car Modification Dubai",
            "url": "https://24CarServiceDubai.com/services/custom-car-modification-dubai" // ASSUMPTION: Based on your service listing, creating a logical URL. Confirm or adjust this URL.
          }
        }
      ]
    }
  };
};