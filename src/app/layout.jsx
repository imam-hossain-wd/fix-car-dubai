

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/shared/Footer/Footer";
import { Navbar } from "@/components/ui/shared/Navbar/Navbar";
import { FloatingButtons } from "@/components/ui/shared/FloatingButtons/FloatingButtons";
import GoogleAnalytics from "@/seo/GoogleAnalytics";
import Head from "next/head";
import { LocalBusinessSchema } from "@/schemas/localBusinessSchema";
import { OrganizationSchema } from "@/schemas/OrganizationSchema";
import { ServicesSchema } from "@/schemas/ServicesSchema";
import { LocationSchema } from "@/schemas/LocationSchema";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <Head>
        <LocalBusinessSchema />
        <OrganizationSchema />
        <ServicesSchema />
        <LocationSchema />
      </Head>
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
