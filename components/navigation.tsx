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
//     { name: "About Us", href: "/about", icon: Users },
//     { name: "Gallery", href: "/gallery", icon: ImageIcon },
//     { name: "Contact", href: "#contact", icon: Phone },
//   ]

//   // All original services preserved, images added
//   const services = [
//     { name: "Film Shooting", href: "/services/film-shooting", image: "/Film shooting.jpg" },
//     { name: "Short Films", href: "/services/short-films", image: "/short-films.jpg" }, // keep original icon name for reference
//     { name: "Wedding Films & Pre/Post Wedding Shoot", href: "/services/wedding-films", image: "/Weeding films Pre Post wedding Shoot.jpg" },
//     { name: "Commercial Product Shoot", href: "/services/commercial-shoot", image: "/Commercial Product shoot.jpg" },
//     { name: "Music Videos", href: "/services/music-videos", image: "/music videos.jpg" },
//     { name: "Photography and Event Coverage", href: "/services/photography", image: "/event coverage.jpg" },
//     { name: "Ad Films", href: "/services/ad-films", image: "/ad-films.jpg" },
//     { name: "Corporate Films and Documentaries", href: "/services/corporate-films", image: "/corporate film and documentaries.jpg" },
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
//                           {/* Service Image */}
//                           <Image
//                             src={service.image}
//                             alt={service.name}
//                             fill
//                             className="object-cover"
//                           />
//                           <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
//                           <div className="relative p-3">
//                             <span className="font-medium text-white">{service.name}</span>
//                           </div>
//                         </div>
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* Other nav items: About Us, Gallery, Contact */}
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
//               Home
//             </Link>

//             {/* About Us */}
//             <Link
//               href="/about"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               About Us
//             </Link>

//             {/* Services with collapsible submenu */}
//             <div className="px-3 py-2">
//               <button
//                 onClick={() => setServicesOpen((v) => !v)}
//                 className="w-full flex items-center justify-between text-left text-muted-foreground hover:text-primary transition-colors"
//               >
//                 <span>Services</span>
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
//               Gallery
//             </Link>

//             {/* Contact */}
//             <Link
//               href="#contact"
//               className="flex items-center space-x-2 text-muted-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
//               onClick={() => setIsOpen(false)}
//             >
//               Contact
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

// import { useState, useEffect, useRef, useCallback, useMemo } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   ChevronDown,
//   Users,
//   Phone,
//   ImageIcon,
//   Camera,
//   Film,
//   Music,
//   Clapperboard,
//   Briefcase,
//   Facebook,
//   Linkedin,
//   Instagram,
// } from "lucide-react"

// // Placeholder for BookNowForm
// const BookNowForm = ({ compact = false, showHeader = true }: { compact?: boolean; showHeader?: boolean }) => (
//   <div className="space-y-4">
//     {showHeader && <h2 className="text-xl font-semibold">Book Now</h2>}
//     <p>Form content for booking goes here.</p>
//     {/* Implement your booking form here */}
//   </div>
// )

// // Pinterest Icon Component
// const PinterestIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12c1.018 0 2.006-.133 2.939-.379-1.339-.723-2.028-2.168-2.028-2.168s-.277-1.104-.277-2.615c0-1.53.874-2.676 1.96-2.676.926 0 1.375.695 1.375 1.528 0 .93-.593 2.322-.9 3.616-.256 1.083.544 1.966 1.613 1.966 1.938 0 3.432-2.043 3.432-4.991 0-2.612-1.878-4.439-4.555-4.439-3.103 0-4.924 2.326-4.924 4.732 0 .937.361 1.943.814 2.486.089.108.102.202.075.313-.08.336-.258 1.035-.293 1.181-.046.192-.149.233-.344.14-1.295-.603-2.106-2.494-2.106-4.016 0-3.273 2.378-6.278 6.854-6.278 3.599 0 6.398 2.565 6.398 5.996 0 3.578-2.255 6.456-5.386 6.456-1.051 0-2.041-.547-2.379-1.201 0 0-.52 1.982-.647 2.469-.234.897-.866 2.024-1.289 2.708.97.299 2 .458 3.063.458 6.626 0 12-5.374 12-12S18.626 0 12 0z" />
//   </svg>
// )

// // Types
// type DropdownItem = {
//   name: string
//   href: string
//   image?: string
//   description?: string
// }

// type NavigationItem = {
//   name: string
//   icon?: any
//   href?: string
//   dropdown?: DropdownItem[]
// }

// type SocialLink = {
//   name: string
//   icon: any
//   url: string
// }

// export function Navigation() {
//   // State management
//   const [isOpen, setIsOpen] = useState(false)
//   const [darkMode, setDarkMode] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [isBookNowOpen, setIsBookNowOpen] = useState(false)
//   const menuCloseTimer = useRef<NodeJS.Timeout | null>(null)

//   // Memoized navigation items (no Home)
//   const navigationItems: NavigationItem[] = useMemo(
//     () => [
//       { name: "About Us", icon: Users, href: "/about" },
//       {
//         name: "Services",
//         icon: Film,
//         dropdown: [
//           { name: "Film Shooting", href: "/services/film-shooting", image: "/Film shooting.jpg", description: "Professional film shooting services" },
//           { name: "Short Films", href: "/services/short-films", image: "/short-films.jpg", description: "Creative short film production" },
//           { name: "Wedding Films & Pre/Post Wedding Shoot", href: "/services/wedding-films", image: "/Weeding films Pre Post wedding Shoot.jpg", description: "Memorable wedding films" },
//           { name: "Commercial Product Shoot", href: "/services/commercial-shoot", image: "/Commercial Product shoot.jpg", description: "High-quality product photography" },
//           { name: "Music Videos", href: "/services/music-videos", image: "/music videos.jpg", description: "Dynamic music video production" },
//           { name: "Photography and Event Coverage", href: "/services/photography", image: "/event coverage.jpg", description: "Comprehensive event photography" },
//           { name: "Ad Films", href: "/services/ad-films", image: "/ad-films.jpg", description: "Engaging advertisement films" },
//           { name: "Corporate Films and Documentaries", href: "/services/corporate-films", image: "/corporate film and documentaries.jpg", description: "Professional corporate films" },
//         ],
//       },
//       { name: "Gallery", icon: ImageIcon, href: "/gallery" },
//       { name: "Contact", icon: Phone, href: "#contact" },
//     ],
//     [],
//   )

