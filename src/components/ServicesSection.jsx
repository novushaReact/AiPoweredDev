import { motion } from "framer-motion";
import { useState } from "react";
import {
  Layers,
  Cloud,
  GitBranch,
  Brain,
  Smartphone,
  Database,
  X,
  ExternalLink,
  Play,
  DollarSign,
} from "lucide-react";

const ServicesSection = () => {
  const [selectedPOC, setSelectedPOC] = useState(null);

  const services = [
    {
      icon: Layers,
      title: "MERN Stack Apps",
      description: "Full-stack applications with AI-powered features",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      pocDemo: "https://codesandbox.io/embed/mern-ai-demo",
      useCase:
        "E-commerce platform with AI recommendations - saved client $75k annually",
      color: "from-blue-500 to-cyan-500",
      savings: "$75k",
    },
    {
      icon: Cloud,
      title: "AWS Cloud Solutions",
      description: "Scalable infrastructure with cost optimization",
      technologies: ["EC2", "Lambda", "RDS", "CloudFront"],
      pocDemo: "https://aws-cost-optimizer-demo.vercel.app",
      useCase: "Auto-scaling architecture reduced hosting costs by 60%",
      color: "from-orange-500 to-red-500",
      savings: "$50k",
    },
    {
      icon: GitBranch,
      title: "DevOps Automation",
      description: "CI/CD pipelines with zero-downtime deployments",
      technologies: ["Docker", "Kubernetes", "GitHub Actions", "AWS"],
      pocDemo: "https://devops-pipeline-visualizer.com",
      useCase: "Deployment time reduced from 4 hours to 12 minutes",
      color: "from-green-500 to-emerald-500",
      savings: "400x",
    },
    {
      icon: Brain,
      title: "AI Integrations",
      description: "Custom AI solutions for business automation",
      technologies: ["OpenAI", "TensorFlow", "Python", "FastAPI"],
      pocDemo: "https://ai-automation-demo.netlify.app",
      useCase: "Automated customer support reducing response time by 90%",
      color: "from-purple-500 to-pink-500",
      savings: "90%",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform apps with native performance",
      technologies: ["React Native", "Flutter", "iOS", "Android"],
      pocDemo: "https://mobile-app-showcase.web.app",
      useCase: "Cross-platform app reached 1M+ downloads in 6 months",
      color: "from-indigo-500 to-blue-500",
      savings: "1M+",
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Big data processing and analytics platforms",
      technologies: ["PostgreSQL", "Redis", "ElasticSearch", "Apache Kafka"],
      pocDemo: "https://data-analytics-dashboard.com",
      useCase: "Real-time analytics processing 10TB+ data daily",
      color: "from-teal-500 to-green-500",
      savings: "10TB+",
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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-800 text-white relative">
      {/* Scarcity Badge */}
      <motion.div
        className="absolute top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg z-10"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        🔥 Limited Free POCs This Month
      </motion.div>

      <div className="responsive-container">
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
            Build the <span className="gradient-text-gold">Impossible</span>.
            Prove It First.
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Experience our expertise through
            interactive proof-of-concepts.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group cursor-pointer"
                onClick={() => setSelectedPOC(service)}
              >
                {" "}
                <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-4 sm:p-6 h-full transition-all duration-300 hover:border-slate-500 hover:bg-slate-700/70 hover:transform hover:scale-105 hover:shadow-xl">
                  {/* Icon */}
                  <div
                    className={`w-12 sm:w-16 h-12 sm:h-16 rounded-xl bg-gradient-to-br ${service.color} p-3 sm:p-4 mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-slate-600/50 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Savings Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-green-400 text-sm font-semibold">
                      <DollarSign size={16} />
                      <span>Saved: {service.savings}</span>
                    </div>

                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                      <Play size={16} />
                      <span>See Live POC</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  />
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
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-gray-300 mb-6">
            Each POC demonstrates real-world solutions that could transform your
            business.
          </p>
          <div className="inline-flex items-center gap-2 text-gold font-medium">
            <span>Click any service to explore interactive demos</span>
          </div>
        </motion.div>
      </div>

      {/* POC Modal */}
      {selectedPOC && (
        <motion.div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPOC(null)}
        >
          <motion.div
            className="bg-slate-800 border border-slate-600 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-600">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${selectedPOC.color} p-3`}
                >
                  <selectedPOC.icon className="w-full h-full text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{selectedPOC.title}</h3>
                  <p className="text-gray-400">{selectedPOC.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPOC(null)}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Demo Iframe */}
              <div className="bg-slate-900 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="text-gray-400 ml-4 text-sm">
                    {selectedPOC.pocDemo}
                  </span>
                </div>
                <div className="bg-white rounded h-64 flex items-center justify-center text-black">
                  <div className="text-center">
                    <Play size={48} className="mx-auto mb-4 text-gray-600" />
                    <p className="font-medium">Interactive Demo</p>
                    <p className="text-sm text-gray-600">
                      {selectedPOC.title} Showcase
                    </p>
                  </div>
                </div>
              </div>

              {/* Use Case */}
              <div className="bg-slate-700/50 rounded-lg p-6 mb-6">
                <h4 className="text-lg font-semibold mb-3 text-cyan-400">
                  Real Client Success Story
                </h4>
                <p className="text-gray-300 mb-4">{selectedPOC.useCase}</p>
                <div className="flex items-center gap-2 text-green-400">
                  <DollarSign size={20} />
                  <span className="font-semibold">
                    Result: {selectedPOC.savings} improvement
                  </span>
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {selectedPOC.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 bg-slate-600 rounded-lg text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex gap-4">
                <button className="flex-1 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300">
                  Get Your Custom POC
                </button>
                <button className="flex items-center gap-2 px-6 py-3 border border-slate-600 rounded-lg hover:border-slate-500 transition-colors">
                  <ExternalLink size={20} />
                  View Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ServicesSection;
