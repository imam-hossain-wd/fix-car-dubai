// import Link from "next/link";
// import Image from "next/image";
// import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
// import { FootersiteConfig, SiteConfig } from "@/config/site";
// import { bandlogo } from "@/utils/assets";

// export function Footer() {
//   // const locations = [
//   //   "Al Mankhool - Dubai , UAE",
//   //   "Al Karama - Dubai , UAE",
//   //   "Al Satwa - Dubai , UAE",
//   //   "Jumeirah - Dubai , UAE",
//   //   "Al Barsha - Dubai , UAE",
//   //   "Al Fahidi - Dubai , UAE",
//   //   "Al Jaddaf - Dubai , UAE",    
//   //   "Al Jaffiliya - Dubai , UAE",
//   //   "Dubai Marina - Dubai , UAE",
//   //   "Downtown Dubai - Dubai , UAE",
//   // ];

//   // const services = [
//   //   "Car Battery Replacement",
//   //   "Car Brake Pad Repair",
//   //   "Car Maintenance",
//   //   "Gearbox Repair & Service",
//   //   "Car Radiator Service",
//   //   "Air Conditioner Repair",
//   //   "Engine Oil Change"
//   // ];

//   const {
//     contactLinks, socialLinks, footerhrefs, navItems, services, serviceAreas, cordinate, location, whatsappNumber, callNumber, displayNumber, description, email, url, brandName, authorName
//   } = SiteConfig;

//   return (
//     <footer className="bg-gradient-to-br from-green-600 to-green-800 text-white">
//       <div className="container mx-auto px-4 py-12">
//         {/* Main Footer Content */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">

//           {/* Brand Column */}
//           <div className="mb-3 -mt-3">
//             <Link href="/" className="flex flex-col gap-3 hover:opacity-90 transition-opacity">
//               <div className="relative w-20 h-20">
//                 <Image
//                   src={bandlogo.logo3}
//                   fill
//                   alt={`${brandName} Logo`}
//                   className="object-contain"
//                 />
//               </div>
//               {/* <span className="text-xl font-bold">{FootersiteConfig.name}</span> */}
//             </Link>
//             <p className="text-sm opacity-90">{description}</p>


//               <div className="mt-4 space-y-3">
//                 <div className="flex items-start gap-3">
//                   <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-300" />
//                   <div>
//                     <Link
//                       href="tel:+971568703512"
//                       className="text-sm hover:text-green-300 transition-colors block"
//                     >
//                       {displayNumber}
//                     </Link>
//                     <p className="text-xs opacity-80 mt-1">24/7 Emergency Support</p>
//                   </div>
//                 </div>

//                 <div className="flex items-start gap-3">
//                   <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-green-300" />
//                   <Link
//                     href="mailto:carrepairsdubai@gmail.com"
//                     className="text-sm hover:text-green-300 transition-colors"
//                   >
//                     {email}
//                   </Link>
//                 </div>


//               </div>

//                {/* Social Links */}
//             <div className="flex gap-4 pt-2">
//               <Link
//                 href="#"
//                 aria-label="Facebook"
//                 className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
//               >
//                 <Facebook className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="#"
//                 aria-label="Instagram"
//                 className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
//               >
//                 <Instagram className="h-5 w-5" />
//               </Link>
//               <Link
//                 href="#"
//                 aria-label="Twitter"
//                 className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-all"
//               >
//                 <Twitter className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>

//           {/* Services Column - Collapsible on mobile */}
//           <div className="space-y-4">
//             <details className="group [&_summary::-webkit-details-marker]:hidden" open>
//               <summary className="flex cursor-pointer items-center justify-between gap-1.5">
//                 <h3 className="text-lg font-semibold">Our Services</h3>
//                 <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:-rotate-180 lg:hidden" />
//               </summary>

//               <nav className="mt-4 grid grid-cols-1 gap-2">
//                 {services.map((service, index) => (
//                   <Link
//                     key={index}
//                     href={`/services/${services.href}`}
//                     className="flex items-center gap-2 text-sm hover:text-green-300 transition-colors"
//                   >
//                     <span className="h-1 w-1 rounded-full bg-white/80"></span>
//                     {service}
//                   </Link>
//                 ))}
//               </nav>
//             </details>
//           </div>


