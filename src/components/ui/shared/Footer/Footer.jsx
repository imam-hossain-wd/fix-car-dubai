import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Shield, Award, Wrench } from "lucide-react";
import { SiteConfig } from "@/config/site";
import Image from "next/image";
import { bandlogo } from "@/utils/assets";


export function Footer() {
  const {
    serviceAreas,
    footerhrefs,
    socialLinks,
    email,
    city,
    services
  } = SiteConfig;


  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#F4A723]/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F4A723]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMyIgZmlsbD0iI2Y0YTcyMyIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3N2Zz4=')]"></div>

      <div className="container relative mx-auto px-4 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 relative z-10">

          {/* Brand Column */}
          <div className="space-y-6">

            <Link rel="me noopener"
              href="https://maps.google.com/maps?cid=5322276743882070861"
              target="_blank" >
              <div className="flex flex-col -my-14 -ml-10 ">
                <Image className="w-40 h-40 " src={bandlogo.carfixdubailogo} width={160} height={160} quality={100} alt="Fix Car Dubai - Official Brand of Car Repair & Battery Replacement Service Dubai" />
              </div>
              <h3 className="text-md text-primary font-bold mt-4">Car Repair & Battery Replacement Service Dubai </h3>
            </Link>

            <div className=" text-xs leading-relaxed">



              <h4 className="my-2 italic"> The Digital Home of Fix Car Dubai</h4>


              Fix Car Dubai, operating officially as Car Repair & Battery Replacement Service Dubai, is the leading provider of professional, mobile automotive solutions in the UAE. Based in Al Karama, we bring over 13 years of expert experience directly to your doorstep. From emergency roadside assistance and battery replacements to complex mechanical and AC repairs, our certified technicians ensure your vehicle remains reliable, wherever you are in Dubai. Experience the ultimate in automotive convenience—professional service, delivered to you.

              {/* is the leading provider of professional, mobile automotive solutions in the UAE. Based in Al Karama, we bring over a decade of expert experience directly to your doorstep. From emergency roadside assistance and battery replacements to complex mechanical and AC repairs, our certified technicians ensure your vehicle remains reliable, wherever you are in Dubai. Experience the ultimate in automotive convenience—professional service, delivered to you. */}

            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 bg-[#F4A723]/10 px-3 py-1.5 rounded-full border border-[#F4A723]/20">
                <Clock className="h-4 w-4 text-[#F4A723]" />
                <span className="text-xs text-gray-300">24/7 Service</span>
              </div>
              <div className="flex items-center gap-2 bg-[#F4A723]/10 px-3 py-1.5 rounded-full border border-[#F4A723]/20">
                <Shield className="h-4 w-4 text-[#F4A723]" />
                <span className="text-xs text-gray-300">Certified</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mt-6">
              <div className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-[#F4A723]/10 transition-all border border-white/5">
                <div className="p-2 bg-[#F4A723] rounded-full">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div>
                  <Link
                    href="tel:+971568703512"
                    className="text-sm font-medium text-white hover:text-[#F4A723]"
                  >
                    +971 56 870 3512
                  </Link>
                  <p className="text-xs font-medium text-white mt-1">24/7 Emergency Support</p>
                </div>
              </div>

              <Link
                href="mailto:24carrepairdubai@gmail.com"
                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-[#F4A723]/10 transition-all border border-white/5"
              >
                <div className="p-2 bg-[#F4A723] rounded-full">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <span className="text-sm font-medium text-white hover:text-[#F4A723] transition-colors">{email}</span>
              </Link>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
              <div className="p-2 bg-[#F4A723] rounded-full">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-white">
                Al Karama, Dubai – United Arab Emirates
              </span>
            </div>

            <Link
              href="https://www.google.com/maps?cid=5322276743882070861"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-[#F4A723] underline ml-2"
            >
              View our Google Business Profile
            </Link>

          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-white">
              <Wrench className="h-5 w-5 text-[#F4A723]" />
              Our Services
            </h3>
            <nav className="grid grid-cols-1 gap-1">
              {services?.map((service, index) => (
                <Link
                  key={index}
                  href={`/dubai/services/${service.slug}`}
                  className="text-sm text-gray-300 hover:text-[#F4A723] transition-all p-1 rounded-lg hover:bg-[#F4A723]/10 flex items-center gap-3 group border border-transparent hover:border-[#F4A723]/20"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F4A723] group-hover:scale-125 transition-transform"></div>
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-white">
              <MapPin className="h-5 w-5 text-[#F4A723]" />
              Service Areas
            </h3>
            <div className="grid grid-cols-1 gap-1">
              {serviceAreas.map((location, index) => (
                <Link
                  key={index}
                  href={location.href}
                  className="flex items-center gap-3 p-1 rounded-lg hover:bg-[#F4A723]/10 transition-all border border-transparent hover:border-[#F4A723]/20"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F4A723]"></div>
                  <span className="text-sm text-gray-300">
                    {location.name}, {city}
                  </span>
                </Link>
              ))}
            </div>
          </div>


          {/* Company & Social Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 text-white">
              <Award className="h-5 w-5 text-[#F4A723]" />
              Company
            </h3>
            <nav className="space-y-1">
              {footerhrefs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-[#F4A723] transition-all p-1 rounded-lg hover:bg-[#F4A723]/10 flex items-center gap-3 group border border-transparent hover:border-[#F4A723]/20"
                >
                  <div className="w-2 h-2 rounded-full bg-[#F4A723] group-hover:scale-125 transition-transform"></div>
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-sm font-medium mb-3 text-white">Follow Us</p>
              <div className="flex gap-3">
                {socialLinks.map(({ name, icon: Icon, href }) => (
                  <Link
                    key={name}
                    href={href}
                    aria-label={name}
                    className="p-3 bg-white/5 rounded-xl hover:bg-[#F4A723] hover:scale-110 transition-all duration-300 group border border-white/5"
                  >
                    <Icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </Link>
                ))}
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/5">
                <p className="text-sm font-medium mb-2 text-white">Stay Updated</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm placeholder:text-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-[#F4A723]"
                  />
                  <button className="bg-[#F4A723] text-gray-900 px-3 py-2 rounded-lg text-sm font-medium hover:bg-[#E5971C] transition-colors">
                    Join
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Local Business NAP for Search Engines */}
        <div className="sr-only">
          <span>Business Name: Car Repair & Battery Replacement Service Dubai</span>
          <span>Brand: Fix Car Dubai</span>
          <span>Address: Al Karama, Dubai, United Arab Emirates</span>
          <span>Phone: +971568703512</span>
          <span>Website: https://fixcardubai.com</span>
          <span>Google Maps CID: 5322276743882070861</span>
        </div>




        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center relative z-10">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            © {new Date().getFullYear()} Fix Car Dubai – Car Repair & Battery Replacement Service Dubai. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {footerhrefs.slice(-3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-400 hover:text-[#F4A723] transition-colors"
                target={link.href.endsWith('.xml') ? "_blank" : undefined}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}