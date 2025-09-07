import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Star, Sparkles } from "lucide-react"
import Link from "next/link"

const weddingPackages = [
  {
    name: "Basic Package",
    price: "₹30,000",
    icon: Star,
    description: "Perfect for intimate weddings",
    features: [
      "1 Day Coverage (Wedding)",
      "1 Photographer + 1 Videographer",
      "200 Edited Photos",
      "5–7 min Highlight Film",
      "Social Media Reels (2)",
    ],
    popular: false,
    color: "bg-card",
  },
  {
    name: "Premium Package",
    price: "₹60,000",
    icon: Crown,
    description: "Most popular choice for couples",
    features: [
      "2 Days Coverage (Pre-Wedding + Wedding)",
      "2 Photographers + 2 Videographers",
      "Drone Coverage",
      "400 Edited Photos",
      "10–12 min Cinematic Film",
      "5 Social Media Reels",
    ],
    popular: true,
    color: "bg-primary/5 border-primary",
  },
  {
    name: "Luxury Package",
    price: "₹1,20,000+",
    icon: Sparkles,
    description: "Ultimate wedding experience",
    features: [
      "3 Days Coverage (Pre-Wedding + Wedding + Reception)",
      "3–4 Photographers/Videographers",
      "Drone + Gimbal + Cinematic Setup",
      "Unlimited Edited Photos",
      "20+ min Cinematic Film",
      "Album (30 Pages)",
      "8–10 Social Media Reels",
    ],
    popular: false,
    color: "bg-secondary/5 border-secondary",
  },
]

export function WeddingPackages() {
  return (
    <section id="wedding-packages" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Wedding Packages</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Choose the perfect package for your special day. Each package is designed to capture every precious moment
            of your wedding celebration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {weddingPackages.map((pkg, index) => {
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
                      href={`/booking?serviceCategory=wedding&packageTier=${pkg.name
                        .toLowerCase()
                        .includes("luxury")
                        ? "luxury"
                        : pkg.name.toLowerCase().includes("premium")
                          ? "premium"
                          : "basic"}`}
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
            Need a custom package? We can create a personalized solution for your needs.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link href="/booking">Request Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
