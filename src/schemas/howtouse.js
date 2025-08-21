// pages/index.js or a component used specifically on the homepage
import Head from 'next/head';
import Script from 'next/script'; // Import next/script
import { getLocalBusinessSchema } from '@/lib/schema/localBusinessSchema'; // Adjust path as needed

export default function HomePage() {
  const localBusinessSchema = getLocalBusinessSchema();

  return (
    <>
      <Head>
        <title>Best Car Service and Car Repair in Dubai</title>
        <meta name="description" content="Your On-Demand Car Savior Anywhere, Anytime!" />
        {/* Other meta tags */}
      </Head>

      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Your page content */}
      <h1>Best Car Service and Car Repair in Dubai</h1>
      {/* ... */}
    </>
  );
}



// import { SeoHead } from '@/components/SeoHead'; // Adjust path based on your file structure
// import { getLocalBusinessSchema } from '@/lib/schema/localBusinessSchema';
// import { getOrganizationSchema } from '@/lib/schema/organizationSchema';

// export default function HomePage() {
//   // Define your SEO details for the homepage
//   const pageTitle = "Best Car Repair & Service in Dubai | 24 Car Service Dubai";
//   const pageDescription = "Get 24/7 on-demand car repair & battery replacement services anywhere in Dubai. Fast, reliable, and professional mobile car mechanics for all your vehicle needs.";
//   const pageKeywords = "car repair Dubai, car service Dubai, mobile car repair Dubai, battery replacement Dubai, 24/7 car service, car maintenance Dubai";
//   const pageCanonical = "https://24CarServiceDubai.com/";

//   // Get your schema objects
//   const localBusinessSchema = getLocalBusinessSchema();
//   const organizationSchema = getOrganizationSchema(); // You might combine these or use separate Script components if preferred

//   // Combine schemas if a page has multiple top-level schema types
//   // Note: For multiple top-level schema objects, you'd usually have separate <Script> tags
//   // or wrap them in an array if the page type supports it (e.g., WebPage with mainEntity array).
//   // For simplicity here, we'll just pass the LocalBusiness one.
//   // For Organization, you might want it in _document.js or your RootLayout if it's site-wide.

//   return (
//     <>
//       <SeoHead
//         title={pageTitle}
//         description={pageDescription}
//         keywords={pageKeywords}
//         canonicalUrl={pageCanonical}
//         schema={localBusinessSchema} // Pass the schema object
//       />

//       {/* If you want the Organization schema on every page via RootLayout, put it there */}
//       {/* Or if specific to this page: */}
//       {organizationSchema && (
//         <Script
//           id="organization-schema-home"
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
//         />
//       )}

//       {/* Your actual page content goes here */}
//       <main>
//         <h1>Welcome to 24 Car Service Dubai</h1>
//         {/* ... */}
//       </main>
//     </>
//   );
// }