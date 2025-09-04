

import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import Reviews from '@/components/view/Reviews/Reviews'
import React from 'react'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import { getLocalBusinessSchema } from '@/schemas/localBusinessSchema'
import { getOrganizationSchema } from '@/schemas/organizationSchema'
import { SeoHead } from '@/seo/SeoHead'
import Script from 'next/script'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import BookAppointmentForm from '@/components/Forms/AppointmentForm'
import { TrustedByDubai, TrustedService} from '@/components/view/TrustedService/TrustedService'
import BlogCarousel from '../BlogPage/BlogCarousel'
import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'
import BrandsWeService from '@/components/view/BrandsWeServe/BrandsWeServe'

// import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'




export default function HomePage() {

    const pageTitle = "Best Car Repair & Service in Dubai | 24 Car Service Dubai";
    const pageDescription = "Get 24/7 on-demand car repair & battery replacement services anywhere in Dubai. Fast, reliable, and professional mobile car mechanics for all your vehicle needs.";
    const pageKeywords = "car repair Dubai, car service Dubai, mobile car repair Dubai, battery replacement Dubai, 24/7 car service, car maintenance Dubai";
    const pageCanonical = "https://24CarServiceDubai.com/";
    const localBusinessSchema = getLocalBusinessSchema();
    const organizationSchema = getOrganizationSchema();

    return (
        <div>

            <SeoHead
                title={pageTitle}
                description={pageDescription}
                keywords={pageKeywords}
                canonicalUrl={pageCanonical}
                schema={localBusinessSchema}
            />

            {organizationSchema && (
                <Script
                    id="organization-schema-home"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
                />
            )}
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
