"use client"
import { Phone, MessageCircle, ChevronUp, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Show scroll-to-top button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-16 right-6 z-50">
      {/* Social Media Icons (Vertical) */}
      <div className="flex flex-col items-center gap-3 mb-20">
        <Link
          href="https://facebook.com/yourpage"
          className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
          aria-label="Facebook"
        >
          <Facebook className="h-5 w-5" />
        </Link>
        <Link
          href="https://instagram.com/yourprofile"
          className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110"
          aria-label="Instagram"
        >
          <Instagram className="h-5 w-5" />
        </Link>
        <Link
          href="https://youtube.com/yourchannel"
          className="p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110"
          aria-label="YouTube"
        >
          <Youtube className="h-5 w-5" />
        </Link>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="mb-4 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-gray-900 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}


      {/* Bottom Navigation Bar (Alternative for some use cases) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden">
        <div className="flex h-16">
          <Link
            href="tel:+971506695990"
            className="flex-1 flex flex-col items-center justify-center text-primary hover:bg-primary/5 transition-colors"
          >
            <div className="bg-primary/10 p-2 rounded-full mb-1">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xs font-medium">Call</span>
          </Link>
          
          <Link
            href="https://wa.me/971506695990"
            className="flex-1 flex flex-col items-center justify-center text-[#25D366] hover:bg-[#25D366]/5 transition-colors"
          >
            <div className="bg-[#25D366]/10 p-2 rounded-full mb-1">
              <MessageCircle className="h-5 w-5 text-[#25D366]" />
            </div>
            <span className="text-xs font-medium">WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
}