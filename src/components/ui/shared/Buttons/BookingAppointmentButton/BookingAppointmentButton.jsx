// "use client";
// import { AppointmentForm } from "@/components/Forms/AppointmentForm";
// import { Button } from "@/components/ui/button";
// import {
//   Drawer,
//   DrawerContent,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { NotebookPen } from "lucide-react";


// function cn(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export function BookAppointmentButton({
//   className = "",
//   ...props
// }) {
//   return (
//     <Drawer>
//       <DrawerTrigger asChild>
//         <Button
//           className={cn(
//             "sm:w-full md:w-[200px] gap-2 bg-green-600 hover:bg-green-700",
//             "py-2 text-sm md:py-4 md:text-base lg:py-6 lg:text-md",
//             className
//           )}
//           {...props}
//         >
//          <NotebookPen className="h-8 w-8" />
//         <span>Book Appointment</span>
//         </Button>
//       </DrawerTrigger>
//       <DrawerContent className="h-[85%]">
//         <div className="mx-auto w-full max-w-2xl">
//           <DrawerHeader>
//             <DrawerTitle className="text-2xl">Book Your Service</DrawerTitle>
//           </DrawerHeader>
//           <div className="p-4 pb-8">
//             <AppointmentForm />
//           </div>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// }



{/* <BookAppointmentButton />

<BookAppointmentButton variant="white" />

<BookAppointmentButton variant="outline" size="lg" />


<BookAppointmentButton size="sm" showIcon={false} />

<BookAppointmentButton >Schedule Now</BookAppointmentButton> */}




import { AppointmentForm } from "@/components/Forms/AppointmentForm";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { NotebookPen } from "lucide-react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const variantClasses = {
  primary: "bg-green-600 hover:bg-green-700 text-white",
  white: "bg-white text-gray-800 hover:bg-gray-100",
  outline: "border bg-white border-green-600 text-green-600 hover:bg-green-50",
};

const sizeClasses = {
  sm: "py-1 text-sm gap-1",
  md: "py-2 text-base gap-2",
  lg: "py-4  text-lg gap-3",
};

const iconSizes = {
  sm: "h-5 w-5",
  md: "h-6 w-6",
  lg: "h-7 w-7",
};

export function BookAppointmentButton({
  className = "",
  variant = "primary", // 'primary' | 'white' | 'outline'
  size = "md", // 'sm' | 'md' | 'lg'
  showIcon = true,
  children = "Book Appointment",
  ...props
}) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          className={cn(
            "sm:w-full md:w-[200px]",
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
          {...props}
        >
          {showIcon && <NotebookPen className={iconSizes[size]} />}
          <span>{children}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85%]">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl">Book Your Service</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-4">
            <AppointmentForm />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}