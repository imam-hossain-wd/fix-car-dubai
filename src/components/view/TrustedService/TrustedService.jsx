
import {
  ShieldCheck, BadgeDollarSign, Clock, Star,
  Trophy, Zap, Users, Award, CheckCircle,
} from "lucide-react";


export function TrustedService() {
  return (
    <section className="py-6 relative overflow-hidden bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header with badge */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="h-4 w-4" />
            DUBAI'S MOST TRUSTED
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Why <span className="text-primary">10,000+ Dubai Drivers</span>
            <br />Choose Us Every Year
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-2">
            Trusted by thousands of Dubai drivers, Fix Car Dubai operates as
            Car Repair & Battery Replacement Service Dubai on Google Maps and Google Business Profile.
          </p>

        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Trust Indicators */}
          <div className="space-y-8">
            {/* Excellence Badges */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Recognitions</h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Award className="h-8 w-8" />, title: "Best Auto Care 2023", desc: "Dubai Excellence Awards" },
                  { icon: <ShieldCheck className="h-8 w-8" />, title: "Quality Certified", desc: "ISO 9001:2023" },
                  { icon: <Star className="h-8 w-8" />, title: "Customer Choice", desc: "4.9/5 Rating" },
                  { icon: <Trophy className="h-8 w-8" />, title: "Industry Leader", desc: "13+ Years Experience" }
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl hover:bg-primary/5 transition-colors">
                    <div className="text-primary mb-3">{item.icon}</div>
                    <h4 className="font-bold text-gray-800">{item.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column - Value Propositions */}
          <div className="space-y-8">
            {/* Guarantees */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Promises to You</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <BadgeDollarSign className="h-6 w-6" />,
                    title: "Price Match Guarantee",
                    description: "Find a better price? We'll match it plus give you 10% off."
                  },
                  {
                    icon: <ShieldCheck className="h-6 w-6" />,
                    title: "Lifetime Warranty",
                    description: "All repairs come with our exclusive lifetime service warranty"
                  },
                  {
                    icon: <Clock className="h-6 w-6" />,
                    title: "On-Time Promise",
                    description: "We complete services on time or you get 20% off your next visit"
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Quick Service",
                    description: "Most services completed in under 45 minutes while you wait"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-primary bg-primary/10 p-2 rounded-lg mr-4">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          {[
            { icon: <Users className="h-8 w-8" />, value: "10,000+", label: "Satisfied Clients" },
            { icon: <Star className="h-8 w-8" />, value: "4.9/5", label: "Customer Rating" },
            { icon: <CheckCircle className="h-8 w-8" />, value: "98%", label: "Retention Rate" },
            { icon: <Award className="h-8 w-8" />, value: "13+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-primary mb-3 inline-flex justify-center">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}