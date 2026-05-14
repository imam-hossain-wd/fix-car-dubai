import { SiteConfig } from "@/config/site";
import { MapPin, Phone, Star, CheckCircle, Shield } from "lucide-react";
import Link from "next/link";

export function CompanyOverview() {
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Main Card */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          {/* Header Section with Gradient */}
          <div className="bg-gradient-to-r from-primary via-yellow-600 to-yellow-700 p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full mb-3">
                  <Shield className="h-4 w-4 text-white" />
                  <span className="text-white text-sm font-semibold">Google-Verified Business</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Fix Car Dubai
                </h2>
                <Link href={SiteConfig.mapsLink}  className="text-white/90 mt-2 text-lg">
                  Car Repair & Battery Replacement Service Dubai
                </Link>
              </div>
              
              {/* Rating Badge */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="text-white text-sm">Excellence Rated</div>
                <div className="text-white font-bold text-lg">5.0/5.0</div>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Description */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Premium Mobile Auto Repair
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fix Car Dubai operates as a premier Google-verified mobile auto repair business, 
                    providing expert car repair and battery replacement services throughout Dubai. 
                    Our professional technicians deliver on-site solutions directly to your location—whether 
                    at home, office, or roadside—ensuring convenience without compromising quality.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Mobile Service", icon: "🚗" },
                    { label: "24/7 Available", icon: "⏰" },
                    { label: "Warranty Included", icon: "🛡️" },
                    { label: "Same-Day Repair", icon: "⚡" }
                  ].map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                      <span className="text-xl">{feature.icon}</span>
                      <span className="text-gray-800 font-medium text-sm">{feature.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Contact & Location */}
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-5">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Contact & Visit Us</h4>
                  
                  <div className="space-y-4">
                    {/* Location */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">Our Location</div>
                        <p className="text-gray-700">
                          Al Karama, Dubai, United Arab Emirates
                        </p>
                        <button className="mt-2 text-primary hover:text-blue-700 text-sm font-medium inline-flex items-center gap-1">
                          <Link href={SiteConfig.mapsLink}>Get Directions →</Link>
                        </button>
                      </div>
                    </div>

                    {/* Contact */}
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">Direct Contact</div>
                        <p className="text-gray-700">Call us for immediate assistance</p>
                        <Link 
                          href={SiteConfig.numberCallLink}
                          className="mt-2 inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                          <Phone className="h-4 w-4" />
                          <span className="font-semibold">Call Now</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Google Business CTA */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-5 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold">Google Business Profile</div>
                      <div className="text-white/80 text-sm">Verified & Trusted</div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm mb-4">
                    Visit our profile for directions, customer reviews, service details, and real-time updates.
                  </p>
                  <button className="w-full bg-white text-gray-900 hover:bg-gray-100 font-semibold py-2.5 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2">
                    <span>View Our Profile</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-gray-900 font-bold text-lg">Ready for Professional Service?</div>
                  <div className="text-gray-600">Experience Dubai's trusted mobile auto repair solution</div>
                </div>
                <div className="flex gap-3">
                  <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">
                    Book Service
                  </button>
                  <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg border border-primary hover:bg-blue-50 transition-colors duration-300">
                    View Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}