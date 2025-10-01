

// import { SiteConfig } from '../../../../config/site';
// import AreaWeServeDetailPage from '../../../../pages/AreasWeServePages/AreaWeServeDetailPage';


// export default async function AreaWeServeDetail({ params }) {

//   const { serviceAreas
//   } = SiteConfig;

//   const { slug } = await params

//    if (!slug) {
//     return notFound()
//   }

//   const area = serviceAreas.find(
//     (s) => s.slug === slug
//   )


//   if (!area) {
//     return notFound()
//   }

//   return <AreaWeServeDetailPage area={area} />
// }


import { SiteConfig } from "@/config/site";
import AreaWeServeDetailPage from "@/pages/AreasWeServePages/AreaWeServeDetailPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { serviceAreas } = SiteConfig;

  const {slug}= await params
  const area = serviceAreas.find((s) => s.slug === slug);

  if (!area) {
    return {
      title: "Area Not Found | Fix Car Dubai",
      description: "The requested service area is not available in Dubai.",
    };
  }

  const areaName = area.name;
  const brand = SiteConfig.brandName;

  return {
    title: `${area.title} | ${brand}`,
    description: `Looking for expert car repair and maintenance in ${areaName}? ${brand} offers mobile car services including battery replacement, AC repair, brake service, oil change, radiator repair, and detailing in ${areaName}, Dubai. 24/7 roadside and home service available.`,
    alternates: {
      canonical: `${SiteConfig.url}${area.href}`,
    },
    other: {
      keywords: `car repair ${areaName} Dubai, mobile car service ${areaName}, car battery replacement ${areaName}, car AC repair ${areaName}, brake pad replacement ${areaName}, oil change ${areaName}, radiator repair ${areaName}, alternator repair ${areaName}, car detailing ${areaName}, emergency roadside car service ${areaName}`,
    },
    openGraph: {
      title: `${area.title} | ${brand}`,
      description: `Reliable 24/7 car repair services in ${areaName}, Dubai. Mobile mechanic for battery replacement, AC repair, oil change, and roadside assistance.`,
      url: `${SiteConfig.url}${area.href}`,
      siteName: brand,
      images: [
        {
          url: `${SiteConfig.url}/images/areas/${area.slug}.jpg`, // optional: create geo images per area
          width: 1200,
          height: 630,
          alt: `Car Repair in ${areaName}`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}

export default async function AreaWeServeDetail({ params }) {
  const { serviceAreas } = SiteConfig;
  
   const {slug}= await params
  const area = serviceAreas.find((s) => s.slug === slug);

  if (!area) return notFound();

  return <AreaWeServeDetailPage area={area} />;
}
