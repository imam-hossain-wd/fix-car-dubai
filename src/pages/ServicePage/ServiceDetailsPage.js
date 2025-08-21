import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import {
  CheckCircle2,
  Wrench,
  Shield,
  Clock,
  MapPin,
  Zap,
  Droplet,
  Settings,
  Fan
} from 'lucide-react'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'

function ServiceDetailsPage({ service }) {
  const getServiceIcon = React.useCallback(() => {
    const serviceIcons = {
      Battery: <Zap className="h-6 w-6" />,
      AC: <Fan className="h-6 w-6" />,
      Oil: <Droplet className="h-6 w-6" />,
      Engine: <Settings className="h-6 w-6" />
    }

    const matchedIcon = Object.entries(serviceIcons).find(([key]) => 
      service?.title?.includes(key)
    )

    return matchedIcon?.[1] ?? <Wrench className="h-6 w-6" />
  }, [service?.title])
  

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      {/* Hero Section */}
      <section className={cn(
        "relative py-20 md:py-28 bg-gradient-to-r",
        "from-green-500 to-sky-900 dark:from-blue-800 dark:to-purple-800",
        "backdrop-blur-md"
      )}>
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl">
            <Badge variant="secondary" className="mb-4">
              <span className="text-primary">Premium Service</span>
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {service?.title}
            </h1>
            
            <p className="mt-6 text-xl text-white/90 max-w-2xl">
              {service?.intro?.subheading}
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                {service?.ctaSection?.buttonText}
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Card */}
      <div className="container px-4 mx-auto -mt-12 relative z-10">
        <Card className="shadow-xl rounded-2xl overflow-hidden border-0">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-2 p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  {getServiceIcon()}
                </div>
                <h2 className="text-2xl font-bold">{service?.intro?.heading}</h2>
              </div>
              <p className="text-muted-foreground mb-6">{service?.intro?.content}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-primary/5 p-8 flex flex-col justify-center">
              <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-sm">Typically 1-2 hours</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm">12-month warranty</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">Mobile service available</span>
                </li>
              </ul>
              
              <Button className="mt-6 w-full" size="lg">
                Book Now
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Main Content */}
      <div className="container px-4 mx-auto py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column */}
          <div className="lg:w-2/3 space-y-8">
            {/* Why Choose Us */}
            <section>
              <h2 className="text-3xl font-bold mb-8">{service?.whyChooseUs?.heading}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service?.whyChooseUs?.points.map((point, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background rounded-xl border border-border hover:border-primary transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-primary/10 text-primary">
                        {index % 3 === 0 ? <Wrench className="h-5 w-5" /> : 
                         index % 3 === 1 ? <Shield className="h-5 w-5" /> : 
                         <CheckCircle2 className="h-5 w-5" />}
                      </div>
                      <p className="font-medium">{point.replace('✅', '').trim()}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Process Timeline */}
            <section>
              <h2 className="text-3xl font-bold mb-8">{service?.ourProcess?.heading}</h2>
              <div className="relative">
                <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-primary to-transparent" />
                
                <div className="space-y-10">
                  {service?.ourProcess?.steps.map((step, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-0 top-1 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold border-4 border-background">
                        {index + 1}
                      </div>
                      
                      <div className="bg-background p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-2">{step?.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {service?.faq?.map((item, index) => (
                  <div key={index}>
                    <AccordionItem value={`item-${index}`} className="border-border">
                      <AccordionTrigger className="hover:no-underline px-4 py-3 bg-secondary/50 rounded-lg hover:bg-secondary">
                        <span className="text-left font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 py-3 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </div>
                ))}
              </Accordion>
            </section>
          </div>

          {/* Right Column - Sticky Sidebar */}
          <div className="lg:w-1/3 space-y-6">
            {/* Service Coverage Card */}
            <div className="sticky top-6">
              <Card className="border-border bg-background/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {service?.serviceCoverage?.heading}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {service?.serviceCoverage?.note}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service?.serviceCoverage?.locations?.map((location, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary" />
                        <span className="text-sm">
                          {location.replace('📍', '').trim()}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Floating CTA Card */}
              <div className="mt-6">
                <Card className="bg-gradient-to-br from-primary to-blue-600 border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Ready to Book?
                    </CardTitle>
                    <p className="text-white/90">
                      Get your {service?.title?.toLowerCase()} service today
                    </p>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full font-bold"
                    >
                      {service?.ctaSection?.buttonText}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetailsPage;