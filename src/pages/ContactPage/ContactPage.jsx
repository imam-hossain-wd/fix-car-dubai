
import GetTouch from '@/components/view/GetTouch/GetTouch'
import MapComponent from '@/components/ui/shared/Map/MapComponent'
import Breadcrumb from '@/components/ui/shared/BreadCrumb/BreadCrumb'
import { CompanyOverview } from '@/components/view/CompanyOverview/CompanyOverview'
import dynamic from 'next/dynamic';



// We disable SSR because the component uses client-side hooks and window objects
const DynamicMap = dynamic(() => import('@/components/ui/shared/Map/MapComponent'), {
    // ssr: false,
    loading: () => (
        <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-2xl flex items-center justify-center">
            <p className="text-gray-500 font-medium">Loading Map Module...</p>
        </div>
    ),
});

export default function ContactPage() {

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <div>
      <div className="px-4 mx-auto bg-secondary/90 border-b">
        <Breadcrumb items={breadcrumbItems} />
      </div>

      <section className="relative bg-amber-50 text-white py-10">
        {/* Decorative elements from service page */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-amber-300"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-blue-400"></div>
        </div>

        <div className="container mx-auto px-4 text-center text-black relative z-10">
          {/* Title decoration from service page */}
          <div className="inline-flex items-center justify-center mb-4">
            <div className="w-12 h-0.5 bg-black mr-4"></div>
            <span className=" font-semibold uppercase tracking-wider text-sm">Our Coverage</span>
            <div className="w-12 h-0.5 bg-black ml-4"></div>
          </div>

          {/* Main heading from areas page */}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Contact Our Car Experts
          </h1>

          {/* Subheading combining both styles */}
          <p className="text-lg md:text-xl text-black max-w-3xl mx-auto">
            24/7 professional support for all your vehicle needs across Dubai
          </p>
        </div>
      </section>

      <div className="bg-white">
        <GetTouch />
        <CompanyOverview />
        {/* Map Section */}
        <section className="py-5 bg-white">
          <div className="container mx-auto px-4">
            <DynamicMap />
          </div>
        </section>
      </div>

    </div>
  )
}