//   // Memoized social links
//   const socialLinks: SocialLink[] = useMemo(
//     () => [
//       { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/higproduction" },
//       { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/higproduction" },
//       { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/higproduction" },
//       { name: "Pinterest", icon: PinterestIcon, url: "https://www.pinterest.com/higproduction" },
//     ],
//     [],
//   )

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (menuCloseTimer.current) {
//         clearTimeout(menuCloseTimer.current)
//       }
//     }
//   }, [])

//   // Memoized handlers
//   const toggleDarkMode = useCallback(() => {
//     setDarkMode((prev) => {
//       const newMode = !prev
//       document.documentElement.classList.toggle("dark", newMode)
//       return newMode
//     })
//   }, [])

//   const handleMenuEnter = useCallback((menuName: string) => {
//     if (menuCloseTimer.current) {
//       clearTimeout(menuCloseTimer.current)
//       menuCloseTimer.current = null
//     }
//     setActiveDropdown(menuName)
//   }, [])

//   const handleMenuLeave = useCallback(() => {
//     menuCloseTimer.current = setTimeout(() => {
//       setActiveDropdown(null)
//     }, 150)
//   }, [])

//   const toggleMobileMenu = useCallback(() => {
//     setIsOpen((prev) => !prev)
//   }, [])

//   const closeMobileMenu = useCallback(() => {
//     setIsOpen(false)
//   }, [])

//   const handleSocialClick = useCallback((url: string) => {
//     window.open(url, "_blank", "noopener,noreferrer")
//   }, [])

//   // Helper functions
//   const isActivePath = useCallback(
//     (path: string) => {
//       const currentPath = typeof window !== "undefined" ? window.location.pathname : ""
//       return currentPath === path
//     },
//     [],
//   )

//   // Dropdown Content Component
//   const DropdownContent = useCallback(
//     ({ item, isTransparent }: { item: NavigationItem; isTransparent: boolean }) => {
//       if (!item.dropdown) return null

//       const baseClasses = isTransparent
//         ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-white/20"
//         : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"

//       const topPosition = isTransparent ? "73px" : "65px"

//       return (
//         <div
//           className={`fixed left-0 right-0 ${baseClasses} border-b shadow-xl z-40`}
//           style={{ top: topPosition, width: "100vw" }}
//           onMouseEnter={() => handleMenuEnter(item.name)}
//           onMouseLeave={handleMenuLeave}
//         >
//           <div className="container mx-auto px-4 py-6">
//             <div className="max-w-6xl mx-auto">
//               <div className="flex justify-center flex-wrap gap-4">
//                 {item.dropdown.map((dropdownItem) => (
//                   <Link
//                     key={`${item.name}-${dropdownItem.name}`}
//                     href={dropdownItem.href}
//                     className="flex flex-col items-center gap-3 p-4 min-w-[200px] cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-blue-700 group"
//                   >
//                     <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm group-hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
//                       <Image
//                         src={dropdownItem.image || "/placeholder.svg?height=40&width=40"}
//                         alt={dropdownItem.name}
//                         width={80}
//                         height={80}
//                         className="w-full h-full object-contain"
//                         priority={false}
//                       />
//                     </div>
//                     <div className="text-center">
//                       <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
//                         {dropdownItem.name}
//                       </div>
//                       {dropdownItem.description && (
//                         <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mt-1 transition-colors duration-200">
//                           {dropdownItem.description}
//                         </div>
//                       )}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     [handleMenuEnter, handleMenuLeave],
//   )

//   // Social Icons Component
//   const SocialIcons = useCallback(
//     ({ className }: { className: string }) => (
//       <div className={className}>
//         {socialLinks.map((social: SocialLink) => {
//           const IconComponent = social.icon
//           return (
//             <Button
//               key={social.name}
//               variant="ghost"
//               size="icon"
//               className="w-8 h-8 transition-all duration-200"
//               onClick={() => handleSocialClick(social.url)}
//               aria-label={`Visit our ${social.name} page`}
//             >
//               <IconComponent />
//             </Button>
//           )
//         })}
//       </div>
//     ),
//     [socialLinks, handleSocialClick],
//   )

//   // Mobile Menu Component
//   const MobileMenu = useCallback(() => {
//     if (!isOpen) return null

//     return (
//       <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 z-50">
//         <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 rounded-2xl shadow-xl overflow-hidden">
//           <div className="px-4 pt-4 pb-4 space-y-2 max-h-[80vh] overflow-y-auto">
//             {/* Home (Logo equivalent) */}
//             <Link
//               href="/"
//               className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
//                 isActivePath("/")
//                   ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
//                   : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               onClick={closeMobileMenu}
//             >
//               <Image
//                 src="/logo.png"
//                 alt="HIG Production House Logo"
//                 width={24}
//                 height={16}
//                 className="w-6 h-4 object-contain"
//                 priority={false}
//               />
//               Home
//             </Link>
//             {navigationItems.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <div className="space-y-1">
//                     <div className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//                       <item.icon className="w-4 h-4" />
//                       {item.name}
//                     </div>
//                     <div className="flex overflow-x-auto pb-2 gap-3 px-3 py-3">
//                       {item.dropdown.map((dropdownItem) => (
//                         <Link
//                           key={dropdownItem.name}
//                           href={dropdownItem.href}
//                           className="flex flex-col items-center gap-2 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-700 flex-shrink-0 min-w-[140px]"
//                           onClick={closeMobileMenu}
//                         >
//                           <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm flex items-center justify-center">
//                             <Image
//                               src={dropdownItem.image || "/placeholder.svg?height=32&width=32"}
//                               alt={dropdownItem.name}
//                               width={64}
//                               height={64}
//                               className="w-full h-full object-contain"
//                               priority={false}
//                             />
//                           </div>
//                           <div className="text-center">
//                             <div className="text-xs font-medium text-gray-900 dark:text-gray-100">
//                               {dropdownItem.name}
//                             </div>
//                             {dropdownItem.description && (
//                               <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 max-w-[120px] whitespace-normal leading-tight">
//                                 {dropdownItem.description}
//                               </div>
//                             )}
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href!}
//                     className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
//                       isActivePath(item.href!)
//                         ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
//                         : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//                     } ${underlineEffect} after:bg-blue-600 dark:after:bg-blue-400 ${
//                       isActivePath(item.href!) ? "after:w-full" : "after:w-0 hover:after:w-full"
//                     }`}
//                     onClick={closeMobileMenu}
//                   >
//                     {item.icon && <item.icon className="w-4 h-4" />}
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             {/* Mobile Footer */}
//             <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 space-y-3">
//               <div className="flex items-center justify-center space-x-3">
//                 {socialLinks.map((social: SocialLink) => {
//                   const IconComponent = social.icon
//                   return (
//                     <Button
//                       key={social.name}
//                       variant="ghost"
//                       size="icon"
//                       className="w-9 h-9 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//                       onClick={() => handleSocialClick(social.url)}
//                       aria-label={`Visit our ${social.name} page`}
//                     >
//                       <IconComponent />
//                     </Button>
//                   )
//                 })}
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Button
//                   variant="ghost"
//                   onClick={toggleDarkMode}
//                   className="flex-1 justify-start text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//                 >
//                   {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
//                   {darkMode ? "Light Mode" : "Dark Mode"}
//                 </Button>
//                 <Button
//                   className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200"
//                   onClick={() => {
//                     setIsBookNowOpen(true)
//                     closeMobileMenu()
//                   }}
//                 >
//                   Book Now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }, [isOpen, darkMode, isActivePath, closeMobileMenu, toggleDarkMode, handleSocialClick, navigationItems, socialLinks])

//   // Main component logic
//   const isHomePage = typeof window !== "undefined" ? window.location.pathname === "/" : true
//   const isTransparent = isHomePage && !scrolled && !activeDropdown
//   const logoRestricted = activeDropdown !== null
//   const underlineEffect =
//     "relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:transition-all after:duration-300"

