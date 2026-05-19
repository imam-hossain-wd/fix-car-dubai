import { SiteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Fix Car Dubai",
  description: "Read our privacy policy to understand how Fix Car Dubai collects, uses, and protects your personal information.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/privacy`,
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4">Privacy Policy</h1>
        
        <div className="prose prose-slate max-w-none space-y-6 text-gray-600">
          <p>
            At Fix Car Dubai, accessible from {SiteConfig.url}, one of our main priorities is the privacy of our visitors. 
            This Privacy Policy document contains types of information that is collected and recorded by Fix Car Dubai and how we use it.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>
          <p>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, 
            will be made clear to you at the point we ask you to provide your personal information.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Provide, operate, and maintain our website and services</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Communicate with you, either directly or through one of our partners</li>
            <li>Send you text messages or emails for service updates</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">3. Log Files</h2>
          <p>
            Fix Car Dubai follows a standard procedure of using log files. These files log visitors when they visit websites. 
            The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
            date and time stamp, referring/exit pages, and possibly the number of clicks.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">4. Contact Us</h2>
          <p>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at {SiteConfig.email}.
          </p>
        </div>
      </div>
    </div>
  );
}
