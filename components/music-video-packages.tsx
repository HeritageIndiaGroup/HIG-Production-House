import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Music, Zap, Sparkles } from "lucide-react"
import Link from "next/link"

const musicVideoPackages = [
  {
    name: "Starter Package",
    price: "₹15,000",
    icon: Music,
    description: "Perfect for emerging artists",
    features: [
      "1 Day Shoot (Indoor/Outdoor)",
      "HD Quality Video",
      "Basic Editing + Color Grading",
      "1 Final Music Video (3–5 min)",
    ],
    popular: false,
    color: "bg-card",
  },
  {
    name: "Professional Package",
    price: "₹35,000",
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
    color: "bg-primary/5 border-primary",
  },
  {
    name: "Premium Package",
    price: "₹60,000+",
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
    color: "bg-secondary/5 border-secondary",
  },
]

export function MusicVideoPackages() {
  return (
    <section id="music-videos" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Music Video Packages</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
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
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">{pkg.description}</CardDescription>
                  <div className="text-4xl font-bold text-primary mt-4">{pkg.price}</div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${pkg.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}
                    size="lg"
                  >
                    <Link
                      href={`/booking?serviceCategory=music_video&packageTier=${pkg.name
                        .toLowerCase()
                        .includes("starter")
                        ? "starter"
                        : pkg.name.toLowerCase().includes("professional")
                          ? "professional"
                          : "premium"}`}
                    >
                      Book This Package
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Have a unique concept in mind? Let's discuss your creative vision.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/booking">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
