import { LogIn } from 'lucide-react';
import { Link } from 'react-router';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#CCFF00] to-[#00FFD1] rounded-lg flex items-center justify-center">
                <span className="text-[#0F1729] text-xl font-bold">IR</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                InRide
              </span>
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-8">
              <Link to="/" className="text-white/90 hover:text-white transition-colors">
                Home
              </Link>
              
              {/* Login/Signup Button */}
              <Link to="/login">
                <button className="group relative px-6 py-2.5 bg-gradient-to-r from-[#CCFF00] to-[#00FFD1] rounded-full overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(204,255,0,0.5)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00FFD1] to-[#CCFF00] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="relative flex items-center gap-2 text-[#0F1729] font-semibold">
                    <LogIn className="w-4 h-4" />
                    Login / Signup
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
