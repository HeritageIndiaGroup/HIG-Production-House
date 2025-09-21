// "use client"

// import { useState } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { MapPin, Phone, Mail, Clock } from "lucide-react"

// export function Contact() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [phone, setPhone] = useState("")
//   const [service, setService] = useState("")
//   const [message, setMessage] = useState("")

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const whatsappNumber = "917618878887" // +91 76188 78887
//     const text = `Hello HIG Production,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
//     const encodedText = encodeURIComponent(text)
//     window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank")
//   }

//   return (
//     <section id="contact" className="py-20 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Get In Touch</h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
//             Ready to bring your vision to life? Contact us today to discuss your project and get a personalized quote.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <Card>
//             <CardHeader>
//               <CardTitle>Send us a Message</CardTitle>
//               <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
//                       Full Name
//                     </label>
//                     <Input
//                       id="name"
//                       placeholder="Your full name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
//                       Email Address
//                     </label>
//                     <Input
//                       id="email"
//                       type="email"
//                       placeholder="your@email.com"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       required
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
//                     Phone Number
//                   </label>
//                   <Input
//                     id="phone"
//                     placeholder="+91 76188 78887"
//                     value={phone}
//                     onChange={(e) => setPhone(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="service" className="text-sm font-medium text-foreground mb-2 block">
//                     Service Interested In
//                   </label>
//                   <Input
//                     id="service"
//                     placeholder="Wedding, Music Video, Corporate, etc."
//                     value={service}
//                     onChange={(e) => setService(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
//                     Message
//                   </label>
//                   <Textarea
//                     id="message"
//                     placeholder="Tell us about your project, preferred dates, and any specific requirements..."
//                     rows={4}
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     required
//                   />
//                 </div>
//                 <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
//                   Send via WhatsApp
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Contact Information & Map */}
//           <div className="space-y-6">
//             {/* Contact Details */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Contact Information</CardTitle>
//                 <CardDescription>Reach out to us through any of these channels.</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex items-start space-x-3">
//                   <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
//                   <div>
//                     <p className="font-medium text-foreground">Address</p>
//                     <p className="text-sm text-muted-foreground">
//                       Heritage India Agro Producer Company
//                       <br />
//                       Tea Estate, Near Durga Temple
//                       <br />
//                       Banjarawala Chowk, Dehradun 248001
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Phone className="w-5 h-5 text-primary flex-shrink-0" />
//                   <div>
//                     <p className="font-medium text-foreground">Phone</p>
//                     <p className="text-sm text-muted-foreground">+91 8418878887</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Mail className="w-5 h-5 text-primary flex-shrink-0" />
//                   <div>
//                     <p className="font-medium text-foreground">Email</p>
//                     <p className="text-sm text-muted-foreground">admin@higproductionhouse.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <Clock className="w-5 h-5 text-primary flex-shrink-0" />
//                   <div>
//                     <p className="font-medium text-foreground">Working Hours</p>
//                     <p className="text-sm text-muted-foreground">Mon - Sat: 9:00 AM - 7:00 PM</p>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Google Maps */}
//             <Card>
//               <CardHeader>
//                 <CardTitle>Find Us</CardTitle>
//                 <CardDescription>Visit our studio in Dehradun for consultations and meetings.</CardDescription>
//               </CardHeader>
//               <CardContent className="p-0">
//                 <div className="w-full h-64 rounded-b-lg overflow-hidden">
//                   <iframe
//                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.048498169114!2d78.02856799999999!3d30.278956500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929104fe56c77%3A0x301ff4114bb2be47!2sHIG-HERITAGE%20AGRO%20INDIA%20PRODUCER%20COMPANY%20LIMITED!5e1!3m2!1sen!2sin!4v1757266932843!5m2!1sen!2sin"
//                     width="100%"
//                     height="100%"
//                     style={{ border: 0 }}
//                     allowFullScreen
//                     loading="lazy"
//                     referrerPolicy="no-referrer-when-downgrade"
//                     className="w-full h-full"
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }












"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export function Contact() {
  // ---------- STATE ----------
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")
  const [service, setService] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  // ---------- HANDLER ----------
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const whatsappNumber = "917618878887" // +91 76188 78887
    const text = `Hello HIG Production,

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}`

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank")
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------- SECTION HEADER ---------- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Ready to bring your vision to life? Contact us today to discuss your project and get a personalized quote.
          </p>
        </div>

        {/* ---------- GRID: FORM + INFO ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ---------- CONTACT FORM ---------- */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME + EMAIL */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    placeholder="+91 76188 78887"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* SERVICE */}
                <div>
                  <label htmlFor="service" className="text-sm font-medium text-foreground mb-2 block">
                    Service Interested In
                  </label>
                  <Input
                    id="service"
                    placeholder="Wedding, Music Video, Corporate, etc."
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    required
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project, preferred dates, and any specific requirements..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Send via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* ---------- CONTACT INFO & MAP ---------- */}
          <div className="space-y-6">
            {/* CONTACT DETAILS */}
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <InfoRow
                  icon={<MapPin className="w-5 h-5 text-primary" />}
                  title="Address"
                >
                  Heritage India Agro Producer Company <br />
                  Tea Estate, Near Durga Temple <br />
                  Banjarawala Chowk, Dehradun 248001
                </InfoRow>

                <InfoRow
                  icon={<Phone className="w-5 h-5 text-primary" />}
                  title="Phone"
                >
                  +91 8418878887
                </InfoRow>

                <InfoRow
                  icon={<Mail className="w-5 h-5 text-primary" />}
                  title="Email"
                >
                  admin@higproductionhouse.com
                </InfoRow>

                <InfoRow
                  icon={<Clock className="w-5 h-5 text-primary" />}
                  title="Working Hours"
                >
                  Mon - Sat: 9:00 AM - 7:00 PM
                </InfoRow>
              </CardContent>
            </Card>

            {/* GOOGLE MAPS */}
            <Card>
              <CardHeader>
                <CardTitle>Find Us</CardTitle>
                <CardDescription>Visit our studio in Dehradun for consultations and meetings.</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="w-full h-64 rounded-b-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.048498169114!2d78.02856799999999!3d30.278956500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929104fe56c77%3A0x301ff4114bb2be47!2sHIG-HERITAGE%20AGRO%20INDIA%20PRODUCER%20COMPANY%20LIMITED!5e1!3m2!1sen!2sin!4v1757266932843!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Small reusable component for contact info rows */
function InfoRow({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start space-x-3">
      {icon}
      <div>
        <p className="font-medium text-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  )
}















