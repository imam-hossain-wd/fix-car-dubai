import { Button } from '@/components/ui/button'
import { SiteConfig } from '@/config/site';
import { MapPin, Clock, Phone } from 'lucide-react'


export default function ServiceAreas() {
    const { serviceAreas, city, country } = SiteConfig;
    
    const operatingHours = [
        { day: 'Saturday', hours: '24 Hours' },
        { day: 'Sunday', hours: '24 Hours' },
        { day: 'Monday', hours: '24 Hours' },
        { day: 'Tuesday', hours: '24 Hours' },
        { day: 'Wednesday', hours: '24 Hours' },
        { day: 'Thursday', hours: '24 Hours' },
        { day: 'Friday', hours: '24 Hours' }
    ];

    return (
        <section className="bg-gradient-to-b from-white to-gray-50 py-8 sm:py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                        24/7 Service Coverage
                    </span>
                    <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                        Our <span className="text-primary">Service Areas</span> in {city}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We provide fast, reliable mobile car services across all neighborhoods in Dubai
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-5">
                    {/* Service Areas Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                            {serviceAreas.map((area, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden p-4 rounded-xl bg-white border border-gray-200 hover:border-primary/50 transition-all shadow-sm hover:shadow-md"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            <MapPin className="w-4 h-4 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="font-medium text-sm text-gray-900">{area}</h3>
                                            <p className="text-xs text-gray-500">{city}, {country}</p>
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Operating Hours Card */}
                    <div className="lg:w-80 bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-fit">
                        <div className="flex justify-center items-center gap-3 mb-5">
                            <div className="bg-primary/10 p-2 rounded-full">
                                <Clock className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-lg font-semibold">Operating Hours</h3>
                        </div>
                        
                        <div className="space-y-3">
                            {operatingHours.map((day, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium">{day.day}</span>
                                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                                        {day.hours}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* <div className="mt-8 bg-primary/5 rounded-lg p-4 border border-primary/10">
                            <p className="text-sm text-gray-700 mb-3">
                                Emergency services available 24/7
                            </p>
                            <Button className="w-full" size="sm">
                                Call Now
                            </Button>
                        </div> */}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6">Don't see your area listed? We're expanding daily!</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button className="px-8 py-4">
                            Check Coverage in Your Area
                        </Button>
                        <Button variant="outline" className="px-8 py-4 border-primary text-primary">
                            <Phone className="w-4 h-4 mr-2" /> Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}