

import React from 'react'
import { Mail, MapPin, Phone, Store } from 'lucide-react'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SiteConfig } from '@/config/site';
import Link from 'next/link';

export default function GetTouch() {

  const {
    email,
    phoneNumber,
    location,
  } = SiteConfig;
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className='w-[85%] mx-auto'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-4">
              Get In <span className="text-primary ">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions about your vehicle? Our team is ready to help 24/7 with expert advice and service.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Our Location</h3>
                  <p className="text-gray-600">{location}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  <p className="text-gray-600">{email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <p className="text-gray-600">{phoneNumber} (24/7 Support)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 rounded-full bg-primary/10 p-3">
                  <Store className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Google Maps</h3>
                     <Link href="https://www.google.com/maps?cid=5322276743882070861"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors">
                  View Business Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                </div>
              </div>
            </div>
          </div>

          <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                    <input
                      type="tel"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary"
                      placeholder="+971"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-primary focus:border-primary"
                    placeholder="How can we help?"
                  ></textarea>
                </div>
                <Button className="w-full" size="lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
