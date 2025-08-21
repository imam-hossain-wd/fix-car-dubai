// lib/schema/localBusinessSchema.js

export const getLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair", // Or "AutomotiveBusiness" if more general
    "name": "24 Car Service Dubai",
    "image": "https://24CarServiceDubai.com/images/logo.webp", // Replace with your actual logo/main image URL
    "url": "https://24CarServiceDubai.com/",
    "telephone": "+971568703512",
    "email": "mailto:carrepairsdubai@gmail.com",
    "priceRange": "$$", // Adjust based on your pricing (e.g., $, $$, $$$)
    "description": "Your On-Demand Car Savior Anywhere, Anytime! We provide unparalleled 24/7 on-demand car services throughout Dubai, offering immediate, reliable, and professional assistance for all car repair and maintenance needs.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE",
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      {
        "@type": "AdministrativeArea",
        "name": "Al Jaddaf"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Al Mankhool"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Al Karama"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Dubai"
      }
    ],
    "brand": {
      "@type": "Brand",
      "name": "24 Car Service Dubai"
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=24+Car+Service+Dubai+Dubai",
    "slogan": "Your On-Demand Car Savior Anywhere, Anytime!",
    "founder": {
      "@type": "Person",
      "name": "Md Saiful Islam"
    },
    "alumniOf": "Car Repair Technician/Mechanic Training"
  };
};

