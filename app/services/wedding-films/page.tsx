// "use client"

// import React, { useState } from "react"
// import { Card } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Check, Star, Crown, Sparkles } from "lucide-react"
// import { Parallax } from 'react-parallax';
// import { Fade } from "react-awesome-reveal";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { BookingForm } from "@/components/BookingForm";

// // Data for Parallax Sections
// const parallaxData = [
//   {
//     title: "The Pre-Wedding Story",
//     image: "/Wedding Shoots/IMG-20250906-WA0013.jpg",
//     content: "Every great love story deserves a beautiful beginning. Our pre-wedding shoots capture the joy and anticipation before your big day, creating timeless portraits and cinematic moments."
//   },
//   {
//     title: "Capturing Every Vow",
//     image: "/Wedding Shoots/IMG-20250906-WA0019.jpg",
//     content: "From the grand entrance to the final farewell, we are there to document the heartfelt emotions and unforgettable moments of your wedding ceremony with artistry and precision."
//   },
//   {
//     title: "A Cinematic Masterpiece",
//     image: "/Wedding Shoots/IMG-20250906-WA0024.jpg",
//     content: "We transform the day's events into a breathtaking wedding film. A cinematic treasure you and your family will cherish for generations to come."
//   },
// ];

// const whatsappNumber = "+917618878887"
// const weddingPackages = [
//  {
//     name: "Bronze Package",
//     originalPrice: "₹74,999",
//     offeredPrice: "₹64,999",
//     icon: Star,
//     description: "Ideal for intimate single-day ceremonies.",
//     images: ["/Wedding Shoots/IMG-20250906-WA0014.jpg", "/Wedding Shoots/IMG-20250906-WA0016.jpg"],
//     features: ["Photography & Videography", "1 Photographer + 1 Videographer", "Premium Album (200 Photos)", "5-Min Highlight Video", "Full Length Wedding Video", "Two Reel Videos"],
//   },
//   {
//     name: "Silver Package",
//     originalPrice: "₹94,999",
//     offeredPrice: "₹84,999",
//     icon: Crown,
//     description: "Includes candid moments and aerial views.",
//     images: ["/Wedding Shoots/IMG-20250906-WA0018.jpg", "/Wedding Shoots/IMG-20250906-WA0021.jpg"],
//     features: ["Candid Photography & Cinematography", "1 Photographer + 1 Videographer + 1 Drone Driver", "Premium Album (300 Photos)", "Wedding Teaser Video", "Edited High-Resolution Images", "Three Reel Videos"],
//   },
//   {
//     name: "Gold Package",
//     originalPrice: "₹1,09,999",
//     offeredPrice: "₹99,999",
//     icon: Sparkles,
//     description: "A complete 4K cinematic experience.",
//     images: ["/Wedding Shoots/IMG-20250906-WA0022.jpg", "/Wedding Shoots/Picsart_25-09-09_15-19-02-184.jpg"],
//     features: ["Full 4K Video Coverage", "2 Photographers + 1 Videographer + 1 Drone", "Cinematic Wedding Film in 4K", "Wedding Teaser Video in 4K", "Two Full Size Photo Frames", "Fast Delivery for all media"],
//   },
//   {
//     name: "Diamond Package",
//     originalPrice: "₹1,49,999",
//     offeredPrice: "₹1,39,999",
//     icon: Sparkles,
//     description: "The ultimate documentary-style coverage.",
//     images: ["/Wedding Shoots/IMG-20250906-WA0023.jpg"],
//     features: ["Extended Documentary Film", "2 Photographers + 2 Videographers + 1 Drone", "Drone Coverage for entire events", "Reels from Each Function", "Three Full Size Photo Frames", "Premium Album (350 Photos)"],
//   },
// ]

// type WeddingPackage = typeof weddingPackages[0];

