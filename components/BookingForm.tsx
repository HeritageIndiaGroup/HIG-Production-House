// "use client"

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
// import { createClient } from '@/lib/supabase/client';

// interface BookingFormProps {
//   packageName: string;
//   onSuccess: () => void;
// }

// export function BookingForm({ packageName, onSuccess }: BookingFormProps) {
//   const supabase = createClient();
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [eventDate, setEventDate] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const [successMessage, setSuccessMessage] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError(null);

//     if (!name || !email || !phone) {
//       setError('Please fill in all required fields.');
//       setIsSubmitting(false);
//       return;
//     }

//     const { error } = await supabase
//       .from('bookings')
//       .insert([
//         { 
//           package_name: packageName, 
//           customer_name: name, 
//           email: email, 
//           phone: phone,
//           event_date: eventDate || null
//         },
//       ]);

//     setIsSubmitting(false);

//     if (error) {
//       setError('Failed to submit booking. Please try again.');
//       console.error('Supabase error:', error);
//     } else {
//       setSuccessMessage('Inquiry sent successfully! We will contact you soon.');
//       setTimeout(() => {
//         onSuccess();
//       }, 2000);
//     }
//   };

//   if (successMessage) {
//     return (
//       <div className='text-center py-10'>
//         <DialogHeader>
//             <DialogTitle className='text-2xl text-green-600'>Thank You!</DialogTitle>
//             <DialogDescription>
//                 {successMessage}
//             </DialogDescription>
//         </DialogHeader>
//       </div>
//     );
//   }

//   return (
//     <>
//       <DialogHeader>
//         <DialogTitle>Book: {packageName}</DialogTitle>
//         <DialogDescription>
//           Provide your details below. We'll contact you shortly to confirm.
//         </DialogDescription>
//       </DialogHeader>
//       <form onSubmit={handleSubmit}>
//         <div className="grid gap-4 py-4">
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="name" className="text-right">Name</Label>
//             <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" required />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="email" className="text-right">Email</Label>
//             <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" required />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="phone" className="text-right">Phone</Label>
//             <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="col-span-3" required />
//           </div>
//           <div className="grid grid-cols-4 items-center gap-4">
//             <Label htmlFor="eventDate" className="text-right">Event Date</Label>
//             <Input id="eventDate" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="col-span-3" />
//           </div>
//         </div>
//         {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
//         <DialogFooter>
//           <DialogClose asChild>
//             <Button type="button" variant="outline">Cancel</Button>
//           </DialogClose>
//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
//           </Button>
//         </DialogFooter>
//       </form>
//     </>
//   );
// }






"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { createClient } from '@/lib/supabase/client';

interface BookingFormProps {
  packageName: string;
  sourcePage: string; // NEW PROP to receive the page name
  onSuccess: () => void;
}

export function BookingForm({ packageName, sourcePage, onSuccess }: BookingFormProps) {
  const supabase = createClient();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!name || !email || !phone) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    const { error } = await supabase
      .from('bookings')
      .insert([
        { 
          package_name: packageName, 
          customer_name: name, 
          email: email, 
          phone: phone,
          event_date: eventDate || null,
          source_page: sourcePage // ADDED this line to send the source page
        },
      ]);

    setIsSubmitting(false);

    if (error) {
      setError('Failed to submit booking. Please try again.');
      console.error('Supabase error:', error);
    } else {
      setSuccessMessage('Inquiry sent successfully! We will contact you soon.');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    }
  };
  
  if (successMessage) {
    return (
      <div className='text-center py-10'>
        <DialogHeader>
            <DialogTitle className='text-2xl text-green-600'>Thank You!</DialogTitle>
            <DialogDescription>
                {successMessage}
            </DialogDescription>
        </DialogHeader>
      </div>
    );
  }

  return (
    <>
      <DialogHeader>
        <DialogTitle>Book: {packageName}</DialogTitle>
        <DialogDescription>
          Provide your details below. We'll contact you shortly to confirm.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">Phone</Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="col-span-3" required />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="eventDate" className="text-right">Event Date</Label>
            <Input id="eventDate" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} className="col-span-3" />
          </div>
        </div>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">Cancel</Button>
          </DialogClose>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </DialogFooter>
      </form>
    </>
  );
}