//   return (
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
//         {isTransparent ? (
//           // Transparent navbar (all elements centered)
//           <div className="w-full px-4 py-2">
//             <div className="container mx-auto">
//               <div className="flex items-center justify-center gap-4">
//                 {/* Logo (no underline) */}
//                 <Link
//                   href="/"
//                   className="flex items-center"
//                   onClick={closeMobileMenu}
//                 >
//                   <Image
//                     src="/logo.png"
//                     alt="HIG Production House Logo"
//                     width={logoRestricted ? 80 : 112}
//                     height={logoRestricted ? 56 : 80}
//                     className={`object-contain transition-all duration-300 ${
//                       logoRestricted ? "w-20 h-14" : "w-28 h-20 sm:w-32 sm:h-24"
//                     }`}
//                     priority
//                   />
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex items-center space-x-4">
//                   {navigationItems.map((item) => (
//                     <div
//                       key={item.name}
//                       className="relative group"
//                       onMouseEnter={() => item.dropdown && handleMenuEnter(item.name)}
//                       onMouseLeave={handleMenuLeave}
//                     >
//                       {item.dropdown ? (
//                         <>
//                           <Button
//                             variant="ghost"
//                             className={`flex items-center text-white hover:text-black space-x-1 px-3 py-2 transition-colors duration-200 hover:bg-transparent ${underlineEffect} after:bg-blue-600 group-hover:after:w-full`}
//                             onMouseEnter={() => handleMenuEnter(item.name)}
//                           >
//                             {item.icon && (
//                               <item.icon
//                                 className={`w-4 h-4 mr-1 group-hover:text-black dark:group-hover:text-white transition-colors duration-200`}
//                               />
//                             )}
//                             <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
//                               {item.name}
//                             </span>
//                             <ChevronDown className="w-4 h-4 ml-1" />
//                           </Button>
//                           {activeDropdown === item.name && <DropdownContent item={item} isTransparent={true} />}
//                         </>
//                       ) : (
//                         <Link
//                           href={item.href!}
//                           className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 text-white ${underlineEffect} after:bg-white ${
//                             isActivePath(item.href!) ? "after:w-full" : "after:w-0 group-hover:after:w-full"
//                           }`}
//                         >
//                           {item.icon && <item.icon className="w-4 h-4 mr-1" />}
//                           {item.name}
//                         </Link>
//                       )}
//                     </div>
//                   ))}
//                 </nav>

//                 {/* Right Side Actions */}
//                 <div className="flex items-center space-x-2">
//                   <SocialIcons className="hidden md:flex items-center space-x-2 text-white/80 hover:text-white" />

//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={toggleDarkMode}
//                     className="hidden lg:flex w-8 h-8 text-white hover:text-white/80 transition-all duration-200"
//                     aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//                   >
//                     {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//                   </Button>

//                   <Button
//                     onClick={() => setIsBookNowOpen(true)}
//                     className="hidden lg:flex bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-full border border-white/30 transition-all duration-200 text-sm"
//                   >
//                     Book Now
//                   </Button>

//                   {/* Mobile Menu Button */}
//                   <div className="lg:hidden">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={toggleMobileMenu}
//                       className="w-8 h-8 text-white hover:text-white/80 transition-all duration-200"
//                       aria-label="Toggle mobile menu"
//                     >
//                       {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Solid navbar (spread layout, with title text)
//           <div className="w-full bg-white dark:bg-gray-800 shadow-lg">
//             <div className="container mx-auto px-4 py-2">
//               <div className="flex items-center justify-between h-16">
//                 {/* Logo (no underline) */}
//                 <Link
//                   href="/"
//                   className="flex items-center pl-2 sm:pl-4"
//                   onClick={closeMobileMenu}
//                 >
//                   <Image
//                     src="/logo.png"
//                     alt="HIG Production House Logo"
//                     width={logoRestricted ? 80 : 112}
//                     height={logoRestricted ? 56 : 80}
//                     className={`object-contain transition-all duration-300 ${
//                       logoRestricted ? "w-20 h-14 -my-1" : "w-28 h-10 -my-1"
//                     }`}
//                     priority
//                   />
//                   <span className="hidden sm:block text-gray-900 dark:text-gray-100 font-semibold tracking-wide ml-3 transform transition-all duration-300 translate-x-0">
//                     HIG Production House
//                   </span>
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
//                   {navigationItems.map((item) => (
//                     <div
//                       key={item.name}
//                       className="relative group"
//                       onMouseEnter={() => item.dropdown && handleMenuEnter(item.name)}
//                       onMouseLeave={handleMenuLeave}
//                     >
//                       {item.dropdown ? (
//                         <>
//                           <Button
//                             variant="ghost"
//                             className={`flex items-center text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white space-x-1 px-3 xl:px-4 py-2 transition-colors duration-200 hover:bg-transparent dark:hover:bg-transparent ${underlineEffect} after:bg-blue-600 dark:after:bg-blue-400 group-hover:after:w-full`}
//                             onMouseEnter={() => handleMenuEnter(item.name)}
//                           >
//                             {item.icon && (
//                               <item.icon
//                                 className={`w-4 h-4 mr-1 group-hover:text-black dark:group-hover:text-white transition-colors duration-200`}
//                               />
//                             )}
//                             <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
//                               {item.name}
//                             </span>
//                             <ChevronDown className="w-4 h-4 ml-1" />
//                           </Button>
//                           {activeDropdown === item.name && <DropdownContent item={item} isTransparent={false} />}
//                         </>
//                       ) : (
//                         <Link
//                           href={item.href!}
//                           className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-200 ${underlineEffect} after:bg-blue-600 dark:after:bg-blue-400 ${
//                             isActivePath(item.href!)
//                               ? "text-blue-600 dark:text-blue-400 after:w-full"
//                               : "text-gray-700 dark:text-gray-200 after:w-0 group-hover:after:w-full"
//                           }`}
//                         >
//                           {item.icon && <item.icon className="w-4 h-4 mr-1" />}
//                           {item.name}
//                         </Link>
//                       )}
//                     </div>
//                   ))}
//                 </nav>

//                 {/* Right Side Actions */}
//                 <div className="flex items-center space-x-2 sm:space-x-4 pr-2 sm:pr-4">
//                   <SocialIcons className="hidden md:flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />

//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={toggleDarkMode}
//                     className="hidden lg:flex w-8 h-8 sm:w-9 sm:h-9 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
//                     aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//                   >
//                     {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//                   </Button>

//                   <Button
//                     onClick={() => setIsBookNowOpen(true)}
//                     className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-full transition-all duration-200 text-sm"
//                   >
//                     Book Now
//                   </Button>

//                   {/* Mobile Menu Button */}
//                   <div className="lg:hidden">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={toggleMobileMenu}
//                       className="w-8 h-8 sm:w-9 sm:h-9 text-gray-700 dark:text-gray-200"
//                       aria-label="Toggle mobile menu"
//                     >
//                       {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Mobile Menu */}
//         <MobileMenu />

//         {/* Book Now Modal */}
//         <Dialog open={isBookNowOpen} onOpenChange={setIsBookNowOpen}>
//           <DialogContent className="sm:max-w-3xl w-[95vw] max-h-[90vh] p-0 gap-0 border-0 bg-white text-black">
//             <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-red-500 to-purple-500" />
//             <div className="p-4 sm:p-6 overflow-y-auto">
//               <BookNowForm compact showHeader={false} />
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </>
//   )
// }









// "use client"

// import { useState, useEffect, useRef, useCallback, useMemo } from "react"
// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Dialog, DialogContent } from "@/components/ui/dialog"
// import {
//   Menu,
//   X,
//   Sun,
//   Moon,
//   ChevronDown,
//   Users,
//   Phone,
//   ImageIcon,
//   Camera,
//   Film,
//   Music,
//   Clapperboard,
//   Briefcase,
//   Facebook,
//   Linkedin,
//   Instagram,
// } from "lucide-react"

