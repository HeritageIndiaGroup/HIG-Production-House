// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Menu, X, Camera, Film, Music, Users, Phone, ImageIcon, ChevronDown } from "lucide-react"

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     // Home will be rendered separately to ensure order before Services
//     { name: "Gallery", href: "#gallery", icon: ImageIcon },
//     { name: "Contact", href: "#contact", icon: Phone },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className={`relative flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}
//         >
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <Image
//               src="/logo.jpg"
//               alt="HIG Production House"
//               width={isScrolled ? 120 : 160}
//               height={isScrolled ? 40 : 60}
//               className={`object-contain transition-all duration-300 ${isScrolled ? "h-10" : "h-16"} w-auto`}
//               priority
//             />
//             <span className={`${isScrolled ? "text-foreground" : "text-white"} hidden sm:block font-semibold tracking-wide`}>
//               HIG Production House
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
//             <div className="flex items-center">
//               {/* Home (first) */}
//               <Link
//                 href="/"
//                 className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
//                   isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Home
//               </Link>
//               {/* Services with Mega Menu */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setServicesOpen(true)}
//                 onMouseLeave={() => setServicesOpen(false)}
//               >
//                 <Link
//                   href="#services"
//                   className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200 ${
//                     isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                   }`}
//                 >
//                   <Film className="w-4 h-4" />
//                   <span>Services</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </Link>

//                 {/* Mega menu panel */}
//                 <div
//                   className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] max-w-[90vw] bg-background border border-border rounded-lg shadow-xl transition-all duration-200 ${
//                     servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
//                   }`}
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
//                     {/* Wedding Packages */}
//                     <Link
//                       href="#wedding-packages"
//                       className="group block rounded-md overflow-hidden border border-border hover:border-primary/50 transition-colors"
//                     >
//                       <div className="relative h-40">
//                         <Image
//                           src="/cinematic-wedding-videography-with-bride-and-groom.jpg"
//                           alt="Wedding Packages"
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 900px) 100vw, 900px"
//                           priority={false}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
//                         <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
//                           <Users className="w-4 h-4 text-primary" />
//                           <span className="font-medium">Wedding Packages</span>
//                         </div>
//                       </div>
//                     </Link>

//                     {/* Music Video Packages */}
//                     <Link
//                       href="#music-videos"
//                       className="group block rounded-md overflow-hidden border border-border hover:border-primary/50 transition-colors"
//                     >
//                       <div className="relative h-40">
//                         <Image
//                           src="/colorful-bollywood-music-video-shoot-with-dancers.jpg"
//                           alt="Music Video Packages"
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 900px) 100vw, 900px"
//                           priority={false}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
//                         <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
//                           <Music className="w-4 h-4 text-primary" />
//                           <span className="font-medium">Music Video Packages</span>
//                         </div>
//                       </div>
//                     </Link>

//                     {/* Our Services */}
//                     <Link
//                       href="#services"
//                       className="group block rounded-md overflow-hidden border border-border hover:border-primary/50 transition-colors"
//                     >
//                       <div className="relative h-40">
//                         <Image
//                           src="/professional-film-production-studio-with-cameras-a.jpg"
//                           alt="Our Services"
//                           fill
//                           className="object-cover"
//                           sizes="(max-width: 900px) 100vw, 900px"
//                           priority={false}
//                         />
//                         <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
//                         <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center gap-2">
//                           <Film className="w-4 h-4 text-primary" />
//                           <span className="font-medium">Our Services</span>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Gallery + Contact group (tighter spacing) */}
//               <div className="flex items-center gap-2 ml-6">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
//                       isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Book Now Button */}
//           <div className="hidden md:flex items-center space-x-2">
//             <Button asChild className="bg-primary hover:bg-primary/90">
//               <Link href="/booking">Book Now</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className={`transition-colors duration-200 ${
//                 isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//               }`}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
//             {/* Home */}
//             <Link
//               href="/"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <Camera className="w-4 h-4" />
//               <span>Home</span>
//             </Link>

