import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock,
  DollarSign,
  Users,
  Zap,
  TrendingDown,
  ArrowDown,
} from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Projects stuck in endless revisions?",
      description: "Breaking the feedback loop nightmare",
      color: "text-red-400",
    },
    {
      icon: TrendingDown,
      title: "Scaling nightmares on AWS?",
      description: "Infrastructure costs spiraling out of control",
      color: "text-orange-400",
    },
    {
      icon: Clock,
      title: "DevOps bottlenecks slowing releases?",
      description: "Deployment delays killing momentum",
      color: "text-yellow-400",
    },
    {
      icon: Users,
      title: "Hiring devs who miss deadlines?",
      description: "Team productivity falling short",
      color: "text-blue-400",
    },
    {
      icon: Zap,
      title: "AI hype without real results?",
      description: "Empty promises from other agencies",
      color: "text-purple-400",
    },
    {
      icon: DollarSign,
      title: "Burning cash on slow deployments?",
      description: "Time is money, and both are slipping away",
      color: "text-green-400",
    },
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
    <section
      id="pain-points"
      className="py-20 bg-slate-900 text-white relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
            Stuck in Development{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Quicksand?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We've seen these pain points destroy promising projects. Sound
            familiar?
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70 hover:transform hover:scale-105">
                  {/* Glowing hotspot effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-red-500/20 via-orange-500/20 to-yellow-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                  <div className="relative">
                    {/* Icon */}
                    <div className={`${point.color} mb-4 flex justify-center`}>
                      <div className="p-3 bg-slate-700/50 rounded-lg">
                        <IconComponent size={32} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold mb-3 text-center group-hover:text-white transition-colors">
                      {point.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-center text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                      {point.description}
                    </p>

                    {/* Pain indicator */}
                    <div className="mt-4 flex justify-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl text-gray-300 mb-6">
            These problems don't have to define your project's future.
          </p>
          <div className="inline-flex items-center gap-2 text-cyan-400 font-medium">
            <span>Your AI Cavalry is here to help</span>
            <ArrowDown className="animate-bounce" size={20} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
