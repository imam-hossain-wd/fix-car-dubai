import Breadcrumb from "@/components/ui/shared/BreadCrumb/BreadCrumb";
import { TrustedService } from "@/components/view/TrustedService/TrustedService";
import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import { CheckCircle} from "lucide-react";
import Head from "next/head";

export default function AboutPage() {

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]



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

      <div className="px-4 mx-auto bg-secondary/90 border-b">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <div className="text-center py-10 mb-10 bg-amber-50">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="w-12 h-0.5 bg-amber-400 mr-4"></div>
          <span className="text-amber-600 font-semibold uppercase tracking-wider text-sm">Trusted Since 2010</span>
          <div className="w-12 h-0.5 bg-amber-400 ml-4"></div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Dubai's Premier 24/7 Mobile Car Service</h1>
      </div>


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
            href="/dubai/book-appointment"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition"
          >
            Book a Service Now
          </a>
        </div>
      </section>
    </>
  );
}