// // Placeholder for BookNowForm
// const BookNowForm = ({ compact = false, showHeader = true }: { compact?: boolean; showHeader?: boolean }) => (
//   <div className="space-y-4">
//     {showHeader && <h2 className="text-xl font-semibold">Book Now</h2>}
//     <p>Form content for booking goes here.</p>
//     {/* Implement your booking form here */}
//   </div>
// )

// // Pinterest Icon Component
// const PinterestIcon = () => (
//   <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
//     <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12c1.018 0 2.006-.133 2.939-.379-1.339-.723-2.028-2.168-2.028-2.168s-.277-1.104-.277-2.615c0-1.53.874-2.676 1.96-2.676.926 0 1.375.695 1.375 1.528 0 .93-.593 2.322-.9 3.616-.256 1.083.544 1.966 1.613 1.966 1.938 0 3.432-2.043 3.432-4.991 0-2.612-1.878-4.439-4.555-4.439-3.103 0-4.924 2.326-4.924 4.732 0 .937.361 1.943.814 2.486.089.108.102.202.075.313-.08.336-.258 1.035-.293 1.181-.046.192-.149.233-.344.14-1.295-.603-2.106-2.494-2.106-4.016 0-3.273 2.378-6.278 6.854-6.278 3.599 0 6.398 2.565 6.398 5.996 0 3.578-2.255 6.456-5.386 6.456-1.051 0-2.041-.547-2.379-1.201 0 0-.52 1.982-.647 2.469-.234.897-.866 2.024-1.289 2.708.97.299 2 .458 3.063.458 6.626 0 12-5.374 12-12S18.626 0 12 0z" />
//   </svg>
// )

// // Types
// type DropdownItem = {
//   name: string
//   href: string
//   image?: string
//   description?: string
// }

// type NavigationItem = {
//   name: string
//   icon?: any
//   href?: string
//   dropdown?: DropdownItem[]
// }

// type SocialLink = {
//   name: string
//   icon: any
//   url: string
// }

// export function Navigation() {
//   // State management
//   const [isOpen, setIsOpen] = useState(false)
//   const [darkMode, setDarkMode] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
//   const [isBookNowOpen, setIsBookNowOpen] = useState(false)
//   const menuCloseTimer = useRef<NodeJS.Timeout | null>(null)

//   // Memoized navigation items (no Home)
//   const navigationItems: NavigationItem[] = useMemo(
//     () => [
//       { name: "About Us", icon: Users, href: "/about" },
//       {
//         name: "Services",
//         icon: Film,
//         dropdown: [
//           { name: "Film Shooting", href: "/services/film-shooting", image: "/Film shooting.jpg", description: "Professional film shooting services" },
//           { name: "Short Films", href: "/services/short-films", image: "/short-films.jpg", description: "Creative short film production" },
//           { name: "Wedding Films & Pre/Post Wedding Shoot", href: "/services/wedding-films", image: "/Weeding films Pre Post wedding Shoot.jpg", description: "Memorable wedding films" },
//           { name: "Commercial Product Shoot", href: "/services/commercial-shoot", image: "/Commercial Product shoot.jpg", description: "High-quality product photography" },
//           { name: "Music Videos", href: "/services/music-videos", image: "/music videos.jpg", description: "Dynamic music video production" },
//           { name: "Photography and Event Coverage", href: "/services/photography", image: "/event coverage.jpg", description: "Comprehensive event photography" },
//           { name: "Ad Films", href: "/services/ad-films", image: "/ad-films.jpg", description: "Engaging advertisement films" },
//           { name: "Corporate Films and Documentaries", href: "/services/corporate-films", image: "/corporate film and documentaries.jpg", description: "Professional corporate films" },
//         ],
//       },
//       { name: "Gallery", icon: ImageIcon, href: "/gallery" },
//       { name: "Contact", icon: Phone, href: "#contact" },
//     ],
//     [],
//   )

//   // Memoized social links
//   const socialLinks: SocialLink[] = useMemo(
//     () => [
//       { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/higproduction" },
//       { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/higproduction" },
//       { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/higproduction" },
//       { name: "Pinterest", icon: PinterestIcon, url: "https://www.pinterest.com/higproduction" },
//     ],
//     [],
//   )

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50)
//     }
//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   // Cleanup on unmount
//   useEffect(() => {
//     return () => {
//       if (menuCloseTimer.current) {
//         clearTimeout(menuCloseTimer.current)
//       }
//     }
//   }, [])

//   // Memoized handlers
//   const toggleDarkMode = useCallback(() => {
//     setDarkMode((prev) => {
//       const newMode = !prev
//       document.documentElement.classList.toggle("dark", newMode)
//       return newMode
//     })
//   }, [])

//   const handleMenuEnter = useCallback((menuName: string) => {
//     if (menuCloseTimer.current) {
//       clearTimeout(menuCloseTimer.current)
//       menuCloseTimer.current = null
//     }
//     setActiveDropdown(menuName)
//   }, [])

//   const handleMenuLeave = useCallback(() => {
//     menuCloseTimer.current = setTimeout(() => {
//       setActiveDropdown(null)
//     }, 150)
//   }, [])

//   const toggleMobileMenu = useCallback(() => {
//     setIsOpen((prev) => !prev)
//   }, [])

//   const closeMobileMenu = useCallback(() => {
//     setIsOpen(false)
//   }, [])

//   const handleSocialClick = useCallback((url: string) => {
//     window.open(url, "_blank", "noopener,noreferrer")
//   }, [])

//   // Helper functions
//   const isActivePath = useCallback(
//     (path: string) => {
//       const currentPath = typeof window !== "undefined" ? window.location.pathname : ""
//       return currentPath === path
//     },
//     [],
//   )

//   // Dropdown Content Component
//   const DropdownContent = useCallback(
//     ({ item, isTransparent }: { item: NavigationItem; isTransparent: boolean }) => {
//       if (!item.dropdown) return null

//       const baseClasses = isTransparent
//         ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-white/20"
//         : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"

//       const topPosition = isTransparent ? "80px" : "65px"

//       return (
//         <div
//           className={`fixed left-0 right-0 ${baseClasses} border-b shadow-xl z-40`}
//           style={{ top: topPosition, width: "100vw" }}
//           onMouseEnter={() => handleMenuEnter(item.name)}
//           onMouseLeave={handleMenuLeave}
//         >
//           <div className="container mx-auto px-4 py-6">
//             <div className="max-w-6xl mx-auto">
//               <div className="flex justify-center flex-wrap gap-4">
//                 {item.dropdown.map((dropdownItem) => (
//                   <Link
//                     key={`${item.name}-${dropdownItem.name}`}
//                     href={dropdownItem.href}
//                     className="flex flex-col items-center gap-3 p-4 min-w-[200px] cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-lg transition-all duration-200 border border-transparent hover:border-blue-200 dark:hover:border-blue-700 group"
//                   >
//                     <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm group-hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
//                       <Image
//                         src={dropdownItem.image || "/placeholder.svg?height=40&width=40"}
//                         alt={dropdownItem.name}
//                         width={80}
//                         height={80}
//                         className="w-full h-full object-contain"
//                         priority={false}
//                       />
//                     </div>
//                     <div className="text-center">
//                       <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
//                         {dropdownItem.name}
//                       </div>
//                       {dropdownItem.description && (
//                         <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mt-1 transition-colors duration-200">
//                           {dropdownItem.description}
//                         </div>
//                       )}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )
//     },
//     [handleMenuEnter, handleMenuLeave],
//   )

