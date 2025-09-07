"use client"

import React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  CalendarDays,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  User,
  FileText,
  CreditCard,
  Mail,
  AlertCircle,
} from "lucide-react"
import { format } from "date-fns"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface Service {
  id: string
  name: string
  description: string
  category: string
  base_price: number
}

interface Package {
  id: string
  service_id: string
  name: string
  price: number
  features: string[]
  duration_days: number
  deliverables: string[]
}

interface BookingData {
  service_id: string
  package_id: string
  event_date: Date | null
  customer_name: string
  customer_email: string
  customer_phone: string
  event_location: string
  special_requirements: string
}

interface ContactFormData {
  name: string
  email: string
  phone: string
  preferred_date: string
  message: string
}

const steps = [
  { id: 1, title: "Select Service", icon: FileText },
  { id: 2, title: "Choose Package", icon: CreditCard },
  { id: 3, title: "Pick Date", icon: CalendarDays },
  { id: 4, title: "Your Details", icon: User },
  { id: 5, title: "Confirmation", icon: CheckCircle },
]

export function BookingForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [services, setServices] = useState<Service[]>([])
  const [packages, setPackages] = useState<Package[]>([])
  const [availableDates, setAvailableDates] = useState<Date[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const [bookingData, setBookingData] = useState<BookingData>({
    service_id: "",
    package_id: "",
    event_date: null,
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    event_location: "",
    special_requirements: "",
  })

  const [showContactForm, setShowContactForm] = useState(false)
  const [contactFormData, setContactFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    preferred_date: "",
    message: "",
  })
  const [isContactSubmitting, setIsContactSubmitting] = useState(false)

  const supabase = createClient()

  // Fetch services on component mount
  useEffect(() => {
    fetchServices()
    fetchAvailableDates()
  }, [])

  // Fetch packages when service is selected
  useEffect(() => {
    if (bookingData.service_id) {
      fetchPackages(bookingData.service_id)
    }
  }, [bookingData.service_id])

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase.from("services").select("*").eq("is_active", true).order("name")

      if (error) throw error
      setServices(data || [])
    } catch (error) {
      console.error("Error fetching services:", error)
    }
  }

  const fetchPackages = async (serviceId: string) => {
    try {
      const { data, error } = await supabase
        .from("packages")
        .select("*")
        .eq("service_id", serviceId)
        .eq("is_active", true)
        .order("price")

      if (error) throw error
      setPackages(data || [])
    } catch (error) {
      console.error("Error fetching packages:", error)
    }
  }

  const fetchAvailableDates = async () => {
    try {
      const { data, error } = await supabase
        .from("availability")
        .select("date")
        .eq("is_available", true)
        .gte("date", new Date().toISOString().split("T")[0])
        .order("date")

      if (error) throw error
      const dates = data?.map((item) => new Date(item.date)) || []
      setAvailableDates(dates)
    } catch (error) {
      console.error("Error fetching available dates:", error)
    }
  }

  const handleSubmitBooking = async () => {
    setIsSubmitting(true)
    try {
      const selectedPackage = packages.find((pkg) => pkg.id === bookingData.package_id)

      const { data, error } = await supabase.from("bookings").insert({
        customer_name: bookingData.customer_name,
        customer_email: bookingData.customer_email,
        customer_phone: bookingData.customer_phone,
        service_id: bookingData.service_id,
        package_id: bookingData.package_id,
        event_date: bookingData.event_date?.toISOString().split("T")[0],
        event_location: bookingData.event_location,
        special_requirements: bookingData.special_requirements,
        total_amount: selectedPackage?.price || 0,
        status: "pending",
        payment_status: "pending",
      })

      if (error) throw error

      // Send email notification (will be implemented in email automation task)
      await fetch("/api/send-booking-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          booking: bookingData,
          package: selectedPackage,
          service: services.find((s) => s.id === bookingData.service_id),
        }),
      })

      setCurrentStep(5)
    } catch (error) {
      console.error("Error submitting booking:", error)
      alert("There was an error submitting your booking. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleContactFormSubmit = async () => {
    setIsContactSubmitting(true)
    try {
      await fetch("/api/send-booking-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "date_inquiry",
          contact: contactFormData,
        }),
      })

      alert("Your inquiry has been sent! We'll contact you within 24 hours.")
      setShowContactForm(false)
      setContactFormData({
        name: "",
        email: "",
        phone: "",
        preferred_date: "",
        message: "",
      })
    } catch (error) {
      console.error("Error sending inquiry:", error)
      alert("There was an error sending your inquiry. Please try again.")
    } finally {
      setIsContactSubmitting(false)
    }
  }

  const selectedService = services.find((s) => s.id === bookingData.service_id)
  const selectedPackage = packages.find((p) => p.id === bookingData.package_id)

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return bookingData.service_id !== ""
      case 2:
        return bookingData.package_id !== ""
      case 3:
        return bookingData.event_date !== null
      case 4:
        return (
          bookingData.customer_name &&
          bookingData.customer_email &&
          bookingData.customer_phone &&
          bookingData.event_location
        )
      default:
        return true
    }
  }

  return (
    <section className="py-12 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Book Your Service</h1>
          <p className="text-lg text-muted-foreground">
            Follow these simple steps to book your professional video or photography service.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8 overflow-x-auto">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                      isCompleted
                        ? "bg-primary border-primary text-primary-foreground"
                        : isActive
                          ? "border-primary text-primary bg-primary/10"
                          : "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="ml-2 hidden sm:block">
                    <p className={`text-sm font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                      {step.title}
                    </p>
                  </div>
                  {index < steps.length - 1 && <div className="w-8 h-px bg-border mx-4 hidden sm:block" />}
                </div>
              )
            })}
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {React.createElement(steps[currentStep - 1].icon, { className: "w-5 h-5" })}
              <span>{steps[currentStep - 1].title}</span>
            </CardTitle>
            <CardDescription>
              Step {currentStep} of {steps.length}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Step 1: Select Service */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <Label className="text-base font-medium">Choose your service</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <Card
                      key={service.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        bookingData.service_id === service.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setBookingData({ ...bookingData, service_id: service.id, package_id: "" })}
                    >
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">{service.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{service.description}</p>
                        <Badge variant="secondary">Starting ₹{service.base_price?.toLocaleString()}</Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Choose Package */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <Label className="text-base font-medium">Choose a package for {selectedService?.name}</Label>
                <div className="space-y-4">
                  {packages.map((pkg) => (
                    <Card
                      key={pkg.id}
                      className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                        bookingData.package_id === pkg.id ? "ring-2 ring-primary bg-primary/5" : "hover:bg-muted/50"
                      }`}
                      onClick={() => setBookingData({ ...bookingData, package_id: pkg.id })}
                    >
                      <CardContent className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <h3 className="font-semibold text-foreground">{pkg.name}</h3>
                          <Badge className="bg-primary text-primary-foreground">₹{pkg.price.toLocaleString()}</Badge>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-medium text-foreground">Features:</p>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {pkg.features.map((feature, index) => (
                              <li key={index} className="flex items-center">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Pick Date */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <Label className="text-base font-medium">Select your preferred date</Label>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={bookingData.event_date || undefined}
                    onSelect={(date) => setBookingData({ ...bookingData, event_date: date || null })}
                    disabled={(date) => {
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)
                      return (
                        date < today ||
                        !availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())
                      )
                    }}
                    className="rounded-md border"
                    modifiers={{
                      available: availableDates,
                      booked: (date) => {
                        const today = new Date()
                        today.setHours(0, 0, 0, 0)
                        return (
                          date >= today &&
                          !availableDates.some((availableDate) => availableDate.toDateString() === date.toDateString())
                        )
                      },
                    }}
                    modifiersStyles={{
                      available: {
                        backgroundColor: "hsl(var(--primary))",
                        color: "hsl(var(--primary-foreground))",
                        fontWeight: "bold",
                      },
                      booked: {
                        backgroundColor: "hsl(var(--destructive))",
                        color: "hsl(var(--destructive-foreground))",
                        textDecoration: "line-through",
                      },
                    }}
                  />
                </div>

                {/* Legend for calendar colors */}
                <div className="flex justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span>Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-destructive rounded"></div>
                    <span>Booked</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-muted rounded"></div>
                    <span>Past Dates</span>
                  </div>
                </div>

                {bookingData.event_date && (
                  <div className="text-center">
                    <Badge className="bg-primary text-primary-foreground">
                      Selected: {format(bookingData.event_date, "MMMM dd, yyyy")}
                    </Badge>
                  </div>
                )}

                {/* Contact form dialog for unavailable dates */}
                <div className="text-center pt-4">
                  <p className="text-muted-foreground mb-4">Don't see your preferred date available?</p>
                  <Dialog open={showContactForm} onOpenChange={setShowContactForm}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex items-center space-x-2 bg-transparent">
                        <Mail className="w-4 h-4" />
                        <span>Request Custom Date</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-2">
                          <AlertCircle className="w-5 h-5 text-primary" />
                          <span>Request Custom Date</span>
                        </DialogTitle>
                        <DialogDescription>
                          Let us know your preferred date and we'll check our availability for you.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="contact-name">Full Name *</Label>
                          <Input
                            id="contact-name"
                            value={contactFormData.name}
                            onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="contact-email">Email Address *</Label>
                          <Input
                            id="contact-email"
                            type="email"
                            value={contactFormData.email}
                            onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
                            placeholder="your@email.com"
                          />
                        </div>
                        <div>
                          <Label htmlFor="contact-phone">Phone Number *</Label>
                          <Input
                            id="contact-phone"
                            value={contactFormData.phone}
                            onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
                            placeholder="+91 XXXXX XXXXX"
                          />
                        </div>
                        <div>
                          <Label htmlFor="preferred-date">Preferred Date *</Label>
                          <Input
                            id="preferred-date"
                            type="date"
                            value={contactFormData.preferred_date}
                            onChange={(e) => setContactFormData({ ...contactFormData, preferred_date: e.target.value })}
                          />
                        </div>
                        <div>
                          <Label htmlFor="contact-message">Message</Label>
                          <Textarea
                            id="contact-message"
                            value={contactFormData.message}
                            onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
                            placeholder="Tell us about your event and any specific requirements..."
                            rows={3}
                          />
                        </div>
                        <div className="flex justify-end space-x-2">
                          <Button variant="outline" onClick={() => setShowContactForm(false)}>
                            Cancel
                          </Button>
                          <Button
                            onClick={handleContactFormSubmit}
                            disabled={
                              !contactFormData.name ||
                              !contactFormData.email ||
                              !contactFormData.phone ||
                              !contactFormData.preferred_date ||
                              isContactSubmitting
                            }
                            className="bg-primary hover:bg-primary/90"
                          >
                            {isContactSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin mr-2" />
                                Sending...
                              </>
                            ) : (
                              <>
                                <Mail className="w-4 h-4 mr-2" />
                                Send Inquiry
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            )}

            {/* Step 4: Customer Details */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <Label className="text-base font-medium">Your contact information</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={bookingData.customer_name}
                      onChange={(e) => setBookingData({ ...bookingData, customer_name: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={bookingData.customer_email}
                      onChange={(e) => setBookingData({ ...bookingData, customer_email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    value={bookingData.customer_phone}
                    onChange={(e) => setBookingData({ ...bookingData, customer_phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <Label htmlFor="location">Event Location *</Label>
                  <Input
                    id="location"
                    value={bookingData.event_location}
                    onChange={(e) => setBookingData({ ...bookingData, event_location: e.target.value })}
                    placeholder="Where will the event take place?"
                  />
                </div>
                <div>
                  <Label htmlFor="requirements">Special Requirements</Label>
                  <Textarea
                    id="requirements"
                    value={bookingData.special_requirements}
                    onChange={(e) => setBookingData({ ...bookingData, special_requirements: e.target.value })}
                    placeholder="Any special requests or requirements..."
                    rows={3}
                  />
                </div>
              </div>
            )}

            {/* Step 5: Confirmation */}
            {currentStep === 5 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Booking Confirmed!</h3>
                  <p className="text-muted-foreground">
                    Thank you for choosing HIG Production House. We've received your booking request and will contact
                    you within 24 hours to confirm the details.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-lg p-4 text-left">
                  <h4 className="font-semibold text-foreground mb-3">Booking Summary:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Service:</span>
                      <span className="font-medium">{selectedService?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Package:</span>
                      <span className="font-medium">{selectedPackage?.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {bookingData.event_date ? format(bookingData.event_date, "MMMM dd, yyyy") : ""}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{bookingData.event_location}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total Amount:</span>
                      <span className="text-primary">₹{selectedPackage?.price.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <Button onClick={() => router.push("/")} className="bg-primary hover:bg-primary/90" size="lg">
                  Back to Home
                </Button>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 5 && (
              <div className="flex justify-between pt-6">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2 bg-transparent"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous</span>
                </Button>

                {currentStep === 4 ? (
                  <Button
                    onClick={handleSubmitBooking}
                    disabled={!canProceed() || isSubmitting}
                    className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        <span>Submitting...</span>
                      </>
                    ) : (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Confirm Booking</span>
                      </>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="bg-primary hover:bg-primary/90 flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
