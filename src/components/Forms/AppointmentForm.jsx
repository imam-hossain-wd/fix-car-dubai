// 'use client'

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Textarea } from "@/components/ui/textarea"
// import { Calendar } from "@/components/ui/calendar"
// import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
// import { CalendarIcon, Car, Clock, MapPin, User, Phone } from "lucide-react"
// import { format } from "date-fns"
// import { cn } from "@/lib/utils"
// import { SiteConfig } from "@/config/site"

// const services = [
//   "Car Battery Replacement",
//   "Car AC Repair",
//   "Car Engine Oil Change",
//   "Car Gear Oil Change",
//   "Car Break Pad Repair",
//   "Car Break Pad Replacement",
//   "Car Radiator Repair",
//   "Car Radiator Replacement",
//   "ABS System Repair",
//   "Car Detailing Dubai",
//   "Car Maintenance",
//   "Other Services"
// ]

// const timeSlots = [
//   "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
//   "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
//   "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
// ]

// export default function BookAppointmentForm() {
//   const [date, setDate] = useState()
//   const [selectedTime, setSelectedTime] = useState("")
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     carModel: "",
//     service: "",
//     location: "",
//     message: ""
//   })

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({ ...prev, [field]: value }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission here
//     console.log({ ...formData, date, time: selectedTime })
//     // Reset form or show success message
//   }


//   const { displayNumber
// } = SiteConfig;

//   return (
//     <div className=" border p-2 bg-white rounded-2xl shadow-xl border border-gray-100">
//       {/* Header */}
//       <div className="text-center mb-6 mt-2">
//         <div className="inline-flex items-center justify-center w-12 h-12 md:w-12 md:h-12 bg-primary/10 rounded-2xl mb-2">
//           <CalendarIcon className="h-8 w-8 text-primary" />
//         </div>
//         <h2 className="text-2xl font-bold text-primary mb-2">Book Appointment</h2>
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-4 border p-2 rounded-2xl">
//         {/* Personal Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
//               <User className="h-4 w-4" />
//               Full Name *
//             </Label>
//             <Input
//               id="name"
//               placeholder="Enter your full name"
//               value={formData.name}
//               onChange={(e) => handleInputChange("name", e.target.value)}
//               required
//               className="h-12"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
//               <Phone className="h-4 w-4" />
//               Phone Number *
//             </Label>
//             <Input
//               id="phone"
//               type="tel"
//               placeholder="+971 50 123 4567"
//               value={formData.phone}
//               onChange={(e) => handleInputChange("phone", e.target.value)}
//               required
//               className="h-12"
//             />
//           </div>
//         </div>

//         {/* Car Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label htmlFor="carModel" className="flex items-center gap-2 text-gray-700">
//               <Car className="h-4 w-4" />
//               Car Model *
//             </Label>
//             <Input
//               id="carModel"
//               placeholder="e.g., Toyota Camry 2020"
//               value={formData.carModel}
//               onChange={(e) => handleInputChange("carModel", e.target.value)}
//               required
//               className="h-12"
//             />
//           </div>

//           <div className="space-y-2 w-full">
//             <Label htmlFor="service" className="text-gray-700">Service Required *</Label>
//             <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
//               <SelectTrigger className="w-full h-12">
//                 <SelectValue placeholder="Select a service" />
//               </SelectTrigger>
//               <SelectContent className="w-full">
//                 {services.map((service) => (
//                   <SelectItem key={service} value={service} className="w-full">
//                     {service}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Location */}
//         <div className="space-y-2">
//           <Label htmlFor="location" className="flex items-center gap-2 text-gray-700">
//             <MapPin className="h-4 w-4" />
//             Location *
//           </Label>
//           <Input
//             id="location"
//             placeholder="Enter your location in Dubai"
//             value={formData.location}
//             onChange={(e) => handleInputChange("location", e.target.value)}
//             required
//             className="h-12"
//           />
//         </div>

//         {/* Date and Time */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="space-y-2">
//             <Label className="text-gray-700">Preferred Date *</Label>
//             <Popover>
//               <PopoverTrigger asChild>
//                 <Button
//                   variant="outline"
//                   className={cn(
//                     "w-full h-12 justify-start text-left font-normal",
//                     !date && "text-muted-foreground"
//                   )}
//                 >
//                   <CalendarIcon className="mr-2 h-4 w-4" />
//                   {date ? format(date, "PPP") : "Pick a date"}
//                 </Button>
//               </PopoverTrigger>
//               <PopoverContent className="w-auto p-0" align="start">
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   onSelect={setDate}
//                   initialFocus
//                   disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
//                 />
//               </PopoverContent>
//             </Popover>
//           </div>

//           <div className="space-y-2 w-full">
//             <Label className="flex items-center gap-2 text-gray-700">
//               <Clock className="h-4 w-4" />
//               Preferred Time *
//             </Label>
//             <Select value={selectedTime} onValueChange={setSelectedTime}>
//               <SelectTrigger className="w-full h-12">
//                 <SelectValue placeholder="Select time slot" />
//               </SelectTrigger>
//               <SelectContent className="w-full">
//                 {timeSlots.map((time) => (
//                   <SelectItem key={time} value={time} className="w-full">
//                     {time}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Additional Message */}
//         <div className="space-y-2">
//           <Label htmlFor="message" className="text-gray-700">Additional Notes (Optional)</Label>
//           <Textarea
//             id="message"
//             placeholder="Any specific requirements or issues with your vehicle..."
//             value={formData.message}
//             onChange={(e) => handleInputChange("message", e.target.value)}
//             className="min-h-24"
//           />
//         </div>

//         {/* Submit Button */}
//         <Button type="submit" className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90">
//           Book Appointment Now
//         </Button>

//         {/* Quick Contact Info */}
//         <div className="text-center text-sm text-gray-500">
//           <p>Need immediate assistance? Call us at <strong>{displayNumber}</strong></p>
//         </div>
//       </form>
//     </div>
//   )
// }



'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Car, Clock, MapPin, User, Phone } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { SiteConfig } from "@/config/site"

const carBrands = [
  "Toyota", "Honda", "Nissan", "Mitsubishi", "Ford", "Chevrolet", 
  "BMW", "Mercedes-Benz", "Audi", "Volkswagen", "Hyundai", "Kia",
  "Lexus", "Mazda", "Subaru", "Jeep", "Land Rover", "Porsche",
  "Ferrari", "Lamborghini", "Volvo", "Jaguar", "Mini", "Cadillac",
  "Buick", "Chrysler", "Dodge", "Ram", "GMC", "Acura", "Infiniti",
  "Lincoln", "Tesla", "Genesis", "Maserati", "Bentley", "Rolls-Royce",
  "Aston Martin", "McLaren", "Bugatti", "Other"
]

const services = [
  "Car Battery Replacement",
  "Car AC Repair",
  "Car Engine Oil Change",
  "Car Gear Oil Change",
  "Car Break Pad Repair",
  "Car Break Pad Replacement",
  "Car Radiator Repair",
  "Car Radiator Replacement",
  "ABS System Repair",
  "Car Detailing Dubai",
  "Car Maintenance",
  "Other Services"
]

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
]

