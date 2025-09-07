import Link from "next/link"
import { Film, Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Film className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold">HIG Production House</h3>
                <p className="text-xs text-background/70">Professional Video & Photography</p>
              </div>
            </div>
            <p className="text-sm text-background/80">
              Creating stunning visual stories that capture life's most precious moments. From weddings to music videos,
              we bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/70 hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/70 hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/70 hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-background/70 hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Film Shooting
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Wedding Films
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Music Videos
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Corporate Films
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Commercial Ads
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#home" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#wedding-packages" className="text-background/80 hover:text-primary transition-colors">
                  Wedding Packages
                </Link>
              </li>
              <li>
                <Link href="#music-videos" className="text-background/80 hover:text-primary transition-colors">
                  Music Videos
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-background/80 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/80">
                  Heritage India Agro Producer Company, Tea Estate, Near Durga Temple, Banjarawala Chowk, Dehradun
                  248001
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-background/80">admin@higproductionhouse.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/70">
            © 2024 HIG Production House. All rights reserved. | Designed with ❤️ for capturing memories.
          </p>
        </div>
      </div>
    </footer>
  )
}
