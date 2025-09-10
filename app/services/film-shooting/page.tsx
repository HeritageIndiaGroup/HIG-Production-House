import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function FilmShootingPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative h-[70vh] flex items-center justify-center">
        <Image
          src="/services/film-shooting.jpg"
          alt="Film Shooting"
          fill
          className="object-cover opacity-70"
        />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-bold mb-4">Film Shooting</h1>
          <p className="max-w-2xl mx-auto text-lg">
            Professional film production with cinematic quality, advanced equipment,
            and creative storytelling.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href="/booking">Book Your Shoot</a>
          </Button>
        </div>
      </div>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Why Choose Us?</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-gray-300">
          <li className="bg-white/5 p-6 rounded-xl">🎥 4K Ultra HD Shooting</li>
          <li className="bg-white/5 p-6 rounded-xl">👨‍🎨 Creative Direction</li>
          <li className="bg-white/5 p-6 rounded-xl">🏆 Award-Winning Team</li>
        </ul>
      </section>
    </div>
  )
}