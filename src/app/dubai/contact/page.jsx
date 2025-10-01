import { SiteConfig } from "@/config/site";
import ContactPage from "@/pages/ContactPage/ContactPage";

export const metadata = {
  title: "Contact Fix Car Dubai | 24/7 Mobile Car Repair & Battery Service",
  description: "Get in touch with Fix Car Dubai for professional car repair, battery replacement, AC repair, and other auto services across Dubai. 24/7 mobile service to home, office, or roadside.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/contact`,
  },
  other: {
    keywords: "contact car repair Dubai, mobile mechanic Dubai, car battery replacement contact Dubai, car AC repair contact Dubai, auto service Dubai contact",
  },
};

export default function Contact() {
  return <ContactPage />
}
