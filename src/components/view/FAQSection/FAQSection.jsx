'use client'
import {  Phone, Mail, MessageSquare, Clock, Zap, ShieldCheck, CreditCard, Car, CalendarCheck, BadgeCheck, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)
  
  const faqs = [
    {
      question: "What are your working hours?",
      answer: "We're open 24/7 to serve all your car repair needs. Our emergency services are available round the clock for urgent repairs.",
      icon: <Clock className="h-5 w-5 text-primary" />
    },
    {
      question: "How quickly can you repair my car?",
      answer: "Most standard repairs are completed within 4-6 hours. For complex issues, we provide a free diagnosis and time estimate before starting work.",
      icon: <Zap className="h-5 w-5 text-primary" />
    },
    {
      question: "Do you offer warranty on your services?",
      answer: "Yes! All our repairs come with a 12-month warranty covering both parts and labor. Some premium services include extended warranty options.",
      icon: <ShieldCheck className="h-5 w-5 text-primary" />
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, Apple Pay, Google Pay, and bank transfers. Corporate accounts are also available.",
      icon: <CreditCard className="h-5 w-5 text-primary" />
    },
    {
      question: "Do you provide loaner cars during repairs?",
      answer: "Yes, we offer complimentary loaner cars for repairs expected to take more than 24 hours (subject to availability).",
      icon: <Car className="h-5 w-5 text-primary" />
    },
    {
      question: "How often should I service my car?",
      answer: "We recommend basic service every 5,000 km or 6 months, whichever comes first. Modern cars may have different intervals - consult your manual or our experts.",
      icon: <CalendarCheck className="h-5 w-5 text-primary" />
    },
    {
      question: "Are your technicians certified?",
      answer: "All our technicians are ASE-certified with minimum 5 years experience. We specialize in European, American, and Japanese vehicles.",
      icon: <BadgeCheck className="h-5 w-5 text-primary" />
    },
    {
      question: "What areas do you serve in Dubai?",
      answer: "We cover all areas of Dubai including Downtown, Marina, JBR, JLT, and surrounding communities. Mobile services available for select repairs.",
      icon: <MapPin className="h-5 w-5 text-primary" />
    }
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="relative py-16 md:py-24 container mx-auto">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center mb-16">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Everything you need to know about our premium car services
            </p>
          </div>

          <div className="max-w-3xl mx-5 lg:mx-auto">
            <Accordion 
              type="single" 
              collapsible 
              className="w-full space-y-4"
              value={activeIndex !== null ? `item-${activeIndex}` : undefined}
              onValueChange={(value) => setActiveIndex(value ? parseInt(value.split('-')[1]) : null)}
            >
              {faqs.map((faq, index) => (
                <div key={index}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className={cn(
                      "overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50",
                      activeIndex === index ? "shadow-lg" : "shadow-sm"
                    )}
                  >
                    <AccordionTrigger 
                      className={cn(
                        "flex w-full items-center justify-between px-6 py-5 text-left font-medium hover:no-underline [&[data-state=open]>svg:rotate-180",
                        "hover:bg-gray-50 dark:hover:bg-gray-800/50"
                      )}
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          {faq.icon}
                        </div>
                        <span className="text-lg font-semibold text-left">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 pt-0 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <div className="relative rounded-2xl bg-gradient-to-br from-primary/5 to-blue-100/20 dark:from-gray-800/50 dark:to-gray-900/50 p-8 md:p-12 border border-gray-200/50 dark:border-gray-800">
              <h3 className="text-2xl font-bold mb-4 relative z-10">Still have questions?</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto relative z-10">
                Our expert team is ready to provide personalized answers to your specific queries.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <Button 
                  className="h-14 px-8 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg"
                  size="lg"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
                
                <Button 
                  variant="outline" 
                  className="h-14 px-8 text-lg border-primary text-primary hover:bg-primary/10"
                  size="lg"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                
                <Button 
                  variant="ghost" 
                  className="h-14 px-8 text-lg text-primary hover:bg-primary/5"
                  size="lg"
                >
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Chat
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}