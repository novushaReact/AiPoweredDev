import { motion } from "framer-motion";
import {
  Brain,
  Cloud,
  GitBranch,
  BarChart3,
  Shield,
  Rocket,
} from "lucide-react";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Brain,
      title: "AI-Boosted Development",
      description: "Real-time code optimization with GPT-4 integration",
      features: [
        "Automated code reviews",
        "Smart bug detection",
        "Performance optimization",
      ],
      color: "from-cyan-500 to-blue-500",
      delay: 0,
    },
    {
      icon: Cloud,
      title: "Auto-Scaled AWS Architecture",
      description: "Cost-efficient infrastructure that scales with demand",
      features: [
        "Cost optimization dashboards",
        "Auto-scaling groups",
        "Redundancy management",
      ],
      color: "from-purple-500 to-pink-500",
      delay: 0.2,
    },
    {
      icon: GitBranch,
      title: "Zero-Downtime DevOps",
      description: "Seamless CI/CD pipelines with visual monitoring",
      features: [
        "Blue-green deployments",
        "Automated rollbacks",
        "Pipeline visualizations",
      ],
      color: "from-green-500 to-emerald-500",
      delay: 0.4,
    },
  ];

  const statsVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />
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
            Your AI <span className="gradient-text-cyan-purple">Cavalry</span>{" "}
            Has Arrived
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We don't just talk about AI - we deploy it strategically to solve
            your specific challenges.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: solution.delay }}
                className="group"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
              >
                <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full transition-all duration-500 hover:border-slate-600 hover:bg-slate-800/70 overflow-hidden">
                  {/* Animated background glow */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`}
                  />

                  {/* Content overlay shimmer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000" />

                  <div className="relative">
                    {/* Icon with gradient background */}
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} p-4 mb-6 mx-auto`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.4 },
                      }}
                    >
                      <IconComponent className="w-full h-full text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-white transition-colors">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-center mb-6 leading-relaxed group-hover:text-gray-200 transition-colors">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * featureIndex }}
                        >
                          <motion.div
                            className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}
                            whileHover={{ scale: 1.5 }}
                            transition={{ duration: 0.2 }}
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter with Animation */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            <motion.div
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <BarChart3 className="text-cyan-400" size={24} />
                <span className="text-3xl font-bold text-cyan-400">68%</span>
              </div>
              <p className="text-gray-300">Projects delivered faster</p>
              <p className="text-sm text-gray-500 mt-1">
                vs traditional development
              </p>
            </motion.div>

            <motion.div
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="text-purple-400" size={24} />
                <span className="text-3xl font-bold text-purple-400">
                  99.8%
                </span>
              </div>
              <p className="text-gray-300">Client satisfaction rate</p>
              <p className="text-sm text-gray-500 mt-1">
                based on 500+ projects
              </p>
            </motion.div>

            <motion.div
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Rocket className="text-green-400" size={24} />
                <span className="text-3xl font-bold text-green-400">$2.3M</span>
              </div>
              <p className="text-gray-300">Saved in development costs</p>
              <p className="text-sm text-gray-500 mt-1">
                across our client portfolio
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-12 px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-base sm:text-lg text-gray-300">
            Ready to see these solutions in action? Check out our interactive
            POCs below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
