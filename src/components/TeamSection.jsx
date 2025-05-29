import { motion } from "framer-motion";
import { Brain, Code, Cloud, Settings, Zap, Users } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Lead AI Architect",
      image: "/api/placeholder/300/300",
      aiTools: [
        "GPT-4 Integration",
        "TensorFlow Optimization",
        "AutoML Pipelines",
      ],
      expertise: "10+ years in ML/AI",
      icon: Brain,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Sarah Rodriguez",
      role: "DevOps Maestro",
      image: "/api/placeholder/300/300",
      aiTools: [
        "Infrastructure as Code AI",
        "Automated Testing",
        "Performance Monitoring",
      ],
      expertise: "AWS Certified Solutions Architect",
      icon: Cloud,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Marcus Thompson",
      role: "Full-Stack Innovator",
      image: "/api/placeholder/300/300",
      aiTools: ["Code Generation AI", "Smart Debugging", "Auto-Documentation"],
      expertise: "React & Node.js Expert",
      icon: Code,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "Dr. Priya Patel",
      role: "Data Science Lead",
      image: "/api/placeholder/300/300",
      aiTools: [
        "Predictive Analytics",
        "Real-time Processing",
        "ML Model Optimization",
      ],
      expertise: "PhD in Computer Science",
      icon: Settings,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const aiCapabilities = [
    { icon: Zap, text: "10x faster code reviews with AI assistance" },
    { icon: Brain, text: "Predictive debugging before issues occur" },
    { icon: Users, text: "AI-augmented project management" },
    { icon: Settings, text: "Automated performance optimization" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="responsive-container relative z-10">
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
            <span className="gradient-text-cyan-purple">Brains + Bots</span>:
            Meet the Dream Team
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            We combine human creativity with AI efficiency to deliver
            extraordinary results.
          </p>
          {/* Core Message */}
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full px-4 sm:px-6 py-2 sm:py-3 max-w-full">
            <Brain className="text-cyan-400 flex-shrink-0" size={20} />
            <span className="text-sm sm:text-base lg:text-lg font-medium text-center">
              Human creativity × AI efficiency = Unstoppable results
            </span>
          </div>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {teamMembers.map((member, index) => {
            const IconComponent = member.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 text-center h-full transition-all duration-500 hover:border-slate-600 hover:bg-slate-800/70 overflow-hidden">
                  {/* Animated background gradient */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}
                  />

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-700" />

                  <div className="relative">
                    {/* Profile Image with AI Icon Overlay */}
                    <div className="relative mb-6 mx-auto w-32 h-32">
                      {/* Profile placeholder with gradient background */}
                      <motion.div
                        className={`w-full h-full rounded-full bg-gradient-to-br ${member.gradient} p-1`}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-full h-full bg-slate-700 rounded-full flex items-center justify-center group-hover:bg-slate-600 transition-colors duration-300">
                          <Users
                            className="text-gray-400 group-hover:text-gray-300 transition-colors"
                            size={40}
                          />
                        </div>
                      </motion.div>

                      {/* AI Icon Orbiting Effect */}
                      <motion.div
                        className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
                        animate={{
                          rotate: 360,
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: {
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear",
                          },
                          scale: {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        whileHover={{ scale: 1.3 }}
                      >
                        <IconComponent className="text-white" size={16} />
                      </motion.div>
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">
                      {member.name}
                    </h3>
                    <p
                      className={`text-transparent bg-gradient-to-r ${member.gradient} bg-clip-text font-semibold mb-3`}
                    >
                      {member.role}
                    </p>

                    {/* Expertise */}
                    <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                      {member.expertise}
                    </p>

                    {/* AI Tools - Shown on Hover */}
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 10 }}
                      whileInView={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-cyan-400 text-xs font-semibold mb-2">
                        AI Tools:
                      </p>
                      <div className="space-y-1">
                        {member.aiTools.map((tool, toolIndex) => (
                          <motion.div
                            key={toolIndex}
                            className="text-xs text-gray-400 bg-slate-700/50 rounded px-2 py-1 hover:bg-slate-600/50 transition-colors cursor-default"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: toolIndex * 0.1,
                              duration: 0.3,
                            }}
                            whileHover={{ scale: 1.05 }}
                          >
                            {tool}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* AI Capabilities Showcase */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            How AI <span className="text-cyan-400">Amplifies</span> Our Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-white" size={20} />
                  </div>
                  <p className="text-sm text-gray-300">{capability.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Isometric Design Visualization */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 p-4 sm:p-8 bg-slate-800/20 backdrop-blur-sm border border-slate-700 rounded-2xl w-full max-w-2xl mx-auto">
            {/* Human Icon */}
            <div className="text-center flex-1 min-w-[90px]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                <Users className="text-white" size={24} />
              </div>
              <p className="text-xs sm:text-sm font-semibold">Human Creativity</p>
            </div>

            {/* Plus Symbol */}
            <div className="text-2xl sm:text-4xl font-bold text-gold">+</div>

            {/* AI Icon */}
            <div className="text-center flex-1 min-w-[90px]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                <Brain className="text-white" size={24} />
              </div>
              <p className="text-xs sm:text-sm font-semibold">AI Efficiency</p>
            </div>

            {/* Equals Symbol */}
            <div className="text-2xl sm:text-4xl font-bold text-gold">=</div>

            {/* Result Icon */}
            <div className="text-center flex-1 min-w-[90px]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                <Zap className="text-white" size={24} />
              </div>
              <p className="text-xs sm:text-sm font-semibold">Extraordinary Results</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
