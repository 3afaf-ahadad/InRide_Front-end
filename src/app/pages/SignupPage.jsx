import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowRight, Chrome, Github, Phone } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';

export function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0F1729] relative overflow-hidden flex items-center justify-center py-12">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,209,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,209,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#00FFD1]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-[#CCFF00]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Back to Home Link */}
      <Link 
        to="/"
        className="absolute top-8 left-8 flex items-center gap-2 text-white/70 hover:text-white transition-colors group"
      >
        <div className="w-10 h-10 bg-gradient-to-br from-[#CCFF00] to-[#00FFD1] rounded-lg flex items-center justify-center">
          <span className="text-[#0F1729] text-xl font-bold">IR</span>
        </div>
        <span className="text-xl font-bold">InRide</span>
      </Link>

      {/* Signup Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md mx-4"
      >
        {/* Holographic Border */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#00FFD1] via-[#CCFF00] to-[#00FFD1] rounded-3xl blur-sm opacity-50" />
        
        <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Join InRide</h1>
            <p className="text-white/60">Create your account and start driving</p>
          </div>

          {/* Social Signup */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <Chrome className="w-5 h-5" />
              <span>Google</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white hover:bg-white/20 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </motion.button>
          </div>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-white/60 bg-gradient-to-b from-[#0F1729] via-[#0F1729] to-transparent">Or create with email</span>
            </div>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="text-white/90 text-sm font-medium mb-2 block">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-3.5 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
            <div>
              <label className="text-white/90 text-sm font-medium mb-2 block">Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-3.5 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                />
              </div>
            </div>

            {/* Phone Field */}
            <div>
              <label className="text-white/90 text-sm font-medium mb-2 block">Phone Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-3.5 w-5 h-5 text-white/40" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+212 6XX XXX XXX"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="text-white/90 text-sm font-medium mb-2 block">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                />
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label className="text-white/90 text-sm font-medium mb-2 block">Confirm Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-3.5 w-5 h-5 text-white/40" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#00FFD1]/50 transition-colors"
                />
              </div>
            </div>

            {/* Terms and Conditions */}
            <label className="flex items-start gap-2 text-white/70 cursor-pointer hover:text-white text-sm">
              <input type="checkbox" className="w-4 h-4 rounded bg-white/10 border border-white/20 mt-1" />
              <span>I agree to the <a href="#" className="text-[#00FFD1] hover:text-[#00FFD1]/80">Terms of Service</a> and <a href="#" className="text-[#00FFD1] hover:text-[#00FFD1]/80">Privacy Policy</a></span>
            </label>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-[#00FFD1] to-[#CCFF00] rounded-xl text-[#0F1729] font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(0,255,209,0.3)] transition-all mt-6"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </form>

          {/* Sign In Link */}
          <p className="text-center text-white/70 text-sm mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-[#00FFD1] hover:text-[#00FFD1]/80 transition-colors font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
