

import { Shield, Target, Heart, Zap, MapPin, Gauge } from "lucide-react";

export function OurMission() {

    const ourMission = [
        {
            icon: <Zap className="h-6 w-6" />,
            title: "Ultra-Fast Response",
            desc: "Optimized dispatch routes for Business Bay, Downtown, & Dubai Marina.",
            iconColor: "bg-amber-50",
            textColor: "text-amber-600"
        },
        {
            icon: <Gauge className="h-6 w-6" />,
            title: "Certified Master Techs",
            desc: "ASE-certified pros trained in the latest OBD-II diagnostics & specs.",
            iconColor: "bg-amber-50",
            textColor: "text-amber-600"
        },
        {
            icon: <MapPin className="h-6 w-6" />,
            title: "Central Hub Logic",
            desc: "Our Al Karama base ensures 24/7 deployment to Old & New Dubai.",
            iconColor: "bg-amber-50",
            textColor: "text-amber-600"
        },
        {
            icon: <Shield className="h-6 w-6" />,
            title: "Zero-Towing Philosophy",
            desc: "We fix it on-site, safeguarding your schedule and your vehicle.",
            iconColor: "bg-amber-50",
            textColor: "text-amber-600"
        }
    ]
    return (
        <section className="relative py-6 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-5 left-5 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-5 right-5 w-48 h-48 bg-blue-100/30 rounded-full blur-3xl"></div>

            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                {/* Section Header - AEO Optimized */}
                <div className="text-center mb-8 max-w-3xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                        Redefining <span className="text-primary">Automotive Convenience</span> with Expert On-Site Solutions
                    </h2>
                    <p className="text-gray-600 text-md md:text-lg leading-relaxed">
                        As Dubai’s premier <strong className="text-gray-900">mobile car repair network</strong>, our focus is on technical precision and radical transparency. We bridge the gap between high-end workshop diagnostics and the convenience of your location.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-stretch">
                    {/* Mission Card - Left Side (Helpful Content Focus) */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-8 border border-primary/50 h-full flex flex-col justify-center">

                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 w-fit">
                                <Target className="h-4 w-4" />
                                OUR CORE MISSION
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Eliminating Breakdown Anxiety Across Dubai
                            </h3>
                            <p className="text-gray-700 text-md leading-relaxed mb-4">
                                Our mission is to establish the most technologically advanced <strong className="text-gray-900">mobile car repair network in Dubai</strong>. We solve the problem of vehicle downtime by providing workshop-grade mechanical interventions directly to your driveway.
                            </p>
                            <p className="text-gray-700 text-md leading-relaxed">
                                From <span className="font-semibold text-gray-900">on-site battery replacement</span> and alternator testing to emergency AC repair during the <span className="italic">Dubai summer heat</span>, we ensure premium auto care is accessible at your home, workplace, or roadside.
                            </p>
                        </div>
                    </div>

                    {/* Core Values Grid - Right Side (E-E-A-T Signals) */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                            {ourMission.map((item, index) => (
                                <div
                                    key={index}
                                    className="group bg-white rounded-xl p-6 shadow-sm border border-primary"
                                >
                                    <div className={`${item.iconColor} p-3 rounded-lg w-fit mb-2`}>
                                        <div className={item.textColor}>{item.icon}</div>
                                    </div>
                                    <h4 className="text-md font-bold text-gray-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-[12px] leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Trust Footer - Persuasive Conversion Signal */}
                <div className="mt-4 text-center max-w-3xl mx-auto border-t border-gray-100 pt-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm mb-6 border border-gray-50">
                        <Heart className="h-4 w-4 text-primary fill-primary" />
                        <span className="text-gray-800 font-bold text-sm uppercase tracking-wider">100% Reliable Service Promise</span>
                    </div>
                    <p className="text-gray-700 text-lg">
                        By combining <strong className="text-gray-900">honest, upfront pricing</strong> with technical excellence, we ensure that the most trusted mobile car repair in Dubai is always just a phone call away.
                    </p>
                </div>
            </div>
        </section>
    );
}