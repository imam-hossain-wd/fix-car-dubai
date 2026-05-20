import { SiteConfig } from "@/config/site";
import CookiePolicy from "@/pages/CookiePolicy/CookiePolicy";


export const metadata = {
  title: "Cookie Policy | Fix Car Dubai",
  description: "Learn how Fix Car Dubai uses cookies and similar technologies to enhance your browsing experience and improve our services.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/cookies`,
  },
};

// Structured data for SEO
const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Cookie Policy",
  "description": metadata.description,
  "publisher": {
    "@type": "Organization",
    "name": "Fix Car Dubai",
    "url": SiteConfig.url,
    "logo": `${SiteConfig.url}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "email": SiteConfig.email,
      "contactType": "customer service"
    }
  },
  "inLanguage": "en-AE",
  "isPartOf": { "@type": "WebSite", "url": SiteConfig.url }
});

export default function Cookies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />
      <CookiePolicy />
    </>
  );
}