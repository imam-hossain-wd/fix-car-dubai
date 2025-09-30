
// ServiceAreaHomeBanner


import { MapPin, Clock, Star, Shield, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { serviceAreasBanner } from "@/utils/assets";
import { SiteConfig } from "@/config/site";
import Link from "next/link";

export function ServiceAreaHomeBanner({ area }) {


  const { serviceareabanner } = serviceAreasBanner;
  // Static background image (you can replace with your own)
  const backgroundImage = serviceareabanner

  // Dynamic content based on area
  const areaFeatures = {
    "al-karama": {
      highlight: "Central Dubai Location",
      description: "Fast service in the heart of Dubai with easy access to major roads",
      responseTime: "15 min"
    },
    "oud-metha": {
      highlight: "Medical District Specialist",
      description: "Quiet, efficient service near healthcare facilities",
      responseTime: "20 min"
    },
    "al-hamriya": {
      highlight: "Coastal Area Expert",
      description: "Specialized service for coastal climate vehicle care",
      responseTime: "25 min"
    },
    "al-jaffiliya": {
      highlight: "Metro Access Area",
      description: "Convenient service near Dubai Metro stations",
      responseTime: "18 min"
    },
    "zabeel": {
      highlight: "Luxury Car Specialist",
      description: "Premium service for high-end vehicles in upscale areas",
      responseTime: "22 min"
    },
    "al-fahidi": {
      highlight: "Historic District Service",
      description: "Expert care for classic and modern vehicles",
      responseTime: "20 min"
    },
    "al-raffa": {
      highlight: "Commercial Hub Service",
      description: "Fast turnaround for business district vehicles",
      responseTime: "16 min"
    },
    "al-mina": {
      highlight: "Port Area Specialist",
      description: "Marine climate vehicle maintenance experts",
      responseTime: "28 min"
    },
    "al-hudaiba": {
      highlight: "Beach Proximity Service",
      description: "Specialized care for beach-area vehicle maintenance",
      responseTime: "24 min"
    },
    "al-jaddaf": {
      highlight: "Cultural District Expert",
      description: "Service near Dubai's cultural landmarks",
      responseTime: "26 min"
    }
  };

  const areaData = areaFeatures[area?.slug] || {
    highlight: "Dubai's Trusted Service",
    description: "Professional mobile car service across Dubai",
    responseTime: "30 min"
  };

  const {
    contactLinks, socialLinks, footerhrefs, navItems, services, serviceAreas, coordinate, location, numberCallLink, whatsappCallLink, operatingHours, displayNumber, description, email, url, brandName, authorName
  } = SiteConfig;

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={`Car service in ${area?.name}, Dubai`}
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 inset-0 bg-slate-900/70 z-10"></div>
        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>

      <div className="container relative mx-auto px-4 max-w-6xl z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="text-white space-y-6">

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl mt-5 font-bold leading-tight">
              Premium Car Service in{" "}
              <span className="text-amber-300 drop-shadow-lg">{area?.name}</span>
            </h1>

            {/* Highlight Feature */}
            <div className="flex w-80 items-center gap-4 px-4 py-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <p className="text-lg text-amber-200 font-semibold">
                {areaData.highlight}
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
              {areaData.description}. Experience top-quality auto repair services
              delivered directly to your location in {area?.name} with guaranteed
              satisfaction and rapid response times.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-3">
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <Clock className="w-6 h-6 text-amber-300 mx-auto mb-2" />
                <p className="text-lg font-bold">{areaData.responseTime}</p>
                <p className="text-sm text-white/70">Avg. Response</p>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <Star className="w-6 h-6 text-amber-300 mx-auto mb-2" />
                <p className="text-lg font-bold">4.9/5</p>
                <p className="text-sm text-white/70">Rating</p>
              </div>
              <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                <Shield className="w-6 h-6 text-amber-300 mx-auto mb-2" />
                <p className="text-lg font-bold">24/7</p>
                <p className="text-sm text-white/70">Available</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 pb-4">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Certified Technicians
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Free Diagnosis
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                12-Month Warranty
              </div>
            </div>
          </div>

          {/* Right Side - Service Card */}
          <div className="relative mb-10">
            {/* Main Service Card */}
            <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full border border-amber-400/30">
                  <MapPin className="w-4 h-4" />
                  <span className="font-semibold">{area?.name} Coverage Map</span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Service Available in Your Area
                </h3>

                {/* Service Features List */}
                <div className="space-y-3 text-left">
                  {[
                    "Mobile Car Battery Replacement",
                    "24/7 Emergency AC Repair",
                    "On-Site Oil Change Service",
                    "Brake System Maintenance",
                    "Radiator & Cooling System",
                    "Complete Car Diagnostics"
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-3 text-white/90">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Contact */}
                <div className="pt-6 border-t border-white/20">
                  <div className="flex gap-3">
                    <Button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      <Link href={whatsappCallLink}>
                        WhatsApp
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1 bg-white/10 hover:bg-white/20 text-white border-white/30 py-3 rounded-lg">
                      <Phone className="w-4 h-4 mr-2" />
                      <Link href={numberCallLink}>
                        Call Now
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-green-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}