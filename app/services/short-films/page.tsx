import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ShortFilmsPage() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Short Films</h1>
        <p className="text-gray-300 text-lg mb-10">
          From concept to final cut, we produce short films that tell meaningful stories
          with artistic depth and cinematic excellence.
        </p>
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mx-auto">
          <Image src="/services/short-films.jpg" alt="Short Films" fill className="object-cover" />
        </div>
        <Button asChild size="lg" className="mt-10">
          <a href="/booking">Get Started</a>
        </Button>
      </div>
    </section>
  )
}