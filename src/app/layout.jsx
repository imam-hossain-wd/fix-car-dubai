

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/ui/shared/Footer/Footer";
import { Navbar } from "@/components/ui/shared/Navbar/Navbar";
import { FloatingButtons } from "@/components/ui/shared/Buttons/FloatingButtons/FloatingButtons";
import { MobileBottomNav } from "@/components/ui/shared/Navbar/MobileBottomNav";
import { FloatingButton } from "@/components/ui/shared/FloatingButton/FloatingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Car Repair and Services in Dubai || 24 Car Service Dubai",
  description: "One of the best car repair and servicing company in dubai || 24 Car Service Dubai",
  verification: {
    google: "0EZ3v7hLpAZDBl4powBmsZpjU6-masTneZBr6-Q8G3g"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          {/* <Navbar /> */}
          {children}
          <SpeedInsights/>
          <Analytics />
          {/* <FloatingButtons /> */}
          {/* <MobileBottomNav />
          <FloatingButton />
          <Footer /> */}
        </div>
      </body>
    </html>
  );
}
