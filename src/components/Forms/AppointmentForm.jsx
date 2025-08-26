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
//   "Car Maintenance"
// ]

// const timeSlots = [
//   "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
//   "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
//   "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
// ]

// export default function BookAppointmentForm() {
//   const [date, setDate] = useState(new Date())
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

//   return (
//     <div className="w-container border max-w-2xl mx-auto p-2 bg-white rounded-2xl shadow-xl border border-gray-100">
//       {/* Header */}
//       <div className="text-center mb-6 mt-2">
//         <div className="inline-flex items-center justify-center w-12 h-12 md:w-12 md:h-12 bg-primary/10 rounded-2xl mb-2">
//           <CalendarIcon className="h-8 w-8 text-primary" />
//         </div>
//         <h2 className="text-2xl font-bold text-primary mb-2">Book Appointment</h2>
//         {/* <p className="text-gray-600">Schedule your car service with our expert technicians</p> */}
//       </div>

//       <form onSubmit={handleSubmit} className="space-y-6 border p-4 rounded-2xl">
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
//               <PopoverContent className="w-auto p-0">
//                 <Calendar
//                   mode="single"
//                   selected={date}
//                   onSelect={setDate}
//                   initialFocus
//                   disabled={(date) => date < new Date()}
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
//               <SelectTrigger className="h-12">
//                 <SelectValue placeholder="Select time slot" />
//               </SelectTrigger>
//               <SelectContent>
//                 {timeSlots.map((time) => (
//                   <SelectItem key={time} value={time}>
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
//           <p>Need immediate assistance? Call us at <strong>+971 50 669 5990</strong></p>
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
  "Car Maintenance"
]

const timeSlots = [
  "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM", "07:00 PM"
]

export default function BookAppointmentForm() {
  const [date, setDate] = useState()
  const [selectedTime, setSelectedTime] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    carModel: "",
    service: "",
    location: "",
    message: ""
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log({ ...formData, date, time: selectedTime })
    // Reset form or show success message
  }

  return (
    <div className="w-container border max-w-2xl mx-auto p-2 bg-white rounded-2xl shadow-xl border border-gray-100">
      {/* Header */}
      <div className="text-center mb-6 mt-2">
        <div className="inline-flex items-center justify-center w-12 h-12 md:w-12 md:h-12 bg-primary/10 rounded-2xl mb-2">
          <CalendarIcon className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-primary mb-2">Book Appointment</h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 border p-4 rounded-2xl">
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
            <Label htmlFor="carModel" className="flex items-center gap-2 text-gray-700">
              <Car className="h-4 w-4" />
              Car Model *
            </Label>
            <Input
              id="carModel"
              placeholder="e.g., Toyota Camry 2020"
              value={formData.carModel}
              onChange={(e) => handleInputChange("carModel", e.target.value)}
              required
              className="h-12"
            />
          </div>

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
        </div>

        {/* Location */}
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

        {/* Date and Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-gray-700">Preferred Date *</Label>
            <Popover>
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
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date().setHours(0, 0, 0, 0)}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2 w-full">
            <Label className="flex items-center gap-2 text-gray-700">
              <Clock className="h-4 w-4" />
              Preferred Time *
            </Label>
            <Select value={selectedTime} onValueChange={setSelectedTime}>
              <SelectTrigger className="w-full h-12">
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
        <Button type="submit" className="w-full h-14 text-lg font-semibold bg-primary hover:bg-primary/90">
          Book Appointment Now
        </Button>

        {/* Quick Contact Info */}
        <div className="text-center text-sm text-gray-500">
          <p>Need immediate assistance? Call us at <strong>+971 50 669 5990</strong></p>
        </div>
      </form>
    </div>
  )
}