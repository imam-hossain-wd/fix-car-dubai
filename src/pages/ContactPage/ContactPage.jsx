
import GetTouch from '@/components/view/GetTouch/GetTouch'
import { getContactPageSchema } from '@/schemas/contactPageSchema'
import { SeoHead } from '@/seo/SeoHead'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import { WhatsAppButton } from '@/components/ui/shared/Buttons/WhatsAppButton/WhatsAppButton'
import { CallNowButton } from '@/components/ui/shared/Buttons/CallNowButton/CallNowButton'
import ServiceAreas from '@/components/view/ServiceArea/ServiceAreas'

export default function ContactPage() {
  const pageTitle = "Contact 24 Car Service Dubai | 24/7 Car Help";
  const pageDescription = "Need urgent car help in Dubai? Contact 24 Car Service Dubai anytime for 24/7 on-demand car repair, battery replacement, and roadside assistance. Call or WhatsApp now!";
  const pageKeywords = "contact car repair Dubai, mobile mechanic phone number, 24/7 roadside assistance, emergency car service contact Dubai";
  const pageCanonical = "https://24CarServiceDubai.com/contact";

  const contactPageSchema = getContactPageSchema();

  return (
    <div>
      <SeoHead
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={pageCanonical}
        schema={contactPageSchema}
      />

      <div className="bg-white">
        {/* Enhanced Hero Section */}
        <section className="relative h-[50vh] md:h-[70vh] min-h-[200px] w-full overflow-hidden">
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dmzcvexar/image/upload/v1752751674/24_car_service_contact_us_y2xjdv.webp')] bg-cover bg-center bg-no-repeat scale-110 animate-zoom-in-out"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <div className="max-w-4xl space-y-2">
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-6xl animate-fade-in-up">
                Contact Our <span className="text-primary">Car Experts</span>
              </h1>
              <p className="mt-2 w-[90%] text-xl text-white/90 sm:text-2xl md:max-w-3xl mx-auto animate-fade-in-up delay-100">
                24/7 professional support for all your vehicle needs across Dubai
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-4 animate-fade-in-up delay-200">
                {/* <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button> */}
                <CallNowButton />
                {/* <Button size="lg" variant="outline" className="text-white border-white text-black hover:bg-white/10">
                  <Mail className="w-5 h-5 mr-2" /> Email Us
                </Button> */}
                <WhatsAppButton />
              </div>
            </div>
          </div>

        </section>


        <GetTouch />


        {/* service areas */}
        <ServiceAreas />
        {/* service areas */}



        {/* Map Section */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">
                Our <span className="text-primary">Service Center</span> in Dubai
              </h2>
              <p className="text-lg text-gray-600">
                Visit our state-of-the-art facility in Al Quoz Industrial Area
              </p>
            </div>
            <MapComponent />
          </div>
        </section>
      </div>
    </div>
  )
}



{/* Contact Grid */ }
// <section className="py-16 md:py-24">
//   <div className="container mx-auto">
//     <div className="grid gap-12 lg:grid-cols-3">
//       {/* Contact Info Card */}
//       <Card className="border-0 bg-gradient-to-b from-primary/5 to-white shadow-lg">
//         <CardHeader>
//           <CardTitle className="text-2xl">Quick Contacts</CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           <div className="flex items-start gap-4">
//             <div className="mt-1 rounded-full bg-primary/10 p-3">
//               <Phone className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Emergency Call</h3>
//               <p className="text-gray-600">+971 54 569 5980</p>
//               <Button variant="link" className="h-auto p-0 text-primary">
//                 Call Now
//               </Button>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="mt-1 rounded-full bg-primary/10 p-3">
//               <Mail className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Email Support</h3>
//               <p className="text-gray-600">24carservicedubai@gmail.com </p>
//               <Button variant="link" className="h-auto p-0 text-primary">
//                 Email Us
//               </Button>
//             </div>
//           </div>

//           <div className="flex items-start gap-4">
//             <div className="mt-1 rounded-full bg-primary/10 p-3">
//               <Clock className="h-6 w-6 text-primary" />
//             </div>
//             <div>
//               <h3 className="text-lg font-semibold">Working Hours</h3>
//               <p className="text-gray-600">24/7 Service Available</p>
//               <p className="text-sm text-gray-500">
//                 Emergency support anytime
//               </p>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Appointment Form */}
//       <Card className="border-0 bg-white/90 backdrop-blur-sm shadow-lg lg:col-span-2">
//         <CardHeader>
//           <CardTitle className="text-2xl">Book a Service Appointment</CardTitle>
//           <p className="text-gray-600">
//             Schedule your car service with our expert technicians
//           </p>
//         </CardHeader>
//         <CardContent>
//           <form className="grid gap-6">
//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Full Name</label>
//                 <Input placeholder="Your name" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Phone Number</label>
//                 <Input placeholder="+971" type="tel" />
//               </div>
//             </div>

//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Email</label>
//                 <Input placeholder="your@email.com" type="email" />
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Service Needed</label>
//                 <Input placeholder="e.g. Oil Change, AC Repair" />
//               </div>
//             </div>

//             <div className="grid gap-4 md:grid-cols-2">
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Preferred Date</label>
//                 <div className="relative">
//                   <Input placeholder="Select date" type="date" />
//                   <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <label className="text-sm font-medium">Preferred Time</label>
//                 <Input placeholder="Select time" type="time" />
//               </div>
//             </div>

//             <div className="space-y-2">
//               <label className="text-sm font-medium">Additional Notes</label>
//               <Textarea
//                 placeholder="Tell us about your car issues..."
//                 rows={4}
//               />
//             </div>

//             <Button size="lg" className="w-full">
//               Book Appointment Now
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   </div>
// </section>