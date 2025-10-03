// "use client"

// import React, { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Check, Camera, Package, Gem } from "lucide-react"
// import { Parallax } from 'react-parallax';
// import { Fade } from "react-awesome-reveal";
// import { Dialog, DialogContent } from "@/components/ui/dialog";
// import { BookingForm } from "@/components/BookingForm";

// // Product-focused parallax data with ALL images used
// const parallaxData = [
//   {
//     title: "Highlight Every Detail",
//     image: "/Product Shoots/pexels-rajesh-tp-749235-1633525.jpg",
//     content: "From intricate textures to vibrant colors, our photography captures every essential detail that makes your product unique and appealing."
//   },
//   {
//     title: "E-commerce Ready Imagery",
//     image: "/Product Shoots/pexels-ahmadkh5-9453448.jpg",
//     content: "High-quality, consistent images are crucial for online sales. We deliver perfectly edited photos optimized for all e-commerce platforms."
//   },
//   // NEW PARALLAX SECTION ADDED to use another image
//   {
//     title: "Lifestyle & In-Context",
//     image: "/Product Shoots/pexels-umarali07-27768597.jpg",
//     content: "We create compelling lifestyle shots that show your product in its natural environment, helping customers envision it in their own lives."
//   }
// ];

// // Product Photography Packages Data with ALL images used
// const whatsappNumber = "+917618878887"
// const productShootPackages = [
//  {
//     name: "Basic E-commerce Package",
//     originalPrice: "₹8,000",
//     offeredPrice: "₹6,500",
//     icon: Camera,
//     description: "Ideal for small product listings with clear, clean shots.",
//     // ADDED MORE IMAGES
//     images: [
//         "/Product Shoots/pexels-valeriya-1961791.jpg",
//         "/Product Shoots/pexels-hemant-saini-2148893253-33363155.jpg"
//     ],
//     features: [
//       "Up to 10 Products",
//       "5 Images per Product (White Background)",
//       "Basic Retouching & Color Correction",
//       "High-Resolution Digital Files",
//       "2-3 Day Delivery",
//     ],
//     popular: false,
//   },
//   {
//     name: "Standard Package",
//     originalPrice: "₹18,000",
//     offeredPrice: "₹15,000",
//     icon: Package,
//     description: "Best for brands needing detailed and styled product images.",
//     images: ["/Product Shoots/shiny-gold-necklace-with-gemstone-drop-pendant-generated-by-ai.jpg"],
//     features: [
//       "Up to 20 Products",
//       "7-10 Images per Product (White/Simple Background)",
//       "Advanced Retouching & Compositing",
//       "Lifestyle & Context Shots (2 products)",
//       "Web & Print Ready Files",
//       "3-5 Day Delivery",
//     ],
//     popular: true,
//   },
//   {
//     name: "Premium Advertising Package",
//     originalPrice: "₹35,000+",
//     offeredPrice: "₹29,000+",
//     icon: Gem,
//     description: "Full creative control for advertising and editorial use.",
//     // ADDED MORE IMAGES
//     images: [
//         "/Product Shoots/shiny-gold-wedding-ring-with-blue-stone-generated-by-ai.jpg",
//         "/Product Shoots/jewels-sparkle-golden-wedding-rings-lying-leather.jpg"
//     ],
//     features: [
//       "Custom Project Quote (Based on needs)",
//       "Creative Concept Development",
//       "Multiple Styled Scene Setups",
//       "Model Integration (Optional, client provides)",
//       "Full Commercial Usage Rights",
//       "Expedited Delivery Available",
//     ],
//     popular: false,
//   },
// ]

// type ProductPackage = typeof productShootPackages[0];

// // Reusable Parallax Component
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

// // Main Client Component for the Product Shoots Page
// export default function ProductShootsClient() {
//   const [selectedPackage, setSelectedPackage] = useState<ProductPackage | null>(null);
//   const currentPage = "Product Shoots Page";

//   const handleFormSuccess = () => {
//     setSelectedPackage(null); 
//   };

//   return (
//     <Dialog open={!!selectedPackage} onOpenChange={(isOpen) => !isOpen && setSelectedPackage(null)}>
//       <main className="bg-white">
//         <Parallax
//           bgImage="/Product Shoots/pexels-noon-27639441.jpg"
//           strength={400}
//           className="h-screen text-white flex items-center justify-center text-center"
//           bgImageStyle={{ backgroundPosition: 'center' }}
//         >
//           <div className="bg-black/50 backdrop-blur-sm p-8 md:p-16 rounded-lg max-w-5xl mx-4 border border-white/20">
//             <Fade direction="down" triggerOnce>
//               <h1 className="text-5xl md:text-7xl font-bold mb-4">Stunning Product Photography</h1>
//               <p className="text-xl md:text-2xl font-light">Showcasing Your Brand's Best Angles</p>
//             </Fade>
//           </div>
//         </Parallax>

