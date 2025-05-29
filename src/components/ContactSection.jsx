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
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
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
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-gold to-yellow-400 bg-clip-text text-transparent">
              AI-Optimized
            </span>{" "}
            Future
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your development process? Get a free architecture
            audit and discover how AI can accelerate your project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8">What You Get:</h3>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-slate-600 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className={`${benefit.color} mt-1`}>
                      <IconComponent size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-400">{benefit.description}</p>
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
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-2"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              {/* Challenge Dropdown */}
              <div className="mb-6">
                <label
                  htmlFor="challenge"
                  className="block text-sm font-semibold mb-2"
                >
                  What's keeping you up at night? *
                </label>
                <select
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors text-white"
                >
                  <option value="">Select your main challenge</option>
                  {challenges.map((challenge) => (
                    <option key={challenge.value} value={challenge.value}>
                      {challenge.icon} {challenge.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Input */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors text-white placeholder-gray-400 resize-none"
                  placeholder="Tell us about your project, current challenges, and goals..."
                />
              </div>

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

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3 text-green-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <CheckCircle size={20} />
                  <span>Thank you! We'll respond within 2 hours.</span>
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
