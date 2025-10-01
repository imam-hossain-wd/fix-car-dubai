
// import { ServiceData } from '@/data/services'
// import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'



// export default async function ServiceDetailPage({ params }) {
//   const service = ServiceData.find(
//     (s) => s.slug === params.slug
//   ) 

//   if (!service) {
//     return notFound()
//   }

//   return <ServiceDetailsPage service={service} />
// }


import { ServiceData } from '@/data/services'
import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'
import { notFound } from 'next/navigation'


// ✅ Dynamic metadata for SEO
export async function generateMetadata({ params }) {

  const {slug} = await params ; 
  const service = ServiceData.find((s) => s?.slug === slug)

  if (!service) {
    return {
      title: "Service Not Found | Fix Car Dubai",
      description: "The requested service could not be found in Dubai.",
    }
  }

  return {
    title: service.metaTitle || `${service.name} in Dubai | Fix Car Dubai`,
    description: service.metaDescription || service.intro?.content,
    alternates: {
      canonical: `https://www.fixcardubai.com/dubai/services/${service.slug}`,
    },
    other: {
      keywords: service.keywords?.join(", "),
    },
  }
}

// ✅ Actual page render
export default async function ServiceDetailPage({ params }) {

    const {slug} = await params ; 
  const service = ServiceData.find((s) => s?.slug === slug)
  // const service = ServiceData.find((s) => s?.slug === params?.slug)

  if (!service) return notFound()

  return <ServiceDetailsPage service={service} />
}
