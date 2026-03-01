import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function TeamSection({ teamImages }) {
  const team = [
    {
      name: 'Yasmine El Amrani',
      role: 'CEO & Founder',
      image: teamImages[0],
      bio: 'AI strategist with 10+ years in tech innovation',
    },
    {
      name: 'Karim Benjelloun',
      role: 'CTO',
      image: teamImages[1],
      bio: 'Former Google engineer, ML expert',
    },
    {
      name: 'Sophia Chen',
      role: 'Head of Design',
      image: teamImages[2],
      bio: 'Award-winning UX designer from Silicon Valley',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#CCFF00_12%,transparent_12.5%,transparent_87%,#CCFF00_87.5%,#CCFF00),linear-gradient(150deg,#CCFF00_12%,transparent_12.5%,transparent_87%,#CCFF00_87.5%,#CCFF00),linear-gradient(30deg,#CCFF00_12%,transparent_12.5%,transparent_87%,#CCFF00_87.5%,#CCFF00),linear-gradient(150deg,#CCFF00_12%,transparent_12.5%,transparent_87%,#CCFF00_87.5%,#CCFF00)] bg-[length:80px_140px] bg-[position:0_0,0_0,40px_70px,40px_70px]" />
      </div>

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
            <span className="text-[#0F1729] text-sm font-semibold">Our Team</span>
          </div>
          <h2 className="text-5xl font-bold text-[#0F1729] mb-6">
            Meet the Minds
            <br />
            <span className="bg-gradient-to-r from-[#CCFF00] to-[#00FFD1] bg-clip-text text-transparent">
              Behind InRide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate team of innovators building the future of mobility in Morocco and beyond.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Card Container */}
              <div className="relative">
                {/* Holographic Border Effect */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-1 bg-gradient-to-r from-[#CCFF00] via-[#00FFD1] to-[#CCFF00] rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"
                />

                <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl">
                  {/* Image Container */}
                  <div className="relative h-80 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-[#0F1729] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[#CCFF00] font-semibold mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      {member.bio}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-[#0F1729]/10 hover:bg-gradient-to-r hover:from-[#CCFF00] hover:to-[#00FFD1] flex items-center justify-center transition-all">
                        <Linkedin className="w-5 h-5 text-[#0F1729] hover:text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-[#0F1729]/10 hover:bg-gradient-to-r hover:from-[#CCFF00] hover:to-[#00FFD1] flex items-center justify-center transition-all">
                        <Twitter className="w-5 h-5 text-[#0F1729] hover:text-white" />
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-[#0F1729]/10 hover:bg-gradient-to-r hover:from-[#CCFF00] hover:to-[#00FFD1] flex items-center justify-center transition-all">
                        <Mail className="w-5 h-5 text-[#0F1729] hover:text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
