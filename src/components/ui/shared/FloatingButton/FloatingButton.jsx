"use client";
import { SiteConfig } from "@/config/site";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingButton() {
    const {
     whatsappNumber, callNumber
    } = SiteConfig;



  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t">
      <div className="flex h-12 w-full">
        {/* Call Now Button - 50% width */}
        <Link
          href={`tel:${callNumber}`}
          className="w-1/2 flex flex gap-3 items-center justify-center bg-rose-500 text-white font-medium hover:bg-rose-500/90 transition-colors"
        >
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-sm">Call Now</span>
        </Link>
        
        {/* WhatsApp Button - 50% width */}
        <Link
          href={`https://wa.me/${whatsappNumber}`}
          className="w-1/2 flex gap-3 items-center justify-center bg-[#25D366] text-white font-medium hover:bg-[#25D366]/90 transition-colors"
        >
          <MessageCircle className="h-5 w-5 mb-1" />
          <span className="text-sm">WhatsApp</span>
        </Link>
      </div>
    </div>
  );
}