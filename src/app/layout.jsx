

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/shared/Footer/Footer";
import { Navbar } from "@/components/ui/shared/Navbar/Navbar";
import { FloatingButtons } from "@/components/ui/shared/FloatingButtons/FloatingButtons";
import GoogleAnalytics from "@/seo/GoogleAnalytics";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


// export const metadata = {
//   title: "Fix Car Dubai | 24/7 Mobile Car Repair & Battery Replacement in Dubai",
//   description: "Fix Car Dubai provides professional car repair, servicing, battery replacement, AC repair, oil change, and detailing services across Dubai. 24/7 mobile service to your home, office, or roadside.",
//   verification: {
//     google: "6ZILuBDzgWNdHqeSTWIMSTG8ZbnR19Gw-8hG90gFFlQ"
//   },
//   alternates: {
//     canonical: SiteConfig.url,
//   },
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon.ico",
//     apple: "/apple-touch-icon.png",
//   },
// };


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <div>
          <Navbar />
          {children}
          <SpeedInsights />
          <Analytics />
          <FloatingButtons />
          <Footer />
        </div>
      </body>
    </html>
  );
}
