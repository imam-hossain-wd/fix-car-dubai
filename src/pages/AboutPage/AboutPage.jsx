import { Button } from "@/components/ui/button";
import { TrustedService } from "@/components/view/TrustedService/TrustedService";
import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import { CheckCircle, Phone } from "lucide-react";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | 24CarServiceDubai</title>
        <meta
          name="description"
          content="Learn more about 24CarServiceDubai – your trusted partner for automotive care in Dubai. Meet our team, understand our mission, and explore our award-winning services."
        />
      </Head>

      {/* Hero Section */}

<section className="relative h-[320px]  w-full bg-gradient-to-br from-emerald-500 to-teal-600 overflow-hidden">
  {/* Background elements */}
  <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMzYgMzRjMCAyLjIwOS0xLjc5MSA0LTQgNHMtNC0xLjc5MS00LTRzMS43OTEtNCA0LTRzNCAxLjc5MSA0IDR6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
  <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5"></div>
  <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10"></div>

  {/* Content container with vertical centering */}
  <div className="container h-full mx-auto px-4 flex flex-col justify-center items-center text-center relative">
    {/* Trust badge */}
    <div className="mb-3 sm:mb-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 animate-fade-in">
      <span className="text-white text-sm sm:text-base font-medium">Trusted Since 2010</span>
    </div>
    
    {/* Main heading - responsive font sizes */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 leading-tight">
      Dubai's Premier <br className="hidden xs:block" />
      <span className="text-primary">24/7 Mobile</span> Car Service
    </h1>
    
    {/* Subheading - responsive text */}
    <p className="text-sm sm:text-base text-white max-w-xs sm:max-w-md mx-auto mb-4 sm:mb-6">
      Immediate response ∙ Certified technicians ∙ Transparent pricing
    </p>
    
    {/* Buttons - responsive sizing */}
    <div className="flex  xs:flex-row gap-2 sm:gap-3 w-full sm:w-auto justify-center">
      <Button className="px-4 py-2 sm:px-6 sm:py-3 bg-white text-emerald-700 hover:bg-white/90 text-sm sm:text-base font-medium">
        Book Instant Service
      </Button>
      <Button variant="outline" className="px-4 py-2 sm:px-6 sm:py-3 border-white  hover:bg-white/10 text-sm sm:text-base font-medium">
        <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5" /> 800-24CAR
      </Button>
    </div>

    {/* Trust indicators - responsive layout */}
    <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-x-3 sm:gap-x-4 gap-y-1.5 text-xs sm:text-sm text-white">
      <div className="flex items-center">
        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-emerald-200" />
        <span>100+ Certified Techs</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="w-3 h-3 sm:w-4 sm:w-4 mr-1 text-emerald-200" />
        <span>12-Month Warranty</span>
      </div>
      <div className="flex items-center">
        <CheckCircle className="w-3 h-3 sm:w-4 sm:w-4 mr-1 text-emerald-200" />
        <span>90% Same-Day</span>
      </div>
    </div>
  </div>
</section>

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* Divider */}
      <div className="container mx-auto px-4">
        <hr className="my-12 border-t border-gray-200" />
      </div>

      {/* Trusted Service Section */}
      <TrustedService />

      {/* Call to Action Section */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Ready to Experience the Best Car Service in Dubai?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            From emergency repairs to routine maintenance, our dedicated team is here to help 24/7.
          </p>
          <a
            href="/book-service"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition"
          >
            Book a Service Now
          </a>
        </div>
      </section>
    </>
  );
}
