 import { SiteConfig } from '@/config/site';
import AboutPage from '@/pages/AboutPage/AboutPage'
import React from 'react'
 

export const metadata = {
  title: "About Fix Car Dubai | Expert Mobile Car Repair & Battery Replacement",
  description: "Learn about Fix Car Dubai – Dubai's trusted mobile car repair and battery replacement service. 24/7 professional auto service at home, office, or roadside.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/about`,
  },
  other: {
    keywords: "about Fix Car Dubai, car repair Dubai, mobile mechanic Dubai, battery replacement Dubai, car AC repair Dubai, oil change Dubai",
  },
};


 export default function Aboout() {
   return <AboutPage />
 }
 