
import { Clock, MapPin, ShieldCheck, Users, Award, DollarSign, Zap, Star, CheckCircle } from "lucide-react";

export function AreaWhyChooseUs() {
  const features = [
    {
      icon: <Clock className="w-5 h-5" />,
      title: "30-Minute Response",
      stat: "98% On-Time",
      badge: "Fast"
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Certified Experts",
      stat: "500+ Technicians",
      badge: "Certified"
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Same Price Guarantee",
      stat: "Zero Hidden Costs",
      badge: "Transparent"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "24/7 Emergency",
      stat: "Always Available",
      badge: "24/7"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Area Guarantee",
      stat: "All Dubai Covered",
      badge: "Reliable"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Local Specialists",
      stat: "Area Experts",
      badge: "Local"
    }
  ];

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* SEO Optimized Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold sm:text-4xl mb-4">
            Why Choose <span className="text-primary">Car Fix Dubai</span> in Your Area?
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dubai's most trusted mobile car service with guaranteed quality across all neighborhoods
          </p>
        </div>

        {/* Compact Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-xl p-4 shadow-sm hover:shadow-lg border border-gray-100 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  {feature.badge}
                </span>
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="font-semibold text-sm text-gray-800 mb-1 line-clamp-2 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-xs text-primary font-medium">
                  {feature.stat}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10,000+", label: "Happy Clients" },
            { value: "4.9/5", label: "Rating" },
            { value: "24/7", label: "Support" },
            { value: "15+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-1 text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
            <CheckCircle className="w-4 h-4 text-green-500" />
            Serving all areas of Dubai with consistent quality
          </div>
        </div>
      </div>
    </section>
  );
}