// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Camera, Film, Heart, Users, Award, Sparkles } from "lucide-react"

// export default function AboutPage() {
//   const services = [
//     {
//       icon: Heart,
//       title: "Wedding Films",
//       description: "Capturing your special day with cinematic elegance and emotional depth.",
//     },
//     {
//       icon: Film,
//       title: "Music Videos",
//       description: "Creative storytelling through music with innovative concepts and stunning visuals.",
//     },
//     {
//       icon: Users,
//       title: "Corporate Films",
//       description: "Professional corporate storytelling that engages and inspires your audience.",
//     },
//     {
//       icon: Camera,
//       title: "Pre-Wedding Shoots",
//       description: "Romantic and creative pre-wedding photography that tells your love story.",
//     },
//   ]

//   const values = [
//     {
//       icon: Sparkles,
//       title: "Craft unforgettable stories",
//       description: "Every project is a unique narrative waiting to be told with passion and creativity.",
//     },
//     {
//       icon: Award,
//       title: "Professional quality with personal touch",
//       description: "We combine technical excellence with personalized service for each client.",
//     },
//     {
//       icon: Heart,
//       title: "Create films that inspire and connect",
//       description: "Our films are designed to evoke emotions and create lasting memories.",
//     },
//   ]

//   return (
//     <main className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/placeholder-3u0bz.png')",
//           }}
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
//           <Badge className="mb-4 bg-primary/20 text-white border-primary/30">HIG Film Production</Badge>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Every Story Deserves to be Told</h1>
//           <p className="text-xl md:text-2xl text-gray-200 text-balance">
//             With passion, creativity, and cinematic brilliance
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Story</Badge>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">
//                 Blending Art and Technology
//               </h2>
//               <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                 At HIG Film Production, we believe every story deserves to be told with passion, creativity, and
//                 cinematic brilliance. Established with a vision to blend art and technology, we specialize in creating
//                 timeless films that capture emotions, moments, and experiences.
//               </p>
//               <p className="text-lg text-muted-foreground leading-relaxed">
//                 From grand weddings and emotional pre-wedding shoots to engaging music videos, corporate films, and
//                 creative projects, our team ensures that every frame reflects perfection. With state-of-the-art
//                 equipment, innovative concepts, and a dedicated crew, we transform ideas into powerful visuals.
//               </p>
//             </div>
//             <div className="relative">
//               <img
//                 src="/placeholder-vk9ff.png"
//                 alt="HIG Film Production team at work"
//                 className="rounded-lg shadow-2xl w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-4 bg-muted/30">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Expertise</Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">What We Create</h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
//               Every project is crafted with meticulous attention to detail and creative vision
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
//                 <CardContent className="p-6 text-center">
//                   <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
//                     <service.icon className="w-8 h-8 text-primary" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
//                   <p className="text-muted-foreground leading-relaxed">{service.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Mission</Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground text-balance">What Drives Us</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="text-center group">
//                 <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <value.icon className="w-10 h-10 text-white" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 text-foreground text-balance">✨ {value.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">
//             Ready to Bring Your Vision to Life?
//           </h2>
//           <p className="text-xl text-white/90 mb-8 text-balance">
//             Whether it's your wedding day, a music launch, or a corporate journey — HIG Film Production Pvt. Ltd. is
//             your trusted partner in bringing visions to life.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
//               View Our Portfolio
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-lg px-8 py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
//             >
//               Get in Touch
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }




// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { Camera, Film, Heart, Users, Award, Sparkles } from "lucide-react"

// export default function AboutPage() {
//   const services = [
//     {
//       icon: Heart,
//       title: "Wedding Films",
//       description: "Capturing your special day with cinematic elegance and emotional depth.",
//     },
//     {
//       icon: Film,
//       title: "Music Videos",
//       description: "Creative storytelling through music with innovative concepts and stunning visuals.",
//     },
//     {
//       icon: Users,
//       title: "Corporate Films",
//       description: "Professional corporate storytelling that engages and inspires your audience.",
//     },
//     {
//       icon: Camera,
//       title: "Pre-Wedding Shoots",
//       description: "Romantic and creative pre-wedding photography that tells your love story.",
//     },
//   ]

//   const values = [
//     {
//       icon: Sparkles,
//       title: "Craft unforgettable stories",
//       description: "Every project is a unique narrative waiting to be told with passion and creativity.",
//     },
//     {
//       icon: Award,
//       title: "Professional quality with personal touch",
//       description: "We combine technical excellence with personalized service for each client.",
//     },
//     {
//       icon: Heart,
//       title: "Create films that inspire and connect",
//       description: "Our films are designed to evoke emotions and create lasting memories.",
//     },
//   ]

