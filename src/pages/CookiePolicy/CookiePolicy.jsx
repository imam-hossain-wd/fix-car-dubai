'use client';

import { SiteConfig } from "@/config/site";
import { 
  Cookie, Shield, Settings, Search, BarChart3, 
  Mail, CheckCircle, AlertCircle, Globe, Clock 
} from "lucide-react";

// Cookie categories data
const COOKIE_CATEGORIES = [
  {
    id: "strictly-necessary",
    name: "Strictly Necessary",
    icon: Shield,
    required: true,
    description: "Essential for website functionality and security",
    cookies: [
      { name: "session_id", purpose: "Maintains user session state", duration: "Session" },
      { name: "csrf_token", purpose: "Prevents cross-site request forgery", duration: "Session" },
      { name: "auth_status", purpose: "Tracks authentication state", duration: "24 hours" },
    ],
  },
  {
    id: "preferences",
    name: "Preferences & Functionality",
    icon: Settings,
    required: false,
    description: "Remember your choices for a personalized experience",
    cookies: [
      { name: "language_pref", purpose: "Stores your preferred language", duration: "1 year" },
      { name: "location_pref", purpose: "Remembers your service area", duration: "6 months" },
      { name: "theme_pref", purpose: "Stores light/dark mode preference", duration: "1 year" },
    ],
  },
  {
    id: "analytics",
    name: "Analytics & Performance",
    icon: BarChart3,
    required: false,
    description: "Help us understand how visitors use our website",
    cookies: [
      { name: "_ga", purpose: "Google Analytics user identification", duration: "2 years" },
      { name: "_gid", purpose: "Google Analytics session tracking", duration: "24 hours" },
      { name: "page_views", purpose: "Tracks pages visited for optimization", duration: "30 days" },
    ],
  },
  {
    id: "marketing",
    name: "Marketing & Advertising",
    icon: Search,
    required: false,
    description: "Deliver relevant ads and measure campaign effectiveness",
    cookies: [
      { name: "_fbp", purpose: "Facebook advertising tracking", duration: "3 months" },
      { name: "_gcl_au", purpose: "Google Ads conversion tracking", duration: "3 months" },
      { name: "utm_source", purpose: "Tracks marketing campaign source", duration: "Session" },
    ],
  },
];

