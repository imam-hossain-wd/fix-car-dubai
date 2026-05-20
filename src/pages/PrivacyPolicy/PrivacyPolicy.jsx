'use client'

import { SiteConfig } from "@/config/site";
import { Shield, Mail, FileText, Link2, Eye, Lock, Users, AlertCircle } from "lucide-react";



// Policy sections data-driven for maintainability
const POLICY_SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    icon: Shield,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          At <strong className="text-gray-900">Fix Car Dubai</strong>, accessible from{" "}
          <a href={SiteConfig.url} className="text-primary hover:underline font-medium">
            {SiteConfig.url}
          </a>
          , one of our main priorities is the privacy of our visitors. This Privacy Policy document
          contains the types of information that is collected and recorded by Fix Car Dubai and how we use it.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          This policy applies only to our online activities and is valid for visitors to our website
          with regards to the information that they shared and/or collect on Fix Car Dubai.
        </p>
      </>
    ),
  },
  {
    id: "information-collect",
    title: "Information We Collect",
    icon: FileText,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          The personal information that you are asked to provide, and the reasons why you are asked
          to provide it, will be made clear to you at the point we ask you to provide your personal information.
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Eye className="w-4 h-4 text-primary" />
              Information You Provide
            </h4>
            <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-5">
              <li>Name, email, phone number</li>
              <li>Vehicle details and service history</li>
              <li>Appointment preferences</li>
              <li>Communication preferences</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
              <Link2 className="w-4 h-4 text-primary" />
              Information Collected Automatically
            </h4>
            <ul className="text-sm text-gray-600 space-y-1.5 list-disc pl-5">
              <li>IP address and browser type</li>
              <li>Device and location data</li>
              <li>Pages visited and time spent</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </div>
        </div>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    icon: Users,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          We use the information we collect in various ways, including to:
        </p>
        <ul className="space-y-3">
          {[
            "Provide, operate, and maintain our website and automotive services",
            "Improve, personalize, and expand our service offerings",
            "Understand and analyze how you use our website and services",
            "Develop new features, services, and improvements",
            "Communicate with you for service updates, appointments, and support",
            "Send you administrative information, such as policy changes",
            "Prevent fraudulent transactions and monitor against theft",
            "Comply with legal obligations and enforce our terms",
          ].map((item, idx) => (
            <li key={idx} className="flex gap-3 text-gray-600 leading-relaxed">
              <span className="shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold mt-0.5">
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
    id: "log-files",
    title: "Log Files & Cookies",
    icon: AlertCircle,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          Fix Car Dubai follows a standard procedure of using log files. These files log visitors
          when they visit websites. The information collected includes:
        </p>
        <div className="mt-4 bg-gray-50 rounded-xl p-5 border border-gray-100">
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
            {[
              "Internet Protocol (IP) addresses",
              "Browser type and version",
              "Internet Service Provider (ISP)",
              "Date and time stamp",
              "Referring/exit pages",
              "Number of clicks and interactions",
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <p className="text-gray-600 leading-relaxed mt-5">
          Like any other website, Fix Car Dubai uses &apos;cookies&apos; to store information including
          visitors&apos; preferences and pages accessed. This information is used to optimize the users&apos;
          experience by customizing our web page content based on visitors&apos; browser type.
        </p>
      </>
    ),
  },
  {
    id: "data-protection",
    title: "Data Protection & Security",
    icon: Lock,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          We implement appropriate technical and organizational security measures designed to protect
          the security of any personal information we process. However, please remember that no method
          of transmission over the Internet or electronic storage is 100% secure.
        </p>
        <div className="mt-5 grid gap-4">
          <div className="flex gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
            <Lock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-gray-800">Our Security Measures</h4>
              <p className="text-sm text-gray-600 mt-1">
                Encryption in transit (TLS/SSL), access controls, regular security audits,
                employee training, and secure data storage practices.
              </p>
            </div>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed mt-4">
          We retain your personal information only for as long as necessary to fulfill the purposes
          outlined in this Privacy Policy, unless a longer retention period is required by law.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Privacy Rights",
    icon: Shield,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed mb-4">
          Depending on your location, you may have certain rights regarding your personal information:
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { title: "Access", desc: "Request a copy of your personal data" },
            { title: "Correction", desc: "Request correction of inaccurate data" },
            { title: "Deletion", desc: "Request deletion of your personal data" },
            { title: "Portability", desc: "Receive your data in a structured format" },
            { title: "Objection", desc: "Object to certain processing activities" },
            { title: "Withdraw Consent", desc: "Withdraw consent at any time" },
          ].map((right, idx) => (
            <div key={idx} className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-800">{right.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{right.desc}</p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed mt-5">
          To exercise any of these rights, please contact us using the information provided in the
          &quot;Contact Us&quot; section below. We will respond to your request within 30 days.
        </p>
      </>
    ),
  },
  {
    id: "third-parties",
    title: "Third-Party Services",
    icon: Link2,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          Our website may contain links to third-party websites or services that are not operated by
          Fix Car Dubai. If you click on a third-party link, you will be directed to that third party&apos;s site.
          We strongly advise you to review the Privacy Policy of every site you visit.
        </p>
        <div className="mt-5 p-4 bg-amber-50 rounded-xl border border-amber-200">
          <p className="text-sm text-amber-800 flex gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <strong>Note:</strong> We have no control over and assume no responsibility for the content,
            privacy policies, or practices of any third-party sites or services.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "children-privacy",
    title: "Children&apos;s Privacy",
    icon: Users,
    content: (
      <p className="text-gray-600 leading-relaxed">
        Fix Car Dubai does not knowingly collect any Personal Identifiable Information from children
        under the age of 13. If you think that your child provided this kind of information on our
        website, we strongly encourage you to contact us immediately and we will do our best efforts
        to promptly remove such information from our records.
      </p>
    ),
  },
  {
    id: "changes-policy",
    title: "Changes to This Policy",
    icon: FileText,
    content: (
      <>
        <p className="text-gray-600 leading-relaxed">
          We may update our Privacy Policy from time to time. We will notify you of any changes by
          posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date at the top.
        </p>
        <p className="text-gray-600 leading-relaxed mt-4">
          You are advised to review this Privacy Policy periodically for any changes. Changes to this
          Privacy Policy are effective when they are posted on this page.
        </p>
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
          If you have additional questions or require more information about our Privacy Policy,
          do not hesitate to contact us:
        </p>
        <div className="bg-linear-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border border-primary/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">Get in Touch</h4>
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

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 15, 2026";

  return (
    <main className="min-h-screen bg-gray-50/50">
      {/* Skip Link for Accessibility */}
      <a
        href="#policy-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50"
      >
        Skip to content
      </a>

      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-5xl py-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">Legal</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            How Fix Car Dubai collects, uses, and protects your personal information.
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
                  <FileText className="w-4 h-4 text-primary" />
                  On This Page
                </h2>
                <ul className="space-y-1.5">
                  {POLICY_SECTIONS.map((section) => (
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
          <article id="policy-content" className="bg-white rounded-2xl border border-gray-200 shadow-sm">
            <div className="p-6 md:p-8 lg:p-10 space-y-10">
              {POLICY_SECTIONS.map((section) => {
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
                          <p className="text-sm text-gray-500 mt-0.5">We&apos;re here to help</p>
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
                    href="/dubai/terms"
                    className="text-sm text-gray-600 hover:text-primary font-medium transition-none"
                  >
                    Terms of Service
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
        }
      `}</style>
    </main>
  );
}