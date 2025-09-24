// "use client"

// import { useState, useEffect } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Textarea } from "@/components/ui/textarea"
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { CalendarDays, Plus, Edit, Trash2 } from "lucide-react"
// import { createClient } from "@/lib/supabase/client"
// import { format, addDays, startOfMonth, endOfMonth } from "date-fns"

// interface AvailabilityDate {
//   id: string
//   date: string
//   is_available: boolean
//   max_bookings: number
//   current_bookings: number
//   notes: string
// }

// export function AvailabilityManagement() {
//   const [availabilityDates, setAvailabilityDates] = useState<AvailabilityDate[]>([])
//   const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
//   const [isLoading, setIsLoading] = useState(true)
//   const [isDialogOpen, setIsDialogOpen] = useState(false)
//   const [editingDate, setEditingDate] = useState<AvailabilityDate | null>(null)
//   const [formData, setFormData] = useState({
//     is_available: true,
//     max_bookings: 2,
//     notes: "",
//   })

//   const supabase = createClient()

//   useEffect(() => {
//     fetchAvailability()
//   }, [])

//   const fetchAvailability = async () => {
//     try {
//       const { data, error } = await supabase.from("availability").select("*").order("date", { ascending: true })

//       if (error) throw error
//       setAvailabilityDates(data || [])
//     } catch (error) {
//       console.error("Error fetching availability:", error)
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const getDateAvailability = (date: Date) => {
//     const dateString = format(date, "yyyy-MM-dd")
//     return availabilityDates.find((avail) => avail.date === dateString)
//   }

//   const handleDateSelect = (date: Date | undefined) => {
//     if (!date) return
//     setSelectedDate(date)
//     const availability = getDateAvailability(date)
//     if (availability) {
//       setEditingDate(availability)
//       setFormData({
//         is_available: availability.is_available,
//         max_bookings: availability.max_bookings,
//         notes: availability.notes || "",
//       })
//     } else {
//       setEditingDate(null)
//       setFormData({
//         is_available: true,
//         max_bookings: 2,
//         notes: "",
//       })
//     }
//     setIsDialogOpen(true)
//   }

//   const handleSaveAvailability = async () => {
//     if (!selectedDate) return

//     try {
//       const dateString = format(selectedDate, "yyyy-MM-dd")

//       if (editingDate) {
//         // Update existing
//         const { error } = await supabase
//           .from("availability")
//           .update({
//             is_available: formData.is_available,
//             max_bookings: formData.max_bookings,
//             notes: formData.notes,
//           })
//           .eq("id", editingDate.id)

//         if (error) throw error
//       } else {
//         // Create new
//         const { error } = await supabase.from("availability").insert({
//           date: dateString,
//           is_available: formData.is_available,
//           max_bookings: formData.max_bookings,
//           notes: formData.notes,
//         })

//         if (error) throw error
//       }

//       fetchAvailability()
//       setIsDialogOpen(false)
//     } catch (error) {
//       console.error("Error saving availability:", error)
//     }
//   }

//   const handleDeleteAvailability = async (id: string) => {
//     try {
//       const { error } = await supabase.from("availability").delete().eq("id", id)

//       if (error) throw error
//       fetchAvailability()
//     } catch (error) {
//       console.error("Error deleting availability:", error)
//     }
//   }

//   const generateNextMonthAvailability = async () => {
//     try {
//       const nextMonth = addDays(new Date(), 30)
//       const startDate = startOfMonth(nextMonth)
//       const endDate = endOfMonth(nextMonth)

//       const dates = []
//       let currentDate = startDate

//       while (currentDate <= endDate) {
//         const dateString = format(currentDate, "yyyy-MM-dd")
//         const existing = availabilityDates.find((avail) => avail.date === dateString)

//         if (!existing) {
//           dates.push({
//             date: dateString,
//             is_available: true,
//             max_bookings: 2,
//             current_bookings: 0,
//             notes: "",
//           })
//         }

//         currentDate = addDays(currentDate, 1)
//       }

//       if (dates.length > 0) {
//         const { error } = await supabase.from("availability").insert(dates)
//         if (error) throw error
//         fetchAvailability()
//       }
//     } catch (error) {
//       console.error("Error generating availability:", error)
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
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-3xl font-bold text-foreground">Availability Management</h1>
//           <p className="text-muted-foreground">Manage available dates for bookings</p>
//         </div>
//         <Button onClick={generateNextMonthAvailability} className="bg-primary hover:bg-primary/90">
//           <Plus className="w-4 h-4 mr-2" />
//           Generate Next Month
//         </Button>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Calendar */}
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center space-x-2">
//               <CalendarDays className="w-5 h-5" />
//               <span>Calendar</span>
//             </CardTitle>
//             <CardDescription>Click on any date to set availability</CardDescription>
//           </CardHeader>
//           <CardContent className="flex justify-center">
//             <Calendar
//               mode="single"
//               selected={selectedDate}
//               onSelect={handleDateSelect}
//               className="rounded-md border"
//               modifiers={{
//                 available: (date) => {
//                   const availability = getDateAvailability(date)
//                   return availability?.is_available === true
//                 },
//                 unavailable: (date) => {
//                   const availability = getDateAvailability(date)
//                   return availability?.is_available === false
//                 },
//                 booked: (date) => {
//                   const availability = getDateAvailability(date)
//                   return availability ? availability.current_bookings >= availability.max_bookings : false
//                 },
//               }}
//               modifiersStyles={{
//                 available: { backgroundColor: "#dcfce7", color: "#166534" },
//                 unavailable: { backgroundColor: "#fecaca", color: "#dc2626" },
//                 booked: { backgroundColor: "#fef3c7", color: "#d97706" },
//               }}
//             />
//           </CardContent>
//         </Card>

//         {/* Availability List */}
//         <Card>
//           <CardHeader>
//             <CardTitle>Availability Overview</CardTitle>
//             <CardDescription>Current availability settings</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div className="space-y-3 max-h-96 overflow-y-auto">
//               {availabilityDates.length === 0 ? (
//                 <p className="text-muted-foreground text-center py-8">No availability set</p>
//               ) : (
//                 availabilityDates.slice(0, 20).map((availability) => (
//                   <div
//                     key={availability.id}
//                     className="flex items-center justify-between p-3 border border-border rounded-lg"
//                   >
//                     <div>
//                       <p className="font-medium text-foreground">
//                         {format(new Date(availability.date), "MMM dd, yyyy")}
//                       </p>
//                       <p className="text-sm text-muted-foreground">
//                         {availability.current_bookings}/{availability.max_bookings} bookings
//                       </p>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Badge
//                         className={
//                           availability.is_available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
//                         }
//                       >
//                         {availability.is_available ? "Available" : "Unavailable"}
//                       </Badge>
//                       <Button
//                         variant="outline"
//                         size="sm"
//                         onClick={() => {
//                           setSelectedDate(new Date(availability.date))
//                           setEditingDate(availability)
//                           setFormData({
//                             is_available: availability.is_available,
//                             max_bookings: availability.max_bookings,
//                             notes: availability.notes || "",
//                           })
//                           setIsDialogOpen(true)
//                         }}
//                       >
//                         <Edit className="w-4 h-4" />
//                       </Button>
//                       <Button variant="outline" size="sm" onClick={() => handleDeleteAvailability(availability.id)}>
//                         <Trash2 className="w-4 h-4" />
//                       </Button>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Edit Availability Dialog */}
//       <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
//         <DialogContent>
//           <DialogHeader>
//             <DialogTitle>{editingDate ? "Edit" : "Set"} Availability</DialogTitle>
//             <DialogDescription>
//               {selectedDate && `Configure availability for ${format(selectedDate, "MMMM dd, yyyy")}`}
//             </DialogDescription>
//           </DialogHeader>
//           <div className="space-y-4 py-4">
//             <div className="flex items-center space-x-2">
//               <input
//                 type="checkbox"
//                 id="is_available"
//                 checked={formData.is_available}
//                 onChange={(e) => setFormData({ ...formData, is_available: e.target.checked })}
//                 className="rounded border-border"
//               />
//               <Label htmlFor="is_available">Available for bookings</Label>
//             </div>
//             <div>
//               <Label htmlFor="max_bookings">Maximum Bookings</Label>
//               <Input
//                 id="max_bookings"
//                 type="number"
//                 min="0"
//                 max="10"
//                 value={formData.max_bookings}
//                 onChange={(e) => setFormData({ ...formData, max_bookings: Number.parseInt(e.target.value) || 0 })}
//               />
//             </div>
//             <div>
//               <Label htmlFor="notes">Notes</Label>
//               <Textarea
//                 id="notes"
//                 value={formData.notes}
//                 onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
//                 placeholder="Any special notes for this date..."
//                 rows={3}
//               />
//             </div>
//             <div className="flex justify-end space-x-2">
//               <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
//                 Cancel
//               </Button>
//               <Button onClick={handleSaveAvailability} className="bg-primary hover:bg-primary/90">
//                 Save Availability
//               </Button>
//             </div>
//           </div>
//         </DialogContent>
//       </Dialog>
//     </div>
//   )
// }
