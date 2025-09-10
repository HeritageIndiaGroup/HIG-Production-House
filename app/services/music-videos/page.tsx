"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Music, Zap, Sparkles } from "lucide-react"

const whatsappNumber = "917618878887"

const musicVideoPackages = [
  {
    name: "Starter Package",
    originalPrice: "₹18,000",
    offeredPrice: "₹15,000",
    icon: Music,
    description: "Perfect for emerging artists",
    features: [
      "1 Day Shoot (Indoor/Outdoor)",
      "HD Quality Video",
      "Basic Editing + Color Grading",
      "1 Final Music Video (3–5 min)",
    ],
    popular: false,
    color: "bg-[#f9fafb] border border-[#0891b2]",
  },
  {
    name: "Professional Package",
    originalPrice: "₹40,000",
    offeredPrice: "₹35,000",
    icon: Zap,
    description: "Most popular for established artists",
    features: [
      "2 Day Shoot",
      "2 Locations + Drone Coverage",
      "Advanced Editing + Color Grading",
      "Cinematic Effects",
      "1 Final Music Video (4–6 min)",
      "2 Teaser Reels for Social Media",
    ],
    popular: true,
    color: "bg-[#f9fafb] border border-[#0891b2]",
  },
  {
    name: "Premium Package",
    originalPrice: "₹70,000+",
    offeredPrice: "₹60,000+",
    icon: Sparkles,
    description: "Ultimate music video production",
    features: [
      "3–4 Day Shoot",
      "Multiple Locations",
      "Full Crew (DOP, Lights, Drone, Set Design)",
      "4K Cinematic Output",
      "1 Final Music Video + 4 Social Media Reels",
      "Behind The Scenes (BTS) Video",
    ],
    popular: false,
    color: "bg-[#f9fafb] border border-[#0891b2]",
  },
]

const getWhatsAppLink = (packageName: string, offeredPrice: string) => {
  const message = `Hello, I would like to book the ${packageName} music video package for ${offeredPrice}.`
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export default function MusicVideosPage() {
  return (
    <section className="py-20 bg-[#f9fafb] text-[#374151]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#0891b2] mb-4">Music Video Packages</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Bring your music to life with our professional music video production packages. From concept to final cut,
            we create visually stunning videos that complement your sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {musicVideoPackages.map((pkg, index) => {
            const Icon = pkg.icon
            return (
              <Card
                key={index}
                className={`relative ${pkg.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#0891b2] text-[#f9fafb]">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-[#0891b2]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-[#0891b2]" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0891b2]">{pkg.name}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-sm line-through text-[#374151] mr-2">{pkg.originalPrice}</span>
                    <span className="text-3xl font-bold text-[#0891b2]">{pkg.offeredPrice}</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-[#0891b2] mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full bg-[#0891b2] hover:bg-[#036d91] text-[#f9fafb]"
                    size="lg"
                  >
                    <a href={getWhatsAppLink(pkg.name, pkg.offeredPrice)} target="_blank" rel="noopener noreferrer">
                      Book This Package
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Custom Quote */}
        <div className="text-center mt-12">
          <p className="mb-4">
            Have a unique concept in mind? Let's discuss your creative vision.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-[#f9fafb] bg-transparent"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello, I would like to request a custom music video package."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss Your Project
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
