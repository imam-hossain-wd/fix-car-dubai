

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
// import { Geist, Geist_Mono } from "next/font/google";
import { Inter, Montserrat } from 'next/font/google'
import "./globals.css";
import { Footer } from "@/components/ui/shared/Footer/Footer";
import { Navbar } from "@/components/ui/shared/Navbar/Navbar";
import { FloatingButtons } from "@/components/ui/shared/FloatingButtons/FloatingButtons";
import { GoogleAnalytics } from '@next/third-parties/google'

import StructuredData from "@/seo/schemas/StructuredData";
import StillHaveQuestion from "@/components/view/StillHaveQuestion/StillHaveQuestion";
import { SiteConfig } from "@/config/site";



// layout.tsx

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  metadataBase: new URL(SiteConfig.url),
  title: {
    default: "Fix Car Dubai | 24/7 Mobile Car Repair & Mechanic Service in Dubai",
    template: `%s | Fix Car Dubai`
  },
  description: "Fix Car Dubai offers 24/7 professional mobile car repair and emergency mechanic services across Dubai. Get onsite battery replacement, jump start, AC repair, and roadside assistance anywhere in Dubai. Reliable, fast, and professional auto service at your location.",
  keywords: [
    "car repair Dubai",
    "mobile mechanic Dubai",
    "emergency car repair Dubai",
    "car battery replacement Dubai",
    "roadside assistance Dubai",
    "onsite car service Dubai",
    "car AC repair Dubai",
    "jump start service Dubai",
    "best mechanic in Dubai",
    "24/7 auto repair Dubai"
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: SiteConfig.authorName }],
  creator: SiteConfig.brandName,
  publisher: SiteConfig.brandName,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Fix Car Dubai | 24/7 Mobile Car Repair & Mechanic Service",
    description: "Reliable onsite car repair and emergency mechanic services anywhere in Dubai. Available 24/7 for battery replacement, AC repair, and roadside assistance.",
    url: SiteConfig.url,
    siteName: SiteConfig.brandName,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/hero-image.webp",
        width: 1200,
        height: 630,
        alt: "Fix Car Dubai Mobile Mechanic Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Car Dubai | 24/7 Mobile Car Repair & Mechanic Service",
    description: "Fast and professional mobile car repair in Dubai. 24/7 onsite mechanic service for battery, AC, and roadside emergencies.",
    images: ["/hero-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "6ZILuBDzgWNdHqeSTWIMSTG8ZbnR19Gw-8hG90gFFlQ",
  },
};


export default function RootLayout({ children }) {
  return (
    // <html lang="en">
    //   <body
    //     className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //   >
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <body className="font-sans text-slate-900 antialiased">
        <StructuredData />
        {/* <GoogleAnalytics /> */}
        <GoogleAnalytics gaId="G-MWRWTD0J75" />
        <main className="w-[99%] mx-auto">
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <FloatingButtons />
          <StillHaveQuestion />
          <Footer />
        </main>
      </body>
    </html>
  );
}