export default function BookAppointmentForm() {
  const [date, setDate] = useState()
  const [selectedTime, setSelectedTime] = useState("")
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carBrand: "",
    carModel: "",
    service: "",
    location: "",
    message: ""
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate)
    setOpen(false)
  }

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const submissionData = {
  //     ...formData,
  //     date: date ? format(date, "yyyy-MM-dd") : null,
  //     time: selectedTime
  //   }

  //   console.log("Appointment Form Submission:", submissionData)

  //   setFormData({
  //     name: "",
  //     phone: "",
  //     carBrand: "",
  //     carModel: "",
  //     service: "",
  //     location: "",
  //     message: ""
  //   })
  //   setDate(undefined)
  //   setSelectedTime("")
  // }

  const handleSubmit = (e) => {
  e.preventDefault()
  
  // Prepare all form data
  const submissionData = {
    ...formData,
    date: date ? format(date, "yyyy-MM-dd") : null,
    time: selectedTime
  }
  console.log("Appointment Form Submission:", submissionData)

  const whatsappMessage = `
🛠️ *Car Service Appointment Request*

👤 *Personal Information:*
• Name: ${formData.name}
• Phone: ${formData.phone}

🚗 *Vehicle Details:*
• Car Brand: ${formData.carBrand}
• Car Model: ${formData.carModel}

🔧 *Service Required:*
• Service: ${formData.service}

📍 *Location & Timing:*
• Location: ${formData.location}
• Preferred Date: ${date ? format(date, "PPP") : "Not selected"}
• Preferred Time: ${selectedTime || "Not selected"}

📝 *Additional Notes:*
${formData.message || "No additional notes"}

_This appointment request was sent via website form_
  `.trim()
  const encodedMessage = encodeURIComponent(whatsappMessage)
  const whatsappNumber = "971568703512"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
  window.open(whatsappUrl, '_blank')
}


  const today = new Date()
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0)

  const { displayNumber } = SiteConfig

  return (
    <div className="border p-2 bg-white rounded-2xl shadow-xl border-gray-100">
      {/* Header */}
      <div className="text-center mb-6 mt-2">
        <div className="inline-flex items-center justify-center w-12 h-12 md:w-12 md:h-12 bg-primary/10 rounded-2xl mb-2">
          <CalendarIcon className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-primary mb-2">Book Appointment</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 border p-2 rounded-2xl">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="flex items-center gap-2 text-gray-700">
              <User className="h-4 w-4" />
              Full Name *
            </Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              required
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2 text-gray-700">
              <Phone className="h-4 w-4" />
              Phone Number *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+971 50 123 4567"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
              className="h-12"
            />
          </div>
        </div>

        {/* Car Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="carBrand" className="flex items-center gap-2 text-gray-700">
              <Car className="h-4 w-4" />
              Car Brand *
            </Label>
            <Select 
              value={formData.carBrand} 
              onValueChange={(value) => handleInputChange("carBrand", value)}
            >
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select car brand" />
              </SelectTrigger>
              <SelectContent className="w-full max-h-60">
                {carBrands.map((brand) => (
                  <SelectItem key={brand} value={brand} className="w-full">
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="carModel" className="flex items-center gap-2 text-gray-700">
              <Car className="h-4 w-4" />
              Car Model *
            </Label>
            <Input
              id="carModel"
              placeholder="e.g., Camry 2020, Civic 2022"
              value={formData.carModel}
              onChange={(e) => handleInputChange("carModel", e.target.value)}
              required
              className="h-12"
            />
          </div>
        </div>

        {/* Service and Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2 w-full">
            <Label htmlFor="service" className="text-gray-700">Service Required *</Label>
            <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {services.map((service) => (
                  <SelectItem key={service} value={service} className="w-full">
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-4 w-4" />
              Location *
            </Label>
            <Input
              id="location"
              placeholder="Enter your location in Dubai"
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
              className="h-12"
            />
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-gray-700">Preferred Date *</Label>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full h-12 justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                  disabled={(date) => 
                    date < new Date().setHours(0, 0, 0, 0) || 
                    date > lastDayOfMonth
                  }
                  fromDate={today}
                  toDate={lastDayOfMonth}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2 w-full h-16">
            <Label className="flex items-center gap-2 text-gray-700">
              <Clock className="h-4 w-4" />
              Preferred Time *
            </Label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="w-full h-14">
                <SelectValue placeholder="Select time slot" />
              </SelectTrigger>
              <SelectContent className="w-full">
                {timeSlots.map((time) => (
                  <SelectItem key={time} value={time} className="w-full">
                    {time}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Additional Message */}
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-700">Additional Notes (Optional)</Label>
          <Textarea
            id="message"
            placeholder="Any specific requirements or issues with your vehicle..."
            value={formData.message}
            onChange={(e) => handleInputChange("message", e.target.value)}
            className="min-h-24"
          />
        </div>

        {/* Submit Button */}
        <Button 
          type="submit" 
          className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90"
        >
          Book Appointment Now
        </Button>

        {/* Quick Contact Info */}
        <div className="text-center text-sm text-gray-500">
          <p>Need immediate assistance? Call us at <strong>{displayNumber}</strong></p>
        </div>
      </form>
    </div>
  )
}