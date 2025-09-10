import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PhotographyPage() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Photography & Event Coverage</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image src={`/services/photography-${i}.jpg`} alt={`Photography ${i}`} fill className="object-cover" />
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button asChild size="lg">
            <a href="/booking">Book Photography</a>
          </Button>
        </div>
      </div>
    </section>
  )
}