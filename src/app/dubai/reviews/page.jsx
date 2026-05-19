import { SiteConfig } from '@/config/site';
import ReviewPages from '@/pages/ReviewPages/ReviewPages'
import React from 'react'

export const metadata = {
  title: "Customer Reviews | Trusted Car Repair Service in Dubai",
  description: "Read what our customers say about Fix Car Dubai. Top-rated mobile car repair, battery replacement, and emergency roadside assistance reviews from car owners across Dubai.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/reviews`,
  },
};

export default function page() {
    return <ReviewPages />
}
