import { Badge } from "@/components/ui/badge"
import { MessageCircle, Film, Camera, Monitor, CheckCircle } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: MessageCircle,
      title: "Consultation",
      description: "Our experts meet with you to understand your vision for film, photography, or event coverage.",
      highlight: "Free Consultation",
    },
    {
      step: "02",
      icon: Film,
      title: "Creative Planning",
      description: "We craft a customized plan for your project, from short films to corporate documentaries.",
      highlight: "Tailored Creativity",
    },
    {
      step: "03",
      icon: Camera,
      title: "Professional Shooting",
      description: "Our skilled team captures your vision with top-tier equipment for films, weddings, or ads.",
      highlight: "Expert Production",
    },
    {
      step: "04",
      icon: Monitor,
      title: "Editing & Delivery",
      description: "We edit and deliver polished content, ensuring your story shines in every frame.",
      highlight: "Seamless Delivery",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-[#0891b2] border-[#0891b2]">
            How We Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Creative. Professional. Memorable.</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four easy steps to bring your vision to life with our videography and photography services
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const isEven = index % 2 === 0

            return (
              <div key={index} className="relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-32 w-px h-16 bg-gradient-to-b from-[#0891b2] to-transparent transform -translate-x-1/2 z-0"></div>
                )}

                <div
                  className={`flex flex-col lg:flex-row items-center gap-12 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <div className="inline-flex items-center mb-4">
                      <span className="text-sm font-bold text-[#0891b2] bg-[#e6f2f5] px-3 py-1 rounded-full mr-3">
                        STEP {step.step}
                      </span>
                      <span className="text-sm text-gray-500">{step.highlight}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">{step.description}</p>
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-5 h-5 text-[#0891b2] mr-2" />
                      <span className="text-sm text-gray-500">Professional & Certified</span>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="relative">
                      {/* Main circle */}
                      <div className="w-48 h-48 bg-gradient-to-br from-[#e6f2f5] to-white rounded-full flex items-center justify-center border-4 border-white shadow-2xl">
                        <div className="w-24 h-24 bg-[#0891b2] rounded-full flex items-center justify-center">
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Floating elements */}
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#e6f2f5]">
                        <span className="text-sm font-bold text-[#0891b2]">{step.step}</span>
                      </div>

                      {/* Decorative dots */}
                      <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-[#e6f2f5] rounded-full opacity-60"></div>
                      <div className="absolute -top-6 left-8 w-4 h-4 bg-[#0891b2] rounded-full opacity-40"></div>
                      <div className="absolute -right-6 bottom-8 w-6 h-6 bg-[#e6f2f5] rounded-full opacity-50"></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Capture Your Story?</h3>
            <p className="text-gray-600 mb-6">Join countless clients who’ve brought their visions to life with us</p>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-[#0891b2]">1-2</div>
                <div className="text-sm text-gray-500">Days Shooting</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0891b2]">100%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-[#0891b2]">₹0</div>
                <div className="text-sm text-gray-500">Upfront Cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks