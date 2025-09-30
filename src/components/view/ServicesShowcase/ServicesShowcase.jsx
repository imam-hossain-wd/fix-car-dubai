import Link from "next/link";
import { ArrowRight, Clock, Star, Zap, Shield, Wrench } from "lucide-react";
import { ServiceData } from "@/data/services";
import { SiteConfig } from "@/config/site";


export function ServicesShowcase() {
  
    const {services
    } = SiteConfig;
    
    const displayedServices = services.slice(0, 8);

    const serviceIcons = {
        "Car Battery Replacement": "⚡",
        "Car AC Repair": "❄️",
        "Car Engine Oil Change": "🛢️",
        "Car Gear Oil Change": "⚙️",
        "Brake Pad Repair & Replacement": "🛑",
        "Radiator Repair & Replacement": "🌡️",
        "ABS System Repair": "🔄",
        "Car Maintenance": "🔧",
        "Car Detailing": "✨",
        "AC Gas Refill": "💨"
    };

    return (
        <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <Zap className="h-4 w-4" />
                        OUR PREMIUM SERVICES
                    </div>
                    <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
                        Comprehensive <span className="text-primary">Car Care</span> Solutions
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Professional automotive services delivered right to your location across Dubai
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                    {displayedServices.map((service, index) => (
                        <Link
                            key={service.slug}
                            href={`/dubai/services/${service.slug}`}
                            className="group"
                        >
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden h-full">
                                {/* Service Header */}
                                <div className="p-6 ">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="text-lg">
                                            {serviceIcons[service.name] || "🔧"}
                                        </div>
                                        <div className="flex items-center gap-1 text-sm text-amber-600 bg-amber-50 px-2 py-1 rounded-full">
                                            <Star className="h-3 w-3 fill-amber-400" />
                                            <span>4.9</span>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-primary transition-colors line-clamp-2">
                                        {service.name}
                                    </h3>
                                </div>
                                <div className="flex items-center justify-between mt-1 px-8">
                                    <div className="flex items-center gap-1 text-sm text-gray-500">
                                        <Clock className="h-4 w-4" />
                                        <span>30-60 min</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="h-4 w-4 text-green-500" />
                                        <span className="text-sm text-gray-500">Warranty</span>
                                    </div>
                                </div>

                                {/* CTA Button */}
                                <div className="px-6 pb-6">
                                    <div className="flex items-center justify-between group-hover:bg-primary/5 rounded-lg p-2 transition-colors">
                                        <span className="text-sm font-medium text-primary">View Service</span>
                                        <ArrowRight className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* View All Services CTA */}
                <div className="text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors font-medium group"
                    >
                        <Wrench className="h-5 w-5" />
                        View All Services
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}