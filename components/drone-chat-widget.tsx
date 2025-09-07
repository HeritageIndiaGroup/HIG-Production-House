// "use client"

// import type React from "react"

// import { useEffect, useRef, useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Badge } from "@/components/ui/badge"
// import { Calendar } from "@/components/ui/calendar"
// import { X, Send, MessageCircle, CalendarDays } from "lucide-react"
// import { createClient } from "@/lib/supabase/client"
// import { format } from "date-fns"

// interface Service {
//   id: string
//   name: string
//   description: string
//   category: string
//   base_price: number
// }

// interface Package {
//   id: string
//   service_id: string
//   name: string
//   price: number
//   features: string[]
//   duration_days: number
//   deliverables: string[]
// }

// export function DroneChatWidget() {
//   const supabase = createClient()

//   // UI state
//   const [isOpen, setIsOpen] = useState(false)
//   const containerRef = useRef<HTMLDivElement | null>(null)
//   const [ready, setReady] = useState(false)
//   const [position, setPosition] = useState({ x: 0, y: 0 }) // top-left of container
//   const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
//   const draggingRef = useRef(false)
//   const [dragged, setDragged] = useState(false)

//   // Data state
//   const [services, setServices] = useState<Service[]>([])
//   const [packages, setPackages] = useState<Package[]>([])
//   const [availableDates, setAvailableDates] = useState<Date[]>([])
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   // Form state
//   const [serviceId, setServiceId] = useState<string>("")
//   const [packageId, setPackageId] = useState<string>("")
//   const [eventDate, setEventDate] = useState<Date | null>(null)
//   const [customerName, setCustomerName] = useState("")
//   const [customerEmail, setCustomerEmail] = useState("")
//   const [customerPhone, setCustomerPhone] = useState("")
//   const [eventLocation, setEventLocation] = useState("")
//   const [specialRequirements, setSpecialRequirements] = useState("")

//   // Keep some padding from screen edges during init and dragging
//   const EDGE_MARGIN = 24

//   // Initialize at bottom-right corner with margin; keep within viewport on resize
//   useEffect(() => {
//     const init = () => {
//       const btnSize = 64 // w-16 h-16
//       const x = Math.max(EDGE_MARGIN, window.innerWidth - EDGE_MARGIN - btnSize)
//       const y = Math.max(EDGE_MARGIN, window.innerHeight - EDGE_MARGIN - btnSize)
//       setPosition({ x, y })
//       setReady(true)
//     }
//     init()

//     const onResize = () => {
//       const rect = containerRef.current?.getBoundingClientRect()
//       const w = rect?.width ?? 64
//       const h = rect?.height ?? 64
//       setPosition((prev) => ({
//         x: Math.min(Math.max(EDGE_MARGIN, prev.x), Math.max(EDGE_MARGIN, window.innerWidth - w - EDGE_MARGIN)),
//         y: Math.min(Math.max(EDGE_MARGIN, prev.y), Math.max(EDGE_MARGIN, window.innerHeight - h - EDGE_MARGIN)),
//       }))
//     }
//     window.addEventListener("resize", onResize)
//     return () => window.removeEventListener("resize", onResize)
//   }, [])

//   // Drag logic (button and header)
//   const startDrag = (clientX: number, clientY: number) => {
//     draggingRef.current = true
//     setDragged(false)
//     dragOffsetRef.current = { x: clientX - position.x, y: clientY - position.y }

//     const onPointerMove = (e: PointerEvent) => {
//       if (!draggingRef.current) return
//       const rect = containerRef.current?.getBoundingClientRect()
//       const w = rect?.width ?? 64
//       const h = rect?.height ?? 64
//       let newX = e.clientX - dragOffsetRef.current.x
//       let newY = e.clientY - dragOffsetRef.current.y
//       // clamp with edges margin
//       newX = Math.min(Math.max(EDGE_MARGIN, newX), Math.max(EDGE_MARGIN, window.innerWidth - w - EDGE_MARGIN))
//       newY = Math.min(Math.max(EDGE_MARGIN, newY), Math.max(EDGE_MARGIN, window.innerHeight - h - EDGE_MARGIN))
//       setPosition({ x: newX, y: newY })
//       setDragged(true)
//     }

//     const onPointerUp = () => {
//       draggingRef.current = false
//       window.removeEventListener("pointermove", onPointerMove)
//       window.removeEventListener("pointerup", onPointerUp)
//       setTimeout(() => setDragged(false), 0)
//     }

//     window.addEventListener("pointermove", onPointerMove)
//     window.addEventListener("pointerup", onPointerUp)
//   }

//   const handleButtonPointerDown = (e: React.PointerEvent) => {
//     e.preventDefault()
//     ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
//     startDrag(e.clientX, e.clientY)
//   }

//   const handleHeaderPointerDown = (e: React.PointerEvent) => {
//     e.preventDefault()
//     ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
//     startDrag(e.clientX, e.clientY)
//   }

