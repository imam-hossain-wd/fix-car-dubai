"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Clock, ShieldCheck, Car, Settings, Leaf, Search, DollarSign, CheckCircle2, Gauge, Sparkles } from "lucide-react";

const features = [
  {
    title: "No Appointments – Walk In Anytime",
    description: "Drive into Fix Car Dubai at your convenience. Fast, reliable car service without waiting for appointments.",
    icon: Clock,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Qualified & Experienced Technicians",
    description: "Certified mechanics with years of expertise, advanced training, and strong customer communication skills.",
    icon: Wrench,
    color: "from-amber-500 to-orange-500",
  },
  {
    title: "All Makes & Models Welcome",
    description: "From Toyota and Nissan to BMW and Mercedes, we repair and service all car brands with precision.",
    icon: Car,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "100% Genuine Auto Parts",
    description: "We use genuine parts only – ensuring durability, performance, and better resale value for your vehicle.",
    icon: ShieldCheck,
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "Quality Service & Customer Satisfaction",
    description: "We deliver exceptional car repair and maintenance that exceeds customer expectations in Dubai.",
    icon: CheckCircle2,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Speedy Servicing – Save Your Time",
    description: "Dubai’s fast-paced lifestyle demands quick car servicing – and we deliver it without compromising quality.",
    icon: Gauge,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "360° Car Health Checkup",
    description: "Every visit includes a full 360-degree diagnostic check to keep your car in peak condition.",
    icon: Search,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Cutting-Edge Diagnostics",
    description: "State-of-the-art tools for accurate assessments and cost-efficient car repair solutions.",
    icon: Settings,
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Transparent Pricing – No Hidden Costs",
    description: "Honest, upfront pricing with no surprises – just reliable service you can trust.",
    icon: DollarSign,
    color: "from-lime-500 to-green-500",
  },
  {
    title: "Eco-Friendly Car Service",
    description: "We follow eco-friendly practices and safe disposal methods for a greener Dubai.",
    icon: Leaf,
    color: "from-emerald-500 to-teal-500",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-5 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 -skew-y-3 -translate-y-1/2"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-blue-primary rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-2 px-4 py-2 bg-secondary/90 text-primary rounded-full text-sm font-medium">
            <Sparkles className="h-4 w-4 mr-2" />
            WHY CHOOSE US
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Trust <span className="text-transparent bg-clip-text bg-primary">Fix Car Dubai</span>?
          </h2>
          <p className="text-md text-gray-600 max-w-3xl mx-auto">
            At Fix Car Dubai, we provide reliable car repair and maintenance services across Dubai 
            including Al Karama, Oud Metha, Deira, Bur Dubai, and Dubai Marina. Here's why drivers trust us:
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group col-span-1 md:col-span-1 transition-all duration-500 hover:-translate-y-2"
            >
              <Card className="h-full border shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden group-hover:shadow-blue-200/50">
                <CardContent className="px-5 flex flex-col items-center text-center h-full">
                  {/* Icon with gradient background */}
                  <div className={`mb-5 p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-4 w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}