// const ParallaxSection: React.FC<{image: string; title: string; content: string;}> = ({ image, title, content }) => (
//   <Parallax 
//     bgImage={image} 
//     strength={200}
//     className="relative h-screen bg-black text-white flex items-center justify-center text-center"
//     bgImageStyle={{ backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
//   >
//     <div className="bg-black/50 backdrop-blur-sm p-6 md:p-12 rounded-lg max-w-4xl mx-4 border border-white/20">
//       <Fade direction="up" triggerOnce>
//         <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider mb-4">{title}</h2>
//         <p className="text-md md:text-lg leading-relaxed">{content}</p>
//       </Fade>
//     </div>
//   </Parallax>
// );

// export default function WeddingFilmsClient() {
//   const [selectedPackage, setSelectedPackage] = useState<WeddingPackage | null>(null);
//   const currentPage = "Wedding Films Page"; // Define the name of the current page

//   const handleFormSuccess = () => {
//     setSelectedPackage(null); 
//   };

//   return (
//     <Dialog open={!!selectedPackage} onOpenChange={(isOpen) => !isOpen && setSelectedPackage(null)}>
//       <main className="bg-white">
//         <Parallax
//           bgImage="/Wedding Shoots/pexels-sampark-films-samparkfilms-com-1300296201-32081704.jpg"
//           strength={400}
//           className="h-screen text-white flex items-center justify-center text-center"
//           bgImageStyle={{ backgroundPosition: 'center' }}
//         >
//           <div className="bg-black/50 backdrop-blur-sm p-8 md:p-16 rounded-lg max-w-5xl mx-4 border border-white/20">
//             <Fade direction="down" triggerOnce>
//               <h1 className="text-5xl md:text-7xl font-bold mb-4">Your Forever Story, Told Cinematically</h1>
//               <p className="text-xl md:text-2xl font-light">Crafting Timeless Wedding Films in Varanasi and Beyond</p>
//             </Fade>
//           </div>
//         </Parallax>

//         {parallaxData.map((section, index) => (
//           <ParallaxSection key={index} {...section} />
//         ))}

//         <section id="wedding-packages" className="py-20 bg-slate-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <Fade direction="down" triggerOnce>
//                 <h2 className="text-base font-semibold text-cyan-600 tracking-wider uppercase">Our Wedding Packages</h2>
//                 <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
//                   Choose Your Perfect Story
//                 </p>
//                 <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//                   We've crafted four exclusive packages to perfectly capture your special day. Each one is designed with care, quality, and a touch of cinematic magic.
//                 </p>
//               </Fade>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
//               {weddingPackages.map((pkg) => (
//                 <Fade direction="up" triggerOnce key={pkg.name}>
//                   <PackageCard pkg={pkg} onBookClick={() => setSelectedPackage(pkg)} />
//                 </Fade>
//               ))}
//             </div>
            
//             <div className="text-center mt-16">
//                <p className="text-gray-600 mb-4">
//                 Need a custom package?
//               </p>
//               <Button asChild variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent transition-colors">
//                 <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to request a custom wedding package.")}`} target="_blank" rel="noopener noreferrer">
//                   Contact Us on WhatsApp
//                 </a>
//               </Button>
//             </div>
//           </div>
//         </section>
        
//         <footer className="bg-gray-900 text-gray-300 text-center p-8">
//           <p>&copy; {new Date().getFullYear()} HIG Production House. All Rights Reserved.</p>
//           <p className="text-sm">Based in Varanasi, Uttar Pradesh</p>
//         </footer>
//       </main>

//       <DialogContent className="sm:max-w-[425px]">
//         {selectedPackage && 
//             <BookingForm 
//                 packageName={selectedPackage.name} 
//                 sourcePage={currentPage} 
//                 onSuccess={handleFormSuccess} 
//             />
//         }
//       </DialogContent>
//     </Dialog>
//   )
// }

// const PackageCard = ({ pkg, onBookClick }: { pkg: WeddingPackage, onBookClick: () => void }) => {
//   const Icon = pkg.icon;
//   const popularStyles = "ring-2 ring-cyan-500 ring-offset-2 shadow-2xl shadow-cyan-500/20";