//         {parallaxData.map((section, index) => (
//           <ParallaxSection key={index} {...section} />
//         ))}

//         <section id="product-packages" className="py-20 bg-slate-50">
//           <div className="max-w-7xl mx-auto px-6">
//             <div className="text-center mb-16">
//               <Fade direction="down" triggerOnce>
//                 <h2 className="text-base font-semibold text-cyan-600 tracking-wider uppercase">Our Product Photography Packages</h2>
//                 <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
//                   Elevate Your Brand with Perfect Imagery
//                 </p>
//                 <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
//                   High-quality product images are key to engaging your customers and boosting sales. We offer tailored solutions for every need.
//                 </p>
//               </Fade>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//               {productShootPackages.map((pkg) => (
//                 <Fade direction="up" triggerOnce key={pkg.name}>
//                   <PackageCard pkg={pkg} onBookClick={() => setSelectedPackage(pkg)} />
//                 </Fade>
//               ))}
//             </div>
            
//             <div className="text-center mt-16">
//                <p className="text-gray-600 mb-4">
//                 Have specific requirements or a large catalog? Let's create a custom quote.
//               </p>
//               <Button asChild variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent transition-colors">
//                 <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to request a custom product photography quote.")}`} target="_blank" rel="noopener noreferrer">
//                   Request a Custom Quote
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

// // Reusable PackageCard Component
// const PackageCard = ({ pkg, onBookClick }: { pkg: ProductPackage, onBookClick: () => void }) => {
//   const Icon = pkg.icon;
//   const popularStyles = pkg.popular 
//     ? "ring-2 ring-cyan-500 ring-offset-2 shadow-2xl shadow-cyan-500/20" 
//     : "ring-1 ring-gray-200";

//   return (
//     <div className={`relative flex flex-col rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${popularStyles}`}>
//         {pkg.popular && (
//             <p className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white">
//             Most Popular
//             </p>
//         )}
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
import { Check, Camera, Package, Gem } from "lucide-react"
import { Parallax } from 'react-parallax';
import { Fade } from "react-awesome-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BookingForm } from "@/components/BookingForm";

// Product-focused parallax data with ALL images used
const parallaxData = [
  {
    title: "Highlight Every Detail",
    image: "/Product Shoots/pexels-rajesh-tp-749235-1633525.jpg",
    content: "From intricate textures to vibrant colors, our photography captures every essential detail that makes your product unique and appealing."
  },
  {
    title: "E-commerce Ready Imagery",
    image: "/Product Shoots/pexels-ahmadkh5-9453448.jpg",
    content: "High-quality, consistent images are crucial for online sales. We deliver perfectly edited photos optimized for all e-commerce platforms."
  },
  // NEW PARALLAX SECTION ADDED to use another image
  {
    title: "Lifestyle & In-Context",
    image: "/Product Shoots/pexels-umarali07-27768597.jpg",
    content: "We create compelling lifestyle shots that show your product in its natural environment, helping customers envision it in their own lives."
  }
];

// Product Photography Packages Data with ALL images used
const whatsappNumber = "+917618878887"
const productShootPackages = [
  {
    name: "Basic E-commerce Package",
    originalPrice: "₹8,000",
    offeredPrice: "₹6,500",
    icon: Camera,
    description: "Ideal for small product listings with clear, clean shots.",
    // ADDED MORE IMAGES
    images: [
        "/Product Shoots/pexels-valeriya-1961791.jpg",
        "/Product Shoots/pexels-hemant-saini-2148893253-33363155.jpg"
    ],
    features: [
      "Up to 10 Products",
      "5 Images per Product (White Background)",
      "Basic Retouching & Color Correction",
      "High-Resolution Digital Files",
      "2-3 Day Delivery",
    ],
    popular: false,
  },
  {
    name: "Standard Package",
    originalPrice: "₹18,000",
    offeredPrice: "₹15,000",
    icon: Package,
    description: "Best for brands needing detailed and styled product images.",
    images: ["/Product Shoots/shiny-gold-necklace-with-gemstone-drop-pendant-generated-by-ai.jpg"],
    features: [
      "Up to 20 Products",
      "7-10 Images per Product (White/Simple Background)",
      "Advanced Retouching & Compositing",
      "Lifestyle & Context Shots (2 products)",
      "Web & Print Ready Files",
      "3-5 Day Delivery",
    ],
    popular: true,
  },
  {
    name: "Premium Advertising Package",
    originalPrice: "₹35,000+",
    offeredPrice: "₹29,000+",
    icon: Gem,
    description: "Full creative control for advertising and editorial use.",
    // ADDED MORE IMAGES
    images: [
        "/Product Shoots/shiny-gold-wedding-ring-with-blue-stone-generated-by-ai.jpg",
        "/Product Shoots/jewels-sparkle-golden-wedding-rings-lying-leather.jpg"
    ],
    features: [
      "Custom Project Quote (Based on needs)",
      "Creative Concept Development",
      "Multiple Styled Scene Setups",
      "Model Integration (Optional, client provides)",
      "Full Commercial Usage Rights",
      "Expedited Delivery Available",
    ],
    popular: false,
  },
]

