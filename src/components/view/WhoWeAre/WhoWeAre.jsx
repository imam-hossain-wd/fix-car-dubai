import Image from "next/image";
import { images } from "@/utils/assets";
import Link from "next/link";

export function WhoWeAre() {
  return (
    <section className="relative py-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50/50">
      {/* SEO-friendly hidden heading for screen readers */}
      <h1 className="sr-only">About Car Repair & Battery Replacement Service Dubai - Trusted Mobile Car Care Since 2016</h1>

      {/* Premium Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            <span className="text-sm font-semibold text-primary tracking-wide">SINCE 2016</span>
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
          </div> */}


          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-gray-900">
            Your Trusted{" "}
            <span className="text-primary relative inline-block">
              Car Care
              <svg className="absolute -bottom-2 left-0 w-full" height="4" viewBox="0 0 200 4" fill="none">
                <path d="M0 2Q100 6 200 2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>{" "}
            Partner
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Premier mobile automotive authority delivering workshop-on-wheels experience across Dubai
          </p>
        </div>

        {/* Main Content - Perfect Left Image | Right Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE - Image Section */}
          <div className="relative lg:sticky lg:top-24">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/20">
              {/* Main Image */}
              <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                  src={images.aboutus}
                  alt="Professional car repair technicians servicing vehicle in Dubai"
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
              </div>

              {/* Professional Badges on Image */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border-l-4 border-primary">
                <div className="flex items-center gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">13+</div>
                    <div className="text-xs text-gray-600">Years</div>
                  </div>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">5K+</div>
                    <div className="text-xs text-gray-600">Cars</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl px-4 py-2.5 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
                <span className="text-sm font-semibold text-gray-800">Google Verified</span>
              </div>

              <div className="absolute top-6 right-6 bg-primary text-white rounded-xl shadow-xl px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-sm font-semibold">Al Karama, Dubai</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full -z-10"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full -z-10"></div>
          </div>

          {/* RIGHT SIDE - All Your Content */}
          <div className="space-y-6">
            {/* Paragraph 1 - Company Introduction */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary/50 to-primary"></div>
              {/* <div className="p-6 md:p-8">
                <p className="text-gray-700 leading-relaxed text-base">
                  <strong className="text-primary text-lg">Car Repair & Battery Replacement Service Dubai</strong> is a premier, Google-verified mobile automotive authority headquartered in <strong className="text-gray-900">Al Karama, Dubai</strong>. Since 2016, we have redefined vehicle maintenance by delivering a "workshop-on-wheels" experience directly to your doorstep. With over <strong className="text-primary">13 years</strong> of industry expertise and a track record of servicing <strong className="text-primary">5,000+ vehicles</strong>, our certified technicians specialize in on-site mechanical and electrical solutions tailored to the extreme Dubai climate.
                </p>
              </div> */}

              <div className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  Dubai’s Authority in Mobile Auto Repair & Battery Services
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  <strong className="text-primary">Fix Car Dubai</strong> serves as the official digital brand for
                  <Link rel="me noopener"
                    href="https://maps.google.com/maps?cid=5322276743882070861"
                    target="_blank" >
                    <strong className="text-primary"> Car Repair & Battery Replacement Service Dubai</strong>
                  </Link>,
                  a Google-verified mobile mechanical unit strategically headquartered in <span className="font-semibold text-gray-900">Al Karama</span>.
                  We have disrupted the traditional "garage-visit" model by deploying a fleet of fully equipped,
                  <span className="italic text-gray-900"> "workshops-on-wheels"</span> that deliver precision diagnostics and repairs directly to your doorstep—anywhere in the city.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed text-base">
                  Our ASE-certified technicians leverage over <span className="font-semibold text-gray-900">13 years</span> of technical excellence to solve complex automotive failures on-site. From high-voltage battery failures in <span className="font-semibold text-gray-900">Business Bay</span> basement parkings to cooling system emergencies near <span className="font-semibold text-gray-900">Dubai Marina</span>, we bridge the gap between technical precision and rapid roadside recovery. We don’t just repair vehicles; we safeguard your schedule and restore mobility for over <strong className="text-gray-900">10,000 drivers</strong> across the UAE.
                </p>
              </div>
            </div>

            {/* Paragraph 2 - Convenience */}
            {/* <div className="bg-gradient-to-br from-blue-50/50 to-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">24/7 Mobile Convenience</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We eliminate the stress of traditional garage visits and towing costs by providing <strong className="text-primary">24/7 emergency roadside assistance</strong> and scheduled maintenance wherever you are—at home, the office, basement parking, or roadside. Our service fleet is equipped to handle all major vehicle makes and models with dealership-grade precision but with the speed and flexibility of a dedicated mobile unit.
                </p>
              </div>
            </div> */}

            {/* Our Specialized Mobile Services */}
            {/* <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Our Specialized Mobile Services
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🔋</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Emergency Battery Solutions:</h4>
                      <p className="text-gray-600">On-site car battery replacement, professional jump-starts, and alternator/starter motor repair.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">⚙️</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Mechanical & Electrical Excellence:</h4>
                      <p className="text-gray-600">Expert engine diagnostics, radiator repair, brake servicing, and comprehensive auto-electrical work.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">❄️</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Climate Control:</h4>
                      <p className="text-gray-600">High-performance AC repair and gas top-ups for reliable cooling in UAE heat.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="text-2xl">🛢️</div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Routine Care:</h4>
                      <p className="text-gray-600">On-site oil changes and preventative vehicle health checks.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Why We Are Dubai's Trusted Choice */}
            {/* <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl shadow-lg border border-primary/10 overflow-hidden">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Why We Are Dubai's Trusted Choice
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">✓</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Certified Expertise:</span>
                      <span className="text-gray-600 ml-1">Our team consists of elite, certified mechanics with deep technical knowledge.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">📍</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Unmatched Convenience:</span>
                      <span className="text-gray-600 ml-1">We serve Al Karama, Al Mankhool, Oud Metha, Dubai Healthcare City, Dubai Creek Harbour, Zaa'beel, Downtown Dubai, Dubai Festival City, and all surrounding Dubai neighborhoods.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">🛡️</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Commitment to Trust:</span>
                      <span className="text-gray-600 ml-1">We offer honest, upfront pricing with no hidden fees and provide warranty-backed services for total peace of mind.</span>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start p-3 rounded-lg hover:bg-white/50 transition-colors">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">⚡</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Rapid Response:</span>
                      <span className="text-gray-600 ml-1">Same-day service and fast arrival times to get you back on the road safely.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Closing Statement */}
            {/* <div className="bg-primary text-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 md:p-8">
                <p className="text-white/95 leading-relaxed text-base font-medium">
                  From a car that won't start to complex mechanical failures, <strong className="text-white font-bold">Car Repair & Battery Replacement Service Dubai</strong> brings transparent, fast, and world-class automotive care to every corner of the city.
                </p>
              </div>
            </div> */}

            {/* CTA Buttons */}
            {/* <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/dubai/book-appointment"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Book Appointment</span>
              </Link>
              <Link
                href="tel:+971501234567"
                className="inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 border border-gray-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Emergency Call</span>
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      {/* Schema.org markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Car Repair & Battery Replacement Service Dubai",
            "description": "Premier Google-verified mobile automotive authority in Al Karama, Dubai offering 24/7 emergency roadside assistance, battery replacement, and mechanical services since 2016.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Al Karama",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "foundingDate": "2016",
            "numberOfEmployees": "50+",
            "areaServed": {
              "@type": "City",
              "name": "Dubai"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "priceRange": "$$",
            "serviceType": [
              "Mobile Car Repair",
              "Battery Replacement",
              "Emergency Roadside Assistance",
              "Engine Diagnostics",
              "AC Repair",
              "Oil Change"
            ],
            "hasMap": "https://maps.app.goo.gl/rGwVC9pAheuhCscm7",
            "telephone": "+971501234567"
          })
        }}
      />
    </section>
  );
}