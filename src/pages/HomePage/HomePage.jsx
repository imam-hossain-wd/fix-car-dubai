import React from 'react'
import { FAQSection } from '@/components/view/FAQSection/FAQSection'
import HomeBanner from '@/components/view/Home/HomeBanner/HomeBanner'
import Reviews from '@/components/view/Reviews/Reviews'
import FeaturedServices from '@/components/view/FeaturedServices/FeaturedServices'
import { WhoWeAre } from '@/components/view/WhoWeAre/WhoWeAre'
import GetTouch from '@/components/view/GetTouch/GetTouch'
import { TrustedService } from '@/components/view/TrustedService/TrustedService'
import WhyChooseUs from '@/components/view/WhyChooseUs/WhyChooseUs'
import BlogCarousel from '@/components/view/BlogCarousel/BlogCarousel'
import { OurMission } from '@/components/view/OurMission/OurMission'
import dynamic from 'next/dynamic';
import FaqStructuredData from '@/seo/schemas/FaqStructuredData'
import { OurVision } from '@/components/view/OurVision/OurVision'
import { BatteryBrands } from '@/components/view/BatteryBrands/BatteryBrands'



const DynamicMap = dynamic(() => import('@/components/ui/shared/Map/MapComponent'), {
    // ssr: false,
    loading: () => (
        <div className="w-full h-125 bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center">
            <p className="text-gray-500 font-medium">Loading Map Module...</p>
        </div>
    ),
});


export default function HomePage() {

    return (
        <div>
            <FaqStructuredData />
            <HomeBanner />
            <FeaturedServices />
            <WhoWeAre />
            <OurMission />
            <OurVision />
            <WhyChooseUs />
            <BatteryBrands />
            <TrustedService />
            <Reviews />
            <BlogCarousel />
            <DynamicMap />
            <GetTouch />
            <FAQSection />
        </div>
    )
}
