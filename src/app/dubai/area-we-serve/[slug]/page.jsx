

import { SiteConfig } from '../../../../config/site';
import AreaWeServeDetailPage from '../../../../pages/AreasWeServePages/AreaWeServeDetailPage';

const {serviceAreas
} = SiteConfig;


export default async function AreaWeServeDetail({ params }) {
const slug = await params?.slug;

  const area = serviceAreas.find(
    (s) => s.slug === slug
  ) 

    if (!area) {
    return notFound()
  }

 return <AreaWeServeDetailPage area={area} />
}

