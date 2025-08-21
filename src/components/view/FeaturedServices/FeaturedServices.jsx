
import { Badge } from "@/components/ui/badge";
import servicesData from "../../../data/services.json";
import { ServicesGrid } from "../Card/ServicesGrid";



export default function FeaturedServices() {
  return (
    <div className="container py-12 mx-auto">
       <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 bg-primary/10 text-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold sm:text-3xl md:text-5xl mb-4">
            Featured <span className="text-primary">Car Repair</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional automotive solutions tailored for Dubai's climate and driving conditions
          </p>
        </div>
      <ServicesGrid services={servicesData.services} />
    </div>
  );
}