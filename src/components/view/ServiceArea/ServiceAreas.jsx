
"use client"
import { SiteConfig } from '@/config/site';
import { MapPin, Clock} from 'lucide-react'


export const ServiceAreas = () => {

    const {
      city, serviceAreas , operatingHours
    } = SiteConfig;

    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-white py-2">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-6">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        24/7 Service Coverage
                    </span>
                   
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Service Areas Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                            {serviceAreas.map((area, index) => (
                                <ServiceAreaCard key={index} area={area} city={city} />
                            ))}
                        </div>
                    </div>

                    {/* Operating Hours Sidebar */}
                    <div className="lg:w-80 bg-white rounded-2xl shadow-lg p-6 h-fit">
                        <div className="flex justify-center items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">

                           
                                < Clock className="fas fa-clock text-primary text-xl" />
                            </div>
                            <h3 className="text-xl font-semibold">Operating Hours</h3>
                        </div>

                        <div className="space-y-1">
                            {operatingHours.map((item, index) => (
                                <OperatingHourRow key={index} day={item.day} hours={item.hours} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-10">
                    <p className="text-gray-600 mb-8">Don't see your area listed? We're expanding daily!</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <button className="bg-primary hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-colors flex items-center justify-center">
                            <i className="fas fa-search-location mr-2"></i> Check Coverage in Your Area
                        </button>
                        <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-xl transition-colors flex items-center justify-center">
                            <i className="fas fa-phone-alt mr-2"></i> Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};


const ServiceAreaCard = ({ area , city }) => {
    return (
        <a 
          href={area.href} 
          className="service-area-card bg-white rounded-2xl p-5 shadow-md transition-all duration-300 cursor-pointer block"
        >
            <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="fas fa-map-marker-alt text-primary" />
                </div>
                <div>
                    <h3 className="font-semibold text-gray-900">{area.name}</h3>
                    <p className="text-sm text-gray-500">{city}</p>
                </div>
            </div>
            <div className="mt-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Available
                </span>
            </div>
        </a>
    );
};


const OperatingHourRow = ({ day, hours }) => {
    return (
        <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
            <span className="text-gray-700 font-medium">{day}</span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                {hours}
            </span>
        </div>
    );
};