// "use client"

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
// import { createClient } from '@/lib/supabase/client';

// interface BookingFormProps {
//   packageName: string;
//   sourcePage: string; // NEW PROP to receive the page name
//   onSuccess: () => void;
// }

// export function BookingForm({ packageName, sourcePage, onSuccess }: BookingFormProps) {
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
//           event_date: eventDate || null,
//           source_page: sourcePage // ADDED this line to send the source page
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














// "use client"

// import React, { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
// import { createClient } from '@/lib/supabase/client';

// interface BookingFormProps {
//   packageName: string;
//   sourcePage: string;
//   onSuccess: () => void;
// }

// export function BookingForm({ packageName, sourcePage, onSuccess }: BookingFormProps) {
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
//           event_date: eventDate || null,
//           source_page: sourcePage 
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
//       <div className='flex flex-col items-center justify-center py-12 px-6 bg-white rounded-lg shadow-lg border border-gray-200'>
//         <DialogHeader className='text-center mb-6'>
//           <DialogTitle className='text-3xl font-bold text-[#0891b2] mb-2'>Thank You!</DialogTitle>
//           <DialogDescription className='text-gray-600 text-lg max-w-md'>
//             {successMessage}
//           </DialogDescription>
//         </DialogHeader>
//         <div className='w-full max-w-sm'>
//           <DialogFooter>
//             <DialogClose asChild>
//               <Button 
//                 type="button" 
//                 variant="outline" 
//                 className='w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0891b2] hover:text-[#0891b2] transition-colors'
//               >
//                 Close
//               </Button>
//             </DialogClose>
//           </DialogFooter>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
//       <DialogHeader className='mb-8'>
//         <DialogTitle className='text-2xl font-bold text-black mb-2'>Book: {packageName}</DialogTitle>
//         <DialogDescription className='text-gray-600'>
//           Provide your details below. We'll contact you shortly to confirm.
//         </DialogDescription>
//       </DialogHeader>
//       <form onSubmit={handleSubmit} className='space-y-6'>
//         <div className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="name" className="text-sm font-medium text-gray-700 block">Name <span className="text-gray-500">*</span></Label>
//             <Input 
//               id="name" 
//               value={name} 
//               onChange={(e) => setName(e.target.value)} 
//               className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black placeholder-gray-400" 
//               placeholder="Enter your full name"
//               required 
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email <span className="text-gray-500">*</span></Label>
//             <Input 
//               id="email" 
//               type="email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black placeholder-gray-400" 
//               placeholder="Enter your email address"
//               required 
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="phone" className="text-sm font-medium text-gray-700 block">Phone <span className="text-gray-500">*</span></Label>
//             <Input 
//               id="phone" 
//               type="tel" 
//               value={phone} 
//               onChange={(e) => setPhone(e.target.value)} 
//               className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black placeholder-gray-400" 
//               placeholder="Enter your phone number"
//               required 
//             />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700 block">Event Date</Label>
//             <Input 
//               id="eventDate" 
//               type="date" 
//               value={eventDate} 
//               onChange={(e) => setEventDate(e.target.value)} 
//               className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black" 
//             />
//           </div>
//         </div>
//         {error && (
//           <div className="bg-gray-100 border border-gray-300 rounded-md p-3">
//             <p className="text-gray-700 text-sm text-center">{error}</p>
//           </div>
//         )}
//         <DialogFooter className='pt-4 space-x-3'>
//           <DialogClose asChild>
//             <Button 
//               type="button" 
//               variant="outline" 
//               className='px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0891b2] hover:text-[#0891b2] transition-colors'
//             >
//               Cancel
//             </Button>
//           </DialogClose>
//           <Button 
//             type="submit" 
//             disabled={isSubmitting}
//             className='px-6 py-2 bg-[#0891b2] hover:bg-[#0891b2]/90 text-white font-medium shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
//           </Button>
//         </DialogFooter>
//       </form>
//     </div>
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
  sourcePage: string;
  onSuccess: () => void;
}

export function BookingForm({ packageName, sourcePage, onSuccess }: BookingFormProps) {
  const supabase = createClient();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!name || !email || !phone || !service) {
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
          service: service,
          event_date: eventDate || null,
          source_page: sourcePage 
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
      <div className='flex flex-col items-center justify-center py-12 px-6 bg-white rounded-lg shadow-lg border border-gray-200'>
        <DialogHeader className='text-center mb-6'>
          <DialogTitle className='text-3xl font-bold text-[#0891b2] mb-2'>Thank You!</DialogTitle>
          <DialogDescription className='text-gray-600 text-lg max-w-md'>
            {successMessage}
          </DialogDescription>
        </DialogHeader>
        <div className='w-full max-w-sm'>
          <DialogFooter>
            <DialogClose asChild>
              <Button 
                type="button" 
                variant="outline" 
                className='w-full border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0891b2] hover:text-[#0891b2] transition-colors'
              >
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </div>
      </div>
    );
  }

  return (
    <div className='p-6 bg-white rounded-lg shadow-lg border border-gray-200'>
      <DialogHeader className='mb-8'>
        <DialogTitle className='text-2xl font-bold text-black mb-2'>Book: {packageName}</DialogTitle>
        <DialogDescription className='text-gray-600'>
          Provide your details below. We'll contact you shortly to confirm.
        </DialogDescription>
      </DialogHeader>
      <form onSubmit={handleSubmit} className='space-y-6'>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700 block">Name <span className="text-gray-500">*</span></Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black placeholder-gray-400" 
              placeholder="Enter your full name"
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700 block">Email <span className="text-gray-500">*</span></Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black placeholder-gray-400" 
              placeholder="Enter your email address"
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 block">Phone <span className="text-gray-500">*</span></Label>
            <Input 
              id="phone" 
              type="tel" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black placeholder-gray-400" 
              placeholder="Enter your phone number"
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="service" className="text-sm font-medium text-gray-700 block">Service Interested In <span className="text-gray-500">*</span></Label>
            <Input 
              id="service" 
              value={service} 
              onChange={(e) => setService(e.target.value)} 
              className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black placeholder-gray-400" 
              placeholder="Wedding, Music Video, Corporate, etc."
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="eventDate" className="text-sm font-medium text-gray-700 block">Event Date</Label>
            <Input 
              id="eventDate" 
              type="date" 
              value={eventDate} 
              onChange={(e) => setEventDate(e.target.value)} 
              className="w-full border-gray-300 focus:border-[#0891b2] focus:ring-2 focus:ring-[#0891b2]/20 rounded-md px-3 py-2 text-black" 
            />
          </div>
        </div>
        {error && (
          <div className="bg-gray-100 border border-gray-300 rounded-md p-3">
            <p className="text-gray-700 text-sm text-center">{error}</p>
          </div>
        )}
        <DialogFooter className='pt-4 space-x-3'>
          <DialogClose asChild>
            <Button 
              type="button" 
              variant="outline" 
              className='px-6 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-[#0891b2] hover:text-[#0891b2] transition-colors'
            >
              Cancel
            </Button>
          </DialogClose>
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className='px-6 py-2 bg-[#0891b2] hover:bg-[#0891b2]/90 text-white font-medium shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </DialogFooter>
      </form>
    </div>
  );
}