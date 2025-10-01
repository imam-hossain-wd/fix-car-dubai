

import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import Reviews from '@/components/view/Reviews/Reviews'
import React from 'react'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import { getLocalBusinessSchema } from '@/schemas/localBusinessSchema'
import { getOrganizationSchema } from '@/schemas/organizationSchema'
// import { SeoHead } from '@/seo/SeoHead'
import Script from 'next/script'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import BookAppointmentForm from '@/components/Forms/AppointmentForm'
import { TrustedByDubai, TrustedService } from '@/components/view/TrustedService/TrustedService'
import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'
import BrandsWeService from '@/components/view/BrandsWeServe/BrandsWeServe'
import BlogCarousel from '@/components/view/BlogCarousel/BlogCarousel'
import { SiteConfig } from '@/config/site'

// import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'






export default function HomePage() {

    return (
        <div>

            {/* {organizationSchema && (
                <Script
                    id="organization-schema-home"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
            )} */}


            <HomeBanner />
            {/* <FeaturedServices /> */}
            <FeaturedServices />
            <WhoWeAre />
            <WhyChooseUs />
            <BrandsWeService />
            {/* <WhyChooseUs /> */}
            {/* <TrustedByDubai /> */}
            <TrustedService />
            <Reviews />
            {/* <BookAppointmentForm /> */}
            <BlogCarousel />
            <MapComponent />
            <GetTouch />
            <FAQSection />
        </div>
    )
}