// <div className="flex items-start gap-3">
//   <div className="w-full">
//     <h4 className="font-medium text-lg">Service Areas:</h4>
//     <ul className="mt-2 text-sm space-y-1.5 list-disc pl-5"> {/* `list-disc` adds bullets, `pl-5` indents */}
//       {serviceAreas.map((location, index) => (
//         <li key={index} className="opacity-90 hover:opacity-100 transition-opacity">
//           {location}
//         </li>
//       ))}
//     </ul>
//   </div>
// </div>

//           {/* Company Links Column - Collapsible on mobile */}
//           <div className="space-y-4">
//             <details className="group [&_summary::-webkit-details-marker]:hidden" open>
//               <summary className="flex cursor-pointer items-center justify-between gap-1.5">
//                 <h3 className="text-lg font-semibold">Company</h3>
//                 <ChevronDown className="h-5 w-5 transition-transform duration-300 group-open:-rotate-180 lg:hidden" />
//               </summary>

//               <nav className="mt-4 space-y-2">
//                 {footerhrefs.map((link) => (
//                   <Link
//                     key={link.href}
//                     href={link.href}
//                     className="flex items-center gap-2 text-sm hover:text-green-300 transition-colors"
//                   >
//                     <span className="h-1 w-1 rounded-full bg-white/80"></span>
//                     {link.title}
//                   </Link>
//                 ))}
//               </nav>
//             </details>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="mt-12 pt-8 border-t border-white/10 text-center">
//           <p className="text-sm opacity-80">
//             © {new Date().getFullYear()} {FootersiteConfig.name}. All rights reserved.
//           </p>
//           <div className="mt-2 flex justify-center gap-4 text-xs opacity-70">
//             <Link href="/privacy-policy" className="hover:opacity-100 transition-opacity">
//               Privacy Policy
//             </Link>
//             <Link href="/terms" className="hover:opacity-100 transition-opacity">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, ChevronDown } from "lucide-react";
import { SiteConfig } from "@/config/site";
import { bandlogo } from "@/utils/assets";
import Logo from "../Logo/Logo";

export function Footer() {


  const {
    brandName,
    phoneNumber,
    serviceAreas,
    services,
    footerhrefs,
    socialLinks,
    email,
    city
  } = SiteConfig;

  return (
    <footer className="bg-[#00963B] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="-mt-5 mb-4">


            {/* <div className="">
              <Logo />
            </div> */}

            <p className="text-sm text-white/80 ">
              Dubai's premier mobile car repair service, delivering expert solutions 24/7.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mt-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <div>
                  <Link
                    href="tel:+971506695990"
                    className="text-sm font-medium hover:text-amber-400 transition-colors"
                  >
                    {phoneNumber}
                  </Link>
                  <p className="text-xs text-white/60 mt-1">24/7 Emergency Support</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <Link
                  href="mailto:24carrepairdubai@gmail.com"
                  className="text-sm font-medium hover:text-amber-400 transition-colors"
                >
                  {email}
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-amber-400" />
                <p className="text-sm font-medium">Mobile Service Across Dubai</p>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2">Our Services</h3>
            <nav className="grid grid-cols-1 gap-2">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors flex items-start gap-2"
                >
                  <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
                  {service.title}
                </Link>
              ))}
            </nav>
          </div>

          {/* Service Areas Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2">Service Areas</h3>
            <div className="grid grid-cols-1 gap-2">
              {serviceAreas.map((location, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
                  <span className="text-sm text-white/80">{location} , {city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2">Company</h3>
            <nav className="space-y-2">
              {footerhrefs.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/80 hover:text-amber-400 transition-colors flex items-start gap-2"
                >
                  <span className="inline-block w-1 h-1 mt-2 rounded-full bg-amber-400"></span>
                  {link.title}
                </Link>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              {socialLinks.map(({ name, icon: Icon, href }) => (
                <Link
                  key={name}
                  href={href}
                  aria-label={name}
                  className="p-2 bg-white/10 rounded-full hover:bg-amber-500 hover:bg-opacity-20 transition-all"
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>

          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-xs text-white/60 hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/60 hover:text-amber-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}