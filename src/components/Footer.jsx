import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      url: "#",
      color: "hover:text-gray-300",
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: "#",
      color: "hover:text-cyan-400",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:aipowereddevteam@gmail.com",
      color: "hover:text-gold",
    },
  ];

  const footerLinks = {
    Services: [
      "MERN Stack Development",
      "AWS Cloud Solutions",
      "DevOps Automation",
      "AI Integration",
      "Mobile Development",
      "Data Solutions",
    ],
    Company: [
      "About Us",
      "Our Team",
      "Careers",
      "Blog",
      "Case Studies",
      "Contact",
    ],
    Resources: [
      "Documentation",
      "API Reference",
      "Community",
      "Support",
      "Status Page",
      "Changelog",
    ],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR Compliance",
      "Security",
      "Transparency Report",
    ],
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {" "}
              <h3 className="text-2xl font-bold mb-4 gradient-text-gold">
                AI Dev Team
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming businesses with AI-powered development solutions.
                We combine human creativity with artificial intelligence to
                deliver extraordinary results.
              </p>
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-gold" />
                  <span>Ellis Bridge Ahmedabad 380006</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-gold" />
                  <span>+(91) 9561471054</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-gold" />
                  <span>aipowereddevteam@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(
            ([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm flex items-center gap-2 group"
                      >
                        {link}
                        <ExternalLink
                          size={12}
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          )}
        </div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-6 mt-12 pt-8 border-t border-slate-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <motion.a
                key={index}
                href={social.url}
                className={`p-3 bg-slate-800 border border-slate-700 rounded-full transition-all duration-300 hover:border-slate-600 hover:bg-slate-700 ${social.color}`}
                variants={iconVariants}
                initial="rest"
                whileHover="hover"
                whileTap={{ scale: 0.9 }}
              >
                <IconComponent size={20} />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-12 pt-8 border-t border-slate-800 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
          <p className="text-gray-400 mb-6">
            Get the latest AI development insights and project showcases
          </p>

          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold focus:outline-none transition-colors text-white placeholder-gray-400"
            />
            <button className="bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-gold/50 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-slate-950">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              © 2025 AI Dev Team. All rights reserved.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              className="flex items-center gap-4 text-xs text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span>2FA Enabled</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                <span>GDPR Compliant</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
