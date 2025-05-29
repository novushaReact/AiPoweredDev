import { motion } from "framer-motion";
import { ArrowDown, Brain, Zap, Cpu } from "lucide-react";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("pain-points").scrollIntoView({
      behavior: "smooth",
    });
  };
  const floatingAnimation = {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const particleVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 1.2, 1],
      opacity: [0, 1, 0.8, 1],
      transition: {
        duration: 1.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating AI nodes */}
        <motion.div
          className="absolute top-20 left-1/4"
          animate={floatingAnimation}
        >
          {" "}
          <motion.div
            className="w-3 h-3 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
            variants={particleVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-1/4"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 1 },
          }}
        >
          {" "}
          <motion.div
            className="w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"
            variants={particleVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 left-1/3"
          animate={{
            ...floatingAnimation,
            transition: { ...floatingAnimation.transition, delay: 2 },
          }}
        >
          {" "}
          <motion.div
            className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50"
            variants={particleVariants}
            initial="initial"
            animate="animate"
          />
        </motion.div>

        {/* Neural network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.line
            x1="25%"
            y1="20%"
            x2="75%"
            y2="33%"
            stroke="cyan"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <motion.line
            x1="75%"
            y1="33%"
            x2="33%"
            y2="66%"
            stroke="purple"
            strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
        </svg>
      </div>{" "}
      <div className="responsive-container py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-responsive-y">
          {/* Authority Badge */}
          <motion.div
            className="mb-6 sm:mb-8 px-3 sm:px-4 py-2 bg-gradient-to-r from-gold/20 to-yellow-400/20 border border-gold/30 rounded-full text-xs sm:text-sm"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            ✨ As featured in TechCrunch & Dev.to
          </motion.div>
          {/* Main Headline */}{" "}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 gradient-text-cyan-purple text-shadow-cyan leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            AI-Powered Development
          </motion.h1>
          <motion.h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ship Faster, Scale Smarter
          </motion.h2>
          {/* Sub-headline */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 sm:mb-10 lg:mb-12 max-w-3xl leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            MERN + AWS DevOps experts delivering solutions{" "}
            <span className="text-cyan-400 font-semibold">3x faster</span> with
            AI-augmented teams.
          </motion.p>
          {/* AI Capabilities Showcase */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12 w-full max-w-3xl px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <Brain className="text-cyan-400 flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">AI Code Optimization</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4">
              <Zap className="text-purple-400 flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">Auto-Scaled AWS</span>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 sm:col-span-2 lg:col-span-1">
              <Cpu className="text-green-400 flex-shrink-0" size={20} />
              <span className="text-sm sm:text-base">Zero-Downtime DevOps</span>
            </div>
          </motion.div>
          {/* CTA Button */}{" "}
          <motion.button
            onClick={scrollToNext}
            className="group bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg btn-glow-gold hover:scale-105 touch-target"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Meet Your AI Team
            <ArrowDown
              className="inline-block ml-2 group-hover:translate-y-1 transition-transform"
              size={18}
            />
          </motion.button>
          {/* Stats Counter */}
          <motion.div
            className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center w-full max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-cyan-400">
                68%
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                Faster Delivery
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-400">
                99.8%
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                Client Satisfaction
              </div>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <div className="text-2xl sm:text-3xl font-bold text-green-400">
                500+
              </div>
              <div className="text-gray-300 text-xs sm:text-sm">
                Projects Delivered
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
