// import { BookingForm } from "@/components/BookingForm"
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"

// export default function BookingPage() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <div className="pt-20">
//         <BookingForm />
//       </div>
//       <Footer />
//     </div>
//   )
// }




"use client"; // Make the whole page a Client Component

import { BookingForm } from "@/components/BookingForm";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState } from "react";

export default function BookingPage() {
  const [success, setSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20">
        <BookingForm
          packageName="Wedding Bronze Package" // example
          sourcePage="Booking Page"
          onSuccess={() => setSuccess(true)}
        />
      </div>
      <Footer />
    </div>
  );
}
