// 'use client'

// import React from 'react';
// import { MapPin, Phone, Mail, ChevronRight, MessageSquareText } from 'lucide-react';

// const MapComponent = () => {
//   // Coordinates for 24 Car Service Dubai
//   const latitude = 25.2430387;
//   const longitude = 55.2964023;
//   const mapUrl = `https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`;

//   return (
//     <div className="w-full max-w-6xl mx-auto">
//       {/* Map Section */}
//       <div className="relative h-[500px] w-[90%] lg:w-full mx-auto rounded-t-2xl overflow-hidden shadow-lg">
//         <iframe
//           title="24 Car Service Dubai Location"
//           src={mapUrl}
//           width="100%"
//           height="100%"
//           className="filter grayscale-20 hover:grayscale-0 transition-all duration-500"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
        
//         {/* Floating Contact Card */}
//         <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-2 rounded-xl shadow-xl max-w-md">
//           <div className="flex items-start justify-center gap-2">
//             <div className="bg-red-100 mt-1 p-1 rounded-full">
//               <MapPin className="text-red-500 w-6 h-6" />
//             </div>
//             <div>
//               <h3 className="text-md font-bold text-gray-900">24 Car Service Dubai</h3>
//               <p className="text-gray-600 text-sm">Al Mankhool , Dubai - UAE</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Get Directions Button */}
//       <div className="px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
//         <a
//           href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center justify-center gap-3 px-6 py-4 bg-primary hover:bg-green-600 text-white rounded-xl transition-all duration-300 group shadow-md hover:shadow-lg"
//         >
//           <MapPin className="w-6 h-6 text-red-400" />
//           <span className="text-lg font-semibold">Get Directions</span>
//           <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
//         </a>
//       </div>

//       {/* Quick Action Buttons */}
//       <div className="grid grid-cols-3 gap-4 px-6 py-5 bg-white">
//         <a 
//           href="tel:+971545695980"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-blue-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-blue-100 rounded-full">
//             <Phone className="w-5 h-5 text-blue-500" />
//           </div>
//           <span className="text-sm font-medium">Call Now</span>
//         </a>
        
//         <a 
//           href="https://wa.me/971545695980"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-green-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-green-100 rounded-full">
//             <MessageSquareText className="w-5 h-5 text-green-500" />
//           </div>
//           <span className="text-sm font-medium">WhatsApp</span>
//         </a>
        
//         <a 
//           href="mailto:24carservicedubai@gmail.com"
//           className="flex flex-col items-center justify-center gap-2 p-3 bg-white border border-gray-200 hover:border-purple-400 rounded-xl transition-all hover:shadow-md"
//         >
//           <div className="p-2 bg-purple-100 rounded-full">
//             <Mail className="w-5 h-5 text-purple-500" />
//           </div>
//           <span className="text-sm font-medium">Email Us</span>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default MapComponent;


'use client'

import { SiteConfig } from '@/config/site';
import { MapPin, Phone, Mail, ChevronRight, MessageCircle, Navigation, Clock, Car } from 'lucide-react';
import { useState } from 'react';

const MapComponent = () => {
  const {
    email,
    phoneNumber,
    phoneAction,
    location,
    cordinate,
    whatsappCall,
  } = SiteConfig;

  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const mapUrl = `https://maps.google.com/maps?q=${cordinate}&z=15&output=embed`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
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
              <div className="p-3 bg-white/20 rounded-xl">
                <Car className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">24 Car Repair Dubai</h3>
            </div>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Our Location</h4>
                  <p className="text-white/80 text-sm mt-1">{location}</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <a 
                    href={`tel:${phoneAction}`}
                    className="text-white/80 text-sm mt-1 hover:text-white transition-colors block"
                  >
                    {phoneNumber}
                  </a>
                </div>
              </div>

              {/* Email */}
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

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="p-2 bg-white/20 rounded-lg mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold">Working Hours</h4>
                  <p className="text-white/80 text-sm mt-1">24/7 Emergency Service</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-3">
            <a
              href={`tel:${phoneAction}`}
              className="flex items-center justify-between p-4 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-medium">Emergency Call</span>
              </div>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={`https://wa.me/${whatsappCall}`}
              className="flex items-center justify-between p-4 bg-green-600 hover:bg-green-700 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="font-medium">WhatsApp Chat</span>
              </div>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-900 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-full">
                  <Navigation className="w-5 h-5" />
                </div>
                <span className="font-medium">Open in Maps</span>
              </div>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
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
              title="24 Car Repair Dubai Location"
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
                onClick={() => window.open(mapUrl, '_blank')}
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

      {/* Bottom CTA */}
      <div className="text-center mt-12 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Need Immediate Assistance?</h3>
        <p className="text-gray-600 mb-4">Our team is available 24/7 to help with your car repair needs</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={`tel:${phoneAction}`}
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium"
          >
            <Phone className="w-5 h-5" />
            Call Now: {phoneNumber}
          </a>
          <a
            href={`https://wa.me/${whatsappCall}`}
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;