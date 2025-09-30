import { MapPin } from "lucide-react";
import Link from "next/link";


export const ServiceAreaCard = ({ area , city }) => {

    return (
        <Link 
          href={area.href} 
          className="service-area-card bg-white rounded-2xl p-3 shadow-md transition-all duration-300 cursor-pointer block border"
        >
            <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex  items-center justify-center mr-3">
                    <MapPin className="fas fa-map-marker-alt text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-sm text-gray-900">{area.name}</h3>
                    <p className="text-sm text-gray-500">{city}</p>
                </div>
            </div>
            <div className="mt-2 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary text-white">
                    Available
                </span>
            </div>
        </Link>
    );
};
