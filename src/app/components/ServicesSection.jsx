import { motion } from 'motion/react';
import { Sparkles, Shield, Zap, Clock, DollarSign, MapPin } from 'lucide-react';

const services = [
  {
    icon: Sparkles,
    title: 'AI-Powered Pricing',
    description: 'Smart algorithms analyze market demand to give you the best price every time.',
    gradient: 'linear-gradient(135deg, #CCFF00, #00FFD1)',
    glowColor: 'rgba(204, 255, 0, 0.3)',
  },
  {
    icon: Shield,
    title: 'TrustScore Verification',
    description: 'Every owner and vehicle is verified through our proprietary AI security system.',
    gradient: 'linear-gradient(135deg, #00FFD1, #0099FF)',
    glowColor: 'rgba(0, 255, 209, 0.3)',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description: 'Book your perfect ride in under 60 seconds. No paperwork, no hassle.',
    gradient: 'linear-gradient(135deg, #CCFF00, #FFD700)',
    glowColor: 'rgba(204, 255, 0, 0.3)',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service powered by AI and human experts.',
    gradient: 'linear-gradient(135deg, #00FFD1, #00BFFF)',
    glowColor: 'rgba(0, 255, 209, 0.3)',
  },
  {
    icon: DollarSign,
    title: 'Flexible Payment',
    description: 'Pay your way with multiple payment options and transparent pricing.',
    gradient: 'linear-gradient(135deg, #CCFF00, #7FFF00)',
    glowColor: 'rgba(204, 255, 0, 0.3)',
  },
  {
    icon: MapPin,
    title: 'Nationwide Coverage',
    description: 'From Casablanca to Marrakech, find verified cars across Morocco.',
    gradient: 'linear-gradient(135deg, #00FFD1, #40E0D0)',
    glowColor: 'rgba(0, 255, 209, 0.3)',
  },
];

export function ServicesSection() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-[#CCFF00]/10 to-transparent blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-[#00FFD1]/10 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-[#0F1729]/5 border border-[#0F1729]/10 rounded-full mb-6">
            <span className="text-[#0F1729] text-sm font-semibold">Our Services</span>
          </div>
          <h2 className="text-5xl font-bold text-[#0F1729] mb-6">
            Everything You Need,
            <br />
            <span className="bg-gradient-to-r from-[#CCFF00] to-[#00FFD1] bg-clip-text text-transparent">
              All in One Place
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of car rental with cutting-edge AI technology and seamless user experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Glow Effect on Hover */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                style={{ 
                  background: `radial-gradient(circle at center, ${service.glowColor}, transparent)`
                }}
              />

              {/* Card */}
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: service.gradient }}>
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-[#0F1729] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
