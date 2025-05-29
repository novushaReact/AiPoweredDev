import { motion } from "framer-motion";
import { useState } from "react";
import {
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  Zap,
  Shield,
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    challenge: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const challenges = [
    { value: "scalability", label: "Scalability Issues", icon: "📈" },
    { value: "speed", label: "Development Speed", icon: "⚡" },
    { value: "cost", label: "Cost Optimization", icon: "💰" },
    { value: "devops", label: "DevOps Bottlenecks", icon: "🔧" },
    { value: "ai", label: "AI Integration", icon: "🤖" },
    { value: "security", label: "Security Concerns", icon: "🔒" },
    { value: "other", label: "Other", icon: "❓" },
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Free Architecture Audit",
      description: "Comprehensive analysis of your current setup",
      color: "text-cyan-400",
    },
    {
      icon: Zap,
      title: "Instant Response",
      description: "Get a response within 2 hours",
      color: "text-yellow-400",
    },
    {
      icon: Shield,
      title: "No Commitment",
      description: "Free consultation with no obligations",
      color: "text-green-400",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", challenge: "", message: "" });
    } catch {
      setSubmitStatus("error");
    }

    setIsSubmitting(false);

    // Reset status after 5 seconds
    setTimeout(() => setSubmitStatus(null), 5000);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
            Let's Build Your{" "}
            <span className="gradient-text-gold">AI-Optimized</span> Future
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your development process? Get a free architecture
            audit and discover how AI can accelerate your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 max-w-7xl mx-auto">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 xl:order-1"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              What You Get:
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "rgba(30, 41, 59, 0.5)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <motion.div
                      className={`${benefit.color} mt-1 flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent size={20} className="sm:w-6 sm:h-6" />
                    </motion.div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-white transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Process Timeline */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-cyan-400">
                Our Process:
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center text-black font-bold text-xs">
                    1
                  </div>
                  <span>Submit your challenge below</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    2
                  </div>
                  <span>Get a response within 2 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    3
                  </div>
                  <span>Schedule your free architecture audit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-black font-bold text-xs">
                    4
                  </div>
                  <span>Receive custom AI-powered solution plan</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8"
            >
              {" "}
              {/* Name Input */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Full Name *
                </label>{" "}
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg form-input-enhanced text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              {/* Email Input */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email Address *
                </label>{" "}
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg form-input-enhanced text-white placeholder-gray-400"
                  placeholder="your@email.com"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              {/* Challenge Dropdown */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label
                  htmlFor="challenge"
                  className="block text-sm font-semibold mb-2"
                >
                  What's keeping you up at night? *
                </label>
                <motion.select
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all duration-300 text-white"
                  whileFocus={{ scale: 1.01 }}
                >
                  <option value="">Select your main challenge</option>
                  {challenges.map((challenge) => (
                    <option key={challenge.value} value={challenge.value}>
                      {challenge.icon} {challenge.label}
                    </option>
                  ))}
                </motion.select>
              </motion.div>
              {/* Message Input */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Project Details
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project, current challenges, and goals..."
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>
              {/* Honeypot field (hidden) */}
              <input
                type="text"
                name="honeypot"
                style={{ display: "none" }}
                tabIndex="-1"
                autoComplete="off"
              />
              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Get Free Architecture Audit
                  </>
                )}
              </motion.button>
              {/* Status Messages */}{" "}
              {submitStatus === "success" && (
                <motion.div
                  className="mt-4 p-4 bg-green-500/30 border-2 border-green-400/50 rounded-lg flex items-center gap-3 text-green-300 shadow-lg shadow-green-500/20"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <CheckCircle size={24} className="text-green-400" />
                  <span className="font-medium text-lg">
                    Thank you! We'll respond within 2 hours.
                  </span>
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3 text-red-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={20} />
                  <span>Something went wrong. Please try again.</span>
                </motion.div>
              )}
              {/* Trust Signal */}
              <p className="text-xs text-gray-500 mt-4 text-center">
                🔒 Protected by reCAPTCHA and our Privacy Policy. We never spam.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
