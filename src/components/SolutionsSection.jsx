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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your AI{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Cavalry
            </span>{" "}
            Has Arrived
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just talk about AI - we deploy it strategically to solve
            your specific challenges.
          </p>
        </motion.div>

        {/* Solution Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
              >
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 h-full transition-all duration-500 hover:border-slate-600 hover:transform hover:scale-105 hover:bg-slate-800/70">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-center group-hover:text-white transition-colors">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-gray-400"
                      >
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${solution.color}`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover effect overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Counter with Animation */}
        <motion.div
          className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-300">
            Ready to see these solutions in action? Check out our interactive
            POCs below.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;
