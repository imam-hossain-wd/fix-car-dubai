'use client'
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { SiteConfig } from "@/config/site"
import { faqs } from "@/data/faq"


export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="relative py-5 bg-white dark:bg-[#1F2937] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#003053]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#B91C1C]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-wider text-primary bg-primary/10 rounded-full uppercase dark:text-white dark:bg-white/10">
            NEED ANSWERS?
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Questions</span> Answered
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about our premium car services
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={cn(
                "rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300",
                activeIndex === index ?
                  "bg-white dark:bg-gray-800 shadow-lg border-[#003053]/30 dark:border-[#003053]" :
                  "bg-white/50 dark:bg-gray-800/50 shadow-sm hover:shadow-md"
              )}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className={cn(
                  "flex w-full items-center justify-between p-6 text-left transition-colors",
                  activeIndex === index ? "bg-[#003053]/5 dark:bg-[#003053]/10" : "hover:bg-gray-50 dark:hover:bg-gray-700/50"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "p-3 rounded-lg transition-colors ",
                    activeIndex === index ?
                      "bg-primary text-white" :
                      "bg-primary/10 text-primary dark:bg-[#003053]/20 dark:text-white"
                  )}>
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                </div>
                <ChevronDown className={cn(
                  "h-5 w-5 text-primary transition-transform duration-300",
                  activeIndex === index ? "rotate-180 text-[#003053] dark:text-white" : ""
                )} />
              </button>

              <div
                className={cn(
                  "px-6 overflow-hidden transition-all duration-300",
                  activeIndex === index ? "pb-6 max-h-96" : "max-h-0"
                )}
              >
                <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </section>
  )
}