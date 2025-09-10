import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CorporateFilmsPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-xl">
          <Image src="/services/corporate-films.jpg" alt="Corporate Films" fill className="object-cover opacity-80" />
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">Corporate Films & Documentaries</h1>
          <p className="text-gray-300 text-lg mb-6">
            Build your corporate identity with films and documentaries that highlight
            your company’s journey and success stories.
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200">
            <a href="/booking">Book Now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}