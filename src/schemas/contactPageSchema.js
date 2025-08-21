// lib/schema/contactPageSchema.js

export const getContactPageSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us - 24 Car Service Dubai",
    "url": "https://24CarServiceDubai.com/contact",
    "description": "Get in touch with 24 Car Service Dubai for immediate on-demand car repair and battery replacement services across Dubai. Available 24/7.",
    "mainEntity": {
      "@type": "ContactPoint",
      "telephone": "+971568703512",
      "contactType": "customer service",
      "email": "mailto:carrepairsdubai@gmail.com",
      "url": "https://24CarServiceDubai.com/contact",
      "areaServed": "AE", // United Arab Emirates
      "availableLanguage": ["en", "ar"] // Specify languages you serve
    }
  };
};