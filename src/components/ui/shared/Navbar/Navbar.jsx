
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/site";
import { bandlogo } from "@/utils/assets";
import Logo from "../Logo/Logo";
import NavDrawer from "./NavDrawer";




const {
  email,
  phoneNumber,
  callNumber,
  location,
  socialLinks,
  navItems
} = SiteConfig;





export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 border-b w-full border-b bg-background/10 backdrop-blur supports-[backdrop-filter]:bg-background/90">
        {/* Top Contact Bar - Hidden on mobile */}
        <div className="hidden md:block border-b bg-primary/10 text-sm">
          <div className="container mx-auto py-2 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href={`tel:${callNumber}`} className="flex items-center gap-1 hover:underline">
                <Phone className="h-4 w-4 text-primary" />
                <span>{phoneNumber}</span>
              </Link>
              <Link href={`mailto:${email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="h-4 w-4 text-primary" />
                <span>{email}</span>
              </Link>
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4 text-primary" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>



        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
          {/* Logo on left side for all screens */}
          <div className="flex-1 md:flex-none">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex mx-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>



          {/* Mobile Menu Button */}
        <NavDrawer />
        </div>
      </header>
    </>
  );
}