//             {/* Services with collapsible submenu */}
//             <div className="px-3 py-2">
//               <button
//                 onClick={() => setServicesOpen((v) => !v)}
//                 className="w-full flex items-center justify-between text-left text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <span className="flex items-center gap-2">
//                   <Film className="w-4 h-4" />
//                   Services
//                 </span>
//                 <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
//               </button>
//               {servicesOpen && (
//                 <div className="mt-2 space-y-1">
//                   <Link
//                     href="#wedding-packages"
//                     className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Wedding Packages
//                   </Link>
//                   <Link
//                     href="#music-videos"
//                     className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Music Video Packages
//                   </Link>
//                   <Link
//                     href="#services"
//                     className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md"
//                     onClick={() => setIsOpen(false)}
//                   >
//                     Our Services
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Gallery */}
//             <Link
//               href="#gallery"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <ImageIcon className="w-4 h-4" />
//               <span>Gallery</span>
//             </Link>

//             {/* Contact */}
//             <Link
//               href="#contact"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <Phone className="w-4 h-4" />
//               <span>Contact</span>
//             </Link>

//             <div className="px-3 py-2">
//               <Button asChild className="w-full bg-primary hover:bg-primary/90">
//                 <Link href="/booking" onClick={() => setIsOpen(false)}>
//                   Book Now
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }
















// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Menu,
//   X,
//   Camera,
//   Film,
//   Music,
//   Users,
//   Phone,
//   ImageIcon,
//   ChevronDown,
//   Video,
//   CameraOff,
//   Clapperboard,
//   Briefcase,
// } from "lucide-react"

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { name: "Gallery", href: "#gallery", icon: ImageIcon },
//     { name: "Contact", href: "#contact", icon: Phone },
//   ]

//   const services = [
//     { name: "Film Shooting", href: "#film-shooting", icon: Camera },
//     { name: "Short Films", href: "#short-films", icon: Clapperboard },
//     { name: "Wedding films & Pre/Post wedding Shoot", href: "#wedding-packages", icon: Users },
//     { name: "Commercial Product Shoot", href: "#commercial-shoot", icon: CameraOff },
//     { name: "Music Videos", href: "#music-videos", icon: Music },
//     { name: "Photography and Event Coverage", href: "#photography", icon: ImageIcon },
//     { name: "Ad Films", href: "#ad-films", icon: Film },
//     { name: "Corporate Films and Documentaries", href: "#corporate-films", icon: Briefcase },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className={`relative flex items-center justify-between transition-all duration-300 ${
//             isScrolled ? "h-16" : "h-20"
//           }`}
//         >
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <Image
//               src="/logo.jpg"
//               alt="HIG Production House"
//               width={isScrolled ? 120 : 160}
//               height={isScrolled ? 40 : 60}
//               className={`object-contain transition-all duration-300 ${isScrolled ? "h-10" : "h-16"} w-auto`}
//               priority
//             />
//             <span
//               className={`${
//                 isScrolled ? "text-foreground" : "text-white"
//               } hidden sm:block font-semibold tracking-wide`}
//             >
//               HIG Production House
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
//             <div className="flex items-center">
//               {/* Home */}
//               <Link
//                 href="/"
//                 className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
//                   isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Home
//               </Link>

//               {/* Services Mega Menu */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setServicesOpen(true)}
//                 onMouseLeave={() => setServicesOpen(false)}
//               >
//                 <Link
//                   href="#services"
//                   className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200 ${
//                     isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                   }`}
//                 >
//                   <Film className="w-4 h-4" />
//                   <span>Services</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </Link>

//                 {/* Mega menu panel */}
//                 <div
//                   className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] max-w-[90vw] bg-background border border-border rounded-lg shadow-xl transition-all duration-200 ${
//                     servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
//                   }`}
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
//                     {services.map((service) => (
//                       <Link
//                         key={service.name}
//                         href={service.href}
//                         className="group block rounded-md overflow-hidden border border-border hover:border-primary/50 transition-colors"
//                       >
//                         <div className="relative h-32 flex items-end">
//                           <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
//                           <div className="relative p-3 flex items-center gap-2">
//                             <service.icon className="w-4 h-4 text-primary" />
//                             <span className="font-medium">{service.name}</span>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Gallery + Contact */}
//               <div className="flex items-center gap-2 ml-6">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
//                       isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Book Now Button */}
//           <div className="hidden md:flex items-center space-x-2">
//             <Button asChild className="bg-primary hover:bg-primary/90">
//               <Link href="/booking">Book Now</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className={`transition-colors duration-200 ${
//                 isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//               }`}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
//             {/* Home */}
//             <Link
//               href="/"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <Camera className="w-4 h-4" />
//               <span>Home</span>
//             </Link>

