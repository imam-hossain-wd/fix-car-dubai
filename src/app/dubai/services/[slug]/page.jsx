
import { ServiceData } from '@/data/services'
import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'



export default async function ServiceDetailPage({ params }) {
  const service = ServiceData.find(
    (s) => s.slug === params.slug
  ) 

  if (!service) {
    return notFound()
  }

  return <ServiceDetailsPage service={service} />
}