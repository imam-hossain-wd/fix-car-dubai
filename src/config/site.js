import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";


export const SiteConfig = {
  authorName: "Md Saiful Islam",
  brandName: "Fix Car Dubai",
  url: "https://fixcardubai.com",
  email: "fixcardubai@gmail.com",
  description: "Your On-Demand Car Savior Anywhere, Anytime in Dubai!",
  displayNumber: "+971 56 870 3512",
  numberCallLink: "tel:$+971568703512",
  whatsappCallLink: "https://wa.me/971568703512",
  location: "Al Karama, Dubai - UAE",
  latitude: "25.2485261",
  longitude: "55.3034075",
  coordinate: "25.2485261,55.3034075",
  serviceAreas: [
    {
      "name": "Al Karama",
      "href": "/dubai/area-we-serve/al-karama",
      "title": "Best Car Repair in Al Karama",
      "slug": "al-karama"
    },
    {
      "name": "Oud Metha",
      "href": "/dubai/area-we-serve/oud-metha",
      "title": "Best Car Repair in Oud Metha",
      "slug": "oud-metha"
    },
    {
      "name": "Al Hamriya",
      "href": "/dubai/area-we-serve/al-hamriya",
      "title": "Best Car Repair in Al Hamriya",
      "slug": "al-hamriya"
    },
    {
      "name": "Al Jaffiliya",
      "href": "/dubai/area-we-serve/al-jaffiliya",
      "title": "Best Car Repair in Al Jaffiliya",
      "slug": "al-jaffiliya"
    },
    {
      "name": "Zabeel",
      "href": "/dubai/area-we-serve/zabeel",
      "title": "Best Car Repair in Zabeel",
      "slug": "zabeel"
    },
    {
      "name": "Al Fahidi",
      "href": "/dubai/area-we-serve/al-fahidi",
      "title": "Best Car Repair in Al Fahidi",
      "slug": "al-fahidi"
    },
    {
      "name": "Al Raffa",
      "href": "/dubai/area-we-serve/al-raffa",
      "title": "Best Car Repair in Al Raffa",
      "slug": "al-raffa"
    },
    {
      "name": "Al Mina",
      "href": "/dubai/area-we-serve/al-mina",
      "title": "Best Car Repair in Al Mina",
      "slug": "al-mina"
    },
    {
      "name": "Al Hudaiba",
      "href": "/dubai/area-we-serve/al-hudaiba",
      "title": "Best Car Repair in Al Hudaiba",
      "slug": "al-hudaiba"
    },
    {
      "name": "Al Jaddaf",
      "href": "/dubai/area-we-serve/al-jaddaf",
      "title": "Best Car Repair in Al Jaddaf",
      "slug": "al-jaddaf"
    }
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
      slug: "/dubai/services/car-battery-replacement-dubai"
    },
    {
      name: "Car AC Repair",
      slug: "/dubai/services/car-ac-repair-dubai"
    },
    {
      name: "Car Engine Oil Change",
      slug: "/dubai/services/car-engine-oil-change-dubai"
    },
    {
      name: "Car Gear Oil Change",
      slug: "/dubai/services/car-gear-oil-change-dubai"
    },
    {
      name: "Car Brake Pad Repair",
      slug: "/dubai/services/car-brake-pad-repair-and-replacement-dubai"
    },
    {
      name: "Car Radiator Repair",
      slug: "/dubai/services/car-radiator-repair-and-replacement-dubai"
    },
    {
      name: "ABS System Repair",
      slug: "/dubai/services/abs-system-repair-dubai"
    },
    {
      name: "Car Maintenance",
      slug: "/dubai/services/car-maintenance-dubai"
    },
    {
      name: "Car Detailing",
      slug: "/dubai/services/denamocraft-tailored-car-transformation-dubai"
    },
    {
      name: "Car AC Gas Refill",
      slug: "/dubai/services/car-ac-gas-fill-dubai"
    }
  ],

  navItems: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/dubai/services" },
    { name: "Areas We Serve", href: "/dubai/area-we-serve" },
    { name: "About", href: "/dubai/about" },
    { name: "Contact", href: "/dubai/contact" },
    { name: "Blog", href: "/dubai/blog" },
  ],
  footerhrefs: [
    { title: "About Us", href: "/dubai/about" },
    { title: "Contact", href: "/dubai/contact" },
    { title: "Blog", href: "/dubai/blog" },
    { title: "Privacy Policy", href: "/dubai/privacy" },
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
  contactLinks, socialLinks, footerhrefs, navItems, services, serviceAreas, coordinate, location, numberCallLink, whatsappCallLink, operatingHours, displayNumber, description, email, url, brandName, authorName
} = SiteConfig;

// schema markup language
// local businesss schema , orginazation schema , 
