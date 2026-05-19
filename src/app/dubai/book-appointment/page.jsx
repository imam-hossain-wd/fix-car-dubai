import BookAppointmentForm from "@/components/Forms/AppointmentForm";
import BookAppointmentPage from "@/pages/BookAppointmentPage/BookAppointmentPage";
import { SiteConfig } from "@/config/site";

export const metadata = {
  title: "Book an Appointment | Fast Mobile Car Repair Dubai",
  description: "Schedule your onsite car repair or battery replacement in Dubai. Quick booking for 24/7 mobile mechanic services. We come to your home, office, or roadside.",
  alternates: {
    canonical: `${SiteConfig.url}/dubai/book-appointment`,
  },
};

export default function BookAppintment() {
  return <BookAppointmentPage />
}