//   return (
//     <main className="min-h-screen bg-[#f9fafb]">
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/professional-film-production-studio-with-cameras-a.jpg')",
//           }}
//         />
//         <div className="absolute inset-0 bg-[#374151]/50" />
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <Badge className="mb-4 bg-[#0891b2]/20 text-[#f9fafb] border-[#0891b2]/30">HIG Film Production</Badge>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-[#f9fafb] text-balance">Every Story Deserves to be Told</h1>
//           <p className="text-xl md:text-2xl text-[#f9fafb]/90 text-balance">
//             With passion, creativity, and cinematic brilliance
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Badge className="mb-4 bg-[#0891b2]/10 text-[#0891b2] border-[#0891b2]/20">Our Story</Badge>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] text-balance">
//                 Blending Art and Technology
//               </h2>
//               <p className="text-lg text-[#374151]/90 leading-relaxed mb-6">
//                 At HIG Film Production, we believe every story deserves to be told with passion, creativity, and
//                 cinematic brilliance. Established with a vision to blend art and technology, we specialize in creating
//                 timeless films that capture emotions, moments, and experiences.
//               </p>
//               <p className="text-lg text-[#374151]/90 leading-relaxed">
//                 From grand weddings and emotional pre-wedding shoots to engaging music videos, corporate films, and
//                 creative projects, our team ensures that every frame reflects perfection. With state-of-the-art
//                 equipment, innovative concepts, and a dedicated crew, we transform ideas into powerful visuals.
//               </p>
//             </div>
//             <div className="relative">
//               <img
//                 src="/logo.png"
//                 alt="HIG Film Production team at work"
//                 className="rounded-lg shadow-2xl w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-4 bg-[#f9fafb]/80">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-[#0891b2]/10 text-[#0891b2] border-[#0891b2]/20">Our Expertise</Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] text-balance">What We Create</h2>
//             <p className="text-lg text-[#374151]/90 max-w-2xl mx-auto text-balance">
//               Every project is crafted with meticulous attention to detail and creative vision
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-[#374151]/50">
//                 <CardContent className="p-6 text-center">
//                   <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0891b2]/20 transition-colors">
//                     <service.icon className="w-8 h-8 text-[#0891b2]" />
//                   </div>
//                   <h3 className="text-xl font-semibold mb-3 text-[#374151]">{service.title}</h3>
//                   <p className="text-[#374151]/90 leading-relaxed">{service.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="text-center mb-16">
//             <Badge className="mb-4 bg-[#0891b2]/10 text-[#0891b2] border-[#0891b2]/20">Our Mission</Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#374151] text-balance">What Drives Us</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value, index) => (
//               <div key={index} className="text-center group">
//                 <div className="w-20 h-20 bg-gradient-to-br from-[#0891b2] to-[#0891b2]/70 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <value.icon className="w-10 h-10 text-[#f9fafb]" />
//                 </div>
//                 <h3 className="text-2xl font-semibold mb-4 text-[#374151] text-balance">✨ {value.title}</h3>
//                 <p className="text-[#374151]/90 leading-relaxed">{value.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-[#0891b2] to-[#0891b2]/70">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f9fafb] text-balance">
//             Ready to Bring Your Vision to Life?
//           </h2>
//           <p className="text-xl text-[#f9fafb]/90 mb-8 text-balance">
//             Whether it's your wedding day, a music launch, or a corporate journey — HIG Film Production Pvt. Ltd. is
//             your trusted partner in bringing visions to life.
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" variant="secondary" className="text-lg px-8 py-3 text-[#f9fafb]">
//               View Our Portfolio
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-lg px-8 py-3 bg-[#f9fafb]/10 border-[#f9fafb]/30 text-[#f9fafb] hover:bg-[#f9fafb]/20"
//             >
//               Get in Touch
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   )
// }





// // src/app/about/page.tsx

// "use client"; // Add this if not already present, as useEffect is a client hook

// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Camera, Film, Heart, Users, Award, Sparkles } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
// import dynamic from 'next/dynamic'; // <-- 1. Import dynamic

// // --- Data and Types ---

// type Service = {
//   id: string;
//   icon: LucideIcon;
//   title:string;
//   description: string;
// };

// type Value = {
//   id: string;
//   icon: LucideIcon;
//   title: string;
//   description: string;
// };

// const PageContent = {
//   hero: {
//     badge: "HIG Film Production",
//     title: "Every Story Deserves to be Told",
//     subtitle: "With passion, creativity, and cinematic brilliance",
//     imageUrl: "/professional-film-production-studio.jpg",
//   },
//   story: {
//     badge: "Our Story",
//     title: "Blending Art and Technology",
//     paragraphs: [
//       "At HIG Film Production, we believe every story deserves to be told with passion, creativity, and cinematic brilliance. Established with a vision to blend art and technology, we specialize in creating timeless films that capture emotions, moments, and experiences.",
//       "From grand weddings and emotional pre-wedding shoots to engaging music videos, corporate films, and creative projects, our team ensures that every frame reflects perfection. With state-of-the-art equipment, innovative concepts, and a dedicated crew, we transform ideas into powerful visuals.",
//     ],
//     imageUrl: "/logo.png",
//     imageAlt: "HIG Film Production company logo",
//   },
//   services: {
//     badge: "Our Expertise",
//     title: "What We Create",
//     description: "Every project is crafted with meticulous attention to detail and creative vision.",
//   },
//   mission: {
//     badge: "Our Mission",
//     title: "What Drives Us",
//     description: "Our core values guide every story we tell and every relationship we build.",
//   },
//   cta: {
//     title: "Ready to Bring Your Vision to Life?",
//     description: "Whether it's your wedding day, a music launch, or a corporate journey — HIG Film Production is your trusted partner in bringing visions to life.",
//     primaryButtonText: "View Our Portfolio",
//     secondaryButtonText: "Get in Touch",
//   },
// };

// const services: Service[] = [
//   { id: "wedding-films", icon: Heart, title: "Wedding Films", description: "Capturing your special day with cinematic elegance and emotional depth." },
//   { id: "music-videos", icon: Film, title: "Music Videos", description: "Creative storytelling through music with innovative concepts and stunning visuals." },
//   { id: "corporate-films", icon: Users, title: "Corporate Films", description: "Professional corporate storytelling that engages and inspires your audience." },
//   { id: "pre-wedding-shoots", icon: Camera, title: "Pre-Wedding Shoots", description: "Romantic and creative pre-wedding photography that tells your love story." },
// ];

// const values: Value[] = [
//   { id: "unforgettable-stories", icon: Sparkles, title: "Craft Unforgettable Stories", description: "Every project is a unique narrative waiting to be told with passion and creativity." },
//   { id: "professional-quality", icon: Award, title: "Professional Quality, Personal Touch", description: "We combine technical excellence with personalized service for each client." },
//   { id: "inspire-connect", icon: Heart, title: "Create Films that Inspire", description: "Our films are designed to evoke emotions and create lasting memories." },
// ];

// // --- FIX: Dynamically import the Navigation component ---
// // This tells Next.js to only render this component on the client-side.
// const ClientNavigation = dynamic(
//   () => import('@/components/navigation').then((mod) => mod.Navigation),
//   { ssr: false }
// );


// // --- Reusable Components ---

// const SectionHeader = ({ badge, title, description }: { badge: string; title: string; description?: string; }) => (
//     <div className="text-center mb-16">
//         <Badge className="mb-4 bg-cyan-600/10 text-cyan-600 border-cyan-600/20">{badge}</Badge>
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-700 text-balance">{title}</h2>
//         {description && <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">{description}</p>}
//     </div>
// );

// const ServiceCard = ({ icon: Icon, title, description }: Service) => (
//     <Card className="group hover:shadow-lg transition-shadow duration-300 border-slate-700/10">
//         <CardContent className="p-6 text-center">
//             <div className="w-16 h-16 bg-cyan-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-600/20 transition-colors">
//                 <Icon className="w-8 h-8 text-cyan-600" />
//             </div>
//             <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
//             <p className="text-slate-600 leading-relaxed">{description}</p>
//         </CardContent>
//     </Card>
// );

// const ValuePillar = ({ icon: Icon, title, description }: Value) => (
//     <div className="text-center group">
//         <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//             <Icon className="w-10 h-10 text-slate-50" />
//         </div>
//         <h3 className="text-2xl font-semibold mb-4 text-slate-800 text-balance">{title}</h3>
//         <p className="text-slate-600 leading-relaxed">{description}</p>
//     </div>
// );


// // --- Page Component ---

// export default function AboutPage() {
//   return (
//     <main className="min-h-screen bg-slate-50 text-slate-700">
//       <ClientNavigation /> {/* <-- 3. Use the client-only version of the component */}
      
//       {/* Hero Section */}
//       <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: `url('${PageContent.hero.imageUrl}')` }}
//         />
//         <div className="absolute inset-0 bg-slate-800/60" />
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
//           <Badge className="mb-4 bg-cyan-600/20 text-slate-50 border-cyan-600/30">
//             {PageContent.hero.badge}
//           </Badge>
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-50 text-balance">
//             {PageContent.hero.title}
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-200 text-balance">
//             {PageContent.hero.subtitle}
//           </p>
//         </div>
//       </section>

//       {/* Our Story Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div>
//               <Badge className="mb-4 bg-cyan-600/10 text-cyan-600 border-cyan-600/20">
//                 {PageContent.story.badge}
//               </Badge>
//               <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 text-balance">
//                 {PageContent.story.title}
//               </h2>
//               {PageContent.story.paragraphs.map((text: string, index: number) => (
//                 <p key={index} className="text-lg text-slate-600 leading-relaxed mb-6 last:mb-0">
//                   {text}
//                 </p>
//               ))}
//             </div>
//             <div className="relative">
//               <img
//                 src={PageContent.story.imageUrl}
//                 alt={PageContent.story.imageAlt}
//                 className="rounded-lg shadow-2xl w-full"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeader
//             badge={PageContent.services.badge}
//             title={PageContent.services.title}
//             description={PageContent.services.description}
//           />
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service) => (
//               <ServiceCard key={service.id} {...service} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto max-w-6xl">
//           <SectionHeader
//             badge={PageContent.mission.badge}
//             title={PageContent.mission.title}
//             description={PageContent.mission.description}
//           />
//           <div className="grid md:grid-cols-3 gap-8">
//             {values.map((value) => (
//               <ValuePillar key={value.id} {...value} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-cyan-500">
//         <div className="container mx-auto max-w-4xl text-center">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 text-balance">
//             {PageContent.cta.title}
//           </h2>
//           <p className="text-xl text-slate-200 mb-8 text-balance">
//             {PageContent.cta.description}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-cyan-700 hover:bg-slate-100">
//               {PageContent.cta.primaryButtonText}
//             </Button>
//             <Button
//               size="lg"
//               variant="outline"
//               className="text-lg px-8 py-3 border-slate-50/50 text-slate-50 hover:bg-white/10"
//             >
//               {PageContent.cta.secondaryButtonText}
//             </Button>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }













// src/app/about/page.tsx

"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Camera, Film, Heart, Users, Award, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Footer } from "@/components/footer"; // <-- 1. Import Footer

// --- Data and Types ---

type Service = {
  id: string;
  icon: LucideIcon;
  title:string;
  description: string;
};

type Value = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

// FIX: Using the image URLs from your original code
const PageContent = {
  hero: {
    badge: "HIG Film Production",
    title: "Every Story Deserves to be Told",
    subtitle: "With passion, creativity, and cinematic brilliance",
    imageUrl: "/professional-film-production-studio-with-cameras-a.jpg", // <-- Updated Image URL
  },
  story: {
    badge: "Our Story",
    title: "Blending Art and Technology",
    paragraphs: [
      "At HIG Film Production, we believe every story deserves to be told with passion, creativity, and cinematic brilliance. Established with a vision to blend art and technology, we specialize in creating timeless films that capture emotions, moments, and experiences.",
      "From grand weddings and emotional pre-wedding shoots to engaging music videos, corporate films, and creative projects, our team ensures that every frame reflects perfection. With state-of-the-art equipment, innovative concepts, and a dedicated crew, we transform ideas into powerful visuals.",
    ],
    imageUrl: "/logo.png", // <-- Updated Image URL
    imageAlt: "HIG Film Production company logo",
  },
  services: {
    badge: "Our Expertise",
    title: "What We Create",
    description: "Every project is crafted with meticulous attention to detail and creative vision.",
  },
  mission: {
    badge: "Our Mission",
    title: "What Drives Us",
    description: "Our core values guide every story we tell and every relationship we build.",
  },
  cta: {
    title: "Ready to Bring Your Vision to Life?",
    description: "Whether it's your wedding day, a music launch, or a corporate journey — HIG Film Production is your trusted partner in bringing visions to life.",
    primaryButtonText: "View Our Portfolio",
    secondaryButtonText: "Get in Touch",
  },
};

const services: Service[] = [
  { id: "wedding-films", icon: Heart, title: "Wedding Films", description: "Capturing your special day with cinematic elegance and emotional depth." },
  { id: "music-videos", icon: Film, title: "Music Videos", description: "Creative storytelling through music with innovative concepts and stunning visuals." },
  { id: "corporate-films", icon: Users, title: "Corporate Films", description: "Professional corporate storytelling that engages and inspires your audience." },
  { id: "pre-wedding-shoots", icon: Camera, title: "Pre-Wedding Shoots", description: "Romantic and creative pre-wedding photography that tells your love story." },
];

const values: Value[] = [
  { id: "unforgettable-stories", icon: Sparkles, title: "Craft Unforgettable Stories", description: "Every project is a unique narrative waiting to be told with passion and creativity." },
  { id: "professional-quality", icon: Award, title: "Professional Quality, Personal Touch", description: "We combine technical excellence with personalized service for each client." },
  { id: "inspire-connect", icon: Heart, title: "Create Films that Inspire", description: "Our films are designed to evoke emotions and create lasting memories." },
];

// --- Dynamically import client-side components ---
const ClientNavigation = dynamic(
  () => import('@/components/navigation').then((mod) => mod.Navigation),
  { ssr: false }
);

const ClientFooter = dynamic(
  () => import('@/components/footer').then((mod) => mod.Footer), // <-- 2. Create dynamic version of Footer
  { ssr: false }
);


// --- Reusable Components ---
const SectionHeader = ({ badge, title, description }: { badge: string; title: string; description?: string; }) => (
    <div className="text-center mb-16">
        <Badge className="mb-4 bg-cyan-600/10 text-cyan-600 border-cyan-600/20">{badge}</Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-700 text-balance">{title}</h2>
        {description && <p className="text-lg text-slate-600 max-w-2xl mx-auto text-balance">{description}</p>}
    </div>
);
const ServiceCard = ({ icon: Icon, title, description }: Service) => (
    <Card className="group hover:shadow-lg transition-shadow duration-300 border-slate-700/10">
        <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-cyan-600/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-600/20 transition-colors">
                <Icon className="w-8 h-8 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </CardContent>
    </Card>
);
const ValuePillar = ({ icon: Icon, title, description }: Value) => (
    <div className="text-center group">
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-10 h-10 text-slate-50" />
        </div>
        <h3 className="text-2xl font-semibold mb-4 text-slate-800 text-balance">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
);


// --- Page Component ---

export default function AboutPage() {
  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-700">
        <ClientNavigation />
        
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <Image
            src={PageContent.hero.imageUrl}
            alt="Film production studio background"
            fill
            className="object-cover"
            priority
            placeholder="empty"
            quality={80}
          />
          <div className="absolute inset-0 bg-slate-800/60" />
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            <Badge className="mb-4 bg-cyan-600/20 text-slate-50 border-cyan-600/30">
              {PageContent.hero.badge}
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-slate-50 text-balance">
              {PageContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 text-balance">
              {PageContent.hero.subtitle}
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-cyan-600/10 text-cyan-600 border-cyan-600/20">
                  {PageContent.story.badge}
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 text-balance">
                  {PageContent.story.title}
                </h2>
                {PageContent.story.paragraphs.map((text: string, index: number) => (
                  <p key={index} className="text-lg text-slate-600 leading-relaxed mb-6 last:mb-0">
                    {text}
                  </p>
                ))}
              </div>
              <div className="relative aspect-square w-full max-w-md mx-auto">
                <Image
                  src={PageContent.story.imageUrl}
                  alt={PageContent.story.imageAlt}
                  fill
                  className="rounded-lg shadow-2xl object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  placeholder="empty"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              badge={PageContent.services.badge}
              title={PageContent.services.title}
              description={PageContent.services.description}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <SectionHeader
              badge={PageContent.mission.badge}
              title={PageContent.mission.title}
              description={PageContent.mission.description}
            />
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <ValuePillar key={value.id} {...value} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 to-cyan-500">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-50 text-balance">
              {PageContent.cta.title}
            </h2>
            <p className="text-xl text-slate-200 mb-8 text-balance">
              {PageContent.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3 bg-white text-cyan-700 hover:bg-slate-100">
                {PageContent.cta.primaryButtonText}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-3 border-slate-50/50 text-slate-50 hover:bg-white/10"
              >
                {PageContent.cta.secondaryButtonText}
              </Button>
            </div>
          </div>
        </section>
      </main>
      <ClientFooter /> {/* <-- 3. Add Footer after the main content */}
    </>
  );
}