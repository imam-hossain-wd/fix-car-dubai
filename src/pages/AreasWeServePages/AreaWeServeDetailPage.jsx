// import { ServiceAreaHomeBanner } from "@/components/view/ServiceAreaComponent/ServiceAreaHomeBanner/ServiceAreaHomeBanner";
// import BrandsWeService from "../../components/view/BrandsWeServe/BrandsWeServe";
// import { FAQSection } from "../../components/view/FAQSection/FAQSection";
// import FeaturedServices from "../../components/view/FeaturedServices/FeaturedServices";
// import GetTouch from "../../components/view/GetTouch/GetTouch";
// import Reviews from "../../components/view/Reviews/Reviews";
// import { TrustedService } from "../../components/view/TrustedService/TrustedService";
// import { WhoWeAre } from "../../components/view/WhoWeAre/WhoWeAre";
// import WhyChooseUs from "../../components/view/WhyChooseUs/WhyChooseUs";
// import BlogCarousel from "../../components/view/BlogCarousel/BlogCarousel";


// export default function AreaWeServeDetailPage({ area }) {


//   return (
//     <div>
//       <ServiceAreaHomeBanner area={area} />
//       {/* <FeaturedServices /> */}

//       <FeaturedServices />
//       <WhoWeAre />
//       <WhyChooseUs />
//       <BrandsWeService />
//       {/* <WhyChooseUs /> */}
//       {/* <TrustedByDubai /> */}
//       <TrustedService />
//       <Reviews />
//       {/* <BookAppointmentForm /> */}
//       <BlogCarousel />
//       <GetTouch />
//       <FAQSection />
//     </div>
//   )
// }


// src/pages/AreasWeServePages/AreaWeServeDetailPage.jsx

// import { ServiceAreaHomeBanner }
//   from "@/components/view/ServiceAreaHomeBanner/ServiceAreaHomeBanner";







import { AreaOverviewSection } from "@/components/view/ServiceAreaComponent/AreaOverviewSection/AreaOverviewSection";
import { EmergencyContent } from "@/components/view/ServiceAreaComponent/EmergencyContentSection/EmergencyContentSection";
import { ServiceAreaHomeBanner } from "@/components/view/ServiceAreaComponent/ServiceAreaHomeBanner/ServiceAreaHomeBanner";

export default function AreaWeServeDetailPage({
  area,
}) {

  return (
    <div>

      <ServiceAreaHomeBanner
        area={area}
      />
      <AreaOverview
        area={area}
      />
      <EmergencyContent
        area={area}
      />


    </div>
  );
}
