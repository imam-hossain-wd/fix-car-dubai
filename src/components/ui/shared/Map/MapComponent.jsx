'use client'

import { SiteConfig } from '@/config/site';
import { bandlogo } from '@/utils/assets';
import { MapPin, Phone, Mail, ChevronRight, Navigation } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const MapComponent = () => {

  const {
    email,
    location,
    numberCallLink,
    displayNumber
  } = SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.6556318284447!2d55.305982400000005!3d25.2485213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43c96e6e562f%3A0x49dc867ffb69db4d!2sCar%20Repair%20%26%20Battery%20Replacement%20Service%20Dubai!5e0!3m2!1sen!2sae!4v1769703311745!5m2!1sen!2sae";
  
  const redirectMaps = `https://maps.app.goo.gl/TRTrc71UqPULUaKy7`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Find Our <span className="text-primary">Location</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Visit our service center or schedule a mobile repair. We're here to serve you across Dubai.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row gap-8">
        {/* Contact Information Panel */}
        <div className="lg:w-1/3 space-y-6">
          {/* Contact Card */}
          <div className="bg-gradient-to-br from-gray-900 to-primary rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Image
                className='w-40 h-40 -m-12'
                src={bandlogo.carfixdubailogo}
                width={80}
                height={80}
                quality={100}
                alt="car fix dubai logo"
              />
              <div className='flex flex-col'>
                <h3 className="font-bold">{location}</h3>
                <p className="text-white/80 text-sm">24/7 Emergency Service</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Service Areas */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Service Areas</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Al Karama", "Oud Metha", "Al Jaffiliya", "Zabeel", "Al Fahidi", "Al Raffa", "Al Mina", "Al Hudaiba", "Al Jaddaf", "Al Hamriya"
                    ].map((area, index) => (
                      <span
                        key={index}
                        className="inline-block bg-white/10 text-white/90 px-2 py-1 rounded text-xs font-medium hover:bg-white/20 transition-colors cursor-default"
                        title={area}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>


              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <Link
                    href={numberCallLink}
                    className="text-white/80 text-sm mt-1 hover:text-white transition-colors block"
                  >
                    {displayNumber}
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-white/80 text-sm mt-1 hover:text-white transition-colors block"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-3">
            <Link
              href={redirectMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group -mt-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="font-medium">Open in Maps</span>
              </div>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Map Container */}
        <div className="lg:w-2/3">
          <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white">
            {!isMapLoaded && (
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading map...</p>
                </div>
              </div>
            )}
            <iframe
              title="Car Repair & Battery Replacement Dubai"
              src={mapUrl}
              width="100%"
              height="100%"
              className={`transition-opacity duration-500 ${isMapLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setIsMapLoaded(true)}
            />

            {/* Map Overlay Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              <button
                onClick={() => window.open(redirectMaps, '_blank')}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                aria-label="Open in Google Maps"
              >
                <Navigation className="w-5 h-5 text-gray-700" />
              </button>
            </div>

            {/* Location Pin Indicator */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-800">You are here</span>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Mobile Service Available</h4>
              <p className="text-sm text-gray-600">We come to your location anywhere in Dubai</p>
            </div>
            <div className="bg-primary/5 rounded-xl p-4">
              <h4 className="font-semibold text-primary mb-2">Free Inspection</h4>
              <p className="text-sm text-gray-600">Comprehensive vehicle check at our location</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;