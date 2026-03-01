import { motion } from 'motion/react';
import { TrustScoreBadge } from './TrustScoreBadge.jsx';
import { Link } from 'react-router';

export function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1729]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Futuristic SUV in modern city"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F1729]/80 via-[#0F1729]/60 to-[#0F1729]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block px-4 py-2 bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-full">
              <span className="text-[#CCFF00] text-sm font-semibold">AI-Powered Car Rental Marketplace</span>
            </div>

            <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1]">
              <span className="block text-white">Name Your</span>
              <span className="block bg-gradient-to-r from-[#CCFF00] to-[#00FFD1] bg-clip-text text-transparent">
                Price.
              </span>
              <span className="block text-white">Drive Your</span>
              <span className="block bg-gradient-to-r from-[#00FFD1] to-[#CCFF00] bg-clip-text text-transparent">
                Way.
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-lg">
              Experience the future of car rental with AI-driven pricing, instant booking, and verified trusted owners across Morocco.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#CCFF00] to-[#00FFD1] rounded-full text-[#0F1729] font-bold text-lg shadow-[0_0_40px_rgba(204,255,0,0.3)] hover:shadow-[0_0_60px_rgba(204,255,0,0.5)] transition-shadow"
                >
                  Start Renting Now
                </motion.button>
              </Link>
              
              <Link to="/signup">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-bold text-lg hover:bg-white/20 transition-colors"
                >
                  List Your Car
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right Column - TrustScore Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <TrustScoreBadge />
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-3xl"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-[#CCFF00]">1000+</div>
            <div className="text-white/60 mt-2">Verified Cars</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#00FFD1]">50K+</div>
            <div className="text-white/60 mt-2">Happy Renters</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#CCFF00]">98%</div>
            <div className="text-white/60 mt-2">Trust Score</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