//   return (
//     <div className={`relative flex flex-col rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${popularStyles}`}>
//         <div className="aspect-w-16 aspect-h-9">
//             <img 
//                 src={pkg.images[0]} 
//                 alt={pkg.name} 
//                 className="w-full h-full object-cover rounded-t-2xl"
//             />
//         </div>
//         <div className="p-8 flex flex-col flex-grow">
//             <div className="flex items-center">
//                 <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mr-4">
//                   <Icon className="w-7 h-7 text-cyan-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
//                   <p className="text-sm text-gray-500">{pkg.description}</p>
//                 </div>
//             </div>
//             <div className="my-8 flex items-baseline gap-x-2">
//                 <span className="text-5xl font-bold tracking-tight text-gray-900">{pkg.offeredPrice}</span>
//                 <span className="text-md font-medium text-gray-400 line-through">{pkg.originalPrice}</span>
//             </div>
//             <ul className="flex-grow space-y-3 text-sm leading-6 text-gray-600">
//                 <Fade cascade damping={0.1} triggerOnce>
//                 {pkg.features.map((feature: string) => (
//                     <li key={feature} className="flex gap-x-3">
//                     <Check className="h-6 w-5 flex-none text-cyan-500" aria-hidden="true" />
//                     {feature}
//                     </li>
//                 ))}
//                 </Fade>
//             </ul>
//             <Button onClick={onBookClick} className="mt-8 w-full bg-cyan-600 hover:bg-cyan-500">
//                 Book This Package
//             </Button>
//         </div>
//     </div>
//   );
// };











"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Sparkles } from "lucide-react"
import { Parallax } from 'react-parallax';
import { Fade } from "react-awesome-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BookingForm } from "@/components/BookingForm";
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

// Data for Parallax Sections
const parallaxData = [
  {
    title: "The Pre-Wedding Story",
    image: "/Wedding Shoots/IMG-20250906-WA0013.jpg",
    content: "Every great love story deserves a beautiful beginning. Our pre-wedding shoots capture the joy and anticipation before your big day, creating timeless portraits and cinematic moments."
  },
  {
    title: "Capturing Every Vow",
    image: "/Wedding Shoots/IMG-20250906-WA0019.jpg",
    content: "From the grand entrance to the final farewell, we are there to document the heartfelt emotions and unforgettable moments of your wedding ceremony with artistry and precision."
  },
  {
    title: "A Cinematic Masterpiece",
    image: "/Wedding Shoots/IMG-20250906-WA0024.jpg",
    content: "We transform the day's events into a breathtaking wedding film. A cinematic treasure you and your family will cherish for generations to come."
  },
];

const whatsappNumber = "+917618878887"
const weddingPackages = [
 {
    name: "Bronze Package",
    originalPrice: "₹74,999",
    offeredPrice: "₹64,999",
    icon: Star,
    description: "Ideal for intimate single-day ceremonies.",
    images: ["/Wedding Shoots/IMG-20250906-WA0014.jpg", "/Wedding Shoots/IMG-20250906-WA0016.jpg"],
    features: ["Photography & Videography", "1 Photographer + 1 Videographer", "Premium Album (200 Photos)", "5-Min Highlight Video", "Full Length Wedding Video", "Two Reel Videos"],
  },
  {
    name: "Silver Package",
    originalPrice: "₹94,999",
    offeredPrice: "₹84,999",
    icon: Crown,
    description: "Includes candid moments and aerial views.",
    images: ["/Wedding Shoots/IMG-20250906-WA0018.jpg", "/Wedding Shoots/IMG-20250906-WA0021.jpg"],
    features: ["Candid Photography & Cinematography", "1 Photographer + 1 Videographer + 1 Drone Driver", "Premium Album (300 Photos)", "Wedding Teaser Video", "Edited High-Resolution Images", "Three Reel Videos"],
  },
  {
    name: "Gold Package",
    originalPrice: "₹1,09,999",
    offeredPrice: "₹99,999",
    icon: Sparkles,
    description: "A complete 4K cinematic experience.",
    images: ["/Wedding Shoots/IMG-20250906-WA0022.jpg", "/Wedding Shoots/Picsart_25-09-09_15-19-02-184.jpg"],
    features: ["Full 4K Video Coverage", "2 Photographers + 1 Videographer + 1 Drone", "Cinematic Wedding Film in 4K", "Wedding Teaser Video in 4K", "Two Full Size Photo Frames", "Fast Delivery for all media"],
  },
  {
    name: "Diamond Package",
    originalPrice: "₹1,49,999",
    offeredPrice: "₹1,39,999",
    icon: Sparkles,
    description: "The ultimate documentary-style coverage.",
    images: ["/Wedding Shoots/IMG-20250906-WA0023.jpg"],
    features: ["Extended Documentary Film", "2 Photographers + 2 Videographers + 1 Drone", "Drone Coverage for entire events", "Reels from Each Function", "Three Full Size Photo Frames", "Premium Album (350 Photos)"],
  },
]

