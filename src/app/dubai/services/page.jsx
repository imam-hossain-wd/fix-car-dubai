import { SiteConfig } from '@/config/site';
import ServicePage from '@/pages/ServicePage/ServicePage'
import React from 'react'


export const metadata = {
  title: "Car Repair & Services in Dubai | Fix Car Dubai",
  description: "Fix Car Dubai offers expert car repair, battery replacement, AC repair, oil change, brake service, radiator repair, and detailing across Dubai. 24/7 mobile service at home, office, or roadside.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/services`,
  },
  other: {
    keywords: "car repair Dubai, mobile car services Dubai, car battery replacement Dubai, car AC repair Dubai, oil change Dubai, brake pad replacement Dubai, radiator repair Dubai, car detailing Dubai, alternator repair Dubai, roadside car service Dubai",
  },
};


export default function Service() {
  return <ServicePage />
}