type ProductPackage = typeof productShootPackages[0];

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

// Main Client Component for the Product Shoots Page
export default function ProductShootsClient() {
  const [selectedPackage, setSelectedPackage] = useState<ProductPackage | null>(null);
  const currentPage = "Product Shoots Page";

  const handleFormSuccess = () => {
    setSelectedPackage(null); 
  };

  return (
    <main className="bg-white">
      <Parallax
        bgImage="/Product Shoots/pexels-noon-27639441.jpg"
        strength={400}
        className="h-screen text-white flex items-center justify-center text-center"
        bgImageStyle={{ backgroundPosition: 'center' }}
      >
        <div className="bg-black/50 backdrop-blur-sm p-8 md:p-16 rounded-lg max-w-5xl mx-4 border border-white/20">
          <Fade direction="down" triggerOnce>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Stunning Product Photography</h1>
            <p className="text-xl md:text-2xl font-light">Showcasing Your Brand's Best Angles</p>
          </Fade>
        </div>
      </Parallax>

      {parallaxData.map((section, index) => (
        <ParallaxSection key={index} {...section} />
      ))}

      <section id="product-packages" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce>
              <h2 className="text-base font-semibold text-cyan-600 tracking-wider uppercase">Our Product Photography Packages</h2>
              <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                Elevate Your Brand with Perfect Imagery
              </p>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                High-quality product images are key to engaging your customers and boosting sales. We offer tailored solutions for every need.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {productShootPackages.map((pkg) => (
              <Fade direction="up" triggerOnce key={pkg.name}>
                <PackageCard pkg={pkg} onBookClick={() => setSelectedPackage(pkg)} />
              </Fade>
            ))}
          </div>
          
          <div className="text-center mt-16">
             <p className="text-gray-600 mb-4">
              Have specific requirements or a large catalog? Let's create a custom quote.
            </p>
            <Button asChild variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent transition-colors">
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to request a custom product photography quote.")}`} target="_blank" rel="noopener noreferrer">
                Request a Custom Quote
              </a>
            </Button>
          </div>
        </div>
      </section>
      
      <footer className="bg-gray-900 text-gray-300 text-center p-8">
        <p>&copy; {new Date().getFullYear()} HIG Production House. All Rights Reserved.</p>
        <p className="text-sm">Based in Varanasi, Uttar Pradesh</p>
      </footer>

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
    </main>
  )
}

// Reusable PackageCard Component
const PackageCard = ({ pkg, onBookClick }: { pkg: ProductPackage, onBookClick: () => void }) => {
  const Icon = pkg.icon;
  const popularStyles = pkg.popular 
    ? "ring-2 ring-cyan-500 ring-offset-2 shadow-2xl shadow-cyan-500/20" 
    : "ring-1 ring-gray-200";

  return (
    <div className={`relative flex flex-col rounded-2xl bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${popularStyles}`}>
        {pkg.popular && (
          <p className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full bg-cyan-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
          Most Popular
          </p>
        )}
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img 
              src={pkg.images[0]} 
              alt={pkg.name} 
              className="w-full h-full object-cover rounded-t-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 shadow-md">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                <p className="text-sm text-gray-500">{pkg.description}</p>
              </div>
          </div>
          <div className="my-8 flex items-baseline gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900 blur-sm">{pkg.offeredPrice}</span>
              <span className="text-md font-medium text-gray-400 line-through">{pkg.originalPrice}</span>
          </div>
          <ul className="flex-grow space-y-3 text-sm leading-6 text-gray-600 mb-6">
              <Fade cascade damping={0.1} triggerOnce>
              {pkg.features.map((feature: string) => (
                  <li key={feature} className="flex gap-x-3">
                  <Check className="h-6 w-5 flex-none text-cyan-500 mt-0.5" aria-hidden="true" />
                  {feature}
                  </li>
              ))}
              </Fade>
          </ul>
          <p className="text-sm text-gray-500 text-center mb-4 font-medium italic">For More Information, Click On Book Now And Fill The Form.</p>
          <Button onClick={onBookClick} className="mt-auto w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-200">
              Book This Package
          </Button>
        </div>
    </div>
  );
};