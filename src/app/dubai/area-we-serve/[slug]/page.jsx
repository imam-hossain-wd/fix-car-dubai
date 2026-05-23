// import { SiteConfig } from "@/config/site";
// import AreaWeServeDetailPage from "@/pages/AreasWeServePages/AreaWeServeDetailPage";
// import { notFound } from "next/navigation";

// export async function generateMetadata({ params }) {
//   const { serviceAreas } = SiteConfig;

//   const { slug } = await params
//   const area = serviceAreas.find((s) => s.slug === slug);


//   if (!area) {
//     return {
//       title: "Area Not Found | Fix Car Dubai",
//       description: "The requested service area is not available in Dubai.",
//     };
//   }

//   const areaName = area.name;
//   const description = area.description;
//   const title = area.title;
//   const brand = SiteConfig.brandName;


//   return {
//     title: title,
//     description: description,
//     alternates: {
//       canonical: `${SiteConfig.url}${area.href}`,
//     },
//     openGraph: {
//       title: `${area.title} | ${brand}`,
//       description: `Reliable 24/7 car repair services in ${areaName}, Dubai. Mobile mechanic for battery replacement, AC repair, oil change, and roadside assistance.`,
//       url: `${SiteConfig.url}${area.href}`,
//       siteName: brand,
//       images: [
//         {
//           url: `${SiteConfig.url}/images/areas/${area.slug}.jpg`, // optional: create geo images per area
//           width: 1200,
//           height: 630,
//           alt: `Car Repair in ${areaName}`,
//         },
//       ],
//       locale: "en_US",
//       type: "website",
//     },
//   };
// }

// export default async function AreaWeServeDetail({ params }) {
//   const { serviceAreas } = SiteConfig;
//   const { slug } = await params
//   const area = serviceAreas.find((s) => s.slug === slug);

//   if (!area) return notFound();

//   return <AreaWeServeDetailPage area={area} />;
// }



// src/app/dubai/area-we-serve/[slug]/page.jsx

import { notFound } from "next/navigation";

import { SiteConfig } from "@/config/site";

import AreaWeServeDetailPage from "@/pages/AreasWeServePages/AreaWeServeDetailPage";
import { serviceAeas } from "@/data/servicearea";




// ==============================
// Generate Static Params
// ==============================

export async function generateStaticParams() {
  return serviceAeas?.map((area) => ({
    slug: area.slug,
  }));
}


// ==============================
// Dynamic SEO Metadata
// ==============================

export async function generateMetadata({ params }) {

  const { slug } = await params;

  const area = serviceAeas.find(
    (item) => item.slug === slug
  );

  if (!area) {
    return {
      title: "Area Not Found | Fix Car Dubai",
      description:
        "The requested service area is not available.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const {
    seo,
    hero,
    href,
    images,
    name,
  } = area;

  const canonicalUrl = `${SiteConfig.url}${href}`;

  return {
    title: seo.title,

    description: seo.description,

    keywords: [
      seo.primaryKeyword,
      ...seo.secondaryKeywords,
    ],

    authors: [
      {
        name: SiteConfig.authorName,
      },
    ],

    creator: SiteConfig.brandName,

    publisher: SiteConfig.brandName,

    metadataBase: new URL(SiteConfig.url),

    alternates: {
      canonical: canonicalUrl,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      title: seo.title,

      description: seo.description,

      url: canonicalUrl,

      siteName: SiteConfig.brandName,

      locale: "en_US",

      type: "website",

      images: [
        {
          url: `${SiteConfig.url}${images.cover}`,

          width: 1200,

          height: 630,

          alt: hero.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",

      title: seo.title,

      description: seo.description,

      images: [`${SiteConfig.url}${images.cover}`],
    },

    other: {
      "geo.region": "AE-DU",

      "geo.placename": `${name}, Dubai`,

      "geo.position":
        `${area.coordinates.lat};${area.coordinates.lng}`,

      ICBM:
        `${area.coordinates.lat}, ${area.coordinates.lng}`,
    },
  };
}


// ==============================
// Dynamic Area Page
// ==============================

export default async function AreaWeServeDetail({
  params,
}) {

  const { slug } = await params;

  const area = serviceAeas.find(
    (item) => item.slug === slug
  );

  if (!area) {
    notFound();
  }

  return (
    <AreaWeServeDetailPage
      area={area}
    />
  );
}