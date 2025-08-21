import Link from "next/link";
import {
    Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { SiteConfig } from "@/config/site";
import { usePathname } from "next/navigation";
import Logo from "../Logo/Logo";

const {
    navItems
} = SiteConfig;

export default function NavDrawer() {
    const pathname = usePathname();
    return (
        <div className="md:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="hover:bg-transparent"
                    >
                        <Menu className="h-12 w-12 " />
                        {/* <span className="sr-only">Toggle menu</span> */}
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                    {/* Centered Logo in mobile drawer */}
                    <div className="flex border-b border-primary py-3">
                        <div className="ml-5">
                            <Logo />
                        </div>

                    </div>
                    <SheetTitle asChild>
                        {/* <VisuallyHidden>Main Navigation</VisuallyHidden> */}
                        <p></p>
                    </SheetTitle>

                    <nav className="grid gap-1 mt-1">
                        {navItems.map((item) => (
                            <SheetTrigger key={item.href} asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center rounded-lg px-3 py-3 text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary",
                                        pathname === item.href &&
                                        "bg-primary/10 text-primary"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            </SheetTrigger>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        </div>
    )
}
