// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Check, Star, Crown, Sparkles } from "lucide-react"
// import Link from "next/link"

// const weddingPackages = [
//   {
//     name: "Bronze Package",
//     price: "₹64,999",
//     icon: Star,
//     description: "Full HD coverage for single-side weddings",
//     features: [
//       "Coverage Includes - Photography & Videography",
//       "1 Photographer + 1 Videographer",
//       "Premium Album - 200 Photos | Non-Tearable Sheets",
//       "Highlight Video - Up to 5 mins",
//       "Full Length Wedding Video",
//       "Two Reel Videos",
//     ],
//     popular: false,
//     color: "bg-[#f9fafb] border border-[#0891b2]",
//   },
//   {
//     name: "Silver Package",
//     price: "₹84,999",
//     icon: Crown,
//     description: "Full HD with extended coverage including candid & aerial",
//     features: [
//       "1 Photographer + 1 Videographer + 1 Drone Driver",
//       "Premium Album - 300 Photos | Non-Tearable Sheets",
//       "Full Length Wedding Videos",
//       "Edited High-Resolution Images",
//       "Wedding Teaser Video",
//       "Highlight Video Up to 5 mins",
//       "Three Reel Videos",
//     ],
//     popular: true,
//     color: "bg-[#f9fafb] border border-[#0891b2]",
//   },
//   {
//     name: "Gold Package",
//     price: "₹99,999",
//     icon: Sparkles,
//     description: "4K cinematic coverage for single-side weddings",
//     features: [
//       "2 Photographer + 1 Videographer + 1 Drone Driver",
//       "Premium Album - 300 Photos | Non-Tearable Sheets",
//       "Full Length Wedding Videos",
//       "Drone Coverage for special events",
//       "Edited High-Resolution Images",
//       "Wedding Teaser Video in 4K",
//       "Cinematic Wedding Film in 4K",
//       "Reels from Each Function",
//       "Two Full Size Photo Frames",
//       "Fast Delivery for all media",
//     ],
//     popular: false,
//     color: "bg-[#f9fafb] border border-[#0891b2]",
//   },
//   {
//     name: "Diamond Package",
//     price: "₹1,39,999",
//     icon: Sparkles,
//     description: "Ultimate 4K cinematic wedding experience",
//     features: [
//       "2 Photographer + 2 Videographer + 1 Drone Driver",
//       "Premium Album - 350 Photos | Non-Tearable Sheets",
//       "Full Length Wedding Videos",
//       "Edited High-Resolution Images",
//       "Drone Coverage for entire events",
//       "Wedding Teaser Video in 4K",
//       "Cinematic Wedding Film in 4K",
//       "Reels from Each Function",
//       "Extended Wedding Film (Documentary Style)",
//       "Three Full Size Photo Frames",
//       "Fast Delivery for all media",
//     ],
//     popular: true,
//     color: "bg-[#f9fafb] border border-[#0891b2]",
//   },
// ]

// export default function WeddingFilmsPage() {
//   return (
//     <section className="py-20 bg-[#f9fafb]">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#0891b2] mb-4">Wedding Films</h1>
//           <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed">
//             Capture the magic of your wedding day with cinematic films, pre/post-wedding shoots, and tailored photography packages. Choose a package that suits your dream celebration.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {weddingPackages.map((pkg, index) => {
//             const Icon = pkg.icon
//             return (
//               <Card
//                 key={index}
//                 className={`relative ${pkg.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
//               >
//                 {pkg.popular && (
//                   <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0891b2] text-[#f9fafb]">
//                     Most Popular
//                   </Badge>
//                 )}

//                 <CardHeader className="text-center pb-6">
//                   <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <Icon className="w-8 h-8 text-[#0891b2]" />
//                   </div>
//                   <CardTitle className="text-2xl font-bold text-[#0891b2]">{pkg.name}</CardTitle>
//                   <CardDescription className="text-[#374151]">{pkg.description}</CardDescription>
//                   <div className="text-3xl font-bold text-[#0891b2] mt-4">{pkg.price}</div>
//                 </CardHeader>

//                 <CardContent className="space-y-4">
//                   <ul className="space-y-2">
//                     {pkg.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start space-x-2 text-[#374151]">
//                         <Check className="w-5 h-5 text-[#0891b2] mt-0.5 flex-shrink-0" />
//                         <span className="text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <Button
//                     asChild
//                     className={`w-full ${pkg.popular ? "bg-[#0891b2] hover:bg-[#036d91]" : "bg-[#374151] hover:bg-[#1f2937]"} text-[#f9fafb]`}
//                     size="lg"
//                   >
//                     <Link
//                       href={`/booking?serviceCategory=wedding&packageTier=${pkg.name.toLowerCase()}`}
//                     >
//                       Book This Package
//                     </Link>
//                   </Button>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>