//   // Social Icons Component
//   const SocialIcons = useCallback(
//     ({ className }: { className: string }) => (
//       <div className={className}>
//         {socialLinks.map((social: SocialLink) => {
//           const IconComponent = social.icon
//           return (
//             <Button
//               key={social.name}
//               variant="ghost"
//               size="icon"
//               className="w-8 h-8 transition-all duration-200"
//               onClick={() => handleSocialClick(social.url)}
//               aria-label={`Visit our ${social.name} page`}
//             >
//               <IconComponent />
//             </Button>
//           )
//         })}
//       </div>
//     ),
//     [socialLinks, handleSocialClick],
//   )

//   // Mobile Menu Component
//   const MobileMenu = useCallback(() => {
//     if (!isOpen) return null

//     return (
//       <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 z-50">
//         <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 rounded-2xl shadow-xl overflow-hidden">
//           <div className="px-4 pt-4 pb-4 space-y-2 max-h-[80vh] overflow-y-auto">
//             {/* Home (Logo equivalent) */}
//             <Link
//               href="/"
//               className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
//                 isActivePath("/")
//                   ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
//                   : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//               }`}
//               onClick={closeMobileMenu}
//             >
//               <Image
//                 src="/logo.png"
//                 alt="HIG Production House Logo"
//                 width={24}
//                 height={16}
//                 className="w-6 h-4 object-contain"
//                 priority={false}
//               />
//               Home
//             </Link>
//             {navigationItems.map((item) => (
//               <div key={item.name}>
//                 {item.dropdown ? (
//                   <div className="space-y-1">
//                     <div className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
//                       <item.icon className="w-4 h-4" />
//                       {item.name}
//                     </div>
//                     <div className="flex overflow-x-auto pb-2 gap-3 px-3 py-3">
//                       {item.dropdown.map((dropdownItem) => (
//                         <Link
//                           key={dropdownItem.name}
//                           href={dropdownItem.href}
//                           className="flex flex-col items-center gap-2 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg border border-transparent hover:border-blue-200 dark:hover:border-blue-700 flex-shrink-0 min-w-[140px]"
//                           onClick={closeMobileMenu}
//                         >
//                           <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm flex items-center justify-center">
//                             <Image
//                               src={dropdownItem.image || "/placeholder.svg?height=32&width=32"}
//                               alt={dropdownItem.name}
//                               width={64}
//                               height={64}
//                               className="w-full h-full object-contain"
//                               priority={false}
//                             />
//                           </div>
//                           <div className="text-center">
//                             <div className="text-xs font-medium text-gray-900 dark:text-gray-100">
//                               {dropdownItem.name}
//                             </div>
//                             {dropdownItem.description && (
//                               <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 max-w-[120px] whitespace-normal leading-tight">
//                                 {dropdownItem.description}
//                               </div>
//                             )}
//                           </div>
//                         </Link>
//                       ))}
//                     </div>
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.href!}
//                     className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
//                       isActivePath(item.href!)
//                         ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
//                         : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//                     } ${underlineEffect} after:bg-blue-600 dark:after:bg-blue-400 ${
//                       isActivePath(item.href!) ? "after:w-full" : "after:w-0 hover:after:w-full"
//                     }`}
//                     onClick={closeMobileMenu}
//                   >
//                     {item.icon && <item.icon className="w-4 h-4" />}
//                     {item.name}
//                   </Link>
//                 )}
//               </div>
//             ))}
//             {/* Mobile Footer */}
//             <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 space-y-3">
//               <div className="flex items-center justify-center space-x-3">
//                 {socialLinks.map((social: SocialLink) => {
//                   const IconComponent = social.icon
//                   return (
//                     <Button
//                       key={social.name}
//                       variant="ghost"
//                       size="icon"
//                       className="w-9 h-9 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
//                       onClick={() => handleSocialClick(social.url)}
//                       aria-label={`Visit our ${social.name} page`}
//                     >
//                       <IconComponent />
//                     </Button>
//                   )
//                 })}
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Button
//                   variant="ghost"
//                   onClick={toggleDarkMode}
//                   className="flex-1 justify-start text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
//                 >
//                   {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
//                   {darkMode ? "Light Mode" : "Dark Mode"}
//                 </Button>
//                 <Button
//                   className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-200"
//                   onClick={() => {
//                     setIsBookNowOpen(true)
//                     closeMobileMenu()
//                   }}
//                 >
//                   Book Now
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }, [isOpen, darkMode, isActivePath, closeMobileMenu, toggleDarkMode, handleSocialClick, navigationItems, socialLinks])

//   // Main component logic
//   const isHomePage = typeof window !== "undefined" ? window.location.pathname === "/" : true
//   const isTransparent = isHomePage && !scrolled && !activeDropdown
//   const logoRestricted = activeDropdown !== null
//   const underlineEffect =
//     "relative after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:transition-all after:duration-300"

//   return (
//     <>
//       <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
//         {isTransparent ? (
//           // Transparent navbar (all elements centered, larger logo)
//           <div className="w-full px-4 py-2">
//             <div className="container mx-auto">
//               <div className="flex items-center justify-center gap-4">
//                 {/* Logo (no underline, larger) */}
//                 <Link
//                   href="/"
//                   className="flex items-center"
//                   onClick={closeMobileMenu}
//                 >
//                   <Image
//                     src="/logo.png"
//                     alt="HIG Production House Logo"
//                     width={logoRestricted ? 96 : 160}
//                     height={logoRestricted ? 64 : 112}
//                     className={`object-contain transition-all duration-300 ${
//                       logoRestricted ? "w-24 h-16" : "w-40 h-28 sm:w-48 sm:h-32"
//                     }`}
//                     priority
//                   />
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex items-center space-x-3">
//                   {navigationItems.map((item) => (
//                     <div
//                       key={item.name}
//                       className="relative group"
//                       onMouseEnter={() => item.dropdown && handleMenuEnter(item.name)}
//                       onMouseLeave={handleMenuLeave}
//                     >
//                       {item.dropdown ? (
//                         <>
//                           <Button
//                             variant="ghost"
//                             className={`flex items-center text-white hover:text-black space-x-1 px-3 py-2 transition-colors duration-200 hover:bg-transparent ${underlineEffect} after:bg-blue-600 group-hover:after:w-full`}
//                             onMouseEnter={() => handleMenuEnter(item.name)}
//                           >
//                             {item.icon && (
//                               <item.icon
//                                 className={`w-4 h-4 mr-1 group-hover:text-black dark:group-hover:text-white transition-colors duration-200`}
//                               />
//                             )}
//                             <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
//                               {item.name}
//                             </span>
//                             <ChevronDown className="w-4 h-4 ml-1" />
//                           </Button>
//                           {activeDropdown === item.name && <DropdownContent item={item} isTransparent={true} />}
//                         </>
//                       ) : (
//                         <Link
//                           href={item.href!}
//                           className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 text-white ${underlineEffect} after:bg-white ${
//                             isActivePath(item.href!) ? "after:w-full" : "after:w-0 group-hover:after:w-full"
//                           }`}
//                         >
//                           {item.icon && <item.icon className="w-4 h-4 mr-1" />}
//                           {item.name}
//                         </Link>
//                       )}
//                     </div>
//                   ))}
//                 </nav>

