import { SiteConfig } from '@/config/site';
import AreasWeServePages from '@/pages/AreasWeServePages/AreasWeServePages'
import React from 'react'


export const metadata = {
  title: "Areas We Serve | Fix Car Dubai – Mobile Car Repair & Battery Service",
  description: "Fix Car Dubai provides 24/7 mobile car repair, battery replacement, AC repair, and maintenance across Dubai including Al Karama, Oud Metha, Al Hamriya, Al Jaffiliya, Zabeel, Al Fahidi, Al Raffa, Al Mina, Al Hudaiba, Al Jaddaf.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/area-we-serve`,
  },
  other: {
    keywords: "car repair Al Karama, mobile mechanic Oud Metha, car battery replacement Al Hamriya, AC repair Al Jaffiliya, oil change Zabeel, brake service Al Fahidi, radiator repair Al Raffa, car detailing Al Mina, mobile auto service Dubai, areas we serve car repair Dubai",
  },
};

export default function page() {
  return <AreasWeServePages />
}