//         <div className="text-center mt-12">
//           <p className="text-[#374151] mb-4">
//             Need a custom package? We can create a personalized solution for your wedding.
//           </p>
//           <Button
//             asChild
//             variant="outline"
//             size="lg"
//             className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-[#f9fafb] bg-transparent"
//           >
//             <Link href="/booking">Request Custom Quote</Link>
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }






"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Crown, Sparkles } from "lucide-react"
import Link from "next/link"

const whatsappNumber = "+917618878887"

const weddingPackages = [
  {
    name: "Bronze Package",
    originalPrice: "₹74,999",
    offeredPrice: "₹64,999",
    icon: Star,
    description: "Full HD coverage for single-side weddings",
    features: [
      "Coverage Includes - Photography & Videography",
      "1 Photographer + 1 Videographer",
      "Premium Album - 200 Photos | Non-Tearable Sheets",
      "Highlight Video - Up to 5 mins",
      "Full Length Wedding Video",
      "Two Reel Videos",
    ],
    popular: false,
    color: "bg-[#f9fafb] border border-[#0891b2]",
  },
  {
    name: "Silver Package",
    originalPrice: "₹94,999",
    offeredPrice: "₹84,999",
    icon: Crown,
    description: "Full HD with extended coverage including candid & aerial",
    features: [
      "1 Photographer + 1 Videographer + 1 Drone Driver",
      "Premium Album - 300 Photos | Non-Tearable Sheets",
      "Full Length Wedding Videos",
      "Edited High-Resolution Images",
      "Wedding Teaser Video",
      "Highlight Video Up to 5 mins",
      "Three Reel Videos",
    ],
    popular: true,
    color: "bg-[#f9fafb] border border-[#0891b2]",
  },
  {
    name: "Gold Package",
    originalPrice: "₹1,09,999",
    offeredPrice: "₹99,999",
    icon: Sparkles,
    description: "4K cinematic coverage for single-side weddings",
    features: [
      "2 Photographer + 1 Videographer + 1 Drone Driver",
      "Premium Album - 300 Photos | Non-Tearable Sheets",
      "Full Length Wedding Videos",
      "Drone Coverage for special events",
      "Edited High-Resolution Images",
      "Wedding Teaser Video in 4K",
      "Cinematic Wedding Film in 4K",
      "Reels from Each Function",
      "Two Full Size Photo Frames",
      "Fast Delivery for all media",
    ],
    popular: false,
    color: "bg-[#f9fafb] border border-[#0891b2]",
  },
  {
    name: "Diamond Package",
    originalPrice: "₹1,49,999",
    offeredPrice: "₹1,39,999",
    icon: Sparkles,
    description: "Ultimate 4K cinematic wedding experience",
    features: [
      "2 Photographer + 2 Videographer + 1 Drone Driver",
      "Premium Album - 350 Photos | Non-Tearable Sheets",
      "Full Length Wedding Videos",
      "Edited High-Resolution Images",
      "Drone Coverage for entire events",
      "Wedding Teaser Video in 4K",
      "Cinematic Wedding Film in 4K",
      "Reels from Each Function",
      "Extended Wedding Film (Documentary Style)",
      "Three Full Size Photo Frames",
      "Fast Delivery for all media",
    ],
    popular: true,
    color: "bg-[#f9fafb] border border-[#0891b2]",
  },
]

export default function WeddingFilmsPage() {
  const getWhatsAppLink = (packageName: string, offeredPrice: string) => {
    const text = encodeURIComponent(
      `Hello, I would like to book the ${packageName} wedding package for ${offeredPrice}.`
    )
    return `https://wa.me/${whatsappNumber}?text=${text}`
  }

  return (
    <section className="py-20 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0891b2] mb-4">Wedding Films</h1>
          <p className="text-lg text-[#374151] max-w-3xl mx-auto leading-relaxed">
            Capture the magic of your wedding day with cinematic films, pre/post-wedding shoots, and tailored photography packages. Choose a package that suits your dream celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {weddingPackages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <Card
                key={index}
                className={`relative ${pkg.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0891b2] text-[#f9fafb]">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#0891b2]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0891b2]">{pkg.name}</CardTitle>
                  <CardDescription className="text-[#374151]">{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-sm line-through text-[#374151] mr-2">{pkg.originalPrice}</span>
                    <span className="text-3xl font-bold text-[#0891b2]">{pkg.offeredPrice}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-[#374151]">
                        <Check className="w-5 h-5 text-[#0891b2] mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-[#0891b2] hover:bg-[#036d91] text-[#f9fafb]"
                    size="lg"
                  >
                    <a
                      href={getWhatsAppLink(pkg.name, pkg.offeredPrice)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Book This Package
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-[#374151] mb-4">
            Need a custom package? We can create a personalized solution for your wedding.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-[#f9fafb] bg-transparent"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello, I would like to request a custom wedding package."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Request Custom Quote
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
