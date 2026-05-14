import Breadcrumb from "@/components/ui/shared/BreadCrumb/BreadCrumb";
import { TrustedService } from "@/components/view/TrustedService/TrustedService";
import { WhoWeAre } from "@/components/view/WhoWeAre/WhoWeAre";
import Link from "next/link";


export default function AboutPage() {

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]


  return (
    <>

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


      {/* <section className="py-10 bg-gray-50 border-t">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">
            Official Business Information
          </h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            Business Name: <strong>Car Repair & Battery Replacement Service Dubai</strong><br />
            Brand Name: <strong>Fix Car Dubai</strong><br />
            Location: Al Karama, Dubai – United Arab Emirates<br />
            Phone: <Link href="tel:+971568703512" className="text-primary">+971 56 870 3512</a><br />
            Website: <Link href="https://www.fixcardubai.com" className="text-primary">https://www.fixcardubai.com</a><br />
            Google Maps:{" "}
            <Link
              href="https://www.google.com/maps?cid=5322276743882070861"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              View Business Profile
            </a>
          </p>
        </div>
      </section> */}


      <section className="py-16 bg-gradient-to-b from-white to-gray-50/50">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-primary/5 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Verified Business
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Official Business Information
            </h2>
            <p className="text-gray-600">
              Serving Dubai with trusted mobile car services since 2010
            </p>
          </div>

          {/* Business Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Business Details Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Business Details</h3>
                  <p className="text-sm text-gray-500">Official Registration</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Business Name</p>
                  <p className="font-semibold text-gray-900">Car Repair & Battery Replacement Service Dubai</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Brand Name</p>
                  <p className="font-semibold text-gray-900">Fix Car Dubai</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Location</p>
                  <p className="font-semibold text-gray-900">Al Karama, Dubai – United Arab Emirates</p>
                </div>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">Contact Details</h3>
                  <p className="text-sm text-gray-500">Get in Touch</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Phone</p>
                  <Link href="tel:+971568703512" className="font-semibold text-primary hover:text-primary/80 transition-colors">
                    +971 56 870 3512
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Website</p>
                  <Link href="https://www.fixcardubai.com" target="_blank" rel="noopener noreferrer"
                    className="font-semibold text-primary hover:text-primary/80 transition-colors">
                    https://www.fixcardubai.com
                  </Link>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Google Maps</p>
                  <Link href="https://www.google.com/maps?cid=5322276743882070861"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors">
                    View Business Profile
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Banner */}
          <div className="mt-8 bg-primary/5 rounded-xl p-6 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-primary">Google Verified Business</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-primary/20"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-primary">Licensed & Insured</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-primary/20"></div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
                <span className="font-medium text-primary">Established 2010</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-primary/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Ready to Experience the Best Car Service in Dubai?
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            From emergency repairs to routine maintenance, our dedicated team is here to help 24/7.
          </p>
          <Link
            href="/dubai/book-appointment"
            className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary/90 transition"
          >
            Book a Service Now
          </Link>
        </div>
      </section>


    </>
  );
}
