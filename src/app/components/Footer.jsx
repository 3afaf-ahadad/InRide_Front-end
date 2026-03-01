import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0F1729] text-white relative overflow-hidden">
      {/* Top Gradient Line */}
      <div className="h-1 bg-gradient-to-r from-[#CCFF00] via-[#00FFD1] to-[#CCFF00]" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#CCFF00_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#CCFF00] to-[#00FFD1] rounded-lg flex items-center justify-center">
                <span className="text-[#0F1729] text-xl font-bold">IR</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                InRide
              </span>
            </div>
            <p className="text-white/70 leading-relaxed">
              The AI-powered car rental marketplace revolutionizing mobility across Morocco. Drive your way with confidence.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#CCFF00] hover:to-[#00FFD1] flex items-center justify-center transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-white group-hover:text-[#0F1729]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#CCFF00] hover:to-[#00FFD1] flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-white group-hover:text-[#0F1729]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#CCFF00] hover:to-[#00FFD1] flex items-center justify-center transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-white group-hover:text-[#0F1729]" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#CCFF00] hover:to-[#00FFD1] flex items-center justify-center transition-all duration-300 group">
                <Linkedin className="w-5 h-5 text-white group-hover:text-[#0F1729]" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#CCFF00] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#CCFF00] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#CCFF00] transition-colors">Browse Cars</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#CCFF00] transition-colors">List Your Car</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#CCFF00] transition-colors">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/70 hover:text-[#00FFD1] transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#00FFD1] transition-colors">Safety Guidelines</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#00FFD1] transition-colors">Trust & Safety</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#00FFD1] transition-colors">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-[#00FFD1] transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#CCFF00] mt-1 flex-shrink-0" />
                <span className="text-white/70">
                  Twin Center, Boulevard Zerktouni<br />
                  Casablanca, Morocco
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#00FFD1] flex-shrink-0" />
                <a href="tel:+212522123456" className="text-white/70 hover:text-white transition-colors">
                  +212 522 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#CCFF00] flex-shrink-0" />
                <a href="mailto:hello@inride.ma" className="text-white/70 hover:text-white transition-colors">
                  hello@inride.ma
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2026 InRide. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#CCFF00] transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-[#CCFF00] transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-[#CCFF00] transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-32 bg-gradient-to-t from-[#CCFF00]/10 to-transparent blur-3xl" />
    </footer>
  );
}
