import { SiteConfig } from "@/config/site";

export const metadata = {
  title: "Terms of Service | Fix Car Dubai",
  description: "Review the terms and conditions for using Fix Car Dubai's mobile car repair and battery replacement services.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/terms`,
  },
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
          <p>
            Welcome to Fix Car Dubai. These terms and conditions outline the rules and regulations for the use of 
            Fix Car Dubai's Website and services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">1. Terms of Use</h2>
          <p>
            By accessing this website and using our mobile car repair services, we assume you accept these terms and conditions. 
            Do not continue to use Fix Car Dubai if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">2. Service Description</h2>
          <p>
            Fix Car Dubai provides mobile car repair, battery replacement, and emergency roadside assistance. 
            While we strive for excellence, service availability and response times may vary based on location, traffic, and technician availability.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">3. Pricing and Payment</h2>
          <p>
            Pricing for services will be communicated before work begins. Payments are due upon completion of the service 
            unless otherwise agreed upon. We accept cash and major digital payment methods as available.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">4. Limitation of Liability</h2>
          <p>
            Fix Car Dubai shall not be held liable for any indirect, consequential, or special liability arising out of 
            or in any way related to your use of this Website or our services.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">5. Governing Law</h2>
          <p>
            These Terms will be governed by and interpreted in accordance with the laws of Dubai, UAE.
          </p>
        </div>
      </div>
    </div>
  );
}
