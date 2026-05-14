import { Eye, Globe, TrendingUp, Cpu } from "lucide-react";

export function OurVision() {
  return (
    <section className="py-6 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Visual/Iconography */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 bg-primary/5 rounded-full flex items-center justify-center animate-pulse">
                <Eye className="h-32 w-32 text-primary/20" />
              </div>
              <div className="absolute top-0 right-0 bg-white p-4 shadow-lg rounded-2xl border border-gray-100">
                <Globe className="h-8 w-8 text-blue-500" />
              </div>
              <div className="absolute bottom-4 left-0 bg-white p-4 shadow-lg rounded-2xl border border-gray-100">
                <Cpu className="h-8 w-8 text-emerald-500" />
              </div>
            </div>
          </div>

          {/* Right Side: Text Content */}
          <div className="w-full lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-bold mb-6">
              <TrendingUp className="h-4 w-4" />
              OUR VISION 2030
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Setting the Gold Standard for <br />
              <span className="text-primary bg-clip-text bg-gradient-to-r from-primary to-blue-600">
                Future Mobility in the UAE
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our vision is to become Dubai’s most trusted and technologically integrated <strong>mobile automotive service</strong>, transforming the way drivers maintain their vehicles. We aren't just fixing cars; we are engineering a future where vehicle maintenance is invisible, predictive, and 100% stress-free.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                   <span className="font-bold text-primary">01</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Tech-First Care</h4>
                  <p className="text-sm text-gray-500 italic">Integrating AI-driven predictive diagnostics into every workshop-on-wheels.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
                   <span className="font-bold text-primary">02</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sustainable Standards</h4>
                  <p className="text-sm text-gray-500 italic">Leading the shift toward eco-friendly mechanical waste management in Dubai.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}