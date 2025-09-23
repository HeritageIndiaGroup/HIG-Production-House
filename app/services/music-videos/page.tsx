// "use client"

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Check, Music, Zap, Sparkles } from "lucide-react"

// const whatsappNumber = "917618878887"

// const musicVideoPackages = [
//   {
//     name: "Starter Package",
//     originalPrice: "₹18,000",
//     offeredPrice: "₹15,000",
//     icon: Music,
//     description: "Perfect for emerging artists",
//     features: [
//       "1 Day Shoot (Indoor/Outdoor)",
//       "HD Quality Video",
//       "Basic Editing + Color Grading",
//       "1 Final Music Video (3–5 min)",
//     ],
//     popular: false,
//     color: "bg-[#f9fafb] border border-[#0891b2]",
//   },
//   {
//     name: "Professional Package",
//     originalPrice: "₹40,000",
//     offeredPrice: "₹35,000",
//     icon: Zap,
//     description: "Most popular for established artists",
//     features: [
//       "2 Day Shoot",
//       "2 Locations + Drone Coverage",
//       "Advanced Editing + Color Grading",
//       "Cinematic Effects",
//       "1 Final Music Video (4–6 min)",
//       "2 Teaser Reels for Social Media",
//     ],
//     popular: true,
//     color: "bg-[#f9fafb] border border-[#0891b2]",
//   },
//   {
//     name: "Premium Package",
//     originalPrice: "₹70,000+",
//     offeredPrice: "₹60,000+",
//     icon: Sparkles,
//     description: "Ultimate music video production",
//     features: [
//       "3–4 Day Shoot",
//       "Multiple Locations",
//       "Full Crew (DOP, Lights, Drone, Set Design)",
//       "4K Cinematic Output",
//       "1 Final Music Video + 4 Social Media Reels",
//       "Behind The Scenes (BTS) Video",
//     ],
//     popular: false,
//     color: "bg-[#f9fafb] border border-[#0891b2]",
//   },
// ]

// const getWhatsAppLink = (packageName: string, offeredPrice: string) => {
//   const message = `Hello, I would like to book the ${packageName} music video package for ${offeredPrice}.`
//   return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
// }

// export default function MusicVideosPage() {
//   return (
//     <section className="py-20 bg-[#f9fafb] text-[#374151]">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-[#0891b2] mb-4">Music Video Packages</h2>
//           <p className="text-lg max-w-3xl mx-auto">
//             Bring your music to life with our professional music video production packages. From concept to final cut,
//             we create visually stunning videos that complement your sound.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {musicVideoPackages.map((pkg, index) => {
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
//                   <CardDescription>{pkg.description}</CardDescription>
//                   <div className="mt-4">
//                     <span className="text-sm line-through text-[#374151] mr-2">{pkg.originalPrice}</span>
//                     <span className="text-3xl font-bold text-[#0891b2]">{pkg.offeredPrice}</span>
//                   </div>
//                 </CardHeader>

//                 <CardContent className="space-y-4">
//                   <ul className="space-y-2">
//                     {pkg.features.map((feature, idx) => (
//                       <li key={idx} className="flex items-start space-x-2">
//                         <Check className="w-5 h-5 text-[#0891b2] mt-0.5 flex-shrink-0" />
//                         <span className="text-sm">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>

//                   <Button
//                     asChild
//                     className="w-full bg-[#0891b2] hover:bg-[#036d91] text-[#f9fafb]"
//                     size="lg"
//                   >
//                     <a href={getWhatsAppLink(pkg.name, pkg.offeredPrice)} target="_blank" rel="noopener noreferrer">
//                       Book This Package
//                     </a>
//                   </Button>
//                 </CardContent>
//               </Card>
//             )
//           })}
//         </div>

