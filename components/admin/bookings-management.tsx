// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"
// import { Search, Filter, Eye, Edit, CheckCircle, Clock, XCircle, AlertCircle } from "lucide-react"
// import { createClient } from "@/lib/supabase/client"
// import { format } from "date-fns"

// interface Booking {
//   id: string
//   customer_name: string
//   customer_email: string
//   customer_phone: string
//   service_name: string
//   package_name: string
//   event_date: string
//   event_location: string
//   special_requirements: string
//   total_amount: number
//   status: string
//   payment_status: string
//   admin_notes: string
//   created_at: string
// }

// export function BookingsManagement() {
//   const [bookings, setBookings] = useState<Booking[]>([])
//   const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [searchTerm, setSearchTerm] = useState("")
//   const [statusFilter, setStatusFilter] = useState("all")
//   const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
//   const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)

//   const supabase = createClient()

//   useEffect(() => {
//     fetchBookings()
//   }, [])

//   useEffect(() => {
//     filterBookings()
//   }, [bookings, searchTerm, statusFilter])

//   const fetchBookings = async () => {
//     try {
//       const { data, error } = await supabase
//         .from("bookings")
//         .select(`
//           *,
//           services(name),
//           packages(name)
//         `)
//         .order("created_at", { ascending: false })

//       if (error) throw error

//       const formattedBookings =
//         data?.map((booking) => ({
//           id: booking.id,
//           customer_name: booking.customer_name,
//           customer_email: booking.customer_email,
//           customer_phone: booking.customer_phone,
//           service_name: booking.services?.name || "Unknown Service",
//           package_name: booking.packages?.name || "Unknown Package",
//           event_date: booking.event_date,
//           event_location: booking.event_location,
//           special_requirements: booking.special_requirements,
//           total_amount: booking.total_amount,
//           status: booking.status,
//           payment_status: booking.payment_status,
//           admin_notes: booking.admin_notes || "",
//           created_at: booking.created_at,
//         })) || []

//       setBookings(formattedBookings)
//     } catch (error) {
//       console.error("Error fetching bookings:", error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const filterBookings = () => {
//     let filtered = bookings

//     if (searchTerm) {
//       filtered = filtered.filter(
//         (booking) =>
//           booking.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           booking.customer_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           booking.service_name.toLowerCase().includes(searchTerm.toLowerCase()),
//       )
//     }

//     if (statusFilter !== "all") {
//       filtered = filtered.filter((booking) => booking.status === statusFilter)
//     }

//     setFilteredBookings(filtered)
//   }

//   const updateBookingStatus = async (
//     bookingId: string,
//     status: string,
//     paymentStatus?: string,
//     adminNotes?: string,
//   ) => {
//     try {
//       const updateData: any = { status }
//       if (paymentStatus) updateData.payment_status = paymentStatus
//       if (adminNotes !== undefined) updateData.admin_notes = adminNotes

//       const { error } = await supabase.from("bookings").update(updateData).eq("id", bookingId)

//       if (error) throw error

//       // Refresh bookings
//       fetchBookings()
//       setIsEditDialogOpen(false)
//     } catch (error) {
//       console.error("Error updating booking:", error)
//     }
//   }

//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case "confirmed":
//         return <CheckCircle className="w-4 h-4 text-green-500" />
//       case "pending":
//         return <Clock className="w-4 h-4 text-yellow-500" />
//       case "cancelled":
//         return <XCircle className="w-4 h-4 text-red-500" />
//       case "completed":
//         return <CheckCircle className="w-4 h-4 text-blue-500" />
//       default:
//         return <AlertCircle className="w-4 h-4 text-gray-500" />
//     }
//   }

//   const getStatusColor = (status: string) => {
//     switch (status) {
//       case "confirmed":
//         return "bg-green-100 text-green-800"
//       case "pending":
//         return "bg-yellow-100 text-yellow-800"
//       case "cancelled":
//         return "bg-red-100 text-red-800"
//       case "completed":
//         return "bg-blue-100 text-blue-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   const getPaymentStatusColor = (status: string) => {
//     switch (status) {
//       case "paid":
//         return "bg-green-100 text-green-800"
//       case "partial":
//         return "bg-yellow-100 text-yellow-800"
//       case "pending":
//         return "bg-red-100 text-red-800"
//       default:
//         return "bg-gray-100 text-gray-800"
//     }
//   }

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-64">
//         <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
//       </div>
//     )
//   }

//   return (
//     <div className="space-y-6">
//       <div>
//         <h1 className="text-3xl font-bold text-foreground">Bookings Management</h1>
//         <p className="text-muted-foreground">Manage all customer bookings and their status</p>
//       </div>

