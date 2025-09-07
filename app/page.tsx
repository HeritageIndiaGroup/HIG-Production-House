import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WeddingPackages } from "@/components/wedding-packages"
import { MusicVideoPackages } from "@/components/music-video-packages"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { DroneChatWidget } from "@/components/drone-chat-widget"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <WeddingPackages />
      <MusicVideoPackages />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
      <DroneChatWidget />
    </div>
  )
}
