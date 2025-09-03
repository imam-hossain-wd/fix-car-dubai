import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";


export const SiteConfig = {
  authorName: "Md Saiful Islam",
  brandName: "Fix Car Dubai",
  url: "https://fixcardubai.com",
  email: "fixcardubai@gmail.com",
  description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
  displayNumber: "+971 56 870 3512",
  callNumber: "+971568703512",
  whatsappNumber: "+971568703512",
  location: "Al Karama, Dubai - UAE",
  coordinate: "25.2485261,55.3034075",
  serviceAreas: [
    "Al Karama",
    "Oud Metha",
    "Al Hamriya",
    "Al Jaffiliya",
    "Zabeel",
    "Al Fahidi",
    "Al Raffa",
    "Al Mina",
    "Al Hudaiba",
    "Al Jaddaf"
  ],
  operatingHours: [
    { day: "Saturday", hours: "24 Hours" },
    { day: "Sunday", hours: "24 Hours" },
    { day: "Monday", hours: "24 Hours" },
    { day: "Tuesday", hours: "24 Hours" },
    { day: "Wednesday", hours: "24 Hours" },
    { day: "Thursday", hours: "24 Hours" },
    { day: "Friday", hours: "24 Hours" },
  ],
  city: "Dubai",
  country: "UAE",
  services: [
    {
      name: "Car Battery Replacement",
      slug: "car-battery-replacement-dubai"
    },
    {
      name: "Car AC Repair",
      slug: "car-ac-repair-dubai"
    },
    {
      name: "Car Engine Oil Change",
      slug: "car-engine-oil-change-dubai"
    },
    {
      name: "Car Gear Oil Change",
      slug: "car-gear-oil-change-dubai"
    },
    {
      name: "Car Brake Pad Repair",
      slug: "car-brake-pad-repair-and-replacement-dubai"
    },
    {
      name: "Car Radiator Repair",
      slug: "car-radiator-repair-and-replacement-dubai"
    },
    {
      name: "ABS System Repair",
      slug: "abs-system-repair-dubai"
    },
    {
      name: "Car Maintenance",
      slug: "car-maintenance-dubai"
    },
    {
      name: "Car Detailing",
      slug: "denamocraft-tailored-car-transformation-dubai"
    },
    {
      name: "Car AC Gas Refill",
      slug: "car-ac-gas-fill-dubai"
    }
  ],

  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas We Serve", href: "/area-we-serve" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ],
  footerhrefs: [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Blog", href: "/blog" },
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Sitemap", href: "/sitemap.xml" }
  ],

  socialLinks: [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/fixcardubai" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/fixcardubai" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/fixcardubai" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/fixcardubai" }
  ],
  contactLinks: [
    { name: "Map", icon: MapPin, href: "https://maps.app.goo.gl/SPtYU8eEz5jw8fDa7" },
    { name: "Phone", icon: Phone, href: "tel:+971568703512" },
    { name: "Email", icon: Mail, href: "mailto:fixcardubai@gmail.com" }
  ]
}

const {
  contactLinks, socialLinks, footerhrefs, navItems, services, serviceAreas, coordinate, location, whatsappNumber, callNumber,operatingHours, displayNumber, description, email, url, brandName, authorName
} = SiteConfig;