//   const handleButtonClick = () => {
//     if (dragged || draggingRef.current) return
//     setIsOpen((o) => !o)
//   }

//   // Data fetching
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [{ data: svc }, { data: dates }] = await Promise.all([
//           supabase.from("services").select("*").eq("is_active", true).order("name"),
//           supabase
//             .from("availability")
//             .select("date")
//             .eq("is_available", true)
//             .gte("date", new Date().toISOString().split("T")[0])
//             .order("date"),
//         ])
//         setServices(svc || [])
//         setAvailableDates((dates || []).map((d: any) => new Date(d.date)))
//       } catch (e) {
//         console.error("Error loading services/availability", e)
//       }
//     }
//     fetchAll()
//   }, [supabase])

//   // Load packages when service changes
//   useEffect(() => {
//     const run = async () => {
//       if (!serviceId) {
//         setPackages([])
//         setPackageId("")
//         return
//       }
//       try {
//         const { data } = await supabase
//           .from("packages")
//           .select("*")
//           .eq("service_id", serviceId)
//           .eq("is_active", true)
//           .order("price")
//         setPackages(data || [])
//         setPackageId("")
//       } catch (e) {
//         console.error("Error loading packages", e)
//       }
//     }
//     run()
//   }, [serviceId, supabase])

//   // Auto-capture selected product from current section hash (#wedding-packages, #music-videos)
//   useEffect(() => {
//     if (!services.length) return
//     const hash = typeof window !== "undefined" ? window.location.hash : ""
//     if (hash.includes("wedding-packages")) {
//       const svc = services.find((s) => s.category === "wedding")
//       if (svc) setServiceId(svc.id)
//     } else if (hash.includes("music-videos")) {
//       const svc = services.find((s) => s.category === "music_video")
//       if (svc) setServiceId(svc.id)
//     }
//   }, [services])

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!serviceId || !eventDate || !customerName || !customerEmail || !customerPhone || !eventLocation) {
//       alert("Please fill in all required fields.")
//       return
//     }
//     setIsSubmitting(true)
//     try {
//       const selectedPackage = packages.find((p) => p.id === packageId) || null
//       // Insert into bookings
//       const { error } = await supabase.from("bookings").insert({
//         customer_name: customerName,
//         customer_email: customerEmail,
//         customer_phone: customerPhone,
//         service_id: serviceId,
//         package_id: packageId || null,
//         event_date: eventDate.toISOString().split("T")[0],
//         event_location: eventLocation,
//         special_requirements: specialRequirements,
//         total_amount: selectedPackage?.price || 0,
//         status: "pending",
//         payment_status: "pending",
//       })
//       if (error) throw error

//       // Email alert using existing API
//       try {
//         await fetch("/api/send-booking-email", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             source: "chat_widget",
//             booking: {
//               customer_name: customerName,
//               customer_email: customerEmail,
//               customer_phone: customerPhone,
//               service_id: serviceId,
//               package_id: packageId || null,
//               event_date: eventDate?.toISOString().split("T")[0],
//               event_location: eventLocation,
//               special_requirements: specialRequirements,
//             },
//             package: selectedPackage,
//             service: services.find((s) => s.id === serviceId) || null,
//           }),
//         })
//       } catch (emailErr) {
//         console.warn("Email API call failed or not configured:", emailErr)
//       }

//       alert("Your booking request has been submitted. We'll get back to you shortly.")
//       // Reset and close
//       setIsOpen(false)
//       setPackageId("")
//       setEventDate(null)
//       setCustomerName("")
//       setCustomerEmail("")
//       setCustomerPhone("")
//       setEventLocation("")
//       setSpecialRequirements("")
//     } catch (err) {
//       console.error("Error submitting booking:", err)
//       alert("There was an error submitting your request. Please try again.")
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   // Calendar helpers
//   const isDateBooked = (date: Date) => {
//     const today = new Date()
//     today.setHours(0, 0, 0, 0)
//     return (
//       date >= today &&
//       !availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())
//     )
//   }

//   return (
//     <>
//       {/* Draggable container with safe edge margins */}
//       <div
//         ref={containerRef}
//         className={`fixed z-50 ${!ready ? "bottom-6 right-6" : ""} w-16 h-16`}
//         style={ready ? { left: position.x, top: position.y } : undefined}
//       >
//         <div className="relative w-16 h-16">
//           {/* Chat Widget Panel */}
//           {isOpen && (
//             <Card className="absolute bottom-20 right-0 w-[22rem] shadow-2xl border-primary/20" style={{ zIndex: 60 }}>
//               <CardHeader className="pb-3 cursor-grab active:cursor-grabbing" onPointerDown={handleHeaderPointerDown}>
//                 <div className="flex items-center justify-between">
//                   <CardTitle className="text-lg flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                     <span>Quick Booking</span>
//                   </CardTitle>
//                   <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
//                     <X className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-3">
//                   {/* Service */}
//                   <div>
//                     <Label>Service *</Label>
//                     <select
//                       className="mt-1 w-full rounded-md border bg-background p-2 text-sm"
//                       value={serviceId}
//                       onChange={(e) => setServiceId(e.target.value)}
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((s) => (
//                         <option key={s.id} value={s.id}>
//                           {s.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {/* Package */}
//                   <div>
//                     <Label>Package</Label>
//                     <select
//                       className="mt-1 w-full rounded-md border bg-background p-2 text-sm"
//                       value={packageId}
//                       onChange={(e) => setPackageId(e.target.value)}
//                       disabled={!packages.length}
//                     >
//                       <option value="">Select a package (optional)</option>
//                       {packages.map((p) => (
//                         <option key={p.id} value={p.id}>
//                           {p.name} {p.price ? `- ₹${Number(p.price).toLocaleString()}` : ""}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {/* Calendar */}
//                   <div>
//                     <Label>Date *</Label>
//                     <div className="mt-2 flex justify-center">
//                       <Calendar
//                         mode="single"
//                         selected={eventDate || undefined}
//                         onSelect={(date) => setEventDate(date || null)}
//                         disabled={(date) => {
//                           const today = new Date()
//                           today.setHours(0, 0, 0, 0)
//                           return date < today || isDateBooked(date)
//                         }}
//                         className="rounded-md border"
//                         modifiers={{
//                           available: availableDates,
//                           booked: (date) => isDateBooked(date),
//                         }}
//                         modifiersStyles={{
//                           available: {
//                             backgroundColor: "hsl(var(--primary))",
//                             color: "hsl(var(--primary-foreground))",
//                             fontWeight: "bold",
//                           },
//                           booked: {
//                             backgroundColor: "hsl(var(--destructive))",
//                             color: "hsl(var(--destructive-foreground))",
//                             textDecoration: "line-through",
//                           },
//                         }}
//                       />
//                     </div>
//                     {eventDate && (
//                       <div className="mt-2 text-center">
//                         <Badge className="bg-primary text-primary-foreground">
//                           Selected: {format(eventDate, "MMMM dd, yyyy")}
//                         </Badge>
//                       </div>
//                     )}
//                   </div>

//                   {/* Contact fields */}
//                   <div className="grid grid-cols-1 gap-2">
//                     <div>
//                       <Label>Name *</Label>
//                       <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Your full name" />
//                     </div>
//                     <div>
//                       <Label>Email *</Label>
//                       <Input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} placeholder="you@email.com" />
//                     </div>
//                     <div>
//                       <Label>Phone *</Label>
//                       <Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" />
//                     </div>
//                     <div>
//                       <Label>Event Location *</Label>
//                       <Input value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} placeholder="Where will the event take place?" />
//                     </div>
//                     <div>
//                       <Label>Special Requirements</Label>
//                       <Textarea
//                         value={specialRequirements}
//                         onChange={(e) => setSpecialRequirements(e.target.value)}
//                         placeholder="Any special requests or requirements..."
//                         rows={3}
//                       />
//                     </div>
//                   </div>

//                   <Button type="submit" disabled={isSubmitting} className="w-full">
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
//                         Submitting...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4 mr-2" />
//                         Submit Booking Request
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           )}

//           {/* Drone-styled Chat Button (draggable) */}
//           <Button
//             onPointerDown={handleButtonPointerDown}
//             onClick={handleButtonClick}
//             className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl group transition-all duration-300 hover:scale-110 cursor-grab active:cursor-grabbing"
//             size="lg"
//             aria-label="Open chat"
//           >
//             <div className="relative">
//               {/* Drone body */}
//               <div className="w-8 h-6 bg-white rounded-lg relative">
//                 {/* Drone propellers */}
//                 <div className="absolute -top-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 <div className="absolute -top-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 <div className="absolute -bottom-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 <div className="absolute -bottom-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 {/* Message icon in center */}
//                 <MessageCircle className="w-4 h-4 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
//               </div>
//               {/* Floating animation */}
//               <div className="absolute inset-0 animate-bounce" />
//             </div>
//           </Button>
//         </div>
//       </div>
//     </>
//   )
// }










// "use client";

// import type React from "react";

// import { useEffect, useRef, useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Badge } from "@/components/ui/badge";
// import { Calendar } from "@/components/ui/calendar";
// import { X, Send, MessageCircle } from "lucide-react";
// import { createClient } from "@/lib/supabase/client";
// import { format } from "date-fns";

// interface Service {
//   id: string;
//   name: string;
//   description: string;
//   category: string;
//   base_price: number;
// }

// interface Package {
//   id: string;
//   service_id: string;
//   name: string;
//   price: number;
//   features: string[];
//   duration_days: number;
//   deliverables: string[];
// }

// export function DroneChatWidget() {
//   const supabase = createClient();

//   // UI state
//   const [isOpen, setIsOpen] = useState(false);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [ready, setReady] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 }); // top-left of container
//   const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
//   const draggingRef = useRef(false);
//   const [dragged, setDragged] = useState(false);

//   // Data state
//   const [services, setServices] = useState<Service[]>([]);
//   const [packages, setPackages] = useState<Package[]>([]);
//   const [availableDates, setAvailableDates] = useState<Date[]>([]);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   // Form state
//   const [serviceId, setServiceId] = useState<string>("");
//   const [packageId, setPackageId] = useState<string>("");
//   const [eventDate, setEventDate] = useState<Date | null>(null);
//   const [customerName, setCustomerName] = useState("");
//   const [customerEmail, setCustomerEmail] = useState("");
//   const [customerPhone, setCustomerPhone] = useState("");
//   const [eventLocation, setEventLocation] = useState("");
//   const [specialRequirements, setSpecialRequirements] = useState("");

//   // Keep some padding from screen edges during init and dragging
//   const EDGE_MARGIN = 24;

//   // Initialize at bottom-right corner with margin; keep within viewport on resize
//   useEffect(() => {
//     const init = () => {
//       const btnSize = 64; // w-16 h-16
//       const x = Math.max(EDGE_MARGIN, window.innerWidth - EDGE_MARGIN - btnSize);
//       const y = Math.max(EDGE_MARGIN, window.innerHeight - EDGE_MARGIN - btnSize);
//       setPosition({ x, y });
//       setReady(true);
//     };
//     init();

//     const onResize = () => {
//       const rect = containerRef.current?.getBoundingClientRect();
//       const w = rect?.width ?? 64;
//       const h = rect?.height ?? 64;
//       setPosition((prev) => ({
//         x: Math.min(Math.max(EDGE_MARGIN, prev.x), Math.max(EDGE_MARGIN, window.innerWidth - w - EDGE_MARGIN)),
//         y: Math.min(Math.max(EDGE_MARGIN, prev.y), Math.max(EDGE_MARGIN, window.innerHeight - h - EDGE_MARGIN)),
//       }));
//     };
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);

//   // Drag logic (button and header)
//   const startDrag = (clientX: number, clientY: number) => {
//     draggingRef.current = true;
//     setDragged(false);
//     dragOffsetRef.current = { x: clientX - position.x, y: clientY - position.y };

//     const onPointerMove = (e: PointerEvent) => {
//       if (!draggingRef.current) return;
//       const rect = containerRef.current?.getBoundingClientRect();
//       const w = rect?.width ?? 64;
//       const h = rect?.height ?? 64;
//       let newX = e.clientX - dragOffsetRef.current.x;
//       let newY = e.clientY - dragOffsetRef.current.y;
//       // clamp with edges margin
//       newX = Math.min(Math.max(EDGE_MARGIN, newX), Math.max(EDGE_MARGIN, window.innerWidth - w - EDGE_MARGIN));
//       newY = Math.min(Math.max(EDGE_MARGIN, newY), Math.max(EDGE_MARGIN, window.innerHeight - h - EDGE_MARGIN));
//       setPosition({ x: newX, y: newY });
//       setDragged(true);
//     };

//     const onPointerUp = () => {
//       draggingRef.current = false;
//       window.removeEventListener("pointermove", onPointerMove);
//       window.removeEventListener("pointerup", onPointerUp);
//       setTimeout(() => setDragged(false), 0);
//     };

//     window.addEventListener("pointermove", onPointerMove);
//     window.addEventListener("pointerup", onPointerUp);
//   };

//   const handleButtonPointerDown = (e: React.PointerEvent) => {
//     e.preventDefault();
//     (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
//     startDrag(e.clientX, e.clientY);
//   };

//   const handleHeaderPointerDown = (e: React.PointerEvent) => {
//     e.preventDefault();
//     (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
//     startDrag(e.clientX, e.clientY);
//   };

//   const handleButtonClick = () => {
//     if (dragged || draggingRef.current) return;
//     setIsOpen((o) => !o);
//   };

//   // Data fetching
//   useEffect(() => {
//     const fetchAll = async () => {
//       try {
//         const [{ data: svc }, { data: dates }] = await Promise.all([
//           supabase.from("services").select("*").eq("is_active", true).order("name"),
//           supabase
//             .from("availability")
//             .select("date")
//             .eq("is_available", true)
//             .gte("date", new Date().toISOString().split("T")[0])
//             .order("date"),
//         ]);
//         setServices(svc || []);
//         setAvailableDates((dates || []).map((d: any) => new Date(d.date)));
//       } catch (e) {
//         console.error("Error loading services/availability", e);
//       }
//     };
//     fetchAll();
//   }, [supabase]);

//   // Load packages when service changes
//   useEffect(() => {
//     const run = async () => {
//       if (!serviceId) {
//         setPackages([]);
//         setPackageId("");
//         return;
//       }
//       try {
//         const { data } = await supabase
//           .from("packages")
//           .select("*")
//           .eq("service_id", serviceId)
//           .eq("is_active", true)
//           .order("price");
//         setPackages(data || []);
//         setPackageId("");
//       } catch (e) {
//         console.error("Error loading packages", e);
//       }
//     };
//     run();
//   }, [serviceId, supabase]);

//   // Auto-capture selected product from current section hash (#wedding-packages, #music-videos)
//   useEffect(() => {
//     if (!services.length) return;
//     const hash = typeof window !== "undefined" ? window.location.hash : "";
//     if (hash.includes("wedding-packages")) {
//       const svc = services.find((s) => s.category === "wedding");
//       if (svc) setServiceId(svc.id);
//     } else if (hash.includes("music-videos")) {
//       const svc = services.find((s) => s.category === "music_video");
//       if (svc) setServiceId(svc.id);
//     }
//   }, [services]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!serviceId || !eventDate || !customerName || !customerEmail || !customerPhone || !eventLocation) {
//       alert("Please fill in all required fields.");
//       return;
//     }
//     setIsSubmitting(true);
//     try {
//       const selectedPackage = packages.find((p) => p.id === packageId) || null;
//       // Insert into bookings
//       const { error } = await supabase.from("bookings").insert({
//         customer_name: customerName,
//         customer_email: customerEmail,
//         customer_phone: customerPhone,
//         service_id: serviceId,
//         package_id: packageId || null,
//         event_date: eventDate.toISOString().split("T")[0],
//         event_location: eventLocation,
//         special_requirements: specialRequirements,
//         total_amount: selectedPackage?.price || 0,
//         status: "pending",
//         payment_status: "pending",
//       });
//       if (error) throw error;

//       // Email alert using existing API
//       try {
//         await fetch("/api/send-booking-email", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             source: "chat_widget",
//             booking: {
//               customer_name: customerName,
//               customer_email: customerEmail,
//               customer_phone: customerPhone,
//               service_id: serviceId,
//               package_id: packageId || null,
//               event_date: eventDate?.toISOString().split("T")[0],
//               event_location: eventLocation,
//               special_requirements: specialRequirements,
//             },
//             package: selectedPackage,
//             service: services.find((s) => s.id === serviceId) || null,
//           }),
//         });
//       } catch (emailErr) {
//         console.warn("Email API call failed or not configured:", emailErr);
//       }

//       alert("Your booking request has been submitted. We'll get back to you shortly.");
//       // Reset and close
//       setIsOpen(false);
//       setPackageId("");
//       setEventDate(null);
//       setCustomerName("");
//       setCustomerEmail("");
//       setCustomerPhone("");
//       setEventLocation("");
//       setSpecialRequirements("");
//     } catch (err) {
//       console.error("Error submitting booking:", err);
//       alert("There was an error submitting your request. Please try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   // Calendar helpers
//   const isDateBooked = (date: Date) => {
//     const today = new Date();
//     today.setHours(0, 0, 0, 0);
//     return (
//       date >= today &&
//       !availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())
//     );
//   };

//   return (
//     <>
//       {/* Draggable container with safe edge margins */}
//       <div
//         ref={containerRef}
//         className={`fixed z-50 ${!ready ? "bottom-6 right-6" : ""} w-16 h-16`}
//         style={ready ? { left: position.x, top: position.y } : undefined}
//       >
//         <div className="relative w-16 h-16">
//           {/* Chat Widget Panel */}
//           {isOpen && (
//             <Card
//               className="absolute right-0 bottom-[calc(100%+0.5rem)] w-[22rem] shadow-2xl border-primary/20 max-h-[80vh] overflow-y-auto"
//               style={{ zIndex: 60 }}
//             >
//               <CardHeader
//                 className="pb-3 cursor-grab active:cursor-grabbing sticky top-0 bg-background z-10"
//                 onPointerDown={handleHeaderPointerDown}
//               >
//                 <div className="flex items-center justify-between">
//                   <CardTitle className="text-lg flex items-center space-x-2">
//                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
//                     <span>Quick Booking</span>
//                   </CardTitle>
//                   <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
//                     <X className="h-4 w-4" />
//                   </Button>
//                 </div>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-3">
//                   {/* Service */}
//                   <div>
//                     <Label>Service *</Label>
//                     <select
//                       className="mt-1 w-full rounded-md border bg-background p-2 text-sm"
//                       value={serviceId}
//                       onChange={(e) => setServiceId(e.target.value)}
//                     >
//                       <option value="">Select a service</option>
//                       {services.map((s) => (
//                         <option key={s.id} value={s.id}>
//                           {s.name}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {/* Package */}
//                   <div>
//                     <Label>Package</Label>
//                     <select
//                       className="mt-1 w-full rounded-md border bg-background p-2 text-sm"
//                       value={packageId}
//                       onChange={(e) => setPackageId(e.target.value)}
//                       disabled={!packages.length}
//                     >
//                       <option value="">Select a package (optional)</option>
//                       {packages.map((p) => (
//                         <option key={p.id} value={p.id}>
//                           {p.name} {p.price ? `- ₹${Number(p.price).toLocaleString()}` : ""}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   {/* Calendar */}
//                   <div>
//                     <Label>Date *</Label>
//                     <div className="mt-2 flex justify-center">
//                       <Calendar
//                         mode="single"
//                         selected={eventDate || undefined}
//                         onSelect={(date) => setEventDate(date || null)}
//                         disabled={(date) => {
//                           const today = new Date();
//                           today.setHours(0, 0, 0, 0);
//                           return date < today || isDateBooked(date);
//                         }}
//                         className="rounded-md border"
//                         modifiers={{
//                           available: availableDates,
//                           booked: (date) => isDateBooked(date),
//                         }}
//                         modifiersStyles={{
//                           available: {
//                             backgroundColor: "hsl(var(--primary))",
//                             color: "hsl(var(--primary-foreground))",
//                             fontWeight: "bold",
//                           },
//                           booked: {
//                             backgroundColor: "hsl(var(--destructive))",
//                             color: "hsl(var(--destructive-foreground))",
//                             textDecoration: "line-through",
//                           },
//                         }}
//                       />
//                     </div>
//                     {eventDate && (
//                       <div className="mt-2 text-center">
//                         <Badge className="bg-primary text-primary-foreground">
//                           Selected: {format(eventDate, "MMMM dd, yyyy")}
//                         </Badge>
//                       </div>
//                     )}
//                   </div>

//                   {/* Contact fields */}
//                   <div className="grid grid-cols-1 gap-2">
//                     <div>
//                       <Label>Name *</Label>
//                       <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Your full name" />
//                     </div>
//                     <div>
//                       <Label>Email *</Label>
//                       <Input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} placeholder="you@email.com" />
//                     </div>
//                     <div>
//                       <Label>Phone *</Label>
//                       <Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" />
//                     </div>
//                     <div>
//                       <Label>Event Location *</Label>
//                       <Input value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} placeholder="Where will the event take place?" />
//                     </div>
//                     <div>
//                       <Label>Special Requirements</Label>
//                       <Textarea
//                         value={specialRequirements}
//                         onChange={(e) => setSpecialRequirements(e.target.value)}
//                         placeholder="Any special requests or requirements..."
//                         rows={3}
//                       />
//                     </div>
//                   </div>

//                   <Button type="submit" disabled={isSubmitting} className="w-full">
//                     {isSubmitting ? (
//                       <>
//                         <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
//                         Submitting...
//                       </>
//                     ) : (
//                       <>
//                         <Send className="w-4 h-4 mr-2" />
//                         Submit Booking Request
//                       </>
//                     )}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           )}

//           {/* Drone-styled Chat Button (draggable) */}
//           <Button
//             onPointerDown={handleButtonPointerDown}
//             onClick={handleButtonClick}
//             className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl group transition-all duration-300 hover:scale-110 cursor-grab active:cursor-grabbing"
//             size="lg"
//             aria-label="Open chat"
//           >
//             <div className="relative">
//               {/* Drone body */}
//               <div className="w-8 h-6 bg-white rounded-lg relative">
//                 {/* Drone propellers */}
//                 <div className="absolute -top-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 <div className="absolute -top-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 <div className="absolute -bottom-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 <div className="absolute -bottom-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin" />
//                 {/* Message icon in center */}
//                 <MessageCircle className="w-4 h-4 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
//               </div>
//               {/* Floating animation */}
//               <div className="absolute inset-0 animate-bounce" />
//             </div>
//           </Button>
//         </div>
//       </div>
//     </>
//   );
// }





"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { X, Send, MessageCircle } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { format } from "date-fns";

// --- INTERFACES ---
interface Service {
  id: string;
  name: string;
  description: string;
  category: string;
  base_price: number;
}

interface Package {
  id: string;
  service_id: string;
  name: string;
  price: number;
  features: string[];
  duration_days: number;
  deliverables: string[];
}

// --- CHANGE: Hardcoded data for services and packages ---
const SERVICES_DATA: Service[] = [
  {
    id: "svc_wedding",
    name: "Wedding Photography & Videography",
    description: "Capturing your special day with stunning aerial shots.",
    category: "wedding",
    base_price: 30000,
  },
  {
    id: "svc_music_video",
    name: "Music Video Production",
    description: "Professional drone videography for your music video.",
    category: "music_video",
    base_price: 15000,
  },
];

const PACKAGES_DATA: Package[] = [
  // Wedding Packages
  {
    id: "pkg_wedding_basic",
    service_id: "svc_wedding",
    name: "Basic Package",
    price: 30000,
    features: ["Perfect for intimate weddings"],
    duration_days: 1,
    deliverables: [],
  },
  {
    id: "pkg_wedding_premium",
    service_id: "svc_wedding",
    name: "Premium Package",
    price: 60000,
    features: ["Most popular choice for couples"],
    duration_days: 1,
    deliverables: [],
  },
  {
    id: "pkg_wedding_luxury",
    service_id: "svc_wedding",
    name: "Luxury Package",
    price: 120000,
    features: ["The ultimate wedding experience"],
    duration_days: 2,
    deliverables: [],
  },
  // Music Video Packages
  {
    id: "pkg_music_starter",
    service_id: "svc_music_video",
    name: "Starter Package",
    price: 15000,
    features: ["Perfect for emerging artists"],
    duration_days: 1,
    deliverables: [],
  },
  {
    id: "pkg_music_pro",
    service_id: "svc_music_video",
    name: "Professional Package",
    price: 35000,
    features: ["Most popular for established artists"],
    duration_days: 1,
    deliverables: [],
  },
  {
    id: "pkg_music_premium",
    service_id: "svc_music_video",
    name: "Premium Package",
    price: 60000,
    features: ["Ultimate music video production"],
    duration_days: 2,
    deliverables: [],
  },
];

export function DroneChatWidget() {
  // Supabase client is still needed to SUBMIT the form
  const supabase = createClient();

  // UI state
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [ready, setReady] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const dragOffsetRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const [dragged, setDragged] = useState(false);

  // Data state
  // CHANGE: State is now initialized with the hardcoded data
  const [services, setServices] = useState<Service[]>(SERVICES_DATA);
  const [packages, setPackages] = useState<Package[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [serviceId, setServiceId] = useState<string>("");
  const [packageId, setPackageId] = useState<string>("");
  const [eventDate, setEventDate] = useState<Date | null>(null);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [specialRequirements, setSpecialRequirements] = useState("");

  const EDGE_MARGIN = 24;

  // Initialize widget position
  useEffect(() => {
    const init = () => {
      const btnSize = 64; // w-16 h-16
      const x = Math.max(EDGE_MARGIN, window.innerWidth - EDGE_MARGIN - btnSize);
      const y = Math.max(EDGE_MARGIN, window.innerHeight - EDGE_MARGIN - btnSize);
      setPosition({ x, y });
      setReady(true);
    };
    init();

    const onResize = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      const w = rect?.width ?? 64;
      const h = rect?.height ?? 64;
      setPosition((prev) => ({
        x: Math.min(Math.max(EDGE_MARGIN, prev.x), Math.max(EDGE_MARGIN, window.innerWidth - w - EDGE_MARGIN)),
        y: Math.min(Math.max(EDGE_MARGIN, prev.y), Math.max(EDGE_MARGIN, window.innerHeight - h - EDGE_MARGIN)),
      }));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Drag logic
  const startDrag = (clientX: number, clientY: number) => {
    draggingRef.current = true;
    setDragged(false);
    dragOffsetRef.current = { x: clientX - position.x, y: clientY - position.y };

    const onPointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      const rect = containerRef.current?.getBoundingClientRect();
      const w = rect?.width ?? 64;
      const h = rect?.height ?? 64;
      let newX = e.clientX - dragOffsetRef.current.x;
      let newY = e.clientY - dragOffsetRef.current.y;
      newX = Math.min(Math.max(EDGE_MARGIN, newX), Math.max(EDGE_MARGIN, window.innerWidth - w - EDGE_MARGIN));
      newY = Math.min(Math.max(EDGE_MARGIN, newY), Math.max(EDGE_MARGIN, window.innerHeight - h - EDGE_MARGIN));
      setPosition({ x: newX, y: newY });
      setDragged(true);
    };

    const onPointerUp = () => {
      draggingRef.current = false;
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      setTimeout(() => setDragged(false), 0);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  };

  const handleButtonPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    startDrag(e.clientX, e.clientY);
  };

  const handleHeaderPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    startDrag(e.clientX, e.clientY);
  };

  const handleButtonClick = () => {
    if (dragged || draggingRef.current) return;
    setIsOpen((o) => !o);
  };
  
  // CHANGE: Removed useEffect for fetching data.

  // CHANGE: This now filters the hardcoded package data instead of fetching
  useEffect(() => {
    if (!serviceId) {
      setPackages([]);
      setPackageId("");
      return;
    }
    const relevantPackages = PACKAGES_DATA.filter((p) => p.service_id === serviceId);
    setPackages(relevantPackages);
    setPackageId("");
  }, [serviceId]);

  // Auto-capture selected product from URL hash
  useEffect(() => {
    if (!services.length) return;
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash.includes("wedding-packages")) {
      const svc = services.find((s) => s.category === "wedding");
      if (svc) setServiceId(svc.id);
    } else if (hash.includes("music-videos")) {
      const svc = services.find((s) => s.category === "music_video");
      if (svc) setServiceId(svc.id);
    }
  }, [services]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceId || !eventDate || !customerName || !customerEmail || !customerPhone || !eventLocation) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    try {
      const selectedPackage = packages.find((p) => p.id === packageId) || null;
      // This part still submits to your Supabase database
      const { error } = await supabase.from("bookings").insert({
        customer_name: customerName,
        customer_email: customerEmail,
        customer_phone: customerPhone,
        service_id: serviceId, // Will use the hardcoded ID like 'svc_wedding'
        package_id: packageId || null, // Will use hardcoded ID like 'pkg_wedding_premium'
        event_date: eventDate.toISOString().split("T")[0],
        event_location: eventLocation,
        special_requirements: specialRequirements,
        total_amount: selectedPackage?.price || services.find((s) => s.id === serviceId)?.base_price || 0,
        status: "pending",
        payment_status: "pending",
      });
      if (error) throw error;

      alert("Your booking request has been submitted. We'll get back to you shortly.");
      setIsOpen(false);
      setServiceId("");
      setPackageId("");
      setEventDate(null);
      setCustomerName("");
      setCustomerEmail("");
      setCustomerPhone("");
      setEventLocation("");
      setSpecialRequirements("");
    } catch (err) {
      console.error("Error submitting booking:", err);
      alert("There was an error submitting your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className={`fixed z-50 ${!ready ? "bottom-6 right-6" : ""} w-16 h-16`}
        style={ready ? { left: position.x, top: position.y } : undefined}
      >
        <div className="relative w-16 h-16">
          {isOpen && (
            <Card
              className="absolute right-0 bottom-[calc(100%+0.5rem)] w-[22rem] shadow-2xl border-primary/20 max-h-[80vh] overflow-y-auto"
              style={{ zIndex: 60 }}
            >
              <CardHeader
                className="pb-3 cursor-grab active:cursor-grabbing sticky top-0 bg-background z-10"
                onPointerDown={handleHeaderPointerDown}
              >
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span>Quick Booking</span>
                  </CardTitle>
                  <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-6 w-6 p-0">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <Label>Service *</Label>
                    <select
                      className="mt-1 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={serviceId}
                      onChange={(e) => setServiceId(e.target.value)}
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.id}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label>Package</Label>
                    <select
                      className="mt-1 flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={packageId}
                      onChange={(e) => setPackageId(e.target.value)}
                      disabled={!packages.length}
                    >
                      <option value="">Select a package (optional)</option>
                      {packages.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} {p.price ? `- ₹${Number(p.price).toLocaleString()}` : ""}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <Label>Date *</Label>
                    <div className="mt-2 flex justify-center">
                      <Calendar
                        mode="single"
                        selected={eventDate || undefined}
                        onSelect={(date) => setEventDate(date || null)}
                        // CHANGE: The 'disabled' prop has been removed entirely.
                        className="rounded-md border"
                      />
                    </div>
                    {eventDate && (
                      <div className="mt-2 text-center">
                        <Badge className="bg-primary text-primary-foreground">
                          Selected: {format(eventDate, "MMMM dd, yyyy")}
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <div>
                      <Label>Name *</Label>
                      <Input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Your full name" />
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input type="email" value={customerEmail} onChange={(e) => setCustomerEmail(e.target.value)} placeholder="you@email.com" />
                    </div>
                    <div>
                      <Label>Phone *</Label>
                      <Input value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} placeholder="+91 XXXXX XXXXX" />
                    </div>
                    <div>
                      <Label>Event Location *</Label>
                      <Input value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} placeholder="Where will the event take place?" />
                    </div>
                    <div>
                      <Label>Special Requirements</Label>
                      <Textarea
                        value={specialRequirements}
                        onChange={(e) => setSpecialRequirements(e.target.value)}
                        placeholder="Any special requests or requirements..."
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Booking Request
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}

          <Button
            onPointerDown={handleButtonPointerDown}
            onClick={handleButtonClick}
            className="w-16 h-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl group transition-all duration-300 hover:scale-110 cursor-grab active:cursor-grabbing"
            size="lg"
            aria-label="Open chat"
          >
            <div className="relative">
              <div className="w-8 h-6 bg-white rounded-lg relative">
                <div className="absolute -top-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '2s' }} />
                <div className="absolute -top-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '2.2s' }} />
                <div className="absolute -bottom-1 -left-2 w-3 h-3 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '2.1s' }} />
                <div className="absolute -bottom-1 -right-2 w-3 h-3 border-2 border-white rounded-full animate-spin" style={{ animationDuration: '1.9s' }} />
                <MessageCircle className="w-4 h-4 text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
}