//                 {/* Right Side Actions */}
//                 <div className="flex items-center space-x-1">
//                   <SocialIcons className="hidden md:flex items-center space-x-1 text-white/80 hover:text-white" />

//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={toggleDarkMode}
//                     className="hidden lg:flex w-8 h-8 text-white hover:text-white/80 transition-all duration-200"
//                     aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//                   >
//                     {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//                   </Button>

//                   <Button
//                     onClick={() => setIsBookNowOpen(true)}
//                     className="hidden lg:flex bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2 rounded-full border border-white/30 transition-all duration-200 text-sm"
//                   >
//                     Book Now
//                   </Button>

//                   {/* Mobile Menu Button */}
//                   <div className="lg:hidden">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={toggleMobileMenu}
//                       className="w-8 h-8 text-white hover:text-white/80 transition-all duration-200"
//                       aria-label="Toggle mobile menu"
//                     >
//                       {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ) : (
//           // Solid navbar (spread layout, with title text, unchanged)
//           <div className="w-full bg-white dark:bg-gray-800 shadow-lg">
//             <div className="container mx-auto px-4 py-2">
//               <div className="flex items-center justify-between h-16">
//                 {/* Logo (no underline) */}
//                 <Link
//                   href="/"
//                   className="flex items-center pl-2 sm:pl-4"
//                   onClick={closeMobileMenu}
//                 >
//                   <Image
//                     src="/logo.png"
//                     alt="HIG Production House Logo"
//                     width={logoRestricted ? 80 : 112}
//                     height={logoRestricted ? 56 : 80}
//                     className={`object-contain transition-all duration-300 ${
//                       logoRestricted ? "w-20 h-14 -my-1" : "w-28 h-10 -my-1"
//                     }`}
//                     priority
//                   />
//                   <span className="hidden sm:block text-gray-900 dark:text-gray-100 font-semibold tracking-wide ml-3 transform transition-all duration-300 translate-x-0">
//                     HIG Production House
//                   </span>
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
//                   {navigationItems.map((item) => (
//                     <div
//                       key={item.name}
//                       className="relative group"
//                       onMouseEnter={() => item.dropdown && handleMenuEnter(item.name)}
//                       onMouseLeave={handleMenuLeave}
//                     >
//                       {item.dropdown ? (
//                         <>
//                           <Button
//                             variant="ghost"
//                             className={`flex items-center text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white space-x-1 px-3 xl:px-4 py-2 transition-colors duration-200 hover:bg-transparent dark:hover:bg-transparent ${underlineEffect} after:bg-blue-600 dark:after:bg-blue-400 group-hover:after:w-full`}
//                             onMouseEnter={() => handleMenuEnter(item.name)}
//                           >
//                             {item.icon && (
//                               <item.icon
//                                 className={`w-4 h-4 mr-1 group-hover:text-black dark:group-hover:text-white transition-colors duration-200`}
//                               />
//                             )}
//                             <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
//                               {item.name}
//                             </span>
//                             <ChevronDown className="w-4 h-4 ml-1" />
//                           </Button>
//                           {activeDropdown === item.name && <DropdownContent item={item} isTransparent={false} />}
//                         </>
//                       ) : (
//                         <Link
//                           href={item.href!}
//                           className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-200 ${underlineEffect} after:bg-blue-600 dark:after:bg-blue-400 ${
//                             isActivePath(item.href!)
//                               ? "text-blue-600 dark:text-blue-400 after:w-full"
//                               : "text-gray-700 dark:text-gray-200 after:w-0 group-hover:after:w-full"
//                           }`}
//                         >
//                           {item.icon && <item.icon className="w-4 h-4 mr-1" />}
//                           {item.name}
//                         </Link>
//                       )}
//                     </div>
//                   ))}
//                 </nav>

//                 {/* Right Side Actions */}
//                 <div className="flex items-center space-x-2 sm:space-x-4 pr-2 sm:pr-4">
//                   <SocialIcons className="hidden md:flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" />

//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     onClick={toggleDarkMode}
//                     className="hidden lg:flex w-8 h-8 sm:w-9 sm:h-9 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
//                     aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
//                   >
//                     {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
//                   </Button>

//                   <Button
//                     onClick={() => setIsBookNowOpen(true)}
//                     className="hidden lg:flex bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-6 py-2 rounded-full transition-all duration-200 text-sm"
//                   >
//                     Book Now
//                   </Button>

//                   {/* Mobile Menu Button */}
//                   <div className="lg:hidden">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={toggleMobileMenu}
//                       className="w-8 h-8 sm:w-9 sm:h-9 text-gray-700 dark:text-gray-200"
//                       aria-label="Toggle mobile menu"
//                     >
//                       {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Mobile Menu */}
//         <MobileMenu />

//         {/* Book Now Modal */}
//         <Dialog open={isBookNowOpen} onOpenChange={setIsBookNowOpen}>
//           <DialogContent className="sm:max-w-3xl w-[95vw] max-h-[90vh] p-0 gap-0 border-0 bg-white text-black">
//             <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-red-500 to-purple-500" />
//             <div className="p-4 sm:p-6 overflow-y-auto">
//               <BookNowForm compact showHeader={false} />
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>
//     </>
//   )
// }









"use client"

import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import {
  Menu,
  X,
  Sun,
  Moon,
  ChevronDown,
  Users,
  Phone,
  ImageIcon,
  Camera,
  Film,
  Music,
  Clapperboard,
  Briefcase,
  Facebook,
  Linkedin,
  Instagram,
} from "lucide-react"
import { BookingForm } from "@/components/BookingForm"

// Pinterest Icon Component
const PinterestIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12c1.018 0 2.006-.133 2.939-.379-1.339-.723-2.028-2.168-2.028-2.168s-.277-1.104-.277-2.615c0-1.53.874-2.676 1.96-2.676.926 0 1.375.695 1.375 1.528 0 .93-.593 2.322-.9 3.616-.256 1.083.544 1.966 1.613 1.966 1.938 0 3.432-2.043 3.432-4.991 0-2.612-1.878-4.439-4.555-4.439-3.103 0-4.924 2.326-4.924 4.732 0 .937.361 1.943.814 2.486.089.108.102.202.075.313-.08.336-.258 1.035-.293 1.181-.046.192-.149.233-.344.14-1.295-.603-2.106-2.494-2.106-4.016 0-3.273 2.378-6.278 6.854-6.278 3.599 0 6.398 2.565 6.398 5.996 0 3.578-2.255 6.456-5.386 6.456-1.051 0-2.041-.547-2.379-1.201 0 0-.52 1.982-.647 2.469-.234.897-.866 2.024-1.289 2.708.97.299 2 .458 3.063.458 6.626 0 12-5.374 12-12S18.626 0 12 0z" />
  </svg>
)

// Types
type DropdownItem = {
  name: string
  href: string
  image?: string
  description?: string
}

type NavigationItem = {
  name: string
  icon?: any
  href?: string
  dropdown?: DropdownItem[]
}

type SocialLink = {
  name: string
  icon: any
  url: string
}

