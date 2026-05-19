import { SiteConfig } from "@/config/site";
import HomePage from "@/pages/HomePage/HomePage";

// 24/7 Car Repair & Emergancy Auto Mobile Mechanic Service Dubai

export const metadata = {
  title: "Car Repair & Mobile Mechanic in Dubai | 24/7 Onsite Emergency Auto Repair Service",
  description: "Fix Car Dubai provides 24/7 onsite car repair and mobile mechanic services in Dubai. We offer emergency car repair, battery replacement, jump starts, and complete auto solutions. Fast response from Al Karama with reliable technicians and transparent pricing.",
  verification: {
    google: "6ZILuBDzgWNdHqeSTWIMSTG8ZbnR19Gw-8hG90gFFlQ"
  },
  alternates: {
    canonical: SiteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};



export default function Home() {
  return <HomePage />
}
