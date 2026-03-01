import { motion } from 'motion/react';
import { Shield, Star, CheckCircle2 } from 'lucide-react';

export function TrustScoreBadge() {
  return (
    <div className="relative">
      {/* Holographic Glow Effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-r from-[#00FFD1] to-[#CCFF00] blur-3xl"
      />

      {/* Main Badge */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative"
      >
        {/* Outer Ring - Animated */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00FFD1] via-[#CCFF00] to-[#00FFD1] p-1 blur-sm"
        />

        {/* Glass Background */}
        <div className="relative backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl p-8 shadow-2xl w-80 h-80 flex flex-col items-center justify-center">
          {/* Shield Icon with Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-[#00FFD1] blur-2xl opacity-50" />
            <Shield className="w-20 h-20 text-[#00FFD1] relative z-10" strokeWidth={1.5} />
          </motion.div>

          {/* TrustScore Text */}
          <div className="text-center mb-4">
            <div className="text-white/60 text-sm uppercase tracking-widest mb-2">AI-Verified</div>
            <h3 className="text-3xl font-bold text-white mb-1">TrustScore™</h3>
          </div>

          {/* Score Display */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-7xl font-bold bg-gradient-to-r from-[#CCFF00] to-[#00FFD1] bg-clip-text text-transparent"
            >
              98
            </motion.div>
            <div className="absolute -top-2 -right-8 text-2xl text-[#00FFD1]">%</div>
          </div>

          {/* Features */}
          <div className="space-y-2 w-full">
            <div className="flex items-center gap-2 text-sm text-white/80">
              <CheckCircle2 className="w-4 h-4 text-[#CCFF00]" />
              <span>Real-time Verification</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/80">
              <Star className="w-4 h-4 text-[#00FFD1]" fill="#00FFD1" />
              <span>5000+ Reviews Analyzed</span>
            </div>
          </div>

          {/* Particles Effect */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100],
                opacity: [1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute w-1 h-1 bg-[#CCFF00] rounded-full"
              style={{
                left: `${30 + i * 12}%`,
                bottom: 0,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