//       {/* Filters */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center space-x-2">
//             <Filter className="w-5 h-5" />
//             <span>Filters</span>
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <Label htmlFor="search">Search</Label>
//               <div className="relative">
//                 <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
//                 <Input
//                   id="search"
//                   placeholder="Search by customer name, email, or service..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="pl-10"
//                 />
//               </div>
//             </div>
//             <div>
//               <Label htmlFor="status">Status</Label>
//               <Select value={statusFilter} onValueChange={setStatusFilter}>
//                 <SelectTrigger className="w-48">
//                   <SelectValue placeholder="Filter by status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="all">All Status</SelectItem>
//                   <SelectItem value="pending">Pending</SelectItem>
//                   <SelectItem value="confirmed">Confirmed</SelectItem>
//                   <SelectItem value="completed">Completed</SelectItem>
//                   <SelectItem value="cancelled">Cancelled</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Bookings List */}
//       <Card>
//         <CardHeader>
//           <CardTitle>All Bookings ({filteredBookings.length})</CardTitle>
//           <CardDescription>Click on any booking to view details and update status</CardDescription>
//         </CardHeader>
//         <CardContent>
//           {filteredBookings.length === 0 ? (
//             <p className="text-muted-foreground text-center py-8">No bookings found</p>
//           ) : (
//             <div className="space-y-4">
//               {filteredBookings.map((booking) => (
//                 <div
//                   key={booking.id}
//                   className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
//                 >
//                   <div className="flex items-center space-x-4">
//                     {getStatusIcon(booking.status)}
//                     <div>
//                       <p className="font-medium text-foreground">{booking.customer_name}</p>
//                       <p className="text-sm text-muted-foreground">{booking.customer_email}</p>
//                       <p className="text-sm text-muted-foreground">{booking.customer_phone}</p>
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <p className="font-medium text-foreground">{booking.service_name}</p>
//                     <p className="text-sm text-muted-foreground">{booking.package_name}</p>
//                     <p className="text-sm text-muted-foreground">
//                       {format(new Date(booking.event_date), "MMM dd, yyyy")}
//                     </p>
//                   </div>
//                   <div className="text-center">
//                     <p className="font-bold text-primary">₹{booking.total_amount.toLocaleString()}</p>
//                     <div className="flex space-x-2 mt-1">
//                       <Badge className={getStatusColor(booking.status)}>{booking.status}</Badge>
//                       <Badge className={getPaymentStatusColor(booking.payment_status)}>{booking.payment_status}</Badge>
//                     </div>
//                   </div>
//                   <div className="flex space-x-2">
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button variant="outline" size="sm">
//                           <Eye className="w-4 h-4" />
//                         </Button>
//                       </DialogTrigger>
//                       <DialogContent className="max-w-2xl">
//                         <DialogHeader>
//                           <DialogTitle>Booking Details</DialogTitle>
//                           <DialogDescription>Complete information for this booking</DialogDescription>
//                         </DialogHeader>
//                         <div className="grid grid-cols-2 gap-4 py-4">
//                           <div>
//                             <Label className="font-semibold">Customer Name</Label>
//                             <p>{booking.customer_name}</p>
//                           </div>
//                           <div>
//                             <Label className="font-semibold">Email</Label>
//                             <p>{booking.customer_email}</p>
//                           </div>
//                           <div>
//                             <Label className="font-semibold">Phone</Label>
//                             <p>{booking.customer_phone}</p>
//                           </div>
//                           <div>
//                             <Label className="font-semibold">Event Date</Label>
//                             <p>{format(new Date(booking.event_date), "MMMM dd, yyyy")}</p>
//                           </div>
//                           <div>
//                             <Label className="font-semibold">Service</Label>
//                             <p>{booking.service_name}</p>
//                           </div>
//                           <div>
//                             <Label className="font-semibold">Package</Label>
//                             <p>{booking.package_name}</p>
//                           </div>
//                           <div className="col-span-2">
//                             <Label className="font-semibold">Event Location</Label>
//                             <p>{booking.event_location}</p>
//                           </div>
//                           <div className="col-span-2">
//                             <Label className="font-semibold">Special Requirements</Label>
//                             <p>{booking.special_requirements || "None"}</p>
//                           </div>
//                           <div className="col-span-2">
//                             <Label className="font-semibold">Admin Notes</Label>
//                             <p>{booking.admin_notes || "No notes"}</p>
//                           </div>
//                         </div>
//                       </DialogContent>
//                     </Dialog>
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       onClick={() => {
//                         setSelectedBooking(booking)
//                         setIsEditDialogOpen(true)
//                       }}
//                     >
//                       <Edit className="w-4 h-4" />
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </CardContent>
//       </Card>

//       {/* Edit Booking Dialog */}
//       <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>Update Booking</DialogTitle>
//             <DialogDescription>Update the status and add notes for this booking</DialogDescription>
//           </DialogHeader>
//           {selectedBooking && (
//             <div className="space-y-4 py-4">
//               <div>
//                 <Label htmlFor="status">Booking Status</Label>
//                 <Select
//                   value={selectedBooking.status}
//                   onValueChange={(value) => setSelectedBooking({ ...selectedBooking, status: value })}
//                 >
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="confirmed">Confirmed</SelectItem>
//                     <SelectItem value="completed">Completed</SelectItem>
//                     <SelectItem value="cancelled">Cancelled</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <Label htmlFor="payment_status">Payment Status</Label>
//                 <Select
//                   value={selectedBooking.payment_status}
//                   onValueChange={(value) => setSelectedBooking({ ...selectedBooking, payment_status: value })}
//                 >
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="pending">Pending</SelectItem>
//                     <SelectItem value="partial">Partial</SelectItem>
//                     <SelectItem value="paid">Paid</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div>
//                 <Label htmlFor="admin_notes">Admin Notes</Label>
//                 <Textarea
//                   id="admin_notes"
//                   value={selectedBooking.admin_notes}
//                   onChange={(e) => setSelectedBooking({ ...selectedBooking, admin_notes: e.target.value })}
//                   placeholder="Add any notes about this booking..."
//                   rows={3}
//                 />
//               </div>
//               <div className="flex justify-end space-x-2">
//                 <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
//                   Cancel
//                 </Button>
//                 <Button
//                   onClick={() =>
//                     updateBookingStatus(
//                       selectedBooking.id,
//                       selectedBooking.status,
//                       selectedBooking.payment_status,
//                       selectedBooking.admin_notes,
//                     )
//                   }
//                   className="bg-primary hover:bg-primary/90"
//                 >
//                   Update Booking
//                 </Button>
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }
