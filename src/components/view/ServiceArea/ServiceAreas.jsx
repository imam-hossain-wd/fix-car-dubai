"use client"
import { SiteConfig } from '@/config/site';
import {Clock} from 'lucide-react';
import { ServiceAreaCard } from '../Card/ServiceAreaCard';


export const ServiceAreas = () => {

    const {
      city, serviceAreas , operatingHours
    } = SiteConfig;

    return (
        <section className="bg-gradient-to-b from-white via-gray-50 to-white py-2">
            <div className="container mx-auto  max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-4">
                    {/* Service Areas Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
                            {serviceAreas.map((area, index) => (
                                <ServiceAreaCard key={index} area={area} city={city} />
                            ))}
                        </div>
                    </div>

                    {/* Operating Hours Sidebar */}
                    <div className="lg:w-70 bg-white rounded-2xl shadow-lg px-6 py-3 h-fit border">
                        <div className="flex items-center gap-3 mb-2 pb-2 border-b">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">

                           
                                < Clock className="fas fa-clock text-primary text-md" />
                            </div>
                            <h3 className="text-lg font-semibold">Operating Hours</h3>
                        </div>

                        <div className="space-y-1">
                            {operatingHours.map((item, index) => (
                                <OperatingHourRow key={index} day={item.day} hours={item.hours} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const OperatingHourRow = ({ day, hours }) => {
    return (
        <div className="flex justify-between items-center py-1 border-b border-gray-100 last:border-b-0">
            <span className="text-gray-700 font-medium text-md">{day}</span>
            <span className="bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full">
                {hours}
            </span>
        </div>
    );
};