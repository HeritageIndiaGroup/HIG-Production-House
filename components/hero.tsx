"use client"

import { Button } from "@/components/ui/button"
import { Play, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0)

  const heroVideos = [
    {
      title: "CINEMATIC WEDDINGS",
      subtitle: "NOW BOOKING FOR 2025",
      description: "Capture your love story with our premium wedding videography",
      cta: "BOOK YOUR DATE",
      video: "/cinematic-wedding-videography-with-bride-and-groom.jpg",
    },
    {
      title: "MUSIC VIDEOS",
      subtitle: "PROFESSIONAL PRODUCTION",
      description: "Bring your music to life with stunning visuals",
      cta: "START YOUR PROJECT",
      video: "/music-video-production-with-artist-performing.jpg",
    },
    {
      title: "COMMERCIAL FILMS",
      subtitle: "BRAND STORYTELLING",
      description: "Tell your brand's story with compelling video content",
      cta: "DISCUSS YOUR VISION",
      video: "/commercial-film-production-with-professional-crew.jpg",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % heroVideos.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <div className="relative w-full h-full">
          <img
            src={heroVideos[currentVideo].video || "/placeholder.svg"}
            alt="HIG Production House"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Gradient overlay for cinematic effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="space-y-8 max-w-3xl">
          {/* Small subtitle */}
          <div className="text-primary font-semibold text-sm md:text-base tracking-wider uppercase">
            {heroVideos[currentVideo].subtitle}
          </div>

          {/* Main title - large and bold */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            {heroVideos[currentVideo].title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
            {heroVideos[currentVideo].description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
            >
              <Link href="/booking" className="flex items-center space-x-2">
                <span>{heroVideos[currentVideo].cta}</span>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-black bg-transparent px-8 py-4 text-lg font-semibold"
            >
              <Link href="#gallery" className="flex items-center space-x-2">
                <Play className="w-5 h-5" />
                <span>WATCH REEL</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {heroVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentVideo(index)}
              className={`w-12 h-1 transition-all duration-300 ${
                index === currentVideo ? "bg-primary" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <ChevronDown className="w-6 h-6 text-white/70" />
      </div>
    </section>
  )
}