//             {/* Services with collapsible submenu */}
//             <div className="px-3 py-2">
//               <button
//                 onClick={() => setServicesOpen((v) => !v)}
//                 className="w-full flex items-center justify-between text-left text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <span className="flex items-center gap-2">
//                   <Film className="w-4 h-4" />
//                   Services
//                 </span>
//                 <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
//               </button>
//               {servicesOpen && (
//                 <div className="mt-2 space-y-1">
//                   {services.map((service) => (
//                     <Link
//                       key={service.name}
//                       href={service.href}
//                       className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Gallery */}
//             <Link
//               href="#gallery"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <ImageIcon className="w-4 h-4" />
//               <span>Gallery</span>
//             </Link>

//             {/* Contact */}
//             <Link
//               href="#contact"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <Phone className="w-4 h-4" />
//               <span>Contact</span>
//             </Link>

//             <div className="px-3 py-2">
//               <Button asChild className="w-full bg-primary hover:bg-primary/90">
//                 <Link href="/booking" onClick={() => setIsOpen(false)}>
//                   Book Now
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

















// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import {
//   Menu,
//   X,
//   Camera,
//   Film,
//   Music,
//   Users,
//   Phone,
//   ImageIcon,
//   ChevronDown,
//   CameraOff,
//   Clapperboard,
//   Briefcase,
// } from "lucide-react"

// export function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [servicesOpen, setServicesOpen] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const navItems = [
//     { name: "Gallery", href: "/gallery", icon: ImageIcon },
//     { name: "Contact", href: "#contact", icon: Phone },
//   ]

//   const services = [
//     { name: "Film Shooting", href: "/services/film-shooting", icon: Camera },
//     { name: "Short Films", href: "/services/short-films", icon: Clapperboard },
//     { name: "Wedding films & Pre/Post wedding Shoot", href: "/services/wedding-films", icon: Users },
//     { name: "Commercial Product Shoot", href: "/services/commercial-shoot", icon: CameraOff },
//     { name: "Music Videos", href: "/services/music-videos", icon: Music },
//     { name: "Photography and Event Coverage", href: "/services/photography", icon: ImageIcon },
//     { name: "Ad Films", href: "/services/ad-films", icon: Film },
//     { name: "Corporate Films and Documentaries", href: "/services/corporate-films", icon: Briefcase },
//   ]

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div
//           className={`relative flex items-center justify-between transition-all duration-300 ${
//             isScrolled ? "h-16" : "h-20"
//           }`}
//         >
//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3">
//             <Image
//               src="/logo.jpg"
//               alt="HIG Production House"
//               width={isScrolled ? 120 : 160}
//               height={isScrolled ? 40 : 60}
//               className={`object-contain transition-all duration-300 ${isScrolled ? "h-10" : "h-16"} w-auto`}
//               priority
//             />
//             <span
//               className={`${
//                 isScrolled ? "text-foreground" : "text-white"
//               } hidden sm:block font-semibold tracking-wide`}
//             >
//               HIG Production House
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
//             <div className="flex items-center">
//               {/* Home */}
//               <Link
//                 href="/"
//                 className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
//                   isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                 }`}
//               >
//                 Home
//               </Link>

//               {/* Services Mega Menu */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setServicesOpen(true)}
//                 onMouseLeave={() => setServicesOpen(false)}
//               >
//                 <Link
//                   href="#services"
//                   className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200 ${
//                     isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                   }`}
//                 >
//                   <Film className="w-4 h-4" />
//                   <span>Services</span>
//                   <ChevronDown className="w-4 h-4" />
//                 </Link>

//                 {/* Mega menu panel */}
//                 <div
//                   className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] max-w-[90vw] bg-background border border-border rounded-lg shadow-xl transition-all duration-200 ${
//                     servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
//                   }`}
//                 >
//                   <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
//                     {services.map((service) => (
//                       <Link
//                         key={service.name}
//                         href={service.href}
//                         className="group block rounded-md overflow-hidden border border-border hover:border-primary/50 transition-colors"
//                       >
//                         <div className="relative h-32 flex items-end">
//                           <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
//                           <div className="relative p-3 flex items-center gap-2">
//                             <service.icon className="w-4 h-4 text-primary" />
//                             <span className="font-medium">{service.name}</span>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Gallery + Contact */}
//               <div className="flex items-center gap-2 ml-6">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     href={item.href}
//                     className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
//                       isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Book Now Button */}
//           <div className="hidden md:flex items-center space-x-2">
//             <Button asChild className="bg-primary hover:bg-primary/90">
//               <Link href="/booking">Book Now</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className={`transition-colors duration-200 ${
//                 isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
//               }`}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
//             {/* Home */}
//             <Link
//               href="/"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <Camera className="w-4 h-4" />
//               <span>Home</span>
//             </Link>

