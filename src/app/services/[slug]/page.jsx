
import ServiceDetailsPage from '@/pages/ServicePage/ServiceDetailsPage'
import servicesData from '../../../data/services.json'


export default async function ServiceDetailPage({ params }) {
  const service = servicesData.services.find(
    (s) => s.slug === params.slug
  ) 

  if (!service) {
    return notFound()
  }

  return <ServiceDetailsPage service={service} />
}