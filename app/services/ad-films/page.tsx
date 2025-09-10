import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AdFilmsPage() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100 py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-indigo-900">Ad Films</h1>
          <p className="text-gray-700 text-lg mb-6">
            Creative ad films designed to engage your audience and promote your
            brand with impact.
          </p>
          <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
            <a href="/booking">Start Campaign</a>
          </Button>
        </div>
        <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-xl">
          <Image src="/services/ad-films.jpg" alt="Ad Films" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}