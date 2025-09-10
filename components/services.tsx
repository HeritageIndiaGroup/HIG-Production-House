// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Film, Camera, Music, Briefcase, Users, ImageIcon, Megaphone, Building } from "lucide-react"

// export function Services() {
//   const services = [
//     {
//       icon: Film,
//       title: "Film Shooting",
//       description: "Professional film production with state-of-the-art equipment and experienced crew",
//       features: ["4K Recording", "Professional Crew", "Post Production"],
//       startingPrice: "₹50,000",
//     },
//     {
//       icon: Camera,
//       title: "Short Films",
//       description: "Creative short film production from concept to final cut",
//       features: ["Creative Direction", "Professional Editing", "Sound Design"],
//       startingPrice: "₹25,000",
//     },
//     {
//       icon: Users,
//       title: "Wedding Films",
//       description: "Capture your special day with cinematic wedding videography",
//       features: ["Multiple Packages", "Drone Coverage", "Same Day Highlights"],
//       startingPrice: "₹30,000",
//     },
//     {
//       icon: Briefcase,
//       title: "Commercial Product Shoot",
//       description: "High-quality product photography and videography for your business",
//       features: ["Studio Setup", "Product Styling", "Multiple Angles"],
//       startingPrice: "₹20,000",
//     },
//     {
//       icon: Music,
//       title: "Music Videos",
//       description: "Creative music video production that brings your music to life",
//       features: ["Creative Concepts", "Multiple Locations", "Professional Editing"],
//       startingPrice: "₹15,000",
//     },
//     {
//       icon: ImageIcon,
//       title: "Photography",
//       description: "Professional photography services for events, portraits, and commercial needs",
//       features: ["Event Coverage", "Portrait Photography", "Quick Delivery"],
//       startingPrice: "₹10,000",
//     },
//     {
//       icon: Megaphone,
//       title: "Ad Films",
//       description: "Compelling advertisement films that drive engagement and sales",
//       features: ["Brand Strategy", "Professional Production", "Multi Platform"],
//       startingPrice: "₹40,000",
//     },
//     {
//       icon: Building,
//       title: "Corporate Films",
//       description: "Professional corporate videos for training, marketing, and communication",
//       features: ["Corporate Branding", "Interview Setup", "Professional Narration"],
//       startingPrice: "₹35,000",
//     },
//   ]

//   return (
//     <section id="services" className="py-20 bg-muted/30">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
//           <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
//             We offer comprehensive video production and photography services to bring your vision to life with
//             professional quality and creative excellence.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {services.map((service, index) => {
//             const Icon = service.icon
//             return (
//               <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
//                 <CardHeader className="text-center">
//                   <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
//                     <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
//                   </div>
//                   <CardTitle className="text-lg text-balance">{service.title}</CardTitle>
//                   <CardDescription className="text-sm text-balance">{service.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-4">
//                   <ul className="space-y-2">
//                     {service.features.map((feature, featureIndex) => (
//                       <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
//                         <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="pt-4 border-t border-border">
//                     <div className="flex items-center justify-between">
//                       <span className="text-lg font-bold text-primary">Starting {service.startingPrice}</span>
//                       <Button
//                         size="sm"
//                         variant="outline"
//                         className="hover:bg-primary hover:text-primary-foreground bg-transparent"
//                       >
//                         Learn More
//                       </Button>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>

//         <div className="text-center mt-12">
//           <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
//             <a href="#booking">Get Custom Quote</a>
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }
