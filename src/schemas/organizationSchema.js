// lib/schema/organizationSchema.js

export const getOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "24 Car Service Dubai",
    "url": "https://24CarServiceDubai.com/",
    "logo": "https://24CarServiceDubai.com/images/logo.webp", // IMPORTANT: Replace with your actual logo URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971568703512",
      "contactType": "Customer Service",
      "email": "mailto:carrepairsdubai@gmail.com",
      "areaServed": "AE" // United Arab Emirates
    },
    "sameAs": [
      "https://www.facebook.com/your-facebook-page",    // IMPORTANT: Replace with your actual Facebook URL
      "https://www.instagram.com/your-instagram-page",  // IMPORTANT: Replace with your actual Instagram URL
      "https://www.youtube.com/your-youtube-channel",   // IMPORTANT: Replace with your actual YouTube URL
      // Add other social media profiles here as needed
    ]
  };
};