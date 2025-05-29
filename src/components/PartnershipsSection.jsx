import { motion } from "framer-motion";
import { Award, Shield, CheckCircle } from "lucide-react";

const PartnershipsSection = () => {
  const partners = [
    { name: "AWS", logo: "🟠", certified: true },
    { name: "MongoDB", logo: "🍃", certified: false },
    { name: "Vercel", logo: "▲", certified: false },
    { name: "GitHub", logo: "🐙", certified: false },
    { name: "Docker", logo: "🐳", certified: false },
    { name: "React", logo: "⚛️", certified: false },
    { name: "Node.js", logo: "🟢", certified: false },
    { name: "TypeScript", logo: "🔷", certified: false },
  ];

  const certifications = [
    {
      badge: "AWS Certified DevOps Partner",
      icon: Shield,
      description: "Verified expertise in AWS DevOps practices",
      color: "from-orange-500 to-red-500",
    },
    {
      badge: "ISO 27001 Certified",
      icon: Award,
      description: "Information security management compliance",
      color: "from-blue-500 to-cyan-500",
    },
    {
      badge: "SOC 2 Type II Compliant",
      icon: CheckCircle,
      description: "Security and availability controls verified",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const logoVariants = {
    rest: {
      filter: "grayscale(100%)",
      scale: 1,
    },
    hover: {
      filter: "grayscale(0%)",
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-800 text-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)`,
          }}
        />
      </div>      <div className="responsive-container relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {" "}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Trusted by <span className="gradient-text-gold">Innovators</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're proud to work with industry-leading technologies and maintain
            the highest standards of security and compliance.
          </p>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Security & Compliance Certifications
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-6 text-center h-full transition-all duration-300 hover:border-slate-500 hover:bg-slate-700/70 hover:transform hover:scale-105">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${cert.color} p-4 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </div>

                    {/* Badge Name */}
                    <h4 className="text-lg font-semibold mb-3 group-hover:text-white transition-colors">
                      {cert.badge}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                      {cert.description}
                    </p>

                    {/* Verified Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 text-green-400 text-sm font-medium">
                      <CheckCircle size={16} />
                      <span>Verified</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Partner Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Technology Partners
          </h3>

          <motion.div
            className="grid grid-cols-4 md:grid-cols-8 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="bg-slate-700/30 backdrop-blur-sm border border-slate-600 rounded-xl p-6 flex flex-col items-center justify-center h-24 transition-all duration-300 hover:border-slate-500 hover:bg-slate-700/50"
                  variants={logoVariants}
                  initial="rest"
                  whileHover="hover"
                >
                  {/* Logo */}
                  <div className="text-2xl mb-2">{partner.logo}</div>
                  <div className="text-xs text-gray-400 text-center font-medium">
                    {partner.name}
                  </div>

                  {/* Certified Badge */}
                  {partner.certified && (
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      <CheckCircle className="text-black" size={14} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* AWS Special Highlight */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-6">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-2xl">
              🟠
            </div>
            <div className="text-center">
              <h4 className="text-xl font-bold text-orange-400 mb-2">
                AWS Certified DevOps Partner
              </h4>
              <p className="text-gray-300">
                Official recognition for our expertise in AWS DevOps practices
                and cloud architecture
              </p>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-500 rounded-xl flex items-center justify-center">
              <Award className="text-black" size={32} />
            </div>
          </div>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-green-400 mb-2">
              256-bit
            </div>
            <p className="text-gray-400 text-sm">SSL Encryption</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400 mb-2">2FA</div>
            <p className="text-gray-400 text-sm">Authentication</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400 mb-2">GDPR</div>
            <p className="text-gray-400 text-sm">Compliant</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-2">24/7</div>
            <p className="text-gray-400 text-sm">Monitoring</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnershipsSection;
