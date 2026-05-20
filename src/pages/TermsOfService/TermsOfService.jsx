'use client'

import { SiteConfig } from "@/config/site";
import {
  Scale, FileText, CreditCard, ShieldAlert, Globe,
  Mail, CheckCircle, AlertTriangle, Clock, Users
} from "lucide-react";


// Policy sections - data-driven for maintainability
const TERMS_SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    icon: CheckCircle,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          Welcome to <strong className="text-gray-900">Fix Car Dubai</strong>. By accessing our website at{" "}
          <a href={SiteConfig.url} className="text-primary hover:underline font-medium">
            {SiteConfig.url}
          </a>{" "}
          and using our mobile car repair services, you acknowledge that you have read, understood,
          and agree to be bound by these Terms of Service.
        </p>
        <div className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-800 flex gap-2">
            <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <strong>Important:</strong> If you do not agree to these terms, please discontinue use of
            our website and services immediately.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "services",
    title: "Services Provided",
    icon: FileText,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Fix Car Dubai specializes in convenient, professional mobile automotive services including:
        </p>
        <div className="grid sm:grid-cols-2 gap-4 mb-5">
          {[
            { title: "Mobile Repairs", items: ["Engine diagnostics", "Battery replacement", "Tire changes", "Minor mechanical fixes"] },
            { title: "Emergency Assistance", items: ["24/7 roadside support", "Jump-starts", "Fuel delivery", "Lockout service"] },
          ].map((category, idx) => (
            <div key={idx} className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-3">{category.title}</h4>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed">
          Service availability, response times, and scope may vary based on location, traffic conditions,
          technician availability, and vehicle requirements. We reserve the right to decline service
          for safety or logistical reasons.
        </p>
      </>
    ),
  },
  {
    id: "pricing-payment",
    title: "Pricing & Payment",
    icon: CreditCard,
    content: (
      <>
        <div className="space-y-4">
          <div className="flex gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <CreditCard className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-800">Transparent Pricing</h4>
              <p className="text-sm text-gray-600 mt-1">
                All service costs will be clearly communicated and approved by you before any work begins.
                No hidden fees or surprise charges.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-2">Payment Methods</h4>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-5">
                <li>Cash (AED)</li>
                <li>Credit/Debit Cards</li>
                <li>Digital wallets (Apple Pay, Google Pay)</li>
                <li>Bank transfer (for corporate accounts)</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
              <h4 className="font-semibold text-gray-800 mb-2">Payment Terms</h4>
              <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-5">
                <li>Payment due upon service completion</li>
                <li>Receipts provided digitally or in print</li>
                <li>Corporate billing available upon request</li>
                <li>Refunds processed per our Refund Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "user-responsibilities",
    title: "Your Responsibilities",
    icon: Users,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          To ensure safe and efficient service, you agree to:
        </p>
        <ul className="space-y-3">
          {[
            "Provide accurate vehicle information and location details",
            "Ensure safe access to your vehicle for our technicians",
            "Disclose any known vehicle hazards or modifications",
            "Be available or authorize a representative during service",
            "Secure pets and remove valuables from the service area",
            "Follow all safety instructions provided by our team",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
                {idx + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    icon: ShieldAlert,
    highlight: true,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          To the maximum extent permitted by applicable law in Dubai, UAE:
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              Exclusions
            </h4>
            <p className="text-sm text-gray-600">
              Fix Car Dubai shall not be liable for any indirect, incidental, special, consequential,
              or punitive damages, including but not limited to loss of profits, data, use, goodwill,
              or other intangible losses resulting from your use of our services.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">Our Commitment</h4>
            <p className="text-sm text-gray-600">
              We carry comprehensive liability insurance and stand behind our workmanship.
              Any issues arising from our service will be addressed promptly and professionally
              in accordance with UAE consumer protection laws.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    icon: Scale,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          All content, trademarks, logos, service marks, and intellectual property displayed on
          this website or used in connection with our services are the property of Fix Car Dubai
          or our licensors. You may not reproduce, distribute, modify, or create derivative works
          without our express written permission.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          Nothing in these terms grants you a license to use any Fix Car Dubai intellectual property
          except as necessary to use our services as intended.
        </p>
      </>
    ),
  },
  {
    id: "modifications",
    title: "Changes to Terms",
    icon: Clock,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          We reserve the right to modify these Terms of Service at any time. Changes will be effective
          immediately upon posting to this page with an updated &quot;Last Revised&quot; date.
        </p>
        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
          <p className="text-sm text-blue-800 flex gap-2">
            <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <strong>Your Responsibility:</strong> Please review these terms periodically.
            Your continued use of our services after changes constitutes acceptance of the updated terms.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "governing-law",
    title: "Governing Law & Disputes",
    icon: Globe,
    content: (
      <>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-2">Jurisdiction</h4>
            <p className="text-gray-600">
              These Terms shall be governed by and construed in accordance with the laws of
              <strong className="text-gray-900"> Dubai, United Arab Emirates</strong>, without regard
              to its conflict of law provisions.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-2">Dispute Resolution</h4>
            <p className="text-gray-600">
              Any disputes arising from these terms or our services shall first be addressed through
              good-faith negotiation. If unresolved, disputes shall be submitted to the exclusive
              jurisdiction of the courts of Dubai, UAE.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact & Questions",
    icon: Mail,
    highlight: true,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-5">
          Have questions about these Terms of Service? We&apos;re here to help:
        </p>
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Legal Inquiries</h4>
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
                Address: {SiteConfig.location}
              </p>
              <p className="text-gray-600 mt-2 text-sm">
                We respond to all legal inquiries within 2 business days.
              </p>
            </div>
          </div>
        </div>
      </>
    ),
  },
];

export default function TermsOfService() {
  const lastUpdated = "January 15, 2026";

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Skip Link for Accessibility */}
      <a
        href="#terms-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to content
      </a>

      {/* Structured Data for SEO */}


      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl py-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Scale className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            The rules, responsibilities, and conditions for using Fix Car Dubai&apos;s mobile
            car repair services.
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Last revised: <time dateTime="2026-01-15">{lastUpdated}</time>
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
                  <FileText className="w-4 h-4 text-primary" />
                  On This Page
                </h2>
                <ul className="space-y-1.5">
                  {TERMS_SECTIONS.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className={`block text-sm py-1.5 px-2 rounded-lg transition-none ${section.highlight
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
          <article id="terms-content" className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 md:p-8 lg:p-10 space-y-10">
              {TERMS_SECTIONS.map((section) => {
                const Icon = section.icon;
                return (
                  <section
                    key={section.id}
                    id={section.id}
                    className={`scroll-mt-24 ${section.highlight ? 'bg-primary/3 rounded-2xl p-6 md:p-8 -mx-6 md:-mx-8 lg:-mx-10' : ''}`}
                  >
                    <div className="flex items-start gap-4 mb-5">
                      {Icon && (
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${section.highlight ? 'bg-primary' : 'bg-primary/10'
                          }`}>
                          <Icon className={`w-5 h-5 ${section.highlight ? 'text-white' : 'text-primary'}`} />
                        </div>
                      )}
                      <div>
                        <h2 className={`font-bold ${section.highlight ? 'text-gray-900 text-xl' : 'text-gray-900 text-lg'}`}>
                          {section.title}
                        </h2>
                        {section.id === "contact" && (
                          <p className="text-sm text-gray-500 mt-0.5">Legal department</p>
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
                    href="/dubai/cookies"
                    className="text-sm text-gray-600 hover:text-primary font-medium transition-none"
                  >
                    Cookie Policy
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Print Styles */}
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