//             {/* Services with collapsible submenu */}
//             <div className="px-3 py-2">
//               <button
//                 onClick={() => setServicesOpen((v) => !v)}
//                 className="w-full flex items-center justify-between text-left text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <span className="flex items-center gap-2">
//                   <Film className="w-4 h-4" />
//                   Services
//                 </span>
//                 <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
//               </button>
//               {servicesOpen && (
//                 <div className="mt-2 space-y-1">
//                   {services.map((service) => (
//                     <Link
//                       key={service.name}
//                       href={service.href}
//                       className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       {service.name}
//                     </Link>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Gallery */}
//             <Link
//               href="/gallery"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <ImageIcon className="w-4 h-4" />
//               <span>Gallery</span>
//             </Link>

//             {/* Contact */}
//             <Link
//               href="#contact"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               <Phone className="w-4 h-4" />
//               <span>Contact</span>
//             </Link>

//             <div className="px-3 py-2">
//               <Button asChild className="w-full bg-primary hover:bg-primary/90">
//                 <Link href="/booking" onClick={() => setIsOpen(false)}>
//                   Book Now
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }








"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  Camera,
  Film,
  Music,
  Users,
  Phone,
  ImageIcon,
  ChevronDown,
  CameraOff,
  Clapperboard,
  Briefcase,
} from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About Us", href: "/about", icon: Users },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "Contact", href: "#contact", icon: Phone },
  ]

  const services = [
    { name: "Film Shooting", href: "/services/film-shooting", icon: Camera },
    { name: "Short Films", href: "/services/short-films", icon: Clapperboard },
    { name: "Wedding films & Pre/Post wedding Shoot", href: "/services/wedding-films", icon: Users },
    { name: "Commercial Product Shoot", href: "/services/commercial-shoot", icon: CameraOff },
    { name: "Music Videos", href: "/services/music-videos", icon: Music },
    { name: "Photography and Event Coverage", href: "/services/photography", icon: ImageIcon },
    { name: "Ad Films", href: "/services/ad-films", icon: Film },
    { name: "Corporate Films and Documentaries", href: "/services/corporate-films", icon: Briefcase },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`relative flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="HIG Production House"
              width={isScrolled ? 120 : 160}
              height={isScrolled ? 40 : 60}
              className={`object-contain transition-all duration-300 ${isScrolled ? "h-10" : "h-16"} w-auto`}
              priority
            />
            <span
              className={`${
                isScrolled ? "text-foreground" : "text-white"
              } hidden sm:block font-semibold tracking-wide`}
            >
              HIG Production House
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center">
              {/* Home */}
              <Link
                href="/"
                className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
                  isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
                }`}
              >
                Home
              </Link>

              {/* Services Mega Menu */}
              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href="#services"
                  className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-colors duration-200 ${
                    isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
                  }`}
                >
                  <Film className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </Link>

                {/* Mega menu panel */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[900px] max-w-[90vw] bg-background border border-border rounded-lg shadow-xl transition-all duration-200 ${
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-4">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="group block rounded-md overflow-hidden border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="relative h-32 flex items-end">
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                          <div className="relative p-3 flex items-center gap-2">
                            <service.icon className="w-4 h-4 text-primary" />
                            <span className="font-medium">{service.name}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Other nav items: About Us, Gallery, Contact */}
              <div className="flex items-center gap-2 ml-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`h-10 px-3 rounded-md text-sm font-medium inline-flex items-center transition-colors duration-200 ${
                      isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Book Now Button */}
          <div className="hidden md:flex items-center space-x-2">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-200 ${
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-white/90 hover:text-white"
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            {/* Home */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Camera className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {/* About Us */}
            <Link
              href="/about"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Users className="w-4 h-4" />
              <span>About Us</span>
            </Link>

            {/* Services with collapsible submenu */}
            <div className="px-3 py-2">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="w-full flex items-center justify-between text-left text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Film className="w-4 h-4" />
                  Services
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Gallery */}
            <Link
              href="/gallery"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Gallery</span>
            </Link>

            {/* Contact */}
            <Link
              href="#contact"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>

            <div className="px-3 py-2">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link href="/booking" onClick={() => setIsOpen(false)}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
