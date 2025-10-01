import { SiteConfig } from "@/config/site";
import HomePage from "@/pages/HomePage/HomePage";


export const metadata = {
  title: "Fix Car Dubai | 24/7 Mobile Car Repair & Battery Replacement in Dubai",
  description: "Fix Car Dubai provides professional car repair, servicing, battery replacement, AC repair, oil change, and detailing services across Dubai. 24/7 mobile service to your home, office, or roadside.",
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
