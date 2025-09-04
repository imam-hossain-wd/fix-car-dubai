


import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Users, Shield, Award, Clock, Star, Zap, Target, Heart } from "lucide-react";
import { images } from "@/utils/assets";


export function WhoWeAre() {
  return (
    <section className="relative py-16 md:py-10 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="h-4 w-4 fill-primary" />
            ABOUT OUR COMPANY
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
            Your Trusted <span className="text-primary">Car Care</span> Partner in Dubai
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            With over a decade of excellence, we deliver premium automotive services that keep Dubai moving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section with Modern Layout */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image
                  src={images.aboutus}
                  alt="24 Car Service Dubai professional team working on cars"
                  fill
                  className="object-cover"
                  quality={90}
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Experience Badge */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-white rounded-xl shadow-lg p-2 text-center">
                <div className="text-xl md:text-2xl font-bold text-primary">13+</div>
                <div className="text-sm font-medium text-gray-600">Years Experience</div>
              </div>
              
              {/* Stats Badge */}
              <div className="absolute bottom-6 right-6 bg-primary text-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold">5000+</div>
                <div className="text-sm font-medium">Happy Clients</div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Mission Statement */}
            <div className="relative">
              <div className="absolute -left-8 top-0 text-6xl opacity-10 font-serif">"</div>
              <blockquote className="text-lg px-2 font-medium text-gray-800  relative z-10">
                To provide unparalleled 24/7 on-demand car services throughout Dubai with immediate, reliable, and professional assistance.
              </blockquote>
            </div>

            {/* Key Points Grid */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  icon: <Users className="h-6 w-6 text-primary" />,
                  title: "Expert Team",
                  desc: "ASE-certified technicians"
                },
                {
                  icon: <Shield className="h-6 w-6 text-primary" />,
                  title: "Reliable Service",
                  desc: "12-month warranty"
                },
                {
                  icon: <Award className="h-6 w-6 text-primary" />,
                  title: "Award Winning",
                  desc: "Best in Dubai 2023"
                },
                {
                  icon: <Clock className="h-6 w-6 text-primary" />,
                  title: "Quick Service",
                  desc: "24h completion"
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-5 hover:bg-primary/5 transition-colors group">
                  <div className="flex flex-col md:flex-row  items-center gap-4">
                    <div className="p-3 text-white bg-primary/10 rounded-xl transition-colors">
                      {item.icon}
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary rounded-xl text-white">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">24/7 Emergency Service</h3>
                  <p className="text-sm text-gray-600">Immediate assistance whenever you need it</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="gap-2 py-6 text-base font-medium">
                <Heart className="h-5 w-5" />
                Meet Our Team
              </Button>
              <Button variant="outline" className="gap-2 py-6 text-base font-medium border-primary text-primary hover:bg-primary/10">
                <Target className="h-5 w-5" />
                Our Story
              </Button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          {[
            { value: "100%", label: "Customer Satisfaction" },
            { value: "24/7", label: "Availability" },
            { value: "5000+", label: "Vehicles Serviced" },
            { value: "13+", label: "Years Experience" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


