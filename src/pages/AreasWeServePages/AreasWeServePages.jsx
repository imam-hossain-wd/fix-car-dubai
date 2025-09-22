


import { Button } from "@/components/ui/button";
import Breadcrumb from "@/components/ui/shared/BreadCrumb/BreadCrumb";
import { ServiceAreas } from "@/components/view/ServiceArea/ServiceAreas";
import { MapPin, ShieldCheck, Clock, Phone } from "lucide-react";

export default function AreasWeServePages() {

    const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Serve', href: '/areas-we-serve' }
  ]


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

          {/* CTA buttons from areas page */}
          {/* <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center min-w-[180px]">
              <i className="fas fa-phone-alt mr-3"></i>
              Call Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center min-w-[180px]">
              <i className="fab fa-whatsapp mr-3"></i>
              WhatsApp
            </button>
          </div> */}
        </div>
      </section>

      {/* Service Areas Component */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <ServiceAreas />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose <span className="text-primary">24 Car Service Dubai?</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="bg-primary/10 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Availability</h3>
              <p className="text-gray-600 text-sm">
                No matter the time or place, our mobile mechanics are just one call away.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="bg-primary/10 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Wide Coverage</h3>
              <p className="text-gray-600 text-sm">
                From Downtown to Jumeirah, we cover all major areas of Dubai quickly.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="bg-primary/10 w-14 h-14 mx-auto flex items-center justify-center rounded-full mb-4">
                <ShieldCheck className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Trusted Experts</h3>
              <p className="text-gray-600 text-sm">
                Our certified technicians ensure professional service and 100% satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Find Us On the Map</h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Easily locate the areas we cover in Dubai. Our mobile team reaches your location in minutes.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.530334!2d55.2852789!3d25.2375558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434b4cfcab71%3A0xbbb3ac95640ff0da!2sDubai!5e0!3m2!1sen!2sae!4v1686489560029!5m2!1sen!2sae"
              width="100%"
              height="400"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-white py-16 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-4">Need Car Help Right Now?</h2>
          <p className="text-white/90 mb-6">
            Whether you’re stuck on the road or need service at home, our team is available 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" /> Call Us Now
            </Button>
            <Button size="lg" variant="secondary" className="px-8 py-4 text-lg text-primary">
              Book Appointment Online
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
