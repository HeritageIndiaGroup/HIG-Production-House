// import { Hero } from "@/components/hero"
// import { Services } from "@/components/services"
// import { WeddingPackages } from "@/components/wedding-packages"
// import { MusicVideoPackages } from "@/components/music-video-packages"

// import { ImageSlider } from "@/components/image-slider"
// import { Contact } from "@/components/contact"
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { DroneChatWidget } from "@/components/drone-chat-widget"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <Hero />
//       <WeddingPackages />
//       <MusicVideoPackages />
//       <Services />
      
//       <ImageSlider />
//       <Contact />
//       <Footer />
//       <DroneChatWidget />
//     </div>
//   )
// }












// import { Hero } from "@/components/hero"
// import  {ImageSlider}  from "@/components/image-slider"
// import { Contact } from "@/components/contact"
// import { Navigation } from "@/components/navigation"
// import { Footer } from "@/components/footer"
// import { DroneChatWidget } from "@/components/drone-chat-widget"

// export default function HomePage() {
//   return (
//     <div className="min-h-screen bg-background">
//       <Navigation />
//       <Hero />
//       <ImageSlider />
//       <Contact />
//       <Footer />
//       <DroneChatWidget />
//     </div>
//   )
// }











import { Hero } from "@/components/hero"
import { ImageSlider } from "@/components/image-slider";

import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DroneChatWidget } from "@/components/drone-chat-widget"
import AboutHIG from "@/components/AboutHIG" // import the About section
import HowItWorks from "@/components/HowItWorks"
import HIGFAQ from "@/components/HIGFAQ";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutHIG /> {/* Added AboutHIG section after Hero */}
      <HowItWorks />
      <ImageSlider />
      <Contact />
      <HIGFAQ />
      <Footer />
      <DroneChatWidget />
    </div>
  )
}