export function Navigation() {
  // State management
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isBookNowOpen, setIsBookNowOpen] = useState(false)
  const menuCloseTimer = useRef<NodeJS.Timeout | null>(null)

  // Memoized navigation items (no Home)
  const navigationItems: NavigationItem[] = useMemo(
    () => [
      { name: "About Us", icon: Users, href: "/about" },
      {
        name: "Services",
        icon: Film,
        dropdown: [
          { name: "Film Shooting", href: "/services/film-shooting", image: "/Film shooting.jpg", description: "Professional film shooting services" },
          { name: "Short Films", href: "/services/short-films", image: "/Short Films/pexels-theshortguyfilms-29187425 - Copy.jpg", description: "Creative short film production" },
          { name: "Wedding Films & Pre/Post Wedding Shoot", href: "/services/wedding-films", image: "/Weeding films Pre Post wedding Shoot.jpg", description: "Memorable wedding films" },
          { name: "Commercial Product Shoot", href: "/services/commercial-shoot", image: "/Commercial Product shoot.jpg", description: "High-quality product photography" },
          { name: "Music Videos", href: "/services/music-videos", image: "/music videos.jpg", description: "Dynamic music video production" },
          { name: "Photography and Event Coverage", href: "/services/photography", image: "/event coverage.jpg", description: "Comprehensive event photography" },
          { name: "Ad Films", href: "/services/ad-films", image: "/Ad Film Shoots/pexels-jose-martin-segura-benites-1422456152-27127418.jpg", description: "Engaging advertisement films" },
          { name: "Corporate Films and Documentaries", href: "/services/corporate-films", image: "/corporate film and documentaries.jpg", description: "Professional corporate films" },
        ],
      },
      { name: "Gallery", icon: ImageIcon, href: "/gallery" },
      { name: "Contact", icon: Phone, href: "#contact" },
    ],
    [],
  )

  // Memoized social links
  const socialLinks: SocialLink[] = useMemo(
    () => [
      { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/19vRveVoGv/" },
      { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/company/higproduction" },
      { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/hig.productionhouse/" },
      { name: "Pinterest", icon: PinterestIcon, url: "https://www.pinterest.com/higproduction" },
    ],
    [],
  )

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (menuCloseTimer.current) {
        clearTimeout(menuCloseTimer.current)
      }
    }
  }, [])

  // Memoized handlers
  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const newMode = !prev
      document.documentElement.classList.toggle("dark", newMode)
      return newMode
    })
  }, [])

  const handleMenuEnter = useCallback((menuName: string) => {
    if (menuCloseTimer.current) {
      clearTimeout(menuCloseTimer.current)
      menuCloseTimer.current = null
    }
    setActiveDropdown(menuName)
  }, [])

  const handleMenuLeave = useCallback(() => {
    menuCloseTimer.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleSocialClick = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }, [])

  // Helper functions
  const isActivePath = useCallback(
    (path: string) => {
      const currentPath = typeof window !== "undefined" ? window.location.pathname : ""
      return currentPath === path
    },
    [],
  )

  // Determine source page and package name
  const isHomePage = typeof window !== "undefined" ? window.location.pathname === "/" : true
  const sourcePage = isHomePage ? "Home Page" : window.location.pathname
  const defaultPackageName = isHomePage ? "" : navigationItems
    .find(item => item.dropdown)
    ?.dropdown?.find(d => d.href === window.location.pathname)?.name || ""

  // Dropdown Content Component
  const DropdownContent = useCallback(
    ({ item, isTransparent }: { item: NavigationItem; isTransparent: boolean }) => {
      if (!item.dropdown) return null

      const baseClasses = isTransparent
        ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-white/20"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"

      const topPosition = isTransparent ? "80px" : "65px"

      return (
        <div
          className={`fixed left-0 right-0 ${baseClasses} border-b shadow-xl z-40`}
          style={{ top: topPosition, width: "100vw" }}
          onMouseEnter={() => handleMenuEnter(item.name)}
          onMouseLeave={handleMenuLeave}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-center flex-wrap gap-4">
                {item.dropdown.map((dropdownItem) => (
                  <Link
                    key={`${item.name}-${dropdownItem.name}`}
                    href={dropdownItem.href}
                    className="flex flex-col items-center gap-3 p-4 min-w-[200px] cursor-pointer hover:bg-cyan-50 dark:hover:bg-cyan-900/50 rounded-lg transition-all duration-200 border border-transparent hover:border-cyan-200 dark:hover:border-cyan-700 group"
                  >
                    <div className="w-20 h-20 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm group-hover:shadow-md transition-shadow duration-200 flex items-center justify-center">
                      <Image
                        src={dropdownItem.image || "/placeholder.svg?height=40&width=40"}
                        alt={dropdownItem.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                        priority={false}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                        {dropdownItem.name}
                      </div>
                      {dropdownItem.description && (
                        <div className="text-xs text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 mt-1 transition-colors duration-200">
                          {dropdownItem.description}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    },
    [handleMenuEnter, handleMenuLeave]
  )

  // Social Icons Component
  const SocialIcons = useCallback(
    ({ className }: { className: string }) => (
      <div className={className}>
        {socialLinks.map((social: SocialLink) => {
          const IconComponent = social.icon
          return (
            <Button
              key={social.name}
              variant="ghost"
              size="icon"
              className="w-8 h-8 transition-all duration-200"
              onClick={() => handleSocialClick(social.url)}
              aria-label={`Visit our ${social.name} page`}
            >
              <IconComponent />
            </Button>
          )
        })}
      </div>
    ),
    [socialLinks, handleSocialClick]
  )

  // Mobile Menu Component
  const MobileMenu = useCallback(() => {
    if (!isOpen) return null

    return (
      <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-2 z-50">
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-4 pt-4 pb-4 space-y-2 max-h-[80vh] overflow-y-auto">
            {/* Home (Logo equivalent) */}
            <Link
              href="/"
              className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                isActivePath("/")
                  ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                  : "text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              onClick={closeMobileMenu}
            >
              <Image
                src="/logo.png"
                alt="HIG Production House Logo"
                width={24}
                height={16}
                className="w-6 h-4 object-contain"
                priority={false}
              />
              Home
            </Link>
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div className="space-y-1">
                    <div className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </div>
                    <div className="flex overflow-x-auto pb-2 gap-3 px-3 py-3">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex flex-col items-center gap-2 p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 rounded-lg border border-transparent hover:border-cyan-200 dark:hover:border-cyan-700 flex-shrink-0 min-w-[140px]"
                          onClick={closeMobileMenu}
                        >
                          <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-lg p-2 shadow-sm flex items-center justify-center">
                            <Image
                              src={dropdownItem.image || "/placeholder.svg?height=32&width=32"}
                              alt={dropdownItem.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-contain"
                              priority={false}
                            />
                          </div>
                          <div className="text-center">
                            <div className="text-xs font-medium text-gray-900 dark:text-gray-100">
                              {dropdownItem.name}
                            </div>
                            {dropdownItem.description && (
                              <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 max-w-[120px] whitespace-normal leading-tight">
                                {dropdownItem.description}
                              </div>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    className={`flex items-center gap-2 px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                      isActivePath(item.href!)
                        ? "text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20"
                        : "text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    } after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:transition-all after:duration-300 after:bg-cyan-500 ${
                      isActivePath(item.href!) ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.icon && <item.icon className="w-4 h-4" />}
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-4 space-y-3">
              <div className="flex items-center justify-center space-x-3">
                {socialLinks.map((social: SocialLink) => {
                  const IconComponent = social.icon
                  return (
                    <Button
                      key={social.name}
                      variant="ghost"
                      size="icon"
                      className="w-9 h-9 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => handleSocialClick(social.url)}
                      aria-label={`Visit our ${social.name} page`}
                    >
                      <IconComponent />
                    </Button>
                  )
                })}
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  variant="ghost"
                  onClick={toggleDarkMode}
                  className="flex-1 justify-start text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {darkMode ? <Sun className="w-4 h-4 mr-2" /> : <Moon className="w-4 h-4 mr-2" />}
                  {darkMode ? "Light Mode" : "Dark Mode"}
                </Button>
                <Button
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full transition-all duration-200"
                  onClick={() => {
                    setIsBookNowOpen(true)
                    closeMobileMenu()
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }, [isOpen, darkMode, isActivePath, closeMobileMenu, toggleDarkMode, handleSocialClick, navigationItems, socialLinks])

  // Main component logic
  const isTransparent = isHomePage && !scrolled && !activeDropdown
  const logoRestricted = activeDropdown !== null

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        {isTransparent ? (
          // Transparent navbar (all elements centered, larger logo)
          <div className="w-full px-4 py-2">
            <div className="container mx-auto">
              <div className="flex items-center justify-center gap-4">
                {/* Logo (no underline, larger) */}
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={closeMobileMenu}
                >
                  <Image
                    src="/logo.png"
                    alt="HIG Production House Logo"
                    width={logoRestricted ? 96 : 160}
                    height={logoRestricted ? 64 : 112}
                    className={`object-contain transition-all duration-300 ${
                      logoRestricted ? "w-24 h-16" : "w-40 h-28 sm:w-48 sm:h-32"
                    }`}
                    priority
                  />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-3">
                  {navigationItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => item.dropdown && handleMenuEnter(item.name)}
                      onMouseLeave={handleMenuLeave}
                    >
                      {item.dropdown ? (
                        <>
                          <Button
                            variant="ghost"
                            className={`flex items-center text-white hover:text-black space-x-1 px-3 py-2 transition-colors duration-200 hover:bg-transparent after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-cyan-500 group-hover:after:w-full after:transition-all after:duration-300`}
                            onMouseEnter={() => handleMenuEnter(item.name)}
                          >
                            {item.icon && (
                              <item.icon
                                className={`w-4 h-4 mr-1 group-hover:text-black dark:group-hover:text-white transition-colors duration-200`}
                              />
                            )}
                            <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                              {item.name}
                            </span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </Button>
                          {activeDropdown === item.name && <DropdownContent item={item} isTransparent={true} />}
                        </>
                      ) : (
                        <Link
                          href={item.href!}
                          className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 text-white after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-cyan-500 ${
                            isActivePath(item.href!) ? "after:w-full" : "after:w-0 group-hover:after:w-full"
                          } after:transition-all after:duration-300`}
                        >
                          {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-1">
                  <SocialIcons className="hidden md:flex items-center space-x-1 text-white/80 hover:text-white" />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDarkMode}
                    className="hidden lg:flex w-8 h-8 text-white hover:text-white/80 transition-all duration-200"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>

                  <Button
                    onClick={() => setIsBookNowOpen(true)}
                    className="hidden lg:flex bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-full border border-white/30 transition-all duration-200 text-sm"
                  >
                    Book Now
                  </Button>

                  {/* Mobile Menu Button */}
                  <div className="lg:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMobileMenu}
                      className="w-8 h-8 text-white hover:text-white/80 transition-all duration-200"
                      aria-label="Toggle mobile menu"
                    >
                      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Solid navbar (spread layout, with title text, unchanged)
          <div className="w-full bg-white dark:bg-gray-800 shadow-lg">
            <div className="container mx-auto px-4 py-2">
              <div className="flex items-center justify-between h-16">
                {/* Logo (no underline) */}
                <Link
                  href="/"
                  className="flex items-center pl-2 sm:pl-4"
                  onClick={closeMobileMenu}
                >
                  <Image
                    src="/logo.png"
                    alt="HIG Production House Logo"
                    width={logoRestricted ? 80 : 112}
                    height={logoRestricted ? 56 : 80}
                    className={`object-contain transition-all duration-300 ${
                      logoRestricted ? "w-20 h-14 -my-1" : "w-28 h-10 -my-1"
                    }`}
                    priority
                  />
                  <span className="hidden sm:block text-gray-900 dark:text-gray-100 font-semibold tracking-wide ml-3 transform transition-all duration-300 translate-x-0">
                    HIG Production House
                  </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 flex-1 justify-center">
                  {navigationItems.map((item) => (
                    <div
                      key={item.name}
                      className="relative group"
                      onMouseEnter={() => item.dropdown && handleMenuEnter(item.name)}
                      onMouseLeave={handleMenuLeave}
                    >
                      {item.dropdown ? (
                        <>
                          <Button
                            variant="ghost"
                            className={`flex items-center text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white space-x-1 px-3 xl:px-4 py-2 transition-colors duration-200 hover:bg-transparent dark:hover:bg-transparent after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-cyan-500 group-hover:after:w-full after:transition-all after:duration-300`}
                            onMouseEnter={() => handleMenuEnter(item.name)}
                          >
                            {item.icon && (
                              <item.icon
                                className={`w-4 h-4 mr-1 group-hover:text-black dark:group-hover:text-white transition-colors duration-200`}
                              />
                            )}
                            <span className="text-sm font-medium group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
                              {item.name}
                            </span>
                            <ChevronDown className="w-4 h-4 ml-1" />
                          </Button>
                          {activeDropdown === item.name && <DropdownContent item={item} isTransparent={false} />}
                        </>
                      ) : (
                        <Link
                          href={item.href!}
                          className={`flex items-center gap-1 px-3 xl:px-4 py-2 text-sm font-medium transition-colors duration-200 after:content-[''] after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-cyan-500 ${
                            isActivePath(item.href!)
                              ? "text-cyan-600 dark:text-cyan-400 after:w-full"
                              : "text-gray-700 dark:text-gray-200 after:w-0 group-hover:after:w-full"
                          } after:transition-all after:duration-300`}
                        >
                          {item.icon && <item.icon className="w-4 h-4 mr-1" />}
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Right Side Actions */}
                <div className="flex items-center space-x-2 sm:space-x-4 pr-2 sm:pr-4">
                  <SocialIcons className="hidden md:flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400" />

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleDarkMode}
                    className="hidden lg:flex w-8 h-8 sm:w-9 sm:h-9 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400"
                    aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </Button>

                  <Button
                    onClick={() => setIsBookNowOpen(true)}
                    className="hidden lg:flex bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 sm:px-6 py-2 rounded-full transition-all duration-200 text-sm"
                  >
                    Book Now
                  </Button>

                  {/* Mobile Menu Button */}
                  <div className="lg:hidden">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMobileMenu}
                      className="w-8 h-8 sm:w-9 sm:h-9 text-gray-700 dark:text-gray-200"
                      aria-label="Toggle mobile menu"
                    >
                      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <MobileMenu />

        {/* Book Now Modal */}
        <Dialog open={isBookNowOpen} onOpenChange={setIsBookNowOpen}>
          <DialogContent className="sm:max-w-3xl w-[95vw] max-h-[90vh] p-0 gap-0 border-0 bg-white text-black">
            <div className="h-1 w-full bg-gradient-to-r from-orange-400 via-red-500 to-purple-500" />
            <div className="p-4 sm:p-6 overflow-y-auto">
              <BookingForm
                packageName={defaultPackageName}
                sourcePage={sourcePage}
                onSuccess={() => setIsBookNowOpen(false)}
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  )
}