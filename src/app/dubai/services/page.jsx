import { SiteConfig } from '@/config/site';
import ServicePage from '@/pages/ServicePage/ServicePage'
import React from 'react'


export const metadata = {
  title: "Car Repair & Emergency Mobile Mechanic Services in Dubai | 24/7 Onsite Auto Repair",
  description: "Get expert car repair and emergency mobile mechanic services in Dubai. We provide 24/7 onsite auto repair including battery replacement, jump start, AC repair, brake service, radiator repair, oil change, and complete car maintenance across Dubai with fast response.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/services`,
  }
};


export default function Service() {
  return <ServicePage />
}
