

import { SiteConfig } from '../../../../config/site';
import AreaWeServeDetailPage from '../../../../pages/AreasWeServePages/AreaWeServeDetailPage';


export default async function AreaWeServeDetail({ params }) {

  const { serviceAreas
  } = SiteConfig;

  const { slug } = await params

   if (!slug) {
    return notFound()
  }

  const area = serviceAreas.find(
    (s) => s.slug === slug
  )


  if (!area) {
    return notFound()
  }

  return <AreaWeServeDetailPage area={area} />
}

