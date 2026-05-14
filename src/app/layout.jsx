

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



// layout.tsx

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

// export default function RootLayout({ children }) {
//   return (
// <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
//   <body className="font-sans text-slate-900 antialiased">
//         {children}
//       </body>
//     </html>
//   )
// }


// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });




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
