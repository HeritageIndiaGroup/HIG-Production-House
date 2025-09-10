import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function CommercialShootPage() {
  return (
    <section className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Commercial Product Shoot</h1>
          <p className="text-gray-600 text-lg mb-6">
            High-quality product photography and videography designed to showcase
            your brand and captivate your customers.
          </p>
          <Button asChild size="lg">
            <a href="/booking">Book a Shoot</a>
          </Button>
        </div>

        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-xl">
          <Image src="/services/commercial-shoot.jpg" alt="Commercial Shoot" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}