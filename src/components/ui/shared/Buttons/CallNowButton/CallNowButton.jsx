import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";


function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}


export function CallNowButton({ className = "", ...props }) {
  return (
    <Button
      asChild
      className={cn(
        "sm:w-[160px] md:w-[160px] gap-2 bg-green-600 hover:bg-green-700",
        "py-2 text-sm md:py-4 md:text-base lg:py-6 lg:text-lg",
        className
      )}
      {...props}
    >
      <a href="tel:+971545695980">
        <Phone className="h-6 w-6" />
        <span>Call Now</span>
      </a>
    </Button>
  );
}