// Policy sections - data-driven for maintainability
const COOKIE_SECTIONS = [
  {
    id: "introduction",
    title: "What Are Cookies?",
    icon: Cookie,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          Cookies are small text files that are placed on your device when you visit a website. 
          They help websites remember information about your visit, making your next visit easier 
          and the site more useful to you.
        </p>
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-2">First-Party Cookies</h4>
            <p className="text-sm text-gray-600">
              Set by Fix Car Dubai directly. Used for essential functionality and preferences.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-2">Third-Party Cookies</h4>
            <p className="text-sm text-gray-600">
              Set by external services (Google, Facebook) for analytics and advertising purposes.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "cookie-types",
    title: "Cookies We Use",
    icon: Settings,
    highlight: true,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-6">
          We use different types of cookies for different purposes. Below is a detailed breakdown:
        </p>
        
        <div className="space-y-4">
          {COOKIE_CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.id} 
                className={`rounded-xl border ${category.required ? 'bg-primary/5 border-primary/20' : 'bg-white border-gray-200'} p-5`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      category.required ? 'bg-primary' : 'bg-primary/10'
                    }`}>
                      <Icon className={`w-5 h-5 ${category.required ? 'text-white' : 'text-primary'}`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 flex items-center gap-2">
                        {category.name}
                        {category.required && (
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                            Required
                          </span>
                        )}
                      </h4>
                      <p className="text-sm text-gray-600 mt-0.5">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-gray-500 border-b border-gray-100">
                        <th className="pb-2 font-medium">Cookie Name</th>
                        <th className="pb-2 font-medium">Purpose</th>
                        <th className="pb-2 font-medium">Duration</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-600">
                      {category.cookies.map((cookie, idx) => (
                        <tr key={idx} className="border-b border-gray-50 last:border-0">
                          <td className="py-2 font-mono text-xs text-gray-700">{cookie.name}</td>
                          <td className="py-2">{cookie.purpose}</td>
                          <td className="py-2 text-gray-500">{cookie.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          })}
        </div>
      </>
    ),
  },
  {
    id: "managing-cookies",
    title: "Managing Your Cookie Preferences",
    icon: Settings,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          You have full control over which cookies you accept. Here&apos;s how to manage them:
        </p>
        
        <div className="grid gap-4">
          <div className="flex gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <Settings className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-800">Cookie Consent Banner</h4>
              <p className="text-sm text-gray-600 mt-1">
                When you first visit our site, you&apos;ll see a cookie consent banner. 
                Use it to accept all, reject non-essential, or customize your preferences.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-3">Browser Settings</h4>
            <p className="text-sm text-gray-600 mb-3">
              You can also manage cookies through your browser settings:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
              {[
                { browser: "Chrome", path: "Settings → Privacy → Cookies" },
                { browser: "Safari", path: "Preferences → Privacy → Cookies" },
                { browser: "Firefox", path: "Options → Privacy → Cookies" },
                { browser: "Edge", path: "Settings → Privacy → Cookies" },
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span><strong>{item.browser}:</strong> {item.path}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-5 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-800 flex gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <strong>Note:</strong> Disabling certain cookies may affect website functionality, 
            such as staying logged in or remembering your preferences.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "third-party-cookies",
    title: "Third-Party Services",
    icon: Globe,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          We partner with trusted third-party services that may set cookies on your device. 
          These services have their own privacy policies:
        </p>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { name: "Google Analytics", purpose: "Website usage analytics", policy: "https://policies.google.com/privacy" },
            { name: "Google Ads", purpose: "Advertising and conversion tracking", policy: "https://policies.google.com/privacy" },
            { name: "Facebook Pixel", purpose: "Ad targeting and measurement", policy: "https://www.facebook.com/privacy/policy" },
            { name: "Cloudflare", purpose: "Security and performance", policy: "https://www.cloudflare.com/privacypolicy" },
          ].map((service, idx) => (
            <a 
              key={idx}
              href={service.policy}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-primary/30 transition-none group"
            >
              <h4 className="font-semibold text-gray-800 group-hover:text-primary">{service.name}</h4>
              <p className="text-sm text-gray-600 mt-1">{service.purpose}</p>
              <span className="text-xs text-primary mt-2 inline-flex items-center gap-1">
                View Privacy Policy →
              </span>
            </a>
          ))}
        </div>
      </>
    ),
  },
  {
    id: "do-not-track",
    title: "Do Not Track Signals",
    icon: Shield,
    content: (
      <p className="text-gray-600 leading-relaxed">
        Some browsers offer a &quot;Do Not Track&quot; (DNT) feature that signals websites not to track your browsing. 
        While we respect user privacy, there is no universal standard for responding to DNT signals. 
        We follow our Cookie Policy regardless of DNT settings, but you can always manage cookies 
        using the methods described above.
      </p>
    ),
  },
  {
    id: "updates",
    title: "Updates to This Policy",
    icon: Clock,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          We may update this Cookie Policy periodically to reflect changes in our practices or 
          applicable laws. Any updates will be posted on this page with a revised &quot;Last Updated&quot; date.
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-blue-800 flex gap-2">
            <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <strong>Stay Informed:</strong> We encourage you to review this policy periodically 
            to stay informed about how we use cookies.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    icon: Mail,
    highlight: true,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-5">
          Questions about our Cookie Policy or how we handle your data? Reach out to us:
        </p>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Privacy Team</h4>
              <p className="text-gray-600 mt-1">
                Email:{" "}
                <a 
                  href={`mailto:${SiteConfig.email}`} 
                  className="text-primary font-medium hover:underline"
                >
                  {SiteConfig.email}
                </a>
              </p>
              <p className="text-gray-600">
                Address: {SiteConfig.address}
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                We respond to all privacy-related inquiries within 2 business days.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

export default function CookiePolicy() {
  const lastUpdated = "January 15, 2026";

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Skip Link for Accessibility */}
      <a 
        href="#cookie-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl py-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Cookie className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Cookie Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            How Fix Car Dubai uses cookies and similar technologies to enhance your experience.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last updated: <time dateTime="2026-01-15">{lastUpdated}</time>
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 max-w-6xl py-10">
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Table of Contents - Sticky */}
          <aside className="hidden lg:block">
            <nav className="sticky top-24" aria-label="Table of contents">
              <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm">
                <h2 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Cookie className="w-4 h-4 text-primary" />
                  On This Page
                </h2>
                <ul className="space-y-1.5">
                  {COOKIE_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block text-sm py-1.5 px-2 rounded-lg transition-none ${
                          section.highlight 
                            ? "text-primary font-medium bg-primary/5" 
                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </aside>

          {/* Main Content */}
          <article id="cookie-content" className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 md:p-8 lg:p-10 space-y-10">
              {COOKIE_SECTIONS.map((section) => {
                const Icon = section.icon;
                return (
                  <section 
                    key={section.id} 
                    id={section.id} 
                    className={`scroll-mt-24 ${section.highlight ? 'bg-primary/3 rounded-2xl p-6 md:p-8 -mx-6 md:-mx-8 lg:-mx-10' : ''}`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      {Icon && (
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          section.highlight ? 'bg-primary' : 'bg-primary/10'
                        }`}>
                          <Icon className={`w-5 h-5 ${section.highlight ? 'text-white' : 'text-primary'}`} />
                        </div>
                      )}
                      <div>
                        <h2 className={`font-bold ${section.highlight ? 'text-gray-900 text-xl' : 'text-gray-900 text-lg'}`}>
                          {section.title}
                        </h2>
                        {section.id === "contact" && (
                          <p className="text-sm text-gray-500 mt-0.5">Privacy team</p>
                        )}
                      </div>
                    </div>
                    <div className={`text-gray-600 ${section.highlight ? '' : 'prose prose-slate max-w-none'}`}>
                      {section.content}
                    </div>
                  </section>
                );
              })}
            </div>

            {/* Footer Actions */}
            <div className="px-6 md:px-8 lg:px-10 pb-8 md:pb-10">
              <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Fix Car Dubai. All rights reserved.
                </p>
                <div className="flex gap-3">
                  <a 
                    href="/dubai/privacy" 
                    className="text-sm text-gray-600 hover:text-primary font-medium transition-none"
                  >
                    Privacy Policy
                  </a>
                  <span className="text-gray-300">•</span>
                  <a 
                    href="/dubai/terms" 
                    className="text-sm text-gray-600 hover:text-primary font-medium transition-none"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Print Styles via Tailwind-compatible approach */}
      <style jsx global>{`
        @media print {
          aside, header, footer { display: none !important; }
          article { box-shadow: none !important; border: none !important; }
          a { text-decoration: none !important; color: #000 !important; }
          .bg-primary\\/3 { background: #f8fafc !important; }
          .text-primary { color: #000 !important; }
        }
      `}</style>
    </main>
  );
}