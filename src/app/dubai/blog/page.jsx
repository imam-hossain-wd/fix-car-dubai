
import { SiteConfig } from '@/config/site';
import BlogPage from '@/pages/BlogPage/BlogPage'
import React from 'react'

export const metadata = {
  title: "Car Repair Blog Dubai | Tips & Guides | Fix Car Dubai",
  description: "Read Fix Car Dubai's expert car repair, maintenance, and battery replacement tips. Get advice on AC repair, oil changes, brake pads, and more across Dubai.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/blog`,
  },
  other: {
    keywords: "car repair tips Dubai, mobile mechanic blog Dubai, car maintenance guides Dubai, battery replacement blog Dubai, car AC repair blog Dubai, oil change blog Dubai",
  },
};


export default function Blog() {
  return <BlogPage />
}