type WeddingPackage = typeof weddingPackages[0];

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

export default function WeddingFilmsClient() {
  const [selectedPackage, setSelectedPackage] = useState<WeddingPackage | null>(null);
  const currentPage = "Wedding Films Page"; // Define the name of the current page

  const handleFormSuccess = () => {
    setSelectedPackage(null); 
  };

  return (
    <>
      <Navigation />

      <main className="bg-white pt-16">
        <Parallax
          bgImage="/Wedding Shoots/pexels-sampark-films-samparkfilms-com-1300296201-32081704.jpg"
          strength={400}
          className="h-screen text-white flex items-center justify-center text-center"
          bgImageStyle={{ backgroundPosition: 'center' }}
        >
          <div className="bg-black/50 backdrop-blur-sm p-8 md:p-16 rounded-lg max-w-5xl mx-4 border border-white/20">
            <Fade direction="down" triggerOnce>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">Your Forever Story, Told Cinematically</h1>
              <p className="text-xl md:text-2xl font-light">Crafting Timeless Wedding Films in Varanasi and Beyond</p>
            </Fade>
          </div>
        </Parallax>

        {parallaxData.map((section, index) => (
          <ParallaxSection key={index} {...section} />
        ))}

        <section id="wedding-packages" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <Fade direction="down" triggerOnce>
                <h2 className="text-base font-semibold text-cyan-600 tracking-wider uppercase">Our Wedding Packages</h2>
                <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                  Choose Your Perfect Story
                </p>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                  We've crafted four exclusive packages to perfectly capture your special day. Each one is designed with care, quality, and a touch of cinematic magic.
                </p>
              </Fade>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {weddingPackages.map((pkg) => (
                <Fade direction="up" triggerOnce key={pkg.name}>
                  <PackageCard pkg={pkg} onBookClick={() => setSelectedPackage(pkg)} />
                </Fade>
              ))}
            </div>
            
            <div className="text-center mt-16">
               <p className="text-gray-600 mb-4">
                Need a custom package?
              </p>
              <Button asChild variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent transition-colors">
                <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to request a custom wedding package.")}`} target="_blank" rel="noopener noreferrer">
                  Contact Us on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <Dialog open={!!selectedPackage} onOpenChange={(isOpen) => !isOpen && setSelectedPackage(null)}>
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
    </>
  )
}

const PackageCard = ({ pkg, onBookClick }: { pkg: WeddingPackage, onBookClick: () => void }) => {
  const Icon = pkg.icon;
  const popularStyles = "ring-2 ring-cyan-500 ring-offset-2 shadow-2xl shadow-cyan-500/20";

  return (
    <div className={`relative flex flex-col rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${popularStyles}`}>
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
            <ul className="flex-grow space-y-3 text-sm leading-6 text-gray-600 mb-6">
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