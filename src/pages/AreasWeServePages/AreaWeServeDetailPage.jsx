import BrandsWeService from "../../components/view/BrandsWeServe/BrandsWeServe";
import { FAQSection } from "../../components/view/FAQSection/FAQSection";
import FeaturedServices from "../../components/view/FeaturedServices/FeaturedServices";
import GetTouch from "../../components/view/GetTouch/GetTouch";
import HomeBanner from "../../components/view/Home/HomeBanner/HomeBanner";
import Reviews from "../../components/view/Reviews/Reviews";
import { TrustedService } from "../../components/view/TrustedService/TrustedService";
import { WhoWeAre } from "../../components/view/WhoWeAre/WhoWeAre";
import WhyChooseUs from "../../components/view/WhyChooseUs/WhyChooseUs";
import BlogCarousel from "../BlogPage/BlogCarousel";

export default function AreaWeServeDetailPage({area}) {
  return (
    <div>
        <div>{area.title}</div>

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
                    <GetTouch />
                    <FAQSection />
    </div>
  )
}
