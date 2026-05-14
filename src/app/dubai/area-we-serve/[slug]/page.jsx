import { SiteConfig } from "@/config/site";
import AreaWeServeDetailPage from "@/pages/AreasWeServePages/AreaWeServeDetailPage";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { serviceAreas } = SiteConfig;

  const { slug } = await params
  const area = serviceAreas.find((s) => s.slug === slug);


  if (!area) {
    return {
      title: "Area Not Found | Fix Car Dubai",
      description: "The requested service area is not available in Dubai.",
    };
  }

  const areaName = area.name;
  const description = area.description;
  const title = area.title;
  const brand = SiteConfig.brandName;


  return {
    title: title,
    description: description,
    alternates: {
      canonical: `${SiteConfig.url}${area.href}`,
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
  const { slug } = await params
  const area = serviceAreas.find((s) => s.slug === slug);

  if (!area) return notFound();

  return <AreaWeServeDetailPage area={area} />;
}
