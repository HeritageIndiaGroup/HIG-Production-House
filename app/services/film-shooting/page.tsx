"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, Camera, Film, Gem } from "lucide-react"
import { Parallax } from 'react-parallax';
import { Fade } from "react-awesome-reveal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BookingForm } from "@/components/BookingForm";

// Film-focused parallax data
const parallaxData = [
  {
    title: "Script & Pre-Production",
    image: "/Film shoots/pexels-ekam-juneja-61080223-34039347.jpg",
    content: "We develop engaging scripts and handle pre-production planning to set the foundation for your film's success."
  },
  {
    title: "On-Set Production",
    image: "/Film shoots/pexels-ryan-scot-mendez-1743509251-33809116.jpg",
    content: "Our experienced crew captures every scene with professional equipment, ensuring high-quality footage and smooth operations."
  },
  {
    title: "Editing & Post-Production",
    image: "/Film shoots/pexels-saikat-ghosh-164424302-12843994.jpg",
    content: "Transform raw footage into a polished film with expert editing, sound design, and visual effects."
  }
];

// Film Packages Data
const whatsappNumber = "+917618878887"
const filmShootPackages = [
  {
    name: "Basic Film Package",
    originalPrice: "₹30,000",
    offeredPrice: "₹25,000",
    icon: Camera,
    description: "Perfect for short films and student projects.",
    images: ["/Film shoots/pexels-shahadat-hossain-1853045-7573640.jpg"],
    features: [
      "1-Day Shoot",
      "Basic Script Review",
      "HD Footage",
      "Simple Editing",
      "1 Final Short Film (5-10 min)",
    ],
    popular: false,
  },
  {
    name: "Standard Package",
    originalPrice: "₹60,000",
    offeredPrice: "₹50,000",
    icon: Film,
    description: "Ideal for independent films and narratives.",
    images: ["/Film shoots/pexels-tkirkgoz-12299480.jpg"],
    features: [
      "2-Day Shoot with Locations",
      "Script Development",
      "4K Footage + Lighting",
      "Advanced Editing & Sound",
      "1 Final Film (10-20 min) + Teaser",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    originalPrice: "₹1,20,000+",
    offeredPrice: "₹1,00,000+",
    icon: Gem,
    description: "Full-scale production for feature films.",
    images: ["/Film shoots/pexels-cottonbro-4427639.jpg"],
    features: [
      "3+ Day Shoot with Full Crew",
      "Complete Pre-Production",
      "Cinematic 4K Output",
      "Full Post-Production (VFX, Scoring)",
      "Multiple Deliverables: Film, Trailers, BTS",
    ],
    popular: false,
  },
]

type FilmPackage = typeof filmShootPackages[0];

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

// Main Client Component for the Film Shoots Page
export default function FilmShootsClient() {
  const [selectedPackage, setSelectedPackage] = useState<FilmPackage | null>(null);
  const currentPage = "Film Shoots Page";

  const handleFormSuccess = () => {
    setSelectedPackage(null); 
  };

  return (
    <main className="bg-white">
      <Parallax
        bgImage="/Film shoots/pexels-cottonbro-4427639.jpg"
        strength={400}
        className="h-screen text-white flex items-center justify-center text-center"
        bgImageStyle={{ backgroundPosition: 'center' }}
      >
        <div className="bg-black/50 backdrop-blur-sm p-8 md:p-16 rounded-lg max-w-5xl mx-4 border border-white/20">
          <Fade direction="down" triggerOnce>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Craft Compelling Stories on Screen</h1>
            <p className="text-xl md:text-2xl font-light">Professional Film Production Services</p>
          </Fade>
        </div>
      </Parallax>

      {parallaxData.map((section, index) => (
        <ParallaxSection key={index} {...section} />
      ))}

      <section id="film-packages" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Fade direction="down" triggerOnce>
              <h2 className="text-base font-semibold text-cyan-600 tracking-wider uppercase">Our Film Production Packages</h2>
              <p className="mt-2 text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                From Script to Screen
              </p>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                We handle every stage of film production to bring your vision to life with creativity and technical excellence.
              </p>
            </Fade>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filmShootPackages.map((pkg) => (
              <Fade direction="up" triggerOnce key={pkg.name}>
                <PackageCard pkg={pkg} onBookClick={() => setSelectedPackage(pkg)} />
              </Fade>
            ))}
          </div>
          
          <div className="text-center mt-16">
             <p className="text-gray-600 mb-4">
              Have a unique story to tell? Let's discuss your film project.
            </p>
            <Button asChild variant="outline" size="lg" className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent transition-colors">
              <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello, I would like to discuss a custom film production project.")}`} target="_blank" rel="noopener noreferrer">
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
const PackageCard = ({ pkg, onBookClick }: { pkg: FilmPackage, onBookClick: () => void }) => {
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