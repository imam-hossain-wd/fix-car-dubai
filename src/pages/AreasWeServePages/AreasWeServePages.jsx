import Breadcrumb from "@/components/ui/shared/BreadCrumb/BreadCrumb";
import { AreaWhyChooseUs } from "@/components/view/AreaWhyChooseus/AreaWhyChooseus";
import { ServiceAreas } from "@/components/view/ServiceArea/ServiceAreas";
import { ServicesShowcase } from "@/components/view/ServicesShowcase/ServicesShowcase";
import { SiteConfig } from "@/config/site";
import { Phone, MessageCircle } from "lucide-react";


export default function AreasWeServePages() {

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Serve', href: '/areas-we-serve' }
  ]


  const {
    phoneNumber,
    phoneAction,
    whatsappCall,
  } = SiteConfig;


  return (
    <main className="bg-white">
      {/* Hero Section */}

      <div className="px-4 mx-auto bg-secondary/90 border-b">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="relative bg-amber-50 text-white py-10">
        {/* Decorative elements from service page */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-amber-300"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-blue-400"></div>
        </div>

        <div className="container mx-auto px-4 text-center text-black relative z-10">
          {/* Title decoration from service page */}
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-black mr-4"></div>
            <span className=" font-semibold uppercase tracking-wider text-sm">Our Coverage</span>
            <div className="w-12 h-0.5 bg-black ml-4"></div>
          </div>

          {/* Main heading from areas page */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Areas We <span className="text-black">Proudly Serve</span>
          </h1>

          {/* Subheading combining both styles */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            We provide fast, reliable mobile car services across all neighborhoods in Dubai
          </p>
        </div>
      </section>

      {/* Service Areas Component */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <ServiceAreas />
        </div>
      </section>

      <section className="py-6 bg-white">
        <div className="">
          <ServicesShowcase />
        </div>
      </section>


      <AreaWhyChooseUs />


      <div className="text-center  w-full border p-6 bg-gradient-to-r from-primary/10 to-primary/5 ">
        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-3">Need Immediate Assistance?</h3>
        <p className="text-gray-600 mb-4">Our team is available 24/7 to help with your car repair needs</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-5 justify-center">
          <a
            href={`tel:${phoneAction}`}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium"
          >
            <Phone className="w-5 h-5" />
            Call Now: {phoneNumber}
          </a>
          <a
            href={`https://wa.me/${whatsappCall}`}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>


    </main>
  );
}