//         {/* Custom Quote */}
//         <div className="text-center mt-12">
//           <p className="mb-4">
//             Have a unique concept in mind? Let's discuss your creative vision.
//           </p>
//           <Button
//             asChild
//             variant="outline"
//             size="lg"
//             className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-[#f9fafb] bg-transparent"
//           >
//             <a
//               href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
//                 "Hello, I would like to request a custom music video package."
//               )}`}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Discuss Your Project
//             </a>
//           </Button>
//         </div>
//       </div>
//     </section>
//   )
// }














"use client"

import React, { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Music, Film, Gem } from "lucide-react"
import { Parallax } from 'react-parallax';
import { Fade } from "react-awesome-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BookingForm } from "@/components/BookingForm";

// Music-video-focused parallax data
const parallaxData = [
  {
    title: "Concept & Vision",
    image: "/Music Shoots/92225f1a6f.jpg",
    content: "Every great music video starts with a powerful idea. We collaborate with you to develop a unique concept and storyboard that perfectly captures your artistic vision."
  },
  {
    title: "Cinematic Production",
    image: "/Music Shoots/b675c8d688.jpg",
    content: "Using state-of-the-art equipment and creative lighting, our team brings your vision to life with stunning, high-quality cinematic production."
  },
];

// Music Video Packages Data
const whatsappNumber = "+917618878887"
const musicVideoPackages = [
 {
    name: "Starter Package",
    originalPrice: "₹18,000",
    offeredPrice: "₹15,000",
    icon: Music,
    description: "Perfect for emerging artists.",
    images: ["/Music Shoots/0f750d49a3.jpg"],
    features: [
      "1 Day Shoot (Indoor/Outdoor)",
      "HD Quality Video",
      "Basic Editing + Color Grading",
      "1 Final Music Video (3–5 min)",
    ],
    popular: false,
  },
  {
    name: "Professional Package",
    originalPrice: "₹40,000",
    offeredPrice: "₹35,000",
    icon: Film,
    description: "Most popular for established artists.",
    images: ["/Music Shoots/25f7946ee2.jpg"],
    features: [
      "2 Day Shoot",
      "2 Locations + Drone Coverage",
      "Advanced Editing + Color Grading",
      "Cinematic Effects",
      "1 Final Music Video (4–6 min)",
      "2 Teaser Reels for Social Media",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    originalPrice: "₹70,000+",
    offeredPrice: "₹60,000+",
    icon: Gem,
    description: "Ultimate music video production.",
    images: ["/Music Shoots/e0dbdf11fe.jpg"],
    features: [
      "3–4 Day Shoot",
      "Multiple Locations",
      "Full Crew (DOP, Lights, Drone, Set Design)",
      "4K Cinematic Output",
      "1 Final Music Video + 4 Social Media Reels",
      "Behind The Scenes (BTS) Video",
    ],
    popular: false,
  },
]

// Define the type for a package for type safety
type MusicPackage = typeof musicVideoPackages[0];

// Reusable Parallax Component
const ParallaxSection: React.FC<{image: string; title: string; content: string;}> = ({ image, title, content }) => (
  <Parallax 
    bgImage={image} 
    strength={200}
    className="relative h-screen bg-black text-white flex items-center justify-center text-center"
    bgImageStyle={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
  >
    <div className="bg-black/50 backdrop-blur-sm p-6 md:p-12 rounded-lg max-w-4xl mx-4 border border-white/20">
      <Fade direction="up" triggerOnce>
        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4">{title}</h2>
        <p className="text-md md:text-lg leading-relaxed">{content}</p>
      </Fade>
    </div>
  </Parallax>
);

// Main Client Component for the Music Videos Page
export default function MusicVideosClient() {
  const [selectedPackage, setSelectedPackage] = useState<MusicPackage | null>(null);
  const currentPage = "Music Videos Page"; // This identifies the form's source page

  const handleFormSuccess = () => {
    setSelectedPackage(null); 
  };

  return (
    <Dialog open={!!selectedPackage} onOpenChange={(isOpen) => !isOpen && setSelectedPackage(null)}>
      <main className="bg-white">
        <Parallax
          bgImage="/Music Shoots/pexels-jibarofoto-2091375.jpg"
          strength={400}
          className="h-screen text-white flex items-center justify-center text-center"
          bgImageStyle={{ backgroundPosition: 'center' }}
        >
          <div className="bg-black/50 backdrop-blur-sm p-8 md:p-16 rounded-lg max-w-5xl mx-4 border border-white/20">
            <Fade direction="down" triggerOnce>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Bring Your Music to Life</h1>
              <p className="text-xl md:text-2xl font-light">Professional Music Video Production</p>
            </Fade>
          </div>
        </Parallax>

        {parallaxData.map((section, index) => (
          <ParallaxSection key={index} {...section} />
        ))}

        <section id="music-packages" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Fade direction="down" triggerOnce>
                <h2 className="text-base font-semibold text-cyan-600 tracking-wider uppercase">Our Music Video Packages</h2>
                <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  Find Your Sound's Visual Identity
                </p>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  From concept to final cut, we create visually stunning videos that complement your sound and elevate your brand as an artist.
                </p>
              </Fade>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {musicVideoPackages.map((pkg) => (
                <Fade direction="up" triggerOnce key={pkg.name}>
                  <PackageCard pkg={pkg} onBookClick={() => setSelectedPackage(pkg)} />
                </Fade>
              ))}
            </div>
            
            <div className="text-center mt-16">
               <p className="text-gray-600 mb-4">
                Have a unique concept in mind? Let's discuss your creative vision.
              </p>
              <Button asChild variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent transition-colors">
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to discuss a custom music video project.")}`} target="_blank" rel="noopener noreferrer">
                  Discuss Your Project
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        <footer className="bg-gray-900 text-gray-300 text-center p-8">
          <p>&copy; {new Date().getFullYear()} HIG Production House. All Rights Reserved.</p>
          <p className="text-sm">Based in Varanasi, Uttar Pradesh</p>
        </footer>
      </main>

      <DialogContent className="sm:max-w-[425px]">
        {selectedPackage && 
            <BookingForm 
                packageName={selectedPackage.name} 
                sourcePage={currentPage} 
                onSuccess={handleFormSuccess} 
            />
        }
      </DialogContent>
    </Dialog>
  )
}

// Reusable PackageCard Component
const PackageCard = ({ pkg, onBookClick }: { pkg: MusicPackage, onBookClick: () => void }) => {
  const Icon = pkg.icon;
  const popularStyles = pkg.popular 
    ? "ring-2 ring-cyan-500 ring-offset-2 shadow-2xl shadow-cyan-500/20" 
    : "ring-1 ring-gray-200";

  return (
    <div className={`relative flex flex-col rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${popularStyles}`}>
        {pkg.popular && (
            <p className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white">
            Most Popular
            </p>
        )}
        <div className="aspect-w-16 aspect-h-9">
            <img 
                src={pkg.images[0]} 
                alt={pkg.name} 
                className="w-full h-full object-cover rounded-t-2xl"
            />
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                  <p className="text-sm text-gray-500">{pkg.description}</p>
                </div>
            </div>
            <div className="my-8 flex items-baseline gap-x-2">
                <span className="text-5xl font-bold tracking-tight text-gray-900">{pkg.offeredPrice}</span>
                <span className="text-md font-medium text-gray-400 line-through">{pkg.originalPrice}</span>
            </div>
            <ul className="flex-grow space-y-3 text-sm leading-6 text-gray-600">
                <Fade cascade damping={0.1} triggerOnce>
                {pkg.features.map((feature: string) => (
                    <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-cyan-500" aria-hidden="true" />
                    {feature}
                    </li>
                ))}
                </Fade>
            </ul>
            <Button onClick={onBookClick} className="mt-8 w-full bg-cyan-600 hover:bg-cyan-500">
                Book This Package
            </Button>
        </div>
    </div>
  );
};